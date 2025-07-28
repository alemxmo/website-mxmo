import React from "react";
import { Quote, Users, Target, Heart } from "lucide-react";

const FounderSection = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-gradient-to-br from-background to-muted/30" id="founder">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              Liderança Humana
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
              Conheça <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Alexandre Máximo</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Founder & CEO que transformou sua experiência em uma missão de impacto exponencial
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo Side */}
            <div className="order-2 lg:order-1 animate-on-scroll">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl transform rotate-1"></div>
                <div className="relative bg-white rounded-2xl p-2 shadow-elegant">
                  <img 
                    src="/lovable-uploads/896f3438-6ddc-4037-8e11-1f6a40d1b817.png" 
                    alt="Alexandre Máximo - Founder & CEO MXMO" 
                    className="w-full h-auto rounded-xl object-cover"
                  />
                </div>
                
                {/* Quote Card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg max-w-xs hidden sm:block">
                  <Quote className="w-6 h-6 text-primary mb-2" />
                  <p className="text-sm font-medium text-gray-900">
                    "Minha missão é impactar pessoas e empresas a prosperarem de forma exponencial."
                  </p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2 animate-on-scroll">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold mb-2">
                    Alexandre Máximo
                  </h3>
                  <p className="text-primary font-semibold text-lg mb-4">
                    Founder & CEO MXMO
                  </p>
                </div>

                <div className="prose prose-lg text-muted-foreground">
                  <p>
                    Há mais de <strong>20 anos transformando negócios</strong> através da tecnologia, 
                    vendas e estruturação estratégica. Alexandre decidiu multiplicar seu impacto, 
                    ajudando empresas a alcançarem seu potencial máximo.
                  </p>
                  
                  <p>
                    Especialista em expansão de negócios, ele combina experiência técnica com 
                    visão estratégica para conduzir projetos de <strong>inovação e transformação digital</strong> 
                    que geram resultados exponenciais.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 py-6 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">20+</div>
                    <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">100+</div>
                    <div className="text-sm text-muted-foreground">Projetos Executados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">700%</div>
                    <div className="text-sm text-muted-foreground">Crescimento entregue</div>
                  </div>
                </div>

                {/* Personal Touch */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Vida Pessoal</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Casado com Roane Máximo e pai dedicado de 4 filhos. Acredita que o sucesso 
                    nos negócios começa com valores sólidos e propósito claro.
                  </p>
                </div>

                {/* Mission */}
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Missão Atual</span>
                  </div>
                  <p className="text-sm">
                    Impactar e fazer prosperar empresas, pessoas e economia através de 
                    estratégias de crescimento exponencial e transformação digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;