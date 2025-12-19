import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "skills" },
    { id: 4, link: "projects" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black/80 backdrop-blur-md fixed nav z-50 border-b border-gray-800">
      
      {/* ✨ ANIMATED LOGO */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="ml-2"
      >
        <Link to="home" smooth duration={500} className="cursor-pointer group relative">
           {/* Logo Container */}
           <div className="flex items-center gap-1 font-heading font-extrabold text-3xl tracking-tighter">
              
              {/* 'P' with Cyan Glow */}
              <motion.span 
                 whileHover={{ y: -3, textShadow: "0px 0px 8px rgb(34, 211, 238)" }}
                 className="text-white group-hover:text-cyan-400 transition-colors duration-300"
              >
                P
              </motion.span>
              
              {/* Spinning Dot */}
              <motion.span 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 className="text-gray-500 text-sm group-hover:text-white"
              >
                ✦
              </motion.span>

              {/* 'M' with Purple Glow */}
              <motion.span 
                 whileHover={{ y: -3, textShadow: "0px 0px 8px rgb(168, 85, 247)" }}
                 className="text-white group-hover:text-purple-500 transition-colors duration-300"
              >
                M
              </motion.span>
           </div>
           
           {/* Underline Animation on Hover */}
           <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300 ease-out"></span>
        </Link>
      </motion.div>

      {/* 🖥️ DESKTOP MENU */}
      <ul className="hidden md:flex items-center">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-6 cursor-pointer capitalize font-medium text-gray-400 hover:text-white relative group"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
            {/* Hover Dot Effect */}
            <span className="absolute -bottom-2 left-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transform -translate-x-1/2 transition-all duration-300"></span>
          </li>
        ))}
        
        {/* Resume Button */}
        <li className="ml-4">
           <motion.a 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             href="/resume.pdf" 
             download 
             className="px-5 py-2 border border-gray-600 rounded-full hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all text-sm font-bold flex items-center gap-2"
           >
             Resume
           </motion.a>
        </li>
      </ul>

      {/* 📱 MOBILE HAMBURGER ICON */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 text-gray-400 md:hidden hover:text-white transition-colors"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* 📱 MOBILE MENU */}
      <AnimatePresence>
        {nav && (
          <motion.ul
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl text-gray-400 md:hidden z-40"
          >
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-3xl font-light hover:text-white hover:scale-110 transition-transform duration-200"
              >
                <Link
                  onClick={() => setNav(false)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
            
            <li className="mt-8">
               <a 
                 href="/resume.pdf" 
                 download 
                 className="px-8 py-4 border border-gray-500 rounded-lg text-xl font-bold text-white hover:bg-white hover:text-black transition-all"
               >
                 Download Resume
               </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;