import React, { useEffect } from "react";
import TagCloud from "TagCloud";

const Skills = () => {
  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      "React",
      "Next.js",
      "Node.js",
      "Tailwind",
      "JavaScript",
      "HTML",
      "CSS",
      "Three.js",
      "Git",
      "GitHub",
      "MongoDB",
      "Framer Motion",
      "Java",
      "Python",
      "Firebase",
      "Postman",
      "Figma",
      "Redux",
    ];

    const options = {
      radius: 300, // Gole ka size
      maxSpeed: "fast", // Ghumne ki speed
      initSpeed: "fast",
      direction: 135,
      keep: true,
    };

    // Clean up old instance properly
    const element = document.querySelector(container);
    if (element) {
      element.innerHTML = ""; // Purana content safai
      TagCloud(container, texts, options);
    }

    return () => {
      if (element) element.innerHTML = "";
    };
  }, []);

  return (
    <div
      name="skills"
      className="w-full h-screen bg-transparent relative flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col md:flex-row items-center justify-center w-full h-full relative z-10">
        
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto md:mx-0">
            I work with a vast array of technologies to build high-performance web applications.
            Move your mouse to interact with the sphere! 🚀
          </p>
          
          {/* Decorative Line */}
          <div className="mt-8 hidden md:block w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
        </div>

        {/* Right Side: 3D Sphere */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative">
          
          {/* Glow Effect behind the sphere */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          {/* The Sphere */}
          <span className="tagcloud text-xl md:text-2xl font-bold text-cyan-300 hover:text-white cursor-pointer transition-colors duration-300"></span>
        </div>
      </div>
    </div>
  );
};

export default Skills;