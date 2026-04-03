import React, { useState, useEffect, useRef, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import profilePic from '../assets/profile-pic.png';

const TechIcon = ({ position, color, label }) => {
  const mesh = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.position.y += Math.sin(t * 2) * 0.002;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={mesh} position={position}>
        <Sphere args={[0.4, 32, 32]}>
          <MeshDistortMaterial color={color} speed={2} distort={0.3} radius={0.4} />
        </Sphere>
      </mesh>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00F3FF"/>
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#BF00FF" />
      
      <TechIcon position={[-2, 1, 0]} color="#00F3FF" label="React" />
      <TechIcon position={[2, -1, 1]} color="#F7DF1E" label="JS" />
      <TechIcon position={[0, 2, -1]} color="#47A248" label="MongoDB" />
      
      <Sphere args={[1.5, 64, 64]} position={[0, 0, -2]}>
        <MeshDistortMaterial
          color="#111"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </>
  );
};

const Typewriter = ({ texts, delay = 150, pause = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? delay / 2 : delay);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, texts, delay, pause]);

  return (
    <span className="text-neon-blue font-mono min-h-[1.2em] inline-block">
      {currentText}
      <motion.span 
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1"
      >
        _
      </motion.span>
    </span>
  );
};

const Hero = ({ setActiveSection }) => {
  const roles = ["Frontend Developer", "MERN Stack Developer", "UI/UX Specialist", "Data Visualization Enthusiast"];
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden px-4 md:px-6 pt-24 pb-20">
      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Canvas>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left: Content */}
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-center lg:justify-start gap-3 text-neon-blue font-bold tracking-widest text-[10px] md:text-xs uppercase"
              >
                <span className="w-8 md:w-12 h-[1px] bg-neon-blue hidden sm:block" />
                Available for New Challenges
              </motion.div>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter">
                ALOK<br />
                <span className="text-neon-gradient italic">KUMAR</span>
              </h1>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center justify-center lg:justify-start gap-2">
                <span className="text-gray-500 hidden sm:inline">{'>'}</span>
                <Typewriter texts={roles} />
              </div>
            </div>

            <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                I build <span className="text-white">data-driven web experiences</span> with a focus on 
                modern motion design and anti-gravity UI concepts. Bridging the gap between 
                complex data and <span className="text-neon-blue group-hover:neon-text-blue transition-all">intuitive interfaces</span>.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 pt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection('projects')}
                className="w-full sm:w-auto relative px-8 md:px-10 py-4 md:py-5 bg-neon-blue text-dark-black font-black uppercase tracking-widest text-xs md:text-sm rounded-full overflow-hidden group shadow-[0_0_20px_rgba(0,243,255,0.3)] transition-all"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10">View Projects</span>
              </motion.button>
              
              <motion.a 
                 href="/resume.pdf"
                 download="Alok_Kumar_Resume.pdf"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs md:text-sm rounded-full backdrop-blur-md hover:bg-white/10 hover:border-neon-blue/50 transition-all flex items-center justify-center gap-2"
              >
                Get Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Floating Profile Card */}
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative w-full max-w-[320px] sm:max-w-[400px] lg:w-[450px] lg:h-[450px] mt-8 lg:mt-0 mx-auto"
          >
            <div className="absolute inset-0 bg-neon-blue/10 rounded-full blur-[60px] md:blur-[100px] animate-pulse" />
            <div className="relative w-full aspect-square glass-premium rounded-[32px] md:rounded-[40px] p-6 md:p-8 border border-white/5 flex flex-col items-center justify-center gap-4 md:gap-6 overflow-hidden anti-gravity">
              
              {/* Profile Image with scanline effect */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-[32px] md:rounded-[40px] border-2 border-neon-blue/30 p-2 overflow-hidden shadow-[0_0_30px_rgba(0,243,255,0.15)] group">
                <div className="absolute inset-0 bg-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img 
                  src={profilePic} 
                  alt="Alok Kumar" 
                  className="w-full h-full object-cover rounded-[24px] md:rounded-[32px] transition-all duration-700" 
                />
              </div>
              
              <div className="text-center space-y-1 md:space-y-2">
                <p className="text-white font-black text-xl md:text-2xl tracking-tighter">ALOK_KUMAR.sys</p>
                <div className="flex gap-2 justify-center items-center">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[8px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest">Active System Status</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full pt-4 md:pt-6 mt-2 md:mt-4 border-t border-white/5">
                <div className="text-center">
                  <p className="text-neon-blue font-bold text-base md:text-lg">MERN</p>
                  <p className="text-gray-500 text-[8px] md:text-[10px] uppercase tracking-widest">Specialist</p>
                </div>
                <div className="text-center">
                  <p className="text-neon-purple font-bold text-base md:text-lg">7.2</p>
                  <p className="text-gray-500 text-[8px] md:text-[10px] uppercase tracking-widest">CGPA Rank</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 pointer-events-none"
      >
        <span className="text-[8px] md:text-[10px] text-white font-bold uppercase tracking-[0.3em]">Explore</span>
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
