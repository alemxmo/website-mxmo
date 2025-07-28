import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary">MXMO</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#processo" className="nav-link">Processo</a>
              <a href="#plataforma" className="nav-link">Plataforma</a>
              <a href="#problemas" className="nav-link">Problemas</a>
              <a href="#contato" className="nav-link">Contato</a>
            </div>
          </div>

          <div className="hidden md:block">
            <a href="#contato" className="button-primary">
              Sessão Estratégica
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary transition-colors"
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
                <a href="#contato" className="button-primary w-full text-center" onClick={toggleMenu}>
                  Sessão Estratégica
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;