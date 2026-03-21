import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id='contact' className='relative bg-transparent'>
      {/* Background Radial Glow */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/5 blur-[150px] -z-10 select-none opacity-50' />

      <div className='max-w-[1440px] mx-auto'>
        <div className='flex flex-col items-center text-center mb-20 space-y-4'>
           <span className='text-primary font-bold tracking-[0.2em] uppercase text-sm px-4 py-1 rounded-full bg-primary/10 inline-block'>
              Get In Touch
            </span>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight'>
              Let's Create <span className='text-primary'>Something</span>
            </h2>
            <div className='w-20 h-1.5 bg-gradient-to-r from-primary to-accent-purple rounded-full' />
        </div>

        <div className='grid lg:grid-cols-5 gap-12'>
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='lg:col-span-2 space-y-12'
          >
            <div className='space-y-6'>
              <h3 className='text-3xl font-bold font-display text-white'>Contact <span className='text-slate-500'>Information</span></h3>
              <p className='text-slate-400 text-lg leading-relaxed max-w-sm'>
                I'm currently interested in freelance opportunities and full-time positions. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className='space-y-8'>
              {[
                { icon: <FaEnvelope />, title: 'Email Me', value: 'alokkumarrajawat47@gmail.com', href: 'mailto:alokkumarrajawat47@gmail.com' },
                { icon: <FaLinkedin />, title: 'LinkedIn', value: 'alok-kumar-901727291', href: 'https://linkedin.com/in/alok-kumar-901727291' },
                { icon: <FaMapMarkerAlt />, title: 'Location', value: 'Chandigarh, India', href: '#' }
              ].map((item, i) => (
                <div key={i} className='flex items-center gap-6 group'>
                  <div className='w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300'>
                    {item.icon}
                  </div>
                  <div className='space-y-1'>
                    <p className='text-xs uppercase tracking-widest text-slate-500 font-bold'>{item.title}</p>
                    <a href={item.href} className='text-lg font-bold text-slate-200 hover:text-primary transition-colors'>{item.value}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className='pt-8 border-t border-white/5'>
               <p className='text-xs uppercase tracking-widest text-slate-500 font-bold mb-6'>Follow My Socials</p>
               <div className='flex gap-4'>
                 <a href='https://github.com/ALOKKUMAR474' className='w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-primary transition-all duration-300'>
                   <FaGithub size={20} />
                 </a>
                 <a href='https://linkedin.com/in/alok-kumar-901727291' className='w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-primary transition-all duration-300'>
                   <FaLinkedin size={20} />
                 </a>
               </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='lg:col-span-3'
          >
            <div className='glass-card p-8 md:p-12'>
              <form className='grid gap-8'>
                <div className='grid md:grid-cols-2 gap-8'>
                  <div className='space-y-2'>
                    <label className='text-xs font-bold text-slate-400 uppercase tracking-widest pl-1'>Your Name</label>
                    <input 
                      type='text' 
                      placeholder='John Doe'
                      className='w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-white placeholder:text-slate-600 font-medium'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label className='text-xs font-bold text-slate-400 uppercase tracking-widest pl-1'>Email Address</label>
                    <input 
                      type='email' 
                      placeholder='john@example.com'
                      className='w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-white placeholder:text-slate-600 font-medium'
                    />
                  </div>
                </div>
                
                <div className='space-y-2'>
                  <label className='text-xs font-bold text-slate-400 uppercase tracking-widest pl-1'>Subject</label>
                  <input 
                    type='text' 
                    placeholder='How can I help you?'
                    className='w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-white placeholder:text-slate-600 font-medium'
                  />
                </div>

                <div className='space-y-2'>
                  <label className='text-xs font-bold text-slate-400 uppercase tracking-widest pl-1'>Message</label>
                  <textarea 
                    rows='6'
                    placeholder='Tell me about your project...'
                    className='w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-white placeholder:text-slate-600 font-medium resize-none'
                  />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='btn-primary w-full h-14 flex items-center justify-center gap-3 text-lg'
                >
                  Send Message <FaPaperPlane size={16} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
