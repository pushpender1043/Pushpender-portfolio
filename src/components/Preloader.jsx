import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onComplete }) => {
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    // ✨ TIMING UPDATE: Ab ye sirf 2 second (2000ms) rukega
    const timer = setTimeout(() => {
      setShowContent(false);
      
      // Animation khatam hone ke baad parent ko batao
      setTimeout(() => {
        onComplete();
      }, 1000); 
      
    }, 1000); // <--- Yahan 2500 se 2000 kar diya

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col pointer-events-none">
      
      {/* ⬛ TOP SHUTTER */}
      <motion.div
        initial={{ y: 0 }}
        animate={!showContent ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // Thoda aur fast kar diya (0.8s)
        className="w-full h-[50vh] bg-[#0a0a0a] border-b border-gray-800 relative z-20"
      >
        {showContent && (
           <motion.div 
             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
             className="absolute bottom-0 w-full flex justify-center pb-4 md:pb-8"
           >
             <h1 className="text-4xl md:text-6xl font-bold text-white tracking-widest uppercase">
               Pushpender
             </h1>
           </motion.div>
        )}
      </motion.div>

      {/* ⬛ BOTTOM SHUTTER */}
      <motion.div
        initial={{ y: 0 }}
        animate={!showContent ? { y: "100%" } : { y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // Thoda aur fast kar diya (0.8s)
        className="w-full h-[50vh] bg-[#0a0a0a] border-t border-gray-800 relative z-20"
      >
        {showContent && (
           <motion.div 
             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
             className="absolute top-0 w-full flex justify-center pt-4 md:pt-8"
           >
             <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-widest uppercase opacity-50">
               Mishra
             </h1>
           </motion.div>
        )}
      </motion.div>

      {/* ⚡ CENTER LASER LINE */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={!showContent ? { scaleX: 1, opacity: [0, 1, 0] } : { scaleX: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }} // Laser bhi fast kar di
        className="absolute top-1/2 left-0 w-full h-[2px] bg-cyan-400 z-30 shadow-[0_0_50px_#22d3ee]"
      />

    </div>
  );
};

export default Preloader;