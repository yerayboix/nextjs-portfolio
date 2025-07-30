"use client"
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "./_components/hero/HeroSection";
import AboutMeSection from "./_components/about-me/AboutMeSection";
import ProjectsSection from "./_components/projects/ProjectsSection";
import Footer from "./_components/footer/Footer";
import Navbar from "@/components/navbar";

// Registrar los plugins de GSAP
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [windowHeight, setWindowHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Setea el scroll al inicio de la página por defecto al hacer refresh

  useEffect(() => {
    const updateDimensions = () => {
      setWindowHeight(window.innerHeight);
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    updateDimensions();
    
    const handleResize = () => {
      updateDimensions();
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!heroRef.current || !heroContentRef.current) return;

    // En móviles, usar una animación más simple y confiable
    if (isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1, // Suavizar el scrub
          onUpdate: (self) => {
            const progress = self.progress;
            
            // Animación más simple para móviles
            const opacity = Math.max(0, 1 - progress * 1.2);
            const scale = Math.max(0.9, 1 - progress * 0.2);
            const yOffset = progress * -50; // Menos movimiento vertical
            
            gsap.set(heroRef.current, { opacity });
            gsap.set(heroContentRef.current, {
              scale: scale,
              y: yOffset,
              opacity: Math.max(0.5, 1 - progress * 1.0)
            });
          },
          onRefresh: () => {
            // Resetear el estado cuando se refresca el scroll
            gsap.set(heroRef.current, { clearProps: "all" });
            gsap.set(heroContentRef.current, { clearProps: "all" });
          }
        }
      });

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    } else {
      // Animación original para desktop
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
        tl.kill();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, [windowHeight, isMobile]);

  return (
    <div className="relative">
      <Navbar />
      <div 
        id="home"
        ref={heroRef}
        className={`${isMobile ? 'relative' : 'fixed top-0 left-0'} w-full h-screen z-10`}
      >
        <div ref={heroContentRef} className="w-full h-full">
          <HeroSection />
        </div>
      </div>
      
      {/* About Section */}
      <div 
        className="relative z-20 min-h-screen"
        style={{
          marginTop: isMobile ? '0' : (windowHeight > 0 ? `${windowHeight}px` : '100vh'),
        }}
      >
        <AboutMeSection />
      </div>
      <ProjectsSection />
      <Footer />
    </div>
  );
}
