import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Resume from './Resume';
import Contact from './Contact';

const HUD = ({ activeSection, setActiveSection }) => {
  
  // A wrapper to give the Stitch game UI aesthetic and allow exiting back to the 3D 'home'
  const HUDWrapper = ({ children, sectionTitle }) => (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="pointer-events-auto absolute inset-0 sm:inset-10 top-24 sm:top-24 mt-4 glass-card overflow-hidden flex flex-col z-50 rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-2xl shadow-2xl"
    >
      <div className="flex justify-between items-center p-4 sm:px-8 border-b border-white/5 bg-white/5">
        <h2 className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 uppercase">
          {sectionTitle}
        </h2>
        <button 
          onClick={() => setActiveSection('home')}
          className="text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-all transition-transform hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="overflow-y-auto w-full h-full p-4 sm:p-8 custom-scrollbar">
        {children}
      </div>
    </motion.div>
  );

  return (
    <div className="flex-1 relative w-full h-full pointer-events-none">
      <AnimatePresence mode="wait">
        {activeSection === 'home' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 flex justify-center items-center flex-col pointer-events-none z-0"
          >
            <div className="absolute top-[20%] text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight leading-tight mb-4 drop-shadow-2xl"
              >
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 animate-gradient-x">Digital</span> <br />
                Experiences
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto font-medium"
              >
                Welcome to the 3D Portfolio of <span className="text-white font-bold">Alok Kumar</span>
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute bottom-12"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-blue-400 animate-pulse bg-slate-900/40 px-6 py-3 rounded-full border border-blue-500/20 backdrop-blur-md shadow-lg shadow-blue-500/10">
                Click any floating object to explore
              </p>
            </motion.div>
          </motion.div>
        )}
        
        {activeSection === 'about' && (
          <HUDWrapper sectionTitle="About Me" key="about">
            <About minimal />
          </HUDWrapper>
        )}

        {activeSection === 'skills' && (
          <HUDWrapper sectionTitle="Skills & Tech" key="skills">
            <Skills minimal />
          </HUDWrapper>
        )}

        {activeSection === 'projects' && (
          <HUDWrapper sectionTitle="Projects" key="projects">
            <Projects minimal />
          </HUDWrapper>
        )}

        {activeSection === 'experience' && (
          <HUDWrapper sectionTitle="Experience" key="experience">
            <Experience minimal />
          </HUDWrapper>
        )}

        {activeSection === 'resume' && (
          <HUDWrapper sectionTitle="Resume" key="resume">
            <Resume minimal />
          </HUDWrapper>
        )}

        {activeSection === 'contact' && (
          <HUDWrapper sectionTitle="Contact" key="contact">
            <Contact minimal />
          </HUDWrapper>
        )}
        
      </AnimatePresence>
    </div>
  );
};

export default HUD;
