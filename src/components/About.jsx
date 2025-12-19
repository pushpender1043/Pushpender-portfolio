import React from 'react';
import { motion } from 'framer-motion';
import AboutImg from '../assets/aboutImage.jpg'; 

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-black text-white py-20 relative overflow-hidden flex flex-col justify-center">
      
      {/* 🔦 BACKGROUND SPOTLIGHT EFFECT (Purple & Grey) */}
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-gray-800/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full relative z-10">
        
        {/* HEADING */}
        <div className="pb-12 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold inline border-b-4 border-gray-700 pb-2"
          >
            About <span className="text-gray-500">Me</span>
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* LEFT: PHOTO */}
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="w-full md:w-1/2 flex justify-center"
          >
             <div className="relative group w-72 h-80 sm:w-80 sm:h-96">
               <div className="absolute -inset-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>
               <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900 transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-1">
                 <img 
                   src={AboutImg} 
                   alt="About Pushpender" 
                   className="w-full h-full object-cover hover:scale-105 duration-700 transition-transform"
                 />
                 <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
               </div>
             </div>
          </motion.div>

          {/* RIGHT: CONTENT */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="w-full md:w-1/2 flex flex-col gap-6 text-gray-400 text-lg font-light leading-relaxed"
          >
            <p>
              Hi, I'm <span className="text-white font-bold text-xl">Pushpender Mishra</span>.
            </p>
            <p>
              I am a final-year <strong>B.Tech CSE</strong> scholar at <span className="text-gray-200">Geeta University</span>.
            </p>

            {/* Experience List */}
            <div className="flex flex-col gap-4 mt-2">
              <div className="relative group p-4 rounded-lg border-l-4 border-purple-500 overflow-hidden transition-all duration-300 hover:-translate-y-1">
                 <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                 <div className="relative z-10">
                   <h4 className="text-white font-bold text-lg group-hover:text-purple-300 transition-colors">Generative AI Intern</h4>
                   <p className="text-sm text-gray-400">Skilligence EdTech • 2025</p>
                 </div>
              </div>
              <div className="relative group p-4 rounded-lg border-l-4 border-blue-500 overflow-hidden transition-all duration-300 hover:-translate-y-1">
                 <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                 <div className="relative z-10">
                   <h4 className="text-white font-bold text-lg group-hover:text-blue-300 transition-colors">DSA Trainee</h4>
                   <p className="text-sm text-gray-400">Coding Blocks • 2024</p>
                 </div>
              </div>
            </div>

            <div className="flex gap-10 mt-6 pt-6 border-t border-gray-800">
               <div><h3 className="text-3xl font-heading font-bold text-white">05+</h3><p className="text-sm uppercase tracking-wider">Projects</p></div>
               <div><h3 className="text-3xl font-heading font-bold text-white">01</h3><p className="text-sm uppercase tracking-wider">Global Badge</p></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;