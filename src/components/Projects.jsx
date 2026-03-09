import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'BookNest',
      subtitle: 'Full Stack E-Commerce Platform',
      description: 'A sophisticated MERN stack application featuring a robust 1000+ book inventory, secure checkout pipeline, and a highly responsive React frontend designed for peak performance.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      github: 'https://github.com/ALOKKUMAR474',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Portfolio Pro',
      subtitle: 'Modern Portfolio Template',
      description: 'A premium portfolio redesign focused on glassmorphism and smooth animations. Built with Framer Motion and Tailwind CSS to impress and inspire.',
      tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/ALOKKUMAR474',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id='projects' className='relative bg-background'>
      {/* Background Accent */}
      <div className='absolute top-0 right-0 w-full h-[500px] bg-primary/5 blur-[120px] -z-10 opacity-30 select-none' />
      
      <div className='max-w-[1440px] mx-auto'>
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6'>
          <div className='space-y-4'>
            <span className='text-primary font-bold tracking-[0.2em] uppercase text-sm px-4 py-1 rounded-full bg-primary/10 inline-block'>
              Recent Work
            </span>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight'>
              Featured <span className='text-primary'>Projects</span>
            </h2>
            <div className='w-20 h-1.5 bg-gradient-to-r from-primary to-accent-purple rounded-full' />
          </div>
          <p className='text-slate-400 max-w-md font-medium text-lg leading-relaxed'>
            A collection of selected works that showcase my ability to build elegant, high-performance web applications.
          </p>
        </div>
        
        <div className='grid md:grid-cols-2 gap-10'>
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className='glass-card group flex flex-col h-full hover:border-primary/30'
            >
              {/* Image Container */}
              <div className='relative aspect-video rounded-t-2xl overflow-hidden'>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-background/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'>
                   <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github} 
                    target='_blank' 
                    rel='noreferrer' 
                    className='w-12 h-12 bg-white text-background rounded-full flex items-center justify-center shadow-xl hover:bg-primary hover:text-white transition-all transform'
                  >
                    <FaGithub size={22} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.demo} 
                    target='_blank' 
                    rel='noreferrer' 
                    className='w-12 h-12 bg-white text-background rounded-full flex items-center justify-center shadow-xl hover:bg-primary hover:text-white transition-all transform'
                  >
                    <FaExternalLinkAlt size={20} />
                  </motion.a>
                </div>
              </div>
              
              {/* Content */}
              <div className='p-8 flex flex-col flex-grow space-y-4'>
                <div className='flex justify-between items-start'>
                  <div className='space-y-1'>
                    <h3 className='text-2xl font-bold font-display text-white group-hover:text-primary transition-colors'>{project.title}</h3>
                    <p className='text-primary text-xs uppercase tracking-widest font-extrabold'>{project.subtitle}</p>
                  </div>
                </div>
                
                <p className='text-slate-400 text-sm md:text-base leading-relaxed line-clamp-3'>
                  {project.description}
                </p>
                
                <div className='flex flex-wrap gap-2 pt-4'>
                  {project.tech.map((item, i) => (
                    <span key={i} className='px-3 py-1 bg-white/5 text-slate-300 text-[10px] uppercase tracking-wider rounded-md border border-white/5 font-bold'>
                      {item}
                    </span>
                  ))}
                </div>

                <div className='mt-auto pt-8 flex gap-4'>
                  <a href={project.demo} target='_blank' rel='noreferrer' className='flex-1 h-12 flex items-center justify-center btn-primary text-sm'>
                    Live Preview
                  </a>
                  <a href={project.github} target='_blank' rel='noreferrer' className='flex-1 h-12 flex items-center justify-center btn-secondary text-sm'>
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
