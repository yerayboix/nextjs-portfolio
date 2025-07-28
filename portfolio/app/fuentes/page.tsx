export default function FuentesPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-new-title font-bold text-primary">
            Demo de Fuentes
          </h1>
          <p className="text-xl font-inter text-muted-foreground">
            Demostración de las 4 fuentes instaladas en tu aplicación Next.js
          </p>
        </div>

        {/* New Title Font */}
        <section className="space-y-6">
          <h2 className="text-4xl font-new-title font-bold text-primary border-b pb-2">
            1. New Title (Local Font)
          </h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-new-title font-extralight">Extralight (200) - The quick brown fox jumps over the lazy dog</h3>
              <h3 className="text-2xl font-new-title font-light">Light (300) - The quick brown fox jumps over the lazy dog</h3>
              <h3 className="text-2xl font-new-title font-normal">Regular (400) - The quick brown fox jumps over the lazy dog</h3>
              <h3 className="text-2xl font-new-title font-medium">Medium (500) - The quick brown fox jumps over the lazy dog</h3>
              <h3 className="text-2xl font-new-title font-bold">Bold (700) - The quick brown fox jumps over the lazy dog</h3>
            </div>
          </div>
        </section>

        {/* PT Mono Font */}
        <section className="space-y-6">
          <h2 className="text-3xl font-pt-mono font-bold text-primary border-b pb-2">
            2. PT Mono (Google Fonts)
          </h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-xl font-pt-mono">Regular (400) - The quick brown fox jumps over the lazy dog</p>
              <p className="text-xl font-pt-mono">0123456789 - Números y símbolos: !@#$%^&*()</p>
            </div>
          </div>
        </section>

        {/* Roboto Font */}
        <section className="space-y-6">
          <h2 className="text-3xl font-roboto font-bold text-primary border-b pb-2">
            3. Roboto (Google Fonts)
          </h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-xl font-roboto font-light">Light (300) - The quick brown fox jumps over the lazy dog</p>
              <p className="text-xl font-roboto font-normal">Regular (400) - The quick brown fox jumps over the lazy dog</p>
              <p className="text-xl font-roboto font-medium">Medium (500) - The quick brown fox jumps over the lazy dog</p>
              <p className="text-xl font-roboto font-bold">Bold (700) - The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h4 className="font-roboto font-bold text-lg mb-2">Ejemplo de párrafo con Roboto:</h4>
              <p className="font-roboto text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </section>

        {/* Inter Font */}
        <section className="space-y-6">
          <h2 className="text-3xl font-inter font-bold text-primary border-b pb-2">
            4. Inter (Google Fonts)
          </h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-xl font-inter font-light">Light (300) - The quick brown fox jumps over the lazy dog</p>
              <p className="text-xl font-inter font-normal">Regular (400) - The quick brown fox jumps over the lazy dog</p>
              <p className="text-xl font-inter font-medium">Medium (500) - The quick brown fox jumps over the lazy dog</p>
              <p className="text-xl font-inter font-semibold">Semibold (600) - The quick brown fox jumps over the lazy dog</p>
              <p className="text-xl font-inter font-bold">Bold (700) - The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h4 className="font-inter font-semibold text-lg mb-2">Ejemplo de párrafo con Inter:</h4>
              <p className="font-inter text-base leading-relaxed">
                Inter es una fuente diseñada específicamente para interfaces de usuario. Tiene excelente legibilidad en pantallas 
                y está optimizada para tamaños pequeños. Perfecta para aplicaciones web modernas.
              </p>
            </div>
          </div>
        </section>

        {/* Comparación de tamaños */}
        <section className="space-y-6">
          <h2 className="text-3xl font-inter font-bold text-primary border-b pb-2">
            Comparación de Tamaños
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Títulos (text-4xl)</h3>
              <h4 className="text-4xl font-new-title font-bold">New Title</h4>
              <h4 className="text-4xl font-roboto font-bold">Roboto</h4>
              <h4 className="text-4xl font-inter font-bold">Inter</h4>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Cuerpo (text-base)</h3>
              <p className="text-base font-new-title">New Title - Texto de ejemplo</p>
              <p className="text-base font-roboto">Roboto - Texto de ejemplo</p>
              <p className="text-base font-inter">Inter - Texto de ejemplo</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t">
          <p className="font-inter text-muted-foreground">
            Fuentes instaladas: New Title (Local), PT Mono, Roboto, Inter (Google Fonts)
          </p>
        </footer>
      </div>
    </div>
  );
} 