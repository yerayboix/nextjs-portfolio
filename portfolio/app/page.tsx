"use client"
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "./_components/hero/HeroSection";
import ProjectsSection from "./_components/projects/ProjectsSection";
import Footer from "./_components/footer/Footer";
import Navbar from "@/components/navbar";
import SkillsSection from "./_components/skills/AboutMeSection";

// Registrar los plugins de GSAP
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [windowHeight, setWindowHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <Navbar />
      <section
        ref={heroRef}
        className={`${isMobile ? 'relative' : 'fixed top-0 left-0'} w-full h-screen z-10`}
      >
        <div ref={heroContentRef} className="w-full h-full">
          <HeroSection />
        </div>
      </section>

      {/* About Section */}
      <div
        className="relative z-20 min-h-screen"
        style={{
          marginTop: isMobile ? '0' : (windowHeight > 0 ? `${windowHeight}px` : '100vh'),
        }}
      >
        <SkillsSection />
        <ProjectsSection />
        <Footer />
      </div>
    </div>
  );
}
