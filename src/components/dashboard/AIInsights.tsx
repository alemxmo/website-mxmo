import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, AlertTriangle, Lightbulb, ArrowRight } from "lucide-react";

const AIInsights = () => {
  const insights = [
    {
      type: "action",
      icon: ArrowRight,
      title: "Próxima Ação Recomendada",
      content: "Acelerar implementação do funil de vendas digital. Potencial de +40% no faturamento.",
      priority: "high",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      type: "alert",
      icon: AlertTriangle,
      title: "Alerta de Gargalo",
      content: "Processo de onboarding apresenta 23% de abandono. Sugerimos otimização urgente.",
      priority: "medium",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      type: "insight",
      icon: Lightbulb,
      title: "Insight de Crescimento",
      content: "Oportunidade identificada: expansão para segmento B2B pode gerar +R$ 1.2M em 6 meses.",
      priority: "high",
      color: "text-green-600",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <Card className="col-span-full bg-gradient-to-br from-indigo-50 to-purple-50 border-none shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-slate-800">
          <Brain className="h-6 w-6 text-purple-600" />
          Alertas & Recomendações da MXMO AI
        </CardTitle>
        <p className="text-sm text-slate-600">
          Inteligência artificial aplicada ao seu crescimento
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className={`${insight.bgColor} rounded-xl p-6 border-l-4 border-l-current ${insight.color}`}>
            <div className="flex items-start gap-4">
              <insight.icon className={`h-5 w-5 ${insight.color} mt-1 flex-shrink-0`} />
              <div className="flex-1">
                <h4 className={`font-semibold ${insight.color} mb-2`}>{insight.title}</h4>
                <p className="text-slate-700 text-sm mb-3">{insight.content}</p>
                <Button size="sm" variant="outline" className="text-xs">
                  Ver Detalhes
                </Button>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default AIInsights;