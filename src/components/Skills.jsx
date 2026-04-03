import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 100 },
    ],
    color: "neon-blue"
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
    ],
    color: "neon-purple"
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", level: 90 },
      { name: "Atlas", level: 85 },
      { name: "Supabase", level: 80 },
    ],
    color: "white"
  },
  {
    category: "Programming",
    items: [
      { name: "Python", level: 75 },
      { name: "Git", level: 95 },
      { name: "Vite", level: 90 },
      { name: "Vercel", level: 85 },
    ],
    color: "neon-blue"
  }
];

const SkillBar = ({ name, level, color }) => (
  <div className="space-y-1.5 md:space-y-2">
    <div className="flex justify-between items-center text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400">
      <span>{name}</span>
      <span className={`text-${color} font-mono`}>{level}%</span>
    </div>
    <div className="h-1 md:h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className={`h-full bg-${color} shadow-[0_0_10px_${color}]`}
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-dark-black relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-neon-purple/5 blur-[100px] md:blur-[160px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20 text-center"
        >
          <h2 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter">
            TECHNICAL <span className="text-neon-gradient">ARSENAL</span>
          </h2>
          <p className="text-gray-500 font-bold uppercase tracking-[0.3em] mt-4 text-[10px] md:text-sm">Developer Proficiency Matrix</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {skills.map((skillGroup, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.1 }}
              className="glass-card-futuristic p-6 md:p-8 flex flex-col items-center group anti-gravity relative"
              style={{ animationDelay: `${groupIdx * 0.5}s` }}
            >
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-20 h-1 bg-${skillGroup.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <h3 className="text-lg md:text-xl font-black text-white mb-6 md:mb-8 text-center uppercase tracking-widest italic group-hover:neon-text-blue transition-all">
                {skillGroup.category}
              </h3>
              
              <div className="space-y-4 md:space-y-6 w-full">
                {skillGroup.items.map((skill, idx) => (
                  <SkillBar 
                    key={idx} 
                    name={skill.name} 
                    level={skill.level} 
                    color={skillGroup.color === 'white' ? 'neon-blue' : skillGroup.color} 
                  />
                ))}
              </div>

              {/* Interaction Decorator */}
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/5 w-full text-center">
                <span className="text-[8px] md:text-[10px] text-gray-600 font-bold uppercase tracking-widest group-hover:text-neon-blue transition-colors">System Verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
