"use client"
import { Mail, Linkedin, Github, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

const currentYear = new Date().getFullYear();

const footerData = [
  {
    name: "Email",
    value: "yerayboix@gmail.com",
    icon: Mail,
    href: "mailto:yerayboix@gmail.com",
  },
  {
    name: "LinkedIn",
    value: "yerayboix",
    icon: Linkedin,
    href: "https://linkedin.com/in/yerayboix",
  },
  {
    name: "Teléfono",
    value: "+34 666 854 603",
    icon: Phone,
    href: "tel:+34666854603",
  },
  // {
  //   name: "GitHub",
  //   value: "yerayboix",
  //   icon: Github,
  //   href: "https://github.com/yerayboix",
  // }
];

const FooterLink = ({ item }: { item: typeof footerData[0] }) => {
  const IconComponent = item.icon;
  
  return (
    <Link 
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-custom-light/60 hover:text-custom-light transition-colors duration-200"
    >
      <IconComponent className="w-4 h-4" />
      <span className="font-pt-mono text-sm">{item.name}</span>
    </Link>
  );
};

const DesktopFooter = () => {
  return (
    <footer className="hidden md:block bg-custom-dark/50 backdrop-blur-sm border-t border-custom-light/20 relative z-30">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            {footerData.map((item) => (
              <FooterLink key={item.name} item={item} />
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <MessageCircle className="w-4 h-4 text-custom-light/60" />
            <span className="text-custom-light/60 font-pt-mono text-sm">
              Respuesta muy rápida
            </span>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-custom-light/10">
          <div className="flex items-center justify-between">
            <p className="text-custom-light/40 font-pt-mono text-xs">
              © {currentYear} Yeray Boix. Todos los derechos reservados.
            </p>
            <Link 
              href="/contact"
              className="text-custom-light/60 hover:text-custom-light font-pt-mono text-sm transition-colors duration-200"
            >
              Contacto completo →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const MobileFooter = () => {
  return (
    <footer className="md:hidden bg-custom-dark/50 backdrop-blur-sm border-t border-custom-light/20 relative z-30">
      <div className="px-6 py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            {footerData.map((item) => (
              <FooterLink key={item.name} item={item} />
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <MessageCircle className="w-4 h-4 text-custom-light/60" />
            <span className="text-custom-light/60 font-pt-mono text-xs">
              Respuesta muy rápida
            </span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-custom-light/10">
          <div className="flex flex-col items-center gap-4">
            <p className="text-custom-light/40 font-pt-mono text-xs text-center">
              © {currentYear} Yeray Boix. Todos los derechos reservados.
            </p>
            <Link 
              href="/contact"
              className="text-custom-light/60 hover:text-custom-light font-pt-mono text-sm transition-colors duration-200"
            >
              Contacto completo →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Footer() {
  return (
    <>
      <DesktopFooter />
      <MobileFooter />
    </>
  );
} 