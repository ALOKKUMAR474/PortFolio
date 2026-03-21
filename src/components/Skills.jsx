import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGithub, FaDatabase, FaExternalLinkAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiVite } from 'react-icons/si';
import Tilt from 'react-parallax-tilt';

const Skills = () => {
  const categories = [
    {
      title: 'Frontend Mastery',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className='text-[#E34F26]' />, level: '95%' },
        { name: 'CSS3', icon: <FaCss3Alt className='text-[#1572B6]' />, level: '90%' },
        { name: 'JavaScript', icon: <FaJs className='text-[#F7DF1E]' />, level: '85%' },
        { name: 'React.js', icon: <FaReact className='text-[#61DAFB]' />, level: '90%' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className='text-[#06B6D4]' />, level: '85%' },
      ]
    },
    {
      title: 'Backend & Databases',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className='text-[#339933]' />, level: '75%' },
        { name: 'Express.js', icon: <SiExpress className='text-white' />, level: '80%' },
        { name: 'MongoDB', icon: <SiMongodb className='text-[#47A248]' />, level: '70%' },
        { name: 'SQL/NoSQL', icon: <FaDatabase className='text-slate-400' />, level: '65%' },
      ]
    },
    {
      title: 'Tools & Workflow',
      skills: [
        { name: 'Git & GitHub', icon: <FaGithub className='text-white' />, level: '85%' },
        { name: 'Python', icon: <FaPython className='text-[#3776AB]' />, level: '60%' },
        { name: 'VS Code', icon: <FaExternalLinkAlt className='text-[#007ACC]' />, level: '95%' },
        { name: 'Vite', icon: <SiVite className='text-[#646CFF]' />, level: '90%' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id='skills' className='relative min-h-screen flex items-center bg-transparent'>
      {/* Decorative Blur */}
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10' />
      
      <div className='max-w-[1440px] mx-auto w-full'>
        <div className='flex flex-col items-center text-center mb-16 space-y-4'>
           <span className='text-primary font-bold tracking-[0.2em] uppercase text-sm px-4 py-1 rounded-full bg-primary/10 inline-block'>
              Core Competencies
            </span>
            <h2 className='text-4xl md:text-5xl font-display font-extrabold tracking-tight'>
              Technical <span className='text-primary'>Skillset</span>
            </h2>
            <div className='w-20 h-1.5 bg-gradient-to-r from-primary to-accent-purple rounded-full' />
        </div>

        <div className='grid lg:grid-cols-3 gap-8'>
          {categories.map((category, catIdx) => (
            <Tilt 
              key={catIdx}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              transitionSpeed={1000}
              scale={1.02}
              gyroscope={true}
              className='h-full'
            >
            <motion.div 
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={containerVariants}
              className='glass-card p-8 space-y-8 h-full hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-shadow duration-300 hover:border-primary/50'
            >
              <h3 className='text-xl font-bold text-white border-b border-white/5 pb-4'>
                {category.title}
              </h3>
              <div className='space-y-6'>
                {category.skills.map((skill, idx) => (
                  <motion.div key={idx} variants={itemVariants} className='space-y-2'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-3'>
                        <span className='text-2xl'>{skill.icon}</span>
                        <span className='font-bold text-slate-300'>{skill.name}</span>
                      </div>
                      <span className='text-xs font-bold text-primary'>{skill.level}</span>
                    </div>
                    <div className='h-1.5 w-full bg-white/5 rounded-full overflow-hidden'>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className='h-full bg-gradient-to-r from-primary to-accent-purple rounded-full'
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
