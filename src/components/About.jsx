import { motion } from 'framer-motion';
import profileImage from "../assets/profile-pic.png";
import Tilt from 'react-parallax-tilt';

const About = () => {
  return (
    <section id='about' className='relative overflow-hidden'>
      {/* Subtle Background Glow */}
      <div className='absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[100px] rounded-full' />
      
      <div className='max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 items-center'>
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='relative group'
        >
          {/* Profile Image Frame */}
          <Tilt 
             tiltMaxAngleX={10}
             tiltMaxAngleY={10}
             perspective={1000}
             transitionSpeed={1000}
             scale={1.02}
             className='relative z-10 w-full max-w-[500px] mx-auto aspect-square rounded-2xl p-1 bg-gradient-to-br from-primary via-accent-purple to-accent-pink shadow-xl transition-all duration-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] cursor-pointer'
          >
            <div className='w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center overflow-hidden relative'>
               <img 
                 src={profileImage} 
                 alt="Alok Kumar" 
                 className="w-full h-full object-cover rounded-2xl"
               />
               <div className='absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none z-10' />
               <div className='absolute bottom-8 left-8 text-left z-20 pointer-events-none'>
                  <p className='text-sm font-bold text-primary uppercase tracking-widest mb-1'>Based In</p>
                  <p className='text-xl font-bold text-white'>Chandigarh, India</p>
               </div>
            </div>
          </Tilt>
          
          {/* Decorative Elements */}
          <div className='absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl z-0' />
          <div className='absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-accent-purple/30 rounded-br-3xl z-0' />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='space-y-8'
        >
          <div className='space-y-4'>
            <span className='text-primary font-bold tracking-[0.2em] uppercase text-sm px-4 py-1 rounded-full bg-primary/10 inline-block'>
              My Story
            </span>
            <h2 className='text-4xl md:text-5xl font-display font-extrabold tracking-tight'>
              Who Am <span className='text-primary'>I</span>?
            </h2>
            <div className='w-20 h-1.5 bg-gradient-to-r from-primary to-accent-purple rounded-full' />
          </div>

          <div className='space-y-6 text-slate-400 text-lg leading-relaxed font-medium'>
            <p>
              I am currently pursuing a <span className='text-white font-bold'>Bachelor of Computer Applications (BCA)</span> at Chandigarh Group of Colleges (2023–2026). 
              My passion for web development ignited when I first discovered the power of crafting digital environments from lines of code.
            </p>
            <p>
              Recently, I completed industrial training in <span className='text-primary font-semibold'>MERN stack</span> development at TCIL-IT Chandigarh. 
              This experience empowered me to build robust, scalable applications, bridging the gap between elegant user interfaces and complex database structures.
            </p>
            <p>
              I believe in the philosophy of <span className='italic'>"Simplicity is the ultimate sophistication."</span> My goal is to create web applications that are not only functional but also provide a seamless, delightful experience for every user.
            </p>
          </div>

          <div className='grid grid-cols-2 gap-4 pt-4'>
            {[
              { label: 'Name', value: 'Alok Kumar' },
              { label: 'Education', value: 'BCA (Final Year)' },
              { label: 'Role', value: 'Frontend Dev' },
              { label: 'Status', value: 'Open for Work' }
            ].map((info, i) => (
              <div key={i} className='glass-effect p-4 rounded-xl border border-white/5'>
                <p className='text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1'>{info.label}</p>
                <p className='text-sm font-bold text-white'>{info.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
