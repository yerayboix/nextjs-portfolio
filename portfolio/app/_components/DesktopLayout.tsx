import Image from "next/image";

export default function DesktopLayout() {
  return (
    <div className="hidden md:flex h-screen">
      {/* Columna Izquierda - Imagen */}
      <div className="flex-1 relative">
        <Image
          src="/images/yeray_catedral.jpg"
          alt="Yeray en la catedral"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Columna Derecha - Descripción */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="space-y-6">
          <h1 className="md:text-7xl lg:text-8xl font-new-title font-bold text-primary">
            YERAY BOIX TORNER
          </h1>
          <p className="md:text-lg lg:text-2xl font-pt-mono text-primary">
            INGENIERO INFORMÁTICO - SOFTWARE - FULLSTACK
          </p>
          <p className="md:text-sm lg:text-lg font-pt-mono text-muted-foreground leading-relaxed uppercase">
            Me apasiona crear tecnología útil, que resuelva problemas reales, y acompañar a personas y empresas en la transformación de una idea a una realidad.
          </p>
        </div>
      </div>
    </div>
  );
} 