"use client"
import { Particles } from "@/components/magicui/particles";
import { MagicCard } from "@/components/magicui/magic-card";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LinkPreview } from "@/components/ui/link-preview";
import { Settings, Database, Terminal, Code, Server, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Data for web projects
const webProjectsData = [
  {
    id: 1,
    title: "EQUIP HR",
    description: "Sistema de gestión de control horario, módulo de solicitud de vacaciones y generación de informes por usuario.",
    technologies: ["Django", "Python", "PostgreSQL", "Docker", "Git"],
    image: "/images/apps/equiphr.jpg",
    liveUrl: null,
    githubUrl: null,
    isPublic: false,
    hasDetail: false
  },
  {
    id: 2,
    title: "EQUIP CRM",
    description: "Sistema de gestión de relaciones con clientes para optimizar ventas y seguimiento comercial.",
    technologies: ["Django", "Python", "Celery", "Redis", "PostgreSQL", "Docker", "Git"],
    image: null,
    liveUrl: null,
    githubUrl: null,
    isPublic: false,
    hasDetail: false
  },
  {
    id: 3,
    title: "Bufanuvols",
    description: "Plataforma interna de gestión de dispositivos de EQUIP Electronics.",
    technologies: ["Django", "Django REST Framework", "Python", "Celery", "Redis", "MQTT", "RabbitMQ", "PostgreSQL", "Docker", "Git"],
    image: "/images/apps/bufanuvols.jpg",
    liveUrl: "https://bufanuvols.cloud/",
    githubUrl: null,
    isPublic: true,
    hasDetail: false
  },
  {
    id: 4,
    title: "MYRECARGA",
    description: "Plataforma para la ingesta, muestra y envío de datos de estaciones de recarga de vehículos eléctricos a plataforma IoT.",
    technologies: ["Django", "Django REST Framework", "Python", "Celery", "Redis", "IoT", "PostgreSQL", "Docker", "Git"],
    image: null,
    liveUrl: null,
    githubUrl: null,
    isPublic: false,
    hasDetail: false
  },
  {
    id: 5,
    title: "Vibralinker",
    description: "Plataforma de ingesta, tratamiento y visualización de datos de sensores provenientes de maquinaria pesada.",
    technologies: ["Next.js", "React", "TypeScript", "Django REST Framework", "Python", "Apache Druid", "Apache Airflow", "PostgreSQL", "Docker", "Kubernetes", "Git"],
    image: "/images/apps/vibralinker.jpg",
    liveUrl: null,
    githubUrl: null,
    isPublic: false,
    hasDetail: false
  },
  {
    id: 6,
    title: "BARCOS",
    description: "Plataforma de gestión de flotas de barcos y gestión de rutas de navegación.",
    technologies: ["Django", "Django REST Framework", "Python", "Celery", "Redis", "PostgreSQL", "Docker", "Git"],
    image: null,
    liveUrl: null,
    githubUrl: null,
    isPublic: false,
    hasDetail: false
  },
  {
    id: 7,
    title: "Llanos del Hospital",
    description: "Web para el hotel Llanos del Hospital y SFTP para la gestión de archivos.",
    technologies: ["Django", "Django REST Framework", "Python", "Celery", "Redis", "PostgreSQL", "Docker", "Git"],
    image: "/images/apps/llanoshospital.jpg",
    liveUrl: "https://llanosdelhospital.com",
    githubUrl: null,
    isPublic: true,
    hasDetail: false
  },
  {
    id: 8,
    title: "Qualideep",
    description: "Web para promocionar Qualideep, un sistema de gestión de calidad y auditorías para empresas con el uso de IA.",
    technologies: ["Next.js", "React", "TypeScript", "Docker", "Git"],
    image: "/images/apps/qualideep.jpg",
    liveUrl: "https://qualideep.com",
    githubUrl: null,
    isPublic: true,
    hasDetail: false
  },
  {
    id: 9,
    title: "Revantik",
    description: "Web para promocionar Revantik, partner de Odoo enfocado en el sector industrial.",
    technologies: ["Next.js", "React", "TypeScript"],
    image: "/images/apps/revantik.jpg",
    liveUrl: "https://revantik.com",
    githubUrl: null,
    isPublic: true,
    hasDetail: false
  },
  {
    id: 10,
    title: "Proteu",
    description: "Sistema para la gestión de laboratorios y almacenamiento y muestra de resultados de análisis de laboratorio.",
    technologies: ["Django", "Django REST Framework", "Python", "PostgreSQL", "Docker", "Git"],
    image: "/images/apps/proteu.jpg",
    liveUrl: null,
    githubUrl: null,
    isPublic: false,
    hasDetail: false
  },
  {
    id: 11,
    title: "Solutia Gestión Ausencias",
    description: "Sistema para la gestión de ausencias, importación de ficheros FIE y configuración de alarmas para notificaciones.",
    technologies: ["Django", "Django REST Framework", "Python", "Celery", "Redis", "PostgreSQL", "Docker", "Kubernetes", "Git"],
    image: null,
    liveUrl: null,
    githubUrl: null,
    isPublic: false,
    hasDetail: false
  },
  {
    id: 12,
    title: "EQUIP Licencias",
    description: "Sistema de gestión de licencias de las aplicaciones de EQUIP Electronics.",
    technologies: ["Django", "Django REST Framework", "Python", "PostgreSQL", "Docker", "Git"],
    image: "/images/apps/equiplicencias.jpg",
    liveUrl: null,
    githubUrl: null,
    isPublic: false,
    hasDetail: false
  },
  {
    id: 13,
    title: "EQUIP BA",
    description: "Plataforma de gestión de business analytics con dashboards y reportes personalizables.",
    technologies: ["Next.js", "React", "TypeScript", "Django REST Framework", "Python", "PostgreSQL", "Docker", "Git"],
    image: "/images/apps/equipba.jpg",
    liveUrl: null,
    githubUrl: null,
    isPublic: false,
    hasDetail: false
  },
  {
    id: 14,
    title: "DeOficina",
    description: "Plataforma de obtención de las mejores ofertas para productos de oficina scrappeado directamente desde Amazon y notificaciones mediante Telegram.",
    technologies: ["Next.js", "React", "TypeScript", "Django REST Framework", "Python", "Celery", "Redis", "Supabase", "Docker", "Git"],
    image: "/images/apps/deoficina.jpg",
    liveUrl: "https://deoficina.es",
    githubUrl: null,
    isPublic: true,
    hasDetail: false
  },
  {
    id: 15,
    title: "Gestión Inventario y Facturación",
    description: "Sistema completo de gestión de inventario de libros, facturación y control de stock en tiempo real.",
    technologies: ["Next.js", "React", "TypeScript", "Django REST Framework", "Python", "Supabase", "Docker", "Git"],
    image: "/images/apps/gestioninventario.jpg",
    liveUrl: null,
    githubUrl: null,
    isPublic: false,
    hasDetail: false
  }
];

// Data for tools
const toolsData = [
  {
    id: 1,
    title: "TRAGAPINYOLS",
    description: "Puente entre las conexiones MQTT de dispositivos de Bufanuvols y almacenamiento de datos.",
    technologies: ["Python", "MQTT", "PostgreSQL", "Docker", "Git"],
    githubUrl: null,
    isPublic: false,
    hasDetail: false,
    icon: Terminal
  },
  {
    id: 2,
    title: "WEBTOOLS",
    description: "Suite de distintas herramientas útiles tales y como descarga de vídeos de Youtube y conversión.",
    technologies: ["Next.js", "React", "TypeScript", "Flask", "Python", "SQLite", "Docker", "Git"],
    githubUrl: null,
    isPublic: false,
    hasDetail: false,
    icon: Settings
  }
];

// Web Project Card Component
const WebProjectCard = ({ project }: { project: typeof webProjectsData[0] }) => {
  return (
    <Card className="p-0 w-full shadow-none border-none bg-transparent h-full">
      <MagicCard
        gradientSize={300}
        gradientColor="#1a1a1a"
        gradientOpacity={0.6}
        gradientFrom="#ffffff"
        gradientTo="#e5e5e5"
        className="p-0 h-full flex flex-col"
      >
        <CardHeader className="p-4">
          {/* Image or Placeholder */}
          <div className="relative h-48 rounded-lg overflow-hidden">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-200"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-custom-light-2/10 to-custom-light-2/20 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-custom-light-2/20 rounded-full flex items-center justify-center mb-3">
                    <Code className="w-8 h-8 text-custom-light-2" />
                  </div>
                  <p className="text-sm font-pt-mono text-custom-light-2/60">
                    Proyecto privado
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-4 flex-1 p-4">
          <div>
            <CardTitle className="text-xl md:text-2xl font-new-title font-semibold text-custom-light-2 mb-2">
              {project.title}
            </CardTitle>
            <p className="text-sm font-pt-mono text-custom-light-2/80 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-custom-light-2/10 text-custom-light-2 border border-custom-light-2/20 rounded-lg text-xs font-pt-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex flex-wrap gap-3 pt-2 p-4 mt-auto">
          {project.liveUrl && (
            <LinkPreview
              url={project.liveUrl}
              className="inline-block"
            >
              <button
                onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
                className="px-4 py-2 bg-custom-light-2 text-background rounded-lg text-sm font-pt-mono hover:bg-custom-light-2/90 transition-colors duration-200 cursor-pointer"
              >
                Ver Proyecto
              </button>
            </LinkPreview>
          )}
          {project.hasDetail && (
            <Link
              href={`/projects/${project.id}`}
              className="px-4 py-2 border border-custom-light-2 text-custom-light-2 rounded-lg text-sm font-pt-mono hover:bg-custom-light-2/10 transition-colors duration-200"
            >
              Ver Detalle
            </Link>
          )}
        </CardFooter>
      </MagicCard>
    </Card>
  );
};

// Tool Card Component
const ToolCard = ({ tool }: { tool: typeof toolsData[0] }) => {
  return (
    <Card className="p-0 w-full shadow-none border-none bg-transparent h-full">
      <MagicCard
        gradientSize={250}
        gradientColor="#1a1a1a"
        gradientOpacity={0.5}
        gradientFrom="#64b5f6"
        gradientTo="#42a5f5"
        className="p-0 h-full flex flex-col"
      >
        <CardHeader className="p-4">
          {/* Icon and Title */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-custom-light-2/20 to-custom-light-2/30 rounded-lg flex items-center justify-center">
              <tool.icon className="w-6 h-6 text-custom-light-2" />
            </div>
            <CardTitle className="text-xl md:text-2xl font-new-title font-semibold text-custom-light-2">
              {tool.title}
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="space-y-4 flex-1 p-4">
          <p className="text-sm font-pt-mono text-custom-light-2/80 leading-relaxed">
            {tool.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {tool.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-custom-light-2/10 text-custom-light-2 border border-custom-light-2/20 rounded-lg text-xs font-pt-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex flex-wrap gap-3 pt-2 p-4 mt-auto">
          {tool.hasDetail && (
            <Link
              href={`/tools/${tool.id}`}
              className="px-4 py-2 border border-custom-light-2 text-custom-light-2 rounded-lg text-sm font-pt-mono hover:bg-custom-light-2/10 transition-colors duration-200"
            >
              Ver Detalle
            </Link>
          )}
        </CardFooter>
      </MagicCard>
    </Card>
  );
};

// Desktop Layout Component
const DesktopLayout = () => {
  // Sort projects: public first, then private
  const sortedWebProjects = [...webProjectsData].sort((a, b) => {
    if (a.isPublic && !b.isPublic) return -1;
    if (!a.isPublic && b.isPublic) return 1;
    return 0;
  });

  return (
    <>
      <div className="hidden md:flex justify-start pt-8 pb-8 px-8 relative z-10">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-9xl font-new-title font-bold text-custom-light-2 text-center md:text-left">
            Proyectos
          </h1>
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base lg:text-xl font-pt-mono text-custom-light-2/80 mt-4 max-w-6xl px-2 md:px-0">
              Una selección de proyectos web y herramientas que demuestran mi experiencia en desarrollo fullstack y soluciones empresariales.
            </p>
          </div>
        </div>
      </div>
      
      {/* Web Projects Section */}
      <div className="hidden md:flex flex-1 px-8 pb-8 relative z-10">
        <div className="w-full max-w-6xl mx-auto space-y-8">
          <div>
            <h2 className="text-4xl font-new-title font-semibold text-custom-light-2 mb-6">
              Desarrollos Web
            </h2>
            <div className="grid grid-cols-2 gap-8">
              {sortedWebProjects.map((project) => (
                <WebProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
          
          {/* Tools Section */}
          <div>
            <h2 className="text-4xl font-new-title font-semibold text-custom-light-2 mb-6">
              Herramientas y APIs
            </h2>
            <div className="grid grid-cols-3 gap-6">
              {toolsData.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Mobile Layout Component
const MobileLayout = () => {
  // Sort projects: public first, then private
  const sortedWebProjects = [...webProjectsData].sort((a, b) => {
    if (a.isPublic && !b.isPublic) return -1;
    if (!a.isPublic && b.isPublic) return 1;
    return 0;
  });

  return (
    <>
      <div className="md:hidden flex justify-start pt-8 pb-8 px-8 relative z-10">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-9xl font-new-title font-bold text-custom-light-2 text-center">
            Proyectos
          </h1>
          <div className="text-center">
            <p className="text-sm md:text-base lg:text-xl font-pt-mono text-custom-light-2/80 mt-4 max-w-6xl px-2 md:px-0">
              Una selección de proyectos web y herramientas que demuestran mi experiencia en desarrollo fullstack y soluciones empresariales.
            </p>
          </div>
        </div>
      </div>
      
      {/* Web Projects Section */}
      <div className="md:hidden flex-1 px-6 pb-8 relative z-10">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-new-title font-semibold text-custom-light-2 mb-4 text-center">
              Desarrollos Web
            </h2>
            <div className="space-y-6">
              {sortedWebProjects.map((project) => (
                <WebProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
          
          {/* Tools Section */}
          <div>
            <h2 className="text-2xl font-new-title font-semibold text-custom-light-2 mb-4 text-center">
              Herramientas y APIs
            </h2>
            <div className="space-y-4">
              {toolsData.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function ProjectsSection() {
    return (
        <section id="projects" className="flex flex-col bg-background min-h-screen relative overflow-hidden">
            {/* Particles Background */}
            <div className="absolute inset-0 z-0">
                <Particles
                    className="w-full h-full"
                    quantity={50}
                    staticity={30}
                    ease={50}
                    size={0.8}
                    color="#ffffff"
                    vx={0.1}
                    vy={0.1}
                />
            </div>

            {/* Both layouts with CSS responsive classes */}
            <DesktopLayout />
            <MobileLayout />
        </section>
    );
}