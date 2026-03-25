import React, { useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Environment, ContactShadows, Float, Text, MeshDistortMaterial, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// An advanced 3D object to represent a section perfectly tailored to its purpose
const InteractiveObject = ({ position, rotation, label, sectionKey, activeSection, setActiveSection, color, type }) => {
  const isActive = activeSection === sectionKey;
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (!isActive && meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });
  
  return (
    <group position={position} rotation={rotation}>
      <Float speed={isActive ? 1 : 3} rotationIntensity={isActive ? 0.1 : 0.8} floatIntensity={isActive ? 0.2 : 1}>
        <mesh 
          ref={meshRef}
          onClick={(e) => { e.stopPropagation(); setActiveSection(isActive ? 'home' : sectionKey); }}
          onPointerOver={() => document.body.style.cursor = 'pointer'}
          onPointerOut={() => document.body.style.cursor = 'auto'}
          castShadow
        >
          {type === 'about' && <icosahedronGeometry args={[1, 0]} />}
          {type === 'skills' && <torusKnotGeometry args={[0.6, 0.2, 64, 12]} />}
          {type === 'projects' && <octahedronGeometry args={[1, 0]} />}
          {type === 'experience' && <dodecahedronGeometry args={[1, 0]} />}
          {type === 'resume' && <coneGeometry args={[1, 1.5, 4]} />}

          <meshStandardMaterial 
            color={isActive ? color : '#1e1e24'} 
            metalness={0.9} 
            roughness={0.1} 
            emissive={color} 
            emissiveIntensity={isActive ? 0.8 : 0.2} 
            wireframe={isActive}
          />
        </mesh>
        
        {/* Holographic Text Label Below Object */}
        <Text 
          position={[0, -1.5, 0]} 
          fontSize={0.25} 
          color={color}
          anchorX="center" 
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000"
        >
          {label}
        </Text>
      </Float>
    </group>
  );
};

const Scene3D = ({ activeSection, setActiveSection }) => {
  const { camera, viewport } = useThree();
  const isMobile = viewport.width < 5;

  // Set the positions dynamically to be tighter on narrow screens
  const spacing = isMobile ? 1.2 : 2;

  // Smooth camera movement based on active section
  useFrame((state, delta) => {
    // Dynamic base Z position based on viewport to fit all elements
    const baseZ = isMobile ? 10 : 8;
    
    let targetPos = new THREE.Vector3(0, 2, baseZ);
    let targetLookAt = new THREE.Vector3(0, 1, 0);

    if (activeSection === 'about') {
      targetPos.set(-spacing * 2, 1.5, baseZ - 5);
      targetLookAt.set(-spacing * 2, 1, 0);
    } else if (activeSection === 'skills') {
      targetPos.set(-spacing, 1.5, baseZ - 5);
      targetLookAt.set(-spacing, 1, 0);
    } else if (activeSection === 'projects') {
      targetPos.set(0, 1.5, baseZ - 5);
      targetLookAt.set(0, 1, 0);
    } else if (activeSection === 'experience') {
      targetPos.set(spacing, 1.5, baseZ - 5);
      targetLookAt.set(spacing, 1, 0);
    } else if (activeSection === 'resume') {
      targetPos.set(spacing * 2, 1.5, baseZ - 5);
      targetLookAt.set(spacing * 2, 1, 0);
    } else if (activeSection === 'contact') {
      targetPos.set(0, 4, baseZ - 3);
      targetLookAt.set(0, 2, 0);
    }

    camera.position.lerp(targetPos, delta * 3);
  });

  return (
    <>
      <color attach="background" args={['#030014']} />
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 20, 10]} angle={0.15} penumbra={1} intensity={2} castShadow color="#4338ca" />
      <spotLight position={[-10, 20, -10]} angle={0.15} penumbra={1} intensity={2} castShadow color="#ec4899" />
      
      <Environment preset="night" />

      {/* Atmospheric Background - Optimized for mobile */}
      <Stars radius={100} depth={50} count={isMobile ? 800 : 2000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={isMobile ? 50 : 100} scale={12} size={isMobile ? 4 : 2} speed={0.4} opacity={0.5} color="#60a5fa" />

      {/* Main floor - Glassy reflective floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#050510" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Interactive Elements representing sections */}
      <InteractiveObject type="about" position={[-spacing * 2, 1, 0]} rotation={[0, 0.2, 0]} label="ABOUT" sectionKey="about" activeSection={activeSection} setActiveSection={setActiveSection} color="#3b82f6" />
      <InteractiveObject type="skills" position={[-spacing, 1, 0]} rotation={[0, 0.1, 0]} label="SKILLS" sectionKey="skills" activeSection={activeSection} setActiveSection={setActiveSection} color="#8b5cf6" />
      <InteractiveObject type="projects" position={[0, 1, 0]} rotation={[0, 0, 0]} label="PROJECTS" sectionKey="projects" activeSection={activeSection} setActiveSection={setActiveSection} color="#10b981" />
      <InteractiveObject type="experience" position={[spacing, 1, 0]} rotation={[0, -0.1, 0]} label="EXPERIENCE" sectionKey="experience" activeSection={activeSection} setActiveSection={setActiveSection} color="#f97316" />
      <InteractiveObject type="resume" position={[spacing * 2, 1, 0]} rotation={[0, -0.2, 0]} label="RESUME" sectionKey="resume" activeSection={activeSection} setActiveSection={setActiveSection} color="#f59e0b" />

      {/* Center abstract shape for 'Contact' orbiting slightly higher - Optimized geometry */}
      <Float speed={2} rotationIntensity={2} floatIntensity={3} position={[0, 3.5, -4]}>
        <mesh 
          onClick={(e) => { e.stopPropagation(); setActiveSection('contact'); }}
          onPointerOver={() => document.body.style.cursor = 'pointer'}
          onPointerOut={() => document.body.style.cursor = 'auto'}
        >
          <sphereGeometry args={[1.5, 32, 32]} />
          <MeshDistortMaterial color="#e11d48" attach="material" distort={0.4} speed={2} roughness={0.2} metalness={0.8} />
        </mesh>
        <Text position={[0, -2.5, 0]} fontSize={0.3} color="#f43f5e" anchorX="center" anchorY="middle" outlineWidth={0.02} outlineColor="#000">CONTACT</Text>
      </Float>

      {/* Baked Contact Shadows for MASSIVE performance gain */}
      <ContactShadows position={[0, -0.99, 0]} opacity={0.6} scale={40} blur={2.5} far={4} color="#000" resolution={256} frames={1} />
    </>
  );
};

export default Scene3D;
