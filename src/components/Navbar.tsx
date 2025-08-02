import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ClientLoginModal from "./ClientLoginModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-foreground/95 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/e0d7654f-584f-4726-95e1-e2f81e68a227.png" 
              alt="MXMO Logo"
              className="h-8 w-auto"
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#processo" className="nav-link text-white/80 hover:text-white">Processo</a>
              <a href="#plataforma" className="nav-link text-white/80 hover:text-white">Plataforma</a>
              <a href="#problemas" className="nav-link text-white/80 hover:text-white">Problemas</a>
              <a href="#contato" className="nav-link text-white/80 hover:text-white">Contato</a>
            </div>
          </div>

          <div className="hidden md:block">
            <ClientLoginModal 
              triggerClassName="button-primary"
              triggerText="Área do Cliente MXMO"
            />
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md rounded-lg mt-2">
              <a href="#processo" className="mobile-nav-link" onClick={toggleMenu}>Processo</a>
              <a href="#plataforma" className="mobile-nav-link" onClick={toggleMenu}>Plataforma</a>
              <a href="#problemas" className="mobile-nav-link" onClick={toggleMenu}>Problemas</a>
              <a href="#contato" className="mobile-nav-link" onClick={toggleMenu}>Contato</a>
              <div className="pt-4">
                <ClientLoginModal 
                  trigger={
                    <button className="button-primary w-full text-center" onClick={toggleMenu}>
                      Área do Cliente MXMO
                    </button>
                  }
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;