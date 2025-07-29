import { Particles } from "@/components/magicui/particles";

// Data for technologies
const technologiesData = {
  languages: ['Python', 'JavaScript/TypeScript', 'HTML', 'CSS', 'SQL', 'Bash'],
  frameworks: ['Django', 'Django REST Framework', 'Next.js', 'React', 'FastAPI', 'Celery', 'Redis'],
  devops: ['Docker', 'Kubernetes', 'Dokploy', 'Nginx', 'Git', 'CI/CD'],
  databases: ['PostgreSQL', 'MySQL', 'SQLite', 'Apache Druid'],
  communication: ['MQTT', 'EMQX'],
  others: ['Stripe', 'WordPress', 'Linux', 'Administración de servidores', 'SSL', 'Proxy', 'LaTeX']
};

// Desktop Layout Component
const DesktopLayout = () => {
  return (
    <div className="hidden md:flex flex-1 px-8 pb-8 relative z-10">
      <div className="grid grid-cols-2 gap-12 w-full max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Languages */}
          <div className="space-y-4">
            <h2 className="text-4xl font-new-title font-semibold text-secondary">
              Lenguajes
            </h2>
            <div className="flex flex-wrap gap-3">
              {technologiesData.languages.map((lang) => (
                <span key={lang} className="px-4 py-2 bg-white/50 backdrop-blur-sm text-secondary border border-secondary/20 rounded-xl text-sm font-pt-mono shadow-sm hover:shadow-md transition-all duration-200">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="space-y-4">
            <h2 className="text-4xl font-new-title font-semibold text-secondary">
              Frameworks y Librerías
            </h2>
            <div className="flex flex-wrap gap-3">
              {technologiesData.frameworks.map((framework) => (
                <span key={framework} className="px-4 py-2 bg-white/50 backdrop-blur-sm text-secondary border border-secondary/20 rounded-xl text-sm font-pt-mono shadow-sm hover:shadow-md transition-all duration-200">
                  {framework}
                </span>
              ))}
            </div>
          </div>

          {/* DevOps */}
          <div className="space-y-4">
            <h2 className="text-4xl font-new-title font-semibold text-secondary">
              DevOps
            </h2>
            <div className="flex flex-wrap gap-3">
              {technologiesData.devops.map((tool) => (
                <span key={tool} className="px-4 py-2 bg-white/50 backdrop-blur-sm text-secondary border border-secondary/20 rounded-xl text-sm font-pt-mono shadow-sm hover:shadow-md transition-all duration-200">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Databases */}
          <div className="space-y-4">
            <h2 className="text-4xl font-new-title font-semibold text-secondary">
              Bases de Datos
            </h2>
            <div className="flex flex-wrap gap-3">
              {technologiesData.databases.map((db) => (
                <span key={db} className="px-4 py-2 bg-white/50 backdrop-blur-sm text-secondary border border-secondary/20 rounded-xl text-sm font-pt-mono shadow-sm hover:shadow-md transition-all duration-200">
                  {db}
                </span>
              ))}
            </div>
          </div>

          {/* Communication */}
          <div className="space-y-4">
            <h2 className="text-4xl font-new-title font-semibold text-secondary">
              Comunicación
            </h2>
            <div className="flex flex-wrap gap-3">
              {technologiesData.communication.map((comm) => (
                <span key={comm} className="px-4 py-2 bg-white/50 backdrop-blur-sm text-secondary border border-secondary/20 rounded-xl text-sm font-pt-mono shadow-sm hover:shadow-md transition-all duration-200">
                  {comm}
                </span>
              ))}
            </div>
          </div>

          {/* Others */}
          <div className="space-y-4">
            <h2 className="text-4xl font-new-title font-semibold text-secondary">
              Otros
            </h2>
            <div className="flex flex-wrap gap-3">
              {technologiesData.others.map((other) => (
                <span key={other} className="px-4 py-2 bg-white/50 backdrop-blur-sm text-secondary border border-secondary/20 rounded-xl text-sm font-pt-mono shadow-sm hover:shadow-md transition-all duration-200">
                  {other}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mobile Layout Component
const MobileLayout = () => {
  return (
    <div className="md:hidden flex-1 flex items-start justify-center px-6 pb-8 relative z-10">
      <div className="text-center space-y-6 max-w-sm">
        {/* Languages */}
        <div className="space-y-3">
          <h2 className="text-2xl font-new-title font-semibold text-secondary">
            Lenguajes
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {technologiesData.languages.map((lang) => (
              <span key={lang} className="px-3 py-1.5 bg-white/50 backdrop-blur-sm text-secondary border border-secondary/20 rounded-lg text-xs font-pt-mono shadow-sm">
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div className="space-y-3">
          <h2 className="text-2xl font-new-title font-semibold text-secondary">
            Frameworks y Librerías
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {technologiesData.frameworks.map((framework) => (
              <span key={framework} className="px-3 py-1.5 bg-white/50 backdrop-blur-sm text-secondary border border-secondary/20 rounded-lg text-xs font-pt-mono shadow-sm">
                {framework}
              </span>
            ))}
          </div>
        </div>

        {/* DevOps */}
        <div className="space-y-3">
          <h2 className="text-2xl font-new-title font-semibold text-secondary">
            DevOps
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {technologiesData.devops.map((tool) => (
              <span key={tool} className="px-3 py-1.5 bg-white/50 backdrop-blur-sm text-secondary border border-secondary/20 rounded-lg text-xs font-pt-mono shadow-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="space-y-3">
          <h2 className="text-2xl font-new-title font-semibold text-secondary">
            Bases de Datos
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {technologiesData.databases.map((db) => (
              <span key={db} className="px-3 py-1.5 bg-white/50 backdrop-blur-sm text-secondary border border-secondary/20 rounded-lg text-xs font-pt-mono shadow-sm">
                {db}
              </span>
            ))}
          </div>
        </div>

        {/* Communication */}
        <div className="space-y-3">
          <h2 className="text-2xl font-new-title font-semibold text-secondary">
            Comunicación
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {technologiesData.communication.map((comm) => (
              <span key={comm} className="px-3 py-1.5 bg-white/50 backdrop-blur-sm text-secondary border border-secondary/20 rounded-lg text-xs font-pt-mono shadow-sm">
                {comm}
              </span>
            ))}
          </div>
        </div>

        {/* Others */}
        <div className="space-y-3">
          <h2 className="text-2xl font-new-title font-semibold text-secondary">
            Otros
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {technologiesData.others.map((other) => (
              <span key={other} className="px-3 py-1.5 bg-white/50 backdrop-blur-sm text-secondary border border-secondary/20 rounded-lg text-xs font-pt-mono shadow-sm">
                {other}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AboutMeSection() {
  return (
    <section className="flex flex-col min-h-screen bg-custom-light-2 rounded-t-4xl relative overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          className="w-full h-full"
          quantity={50}
          staticity={30}
          ease={50}
          size={0.8}
          color="#1a1a1a"
          vx={0.1}
          vy={0.1}
        />
      </div>

      {/* Main Title */}
      <div className="flex justify-start pt-8 pb-8 px-8 relative z-10">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-9xl font-new-title font-bold text-secondary text-center md:text-left">
            Tecnologías
          </h1>
          <p className="text-sm text-center md:text-left md:text-base lg:text-xl font-pt-mono text-secondary/80 mt-4 max-w-6xl px-2 md:px-0">
            Me mantengo constantemente actualizado con las últimas tecnologías y tendencias del sector, adaptándome a un entorno tecnológico en constante evolución. No tengo miedo a enfrentarme al aprendizaje de cualquier tecnología que no aparezca en esta lista.
          </p>
        </div>
      </div>

      <DesktopLayout />
      <MobileLayout />
    </section>
  );
}