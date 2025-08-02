import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { BarChart3 } from "lucide-react";

const ProgressChart = () => {
  // Mock data - em produção viria de API/planilha
  const timelineData = [
    { month: 'Jan', fase1: 100, fase2: 0, fase3: 0 },
    { month: 'Fev', fase1: 100, fase2: 20, fase3: 0 },
    { month: 'Mar', fase1: 100, fase2: 45, fase3: 0 },
    { month: 'Abr', fase1: 100, fase2: 75, fase3: 10 },
    { month: 'Mai', fase1: 100, fase2: 100, fase3: 25 },
    { month: 'Jun', fase1: 100, fase2: 100, fase3: 50 },
  ];

  const phaseProgress = [
    { phase: 'Diagnóstico', completed: 100, remaining: 0 },
    { phase: 'Arquitetura', completed: 75, remaining: 25 },
    { phase: 'Execução', completed: 25, remaining: 75 },
  ];

  return (
    <div className="col-span-full grid lg:grid-cols-2 gap-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <BarChart3 className="h-5 w-5 text-blue-600" />
            Evolução do Projeto
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={timelineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="fase1" 
                stroke="#10b981" 
                strokeWidth={3}
                name="Diagnóstico"
              />
              <Line 
                type="monotone" 
                dataKey="fase2" 
                stroke="#3b82f6" 
                strokeWidth={3}
                name="Arquitetura"
              />
              <Line 
                type="monotone" 
                dataKey="fase3" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                name="Execução"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-slate-800">Progresso por Fase</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={phaseProgress} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="phase" type="category" width={80} />
              <Tooltip />
              <Bar dataKey="completed" stackId="a" fill="#3b82f6" name="Concluído" />
              <Bar dataKey="remaining" stackId="a" fill="#e5e7eb" name="Pendente" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressChart;