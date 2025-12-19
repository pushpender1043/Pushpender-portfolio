import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div name="contact" className="w-full min-h-screen bg-black text-white py-24 relative overflow-hidden flex flex-col justify-center">
      
      {/* 🌑 Background - Subtle Grey Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-gray-800/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-gray-800/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Minimal Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full relative z-10">
        
        {/* HEADING */}
        <div className="pb-16 text-center">
          <motion.h2 
             initial={{ opacity: 0, y: -20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="text-4xl md:text-5xl font-heading font-bold inline-block border-b-4 border-gray-700 pb-2"
          >
            Get In <span className="text-gray-500">Touch</span>
          </motion.h2>
          <p className="py-6 text-gray-400">Let's start a conversation</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 justify-center items-start">
          
          {/* 🪪 LEFT: MINIMAL INFO CARD */}
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="w-full md:w-1/3"
          >
            <div className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-2xl shadow-xl">
              
              <h3 className="text-2xl font-bold text-white mb-4">Contact Info</h3>
              <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                Open for opportunities. Let's build something amazing together.
              </p>
              
              <div className="flex flex-col gap-8">
                {/* Email */}
                <a href="mailto:mishradeepu400@gmail.com" className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-3 bg-gray-900 border border-gray-800 rounded-lg text-gray-300 group-hover:text-white group-hover:border-white transition-all duration-300">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Mail Me</p>
                    <p className="text-base font-medium text-gray-300 group-hover:text-white transition-colors">mishradeepu400@gmail.com</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-gray-900 border border-gray-800 rounded-lg text-gray-300 group-hover:text-white group-hover:border-white transition-all duration-300">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                    <p className="text-base font-medium text-gray-300 group-hover:text-white transition-colors">Haryana, India</p>
                  </div>
                </div>

                {/* Socials */}
                <div className="flex gap-4 mt-2">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex-1 py-3 bg-gray-900 border border-gray-800 rounded-lg flex justify-center items-center text-gray-400 hover:text-white hover:border-white transition-all duration-300">
                    <FaLinkedin size={22} />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="flex-1 py-3 bg-gray-900 border border-gray-800 rounded-lg flex justify-center items-center text-gray-400 hover:text-white hover:border-white transition-all duration-300">
                    <FaGithub size={22} />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* 📝 RIGHT: REAL WORKING FORM */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="w-full md:w-1/2"
          >
            {/* ✅ ACTION LINK ADDED HERE */}
            <form action="https://getform.io/f/bdrknknb" method="POST" className="flex flex-col gap-6 bg-[#0a0a0a] p-8 rounded-2xl border border-gray-800 shadow-xl">
              
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-500 font-medium ml-1">Name</label>
                <input 
                  type="text" name="name" required
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-500 focus:bg-gray-900 transition-all placeholder-gray-700"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-500 font-medium ml-1">Email</label>
                <input 
                  type="email" name="email" required
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-500 focus:bg-gray-900 transition-all placeholder-gray-700"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-500 font-medium ml-1">Message</label>
                <textarea 
                  name="message" rows="4" required
                  className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-500 focus:bg-gray-900 transition-all resize-none placeholder-gray-700"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button className="group w-full py-4 bg-white text-black rounded-lg font-bold text-lg mt-2 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                Send Message 
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={14} />
              </button>

            </form>
          </motion.div>

        </div>
        
        {/* FOOTER */}
        <div className="mt-20 text-center border-t border-gray-900 pt-8">
           <p className="text-gray-600 text-sm">
             Designed & Built by <span className="text-gray-400 font-bold">Pushpender Mishra</span>
           </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;