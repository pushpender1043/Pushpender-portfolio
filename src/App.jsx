import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import SciFiCursor from "./components/SciFiCursor"; // ❌ Hatao
import SimpleCursor from "./components/SimpleCursor"; // ✅ Naya Lagao

function App() {
  
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Come back soon! 😭";
      } else {
        document.title = "Pushpender | Portfolio";
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="cursor-none"> {/* Hide Default Cursor */}
      <SimpleCursor /> {/* ✨ The Minimal Dot */}
      
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;