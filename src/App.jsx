import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import Scene3D from './components/Scene3D';
import Navbar from './components/Navbar';
import HUD from './components/HUD';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="w-full h-screen overflow-hidden bg-slate-950 relative selection:bg-primary/30 selection:text-white text-slate-200">
      {/* 3D Environment */}
      <Canvas camera={{ position: [0, 2, 8], fov: 50 }} shadows>
        <Suspense fallback={null}>
          <Scene3D activeSection={activeSection} setActiveSection={setActiveSection} />
        </Suspense>
      </Canvas>
      
      {/* 3D Asset Loader */}
      <Loader />
      
      {/* Game UI Overlay / HUD */}
      <div className="absolute inset-0 pointer-events-none z-10 flex flex-col">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        <HUD activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
    </div>
  );
}

export default App;
