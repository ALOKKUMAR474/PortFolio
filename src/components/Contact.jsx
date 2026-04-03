import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiMail, FiPhone, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: "Hi! I'm Alok's virtual assistant. How can I help you today?" },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), type: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = { 
        id: Date.now() + 1, 
        type: 'bot', 
        text: "Thanks for reaching out! Alok usually responds within 24 hours. You can also reach him at alokkumarrajawat47@gmail.com." 
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-dark-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-neon-blue/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10 flex flex-col lg:flex-row gap-12 md:gap-16 items-start">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/3 space-y-8 md:space-y-12 text-center lg:text-left"
        >
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight italic tracking-tighter">
              Let's <span className="text-neon-gradient">Connect</span>.
            </h2>
            <p className="text-gray-500 font-medium text-base md:text-lg leading-relaxed max-w-sm mx-auto lg:mx-0">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision.
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-start gap-4 md:gap-4">
              <div className="flex items-center gap-4 group w-full max-w-xs sm:max-w-none">
                 <div className="p-3 md:p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-neon-blue/50 transition-all text-neon-blue">
                   <FiMail size={20} />
                 </div>
                 <div className="space-y-1 text-left">
                   <p className="text-gray-500 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Email Me</p>
                   <a href="mailto:alokkumarrajawat47@gmail.com" className="text-white font-black tracking-tight text-sm md:text-lg hover:text-neon-blue transition-colors break-all">alokkumarrajawat47@gmail.com</a>
                 </div>
              </div>
              
              <div className="flex items-center gap-4 group w-full max-w-xs sm:max-w-none">
                 <div className="p-3 md:p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-neon-purple/50 transition-all text-neon-purple">
                   <FiPhone size={20} />
                 </div>
                 <div className="space-y-1 text-left">
                   <p className="text-gray-500 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Call Me</p>
                   <a href="tel:+918603725055" className="text-white font-black tracking-tight text-sm md:text-lg hover:text-neon-purple transition-colors">+91 8603725055</a>
                 </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start gap-4">
             {[FiGithub, FiLinkedin, FiTwitter].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#"
                  whileHover={{ y: -5 }}
                  className="p-3 md:p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-neon-blue hover:border-neon-blue transition-all"
                >
                  <Icon size={18} />
                </motion.a>
             ))}
          </div>
        </motion.div>

        {/* Right: Chat UI */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="w-full lg:w-2/3 h-[500px] md:h-[600px]"
        >
           <div className="glass-card-futuristic h-full flex flex-col overflow-hidden relative border border-white/10">
              {/* Chat Header */}
              <div className="p-4 md:p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue font-black border border-neon-blue/30 text-sm">A</div>
                    <div className="space-y-0.5">
                       <p className="text-white font-bold text-xs md:text-sm">Alok's Assistant</p>
                       <div className="flex items-center gap-1.5 md:gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-[8px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-none">Online & Ready</span>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6 custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-80">
                 <AnimatePresence initial={false}>
                    {messages.map((m) => (
                       <motion.div
                         key={m.id}
                         initial={{ opacity: 0, y: 10, scale: 0.95 }}
                         animate={{ opacity: 1, y: 0, scale: 1 }}
                         className={`flex ${m.type === 'user' ? 'justify-end' : 'justify-start'}`}
                       >
                          <div className={`max-w-[85%] md:max-w-[80%] p-3 md:p-4 rounded-xl md:rounded-2xl text-[10px] md:text-sm font-medium leading-relaxed ${
                            m.type === 'user' 
                            ? 'bg-neon-blue text-dark-black rounded-tr-none font-bold' 
                            : 'bg-white/5 text-gray-300 border border-white/10 rounded-tl-none backdrop-blur-md'
                          }`}>
                            {m.text}
                          </div>
                       </motion.div>
                    ))}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                      >
                         <div className="bg-white/5 p-3 md:p-4 rounded-xl md:rounded-2xl rounded-tl-none border border-white/10 flex gap-1 md:gap-2">
                            <span className="w-1 md:w-1.5 h-1 md:h-1.5 bg-gray-500 rounded-full animate-bounce" />
                            <span className="w-1 md:w-1.5 h-1 md:h-1.5 bg-gray-500 rounded-full animate-bounce delay-100" />
                            <span className="w-1 md:w-1.5 h-1 md:h-1.5 bg-gray-500 rounded-full animate-bounce delay-200" />
                         </div>
                      </motion.div>
                    )}
                 </AnimatePresence>
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSend} className="p-4 md:p-6 bg-white/[0.01] border-t border-white/5 relative">
                 <div className="relative">
                    <input 
                       type="text" 
                       value={inputValue}
                       onChange={(e) => setInputValue(e.target.value)}
                       placeholder="Enter your transmission..."
                       className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-white outline-none focus:border-neon-blue/50 focus:bg-white/[0.08] transition-all placeholder:text-gray-600 font-medium text-xs md:text-sm"
                    />
                    <button 
                       type="submit"
                       disabled={!inputValue.trim()}
                       className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-lg md:rounded-xl bg-neon-blue text-dark-black hover:scale-105 transition-all disabled:opacity-50 disabled:scale-100 shadow-[0_0_15px_rgba(0,243,255,0.3)]"
                    >
                       <FiSend size={16} />
                    </button>
                 </div>
                 <p className="text-[8px] md:text-[10px] text-gray-700 text-center mt-3 md:mt-4 font-bold uppercase tracking-[0.2em] pointer-events-none">Encrypted Transmission Channel</p>
              </form>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
