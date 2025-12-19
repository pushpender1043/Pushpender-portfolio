import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SimpleCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // 🖱️ Mouse Position Update
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // 👆 Hover Detection (Links, Buttons, Cards)
    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' || 
        e.target.tagName === 'BUTTON' || 
        e.target.closest('a') || 
        e.target.closest('button') ||
        e.target.closest('.group') || // Projects Cards
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // ✨ Animation Variants
  const variants = {
    default: {
      width: 10,  // Chota Dot
      height: 10,
      backgroundColor: "#ffffff",
      borderRadius: "50%",
      boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)", // White Shine
      mixBlendMode: "difference" // Text ke upar color invert karega (Cool look)
    },
    hover: {
      width: 4,   // Patli Line
      height: 32, // Lambi Line
      backgroundColor: "#06b6d4", // Cyan Color (Active state)
      borderRadius: "2px",
      boxShadow: "0 0 20px rgba(6, 182, 212, 0.6)", // Cyan Shine
      mixBlendMode: "normal"
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }}
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        x: "-50%", // Center align
        y: "-50%"  // Center align
      }}
    />
  );
};

export default SimpleCursor;