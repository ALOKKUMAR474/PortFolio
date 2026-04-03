import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiUser, FiBarChart2, FiLayers, FiCpu, FiMessageSquare, FiMenu, FiX, FiTerminal, FiFileText } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', id: 'home', icon: <FiHome /> },
  { name: 'About', id: 'about', icon: <FiUser /> },
  { name: 'Analytics', id: 'dashboard', icon: <FiBarChart2 /> },
  { name: 'Projects', id: 'projects', icon: <FiLayers /> },
  { name: 'Resume', id: 'resume', icon: <FiFileText /> },
  { name: 'Skills', id: 'skills', icon: <FiCpu /> },
  { name: 'Contact', id: 'contact', icon: <FiMessageSquare /> },
];

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] p-6 pointer-events-none">
      <div className="container-custom flex justify-between items-center bg-transparent">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto flex items-center gap-3 glass-premium px-6 py-3 rounded-2xl border border-white/5 shadow-2xl group cursor-pointer"
          onClick={() => setActiveSection('home')}
        >
          <div className="w-8 h-8 rounded-lg bg-neon-blue flex items-center justify-center text-dark-black font-black text-lg group-hover:scale-110 transition-transform">A</div>
          <div className="flex flex-col">
            <span className="text-white font-black text-sm tracking-tighter leading-none group-hover:neon-text-blue transition-all">ALOK_KUMAR</span>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] leading-none mt-1">SYST_V3.0</span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden lg:flex items-center gap-2 pointer-events-auto glass-premium p-2 rounded-2xl border border-white/5"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveSection(link.id)}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${
                activeSection === link.id 
                ? 'text-neon-blue' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {activeSection === link.id && (
                <motion.div 
                  layoutId="nav-bg"
                  className="absolute inset-0 bg-neon-blue/10 rounded-xl border border-neon-blue/20"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{link.icon}</span>
              <span className="relative z-10">{link.name}</span>
            </button>
          ))}
          
          <div className="w-[1px] h-6 bg-white/10 mx-2" />
          
          <button className="p-2.5 rounded-xl text-gray-400 hover:text-neon-blue transition-all">
             <FiTerminal size={18} />
          </button>
        </motion.div>

        {/* Mobile Toggle */}
        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden pointer-events-auto p-4 rounded-2xl glass-premium border border-white/5 text-white shadow-2xl"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="absolute top-24 left-6 right-6 lg:hidden glass-premium p-6 rounded-3xl border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.8)] pointer-events-auto"
          >
            <div className="grid gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setActiveSection(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full p-4 rounded-2xl flex items-center gap-4 text-sm font-black uppercase tracking-widest transition-all ${
                    activeSection === link.id 
                    ? 'bg-neon-blue/10 text-neon-blue border border-neon-blue/20' 
                    : 'text-gray-400 hover:text-white bg-white/5 border border-transparent'
                  }`}
                >
                  <span className="text-lg">{link.icon}</span>
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
