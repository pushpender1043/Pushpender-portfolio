import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// --- DATA (Same as provided) ---
const projects = [
  {
    id: 1,
    title: "Shynex",
    category: "Fashion Store",
    desc: "A premium D2C fashion platform featuring a comprehensive Admin Dashboard and real-time Inventory Management system.",
    tech: ["React", "Node.js", "Redux", "Firebase"],
    demo: "https://shynex-6ejo.vercel.app/",
    code: "#",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    color: "#0a0a0a" // Card Background Color
  },
  {
    id: 2,
    title: "Chit Chat",
    category: "Real-time Messaging",
    desc: "A high-performance chat application offering <50ms latency using WebSockets, JWT authentication, and encrypted rooms.",
    tech: ["MERN Stack", "Socket.io", "Tailwind", "JWT"],
    demo: "https://chit-chat-nine-omega.vercel.app/chats",
    code: "#",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1974&auto=format&fit=crop",
    color: "#0a0a0a"
  },
  {
    id: 3,
    title: "Food Fusion",
    category: "Smart Campus Cafe",
    desc: "An intelligent food ordering system designed to reduce queue times in campus cafeterias with live order tracking.",
    tech: ["Next.js", "MongoDB", "Vercel", "Stripe"],
    demo: "https://food-fusion-campus-hub.vercel.app",
    code: "#",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
    color: "#0a0a0a"
  },
  {
    id: 4,
    title: "S.A.K.H.I",
    category: "AI Voice Assistant",
    desc: "A desktop automation tool powered by NLP that performs tasks via voice commands, mimicking human interaction.",
    tech: ["Python", "NLP", "PyTorch", "Automation"],
    demo: "#",
    code: "#",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    color: "#0a0a0a"
  },
  {
    id: 5,
    title: "Dhun Music",
    category: "Media Player",
    desc: "A futuristic music player with AI-based song recommendations and immersive audio visualizations.",
    tech: ["React", "Spotify API", "Framer Motion"],
    demo: "https://dhunn-ai-harmony-beats.vercel.app/",
    code: "#",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
    color: "#0a0a0a"
  },
];

const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <div name="projects" ref={container} className="relative mt-20">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
         <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
             Featured <span className="text-cyan-400">Projects</span>
         </h2>
         <p className="text-gray-400 text-lg max-w-xl">
             Exploring the boundaries of code and creativity. Here are some selected works that showcase my technical journey.
         </p>
      </div>

      {/* Cards Loop */}
      <div className="flex flex-col items-center gap-10 pb-[20vh]"> {/* Gap ensures spacing */}
        {projects.map((project, i) => {
          // Calculate scale: First card shrinks more as new ones come
          const targetScale = 1 - ( (projects.length - i) * 0.05); 
          return (
            <Card 
              key={project.id} 
              i={i} 
              {...project} 
              progress={scrollYProgress} 
              range={[i * 0.25, 1]} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>

    </div>
  );
};

const Card = ({ i, title, category, desc, tech, demo, code, image, color, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['top end', 'start end']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="relative flex flex-col md:flex-row h-[500px] w-full max-w-[1000px] rounded-3xl border border-white/10 bg-[#09090b] shadow-2xl overflow-hidden origin-top"
      >
        
        {/* Left: Content Section */}
        <div className="w-full md:w-[45%] p-8 md:p-12 flex flex-col justify-between relative z-10">
           
           <div>
             <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase">{category}</span>
             </div>
             
             <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{title}</h3>
             <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                {desc}
             </p>
             
             {/* Tech Stack */}
             <div className="flex flex-wrap gap-2 mb-8">
                {tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs font-mono text-cyan-200 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                        {t}
                    </span>
                ))}
             </div>
           </div>

           {/* Buttons */}
           <div className="flex gap-4">
              <a href={demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-cyan-400 transition-colors">
                 Live Demo <FaExternalLinkAlt size={12}/>
              </a>
              <a href={code} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 hover:border-white transition-colors">
                 Code <FaGithub size={16}/>
              </a>
           </div>
        </div>

        {/* Right: Image Section */}
        <div className="relative w-full md:w-[55%] h-full overflow-hidden">
           {/* Gradient Overlay for blend */}
           <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent md:bg-gradient-to-l z-10 opacity-60"></div>
           
           <motion.div className="w-full h-full" style={{ scale: imageScale }}>
             <img 
               src={image} 
               alt={title} 
               className="w-full h-full object-cover"
             />
           </motion.div>
        </div>

      </motion.div>
    </div>
  );
};

export default Projects;