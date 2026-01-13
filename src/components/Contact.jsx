import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div name="contact" className="w-full min-h-screen bg-transparent py-24 relative flex flex-col justify-center items-center">
      
      {/* Background: Minimal Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.p 
             initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} 
             className="text-cyan-500 text-sm font-bold tracking-[0.2em] uppercase mb-3"
          >
             Contact
          </motion.p>
          <motion.h2 
             initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
             className="text-4xl md:text-5xl font-bold text-white"
          >
            Let's Work Together
          </motion.h2>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto">
            I am currently open for full-time opportunities and freelance projects.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* LEFT: INFO CARD */}
          <motion.div 
             initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
             className="w-full lg:w-2/5"
          >
            <div className="bg-[#09090b] border border-white/10 rounded-2xl p-8 h-full shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
              <h3 className="text-2xl font-bold text-white mb-2">Contact Details</h3>
              <p className="text-gray-400 text-sm mb-8">Feel free to reach out directly.</p>
              
              <div className="space-y-6">
                <ContactItem icon={<FaEnvelope size={20}/>} label="Email" value="mishradeepu400@gmail.com" link="mailto:mishradeepu400@gmail.com" color="text-cyan-400" />
                <ContactItem icon={<FaMapMarkerAlt size={20}/>} label="Location" value="Haryana, India" color="text-purple-400" />
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-green-400 shrink-0">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Status</p>
                    <p className="text-green-400 font-medium text-lg">Available for Work</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5">
                 <p className="text-gray-400 text-sm mb-4">Connect on Socials</p>
                 <div className="flex gap-4">
                    <SocialBtn icon={<FaGithub />} link="https://github.com/pushpender1043" />
                    <SocialBtn icon={<FaLinkedin />} link="https://linkedin.com" />
                    <SocialBtn icon={<FaTwitter />} link="#" />
                 </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: FORM */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
             className="w-full lg:w-3/5"
          >
            <form action="https://getform.io/f/bdrknknb" method="POST" className="bg-[#09090b] border border-white/10 rounded-2xl p-8 lg:p-10 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <InputGroup label="Your Name" type="text" name="name" placeholder="John Doe" />
                <InputGroup label="Email Address" type="email" name="email" placeholder="john@company.com" />
              </div>
              <div className="flex flex-col gap-2 mb-8">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Your Message</label>
                <textarea name="message" rows="5" required placeholder="Tell me about your project..." className="w-full bg-[#121214] border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-cyan-500 focus:bg-[#1a1a1c] transition-all resize-none placeholder-gray-600"></textarea>
              </div>
              <button className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-cyan-50 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-white/5">
                Send Message <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-cyan-600" size={14} />
              </button>
            </form>
          </motion.div>
        </div>
        
        {/* ================= NEW FOOTER (Made in India) ================= */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
           
           <p className="text-gray-500 text-sm font-medium">
             © 2025 Pushpender Mishra. All rights reserved.
           </p>

           {/* 🇮🇳 The Classy 'Made in India' Text */}
           <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:border-white/10 transition-all cursor-default">
              <span>Made with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>in</span>
              <span className="font-bold bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent">
                India
              </span>
           </div>

        </div>

      </div>
    </div>
  );
};

// Helper Components to keep code clean
const ContactItem = ({ icon, label, value, link, color }) => (
  <div className="flex items-start gap-4">
    <div className={`w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center ${color} shrink-0`}>{icon}</div>
    <div>
      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">{label}</p>
      {link ? <a href={link} className="text-white font-medium hover:text-cyan-400 transition-colors text-lg">{value}</a> : <p className="text-white font-medium text-lg">{value}</p>}
    </div>
  </div>
);

const InputGroup = ({ label, type, name, placeholder }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">{label}</label>
    <input type={type} name={name} required placeholder={placeholder} className="w-full bg-[#121214] border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-cyan-500 focus:bg-[#1a1a1c] transition-all placeholder-gray-600" />
  </div>
);

const SocialBtn = ({ icon, link }) => (
  <a href={link} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300">{icon}</a>
);

export default Contact;