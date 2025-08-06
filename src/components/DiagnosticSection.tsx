import React from "react";
import { Search, Target, Lightbulb } from "lucide-react";

const DiagnosticSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 relative overflow-hidden" id="diagnostico">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-secondary/15 to-primary/15 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Nossa Abordagem: Arquitetura de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">Crescimento Sob Medida</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Desenhamos e implementamos uma estrutura de crescimento totalmente alinhada ao DNA da sua empresa. 
            Mergulhamos na sua realidade para construir soluções estratégicas, personalizadas e orientadas por resultado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-primary/30 animate-on-scroll">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Parceria Real</h3>
            <p className="text-gray-400">
              Estamos ao seu lado da primeira análise à otimização contínua, garantindo que a estratégia se traduza em ação.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-primary/30 animate-on-scroll">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Foco em Receita</h3>
            <p className="text-gray-400">
              Mergulhamos nos seus motores de marketing e vendas para destravar as alavancas de crescimento mais poderosas.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-primary/30 animate-on-scroll">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Inteligência Aplicada</h3>
            <p className="text-gray-400">
              Nossa metodologia não é sobre relatórios. É sobre criar um sistema de crescimento que aprende, se adapta e performa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;