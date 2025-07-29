"use client"
import { Spotlight } from "@/components/ui/spotlight-new";
import { AvailabilityIndicator } from "@/components/ui/availability-indicator";
import { HyperText } from "@/components/magicui/hyper-text";
import Image from "next/image";

export default function DesktopLayout() {
  return (
    <div className="hidden md:flex h-screen">
      {/* Columna Izquierda - Imagen */}
      <div className="flex-1 relative">
        <Image
          src="/images/yeray_catedral_color.jpg"
          alt="Yeray en la catedral"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Columna Derecha - Descripción */}
      <div className="flex-1 flex items-center justify-center p-8 relative">
        <Spotlight containerWidth="constrained" position="right" />
        <div className="space-y-8 max-w-2xl relative z-10">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <HyperText 
                as="h1" 
                className="md:text-7xl lg:text-8xl font-new-title font-bold leading-tight bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text bg-opacity-50"
                fontClassName="font-new-title"
                animateOnHover={false}
                delay={0}
              >
                YERAY BOIX TORNER
              </HyperText>
            </div>
            <HyperText 
              as="p" 
              className="md:text-lg lg:text-2xl font-pt-mono text-primary border-b border-primary/30 pb-3"
              fontClassName="font-pt-mono"
              animateOnHover={false}
            >
              INGENIERO INFORMÁTICO • DESARROLLADOR FULLSTACK
            </HyperText>
          </div>
          
          <div className="space-y-4">
            <HyperText 
              as="p" 
              className="md:text-base lg:text-lg font-pt-mono text-muted-foreground leading-relaxed italic"
              fontClassName="font-pt-mono"
              animateOnHover={false}
              textCase="normal"
            >
              &quot;Me apasiona crear tecnología útil que resuelva problemas reales, acompañando a personas y empresas en la transformación de ideas en realidades digitales.&quot;
            </HyperText>
            <AvailabilityIndicator variant="badge" text="Disponible para trabajar de forma inmediata" />
          </div>
        </div>
      </div>
    </div>
  );
} 