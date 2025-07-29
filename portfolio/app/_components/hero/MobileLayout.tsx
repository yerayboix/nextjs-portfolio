"use client"
import { AvailabilityIndicator } from "@/components/ui/availability-indicator";
import Image from "next/image";

export default function MobileLayout() {
  return (
    <div className="md:hidden relative h-screen">
      {/* Imagen de Fondo */}
      <Image
        src="/images/yeray_catedral_color.jpg"
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
            <h1 className="text-8xl md:text-8xl font-new-title font-bold text-white">
              YERAY BOIX TORNER
            </h1>
          </div>
          <p className="text-xl font-pt-mono text-white/90 font-bold border-b border-white/30 pb-2">
            INGENIERO INFORMÁTICO • DESARROLLADOR FULLSTACK
          </p>
          <p className="text-sm font-pt-mono text-white/90 leading-relaxed italic">
            &quot;Me apasiona crear tecnología útil que resuelva problemas reales, acompañando a personas y empresas en la transformación de ideas en realidades digitales.&quot;
          </p>
          <AvailabilityIndicator variant="badge" text="Disponible para trabajar de forma inmediata" />
        </div>
      </div>
    </div>
  );
} 