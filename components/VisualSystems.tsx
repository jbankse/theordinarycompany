'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Matter from 'matter-js';

const letters = "ORDINARY".split('');

export default function VisualSystems() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const letterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const letterBodiesRef = useRef<Matter.Body[]>([]);
  
  const [resetKey, setResetKey] = useState(0);

  // Initialize Physics Engine
  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    // 1. Setup Matter.js Engine
    const engine = Matter.Engine.create();
    engineRef.current = engine;
    
    // 2. Setup Renderer (Invisible, just for physics calculations, but we'll draw the particles on it)
    const render = Matter.Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
        background: 'transparent',
        wireframes: false,
        hasBounds: false,
      }
    });
    renderRef.current = render;

    // 3. Create boundaries so particles don't fall forever
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    const wallOptions = { isStatic: true, render: { visible: false } };
    
    Matter.World.add(engine.world, [
      Matter.Bodies.rectangle(width / 2, height + 50, width * 2, 100, wallOptions), // Bottom
      Matter.Bodies.rectangle(-50, height / 2, 100, height * 2, wallOptions), // Left
      Matter.Bodies.rectangle(width + 50, height / 2, 100, height * 2, wallOptions), // Right
    ]);

    // 4. Create dynamic bodies for the DOM letters
    // We wait a tiny bit for the DOM to render the letters first
    setTimeout(() => {
      if (!containerRef.current) return;
      const newLetterBodies: Matter.Body[] = [];
      const containerRect = containerRef.current.getBoundingClientRect();
      
      letterRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        
        // Calculate relative position
        const x = rect.left - containerRect.left + rect.width / 2;
        const y = rect.top - containerRect.top + rect.height / 2;
        
        // Get the initial rotation we assigned to the DOM element
        const randomRot = Math.sin(i * 5.2) * 45;
        
        // Create a dynamic physics body for the letter
        // We make it a solid body so shapes can collide with it
        const body = Matter.Bodies.rectangle(x, y + (rect.height * 0.1), rect.width * 0.5, rect.height * 0.6, {
          isStatic: false, // Now affected by gravity!
          restitution: 0.5, // Bounciness
          friction: 0.2,
          density: 0.05,
          render: { visible: false },
          chamfer: { radius: 15 }
        });
        
        // Apply initial rotation to match the DOM
        Matter.Body.setAngle(body, (randomRot * Math.PI) / 180);
        
        newLetterBodies.push(body);
      });
      
      letterBodiesRef.current = newLetterBodies;
      Matter.World.add(engine.world, newLetterBodies);
    }, 100); // Reduced timeout since we aren't waiting for Framer Motion anymore

    // 5. Start the engine
    Matter.Render.run(render);
    const runner = Matter.Runner.create();
    runnerRef.current = runner;
    Matter.Runner.run(runner, engine);

    // 6. Spawn Primitive Shapes instead of particles
    const spawnPrimitives = () => {
      if (!containerRef.current || !engineRef.current) return;
      const width = containerRef.current.clientWidth;
      
      const shapes = [
        // Red Circle
        Matter.Bodies.circle(width * 0.2, -50, 80, {
          restitution: 0.6,
          friction: 0.1,
          density: 0.05,
          render: { fillStyle: '#FF0000' },
          label: 'primitive'
        }),
        // Yellow Triangle (Polygon with 3 sides)
        Matter.Bodies.polygon(width * 0.4, -150, 3, 100, {
          restitution: 0.4,
          friction: 0.2,
          density: 0.05,
          render: { fillStyle: '#FFD700' },
          label: 'primitive'
        }),
        // Green Square
        Matter.Bodies.rectangle(width * 0.6, -250, 160, 160, {
          restitution: 0.2,
          friction: 0.3,
          density: 0.05,
          render: { fillStyle: '#00FF00' },
          label: 'primitive'
        }),
        // Blue Rectangle
        Matter.Bodies.rectangle(width * 0.8, -350, 240, 120, {
          restitution: 0.3,
          friction: 0.2,
          density: 0.05,
          render: { fillStyle: '#0000FF' },
          label: 'primitive'
        })
      ];
      
      Matter.World.add(engineRef.current.world, shapes);
    };

    // Wait a moment for letters to settle, then drop the shapes
    const dropTimer = setTimeout(spawnPrimitives, 1500);

    // 7. Add Mouse Control for the physics bodies
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });
    Matter.World.add(engine.world, mouseConstraint);

    // Cleanup
    return () => {
      clearTimeout(dropTimer);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
      if (render.canvas) {
        render.canvas.remove();
      }
      render.canvas = null as any;
      render.context = null as any;
      render.textures = {};
    };
  }, [resetKey]); // Re-run when reset is clicked

  // Sync DOM elements to Physics bodies on every frame
  useEffect(() => {
    if (!engineRef.current) return;

    let animationFrameId: number;

    const syncDOMToPhysics = () => {
      letterBodiesRef.current.forEach((body, index) => {
        const el = letterRefs.current[index];
        if (body && el && containerRef.current) {
          const containerRect = containerRef.current.getBoundingClientRect();
          
          // Calculate the new X and Y offsets from the center of the container
          // Matter.js gives absolute pixel coordinates, we need to convert to relative offsets
          const centerX = containerRect.width / 2;
          const centerY = containerRect.height / 2;
          
          const xOffset = body.position.x - centerX;
          const yOffset = body.position.y - centerY;
          
          // Apply the transform directly to the DOM element for maximum performance
          el.style.transform = `translate(-50%, -50%) translate(${xOffset}px, ${yOffset}px) rotate(${body.angle}rad)`;
        }
      });
      
      animationFrameId = requestAnimationFrame(syncDOMToPhysics);
    };

    // Start syncing immediately
    animationFrameId = requestAnimationFrame(syncDOMToPhysics);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [resetKey]);

  // Drawing State
  const [isDrawing, setIsDrawing] = useState(false);
  const [isErasing, setIsErasing] = useState(false);
  const [drawColor, setDrawColor] = useState('#121212');
  const lastDrawPos = useRef<{x: number, y: number} | null>(null);
  const drawnBodiesRef = useRef<Matter.Body[]>([]);

  // Handle Drawing
  const handlePointerDown = (e: React.PointerEvent) => {
    // Only draw if we're clicking on the background canvas, not a letter
    if ((e.target as HTMLElement).tagName !== 'CANVAS') return;
    
    // Check if we clicked on a physics body (like a shape)
    // If we did, Matter.MouseConstraint handles the dragging, so we shouldn't draw
    if (engineRef.current && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const mousePos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
      
      const bodies = Matter.Composite.allBodies(engineRef.current.world);
      // Filter out static bodies (walls, drawing lines)
      const dynamicBodies = bodies.filter(b => !b.isStatic);
      
      const clickedBodies = Matter.Query.point(dynamicBodies, mousePos);
      if (clickedBodies.length > 0) {
        return; // We clicked a shape, let Matter.js handle the drag
      }
    }
    
    setIsDrawing(true);
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      lastDrawPos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDrawing || !engineRef.current || !containerRef.current || !lastDrawPos.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const currentPos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };

    if (isErasing) {
      // Erase logic: find drawn bodies near the cursor and remove them
      const bodies = Matter.Composite.allBodies(engineRef.current.world);
      const drawnBodies = bodies.filter(b => b.label === 'drawing');
      
      // Query bodies under a slightly larger radius for easier erasing
      const bodiesToErase = Matter.Query.region(drawnBodies, {
        min: { x: currentPos.x - 20, y: currentPos.y - 20 },
        max: { x: currentPos.x + 20, y: currentPos.y + 20 }
      });

      if (bodiesToErase.length > 0) {
        Matter.World.remove(engineRef.current.world, bodiesToErase);
        // Update our ref to remove the erased bodies
        drawnBodiesRef.current = drawnBodiesRef.current.filter(b => !bodiesToErase.includes(b));
      }
      
      lastDrawPos.current = currentPos;
      return;
    }

    // Calculate distance to avoid drawing too many bodies
    const dist = Math.hypot(currentPos.x - lastDrawPos.current.x, currentPos.y - lastDrawPos.current.y);
    
    if (dist > 5) { // Reduced from 10 to 5 for smoother, tighter lines
      // Create a static circle where the user drew
      const drawBody = Matter.Bodies.circle(currentPos.x, currentPos.y, 6, { // Slightly smaller radius to match tighter spacing
        isStatic: true,
        label: 'drawing',
        render: {
          fillStyle: drawColor // Use selected color
        }
      });

      Matter.World.add(engineRef.current.world, drawBody);
      drawnBodiesRef.current.push(drawBody);
      lastDrawPos.current = currentPos;
    }
  };

  const handlePointerUp = () => {
    setIsDrawing(false);
    lastDrawPos.current = null;
  };

  const handleReset = () => {
    // Clear only drawn lines
    if (engineRef.current) {
      const bodies = Matter.Composite.allBodies(engineRef.current.world);
      const bodiesToRemove = bodies.filter(b => b.label === 'drawing');
      
      bodiesToRemove.forEach(body => {
        Matter.World.remove(engineRef.current!.world, body);
      });
      drawnBodiesRef.current = [];
    }
  };

  return (
    <div 
      ref={containerRef}
      className="w-full h-full absolute inset-0 bg-[#FFFFFF] overflow-hidden flex items-center justify-center touch-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* Physics Canvas (Renders the shapes and drawn lines) */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-10 cursor-crosshair"
      />

      {/* Interactive Letters */}
      <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center" key={resetKey}>
        {letters.map((letter, i) => {
          // Generate random initial positions (scrambled)
          // We use deterministic pseudo-randomness based on index so it's consistent on mount,
          // but looks scattered. We keep them somewhat away from the edges.
          // Using pixels instead of vw/vh to ensure they stay well within the container bounds
          const randomX = (Math.sin(i * 13.5) * 200); // -200px to 200px from center
          const randomY = (Math.cos(i * 27.3) * 150); // -150px to 150px from center
          const randomRot = Math.sin(i * 5.2) * 45; // -45deg to 45deg rotation

          return (
            <div
              key={i}
              ref={(el) => { letterRefs.current[i] = el; }}
              className="absolute top-1/2 left-1/2 font-display font-black text-6xl md:text-8xl lg:text-[10vw] leading-none text-[#121212] select-none touch-none pointer-events-none origin-center hover:text-[#FF0000] transition-colors duration-200"
              style={{
                transform: `translate(-50%, -50%) translate(${randomX}px, ${randomY}px) rotate(${randomRot}deg)`
              }}
            >
              {letter}
            </div>
          );
        })}
      </div>
      
      <div className="absolute top-8 left-8 z-30 flex items-center justify-between w-[calc(100%-4rem)] pointer-events-none">
        <div className="flex items-center gap-6">
          <button 
            onClick={handleReset}
            className="font-display font-bold text-sm tracking-widest text-[#121212] uppercase hover:text-[#FF0000] transition-colors pointer-events-auto"
          >
            RESET
          </button>
          
          <button 
            onClick={() => setIsErasing(!isErasing)}
            className={`font-display font-bold text-sm tracking-widest uppercase transition-colors pointer-events-auto ${isErasing ? 'text-[#FF0000]' : 'text-[#121212] hover:text-[#FF0000]'}`}
          >
            {isErasing ? 'DRAW' : 'ERASE'}
          </button>

          {/* Color Palette */}
          {!isErasing && (
            <div className="flex items-center gap-4 ml-6 pointer-events-auto">
              {[
                { id: 'black', hex: '#121212' },
                { id: 'red', hex: '#FF0000' },
                { id: 'yellow', hex: '#FFD700' },
                { id: 'green', hex: '#00FF00' },
                { id: 'blue', hex: '#0000FF' }
              ].map((color) => (
                <button
                  key={color.id}
                  onClick={() => setDrawColor(color.hex)}
                  className={`w-5 h-5 rounded-full transition-transform ${drawColor === color.hex ? 'scale-125 ring-2 ring-offset-2 ring-[#121212]' : 'hover:scale-110'}`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={`Select ${color.id} color`}
                />
              ))}
            </div>
          )}
        </div>
        
        <button 
          className="font-display font-bold text-sm tracking-widest text-[#121212] uppercase hover:text-[#FF0000] transition-colors pointer-events-auto"
          onClick={() => alert("Share functionality coming soon!")}
        >
          SHARE
        </button>
      </div>
    </div>
  );
}
