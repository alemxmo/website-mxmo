import React from "react";
import { ArrowRight, Clock, CheckCircle, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/5 to-accent/5" id="contato">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA */}
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              Sessão Estratégica Gratuita
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Agende aqui a sua{" "}
              <span className="gradient-text">Sessão Estratégica!</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Nós vamos <strong>acelerar a sua operação</strong>, seu faturamento e <strong>EXPANDIR a sua empresa</strong>.
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Aplique-se para uma Sessão Estratégica de 1h e receba um plano de ação para expansão estratégica do seu negócio.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="glass-card p-6 text-center animate-on-scroll">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Diagnóstico Completo</h3>
              <p className="text-sm text-muted-foreground">
                Análise profunda da sua operação atual e identificação de oportunidades
              </p>
            </div>
            
            <div className="glass-card p-6 text-center animate-on-scroll">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Plano de Ação</h3>
              <p className="text-sm text-muted-foreground">
                Estratégia personalizada com passos concretos para acelerar seu crescimento
              </p>
            </div>
            
            <div className="glass-card p-6 text-center animate-on-scroll">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Próximos Passos</h3>
              <p className="text-sm text-muted-foreground">
                Roadmap claro para implementação e aceleração dos resultados
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center animate-on-scroll">
            <div className="bg-card/80 backdrop-blur-md border border-border rounded-2xl p-8 lg:p-12 shadow-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Reserve sua vaga agora
              </h3>
              
              <div className="space-y-4 mb-8">
                <a 
                  href="https://calendly.com/mxmo-consultoria" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary group flex items-center justify-center text-lg px-8 py-4 w-full"
                >
                  Agendar Sessão Estratégica
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
                
                <p className="text-sm text-muted-foreground">
                  ✅ 100% Gratuito • ✅ 1 hora de duração • ✅ Online
                </p>
              </div>
              
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <div className="flex items-center justify-center gap-2 text-primary font-semibold">
                  <Calendar className="w-4 h-4" />
                  Apenas 10 vagas disponíveis este mês
                </div>
              </div>
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="text-center mt-12 animate-on-scroll">
            <p className="text-muted-foreground mb-4">
              Prefere entrar em contato diretamente?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contato@mxmo.com.br" 
                className="button-secondary"
              >
                contato@mxmo.com.br
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;