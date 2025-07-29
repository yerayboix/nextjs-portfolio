"use client"
import { useEffect, useState } from "react";
import HeroSection from "./_components/hero/HeroSection";
import AboutMeSection from "./_components/about-me/AboutMeSection";

export default function Home() {
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate opacity based on scroll position
  const heroOpacity = Math.max(0, 1 - (scrollY / (windowHeight * 0.5)));

  return (
    <div className="relative">
      <div 
        className="fixed top-0 left-0 w-full h-screen z-10 transition-opacity duration-300"
        style={{
          opacity: heroOpacity,
        }}
      >
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
