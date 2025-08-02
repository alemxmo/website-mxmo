import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Target, Cog } from "lucide-react";

const CompanyDNA = () => {
  const phases = [
    {
      number: 1,
      title: "Diagnóstico Profundo",
      description: "Mapeamento total do negócio e oportunidades",
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      number: 2,
      title: "Arquitetura de Crescimento",
      description: "Desenho do plano personalizado de expansão",
      icon: Zap,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      number: 3,
      title: "Execução & Otimização",
      description: "Implementação e melhoria contínua dos resultados",
      icon: Cog,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <Card className="col-span-full bg-gradient-to-r from-slate-900 to-slate-800 text-white border-none shadow-2xl">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
            Inteligência Estratégica. Execução Implacável.
          </h2>
          <p className="text-xl text-slate-300 mb-2">
            Não somos consultoria tradicional, somos um ecossistema de aceleração.
          </p>
          <p className="text-slate-400">
            Aqui você acompanha o seu crescimento em tempo real, guiado por dados, IA e uma arquitetura de escala sob medida.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase) => (
            <div key={phase.number} className="text-center">
              <div className={`${phase.bgColor} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                <phase.icon className={`h-8 w-8 ${phase.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Fase {phase.number}
              </h3>
              <h4 className="text-lg font-semibold mb-3 text-yellow-400">
                {phase.title}
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 pt-6 border-t border-slate-700">
          <p className="text-slate-400 italic">
            "Cada etapa, cada ação: transparência total e performance monitorada."
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyDNA;