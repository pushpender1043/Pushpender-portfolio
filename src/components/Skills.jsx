import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaPython, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiPostman, SiTailwindcss, SiNextdotjs, SiFirebase, SiWordpress, SiOpenai } from 'react-icons/si';

const Skills = () => {
  
  const skills = [
    { title: 'React.js', icon: <FaReact size={40} />, color: 'text-cyan-400', border: 'hover:border-cyan-400/50' },
    { title: 'Next.js', icon: <SiNextdotjs size={40} />, color: 'text-white', border: 'hover:border-white/50' },
    { title: 'Node.js', icon: <FaNodeJs size={40} />, color: 'text-green-500', border: 'hover:border-green-500/50' },
    { title: 'Postman', icon: <SiPostman size={40} />, color: 'text-orange-500', border: 'hover:border-orange-500/50' },
    { title: 'MongoDB', icon: <SiMongodb size={40} />, color: 'text-green-400', border: 'hover:border-green-400/50' },
    { title: 'Java', icon: <FaJava size={40} />, color: 'text-red-500', border: 'hover:border-red-500/50' },
    { title: 'Tailwind', icon: <SiTailwindcss size={40} />, color: 'text-sky-400', border: 'hover:border-sky-400/50' },
    { title: 'OpenAI API', icon: <SiOpenai size={40} />, color: 'text-emerald-500', border: 'hover:border-emerald-500/50' },
    { title: 'Firebase', icon: <SiFirebase size={40} />, color: 'text-yellow-500', border: 'hover:border-yellow-500/50' },
    { title: 'JavaScript', icon: <FaJs size={40} />, color: 'text-yellow-400', border: 'hover:border-yellow-400/50' },
    { title: 'Python', icon: <FaPython size={40} />, color: 'text-blue-400', border: 'hover:border-blue-400/50' },
    { title: 'GitHub', icon: <FaGithub size={40} />, color: 'text-gray-200', border: 'hover:border-gray-200/50' },
  ];

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

  return (
    <div name="skills" className="w-full min-h-screen bg-black text-white py-24 relative overflow-hidden flex flex-col justify-center">
      
      {/* 🔦 BACKGROUND SPOTLIGHT EFFECT (Green & Blue) */}
      <div className="absolute top-[-10%] left-[20%] w-96 h-96 bg-green-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[20%] w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full relative z-10">
        
        <div className="pb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold inline-block border-b-4 border-gray-700 pb-2"
          >
            Technical <span className="text-gray-500">Expertise</span>
          </motion.h2>
          <p className="py-6 text-gray-400 max-w-2xl mx-auto text-lg">
            A curated stack of technologies I use to build scalable, high-performance applications.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4"
        >
          {skills.map(({ title, icon, color, border }, index) => (
            <motion.div 
              key={index}
              variants={item}
              className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${border}`}
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className={`${color} drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                {icon}
              </div>
              <p className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors z-10">
                {title}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Skills;