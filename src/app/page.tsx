import { ModeToggle } from "@/components/theme-toggle";
import { Meteors } from "@/components/magicui/meteors";
import Image from "next/image";
import { TextAnimate } from "@/components/magicui/text-animate";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGradientTextExperience } from "./_components/animated-gradient-text-experience";
import { BlurFade } from "@/components/magicui/blur-fade";
export default function Home() {
  return (
    <main>
      <div className="fixed top-0 right-0 p-4 z-[9000]">
        <ModeToggle />
      </div>
      <div className="relative flex h-screen w-full flex-col overflow-hidden">
        <Meteors number={30} />
        <section id="hero">
          <div className="relative mx-auto container max-w-[1000px] p-4" style={{ border: "1px solid rgba(120, 122, 124, 0.5)" }}>
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-x-8 w-full p-6 lg:p-12 overflow-hidden">
              <div className="flex flex-col justify-start items-start lg:col-span-1">
                <TextAnimate animation="slideLeft" by="word" className="text-6xl font-bold leading-none" style={{ letterSpacing: "-0.05em" }}>
                  Yeray Boix
                </TextAnimate>
                <TextAnimate animation="blurIn" by="line" className="text-xl text-left text-muted-foreground text-pretty">
                  Ingeniero de software especializado en desarrollo full-stack, arquitecturas escalables y despliegue en la nube.
                </TextAnimate>
              </div>
            </div>
            <BlurFade>
              <AnimatedGradientTextExperience />
            </BlurFade>
          </div>
        </section>
        <section id="about">
          <div className="relative mx-auto container max-w-[1000px] p-4" style={{ border: "1px solid rgba(120, 122, 124, 0.5)", borderTop: "none" }}>
            <h2 className="text-4xl font-bold">Sobre mí</h2>
            <p className="text-lg">
              Soy un ingeniero de software con una pasión por la innovación y el desarrollo de soluciones tecnológicas.
            </p>
            <p className="text-lg">
              Me encanta aprender cosas nuevas y trabajar en proyectos desafiantes que me permitan aplicar mis habilidades y crecer profesionalmente.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
