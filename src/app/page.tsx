import { ModeToggle } from "@/components/theme-toggle";
import { Meteors } from "@/components/magicui/meteors";
import { TextAnimate } from "@/components/magicui/text-animate";
import { AnimatedGradientTextExperience } from "./_components/animated-gradient-text-experience";
import { BlurFade } from "@/components/magicui/blur-fade";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { NameTitleShadow } from "./_components/h1-name-shadow";
import Image from "next/image";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { AuroraText } from "@/components/magicui/aurora-text";
import { SoftSkillsGrid } from "./_components/soft-skills-grid";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
export default function Home() {
  return (
    <main>
      <div className="fixed top-0 right-0 p-4 z-[9000]">
        <ModeToggle />
      </div>
      <div className="relative flex h-screen w-full flex-col">
        <section id="hero">
          <div className="relative mx-auto container p-4 max-w-[800px]">
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-x-8 w-full p-6 lg:p-12 overflow-hidden">
              <div className="flex flex-col justify-start items-start lg:col-span-1">
                <BlurFade>
                  <NameTitleShadow />
                </BlurFade>
                <TextAnimate animation="blurIn" by="line" className="text-base md:text-base lg:text-md text-left text-muted-foreground text-pretty">
                  Ingeniero de software especializado en desarrollo full-stack, arquitecturas escalables y despliegue en la nube.
                </TextAnimate>
              </div>
              <BlurFade>
                <div className="" style={{ transform: "translateY(-6px) translateZ(0px)" }}>
                  <span className="relative flex shrink-0 overflow-hidden rounded-full size-28 border">
                    <Image src="/avatars/user_image.jpg" alt="User Image" fill className="object-cover" />
                  </span>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>
        <section id="about">
          <div className="relative mx-auto container p-4 max-w-[800px]">
            <FlickeringGrid
              className="fixed w-full h-full inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
              squareSize={4}
              gridGap={3}
              color="#60A5FA"
              maxOpacity={0.3}
              flickerChance={0.3}
            />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-x-8 w-full">
              <div className="flex flex-col justify-start items-start lg:col-span-2">
                <h2 className="text-4xl font-bold">
                  Sobre mí
                </h2>
                <p className="text-md">
                  Soy un Desarrollador Full Stack con amplia experiencia en la construcción y optimización de aplicaciones web empresariales. Mi especialidad radica en crear soluciones escalables utilizando tecnologías modernas como Django, Next.js e infraestructura en la nube.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="skills">
          <div className="relative mx-auto container p-4 max-w-[800px]">
            <h2 className="text-4xl font-bold">
              Soft Skills
            </h2>
            <SoftSkillsGrid />
          </div>
        </section>
      </div>
    </main>
  );
}
