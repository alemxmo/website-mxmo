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

  // Timeline das fases - busca do JSON
  const phases = data.phaseProgress.map((phase, index) => ({
    name: phase.phaseName,
    progress: phase.completed,
    status: phase.completed === 100 ? "completed" : phase.completed > 0 ? "current" : "pending",
    icon: index === 0 ? CheckCircle2 : index === 1 ? Clock : Target
  }));

  const getPhaseStatus = (phase: any) => {
    return phase.status;
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-slate-800 flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              Fase Atual
            </h3>
            <p className="text-slate-600">{projectData.currentPhase}</p>
            <Progress value={projectData.progress} className="h-3" />
            <p className="text-sm text-slate-500">{projectData.progress}% concluído</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        <div className="space-y-4">
          <h3 className="font-semibold text-slate-800">Timeline do Projeto</h3>
          
          {/* Fases do projeto */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between relative pb-2 gap-6 sm:gap-4">
            {phases.map((phase, index) => {
              const status = getPhaseStatus(phase);
              const IconComponent = phase.icon;
              
              return (
                <div key={index} className="flex flex-col items-center z-10 w-full sm:w-auto max-w-[120px]">
                  <div 
                    className={`
                      w-12 h-12 rounded-full flex items-center justify-center border-2 bg-white shadow-sm
                      ${status === 'completed' ? 'border-green-500 text-green-600' : 
                        status === 'current' ? 'border-blue-500 text-blue-600' : 
                        'border-gray-300 text-gray-400'}
                    `}
                  >
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <span 
                    className={`
                      text-xs mt-2 font-medium text-center leading-tight px-1
                      ${status === 'completed' ? 'text-green-600' : 
                        status === 'current' ? 'text-blue-600' : 
                        'text-gray-400'}
                    `}
                  >
                    {phase.name}
                  </span>
                  <span className="text-xs text-slate-500 mt-1 font-semibold">
                    {phase.progress}%
                  </span>
                </div>
              );
            })}
            
            {/* Linha conectora - apenas no desktop */}
            <div className="hidden sm:block absolute top-6 left-6 right-6 h-0.5 bg-gray-200 -z-10"></div>
          </div>
          
          {/* Barra de progresso geral na parte inferior */}
          <div className="space-y-2 mt-6">
            <Progress value={projectData.progress} className="h-3" />
            <p className="text-center text-sm font-medium text-slate-600">{projectData.progress}% concluído</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectOverview;