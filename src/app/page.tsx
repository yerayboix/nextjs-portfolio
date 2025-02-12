import { ModeToggle } from "@/components/theme-toggle";
import { Meteors } from "@/components/magicui/meteors";
import { TextAnimate } from "@/components/magicui/text-animate";
import { AnimatedGradientTextExperience } from "./_components/animated-gradient-text-experience";
import { BlurFade } from "@/components/magicui/blur-fade";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { NameTitleShadow } from "./_components/h1-name-shadow";
import Image from "next/image";
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
                <BlurFade>
                  <NameTitleShadow />
                </BlurFade>
                <TextAnimate animation="blurIn" by="line" className="text-base md:text-base lg:text-md text-left text-muted-foreground text-pretty">
                  Ingeniero de software especializado en desarrollo full-stack, arquitecturas escalables y despliegue en la nube.
                </TextAnimate>
              </div>
              <BlurFade>
                <div className="" style={{ transform: "translateY(10px) translateZ(0px)" }}>
                  <span className="relative flex shrink-0 overflow-hidden rounded-full size-28 border">
                    <Image src="/avatars/user_image.jpg" alt="User Image" fill className="object-cover" />
                  </span>
                </div>
              </BlurFade>
            </div>
            <BlurFade>
              <AnimatedGradientTextExperience />
            </BlurFade>
          </div>
        </section>
        <section id="about">
          <div className="relative mx-auto container max-w-[1000px] p-4" style={{ border: "1px solid rgba(120, 122, 124, 0.5)", borderTop: "none" }}>
            <FlickeringGrid
              className="absolute w-full h-full inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
              squareSize={4}
              gridGap={3}
              color="#60A5FA"
              maxOpacity={0.2}
              flickerChance={0.3}
            />
            <h2 className="text-4xl font-bold">Sobre mí</h2>
            <p className="text-lg text-muted-foreground">
              Soy un ingeniero de software con una pasión por la innovación y el desarrollo de soluciones tecnológicas.
            </p>
            <p className="text-lg text-muted-foreground">
              Me encanta aprender cosas nuevas y trabajar en proyectos desafiantes que me permitan aplicar mis habilidades y crecer profesionalmente.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
