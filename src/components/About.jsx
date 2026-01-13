import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCode, FaLaptopCode } from "react-icons/fa";
import AboutImg from "../assets/aboutImage.jpg";

const About = () => {
  // 📅 TIMELINE DATA (Tumhara Real Data)
  const timeline = [
    {
      id: 1,
      title: "B.Tech in CSE",
      company: "Geeta University",
      year: "2023 - 2027",
      desc: "Pursuing Bachelor's degree with a focus on Full Stack Development & AI.",
      icon: <FaGraduationCap />,
      color: "border-purple-500 shadow-purple-500/50",
      text: "text-purple-400"
    },
    {
      id: 2,
      title: "Generative AI Intern",
      company: "Skilligence EdTech",
      year: "2025",
      desc: "Working on AI model integration, prompt engineering, and building AI-wrapper apps.",
      icon: <FaLaptopCode />,
      color: "border-cyan-500 shadow-cyan-500/50",
      text: "text-cyan-400"
    },
    {
      id: 3,
      title: "DSA Trainee",
      company: "Coding Blocks",
      year: "2024",
      desc: "Mastered Data Structures & Algorithms using Java. Solved 300+ LeetCode problems.",
      icon: <FaCode />,
      color: "border-green-500 shadow-green-500/50",
      text: "text-green-400"
    },
  ];

  return (
    <div name="about" className="w-full min-h-screen bg-transparent text-white py-24 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* === HEADER SECTION === */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          
          {/* Left: 3D Photo Frame */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 group">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-black/50">
                <img 
                  src={AboutImg} 
                  alt="Pushpender" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-black border border-cyan-500 p-3 sm:p-4 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <p className="text-xl sm:text-2xl font-bold text-white">05+</p>
                <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest">Live Projects</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Intro Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-cyan-400 tracking-[0.2em] uppercase mb-2">My Journey</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              From <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Code</span> to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Creation</span>.
            </h3>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6">
              I am a final-year <strong>Computer Science</strong> student at Geeta University. 
              My passion lies in building software that solves real-world problems. 
              I specialize in the <strong>MERN Stack</strong> and constantly explore the world of <strong>Generative AI</strong>.
            </p>
            <div className="flex flex-wrap gap-3">
               {['Full Stack', 'UI/UX Design', 'AI Integration', 'Problem Solving'].map((tag, i) => (
                 <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                   {tag}
                 </span>
               ))}
            </div>
          </motion.div>
        </div>


        {/* === THE HOLOGRAPHIC TIMELINE === */}
        <div className="relative mt-20">
          
          {/* Vertical Center Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-6 md:left-1/2 w-[2px] h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent transform md:-translate-x-1/2 opacity-30"></div>

          <div className="flex flex-col gap-12">
            {timeline.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                
                {/* 1. Empty Space for Alignment */}
                <div className="hidden md:block w-1/2"></div>

                {/* 2. Center Icon (The Dot) */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`w-12 h-12 rounded-full bg-[#0a0a0a] border-2 flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,0,0,0.5)] ${item.color} ${item.text}`}>
                    {item.icon}
                  </div>
                </div>

                {/* 3. The Content Card */}
                <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-10">
                   <div className={`relative p-6 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                      
                      {/* Connecting Line (Mobile Only) */}
                      <div className="md:hidden absolute top-6 -left-[34px] w-8 h-[2px] bg-white/20"></div>

                      <h4 className={`text-xl font-bold text-white mb-1 group-hover:${item.text} transition-colors`}>{item.title}</h4>
                      <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">{item.company}</h5>
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">
                        {item.desc}
                      </p>
                      <span className="inline-block px-3 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono border border-white/5">
                        {item.year}
                      </span>
                   </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;