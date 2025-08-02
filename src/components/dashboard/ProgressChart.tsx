import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { BarChart3 } from "lucide-react";
import { CompanyData } from "@/hooks/useCompanyData";

interface ProgressChartProps {
  data: CompanyData | null;
}

const ProgressChart = ({ data }: ProgressChartProps) => {
  if (!data) {
    return (
      <div className="col-span-full grid lg:grid-cols-2 gap-6">
        <Card className="shadow-lg animate-pulse">
          <CardHeader>
            <div className="h-6 bg-slate-200 rounded w-1/2"></div>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-slate-200 rounded"></div>
          </CardContent>
        </Card>
        <Card className="shadow-lg animate-pulse">
          <CardHeader>
            <div className="h-6 bg-slate-200 rounded w-1/2"></div>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-slate-200 rounded"></div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const timelineData = data.timeline;
  const phaseProgress = data.phaseProgress;

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
                name="Implementação"
              />
              <Line 
                type="monotone" 
                dataKey="fase3" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                name="Validação"
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
              <YAxis dataKey="phase" type="category" width={120} />
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