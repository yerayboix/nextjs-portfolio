"use client"
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "./_components/hero/HeroSection";
import AboutMeSection from "./_components/about-me/AboutMeSection";

// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [windowHeight, setWindowHeight] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;

    // Crear la animación de opacidad con GSAP
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          // Calcular la opacidad basada en el progreso del scroll
          const progress = self.progress;
          const opacity = Math.max(0, 1 - progress * 2); // Fade out en la primera mitad
          gsap.set(heroRef.current, { opacity });
        }
      }
    });

    return () => {
      // Limpiar la animación cuando el componente se desmonte
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      <div 
        ref={heroRef}
        className="fixed top-0 left-0 w-full h-screen z-10"
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
