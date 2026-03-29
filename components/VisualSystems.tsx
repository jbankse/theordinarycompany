'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float, Line, Sphere, Trail } from '@react-three/drei';

function BrutalistArchitecture() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const outerWireframeRef = useRef<THREE.Mesh>(null);

  // Generate random points for the floating data nodes
  const nodes = useMemo(() => {
    return Array.from({ length: 40 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      ] as [number, number, number],
      speed: Math.random() * 0.2 + 0.1,
    }));
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Slow, deliberate rotation of the entire system
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.05;
      groupRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    }

    // Inner core pulsing and rotating
    if (coreRef.current) {
      coreRef.current.rotation.x = time * 0.2;
      coreRef.current.rotation.y = time * 0.3;
      const scale = 1 + Math.sin(time * 2) * 0.05;
      coreRef.current.scale.set(scale, scale, scale);
    }

    // Outer wireframe counter-rotation
    if (outerWireframeRef.current) {
      outerWireframeRef.current.rotation.x = -time * 0.1;
      outerWireframeRef.current.rotation.y = -time * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Solid Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshBasicMaterial color="#FFFFFF" wireframe={false} />
      </mesh>

      {/* Outer Wireframe Shell */}
      <mesh ref={outerWireframeRef}>
        <icosahedronGeometry args={[3, 1]} />
        <meshBasicMaterial color="#FF0000" wireframe={true} transparent opacity={0.3} />
      </mesh>

      {/* Structured Grid Lines */}
      <group>
        {[-4, -2, 0, 2, 4].map((x, i) => (
          <Line
            key={`v-${i}`}
            points={[
              [x, -5, 0],
              [x, 5, 0],
            ]}
            color="#FFFFFF"
            lineWidth={1}
            transparent
            opacity={0.1}
          />
        ))}
        {[-4, -2, 0, 2, 4].map((y, i) => (
          <Line
            key={`h-${i}`}
            points={[
              [-5, y, 0],
              [5, y, 0],
            ]}
            color="#FFFFFF"
            lineWidth={1}
            transparent
            opacity={0.1}
          />
        ))}
      </group>

      {/* Floating Data Nodes with Trails */}
      {nodes.map((node, i) => (
        <Float
          key={i}
          speed={node.speed}
          rotationIntensity={2}
          floatIntensity={2}
          position={node.position}
        >
          <Trail
            width={0.5}
            length={4}
            color="#FF0000"
            attenuation={(t) => t * t}
          >
            <mesh>
              <boxGeometry args={[0.15, 0.15, 0.15]} />
              <meshBasicMaterial color="#FFFFFF" />
            </mesh>
          </Trail>
        </Float>
      ))}
    </group>
  );
}

export default function VisualSystems() {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <color attach="background" args={['#121212']} />
        {/* Subtle fog to give depth to the nodes */}
        <fog attach="fog" args={['#121212', 5, 15]} />
        <BrutalistArchitecture />
      </Canvas>
      
      {/* Overlay UI Elements to anchor it to the design */}
      <div className="absolute top-8 left-8 pointer-events-none">
        <div className="font-mono text-[10px] tracking-widest text-[#FFFFFF] opacity-50 uppercase flex flex-col gap-1">
          <span>SYS.RENDER // ACTIVE</span>
          <span>FPS // 60.0</span>
          <span>NODES // 40</span>
        </div>
      </div>
      
      <div className="absolute bottom-8 right-8 pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-[#FF0000] animate-pulse" />
          <span className="font-mono text-[10px] tracking-widest text-[#FFFFFF] opacity-50 uppercase">
            GEOMETRY_LOCKED
          </span>
        </div>
      </div>
    </div>
  );
}
