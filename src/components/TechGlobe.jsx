import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Html, Float } from '@react-three/drei';
import { FaReact, FaJs, FaLaptopCode, FaMobileAlt, FaEnvelope, FaServer, FaCloud } from 'react-icons/fa';

const TechGlobe = () => {
  const groupRef = useRef();

  return (
    <group ref={groupRef}>
      {/* Base Globe */}
      <Sphere args={[2, 64, 64]}>
        <meshStandardMaterial color="#1e40af" roughness={0.5} metalness={0.2} transparent opacity={0.9} />
      </Sphere>
      
      {/* Wireframe overlay for tech look */}
      <Sphere args={[2.02, 32, 32]}>
        <meshBasicMaterial color="#60a5fa" wireframe transparent opacity={0.2} />
      </Sphere>

      {/* Floating Tech Icons */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1} position={[2.5, 1, 0]}>
        <Html transform distanceFactor={15} center className="text-4xl text-cyan-400">
          <FaReact />
        </Html>
      </Float>

      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1} position={[-2.2, -1.2, 1]}>
        <Html transform distanceFactor={15} center className="text-4xl text-yellow-400">
          <FaJs />
        </Html>
      </Float>

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1} position={[0, 2.5, 1.5]}>
        <Html transform distanceFactor={15} center className="text-4xl text-white">
          <FaCloud />
        </Html>
      </Float>

      <Float speed={2.2} rotationIntensity={0.5} floatIntensity={1} position={[-2.5, 1.5, -1]}>
        <Html transform distanceFactor={15} center className="text-4xl text-emerald-400">
          <FaServer />
        </Html>
      </Float>

      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={1} position={[1.5, -2, 1.5]}>
        <Html transform distanceFactor={15} center className="text-4xl text-indigo-400">
          <FaLaptopCode />
        </Html>
      </Float>

      <Float speed={2.4} rotationIntensity={0.5} floatIntensity={1} position={[2, -1.5, -1.5]}>
        <Html transform distanceFactor={15} center className="text-4xl text-purple-400">
          <FaMobileAlt />
        </Html>
      </Float>

      <Float speed={2} rotationIntensity={0.5} floatIntensity={1} position={[-1.5, 1, 2]}>
        <Html transform distanceFactor={15} center className="text-4xl text-rose-400">
          <FaEnvelope />
        </Html>
      </Float>

    </group>
  );
};

const GlobeCanvas = () => {
  return (
    <Canvas 
      camera={{ position: [0, 0, 7], fov: 45 }}
      style={{ width: '100%', height: '100%' }}
      className="cursor-grab active:cursor-grabbing"
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#6366f1" />
      <TechGlobe />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate 
        autoRotateSpeed={1.5} 
      />
    </Canvas>
  );
};

export default GlobeCanvas;
