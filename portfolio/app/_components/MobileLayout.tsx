import Image from "next/image";

export default function MobileLayout() {
  return (
    <div className="md:hidden relative h-screen">
      {/* Imagen de Fondo */}
      <Image
        src="/images/yeray_catedral.jpg"
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
          <h1 className="text-8xl md:text-8xl font-new-title font-bold text-white">
            YERAY BOIX TORNER
          </h1>
          <p className="text-xl font-pt-mono text-white/90 font-bold">
            INGENIERO INFORMÁTICO - SOFTWARE - FULLSTACK
          </p>
          <p className="text-sm font-pt-mono text-white/90 leading-relaxed uppercase">
            Me apasiona crear tecnología útil, que resuelva problemas reales, y acompañar a personas y empresas en la transformación de una idea a una realidad.
          </p>
          
        </div>
      </div>
    </div>
  );
} 