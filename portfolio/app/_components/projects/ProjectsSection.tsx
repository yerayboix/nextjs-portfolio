"use client"
import { Particles } from "@/components/magicui/particles";
import { MagicCard } from "@/components/magicui/magic-card";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Database, Terminal, Code, Server, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Data for web projects
const webProjectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Plataforma completa de comercio electrónico con sistema de pagos, gestión de inventario y panel de administración.",
    technologies: ["Next.js", "React", "TypeScript", "Stripe", "PostgreSQL"],
    image: "/images/project1.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
    isPublic: true
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Dashboard interactivo para análisis de datos en tiempo real con gráficos y métricas personalizables.",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "WebSocket"],
    image: "/images/project3.jpg",
    liveUrl: "https://dashboard.example.com",
    githubUrl: "https://github.com/example/dashboard",
    isPublic: true
  }
];

// Data for tools
const toolsData = [
  {
    id: 1,
    title: "API de Gestión de Datos",
    description: "API RESTful para gestión de datos empresariales con autenticación JWT y documentación automática.",
    technologies: ["Django", "Django REST", "Python", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/example/api",
    isPublic: false,
    icon: Database
  },
  {
    id: 2,
    title: "CLI Tool para DevOps",
    description: "Herramienta de línea de comandos para automatizar tareas de DevOps y despliegues.",
    technologies: ["Python", "Click", "Docker", "Kubernetes", "Git"],
    githubUrl: "https://github.com/example/cli-tool",
    isPublic: true,
    icon: Terminal
  },
  {
    id: 3,
    title: "Data Processing Pipeline",
    description: "Pipeline de procesamiento de datos con ETL automatizado y transformaciones complejas.",
    technologies: ["Python", "Apache Airflow", "PostgreSQL", "Redis", "Celery"],
    githubUrl: "https://github.com/example/data-pipeline",
    isPublic: false,
    icon: Server
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
        className="p-0"
      >
        <CardHeader className="p-4">
          {/* Image */}
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200"
            />
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

        <CardFooter className="flex flex-wrap gap-3 pt-2 p-4">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-custom-light-2 text-background rounded-lg text-sm font-pt-mono hover:bg-custom-light-2/90 transition-colors duration-200"
            >
              Ver Proyecto
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-custom-light-2 text-custom-light-2 rounded-lg text-sm font-pt-mono hover:bg-custom-light-2/10 transition-colors duration-200"
            >
              {project.isPublic ? "Ver Código" : "Detalles"}
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
        className="p-0"
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

        <CardFooter className="flex flex-wrap gap-3 pt-2 p-4">
          {tool.githubUrl && (
            <Link
              href={tool.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-custom-light-2 text-custom-light-2 rounded-lg text-sm font-pt-mono hover:bg-custom-light-2/10 transition-colors duration-200"
            >
              {tool.isPublic ? "Ver Código" : "Detalles"}
            </Link>
          )}
        </CardFooter>
      </MagicCard>
    </Card>
  );
};

// Desktop Layout Component
const DesktopLayout = () => {
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
              {webProjectsData.map((project) => (
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
              {webProjectsData.map((project) => (
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
        <section className="flex flex-col bg-background min-h-screen relative overflow-hidden">
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