import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCertificate } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'MERN Stack Developer Trainee',
      company: 'TCIL-IT Chandigarh',
      period: 'June 2025 – July 2025',
      description: [
        'Developed full-stack industrial-grade applications using React, Node, and MongoDB.',
        'Architected RESTful APIs and optimized database schemas for performance.',
        'Mastered professional Git workflows and modern frontend standards.',
        'Pivoted between building intuitive UIs and complex server-side logic.'
      ],
      type: 'work',
      current: true
    },
    {
      title: 'BCA (Pursuing)',
      company: 'Chandigarh Group of Colleges',
      period: '2023 – 2026',
      description: [
        'Focusing on Computer Fundamentals, Data Structures, and Modern Web Tech.',
        'Current CGPA: High Standing in technical coursework.',
        'Active participant in tech seminars and coding competitions.',
      ],
      type: 'education',
      current: false
    }
  ];

  const certifications = [
    { title: 'Web Design for Beginners', provider: 'MindLuster', date: '2024' },
    { title: 'Python Machine Learning', provider: 'MindLuster', date: '2024' }
  ];

  return (
    <section id='experience' className='relative min-h-screen bg-transparent'>
       <div className='absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-accent-purple/5 blur-[120px] rounded-full -z-10' />

      <div className='max-w-[1440px] mx-auto'>
         <div className='flex flex-col items-center text-center mb-20 space-y-4'>
           <span className='text-primary font-bold tracking-[0.2em] uppercase text-sm px-4 py-1 rounded-full bg-primary/10 inline-block'>
              My Roadmap
            </span>
            <h2 className='text-4xl md:text-5xl font-display font-extrabold tracking-tight'>
              Experience & <span className='text-primary'>Education</span>
            </h2>
            <div className='w-20 h-1.5 bg-gradient-to-r from-primary to-accent-purple rounded-full' />
        </div>
        
        <div className='relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/5 before:to-transparent'>
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className='relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group'
            >
              {/* Dot */}
              <div className='flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-surface shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10'>
                 {exp.type === 'work' ? <FaBriefcase size={14} className='text-primary' /> : <FaGraduationCap size={16} className='text-accent-purple' />}
              </div>
              
              {/* Card */}
              <div className='w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 md:p-8 hover:border-primary/20'>
                <div className='flex items-center justify-between mb-2'>
                   <h3 className='text-xl md:text-2xl font-bold font-display text-white'>{exp.title}</h3>
                   {exp.current && (
                     <span className='px-2 py-1 bg-primary/20 text-primary text-[10px] font-bold rounded uppercase tracking-widest animate-pulse'>Active</span>
                   )}
                </div>
                <div className='flex flex-wrap items-center gap-2 mb-4'>
                   <span className='text-sm font-bold text-primary'>{exp.company}</span>
                   <span className='w-1 h-1 bg-slate-600 rounded-full' />
                   <span className='text-xs font-medium text-slate-500 uppercase tracking-wider'>{exp.period}</span>
                </div>
                <ul className='space-y-3'>
                  {exp.description.map((item, i) => (
                    <li key={i} className='flex items-start gap-3 text-slate-400 text-sm leading-relaxed'>
                       <span className='mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0' />
                       {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className='mt-24'>
           <div className='flex items-center gap-4 mb-10'>
              <h3 className='text-2xl font-bold font-display text-white'>Certifications</h3>
              <div className='flex-grow h-px bg-white/5' />
           </div>
           
           <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
             {certifications.map((cert, i) => (
               <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className='glass-effect flex items-center gap-6 p-6 rounded-2xl border border-white/5 group transition-all duration-300 hover:bg-white/5'
               >
                  <div className='w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300'>
                    <FaCertificate size={24} />
                  </div>
                  <div className='space-y-1'>
                    <h4 className='font-bold text-white text-lg'>{cert.title}</h4>
                    <p className='text-sm text-slate-500 font-medium'>{cert.provider} • {cert.date}</p>
                  </div>
               </motion.div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
