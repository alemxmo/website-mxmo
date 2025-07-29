import React from "react";
import { ArrowRight, Clock, CheckCircle, Calendar } from "lucide-react";
import StrategicSessionForm from "./StrategicSessionForm";

const CTASection = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-hidden" id="contato">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-secondary/15 to-primary/15 rounded-full blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Background Image with Elegant Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-8"
        style={{ backgroundImage: "url('/lovable-uploads/a141d374-d296-487d-8c8f-8eccedde652c.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950/80 to-gray-900/60" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA */}
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border border-white/10 text-white px-6 py-3 rounded-full text-sm font-medium mb-8">
              <Calendar className="w-4 h-4 text-primary" />
              Sessão Estratégica Gratuita
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Agende aqui a sua{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-pulse">Sessão Estratégica!</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Nós vamos <strong className="text-primary">acelerar a sua operação</strong>, seu faturamento e <strong className="text-accent">EXPANDIR a sua empresa</strong>.
            </p>
            
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Aplique-se para uma Sessão Estratégica de 1h e receba um plano de ação para expansão estratégica do seu negócio.
            </p>
          </div>

          {/* Enhanced Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-primary/30 animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-white mb-3">Diagnóstico Completo</h3>
              <p className="text-gray-400">
                Análise profunda da sua operação atual e identificação de oportunidades
              </p>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-primary/30 animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-white mb-3">Plano de Ação</h3>
              <p className="text-gray-400">
                Estratégia personalizada com passos concretos para acelerar seu crescimento
              </p>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-primary/30 animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-white mb-3">Próximos Passos</h3>
              <p className="text-gray-400">
                Roadmap claro para implementação e aceleração dos resultados
              </p>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="text-center animate-on-scroll">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl max-w-2xl mx-auto hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">
                Reserve sua vaga agora
              </h3>
              
              <div className="space-y-4 mb-8">
                <StrategicSessionForm 
                  trigger={
                    <button className="group bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold py-4 px-8 rounded-xl shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-lg w-full">
                      <span>Agendar Sessão Estratégica</span>
                      <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </button>
                  }
                />
                
                <p className="text-sm text-gray-400">
                  ✅ 100% Gratuito • ✅ 1 hora de duração • ✅ Online
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-primary/30 to-accent/30 border-2 border-primary/50 rounded-xl p-4 backdrop-blur-sm animate-pulse hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="flex items-center justify-center gap-2 text-white font-bold">
                  <Calendar className="w-5 h-5 text-primary animate-bounce" />
                  <span className="text-lg">Apenas 10 vagas disponíveis este mês</span>
                  <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative Contact - REMOVED */}
        </div>
      </div>
    </section>
  );
};

export default CTASection;