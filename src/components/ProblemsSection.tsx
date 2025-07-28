import React from "react";
import { AlertTriangle, TrendingDown, Target, Users, DollarSign, Eye, Zap } from "lucide-react";
import StrategicSessionForm from "./StrategicSessionForm";

const ProblemsSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Negócios estagnados",
      description: "Que pararam de se desenvolver"
    },
    {
      icon: AlertTriangle,
      title: "Operações desestruturadas",
      description: "E ineficientes"
    },
    {
      icon: Target,
      title: "Planos de crescimento",
      description: "Não executados"
    },
    {
      icon: DollarSign,
      title: "Diminuição do market share",
      description: "Perda de competitividade"
    },
    {
      icon: TrendingDown,
      title: "Baixos resultados",
      description: "Operacionais e financeiros"
    },
    {
      icon: Eye,
      title: "Falta de visão",
      description: "E planejamento para expansão"
    },
    {
      icon: Zap,
      title: "Despreparo para crescer",
      description: "Exponencialmente"
    }
  ];

  return (
    <section className="py-16 sm:py-20" id="problemas">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            Especialistas em eliminar problemas de crescimento
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sua empresa sofre com{" "}
            <span className="gradient-text">problemas como estes?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Nossa expertise em expansão de negócios foi construída ao longo de <strong>20+ anos</strong>. 
            Hoje, com conhecimento técnico e especializado, multiplicamos a nossa capacidade de solucionar 
            problemas encontrados em negócios dos mais variados portes.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div 
                key={index}
                className="glass-card p-6 border-l-4 border-l-destructive/50 hover:border-l-destructive transition-all duration-300 animate-on-scroll"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{problem.title}</h3>
                    <p className="text-sm text-muted-foreground">{problem.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Card */}
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <div className="glass-card p-8 lg:p-12 text-center bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Aplique-se para uma Sessão Estratégica
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Obtenha uma avaliação completa e um plano de ação personalizado para o crescimento da sua empresa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <StrategicSessionForm 
                triggerClassName="button-primary text-lg px-8 py-4"
                triggerText="QUERO UMA SESSÃO GRATUITA"
              />
            </div>
            
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Users className="w-4 h-4" />
              Limitado a apenas 10 vagas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;