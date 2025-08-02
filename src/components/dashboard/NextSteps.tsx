import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Users, Clock } from "lucide-react";

const NextSteps = () => {
  const upcomingTasks = [
    {
      title: "Reunião de Alinhamento",
      date: "15 Nov, 14:00",
      type: "meeting",
      icon: Users,
      description: "Revisão da Fase 2 e planejamento da Fase 3"
    },
    {
      title: "Relatório Mensal",
      date: "18 Nov",
      type: "document",
      icon: FileText,
      description: "Análise de performance e métricas"
    },
    {
      title: "Workshop de Implementação",
      date: "22 Nov, 09:00",
      type: "workshop",
      icon: Calendar,
      description: "Treinamento da equipe nas novas ferramentas"
    }
  ];

  const documents = [
    { name: "Relatório de Diagnóstico Completo", status: "available" },
    { name: "Plano de Arquitetura de Crescimento", status: "available" },
    { name: "Manual de Implementação", status: "pending" },
    { name: "Dashboard de Métricas", status: "available" }
  ];

  return (
    <div className="col-span-full grid lg:grid-cols-2 gap-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <Clock className="h-5 w-5 text-blue-600" />
            Próximos Passos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {upcomingTasks.map((task, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-4 border-l-4 border-l-blue-500">
              <div className="flex items-start gap-3">
                <task.icon className="h-5 w-5 text-blue-600 mt-1" />
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-800">{task.title}</h4>
                  <p className="text-sm text-slate-600 mb-1">{task.description}</p>
                  <span className="text-xs text-blue-600 font-medium">{task.date}</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <FileText className="h-5 w-5 text-green-600" />
            Documentos & Relatórios
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {documents.map((doc, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-700">{doc.name}</span>
              </div>
              <Button 
                size="sm" 
                variant={doc.status === "available" ? "default" : "outline"}
                disabled={doc.status === "pending"}
                className="text-xs"
              >
                {doc.status === "available" ? "Acessar" : "Em breve"}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default NextSteps;