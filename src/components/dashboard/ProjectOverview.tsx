import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Clock, Target, TrendingUp } from "lucide-react";
import { CompanyData } from "@/hooks/useCompanyData";

interface ProjectOverviewProps {
  empresa: string;
  data: CompanyData | null;
}

const ProjectOverview = ({ empresa, data }: ProjectOverviewProps) => {
  if (!data) {
    return (
      <Card className="border-none shadow-lg animate-pulse">
        <CardHeader>
          <div className="h-6 bg-slate-200 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-slate-200 rounded w-1/2"></div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="h-4 bg-slate-200 rounded w-full"></div>
          <div className="h-2 bg-slate-200 rounded w-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-16 bg-slate-200 rounded"></div>
            <div className="h-16 bg-slate-200 rounded"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const projectData = data.projectOverview;

  // Timeline das fases
  const phases = [
    { name: "Diagnóstico", status: "completed", icon: CheckCircle2 },
    { name: "Implementação", status: "current", icon: Clock },
    { name: "Validação", status: "pending", icon: Target }
  ];

  const getPhaseStatus = (index: number, currentPhase: string) => {
    if (currentPhase.includes("Fase 1") || currentPhase.includes("Análise")) {
      return index === 0 ? "current" : "pending";
    } else if (currentPhase.includes("Fase 2") || currentPhase.includes("Implementação")) {
      return index === 0 ? "completed" : index === 1 ? "current" : "pending";
    } else if (currentPhase.includes("Fase 3") || currentPhase.includes("Validação")) {
      return index <= 1 ? "completed" : "current";
    }
    return "pending";
  };

  return (
    <Card className="border-none shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-slate-800">
          Projeto {empresa.toUpperCase()}
        </CardTitle>
        <p className="text-slate-600">Visão geral do progresso e próximos marcos</p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Status Atual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-slate-800 flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              Fase Atual
            </h3>
            <p className="text-slate-600">{projectData.currentPhase}</p>
            <Progress value={projectData.progress} className="h-3" />
            <p className="text-sm text-slate-500">{projectData.progress}% concluído</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-slate-600">Próximo Marco</span>
              </div>
              <p className="text-sm font-semibold text-slate-800">{projectData.nextMilestone}</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 border">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-medium text-slate-600">Prazo</span>
              </div>
              <p className="text-sm font-semibold text-slate-800">{projectData.daysRemaining} dias</p>
            </div>
          </div>
        </div>

        {/* Timeline das Fases */}
        <div className="space-y-3">
          <h3 className="font-semibold text-slate-800">Timeline do Projeto</h3>
          <div className="flex items-center justify-between relative">
            {phases.map((phase, index) => {
              const status = getPhaseStatus(index, projectData.currentPhase);
              const IconComponent = phase.icon;
              
              return (
                <div key={index} className="flex flex-col items-center z-10">
                  <div 
                    className={`
                      w-10 h-10 rounded-full flex items-center justify-center border-2 bg-white
                      ${status === 'completed' ? 'border-green-500 text-green-600' : 
                        status === 'current' ? 'border-blue-500 text-blue-600' : 
                        'border-gray-300 text-gray-400'}
                    `}
                  >
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <span 
                    className={`
                      text-xs mt-2 font-medium text-center
                      ${status === 'completed' ? 'text-green-600' : 
                        status === 'current' ? 'text-blue-600' : 
                        'text-gray-400'}
                    `}
                  >
                    {phase.name}
                  </span>
                </div>
              );
            })}
            
            {/* Linha conectora */}
            <div className="absolute top-5 left-5 right-5 h-0.5 bg-gray-200 -z-10"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectOverview;