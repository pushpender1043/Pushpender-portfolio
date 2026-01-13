import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Projects Data
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
    },
  ];

  // Animation Logic: Vertical scroll ko Horizontal movement me badalna
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div name="projects" className="bg-transparent relative z-0">
      
      {/* Scrollable Track (Height badhayi taaki scroll smooth ho) */}
      <section ref={targetRef} className="relative h-[300vh] bg-transparent">
        
        {/* Sticky Container - Ye screen par chipak jayega */}
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          
          {/* Background Text */}
          <div className="absolute top-20 left-10 z-0">
             <h2 className="text-[12rem] font-bold text-white opacity-[0.03] uppercase leading-none pointer-events-none">
               Work
             </h2>
          </div>

          {/* Moving Horizontal Track */}
          <motion.div style={{ x }} className="flex gap-16 px-12 md:px-24 items-center relative z-10">
            
            {/* Intro Card */}
            <div className="flex flex-col justify-center min-w-[300px] md:min-w-[400px]">
                <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight">
                    Featured <br /> <span className="text-cyan-400">Projects</span>
                </h2>
                <p className="mt-6 text-gray-400 max-w-sm text-lg">
                    A collection of technical endeavors, ranging from Full Stack Web Apps to AI Automation tools.
                </p>
                <div className="mt-8 flex items-center gap-2 text-cyan-400 animate-pulse">
                    <span>Scroll Down</span> 
                    <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </div>
            </div>

            {/* Project Cards Loop */}
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            
          </motion.div>
        </div>
      </section>
      
      {/* End Spacer */}
      <div className="h-[20vh] bg-transparent"></div>
    </div>
  );
};

// --- Project Card Design ---
const ProjectCard = ({ project }) => {
  return (
    <div className="group relative h-[450px] w-[350px] md:h-[500px] md:w-[800px] flex-shrink-0 overflow-hidden rounded-3xl bg-gray-900/60 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row transition-all hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]">
      
      {/* Image Section */}
      <div className="h-1/2 md:h-full md:w-3/5 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10 md:bg-gradient-to-r" />
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 z-20">
            <span className="px-4 py-1.5 text-xs font-bold tracking-widest text-black bg-cyan-400 rounded-full uppercase shadow-lg shadow-cyan-400/20">
                {project.category}
            </span>
        </div>
      </div>

      {/* Info Section */}
      <div className="h-1/2 md:h-full md:w-2/5 p-6 md:p-10 flex flex-col justify-center relative">
        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 line-clamp-4">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech, index) => (
            <span key={index} className="text-xs text-cyan-200 bg-cyan-900/20 border border-cyan-800/30 px-2 py-1 rounded">
              #{tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto">
          <a href={project.demo} target="_blank" rel="noreferrer" className="flex-1 py-3 bg-white text-black font-bold rounded-lg text-center hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2">
            Live Demo <FaExternalLinkAlt size={12} />
          </a>
          <a href={project.code} target="_blank" rel="noreferrer" className="flex-1 py-3 border border-gray-600 text-white rounded-lg text-center hover:border-white hover:bg-white/5 transition-all flex items-center justify-center gap-2">
            Code <FaGithub size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;