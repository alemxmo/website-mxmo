import React from "react";
import { Brain, BarChart3, Users, Zap } from "lucide-react";

const PlatformSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 relative overflow-hidden" id="plataforma">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-secondary/15 to-primary/15 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Plataforma MXMO: A Inteligência por Trás do{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">Crescimento</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            No coração da nossa entrega está uma plataforma proprietária que transforma dados em decisão.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* MXMO Sales AI */}
          <div className="animate-on-scroll">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 lg:p-10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">MXMO Sales AI</h3>
                  <p className="text-primary font-semibold">Laboratório de Performance de Vendas</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6">
                Mais do que um CRM, é um laboratório de performance de vendas. Nossa IA analisa as interações 
                entre vendedores e clientes para decodificar padrões de sucesso e fracasso.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-sm text-gray-400">
                    Análise comportamental de vendedores em tempo real
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-sm text-gray-400">
                    Planos de desenvolvimento hiperpersonalizados
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-sm text-gray-400">
                    Transformação em força de vendas de elite
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MXMO Marketing AI */}
          <div className="animate-on-scroll">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 lg:p-10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center mr-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">MXMO Marketing AI</h3>
                  <p className="text-accent font-semibold">Copiloto Estratégico 24/7</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6">
                Conectada diretamente ao ecossistema da Meta e outras plataformas, nossa IA monitora campanhas 
                em tempo real. Ela não apenas aponta o que funciona, mas direciona ativamente a estratégia.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-sm text-gray-400">
                    Otimização automática de investimentos em tempo real
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-sm text-gray-400">
                    Sugestões de criativos de alto impacto
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-sm text-gray-400">
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
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-white mb-2">IA Proprietária</h4>
            <p className="text-sm text-gray-400">Algoritmos exclusivos da MXMO</p>
          </div>
          
          <div className="text-center animate-on-scroll">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-white mb-2">Tempo Real</h4>
            <p className="text-sm text-gray-400">Decisões baseadas em dados atualizados</p>
          </div>
          
          <div className="text-center animate-on-scroll">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-white mb-2">ROI Maximizado</h4>
            <p className="text-sm text-gray-400">Cada investimento otimizado</p>
          </div>
          
          <div className="text-center animate-on-scroll">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-white mb-2">Equipe Elite</h4>
            <p className="text-sm text-gray-400">Performance continuamente aprimorada</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;