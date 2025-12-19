import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import HeroImage from '../assets/heroImage.jpg'; 

const Home = () => {
  return (
    // ✅ Fix 1: 'h-screen' hata kar 'min-h-screen' kiya taaki content kate nahi
    // ✅ Fix 2: 'pt-28' add kiya taaki Navbar ke niche jagah bane
    <div name="home" className="relative min-h-screen w-full bg-black text-white overflow-hidden pt-28 pb-10 flex flex-col justify-center">
      
      {/* 🔦 BACKGROUND SPOTLIGHT (Mobile ke liye opacity kam ki) */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 md:w-96 md:h-96 bg-cyan-900/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 md:w-96 md:h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-6 relative z-10 gap-8 md:gap-20">
        
        {/* LEFT: CONTENT */}
        <div className="flex flex-col justify-center h-full text-center md:text-left w-full md:w-3/5">
          
          <motion.p 
             initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
             className="text-cyan-400 text-xs md:text-sm font-bold tracking-[0.2em] mb-4 uppercase"
          >
             Welcome to my Digital Space
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-7xl font-heading font-extrabold text-white mb-4 leading-tight"
          >
            Pushpender <br /> 
            {/* ✅ Fix 3: 'Mishra' ka color change kiya (Bright Gradient) */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-lg">
              Mishra
            </span>
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-3xl font-light text-gray-300 mb-6 font-sans"
          >
            I engineer <span className="font-semibold text-white">
              <Typewriter
                words={['Scalable Web Apps', 'AI Integrations', 'Robust Backends']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="text-gray-400 max-w-lg mx-auto md:mx-0 text-sm md:text-base leading-relaxed mb-8"
          >
            A performance-driven <strong>Full Stack Developer</strong> bridging the gap between complex logic and elegant UI.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link to="projects" smooth duration={500} className="px-8 py-3 bg-white text-black font-bold rounded-lg cursor-pointer hover:bg-gray-200 transition-colors shadow-lg shadow-white/10 active:scale-95">
               View My Work
            </Link>
            
            <a href="/resume.pdf" download className="px-8 py-3 border border-gray-600 text-white rounded-lg font-medium hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all active:scale-95">
              Download CV
            </a>
          </motion.div>
        </div>

        {/* RIGHT: PHOTO (Mobile Size Fixed) */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="w-full md:w-2/5 flex justify-center perspective-1000 mb-6 md:mb-0"
        >
          {/* ✅ Fix 4: Mobile par width kam ki (w-64) taaki screen se bahar na jaye */}
          <div className="relative w-64 h-72 sm:w-80 sm:h-96 group cursor-pointer">
             <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition duration-500"></div>
             <div className="relative w-full h-full bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500">
                <img 
                   src={HeroImage} 
                   alt="Pushpender Mishra" 
                   className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                   <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full">
                      <p className="text-[10px] sm:text-xs font-bold text-white tracking-widest uppercase">✨ Open To Work</p>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Home;