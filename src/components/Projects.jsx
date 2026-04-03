import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiLayers, FiCpu, FiMonitor } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: "FinanceFlow",
    subtitle: "Smart Personal Finance Tracker",
    description: "A comprehensive MERN stack application for managing finances, tracking expenses, and planning budgets with interactive data visualization.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind", "Recharts", "Framer Motion"],
    features: ["Secure Authentication", "Expense Tracking", "Investment Dashboard", "Budget Planner"],
    problem: "People struggle to maintain a clear overview of their scattered financial data and spending habits.",
    solution: "A centralized dashboard that automatically categorizes expenses and provides predictive budget insights.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    color: "neon-blue"
  },
  {
    id: 2,
    title: "BookNest",
    subtitle: "E-Commerce Platform",
    description: "A robust online marketplace for books with over 1000+ listings, featuring optimized search and secure checkout flows.",
    tech: ["React", "Express.js", "MongoDB", "Redux", "Stripe API"],
    features: ["Fast Checkout", "Order Management", "Filtering System", "Admin Dashboard"],
    problem: "Traditional book marketplaces often lack specialized search filters and fast navigation.",
    solution: "Custom-built indexing and search mechanism to handle large catalogs with sub-second response times.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
    color: "neon-purple"
  },
  {
    id: 3,
    title: "Portfolio",
    subtitle: "Futuristic Personal Brand",
    description: "A high-performance portfolio website built with an anti-gravity concept, showcasing frontend expertise and motion design capabilities.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Three.js"],
    features: ["Glassmorphism UI", "Anti-Gravity Animations", "Interactive Charts", "3D Hero Section"],
    problem: "Standard portfolios often feel static and fail to demonstrate technical motion design skills.",
    solution: "Immersive 3D layer combined with physics-based layout systems and interactive components.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    color: "white"
  }
];

const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-6 bg-dark-black/90 backdrop-blur-2xl"
  >
    <motion.div
      initial={{ scale: 0.9, y: 50, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 0.9, y: 50, opacity: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="bg-white/[0.02] border border-white/10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[32px] md:rounded-[40px] shadow-[0_0_100px_rgba(0,243,255,0.1)] relative custom-scrollbar"
    >
      <button 
        onClick={onClose}
        className="absolute top-4 md:top-8 right-4 md:right-8 p-2 md:p-3 rounded-full bg-white/5 border border-white/10 hover:border-neon-blue/50 text-white z-20 hover:scale-110 transition-all"
      >
        <FiX size={20} />
      </button>

      <div className="grid lg:grid-cols-2">
        <div className="h-[300px] lg:h-full min-h-[300px] md:min-h-[400px]">
           <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60" />
        </div>
        
        <div className="p-6 md:p-10 lg:p-16 space-y-8 md:space-y-10">
          <div className="space-y-4">
             <div className="flex items-center gap-2 text-neon-blue font-bold text-[10px] md:text-xs uppercase tracking-widest">
               <FiLayers /> Case Study 0{project.id}
             </div>
             <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter">{project.title}</h2>
             <p className="text-lg md:text-xl text-gray-400 font-medium">{project.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 py-6 md:py-8 border-y border-white/5">
            <div className="space-y-2">
               <p className="text-white font-bold flex items-center gap-2 uppercase text-[10px] md:text-xs tracking-tighter"><FiCpu className="text-neon-purple"/> Problem</p>
               <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-medium">{project.problem}</p>
            </div>
            <div className="space-y-2">
               <p className="text-white font-bold flex items-center gap-2 uppercase text-[10px] md:text-xs tracking-tighter"><FiMonitor className="text-neon-blue"/> Solution</p>
               <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-medium">{project.solution}</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-white font-bold uppercase text-[10px] md:text-xs tracking-widest">Core Features</p>
            <div className="flex flex-wrap gap-2 md:gap-4">
               {project.features.map((feat, i) => (
                 <span key={i} className="px-3 md:px-4 py-1.5 md:py-2 bg-white/5 border border-white/5 rounded-lg md:rounded-xl text-[10px] md:text-xs font-medium text-gray-400">{feat}</span>
               ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-white font-bold uppercase text-[10px] md:text-xs tracking-widest">Technological Stack</p>
            <div className="flex flex-wrap gap-2 md:gap-3">
               {project.tech.map((t, i) => (
                 <span key={i} className="text-neon-blue font-mono text-[10px] md:text-sm">#{t}</span>
               ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 md:pt-6">
            <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-neon-blue text-dark-black font-black rounded-xl md:rounded-2xl flex items-center justify-center gap-2 hover:scale-105 transition-all text-sm uppercase tracking-widest">
               Live Preview <FiExternalLink />
            </button>
            <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white/5 border border-white/10 text-white font-black rounded-xl md:rounded-2xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-sm uppercase tracking-widest">
               Source Code <FiGithub />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-32 bg-dark-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
            <div className="space-y-2 md:space-y-4">
               <span className="text-neon-blue font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">Featured Deployments</span>
               <h2 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter">PROJECTS_V3</h2>
            </div>
            <p className="text-gray-500 max-w-sm mb-2 font-medium italic text-sm md:text-base">
                A selection of my most challenging and impactful engineering projects.
            </p>
          </div>
          <div className="w-full h-[1px] bg-white/10 mt-8 md:mt-12" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] md:rounded-[32px] glass-card-futuristic p-1.5 md:p-2 h-full">
                <div className="relative h-full w-full rounded-[20px] md:rounded-[28px] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-40 md:opacity-50 group-hover:opacity-80" 
                  />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 pt-16 md:pt-20 bg-gradient-to-t from-dark-black via-dark-black/60 to-transparent">
                     <div className="space-y-2 md:space-y-3">
                        <div className="flex gap-2">
                           {project.tech.slice(0, 2).map((t, i) => (
                             <span key={i} className="text-[8px] md:text-[10px] text-neon-blue font-bold uppercase tracking-wider bg-neon-blue/10 px-2 py-1 rounded-md">{t}</span>
                           ))}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-white group-hover:neon-text-blue transition-all italic">{project.title}</h3>
                        <p className="text-gray-400 text-xs md:text-sm font-medium line-clamp-2">{project.description}</p>
                     </div>
                  </div>

                  {/* Corner indicator */}
                  <div className="absolute top-4 md:top-6 right-4 md:right-6 p-2 md:p-3 rounded-full bg-dark-black/40 border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all transform translate-y-[-10px] group-hover:translate-y-0">
                     <FiExternalLink className="text-white" size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
