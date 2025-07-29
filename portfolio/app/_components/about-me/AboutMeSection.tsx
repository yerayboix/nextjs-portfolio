export default function AboutMeSection() {
  return (
    <section className="flex flex-col min-h-screen bg-custom-light-2 rounded-t-4xl">
      {/* Main Title */}
      <div className="flex justify-start pt-8 pb-8 px-8">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-9xl font-new-title font-bold text-secondary">
            Tecnologías
          </h1>
          <p className="text-lg md:text-xl font-pt-mono text-secondary/80 mt-4 max-w-6xl">
            Me mantengo constantemente actualizado con las últimas tecnologías y tendencias del sector, adaptándome a un entorno tecnológico en constante evolución. No tengo miedo a enfrentarme al aprendizaje de cualquier tecnología que no aparezca en esta lista.
          </p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-1 px-8 pb-8">
        <div className="grid grid-cols-2 gap-12 w-full max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Languages */}
            <div className="space-y-4">
              <h2 className="text-4xl font-new-title font-semibold text-secondary">
                Lenguajes
              </h2>
              <div className="flex flex-wrap gap-3">
                {['Python', 'JavaScript/TypeScript', 'HTML', 'CSS', 'SQL', 'Bash'].map((lang) => (
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
                {['Django', 'Django REST Framework', 'Next.js', 'React', 'FastAPI', 'Celery', 'Redis'].map((framework) => (
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
                {['Docker', 'Kubernetes', 'Dokploy', 'Nginx', 'Git', 'CI/CD'].map((tool) => (
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
                {['PostgreSQL', 'MySQL', 'SQLite', 'Apache Druid'].map((db) => (
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
                {['MQTT', 'EMQX'].map((comm) => (
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
                {['Stripe', 'WordPress', 'Linux', 'Administración de servidores', 'SSL', 'Proxy', 'LaTeX'].map((other) => (
                  <span key={other} className="px-4 py-2 bg-white/50 backdrop-blur-sm text-secondary border border-secondary/20 rounded-xl text-sm font-pt-mono shadow-sm hover:shadow-md transition-all duration-200">
                    {other}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex-1 flex items-start justify-center px-6 pb-8">
        <div className="text-center space-y-6 max-w-sm">
          {/* Languages */}
          <div className="space-y-3">
            <h2 className="text-xl font-new-title font-semibold text-secondary">
              Lenguajes
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {['Python', 'JavaScript/TypeScript', 'HTML', 'CSS', 'SQL', 'Bash'].map((lang) => (
                <span key={lang} className="px-3 py-1.5 bg-white/50 backdrop-blur-sm text-secondary border border-secondary/20 rounded-lg text-xs font-pt-mono shadow-sm">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="space-y-3">
            <h2 className="text-xl font-new-title font-semibold text-secondary">
              Frameworks y Librerías
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {['Django', 'Django REST Framework', 'Next.js', 'React', 'FastAPI', 'Celery', 'Redis'].map((framework) => (
                <span key={framework} className="px-3 py-1.5 bg-white/50 backdrop-blur-sm text-secondary border border-secondary/20 rounded-lg text-xs font-pt-mono shadow-sm">
                  {framework}
                </span>
              ))}
            </div>
          </div>

          {/* DevOps */}
          <div className="space-y-3">
            <h2 className="text-xl font-new-title font-semibold text-secondary">
              DevOps
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {['Docker', 'Kubernetes', 'Dokploy', 'Nginx', 'Git', 'CI/CD'].map((tool) => (
                <span key={tool} className="px-3 py-1.5 bg-white/50 backdrop-blur-sm text-secondary border border-secondary/20 rounded-lg text-xs font-pt-mono shadow-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="space-y-3">
            <h2 className="text-xl font-new-title font-semibold text-secondary">
              Bases de Datos
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {['PostgreSQL', 'MySQL', 'SQLite', 'Apache Druid'].map((db) => (
                <span key={db} className="px-3 py-1.5 bg-white/50 backdrop-blur-sm text-secondary border border-secondary/20 rounded-lg text-xs font-pt-mono shadow-sm">
                  {db}
                </span>
              ))}
            </div>
          </div>

          {/* Communication */}
          <div className="space-y-3">
            <h2 className="text-xl font-new-title font-semibold text-secondary">
              Comunicación
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {['MQTT', 'EMQX'].map((comm) => (
                <span key={comm} className="px-3 py-1.5 bg-white/50 backdrop-blur-sm text-secondary border border-secondary/20 rounded-lg text-xs font-pt-mono shadow-sm">
                  {comm}
                </span>
              ))}
            </div>
          </div>

          {/* Others */}
          <div className="space-y-3">
            <h2 className="text-xl font-new-title font-semibold text-secondary">
              Otros
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {['Stripe', 'WordPress', 'Linux', 'Administración de servidores', 'SSL', 'Proxy', 'LaTeX'].map((other) => (
                <span key={other} className="px-3 py-1.5 bg-white/50 backdrop-blur-sm text-secondary border border-secondary/20 rounded-lg text-xs font-pt-mono shadow-sm">
                  {other}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}