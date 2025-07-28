import React from "react";
import { Clock, Building2, Rocket } from "lucide-react";

const ProcessSection = () => {
  return (
    <section className="py-16 sm:py-20" id="processo">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A Jornada de <span className="gradient-text">Aceleração</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nosso processo é desenhado para gerar tração desde o primeiro dia.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2"></div>

          {/* Phase 1 */}
          <div className="relative mb-16 animate-on-scroll">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <div className="glass-card p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Fase 1</h3>
                      <p className="text-primary font-semibold">2 semanas</p>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-4">
                    Diagnóstico Profundo & Raio-X da Oportunidade
                  </h4>
                  <p className="text-muted-foreground">
                    Mapeamos o DNA do seu negócio, identificamos os gargalos e as oportunidades latentes 
                    para definir um campo de jogo claro.
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative mb-16 animate-on-scroll">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0">
                <div className="glass-card p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <Building2 className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Fase 2</h3>
                      <p className="text-primary font-semibold">2 semanas</p>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-4">
                    Arquitetura da Máquina de Crescimento
                  </h4>
                  <p className="text-muted-foreground">
                    Desenhamos o blueprint da sua futura operação de marketing e vendas — 
                    uma solução completa e customizada para seus desafios e metas.
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative animate-on-scroll">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <div className="glass-card p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <Rocket className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Fase 3</h3>
                      <p className="text-primary font-semibold">10 meses</p>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-4">
                    Execução Acelerada & Otimização Contínua
                  </h4>
                  <p className="text-muted-foreground">
                    Implementamos a solução e atuamos como seu parceiro de crescimento, monitorando os resultados, 
                    refinando a rota e garantindo a evolução contínua da sua performance.
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;