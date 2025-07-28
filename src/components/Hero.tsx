import React from "react";
import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react";
import StrategicSessionForm from "./StrategicSessionForm";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      {/* Background Image with Ultra-Subtle Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: "url('/lovable-uploads/382fcdfc-3b56-4da6-b07c-693e4425487d.png')" }}
      />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Zap className="w-4 h-4" />
            DNA MXMO: Inteligência Estratégica, Execução Implacável
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in-left">
            Transformamos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Visão em Valor
            </span>
            {" "}Real
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-right">
            Não somos uma consultoria tradicional. Somos um <strong>ecossistema de aceleração</strong> para negócios que exigem mais do que o padrão. Fundimos inteligência estratégica, tecnologia de ponta e obsessão por resultados.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto animate-fade-in">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <Target className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Clareza Estratégica</h3>
              <p className="text-sm text-muted-foreground">Injeta clareza e velocidade na sua operação</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Impacto Mensurável</h3>
              <p className="text-sm text-muted-foreground">Resultados no faturamento e eficiência</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Escala Sustentável</h3>
              <p className="text-sm text-muted-foreground">Crescimento inteligente e duradouro</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <StrategicSessionForm 
              trigger={
                <button className="button-primary group flex items-center justify-center min-w-[200px]">
                  Agendar Sessão Estratégica
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              }
            />
            <a 
              href="#processo" 
              className="button-secondary min-w-[200px] text-center"
            >
              Conhecer Nossa Abordagem
            </a>
          </div>
          
          <div className="mt-12 text-center animate-fade-in">
            <p className="text-sm text-muted-foreground mb-4">
              <strong>20+ anos</strong> de expertise em crescimento de negócios
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;