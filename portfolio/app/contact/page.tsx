"use client"
import { Particles } from "@/components/magicui/particles";
import { HyperText } from "@/components/magicui/hyper-text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, MessageCircle, Phone, Copy, Check } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { useState } from "react";

const contactData = [
  {
    name: "Email",
    value: "yerayboix@gmail.com",
    icon: Mail,
    href: "mailto:yerayboix@gmail.com",
    description: "Envíame un email directamente"
  },
  {
    name: "LinkedIn",
    value: "yerayboix",
    icon: Linkedin,
    href: "https://linkedin.com/in/yerayboix",
    description: "Conecta conmigo profesionalmente"
  },
  {
    name: "Teléfono",
    value: "+34 666 854 603",
    icon: Phone,
    href: "tel:+34666854603",
    description: "Llámame directamente"
  },
  // {
  //   name: "GitHub",
  //   value: "yerayboix",
  //   icon: Github,
  //   href: "https://github.com/yerayboix",
  //   description: "Revisa mi código y proyectos"
  // }
];

const ContactCard = ({ contact }: { contact: typeof contactData[0] }) => {
  const IconComponent = contact.icon;
  const [copied, setCopied] = useState(false);
  
  const handleCopyEmail = async () => {
    if (contact.name === "Email") {
      try {
        await navigator.clipboard.writeText(contact.value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy email:', err);
      }
    }
  };
  
  return (
    <Card className="bg-custom-dark/50 backdrop-blur-sm border-custom-light/20 hover:border-custom-light/40 transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-custom-light/10 rounded-lg">
            <IconComponent className="w-5 h-5 text-custom-light" />
          </div>
          <CardTitle className="text-custom-light font-new-title text-3xl">
            {contact.name}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-custom-light-2 font-pt-mono text-sm mb-2">
              {contact.value}
            </p>
            <p className="text-custom-light/60 font-pt-mono text-xs">
              {contact.description}
            </p>
          </div>
          
          {contact.name === "Email" && (
            <button
              onClick={handleCopyEmail}
              className="ml-3 p-2 cursor-pointer rounded-lg bg-custom-light/10 hover:bg-custom-light/20 transition-all duration-200 group"
              title="Copiar email"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4 text-custom-light group-hover:text-custom-light-2" />
              )}
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const DesktopLayout = () => {
  return (
    <>
      <div className="hidden md:flex justify-start pt-8 pb-8 px-8 relative z-10">
        <div className="w-full max-w-6xl mx-auto">
          <HyperText 
            as="h1" 
            className="text-4xl md:text-6xl lg:text-9xl font-new-title font-bold text-custom-light text-center"
            fontClassName="font-new-title"
            animateOnHover={false}
          >
            Contacto
          </HyperText>
          <div className="text-center">
            <HyperText 
              as="p" 
              className="text-sm md:text-base lg:text-xl font-pt-mono text-custom-light/80 mt-4 max-w-6xl px-2 md:px-0"
              fontClassName="font-pt-mono"
              animateOnHover={false}
            >
              ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él. Estoy disponible para colaboraciones, consultoría y oportunidades laborales.
            </HyperText>
          </div>
        </div>
      </div>
      
      <div className="hidden md:flex flex-1 px-8 pb-8 relative z-10">
        <div className="w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {contactData.map((contact) => (
              <ContactCard key={contact.name} contact={contact} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <HyperText 
              as="p" 
              className="text-lg font-pt-mono text-custom-light/80 mb-6"
              fontClassName="font-pt-mono"
              animateOnHover={false}
            >
              ¿Prefieres hablar directamente? No dudes en contactarme por cualquiera de estos medios.
            </HyperText>
            <div className="flex items-center justify-center gap-4 mb-8">
              <MessageCircle className="w-5 h-5 text-custom-light/60" />
              <span className="text-custom-light/60 font-pt-mono text-sm">
                Respuesta garantizada en 24 horas
              </span>
            </div>
            
            {/* Back to Home Button */}
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
    </>
  );
};

const MobileLayout = () => {
  return (
    <>
      <div className="md:hidden flex justify-start pt-8 pb-8 px-8 relative z-10">
        <div className="w-full max-w-6xl mx-auto">
          <HyperText 
            as="h1" 
            className="text-6xl md:text-6xl lg:text-9xl font-new-title font-bold text-custom-light text-center"
            fontClassName="font-new-title"
            animateOnHover={false}
          >
            Contacto
          </HyperText>
          <div className="text-center">
            <HyperText 
              as="p" 
              className="text-sm md:text-base lg:text-xl font-pt-mono text-custom-light/80 mt-4 max-w-6xl px-2 md:px-0"
              fontClassName="font-pt-mono"
              animateOnHover={false}
            >
              ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él.
            </HyperText>
          </div>
        </div>
      </div>
      
      <div className="md:hidden flex-1 px-6 pb-8 relative z-10">
        <div className="space-y-6">
          {contactData.map((contact) => (
            <ContactCard key={contact.name} contact={contact} />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <HyperText 
            as="p" 
            className="text-base font-pt-mono text-custom-light/80 mb-4"
            fontClassName="font-pt-mono"
            animateOnHover={false}
          >
            ¿Prefieres hablar directamente?
          </HyperText>
          <div className="flex items-center justify-center gap-3 mb-6">
            <MessageCircle className="w-4 h-4 text-custom-light/60" />
            <span className="text-custom-light/60 font-pt-mono text-xs">
              Respuesta en 24 horas
            </span>
          </div>
          
          {/* Back to Home Button */}
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
    </>
  );
};

export default function ContactPage() {
  return (
    <section className="flex flex-col bg-custom-dark min-h-screen relative overflow-hidden pt-10">
      {/* Navbar */}
      <Navbar />
      
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