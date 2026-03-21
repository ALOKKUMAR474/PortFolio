import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className='relative bg-transparent pt-10 pb-20 border-t border-white/5'>
      <div className='max-w-[1440px] mx-auto px-6 flex flex-col items-center gap-12'>
        
        {/* Scroll Top Button */}
        <button 
          onClick={scrollToTop}
          className='w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 text-slate-400 hover:text-white transition-all duration-300 -mt-16 group'
          aria-label='Scroll to top'
        >
          <FaArrowUp className='group-hover:-translate-y-1 transition-transform' />
        </button>

        <div className='flex flex-col items-center gap-6'>
          <div className='flex items-center gap-2'>
            <div className='w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center font-display font-extrabold text-xl text-primary border border-primary/20'>
              A
            </div>
            <span className='font-display font-bold text-2xl tracking-tight'>
              Alok <span className='text-primary'>Kumar</span>
            </span>
          </div>
          <p className='text-slate-500 text-sm font-medium text-center max-w-sm'>
            Designed and built with passion. Always striving to push the boundaries of digital experiences.
          </p>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-between w-full pt-10 border-t border-white/5 gap-8'>
          <p className='text-slate-500 text-sm font-medium order-2 md:order-1'>
            © {currentYear} All rights reserved.
          </p>
          
          <div className='flex items-center gap-8 order-1 md:order-2'>
            {[
              { icon: <FaGithub size={20} />, url: 'https://github.com/ALOKKUMAR474' },
              { icon: <FaLinkedin size={20} />, url: 'https://linkedin.com/in/alok-kumar-901727291' },
              { icon: <FaTwitter size={20} />, url: '#' }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.url} 
                target='_blank' 
                rel='noreferrer' 
                className='text-slate-500 hover:text-white transition-colors'
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          <div className='flex items-center gap-8 text-slate-500 text-sm font-bold order-3 underline-offset-4 decoration-primary/30'>
            <a href='#' className='hover:text-white hover:underline transition-all'>Privacy</a>
            <a href='#' className='hover:text-white hover:underline transition-all'>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
