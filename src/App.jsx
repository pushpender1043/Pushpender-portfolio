import React, { useEffect, useState } from "react"; // ✅ useState add kiya
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SimpleCursor from "./components/SimpleCursor";
import StarsCanvas from "./components/StarBackground";
import Preloader from "./components/Preloader";

function App() {
  // ✅ Loading state banayi
  const [loading, setLoading] = useState(true);

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
    // ⚠️ Dhyan do: Yahan se 'overflow-x-hidden' hata diya hai
    <div className="bg-primary relative z-0 text-white selection:bg-cyan-400 selection:text-black">
      
      {/* 1. Custom Cursor */}
      <SimpleCursor /> 

      {/* ✅ Preloader Yahan Add Kiya */}
      {/* Jab tak loading true hai, Preloader dikhega. Khatam hone par setLoading(false) chalega */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* 2. The 3D Galaxy Background */}
      <StarsCanvas />

      {/* 3. Main Content Wrapper */}
      <div className="relative z-0">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects /> {/* Ab ye Sticky kaam karega */}
        <Contact />
      </div>
    </div>
  );
}

export default App;