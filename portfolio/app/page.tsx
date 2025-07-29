"use client"
import { useEffect, useState } from "react";
import HeroSection from "./_components/hero/HeroSection";
import AboutMeSection from "./_components/about_me/AboutMeSection";

export default function Home() {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full h-screen z-10">
        <HeroSection />
      </div>
      
      {/* About Section - Hace Overlay al Hero */}
      <div 
        className="relative z-20 min-h-screen"
        style={{
          marginTop: windowHeight > 0 ? `${windowHeight}px` : '100vh',
        }}
      >
        <AboutMeSection />
      </div>
    </div>
  );
}
