import React from "react";
import { Brain, BarChart3, Users, Zap } from "lucide-react";

const PlatformSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-muted/30" id="plataforma">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Plataforma MXMO: A Inteligência por Trás do{" "}
            <span className="gradient-text">Crescimento</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            No coração da nossa entrega está uma plataforma proprietária que transforma dados em decisão.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* MXMO Sales AI */}
          <div className="animate-on-scroll">
            <div className="glass-card p-8 lg:p-10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">MXMO Sales AI</h3>
                  <p className="text-primary font-semibold">Laboratório de Performance de Vendas</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Mais do que um CRM, é um laboratório de performance de vendas. Nossa IA analisa as interações 
                entre vendedores e clientes para decodificar padrões de sucesso e fracasso.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Análise comportamental de vendedores em tempo real
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Planos de desenvolvimento hiperpersonalizados
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Transformação em força de vendas de elite
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MXMO Marketing AI */}
          <div className="animate-on-scroll">
            <div className="glass-card p-8 lg:p-10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">MXMO Marketing AI</h3>
                  <p className="text-primary font-semibold">Copiloto Estratégico 24/7</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Conectada diretamente ao ecossistema da Meta e outras plataformas, nossa IA monitora campanhas 
                em tempo real. Ela não apenas aponta o que funciona, mas direciona ativamente a estratégia.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Otimização automática de investimentos em tempo real
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Sugestões de criativos de alto impacto
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Máxima inteligência em cada real investido
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="text-center animate-on-scroll">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">IA Proprietária</h4>
            <p className="text-sm text-muted-foreground">Algoritmos exclusivos da MXMO</p>
          </div>
          
          <div className="text-center animate-on-scroll">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Tempo Real</h4>
            <p className="text-sm text-muted-foreground">Decisões baseadas em dados atualizados</p>
          </div>
          
          <div className="text-center animate-on-scroll">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">ROI Maximizado</h4>
            <p className="text-sm text-muted-foreground">Cada investimento otimizado</p>
          </div>
          
          <div className="text-center animate-on-scroll">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Equipe Elite</h4>
            <p className="text-sm text-muted-foreground">Performance continuamente aprimorada</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;