import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import HeroImage from '../assets/heroImage.jpg'; 

const Home = () => {
  
  // ✨ Animation Variants for Text Staggering
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2, // Ek ke baad ek element aayega
        delayChildren: 0.3
      }
    }
  };

  return (
    <div name="home" className="relative min-h-screen w-full bg-transparent overflow-hidden pt-28 pb-10 flex flex-col justify-center">
      
      {/* 🔦 DYNAMIC BACKGROUND SPOTLIGHTS (Pulsing) */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-72 h-72 md:w-96 md:h-96 bg-cyan-900/20 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-72 h-72 md:w-96 md:h-96 bg-purple-900/20 rounded-full blur-[100px] pointer-events-none"
      />
      
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-6 relative z-10 gap-10 md:gap-20">
        
        {/* ================= LEFT: TEXT CONTENT ================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center h-full text-center md:text-left w-full md:w-3/5"
        >
          
          <motion.p variants={textVariants} className="text-cyan-400 text-xs md:text-sm font-bold tracking-[0.2em] mb-4 uppercase flex items-center justify-center md:justify-start gap-2">
             <span className="w-8 h-[2px] bg-cyan-400 inline-block"></span>
             Welcome to my Digital Space
          </motion.p>

          <motion.h1 variants={textVariants} className="text-5xl sm:text-7xl font-heading font-extrabold text-white mb-4 leading-tight">
            Pushpender <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
              Mishra
            </span>
          </motion.h1>

          <motion.h2 variants={textVariants} className="text-xl sm:text-3xl font-light text-gray-300 mb-6 font-sans">
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

          <motion.p variants={textVariants} className="text-gray-400 max-w-lg mx-auto md:mx-0 text-sm md:text-base leading-relaxed mb-8">
            A performance-driven <strong>Full Stack Developer</strong> bridging the gap between complex logic and elegant UI.
          </motion.p>

          <motion.div variants={textVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="projects" smooth duration={500} className="relative px-8 py-3 bg-white text-black font-bold rounded-lg cursor-pointer overflow-hidden group shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all">
               <span className="relative z-10 group-hover:text-cyan-900 transition-colors">View My Work</span>
               <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
            
            <a href="/resume.pdf" download className="px-8 py-3 border border-gray-600 text-white rounded-lg font-medium hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all active:scale-95 flex items-center justify-center gap-2">
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT: THE FLOATING SCANNER IMAGE ================= */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="w-full md:w-2/5 flex justify-center perspective-1000 mb-6 md:mb-0 relative"
        >
          {/* 🌀 Rotating Tech Ring (Behind Image) */}
          <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
             className="absolute w-[280px] h-[360px] sm:w-[340px] sm:h-[440px] border border-dashed border-cyan-500/20 rounded-[2rem] z-0"
          ></motion.div>

          {/* 🖼️ Main Floating Card */}
          <motion.div 
             animate={{ y: [-15, 15, -15] }} // 🌊 Floating Effect
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="relative w-64 h-72 sm:w-80 sm:h-96 group cursor-pointer z-10"
          >
             {/* Neon Glow Border */}
             <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
             
             {/* Image Container */}
             <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                   src={HeroImage} 
                   alt="Pushpender Mishra" 
                   className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* 🤖 High-Tech Scanning Line Effect */}
                <motion.div 
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.8)] z-20 opacity-50"
                ></motion.div>

                {/* Bottom Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
                
                {/* Badge */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                   <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                      <p className="text-[10px] sm:text-xs font-bold text-white tracking-widest uppercase">Open To Work</p>
                   </div>
                </div>
             </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default Home;