import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, AlertTriangle, Lightbulb, ArrowRight, Target } from "lucide-react";
import { CompanyData } from "@/hooks/useCompanyData";

interface AIInsightsProps {
  data: CompanyData | null;
}

const AIInsights = ({ data }: AIInsightsProps) => {
  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'action': return Target;
      case 'alert': return AlertTriangle;
      case 'insight': return Lightbulb;
      default: return Lightbulb;
    }
  };

  const getInsightColors = (type: string) => {
    switch (type) {
      case 'action': return {
        color: "text-blue-600",
        bgColor: "bg-blue-50"
      };
      case 'alert': return {
        color: "text-yellow-600",
        bgColor: "bg-yellow-50"
      };
      case 'insight': return {
        color: "text-green-600",
        bgColor: "bg-green-50"
      };
      default: return {
        color: "text-blue-600",
        bgColor: "bg-blue-50"
      };
    }
  };

  if (!data) {
    return (
      <Card className="col-span-full bg-gradient-to-br from-indigo-50 to-purple-50 border-none shadow-lg animate-pulse">
        <CardHeader>
          <div className="h-6 bg-slate-200 rounded w-1/2"></div>
          <div className="h-4 bg-slate-200 rounded w-1/3 mt-2"></div>
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2, 3].map((index) => (
            <div key={index} className="h-20 bg-slate-200 rounded"></div>
          ))}
        </CardContent>
      </Card>
    );
  }

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
        {data.insights.map((insight, index) => {
          const IconComponent = getInsightIcon(insight.type);
          const colors = getInsightColors(insight.type);
          
          return (
            <div key={index} className={`${colors.bgColor} rounded-xl p-6 border-l-4 border-l-current ${colors.color}`}>
              <div className="flex items-start gap-4">
                <IconComponent className={`h-5 w-5 ${colors.color} mt-1 flex-shrink-0`} />
                <div className="flex-1">
                  <h4 className={`font-semibold ${colors.color} mb-2`}>{insight.title}</h4>
                  <p className="text-slate-700 text-sm mb-3">{insight.content}</p>
                  <Button size="sm" variant="outline" className="text-xs">
                    Ver Detalhes
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default AIInsights;