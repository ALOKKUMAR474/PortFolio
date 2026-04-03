import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-dark-black relative">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
          {/* Left: Interactive Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3"
          >
            <div className="relative group overflow-hidden glass-card-futuristic p-6 md:p-8 border border-white/5 shadow-2xl hover:border-neon-blue/30 transition-all duration-700">
               <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-neon-blue/5 rounded-full blur-2xl md:blur-3xl group-hover:bg-neon-blue/20 transition-all duration-700" />
               
               <div className="space-y-4 md:space-y-6">
                  <div className="space-y-1 md:space-y-2">
                    <p className="text-neon-blue font-bold text-[10px] md:text-xs uppercase tracking-widest">Profile Status</p>
                    <h3 className="text-2xl md:text-3xl font-black text-white italic">The Developer</h3>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    Passionate about building modern, scalable, and data-driven web applications 
                    with <span className="text-white">Clean UI/UX</span>. I specialize in the 
                    <span className="text-neon-purple"> MERN Stack</span> and 
                    reactive <span className="text-neon-blue"> Motion Design</span>.
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4 md:pt-6 border-t border-white/5">
                    <div>
                      <p className="text-white font-bold text-base md:text-lg">India</p>
                      <p className="text-gray-500 text-[8px] md:text-[10px] uppercase tracking-widest leading-none">Base Location</p>
                    </div>
                    <div>
                      <p className="text-white font-bold text-base md:text-lg">Fluent</p>
                      <p className="text-gray-500 text-[8px] md:text-[10px] uppercase tracking-widest leading-none">English Prof.</p>
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Right: Summary & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/3 space-y-8 md:space-y-12 text-center lg:text-left"
          >
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                Crafting <span className="text-neon-gradient">Scalable Solutions</span> <br className="hidden sm:block" /> 
                Through Modern Engineering.
              </h2>
              <div className="w-16 h-1 bg-neon-blue mx-auto lg:mx-0" />
              <div className="space-y-4 md:space-y-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                <p>
                  As a Frontend Developer with hands-on experience in MERN stack development, 
                  I focus on creating high-performance web applications that don't just work, 
                  but <span className="text-white italic">provide an experience</span>.
                </p>
                <p>
                  My 6-week industrial training at <span className="text-white">TCIL-IT Chandigarh</span> 
                  solidified my foundation in full-stack applications, REST APIs, and 
                  database integration using MongoDB and Node.js.
                </p>
                <p className="hidden sm:block">
                  I'm currently pursuing my <span className="text-neon-blue">Bachelor of Computer Applications (BCA)</span> 
                  at Chandigarh Group of Colleges, Landran, maintaining a strong 
                  <span className="text-white"> 7.2 CGPA</span> while continuously 
                  pushing the boundaries of what is possible on the web.
                </p>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <div className="space-y-1">
                <p className="text-neon-blue font-black text-2xl md:text-3xl">2026</p>
                <p className="text-gray-500 text-[8px] md:text-[10px] font-bold uppercase tracking-widest leading-none">Expected Graduation</p>
              </div>
              <div className="space-y-1">
                <p className="text-neon-purple font-black text-2xl md:text-3xl">MERN</p>
                <p className="text-gray-500 text-[8px] md:text-[10px] font-bold uppercase tracking-widest leading-none">Primary Stack</p>
              </div>
              <div className="space-y-1">
                <p className="text-white font-black text-2xl md:text-3xl">7.2</p>
                <p className="text-gray-500 text-[8px] md:text-[10px] font-bold uppercase tracking-widest leading-none">Current CGPA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
