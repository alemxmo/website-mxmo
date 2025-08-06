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

  // Calcula o progresso total baseado nas fases
  const totalProgress = Math.round(
    data.phaseProgress.reduce((acc, phase) => acc + phase.completed, 0) / data.phaseProgress.length
  );

  const getPhaseStatus = (phase: any) => {
    return phase.status;
  };

  return (
    <Card className="border-none shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-lg font-bold text-slate-800 sm:text-xl">
          Projeto {empresa.toUpperCase()}
        </CardTitle>
        <p className="text-slate-600 text-sm">Visão geral do progresso e próximos marcos</p>
      </CardHeader>
      
      <CardContent className="p-4 space-y-4 sm:p-6 sm:space-y-6">
        {/* Status Atual - Mobile-first layout */}
        <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
          <div className="space-y-2">
            <h3 className="font-semibold text-slate-800 flex items-center gap-2 text-sm sm:text-base">
              <Clock className="h-4 w-4 text-blue-600 sm:h-5 sm:w-5" />
              Fase Atual
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">{projectData.currentPhase}</p>
            <Progress value={totalProgress} className="h-2 sm:h-3" />
            <p className="text-xs text-slate-500 sm:text-sm">{totalProgress}% concluído</p>
          </div>
          
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            <div className="bg-white rounded-lg p-3 border sm:p-4">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-4 w-4 text-green-600" />
                <span className="text-xs font-medium text-slate-600 sm:text-sm">Próximo Marco</span>
              </div>
              <p className="text-xs font-semibold text-slate-800 sm:text-sm">{projectData.nextMilestone}</p>
            </div>
            
            <div className="bg-white rounded-lg p-3 border sm:p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-orange-600" />
                <span className="text-xs font-medium text-slate-600 sm:text-sm">Prazo</span>
              </div>
              <p className="text-xs font-semibold text-slate-800 sm:text-sm">{projectData.daysRemaining} dias</p>
            </div>
          </div>
        </div>

        {/* Timeline das Fases - Mobile-first */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="font-semibold text-slate-800 text-sm sm:text-base">Timeline do Projeto</h3>
          
          {/* Fases do projeto - Stack vertical no mobile, horizontal no desktop */}
          <div className="space-y-3 sm:flex sm:items-center sm:justify-between sm:space-y-0 sm:gap-4 relative">
            {phases.map((phase, index) => {
              const status = getPhaseStatus(phase);
              const IconComponent = phase.icon;
              
              return (
                <div key={index} className="flex items-center gap-3 sm:flex-col sm:items-center sm:gap-2 z-10">
                  <div 
                    className={`
                      w-10 h-10 rounded-full flex items-center justify-center border-2 bg-white shadow-sm flex-shrink-0 sm:w-12 sm:h-12
                      ${status === 'completed' ? 'border-green-500 text-green-600' : 
                        status === 'current' ? 'border-blue-500 text-blue-600' : 
                        'border-gray-300 text-gray-400'}
                    `}
                  >
                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex-1 sm:flex-none sm:text-center sm:max-w-[120px]">
                    <span 
                      className={`
                        text-sm font-medium sm:text-xs
                        ${status === 'completed' ? 'text-green-600' : 
                          status === 'current' ? 'text-blue-600' : 
                          'text-gray-400'}
                      `}
                    >
                      {phase.name}
                    </span>
                    <span className="block text-xs text-slate-500 font-semibold sm:mt-1">
                      {phase.progress}%
                    </span>
                  </div>
                </div>
              );
            })}
            
            {/* Linha conectora - apenas no desktop */}
            <div className="hidden sm:block absolute top-6 left-6 right-6 h-0.5 bg-gray-200 -z-10"></div>
          </div>
          
          {/* Barra de progresso geral */}
          <div className="space-y-2 pt-2 sm:pt-4">
            <Progress value={totalProgress} className="h-2 sm:h-3" />
            <p className="text-center text-xs font-medium text-slate-600 sm:text-sm">{totalProgress}% concluído</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectOverview;