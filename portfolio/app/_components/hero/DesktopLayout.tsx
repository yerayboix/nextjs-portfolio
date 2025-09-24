import { Spotlight } from "@/components/ui/spotlight-new";
import { AvailabilityIndicator } from "@/components/ui/availability-indicator";
import { HyperText } from "@/components/magicui/hyper-text";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function DesktopLayout() {
  return (
    <div className="hidden md:flex h-screen">
      {/* Columna Izquierda - Imagen */}
      <div className="flex-1 relative">
        <Image
          src="/images/yeray_catedral_color.webp"
          alt="Yeray en la catedral"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Columna Derecha - Descripción */}
      <div className="flex-1 flex items-center justify-center p-8 relative bg-custom-dark">
        <Spotlight containerWidth="constrained" position="right" />
        <div className="space-y-8 max-w-2xl relative z-10">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <HyperText
                as="h1"
                className="md:text-7xl lg:text-8xl font-new-title font-bold leading-tight text-custom-light"
                fontClassName="font-new-title"
                animateOnHover={false}
                delay={0}
              >
                YERAY BOIX TORNER
              </HyperText>
            </div>
            <HyperText
              as="p"
              className="md:text-lg lg:text-2xl font-pt-mono text-custom-light border-b border-custom-light/30 pb-3"
              fontClassName="font-pt-mono"
              animateOnHover={false}
            >
              INGENIERO INFORMÁTICO • DESARROLLADOR FULLSTACK
            </HyperText>
          </div>

          <div className="space-y-4">
            <HyperText
              as="p"
              className="md:text-base lg:text-lg font-pt-mono text-custom-light leading-relaxed italic"
              fontClassName="font-pt-mono"
              animateOnHover={false}
              textCase="normal"
            >
              &quot;Me esfuerzo para que cada día de mi vida como ingeniero sea un poco mejor que el día anterior. Trabajo y constancia.&quot;
            </HyperText>
            <AvailabilityIndicator variant="badge" text="Disponible - Dame una oportunidad y no te arrepentirás" />
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/yerayboix" className="inline-block" target="_blank">
              <Button variant="outline" className="font-pt-mono cursor-pointer">
                <Github className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/yerayboix/" className="inline-block" target="_blank">
              <Button variant="outline" className="font-pt-mono cursor-pointer">
                <Linkedin className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 