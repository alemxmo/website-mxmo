import React from "react";
import { Search, Target, Lightbulb } from "lucide-react";

const DiagnosticSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-muted/30" id="diagnostico">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossa Abordagem: Arquitetura de{" "}
            <span className="gradient-text">Crescimento Sob Medida</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Esqueça o "pronto para usar". Nossa abordagem é uma imersão profunda na sua realidade. 
            Atuamos como arquitetos e executores, desenhando e implementando uma estrutura de crescimento 
            que se integra perfeitamente ao DNA da sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="glass-card p-8 text-center animate-on-scroll">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Parceria Real</h3>
            <p className="text-muted-foreground">
              Estamos ao seu lado da primeira análise à otimização contínua, garantindo que a estratégia se traduza em ação.
            </p>
          </div>

          <div className="glass-card p-8 text-center animate-on-scroll">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Foco em Receita</h3>
            <p className="text-muted-foreground">
              Mergulhamos nos seus motores de marketing e vendas para destravar as alavancas de crescimento mais poderosas.
            </p>
          </div>

          <div className="glass-card p-8 text-center animate-on-scroll">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Inteligência Aplicada</h3>
            <p className="text-muted-foreground">
              Nossa metodologia não é sobre relatórios. É sobre criar um sistema de crescimento que aprende, se adapta e performa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;