import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Animated person walking into interview room
function WalkingPerson() {
  const personRef = useRef<THREE.Group>(null);
  const walkCycle = useRef(0);

  useFrame(() => {
    if (personRef.current) {
      walkCycle.current += 0.02;
      
      // Walking animation - moving forward and slight bobbing
      personRef.current.position.x = Math.sin(walkCycle.current * 0.5) * 2 - 3;
      personRef.current.position.y = Math.sin(walkCycle.current * 2) * 0.1;
      
      // Rotate slightly as walking
      personRef.current.rotation.y = Math.sin(walkCycle.current * 0.3) * 0.1;
    }
  });

  return (
    <group ref={personRef} position={[-3, 0, 0]}>
      {/* Head */}
      <mesh position={[0, 1.7, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#FFDBAC" />
      </mesh>
      
      {/* Body */}
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[0.6, 1, 0.3]} />
        <meshStandardMaterial color="#2563EB" />
      </mesh>
      
      {/* Arms */}
      <mesh position={[-0.4, 0.8, 0]}>
        <boxGeometry args={[0.15, 0.8, 0.15]} />
        <meshStandardMaterial color="#FFDBAC" />
      </mesh>
      <mesh position={[0.4, 0.8, 0]}>
        <boxGeometry args={[0.15, 0.8, 0.15]} />
        <meshStandardMaterial color="#FFDBAC" />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.15, -0.2, 0]}>
        <boxGeometry args={[0.2, 0.8, 0.2]} />
        <meshStandardMaterial color="#1E293B" />
      </mesh>
      <mesh position={[0.15, -0.2, 0]}>
        <boxGeometry args={[0.2, 0.8, 0.2]} />
        <meshStandardMaterial color="#1E293B" />
      </mesh>
    </group>
  );
}

// Interview room environment
function InterviewRoom() {
  return (
    <group>
      {/* Floor */}
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[10, 0.1, 8]} />
        <meshStandardMaterial color="#F1F5F9" />
      </mesh>
      
      {/* Conference table */}
      <mesh position={[2, 0, 0]}>
        <boxGeometry args={[3, 0.1, 1.5]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Chairs */}
      <mesh position={[1, 0.4, 0]}>
        <boxGeometry args={[0.5, 0.8, 0.5]} />
        <meshStandardMaterial color="#1E293B" />
      </mesh>
      <mesh position={[3, 0.4, 0]}>
        <boxGeometry args={[0.5, 0.8, 0.5]} />
        <meshStandardMaterial color="#1E293B" />
      </mesh>
      
      {/* Wall with door */}
      <mesh position={[5, 1, 0]}>
        <boxGeometry args={[0.2, 3, 8]} />
        <meshStandardMaterial color="#E2E8F0" />
      </mesh>
      
      {/* Door opening */}
      <mesh position={[4.8, 0.5, -2]}>
        <boxGeometry args={[0.3, 2, 1]} />
        <meshStandardMaterial color="#3B82F6" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

// Floating talent icons
function TalentIcons() {
  const iconsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (iconsRef.current) {
      iconsRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={iconsRef}>
      {/* Floating spheres representing talents */}
      <mesh position={[4, 3, 2]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[-2, 2.5, 3]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[3, 4, -2]}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}

export default function InterviewScene3D() {
  return (
    <div className="w-full h-full">
      <Canvas 
        camera={{ position: [0, 2, 8], fov: 60 }}
        gl={{ antialias: true }}
        onCreated={({ gl }) => {
          gl.setClearColor('#f8fafc');
        }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          castShadow
        />
        <pointLight position={[-10, 10, -10]} intensity={0.5} color="#3B82F6" />
        
        {/* Scene components */}
        <InterviewRoom />
        <WalkingPerson />
        <TalentIcons />
        
        {/* Controls */}
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          minPolarAngle={Math.PI / 3} 
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}