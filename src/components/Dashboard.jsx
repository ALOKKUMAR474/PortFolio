import React from 'react';
import { motion } from 'framer-motion';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, 
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, Cell 
} from 'recharts';

const skillData = [
  { subject: 'Frontend', A: 95, fullMark: 100 },
  { subject: 'Backend', A: 85, fullMark: 100 },
  { subject: 'Database', A: 90, fullMark: 100 },
  { subject: 'Python', A: 75, fullMark: 100 },
  { subject: 'ML/AI', A: 70, fullMark: 100 },
  { subject: 'UI/UX', A: 80, fullMark: 100 },
];

const projectData = [
  { name: 'FinanceFlow', completed: 95, complexity: 85 },
  { name: 'BookNest', completed: 90, complexity: 75 },
  { name: 'Portfolio', completed: 100, complexity: 90 },
];

const COLORS = ['#00F3FF', '#BF00FF', '#47A248', '#FF9800'];

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-20 md:py-32 bg-dark-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-neon-blue/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12 md:mb-20 text-center lg:text-left"
        >
           <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter">
             DEVELOPER <span className="text-neon-gradient">ANALYTICS</span>
           </h2>
           <p className="text-gray-500 font-bold uppercase tracking-[0.3em] mt-4 text-xs md:text-sm">Real-time Performance Metrics</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
           {/* Radar Chart: Skill Distribution */}
           <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card-futuristic p-6 md:p-10 border border-white/5 relative group h-[400px] md:h-[500px]"
           >
              <h3 className="text-xl md:text-2xl font-black text-white mb-8 italic uppercase tracking-widest flex items-center gap-3">
                 <span className="w-2 h-2 rounded-full bg-neon-blue" />
                 Skill Distribution
              </h3>
              <div className="w-full h-[300px] md:h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                    <PolarGrid stroke="#333" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#666', fontSize: 10 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                      name="Alok"
                      dataKey="A"
                      stroke="#00F3FF"
                      fill="#00F3FF"
                      fillOpacity={0.3}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
           </motion.div>

           {/* Bar Chart: Project Completion */}
           <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card-futuristic p-6 md:p-10 border border-white/5 relative group h-[400px] md:h-[500px]"
           >
              <h3 className="text-xl md:text-2xl font-black text-white mb-8 italic uppercase tracking-widest flex items-center gap-3 text-right lg:text-left justify-end lg:justify-start">
                 <span className="w-2 h-2 rounded-full bg-neon-purple order-last lg:order-first" />
                 Project Metrics
              </h3>
              <div className="w-full h-[300px] md:h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={projectData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false}/>
                    <XAxis dataKey="name" stroke="#555" fontSize={10} tickLine={false} axisLine={false}/>
                    <YAxis stroke="#555" fontSize={10} tickLine={false} axisLine={false}/>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0A0A0A', border: '1px solid #333', borderRadius: '12px', fontSize: '12px' }}
                      itemStyle={{ color: '#00F3FF' }}
                    />
                    <Bar dataKey="completed" fill="#BF00FF" radius={[6, 6, 0, 0]} barSize={30}>
                       {projectData.map((entry, index) => (
                         <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#BF00FF' : '#00F3FF'} />
                       ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
           </motion.div>
        </div>

        {/* Bottom Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-20">
           {[
             { label: 'Deployment Success', value: '100%', color: 'neon-blue' },
             { label: 'Active Node Nodes', value: '03', color: 'neon-purple' },
             { label: 'Optimization Rate', value: '98%', color: 'white' },
             { label: 'Security Status', value: 'SECURE', color: 'neon-blue' },
           ].map((stat, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="glass-premium p-4 md:p-8 border border-white/5 text-center group hover:border-white/10 transition-all rounded-3xl"
             >
               <p className={`text-2xl md:text-4xl font-black text-${stat.color} mb-2 shadow-neon-${stat.color === 'white' ? 'white' : stat.color.split('-')[1]}`}>{stat.value}</p>
               <p className="text-[8px] md:text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">{stat.label}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
