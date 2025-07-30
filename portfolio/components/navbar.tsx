"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { HyperText } from "@/components/magicui/hyper-text";
import { AvailabilityIndicator } from "@/components/ui/availability-indicator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Habilidades", href: "/#about" },
        { name: "Proyectos", href: "/#projects" },
        { name: "Contacto", href: "/contact" },
    ];

    const scrollToSection = (href: string) => {
      if (href.startsWith('/#')) {
        // Es un enlace interno con hash, hacer scroll
        const element = document.querySelector(href.substring(1));
        if (element) {
          const navbarHeight = 64; // Altura de la navbar (h-16 = 64px)
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
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
                        <Link href="/">
                            <HyperText
                                as="span"
                                className="text-3xl font-new-title font-bold text-custom-light-2"
                                fontClassName="font-new-title"
                                animateOnHover={false}
                            >
                                YERAY BOIX TORNER
                            </HyperText>
                        </Link>
                    </div>

                    {/* Desktop Navigation - Right side */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    if (item.href.startsWith('/#')) {
                                        e.preventDefault();
                                        scrollToSection(item.href);
                                    }
                                }}
                                className="text-custom-light hover:text-custom-light-2 transition-colors duration-200 font-pt-mono text-sm cursor-pointer"
                            >
                                <HyperText
                                    fontClassName="font-pt-mono"
                                    animateOnHover={false}
                                >
                                    {item.name}
                                </HyperText>
                            </Link>
                        ))}
                        <AvailabilityIndicator variant="badge" text="Disponible" />
                    </div>

                              {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet>
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
                  <SheetTitle className="text-custom-light font-new-title text-4xl">
                    YERAY BOIX TORNER
                  </SheetTitle>
                </SheetHeader>
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                          if (item.href.startsWith('/#')) {
                              e.preventDefault();
                              scrollToSection(item.href);
                          }
                      }}
                      className="block w-full text-left px-6 py-4 text-custom-light hover:text-custom-light-2 hover:bg-custom-light/10 transition-all duration-200 font-pt-mono text-base rounded-lg border border-transparent hover:border-custom-light/20"
                    >
                      {item.name}
                    </Link>
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
