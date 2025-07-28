import React from "react";
import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react";
import StrategicSessionForm from "./StrategicSessionForm";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="text-center max-w-6xl mx-auto">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border border-white/10 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in hover-scale">
            <Zap className="w-4 h-4 text-primary" />
            DNA MXMO: Inteligência Estratégica, Execução Implacável
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight animate-fade-in">
            <span className="text-white">Transformamos </span>
            <span className="block lg:inline">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-pulse">
                Visão em Valor
              </span>
            </span>
            <span className="text-white"> Real</span>
          </h1>
          
          {/* Enhanced Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in font-light">
            Não somos uma consultoria tradicional. Somos um <span className="text-primary font-semibold">ecossistema de aceleração</span> para negócios que exigem mais do que o padrão. 
            <span className="block mt-2 text-lg text-gray-400">
              Fundimos inteligência estratégica, tecnologia de ponta e obsessão por resultados.
            </span>
          </p>
          
          {/* Enhanced Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto animate-fade-in">
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-primary/30">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-white mb-3">Clareza Estratégica</h3>
              <p className="text-gray-400">Injeta clareza e velocidade na sua operação</p>
            </div>
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-primary/30">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-white mb-3">Impacto Mensurável</h3>
              <p className="text-gray-400">Resultados no faturamento e eficiência</p>
            </div>
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-primary/30">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-white mb-3">Escala Sustentável</h3>
              <p className="text-gray-400">Crescimento inteligente e duradouro</p>
            </div>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in mb-12">
            <StrategicSessionForm 
              trigger={
                <button className="group bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold py-4 px-8 rounded-xl shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center min-w-[280px] border border-white/20">
                  <span className="text-lg">Agendar Sessão Estratégica</span>
                  <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" />
                </button>
              }
            />
            <a 
              href="#processo" 
              className="group bg-white/10 backdrop-blur-md text-white font-semibold py-4 px-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 min-w-[280px] text-center text-lg"
            >
              Conhecer Nossa Abordagem
            </a>
          </div>
          
          {/* Social Proof */}
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl py-6 px-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">20+</div>
                <div className="text-sm text-gray-400">Anos de Expertise</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">700%</div>
                <div className="text-sm text-gray-400">Crescimento Médio</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">100+</div>
                <div className="text-sm text-gray-400">Projetos Executados</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;