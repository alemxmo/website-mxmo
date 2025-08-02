import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, TrendingUp } from "lucide-react";

interface ProjectOverviewProps {
  empresa: string;
}

const ProjectOverview = ({ empresa }: ProjectOverviewProps) => {
  // Mock data - em produção viria de API/planilha
  const projectData = {
    currentPhase: 2,
    progress: 65,
    nextMilestone: "Finalização da Arquitetura de Crescimento",
    daysRemaining: 12
  };

  const phases = [
    { number: 1, name: "Diagnóstico Profundo", status: "completed" },
    { number: 2, name: "Arquitetura de Crescimento", status: "current" },
    { number: 3, name: "Execução & Otimização", status: "pending" }
  ];

  return (
    <Card className="col-span-full bg-gradient-to-br from-blue-50 to-indigo-50 border-none shadow-2xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
          <TrendingUp className="h-6 w-6 text-blue-600" />
          Status do Projeto - {empresa}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-slate-700 mb-2">Fase Atual</h3>
            <p className="text-3xl font-bold text-blue-600">Fase {projectData.currentPhase}</p>
            <p className="text-slate-600 text-sm mt-1">Arquitetura de Crescimento</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-slate-700 mb-2">Progresso Geral</h3>
            <p className="text-3xl font-bold text-green-600">{projectData.progress}%</p>
            <Progress value={projectData.progress} className="mt-3" />
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-slate-700 mb-2">Próximo Marco</h3>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-yellow-500" />
              <span className="text-sm text-slate-600">{projectData.daysRemaining} dias</span>
            </div>
            <p className="text-sm text-slate-700 mt-2">{projectData.nextMilestone}</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-slate-700 mb-4">Timeline das Fases</h3>
          <div className="flex flex-col md:flex-row gap-4">
            {phases.map((phase) => (
              <div key={phase.number} className="flex-1 flex items-center gap-3 p-4 rounded-lg border-2 border-dashed border-slate-200">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  phase.status === 'completed' ? 'bg-green-500 text-white' :
                  phase.status === 'current' ? 'bg-blue-500 text-white' :
                  'bg-slate-300 text-slate-600'
                }`}>
                  {phase.status === 'completed' ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    phase.number
                  )}
                </div>
                <div>
                  <p className={`font-medium ${
                    phase.status === 'current' ? 'text-blue-600' : 'text-slate-700'
                  }`}>
                    Fase {phase.number}
                  </p>
                  <p className="text-xs text-slate-600">{phase.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectOverview;