"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HyperText } from "@/components/magicui/hyper-text";
import { AvailabilityIndicator } from "@/components/ui/availability-indicator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Set initial scroll state
    setIsScrolled(window.scrollY > 50);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Habilidades", href: "/#skills" },
    { name: "Proyectos", href: "/#projects" },
    { name: "Descargas", href: "/downloads" },
    { name: "Contacto", href: "/contact" },
  ];

  const handleNavigation = (href: string) => {
    setOpen(false);
    
    // Si el enlace contiene un hash (anchor) y estamos en la página principal
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      const currentPath = window.location.pathname;
      
      // Si ya estamos en la página correcta, hacer scroll suave
      if (currentPath === path || (path === '/' && currentPath === '/')) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
          return;
        }
      }
    }
    
    // Si es navegación a la home desde la home
    if (href === "/" && window.location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    // Para cualquier otra navegación, usar Next.js router
    router.push(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-md border-b border-border/50"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand - Left side */}
          <div className={`flex-shrink-0 transition-all duration-300 ${isScrolled
            ? "opacity-100 transform translate-x-0"
            : "opacity-0 transform -translate-x-4"
            }`}>
            <button 
              onClick={() => handleNavigation("/")}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-custom-light/20">
                <Image
                  src="/images/yeray_navbar.jpg"
                  alt="Yeray Boix Torner"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <HyperText
                as="span"
                className="text-3xl font-new-title font-bold text-custom-light-2"
                fontClassName="font-new-title"
                animateOnHover={false}
              >
                YERAY BOIX TORNER
              </HyperText>
            </button>
          </div>

          {/* Desktop Navigation - Right side */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-custom-light hover:text-custom-light-2 transition-colors duration-200 font-pt-mono text-sm cursor-pointer"
              >
                <HyperText
                  fontClassName="font-pt-mono"
                  animateOnHover={false}
                >
                  {item.name}
                </HyperText>
              </button>
            ))}
            <AvailabilityIndicator variant="badge" text="Disponible" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className="text-custom-light hover:text-custom-light-2 transition-colors duration-200">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-custom-dark/95 backdrop-blur-md border-l border-custom-light/20 p-6">
                <SheetHeader className="mb-8">
                  <SheetTitle className="text-custom-light font-new-title text-4xl flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-custom-light/20">
                      <Image
                        src="/images/yeray_navbar.jpg"
                        alt="Yeray Boix Torner"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span>YERAY BOIX TORNER</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item.href)}
                      className="block w-full text-left px-6 py-4 text-custom-light hover:text-custom-light-2 hover:bg-custom-light/10 transition-all duration-200 font-pt-mono text-base rounded-lg border border-transparent hover:border-custom-light/20"
                    >
                      {item.name}
                    </button>
                  ))}
                  <div className="px-6 py-4">
                    <AvailabilityIndicator variant="badge" text="Disponible" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
