'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function DigitalCore() {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const points = useMemo(() => {
    const p = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      const r = 3 + Math.sin(i) * 0.5;
      const theta = i * 0.2;
      const phi = i * 0.1;
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = r * Math.cos(phi);
    }
    return p;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) groupRef.current.rotation.y = time * 0.1;
    if (ring1Ref.current) ring1Ref.current.rotation.x = time * 0.5;
    if (ring2Ref.current) ring2Ref.current.rotation.y = time * 0.7;
    if (ring3Ref.current) ring3Ref.current.rotation.z = time * 0.3;
    if (pointsRef.current) pointsRef.current.rotation.y = -time * 0.2;
  });

  return (
    <group ref={groupRef}>
      {/* Core Sphere */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#00FF00" wireframe transparent opacity={0.1} />
      </mesh>

      {/* Rotating Rings */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[4, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00FF00" transparent opacity={0.4} />
      </mesh>
      <mesh ref={ring2Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[4.5, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00FF00" transparent opacity={0.3} />
      </mesh>
      <mesh ref={ring3Ref} rotation={[0, Math.PI / 4, 0]}>
        <torusGeometry args={[5, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00FF00" transparent opacity={0.2} />
      </mesh>

      {/* Particle Cloud */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[points, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#00FF00" transparent opacity={0.6} />
      </points>
    </group>
  );
}

export default function VisualSystems() {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
        <color attach="background" args={['#1a1a1f']} />
        <DigitalCore />
      </Canvas>
    </div>
  );
}
