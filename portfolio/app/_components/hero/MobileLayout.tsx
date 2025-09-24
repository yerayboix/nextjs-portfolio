import { AvailabilityIndicator } from "@/components/ui/availability-indicator";
import { HyperText } from "@/components/magicui/hyper-text";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function MobileLayout() {
  return (
    <div className="md:hidden relative h-screen">
      {/* Imagen de Fondo */}
      <Image
        src="/images/yeray_catedral_color.webp"
        alt="Yeray en la catedral"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay Oscuro */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Overlay de Contenido */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="text-center space-y-6 max-w-sm">
          <div className="space-y-4">
            <HyperText
              as="h1"
              className="text-8xl md:text-8xl font-new-title font-bold text-custom-light-2"
              fontClassName="font-new-title"
              animateOnHover={false}
            >
              YERAY BOIX
            </HyperText>
            <HyperText
              as="h1"
              className="text-8xl md:text-8xl font-new-title font-bold text-custom-light-2"
              fontClassName="font-new-title"
              animateOnHover={false}
            >
              TORNER
            </HyperText>
          </div>
          <HyperText
            as="p"
            className="text-xl font-pt-mono text-custom-light-2 font-bold border-b border-custom-light/30 pb-2"
            fontClassName="font-pt-mono"
            animateOnHover={false}
          >
            INGENIERO INFORMÁTICO • DESARROLLADOR FULLSTACK
          </HyperText>
          <HyperText
            as="p"
            className="text-sm font-pt-mono text-custom-light-2 leading-relaxed italic"
            fontClassName="font-pt-mono"
            animateOnHover={false}
          >
            &quot;Me esfuerzo para que cada día de mi vida como ingeniero sea un poco mejor que el día anterior. Trabajo y constancia.&quot;
          </HyperText>
          <AvailabilityIndicator variant="badge" text="Disponible de forma inmediata" />
          <div className="flex gap-4 justify-center">
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