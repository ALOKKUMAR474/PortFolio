import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Dashboard from './components/Dashboard';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import Resume from './components/Resume';

const LoadingScreen = () => (
  <motion.div 
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    className="fixed inset-0 z-[200] bg-dark-black flex items-center justify-center overflow-hidden"
  >
    <div className="relative">
      <motion.div 
        animate={{ 
          rotate: 360,
          borderRadius: ["20%", "50%", "20%"],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 md:w-24 md:h-24 border-2 border-neon-blue border-t-transparent shadow-[0_0_20px_rgba(0,243,255,0.3)]"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute inset-0 flex items-center justify-center text-white font-black text-sm md:text-xl"
      >
        ALOK
      </motion.div>
    </div>
    
    <motion.div 
      animate={{ top: ['-10%', '110%'] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      className="absolute left-0 right-0 h-[2px] bg-neon-blue/20 blur-sm z-10"
    />
  </motion.div>
);

const GlobalEffects = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isTouch) setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleTouchStart = () => setIsTouch(true);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, [isTouch]);

  return (
    <>
      {/* Background Particles Simulation - Reduced for mobile */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(isTouch ? 10 : 20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-neon-blue/10 blur-[2px]"
            style={{
              width: Math.random() * 3 + 2,
              height: Math.random() * 3 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Magnetic Cursor Glow - Hidden on touch */}
      {!isTouch && (
        <motion.div
          className="fixed top-0 left-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] pointer-events-none z-0 rounded-full opacity-20 md:opacity-30 blur-[80px] md:blur-[120px]"
          animate={{
            x: mousePos.x - (window.innerWidth < 768 ? 200 : 300),
            y: mousePos.y - (window.innerWidth < 768 ? 200 : 300),
            background: `radial-gradient(circle, rgba(0, 243, 255, 0.15) 0%, transparent 70%)`
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20, mass: 0.5 }}
        />
      )}
    </>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'resume', 'dashboard', 'projects', 'skills', 'experience', 'certifications', 'contact'];
    // Improved observer options for mobile scrolling
    const observerOptions = { 
      root: null, 
      rootMargin: '-30% 0px -30% 0px', 
      threshold: [0, 0.25, 0.5] 
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="bg-dark-black min-h-screen relative overflow-x-hidden selection:bg-neon-blue selection:text-dark-black">
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <GlobalEffects />

      <CommandPalette 
        isOpen={isCommandPaletteOpen} 
        setIsOpen={setIsCommandPaletteOpen} 
        setActiveSection={handleNavigate} 
      />

      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple z-[110] origin-left shadow-[0_0_10px_rgba(0,243,255,0.5)]"
        style={{ scaleX }}
      />

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar activeSection={activeSection} setActiveSection={handleNavigate} />
          
          <main className="relative z-10">
            <Hero setActiveSection={handleNavigate} />
            <About />
            <Resume />
            <Dashboard />
            <Projects />
            <Skills />
            <Experience />
            <Certifications />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
