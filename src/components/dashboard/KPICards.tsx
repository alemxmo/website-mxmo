import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Target, CheckSquare, DollarSign } from "lucide-react";
import { CompanyData } from "@/hooks/useCompanyData";

interface KPICardsProps {
  data: CompanyData | null;
}

const KPICards = ({ data }: KPICardsProps) => {
  const getKPIIcon = (title: string) => {
    if (title.includes("Faturamento")) return DollarSign;
    if (title.includes("Oportunidades")) return Target;
    if (title.includes("Entregas")) return CheckSquare;
    if (title.includes("ROI")) return TrendingUp;
    return Target;
  };

  const getKPIColors = (title: string) => {
    if (title.includes("Faturamento")) return { color: "text-green-600", bgColor: "bg-green-50" };
    if (title.includes("Oportunidades")) return { color: "text-blue-600", bgColor: "bg-blue-50" };
    if (title.includes("Entregas")) return { color: "text-purple-600", bgColor: "bg-purple-50" };
    if (title.includes("ROI")) return { color: "text-yellow-600", bgColor: "bg-yellow-50" };
    return { color: "text-blue-600", bgColor: "bg-blue-50" };
  };

  if (!data) {
    return (
      <>
        {[1, 2, 3, 4].map((index) => (
          <Card key={index} className="bg-slate-50 border-none shadow-lg animate-pulse">
            <CardHeader className="pb-2 p-3 sm:pb-3 sm:p-4">
              <div className="h-3 bg-slate-200 rounded w-3/4 sm:h-4"></div>
            </CardHeader>
            <CardContent className="p-3 pt-0 space-y-2 sm:p-4 sm:pt-0 sm:space-y-3">
              <div className="h-6 bg-slate-200 rounded w-1/2 sm:h-8"></div>
              <div className="h-1.5 bg-slate-200 rounded w-full sm:h-2"></div>
              <div className="h-2 bg-slate-200 rounded w-2/3 sm:h-3"></div>
            </CardContent>
          </Card>
        ))}
      </>
    );
  }

  return (
    <>
      {data.kpis.map((kpi, index) => {
        const IconComponent = getKPIIcon(kpi.title);
        const colors = getKPIColors(kpi.title);
        
        return (
          <Card key={index} className={`${colors.bgColor} border-none shadow-lg hover:shadow-xl transition-all duration-300`}>
            <CardHeader className="pb-2 p-3 sm:pb-3 sm:p-4 lg:p-6">
              <CardTitle className="text-xs font-medium text-slate-600 flex items-center gap-2 sm:text-sm">
                <IconComponent className={`h-3 w-3 ${colors.color} sm:h-4 sm:w-4`} />
                <span className="truncate">{kpi.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-0 space-y-2 sm:p-4 sm:pt-0 sm:space-y-3 lg:p-6">
              <div className="flex items-end gap-1 sm:gap-2">
                <span className={`text-lg font-bold ${colors.color} sm:text-xl lg:text-2xl truncate`}>{kpi.value}</span>
                <span className="text-xs text-slate-500 sm:text-sm">/ {kpi.target}</span>
              </div>
              <Progress value={kpi.progress} className="h-1.5 sm:h-2" />
              <p className="text-xs text-slate-600 leading-tight sm:leading-normal">{kpi.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default KPICards;