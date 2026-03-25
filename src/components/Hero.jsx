import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import GlobeCanvas from './TechGlobe';

const Hero = () => {
  return (
    <div id='home' className='relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-transparent'>
      {/* Dynamic Background Elements */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]' />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className='absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full'
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className='absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-accent-purple/20 blur-[150px] rounded-full'
        />
      </div>

      <div className='max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full pt-32 pb-16 lg:pt-40 lg:pb-24'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          
          {/* Left Column: Content */}
          <div className='flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 order-2 lg:order-1'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md'
            >
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-primary'></span>
              </span>
              <span className='text-xs font-semibold tracking-widest text-slate-300 uppercase'>Available for Hire</span>
            </motion.div>
            
            <div className='space-y-4 max-w-2xl'>
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight leading-tight'
              >
                Building <span className='text-gradient-alt animate-gradient-x'>Digital</span> <br />
                Experiences that <span className='text-primary'>Inspire</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='text-lg md:text-xl text-slate-400 max-w-xl font-medium leading-relaxed'
              >
                Hi, I'm <span className='text-white font-bold'>Alok Kumar</span>. A Frontend Developer specializing in 
                building exceptional digital experiences using <span className='text-primary font-semibold'>React.js</span>.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className='flex flex-col sm:flex-row items-center gap-4 py-4 w-full sm:w-auto'
            >
              <Link to='projects' smooth={true} duration={500} offset={-80} className='w-full sm:w-auto'>
                <button className='btn-primary w-full sm:min-w-[180px]'>
                  Explore Projects
                </button>
              </Link>
              <Link to='contact' smooth={true} duration={500} offset={-80} className='w-full sm:w-auto'>
                <button className='btn-secondary w-full sm:min-w-[180px]'>
                  Get in Touch
                </button>
              </Link>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1, duration: 1 }}
               className='flex items-center gap-6 pt-4'
            >
              {[
                { icon: <FaGithub size={22} />, url: 'https://github.com/ALOKKUMAR474', label: 'GitHub' },
                { icon: <FaLinkedin size={22} />, url: 'https://linkedin.com/in/alok-kumar-901727291', label: 'LinkedIn' },
                { icon: <FaEnvelope size={22} />, url: 'mailto:alokkumarrajawat47@gmail.com', label: 'Email' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target='_blank'
                  rel='noreferrer'
                  whileHover={{ y: -5, scale: 1.1 }}
                  className='w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 text-slate-400 hover:text-white transition-all duration-300'
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring', damping: 15 }}
            className='flex justify-center items-center order-1 lg:order-2'
          >
            <div className='relative group'>
              {/* Rotating Gradient Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className='absolute -inset-4 bg-gradient-to-tr from-primary via-accent-purple to-accent-pink rounded-full opacity-40 blur-sm group-hover:opacity-70 transition-opacity duration-500'
              />
              
              {/* 3D Canvas Container */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05 }}
                className='relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_50px_rgba(99,102,241,0.5)] z-10 bg-black/20 backdrop-blur-sm group-hover:shadow-[0_0_80px_rgba(168,85,247,0.6)] transition-shadow duration-500'
              >
                <GlobeCanvas />
              </motion.div>

              {/* Decorative Floating Element */}
              <motion.div 
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className='absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-12 h-12 md:w-20 md:h-20 glass-card flex items-center justify-center rounded-2xl z-20 animate-float'
              >
                <div className='w-full h-full p-2 md:p-4 opacity-50 text-primary'>
                   <svg viewBox="0 0 24 24" fill="currentColor">
                     <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                     <path d="M2 17L12 22L22 17" />
                     <path d="M2 12L12 17L22 12" />
                   </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className='absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hidden lg:block'
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='flex flex-col items-center gap-2'
        >
          <span className='text-[10px] uppercase tracking-[0.2em] font-bold'>Scroll</span>
          <FaChevronDown size={14} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
