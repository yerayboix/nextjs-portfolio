export default function AboutMeSection() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-background">
      {/* Desktop Layout */}
      <div className="hidden md:flex flex-1 items-center justify-center p-8">
        <div className="space-y-8 max-w-2xl">
          <h1 className="text-4xl font-new-title font-bold text-foreground">
            Sobre Mí
          </h1>
          <p className="text-lg font-pt-mono text-muted-foreground leading-relaxed">
            Soy un ingeniero informático apasionado por el desarrollo de software...
          </p>
        </div>
      </div>
      <div className="hidden md:flex flex-1 items-center justify-center p-8">
        <div className="space-y-8 max-w-2xl">
          <h2 className="text-3xl font-new-title font-bold text-foreground">
            Experiencia
          </h2>
          <p className="text-lg font-pt-mono text-muted-foreground leading-relaxed">
            Con experiencia en tecnologías modernas como React, Node.js, TypeScript...
          </p>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex-1 flex items-center justify-center p-6">
        <div className="text-center space-y-6 max-w-sm">
          <h1 className="text-3xl font-new-title font-bold text-foreground">
            Sobre Mí
          </h1>
          <p className="text-base font-pt-mono text-muted-foreground leading-relaxed">
            Soy un ingeniero informático apasionado por el desarrollo de software...
          </p>
          <h2 className="text-2xl font-new-title font-bold text-foreground mt-8">
            Experiencia
          </h2>
          <p className="text-base font-pt-mono text-muted-foreground leading-relaxed">
            Con experiencia en tecnologías modernas como React, Node.js, TypeScript...
          </p>
        </div>
      </div>
    </div>
  );
}