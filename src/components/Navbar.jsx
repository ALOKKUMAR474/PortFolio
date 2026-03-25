import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import resume from '../assets/resume.pdf';

const Navbar = ({ activeSection, setActiveSection, isMobile }) => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => setNav(!nav);

  const navLinks = [
    { title: 'Home', path: 'home' },
    { title: 'About', path: 'about' },
    { title: 'Skills', path: 'skills' },
    { title: 'Projects', path: 'projects' },
    { title: 'Experience', path: 'experience' },
    { title: 'Resume', path: 'resume' },
    { title: 'Contact', path: 'contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 pointer-events-auto ${
        activeSection !== 'home' || isMobile ? 'glass-nav h-16 shadow-2xl shadow-black/50' : 'bg-transparent h-20'
      }`}
    >
      <div className='max-w-[1440px] mx-auto flex justify-between items-center w-full h-full px-6 lg:px-12'>
        <motion.div 
          onClick={() => setActiveSection('home')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className='flex items-center gap-2 cursor-pointer'
        >
          <div className='w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-display font-extrabold text-xl text-white shadow-lg shadow-primary/30'>
            A
          </div>
          <span className='font-display font-bold text-xl tracking-tight hidden sm:block'>
            Alok <span className='text-primary'>Kumar</span>
          </span>
        </motion.div>
        
        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-8'>
          <ul className='flex items-center gap-6'>
            {navLinks.map(({ title, path }, idx) => (
              <motion.li 
                key={path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className='relative group cursor-pointer'
              >
                <div 
                  onClick={() => setActiveSection(path)}
                  className={`text-sm font-medium transition-colors duration-300 ${activeSection === path ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}
                >
                  {title}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${activeSection === path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </div>
              </motion.li>
            ))}
          </ul>
          
          <div className='h-6 w-[1px] bg-white/10 mx-2' />
          
          <div className='flex items-center gap-4'>
            <motion.a 
              whileHover={{ scale: 1.1, y: -2 }}
              href='https://github.com/ALOKKUMAR474' 
              target='_blank' 
              rel='noreferrer' 
              className='text-slate-400 hover:text-white transition-colors'
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, y: -2 }}
              href='https://linkedin.com/in/alok-kumar-901727291' 
              target='_blank' 
              rel='noreferrer' 
              className='text-slate-400 hover:text-white transition-colors'
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a 
              href={resume}
              download='Alok_Kumar_Resume.pdf'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='btn-primary px-5 py-2 text-sm flex items-center gap-2'
            >
              Resume
            </motion.a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <motion.div 
          whileTap={{ scale: 0.9 }}
          onClick={toggleNav} 
          className='md:hidden p-2 text-slate-300 hover:text-white cursor-pointer z-50 cursor-pointer pointer-events-auto'
        >
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {nav && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleNav}
              className='fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden pointer-events-auto'
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className='fixed top-0 right-0 w-[80%] max-w-sm h-full bg-surface z-50 shadow-2xl md:hidden flex flex-col pointer-events-auto'
            >
              <div className='p-8 flex flex-col h-full'>
                <div className='flex items-center gap-2 mb-12'>
                   <div className='w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-display font-extrabold text-xl text-white'>
                    A
                  </div>
                  <span className='font-display font-bold text-xl'>Alok <span className='text-primary'>Kumar</span></span>
                </div>
                
                <ul className='flex flex-col gap-6 flex-grow'>
                  {navLinks.map(({ title, path }, idx) => (
                    <motion.li 
                      key={path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div 
                        onClick={() => { setActiveSection(path); toggleNav(); }} 
                        className={`text-2xl font-bold transition-colors cursor-pointer ${activeSection === path ? 'text-primary' : 'text-slate-400 hover:text-primary'}`}
                      >
                        {title}
                      </div>
                    </motion.li>
                  ))}
                </ul>
                
                <div className='mt-auto pt-10 border-t border-white/5'>
                  <p className='text-xs uppercase tracking-widest text-slate-500 mb-6'>Let's Connect</p>
                  <div className='flex gap-6'>
                    <a href='https://github.com/ALOKKUMAR474' target='_blank' rel='noreferrer' className='text-slate-400 hover:text-white transition-colors bg-white/5 p-3 rounded-full'>
                      <FaGithub size={24} />
                    </a>
                    <a href='https://linkedin.com/in/alok-kumar-901727291' target='_blank' rel='noreferrer' className='text-slate-400 hover:text-white transition-colors bg-white/5 p-3 rounded-full'>
                      <FaLinkedin size={24} />
                    </a>
                  </div>
                  <motion.a 
                    href={resume}
                    download='Alok_Kumar_Resume.pdf'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='btn-primary w-full mt-8 py-4 flex items-center justify-center gap-2 text-lg font-bold'
                  >
                    Download Resume
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
