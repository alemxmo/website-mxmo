import React from "react";
import { AlertTriangle, TrendingDown, Target, Users, DollarSign, Eye, Zap, TrendingUp } from "lucide-react";
import StrategicSessionForm from "./StrategicSessionForm";

const ProblemsSection = () => {
  const challenges = [
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
      title: "Falta de visão estratégica",
      description: "E planejamento para expansão"
    },
    {
      icon: Zap,
      title: "Despreparo para escalar",
      description: "Exponencialmente"
    },
    {
      icon: Users,
      title: "Retomada de desenvolvimento",
      description: "Após estagnação"
    },
    {
      icon: Target,
      title: "Aceleração de negócios",
      description: "Em crescimento"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden" id="solucoes">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary/20">
            <TrendingUp className="w-4 h-4" />
            Especialistas em acelerar crescimento empresarial
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para superar obstáculos e{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">acelerar os resultados</span> da sua empresa?
          </h2>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Apoiados em mais de <strong>20 anos</strong> de expertise em expansão, conhecimento técnico e especializado, 
            multiplicamos nossa capacidade de solucionar desafios em negócios de diversos portes.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {challenges.map((challenge, index) => {
            const IconComponent = challenge.icon;
            return (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 border-l-4 border-l-primary/50 hover:border-l-primary hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-on-scroll"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">{challenge.title}</h3>
                    <p className="text-sm text-gray-400">{challenge.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Card */}
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 lg:p-12 text-center bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Agende sua Sessão Estratégica Gratuita
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Receba uma análise completa do seu negócio e um plano de ação personalizado para acelerar o crescimento da sua empresa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <StrategicSessionForm 
                triggerClassName="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold py-4 px-8 rounded-xl shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 text-lg"
                triggerText="QUERO MINHA SESSÃO GRATUITA"
              />
            </div>
            
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-primary/20">
              <Users className="w-4 h-4" />
              Vagas limitadas: apenas 10 empresas serão selecionadas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;