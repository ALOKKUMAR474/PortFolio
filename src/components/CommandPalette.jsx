import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiHome, FiUser, FiBarChart2, FiLayers, FiCpu, FiMessageSquare, FiCommand, FiTerminal, FiFileText } from 'react-icons/fi';

const tools = [
  { name: 'Go to Home', id: 'home', icon: <FiHome />, shortcut: 'H' },
  { name: 'View About', id: 'about', icon: <FiUser />, shortcut: 'A' },
  { name: 'Open Analytics', id: 'dashboard', icon: <FiBarChart2 />, shortcut: 'D' },
  { name: 'Explore Projects', id: 'projects', icon: <FiLayers />, shortcut: 'P' },
  { name: 'Download Resume', id: 'resume', icon: <FiFileText />, shortcut: 'R' },
  { name: 'Check Skills', id: 'skills', icon: <FiCpu />, shortcut: 'S' },
  { name: 'Contact Alok', id: 'contact', icon: <FiMessageSquare />, shortcut: 'C' },
];

const CommandPalette = ({ isOpen, setIsOpen, setActiveSection }) => {
  const [query, setQuery] = useState('');

  const filteredTools = tools.filter(tool => 
    tool.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && !isOpen) {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[250] flex items-start justify-center pt-[15vh] px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-dark-black/60 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="w-full max-w-2xl glass-premium rounded-[32px] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden relative"
          >
             <div className="p-6 border-b border-white/5 flex items-center gap-4 bg-white/[0.02]">
                <FiSearch className="text-neon-blue" size={20} />
                <input 
                  autoFocus
                  type="text" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a command or search..."
                  className="w-full bg-transparent border-none outline-none text-white text-lg placeholder:text-gray-600 font-medium"
                />
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-gray-400 font-black tracking-widest">
                   ESC
                </div>
             </div>

             <div className="max-h-[400px] overflow-y-auto p-4 custom-scrollbar">
                {filteredTools.length > 0 ? (
                  <div className="space-y-1">
                    <p className="px-4 py-2 text-[10px] text-gray-500 font-black uppercase tracking-[0.3em]">Navigation Nodes</p>
                    {filteredTools.map((tool) => (
                      <button
                        key={tool.id}
                        onClick={() => {
                          setActiveSection(tool.id);
                          setIsOpen(false);
                        }}
                        className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-all group text-left"
                      >
                         <div className="flex items-center gap-4">
                            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:border-neon-blue/50 text-gray-400 group-hover:text-neon-blue transition-all">
                               {tool.icon}
                            </div>
                            <span className="text-white font-bold group-hover:neon-text-blue transition-all">{tool.name}</span>
                         </div>
                         <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] text-gray-600 font-black uppercase tracking-widest mr-2">Execute Signal</span>
                            <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-neon-blue text-dark-black text-[10px] font-black tracking-widest">
                               <FiCommand size={10} /> {tool.shortcut}
                            </div>
                         </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-20 text-center space-y-4">
                     <FiTerminal className="mx-auto text-gray-700" size={48} />
                     <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">No Signal Detected for "{query}"</p>
                  </div>
                )}
             </div>

             <div className="p-4 bg-white/[0.01] border-t border-white/5 flex justify-between items-center px-8">
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
                   <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">Alok_v3.0.syst_cmd</p>
                </div>
                <div className="flex gap-4">
                   <span className="text-[10px] text-gray-700 font-black uppercase tracking-widest flex items-center gap-1"><span className="p-1 rounded bg-white/5">↑↓</span> Select</span>
                   <span className="text-[10px] text-gray-700 font-black uppercase tracking-widest flex items-center gap-1"><span className="p-1 rounded bg-white/5">ENTER</span> Invoke</span>
                </div>
             </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
