import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null); // For Sliding Pill Animation

  // 🖱️ Scroll Detection (Navbar ko transparent/solid karne ke liye)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "skills" },
    { id: 4, link: "projects" },
    { id: 5, link: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full h-20 z-[999] transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-white/5 shadow-xl"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full h-full px-6 max-w-7xl mx-auto">

        {/* ✨ LOGO (Futuristic & Clean) */}
        <Link to="home" smooth duration={500} className="cursor-pointer flex items-center gap-2 group">
           <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              <span className="text-xl font-bold text-white font-heading">P</span>
              {/* Spinning Ring */}
              <div className="absolute inset-0 border border-white/20 rounded-xl animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity"></div>
           </div>
           <span className="text-xl font-bold text-white tracking-wide group-hover:text-cyan-400 transition-colors duration-300">
             Mishra<span className="text-cyan-500">.</span>
           </span>
        </Link>

        {/* 🖥️ DESKTOP MENU (Sliding Pill Effect) */}
        <ul className="hidden md:flex items-center gap-2 bg-white/5 px-2 py-1.5 rounded-full border border-white/5 backdrop-blur-sm">
          {links.map(({ id, link }, index) => (
            <li
              key={id}
              className="relative px-5 py-2 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link to={link} smooth duration={500} className="relative z-10 text-sm font-medium text-gray-300 hover:text-white transition-colors capitalize">
                {link}
              </Link>

              {/* ✨ SLIDING BACKGROUND PILL (Ye jadu hai!) */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* 📄 RESUME BUTTON (Shiny Effect) */}
        <div className="hidden md:block">
             <a
               href="/resume.pdf"
               download
               className="relative px-6 py-2.5 bg-white text-black font-bold text-sm rounded-full overflow-hidden group flex items-center gap-2 shadow-lg hover:shadow-cyan-500/20 transition-all"
             >
               <span className="relative z-10 group-hover:text-cyan-700 transition-colors">Resume</span>
               {/* Shine Animation */}
               <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:left-[100%] transition-all duration-500 ease-in-out"></div>
             </a>
        </div>

        {/* 📱 MOBILE HAMBURGER */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-50 text-gray-300 md:hidden hover:text-white transition-colors p-2 bg-white/5 rounded-lg border border-white/10"
        >
          {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>

      </div>

      {/* 📱 MOBILE MENU OVERLAY (Smooth Slide) */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-screen bg-[#0a0a0a] z-40 flex flex-col items-center justify-center space-y-8"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            {links.map(({ id, link }) => (
              <motion.div
                 key={id}
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: id * 0.1 }}
              >
                <Link
                  onClick={() => setNav(false)}
                  to={link}
                  smooth
                  duration={500}
                  className="text-4xl font-light text-gray-400 capitalize hover:text-white hover:scale-110 transition-all cursor-pointer block"
                >
                  {link}
                </Link>
              </motion.div>
            ))}
            
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              href="/resume.pdf"
              download
              className="px-8 py-3 bg-white text-black font-bold rounded-full text-lg mt-8 hover:bg-cyan-400 transition-colors shadow-xl"
            >
               Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;