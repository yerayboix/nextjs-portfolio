import { Spotlight } from "@/components/ui/spotlight-new";
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
            <h1 className="md:text-7xl lg:text-8xl font-new-title font-bold text-primary leading-tight">
              YERAY BOIX TORNER
            </h1>
            <p className="md:text-lg lg:text-2xl font-pt-mono text-primary border-b border-primary/30 pb-3">
              INGENIERO INFORMÁTICO • DESARROLLADOR FULLSTACK
            </p>
          </div>
          
          <p className="md:text-base lg:text-lg font-pt-mono text-muted-foreground leading-relaxed italic">
            &quot;Me apasiona crear tecnología útil que resuelva problemas reales, acompañando a personas y empresas en la transformación de ideas en realidades digitales.&quot;
          </p>
        </div>
      </div>
    </div>
  );
} 