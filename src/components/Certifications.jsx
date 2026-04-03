import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiSearch, FiCode, FiDatabase } from 'react-icons/fi';

const certifications = [
  {
    title: "Web Designing",
    issuer: "Digital India (NIELIT)",
    date: "2024",
    icon: <FiCode className="text-neon-blue" />,
    color: "neon-blue",
    description: "Comprehensive certification covering modern web standards, responsive design, and frontend architecture."
  },
  {
    title: "Python with ML",
    issuer: "TCIL-IT Chandigarh",
    date: "2025",
    icon: <FiDatabase className="text-neon-purple" />,
    color: "neon-purple",
    description: "Advanced training in Python programming, data analysis, and machine learning model integration."
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-dark-black relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter">
            Verified <span className="text-neon-gradient">Credentials</span>
          </h2>
          <p className="text-gray-500 font-bold uppercase tracking-[0.4em] mt-4 text-[10px] md:text-sm">Professional Recognition & Badges</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card-futuristic p-6 md:p-10 border border-white/5 relative group h-full flex flex-col"
            >
              <div className={`absolute top-0 left-0 w-2 h-full bg-${cert.color} opacity-20 group-hover:opacity-100 transition-opacity`} />
              
              <div className="flex items-start justify-between mb-8">
                 <div className="p-3 md:p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-neon-blue/50 transition-colors">
                    {React.cloneElement(cert.icon, { size: 24 })}
                 </div>
                 <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[10px] md:text-xs font-mono text-gray-500">
                    <FiAward size={12} className={`text-${cert.color}`} /> {cert.date}
                 </div>
              </div>

              <div className="flex-1 space-y-4">
                 <h3 className="text-2xl md:text-3xl font-black text-white group-hover:neon-text-blue transition-all italic">{cert.title}</h3>
                 <p className="text-gray-400 font-bold text-sm md:text-base">{cert.issuer}</p>
                 <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
                    {cert.description}
                 </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                 <span className="text-[8px] md:text-[10px] text-gray-700 font-black uppercase tracking-widest">Digital_ID_Verified</span>
                 <button className="flex items-center gap-2 text-neon-blue text-[10px] md:text-xs font-black uppercase tracking-widest hover:neon-text-blue transition-all">
                    View Cert <FiExternalLink />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
