import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
  
  const featuredProjects = [
    {
      id: 1,
      title: "Shynex",
      category: "Fashion Store",
      desc: "Premium D2C platform with Admin Dashboard & Inventory Mgmt.",
      tech: ["React", "Node", "Redux", "Firebase"],
      demo: "https://shynex-6ejo.vercel.app/", // ✅ REAL LINK ADDED
      code: "#", 
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]", 
      borderColor: "group-hover:border-purple-500/50"
    },
    {
      id: 2,
      title: "Chit Chat",
      category: "Live Messaging",
      desc: "Real-time chat app with <50ms latency using WebSockets.",
      tech: ["MERN", "Socket.io", "JWT", "Tailwind"],
      demo: "https://chit-chat-nine-omega.vercel.app/chats", // ✅ REAL LINK ADDED
      code: "#",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1974&auto=format&fit=crop",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]", 
      borderColor: "group-hover:border-cyan-500/50"
    },
    {
      id: 3,
      title: "Food Fusion",
      category: "Campus Cafe",
      desc: "Smart food ordering system to reduce queue times.",
      tech: ["Next.js", "MongoDB", "Vercel"],
      demo: "https://food-fusion-campus-hub.vercel.app", // ✅ REAL LINK ADDED
      code: "#",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]", 
      borderColor: "group-hover:border-orange-500/50"
    },
    {
      id: 4,
      title: "S.A.K.H.I",
      category: "AI Assistant",
      desc: "Voice-activated desktop automation using NLP.",
      tech: ["Python", "NLP", "SpeechRec"],
      demo: "#", // ⚠️ Ye abhi bhi nakli hai
      code: "#",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]", 
      borderColor: "group-hover:border-green-500/50"
    }
  ];

  const otherProjects = [
    { id: 5, title: "Dhun Music", type: "Media Player", link: "https://dhunn-ai-harmony-beats.vercel.app/", glowColor: "from-pink-500 via-red-500 to-yellow-500" },
    { id: 6, title: "AI Image Enhancer", type: "AI Tool", link: "https://ai-enhancer-rose.vercel.app/", glowColor: "from-blue-400 via-indigo-500 to-purple-500" },
    { id: 7, title: "Pro Weather", type: "Utility App", link: "https://weather-app-pro-one.vercel.app/", glowColor: "from-yellow-400 via-orange-500 to-red-500" },
    { id: 8, title: "Tic Tac Toe", type: "Game Logic", link: "https://tic-tac-toe-blush-two-90.vercel.app/", glowColor: "from-green-400 via-emerald-500 to-teal-500" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <div name="projects" className="w-full min-h-screen bg-black text-white py-24 relative overflow-hidden">
      
      {/* Background Glow & Texture */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-pink-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full relative z-10">
        
        <div className="pb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold inline-block border-b-4 border-gray-700 pb-2"
          >
            Featured <span className="text-gray-500">Work</span>
          </motion.h2>
        </div>

        {/* Featured Projects Grid (3D Hover) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-10 sm:px-4"
        >
          {featuredProjects.map((project) => (
            <motion.div 
              key={project.id}
              variants={cardVariants}
              className={`group relative rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-gray-800 overflow-hidden transition-all duration-500 hover:-translate-y-2 ${project.glowColor} ${project.borderColor}`}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                   <p className="text-[10px] font-bold text-white uppercase tracking-widest">{project.category}</p>
                </div>
              </div>
              <div className="p-6 relative">
                 <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-heading font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                       <a href={project.code} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white"><FaGithub size={20} /></a>
                       <a href={project.demo} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white"><FaExternalLinkAlt size={18} /></a>
                    </div>
                 </div>
                 <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2">{project.desc}</p>
                 <div className="flex flex-wrap gap-2 mb-6">
                   {project.tech.map((t, i) => (
                     <span key={i} className="text-xs font-medium bg-black/50 text-gray-300 px-3 py-1 rounded-full border border-gray-700 group-hover:border-gray-500 transition-colors">{t}</span>
                   ))}
                 </div>
                 <a href={project.demo} target="_blank" rel="noreferrer" className="block w-full py-3 text-center bg-white/5 border border-white/10 rounded-lg text-sm font-bold text-gray-300 hover:bg-white hover:text-black transition-all duration-300">View Project Details</a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 🌟 OTHER PROJECTS */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 pt-10 border-t border-gray-900"
        >
           <h3 className="text-2xl font-bold mb-8 text-center text-gray-300">Other Creative Projects</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
             {otherProjects.map((item) => (
               <motion.a 
                 key={item.id}
                 href={item.link}
                 target="_blank"
                 rel="noreferrer"
                 className="group relative bg-gray-900/30 border border-gray-800 p-6 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between h-40"
               >
                 {/* 🔥 GLOW DIV */}
                 <div className={`absolute inset-0 bg-gradient-to-r ${item.glowColor} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>

                 <div className="relative z-10 flex justify-between items-start">
                    <FaCode size={24} className="text-gray-500 group-hover:text-white transition-colors" />
                    <FaExternalLinkAlt size={14} className="text-gray-600 group-hover:text-white transition-colors" />
                 </div>
                 <div className="relative z-10">
                   <h4 className="font-bold text-lg text-gray-300 group-hover:text-white transition-colors">{item.title}</h4>
                   <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors mt-1">{item.type}</p>
                 </div>
               </motion.a>
             ))}
           </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Projects;