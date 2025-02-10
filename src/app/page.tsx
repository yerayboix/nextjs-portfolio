import { ModeToggle } from "@/components/theme-toggle";
import { Meteors } from "@/components/magicui/meteors";
import Image from "next/image";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function Home() {
  return (
    <main>
      <div className="fixed top-0 right-0 p-4 z-[9000]">
        <ModeToggle />
      </div>
      <div className="relative flex h-screen w-full flex-col overflow-hidden space-y-10">
        <Meteors number={30} />
        <section id="hero">
          <div className="mx-auto max-w-2xl space-y-2 p-4">
            <TextAnimate animation="slideLeft" by="word" className="text-6xl font-bold leading-none" style={{ letterSpacing: "-0.05em" }}>
              Hola, soy Yeray Boix
            </TextAnimate>
            <TextAnimate animation="blurIn" by="word" className="text-xl">
              Ingeniero de software especializado en desarrollo full-stack, arquitecturas escalables y despliegue en la nube.
            </TextAnimate>
          </div>
        </section>
      </div>
    </main>
  );
}
