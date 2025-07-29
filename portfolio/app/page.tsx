"use client"
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "./_components/hero/HeroSection";
import AboutMeSection from "./_components/about-me/AboutMeSection";
import ProjectsSection from "./_components/projects/ProjectsSection";

// Registrar los plugins de GSAP
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [windowHeight, setWindowHeight] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

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
    if (!heroRef.current || !heroContentRef.current) return;

    // Obtener la posición inicial del scroll
    const initialScrollY = window.scrollY;
    const heroHeight = windowHeight;
    
    // Si ya estamos scrolleados más allá del hero, ocultarlo inmediatamente
    if (initialScrollY > heroHeight * 0.5) {
      gsap.set(heroRef.current, { opacity: 0 });
      gsap.set(heroContentRef.current, {
        scale: 0.8,
        y: -100,
        x: 50,
        opacity: 0.3
      });
    }

    // Crear la animación de scroll con GSAP
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          
          // Efecto de opacidad (fade out)
          const opacity = Math.max(0, 1 - progress * 1.5);
          gsap.set(heroRef.current, { opacity });
          
          // Efecto de movimiento y escala del contenido
          const scale = Math.max(0.8, 1 - progress * 0.3);
          const yOffset = progress * -100; // Mover hacia arriba
          const xOffset = progress * 50; // Ligero movimiento horizontal
          
          gsap.set(heroContentRef.current, {
            scale: scale,
            y: yOffset,
            x: xOffset,
            opacity: Math.max(0.3, 1 - progress * 1.2)
          });
        }
      }
    });

    return () => {
      // Limpiar la animación cuando el componente se desmonte
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [windowHeight]);

  return (
    <div className="relative">
      <div 
        ref={heroRef}
        className="fixed top-0 left-0 w-full h-screen z-10"
      >
        <div ref={heroContentRef} className="w-full h-full">
          <HeroSection />
        </div>
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
      <ProjectsSection />

    </div>
  );
}
