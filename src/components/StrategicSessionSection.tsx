import React from "react";
import { Clock, Target, CheckCircle, TrendingUp, Users, Calendar } from "lucide-react";
import StrategicSessionForm from "./StrategicSessionForm";

const StrategicSessionSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 relative overflow-hidden" id="sessao-estrategica">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary/20">
            <Calendar className="w-4 h-4" />
            Vagas Limitadas
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Agende agora sua{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">Sessão Estratégica!</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            Aceleramos sua operação, seu faturamento e <strong>EXPANDIMOS</strong> sua empresa.
          </p>
          
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Inscreva-se para uma sessão estratégica e receba um plano de ação para expansão estratégica do seu negócio, caso seja selecionado.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white/50 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/70 transition-all duration-300 hover:scale-105 hover:border-primary/30 animate-on-scroll">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Diagnóstico Completo</h3>
            <p className="text-muted-foreground">
              Mapeamento preciso da sua operação para revelar gargalos ocultos, ineficiências e alavancas de crescimento imediato.
            </p>
          </div>

          <div className="group bg-white/50 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/70 transition-all duration-300 hover:scale-105 hover:border-primary/30 animate-on-scroll">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Plano de Ação Personalizado</h3>
            <p className="text-muted-foreground">
              Construção de uma estratégia prática, sob medida, com ações priorizadas para tracionar resultados no curto, médio e longo prazo.
            </p>
          </div>

          <div className="group bg-white/50 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/70 transition-all duration-300 hover:scale-105 hover:border-primary/30 animate-on-scroll">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Próximos Passos com Direcionamento Claro</h3>
            <p className="text-muted-foreground">
              Definição de um roteiro estruturado, com foco em execução, metas e monitoramento para garantir evolução contínua.
            </p>
          </div>
        </div>

        {/* Session Details */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-md border border-primary/20 rounded-2xl p-8 lg:p-12 text-center mb-12 animate-on-scroll">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">100% Gratuito</h4>
              <p className="text-sm text-muted-foreground">Sem compromisso ou custos</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">1 hora de duração</h4>
              <p className="text-sm text-muted-foreground">Tempo otimizado para máximo resultado</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Online</h4>
              <p className="text-sm text-muted-foreground">Participe de qualquer lugar</p>
            </div>
          </div>
          
          <div className="mb-8">
            <StrategicSessionForm 
              triggerClassName="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold py-4 px-8 rounded-xl shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 text-lg"
              triggerText="SOLICITAR SESSÃO GRATUITA"
            />
          </div>
          
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-primary/20">
            <Users className="w-4 h-4" />
            Apenas 10 empresas serão selecionadas
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicSessionSection;