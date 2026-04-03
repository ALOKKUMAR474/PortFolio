import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBookOpen, FiCalendar, FiMapPin } from 'react-icons/fi';

const experience = [
  {
    type: "experience",
    title: "Web Development Trainee",
    organization: "TCIL-IT Chandigarh",
    duration: "June 2025 – July 2025",
    location: "Chandigarh, India",
    description: "Completed a 6-week intensive MERN stack training. Built full-stack applications using React, Node.js, and MongoDB. Gained hands-on experience with REST APIs and real-world development workflows.",
    icon: <FiBriefcase className="text-neon-blue" />,
    color: "neon-blue"
  },
  {
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "CGC, Landran",
    duration: "2023 – 2026 (Expected)",
    location: "Mohali, Punjab",
    description: "Pursuing professional degree with a focus on core computer science and modern web technologies. Currently maintaining a CGPA of 7.2.",
    icon: <FiBookOpen className="text-neon-purple" />,
    color: "neon-purple"
  }
];

const TimelineItem = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    className={`relative flex flex-col md:flex-row items-center justify-between w-full mb-12 md:mb-16 ${
      index % 2 === 0 ? 'md:flex-row-reverse' : ''
    }`}
  >
    {/* Line connector dot */}
    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-dark-black border-2 border-neon-blue rounded-full z-10 shadow-[0_0_10px_rgba(0,243,255,0.5)] hidden md:block" />

    <div className="w-full md:w-[45%]">
      <div className="glass-card-futuristic p-6 md:p-8 relative group transition-all hover:border-white/20">
         <div className={`absolute top-0 ${index % 2 === 0 ? 'md:right-0' : 'md:left-0'} left-0 w-1 md:w-1 h-full bg-${item.color} opacity-20 group-hover:opacity-100 transition-opacity`} />
         
         <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
            <div className="flex items-center gap-3">
               <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-neon-blue/50 transition-colors">
                  {item.icon}
               </div>
               <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-500 italic">{item.type}</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] md:text-xs text-neon-blue font-mono">
               <FiCalendar /> {item.duration}
            </div>
         </div>

         <h3 className="text-xl md:text-2xl font-black text-white mb-2 group-hover:neon-text-blue transition-all italic">{item.title}</h3>
         <p className="text-gray-400 font-bold mb-4 flex flex-wrap items-center gap-2 text-sm md:text-base">
           {item.organization} <span className="hidden sm:inline w-1 h-1 bg-gray-600 rounded-full" /> <span className="text-[10px] md:text-xs text-gray-500 font-medium flex items-center gap-1"><FiMapPin /> {item.location}</span>
         </p>
         
         <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
           {item.description}
         </p>
      </div>
    </div>
    
    {/* Spacer for desktop layout */}
    <div className="hidden md:block w-[45%]" />
  </motion.div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-dark-black relative overflow-hidden">
      {/* Vertical central line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 hidden md:block" />

      <div className="container-custom relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter">
              Pathway <span className="text-neon-gradient">Analysis</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-[0.4em] mt-4 text-[10px] md:text-sm">Growth & Academic Timeline</p>
        </motion.div>

        <div className="relative">
          {experience.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
