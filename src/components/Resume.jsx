import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaFileAlt } from 'react-icons/fa';
import resume from '../assets/resume.pdf';

const Resume = () => {
  return (
    <section id='resume' className='relative bg-background overflow-hidden'>
      {/* Background Glow */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] -z-10 rounded-full opacity-50' />

      <div className='max-w-[1440px] mx-auto'>
        <div className='flex flex-col items-center text-center mb-16 space-y-4'>
          <span className='text-primary font-bold tracking-[0.2em] uppercase text-sm px-4 py-1 rounded-full bg-primary/10 inline-block'>
            Curriculum Vitae
          </span>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight'>
            Professional <span className='text-primary'>Resume</span>
          </h2>
          <div className='w-20 h-1.5 bg-gradient-to-r from-primary to-accent-purple rounded-full' />
        </div>

        <div className='grid lg:grid-cols-5 gap-12 items-start'>
          {/* Resume Preview */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='lg:col-span-3 glass-card p-2 md:p-4 aspect-[1/1.4] w-full max-h-[800px] overflow-hidden'
          >
            <div className='w-full h-full rounded-xl overflow-hidden bg-slate-900/50 relative group'>
              <iframe 
                src={`${resume}#toolbar=0`} 
                title='Resume Preview' 
                className='w-full h-full border-none'
              />
              {/* Overlay for better mobile touch UX or just aesthetics */}
              <div className='absolute inset-0 bg-transparent pointer-events-none' />
            </div>
          </motion.div>

          {/* Resume Info & Action */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='lg:col-span-2 space-y-8 lg:pt-12'
          >
            <div className='space-y-6'>
              <div className='inline-flex items-center gap-3 text-primary'>
                <FaFileAlt size={28} />
                <h3 className='text-3xl font-bold font-display text-white'>My <span className='text-slate-500'>Profile</span></h3>
              </div>
              <p className='text-slate-400 text-lg leading-relaxed font-medium'>
                Looking for a more detailed overview of my professional experience, technical expertise, and academic achievements? 
                Download my comprehensive resume to learn how I can contribute to your team.
              </p>
            </div>

            <div className='space-y-6'>
              <h4 className='text-lg font-bold text-white'>Key Highlights:</h4>
              <ul className='space-y-4'>
                {[
                  'Frontend Specialist (React.js, Tailwind CSS)',
                  'MERN Stack Proficiency (MongoDB, Express, Node)',
                  'Industrial Training at TCIL-IT Chandigarh',
                  'Pursuing BCA at CGC (2023-2026)'
                ].map((item, i) => (
                  <li key={i} className='flex items-center gap-3 text-slate-300 font-medium'>
                    <span className='w-1.5 h-1.5 rounded-full bg-primary ring-4 ring-primary/20' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className='pt-8'>
              <motion.a 
                href={resume} 
                download='Alok_Kumar_Resume.pdf'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='btn-primary w-full h-16 flex items-center justify-center gap-4 text-xl'
              >
                Download Full Resume <FaDownload size={20} />
              </motion.a>
              <p className='text-center text-slate-500 text-sm mt-4 font-medium'>
                PDF Format • Optimized for ATS
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
