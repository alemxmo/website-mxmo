import React from "react";
import { Clock, Building2, Rocket } from "lucide-react";

const ProcessSection = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-hidden" id="processo">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-secondary/15 to-primary/15 rounded-full blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-3"
        style={{ backgroundImage: "url('/lovable-uploads/daccbff7-9434-4629-96e6-6f2b3de88aa2.png')" }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">A Jornada de Aceleração</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Nosso processo é desenhado para gerar tração desde o primeiro dia.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-accent/50 to-secondary/50 transform md:-translate-x-1/2"></div>

          {/* Phase 1 */}
          <div className="relative mb-16 animate-on-scroll">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Fase 1</h3>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">
                    Diagnóstico Profundo & Raio-X da Oportunidade
                  </h4>
                  <p className="text-gray-400">
                    Mapeamos o DNA do seu negócio, identificamos os gargalos e as oportunidades latentes 
                    para definir um campo de jogo claro.
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full transform -translate-x-1/2 border-4 border-gray-900"></div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative mb-16 animate-on-scroll">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center mr-4">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Fase 2</h3>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">
                    Arquitetura da Máquina de Crescimento
                  </h4>
                  <p className="text-gray-400">
                    Desenhamos o blueprint da sua futura operação de marketing e vendas — 
                    uma solução completa e customizada para seus desafios e metas.
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-gradient-to-r from-accent to-secondary rounded-full transform -translate-x-1/2 border-4 border-gray-900"></div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative animate-on-scroll">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mr-4">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Fase 3</h3>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">
                    Execução Acelerada & Otimização Contínua
                  </h4>
                  <p className="text-gray-400">
                    Implementamos a solução e atuamos como seu parceiro de crescimento, monitorando os resultados, 
                    refinando a rota e garantindo a evolução contínua da sua performance.
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-gradient-to-r from-secondary to-primary rounded-full transform -translate-x-1/2 border-4 border-gray-900"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;