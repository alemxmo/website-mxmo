
import React from "react";
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer Content */}
      <div className="section-container py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/e0d7654f-584f-4726-95e1-e2f81e68a227.png" 
                alt="MXMO Logo"
                className="h-10 w-auto mb-4"
              />
              <p className="text-white/80 leading-relaxed max-w-md">
                <strong>DNA MXMO:</strong> Inteligência Estratégica, Execução Implacável.
              </p>
              <p className="text-white/80 leading-relaxed max-w-md mt-3">
                Transformamos visão em valor real através de um ecossistema de aceleração 
                para negócios que exigem mais do que o padrão.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:contato@mxmo.com.br" className="text-white/80 hover:text-white transition-colors">
                  contato@mxmo.com.br
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+5511999999999" className="text-white/80 hover:text-white transition-colors">
                  (11) 99999-9999
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-white/80">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a href="#diagnostico" className="text-white/80 hover:text-white transition-colors">
                  Diagnóstico Profundo
                </a>
              </li>
              <li>
                <a href="#processo" className="text-white/80 hover:text-white transition-colors">
                  Arquitetura de Crescimento
                </a>
              </li>
              <li>
                <a href="#plataforma" className="text-white/80 hover:text-white transition-colors">
                  Plataforma MXMO
                </a>
              </li>
              <li>
                <a href="#formulario" className="text-white/80 hover:text-white transition-colors">
                  Sessão Estratégica
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Empresa</h4>
            <ul className="space-y-3">
              <li>
                <a href="#problemas" className="text-white/80 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#processo" className="text-white/80 hover:text-white transition-colors">
                  Nossa Abordagem
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white/80 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="/politica-privacidade" className="text-white/80 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & CTA */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="flex items-center gap-4">
              <span className="text-white/80">Siga-nos:</span>
              <div className="flex gap-3">
                <a 
                  href="https://linkedin.com/company/mxmo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com/mxmo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
              Voltar ao topo
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>
              © {new Date().getFullYear()} MXMO Consultoria. Todos os direitos reservados.
            </p>
            <p>
              <strong>20+ anos</strong> transformando negócios através de inteligência estratégica.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
