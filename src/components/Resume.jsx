import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiFileText, FiLayers, FiCheckCircle, FiShield, FiTrendingUp } from 'react-icons/fi';

const ResumePreview = () => (
  <div className="w-full h-full bg-dark-black p-6 md:p-10 flex flex-col gap-6 font-sans text-left">
    {/* Header */}
    <div className="border-b border-white/10 pb-6">
      <h4 className="text-white font-black text-2xl uppercase tracking-tighter">Alok Kumar</h4>
      <p className="text-neon-blue font-bold text-xs uppercase tracking-widest mt-1">Frontend_Engineer_v3</p>
    </div>

    {/* Section: Experience */}
    <div className="space-y-4">
      <p className="text-gray-600 font-black text-[10px] uppercase tracking-widest">Experience_Nodes</p>
      <div className="relative pl-4 border-l border-neon-purple/30 space-y-4">
        <div>
          <p className="text-white font-bold text-xs">TCIL-IT Chandigarh</p>
          <p className="text-gray-500 text-[10px]">Web Development Trainee • 2025</p>
        </div>
      </div>
    </div>

    {/* Section: Skills */}
    <div className="space-y-4">
      <p className="text-gray-600 font-black text-[10px] uppercase tracking-widest">Core_Protocol_Stack</p>
      <div className="flex flex-wrap gap-2">
        {['React', 'Node.js', 'MongoDB', 'Tailwind', 'Python'].map(skill => (
          <span key={skill} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[9px] text-gray-400 font-mono">
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Section: Education */}
    <div className="space-y-4">
      <p className="text-gray-600 font-black text-[10px] uppercase tracking-widest">Academic_Registry</p>
      <div className="relative pl-4 border-l border-neon-blue/30">
        <p className="text-white font-bold text-xs">CGC Landran (BCA)</p>
        <p className="text-gray-500 text-[10px]">2023 - 2026 • 7.2 CGPA</p>
      </div>
    </div>

    {/* Bottom Watermark */}
    <div className="mt-auto pt-6 border-t border-white/5 opacity-20">
      <p className="text-[8px] text-gray-500 font-black uppercase tracking-[0.4em]">Optimized_For_Human_Ingestion</p>
    </div>
  </div>
);

const Resume = () => {
  return (
    <section id="resume" className="py-20 md:py-32 bg-dark-black relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-neon-purple/5 blur-[120px] md:blur-[180px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12 md:mb-20 text-center lg:text-left flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6"
        >
           <div className="space-y-4">
             <span className="text-neon-blue font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">Professional Portfolio</span>
             <h2 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter uppercase">
               SYSTEM_ <span className="text-neon-gradient">VITAE</span>
             </h2>
           </div>
           <p className="text-gray-500 max-w-sm mb-2 font-medium italic text-sm md:text-base text-center lg:text-right uppercase tracking-widest">
                Full documentation of technical evolution and architectural mastery.
           </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
          {/* Left: Interactive Resume Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            <div className="glass-card-futuristic p-2 md:p-3 aspect-[1/1.414] relative group overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all hover:scale-[1.02]">
               <div className="absolute inset-0 bg-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
               <div className="w-full h-full bg-dark-black rounded-[20px] md:rounded-[28px] overflow-hidden relative border border-white/5">
                  <ResumePreview />
                  
                  {/* Digital Signature Overlay */}
                  <div className="absolute bottom-10 right-10 p-4 border border-neon-blue/20 bg-neon-blue/5 rounded-xl backdrop-blur-md rotate-[-12deg] pointer-events-none">
                     <p className="text-[10px] text-neon-blue font-black uppercase tracking-widest italic">ALOK_KUMAR</p>
                  </div>
               </div>
               
               {/* Decorative corner */}
               <div className="absolute top-6 left-6 p-3 rounded-xl bg-dark-black/80 border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                  <FiTrendingUp className="text-neon-blue" size={20} />
               </div>
            </div>
          </motion.div>

          {/* Right: Spec Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-10 md:space-y-16"
          >
            <div className="space-y-8">
               <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-purple shadow-neon-purple/20 shadow-lg">
                     <FiShield size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-4xl font-black text-white italic tracking-tight uppercase leading-none">Verified_Vault</h3>
                    <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mt-2">Secure Credential Management</p>
                  </div>
               </div>
               
               <div className="space-y-6">
                  {[
                    { label: 'ATS_COMPLIANCE', value: 'High' },
                    { label: 'STACK_COORDINATES', value: 'MERN_PRIMARY' },
                    { label: 'DEPLOYS_VERIFIED', value: 'TRUE' }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-end border-b border-white/5 pb-2">
                       <span className="text-[10px] text-gray-600 font-black uppercase tracking-widest">{stat.label}</span>
                       <span className="text-white font-mono text-sm tracking-tighter">{stat.value}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="space-y-6">
               <p className="text-gray-400 text-sm md:text-lg leading-relaxed font-medium text-center lg:text-left">
                  My professional record is structured for <span className="text-neon-blue">rapid integration</span>. 
                  Download the comprehensive technical specification to evaluate my engineering profile.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.a 
                    href="/resume.pdf" 
                    download="Alok_Kumar_Resume.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 group relative px-8 py-5 bg-neon-blue text-dark-black font-black uppercase tracking-widest text-sm rounded-2xl md:rounded-[24px] overflow-hidden flex items-center justify-center gap-4 shadow-[0_20px_40px_rgba(0,243,255,0.2)]"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative z-10 flex items-center gap-3">
                      DOWNLOAD_CORE <FiDownload size={20} />
                    </span>
                  </motion.a>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 p-5 rounded-2xl md:rounded-[24px] bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
                  >
                    <FiFileText size={18} className="text-neon-purple" /> View_Print_Full
                  </motion.button>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
