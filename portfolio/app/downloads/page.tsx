"use client"
import { useEffect } from "react";
import Link from "next/link";
import { HyperText } from "@/components/magicui/hyper-text";
import { Particles } from "@/components/magicui/particles";
import Navbar from "@/components/navbar";
import { FileText, Mail } from "lucide-react";

export default function DownloadsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const downloads = [
    {
      title: "CV - Currículum Vitae",
      description: "Mi currículum vitae actualizado con toda mi experiencia profesional y formación",
      icon: FileText,
      link: "https://drive.google.com/file/d/1OF6OqTaQuS5TeRoiMx7lv7f3_oGaDMEi/view?usp=sharing",
      color: "from-white to-gray-100"
    },
    {
      title: "Carta de Recomendación",
      description: "Carta de recomendación profesional que respalda mi trabajo y competencias",
      icon: Mail,
      link: "https://drive.google.com/file/d/1PArWTXaovkOG2r6W1it4yIMJISk2ngHP/view?usp=sharing",
      color: "from-white to-gray-100"
    }
  ];

  const handleDownload = (link: string, title: string) => {
    if (link === "#") {
      alert("Enlace no disponible aún. Por favor, contacta conmigo para obtener el documento.");
      return;
    }
    
    // Abrir en nueva pestaña
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen bg-custom-dark relative">
      <Particles
        className="absolute inset-0 z-10"
        quantity={100}
        staticity={30}
        color="#ffffff"
        size={0.4}
      />
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl lg:text-9xl font-new-title font-bold text-custom-light-2 mb-6">
            <HyperText
              fontClassName="font-new-title"
              animateOnHover={false}
            >
              Descargas
            </HyperText>
          </h1>
          <p className="text-lg sm:text-xl text-custom-light/80 font-pt-mono max-w-2xl mx-auto">
            Aquí puedes descargar mi CV y carta de recomendación para conocer mejor mi perfil profesional
          </p>
        </div>
      </div>

      {/* Downloads Grid */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {downloads.map((item, index) => (
            <div
              key={index}
              className="group relative bg-custom-dark-2/50 backdrop-blur-sm border border-custom-light/10 rounded-2xl p-8 hover:border-custom-light/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-custom-light/10 rounded-lg">
                  <item.icon className="w-5 h-5 text-custom-light" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-new-title font-bold text-custom-light-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-custom-light/70 font-pt-mono text-sm mb-6">
                    {item.description}
                  </p>
                  <button
                    onClick={() => handleDownload(item.link, item.title)}
                    className={`inline-flex cursor-pointer items-center px-6 py-3 rounded-lg bg-gradient-to-r ${item.color} text-custom-dark font-pt-mono text-sm font-medium hover:opacity-90 transition-all duration-200 group-hover:shadow-lg`}
                  >
                    <svg 
                      className="w-4 h-4 mr-2 text-custom-dark" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                      />
                    </svg>
                    Descargar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-custom-light/20 text-custom-light hover:text-custom-light-2 hover:border-custom-light/40 transition-all duration-200 font-pt-mono text-sm"
          >
            <svg 
              className="w-4 h-4 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
} 