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
        <CardContent className="space-y-4">
          {phaseProgress.map((phase, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-700">{phase.phase}</span>
                <span className="text-sm text-slate-600">{phase.completed}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${phase.completed}%` }}
                ></div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressChart;