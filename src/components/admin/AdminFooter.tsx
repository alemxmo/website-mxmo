import React from "react";
import { Mail, MessageCircle, MapPin } from "lucide-react";

const AdminFooter = () => {
  return (
    <footer className="bg-foreground text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/c4f1c955-faa6-413d-bdd2-33d221cd6bd5.png" 
                alt="MXMO Logo"
                className="h-10 w-auto mb-4"
              />
              <p className="text-white/80 leading-relaxed">
                <strong>DNA MXMO:</strong> Inteligência Estratégica, Execução Implacável.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:contato@mxmo.com.br" className="text-white/80 hover:text-white transition-colors">
                  contato@mxmo.com.br
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-primary" />
                <a href="https://wa.me/5511941168878" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                  (11) 94116-8878
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-white/80">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Admin Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Painel Administrativo</h4>
            <p className="text-white/80 text-sm">
              Sistema de gestão e edição de dados das empresas clientes da MXMO.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>
              © {new Date().getFullYear()} MXMO Consultoria. Todos os direitos reservados.
            </p>
            <p>
              Painel Administrativo - Acesso Restrito
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;