import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Target, CheckSquare, DollarSign } from "lucide-react";

const KPICards = () => {
  // Mock data - em produção viria de API/planilha
  const kpis = [
    {
      title: "Faturamento Impactado",
      value: "R$ 2.8M",
      target: "R$ 4.2M",
      progress: 67,
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-50",
      description: "Meta vs. Realizado"
    },
    {
      title: "Oportunidades",
      value: "23",
      target: "35",
      progress: 66,
      icon: Target,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      description: "Identificadas e Capturadas"
    },
    {
      title: "Entregas Validadas",
      value: "12",
      target: "18",
      progress: 67,
      icon: CheckSquare,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      description: "Marcos Concluídos"
    },
    {
      title: "ROI Projetado",
      value: "340%",
      target: "500%",
      progress: 68,
      icon: TrendingUp,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      description: "Retorno sobre Investimento"
    }
  ];

  return (
    <>
      {kpis.map((kpi, index) => (
        <Card key={index} className={`${kpi.bgColor} border-none shadow-lg hover:shadow-xl transition-all duration-300`}>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600 flex items-center gap-2">
              <kpi.icon className={`h-4 w-4 ${kpi.color}`} />
              {kpi.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-end gap-2">
              <span className={`text-2xl font-bold ${kpi.color}`}>{kpi.value}</span>
              <span className="text-sm text-slate-500">/ {kpi.target}</span>
            </div>
            <Progress value={kpi.progress} className="h-2" />
            <p className="text-xs text-slate-600">{kpi.description}</p>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default KPICards;