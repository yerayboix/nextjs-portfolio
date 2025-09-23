import HeroSection from "./_components/hero/HeroSection";
import ProjectsSection from "./_components/projects/ProjectsSection";
import Footer from "./_components/footer/Footer";
import Navbar from "@/components/navbar";
import SkillsSection from "./_components/skills/AboutMeSection";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <section
        
        className={`relative w-full h-screen z-10`}
      >
        <div className="w-full h-full">
          <HeroSection />
        </div>
      </section>

      {/* About Section */}
      <div
        className="relative z-20 min-h-screen"
      >
        <SkillsSection />
        <ProjectsSection />
        <Footer />
      </div>
    </div>
  );
}
