import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp, FiTerminal, FiCpu, FiShield } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 md:py-20 bg-dark-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent" />
      
      <div className="container-custom relative z-10 flex flex-col items-center gap-10 md:gap-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 lg:gap-20 w-full">
           <div className="flex items-center gap-3 md:gap-4 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-blue group-hover:border-neon-blue/50 transition-all">
                 <FiTerminal size={18} />
              </div>
              <div className="space-y-0.5 md:space-y-1">
                 <p className="text-white font-black text-xs md:text-sm tracking-tighter uppercase leading-none italic">Alok Kumar</p>
                 <p className="text-[8px] md:text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] leading-none">Frontend_Engineer_v3</p>
              </div>
           </div>

           <div className="flex items-center gap-3 md:gap-4 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-purple group-hover:border-neon-purple/50 transition-all">
                 <FiCpu size={18} />
              </div>
              <div className="space-y-0.5 md:space-y-1">
                 <p className="text-white font-black text-xs md:text-sm tracking-tighter uppercase leading-none italic">MERN_Stack</p>
                 <p className="text-[8px] md:text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] leading-none">System_Architecture</p>
              </div>
           </div>

           <div className="flex items-center gap-3 md:gap-4 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:border-white/20 transition-all">
                 <FiShield size={18} />
              </div>
              <div className="space-y-0.5 md:space-y-1">
                 <p className="text-white font-black text-xs md:text-sm tracking-tighter uppercase leading-none italic">Secure_Core</p>
                 <p className="text-[8px] md:text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] leading-none">Encrypted_Transmissions</p>
              </div>
           </div>
        </div>

        <div className="flex flex-col items-center gap-6 md:gap-8 text-center pt-8 border-t border-white/5 w-full">
           <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-gray-600">
              <a href="#about" className="hover:text-neon-blue transition-colors">Core_About</a>
              <a href="#projects" className="hover:text-neon-blue transition-colors">Nodes</a>
              <a href="#skills" className="hover:text-neon-blue transition-colors">Matrix</a>
              <a href="#contact" className="hover:text-neon-blue transition-colors">Uplink</a>
           </div>

           <div className="flex flex-col items-center gap-4">
              <motion.button 
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="p-3 md:p-4 rounded-full bg-white/5 border border-white/10 text-white hover:text-neon-blue hover:border-neon-blue transition-all group"
              >
                 <FiArrowUp size={18} className="group-hover:neon-text-blue" />
              </motion.button>
              <p className="text-[8px] md:text-[10px] text-gray-700 font-bold uppercase tracking-[0.5em] mt-2 px-4 leading-loose">
                 Built with <span className="text-neon-blue">React</span> & <span className="text-neon-purple">Anti-Gravity</span>. 2026_All_Rights_Observed.
              </p>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
