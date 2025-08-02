import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ProjectOverview from "@/components/dashboard/ProjectOverview";
import KPICards from "@/components/dashboard/KPICards";
import ProgressChart from "@/components/dashboard/ProgressChart";
import AIInsights from "@/components/dashboard/AIInsights";
import NextSteps from "@/components/dashboard/NextSteps";
import CompanyDNA from "@/components/dashboard/CompanyDNA";

const Dashboard = () => {
  const { empresa } = useParams<{ empresa: string }>();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  if (!empresa) {
    return <div>Empresa não encontrada</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DashboardHeader empresa={empresa} onLogout={handleLogout} />
      
      <main className="container mx-auto p-6 space-y-8">
        {/* Visão Geral do Projeto */}
        <div className="grid gap-6">
          <ProjectOverview empresa={empresa} />
        </div>

        {/* KPIs Estratégicos */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <KPICards />
        </div>

        {/* Gráficos de Progresso */}
        <div className="grid gap-6">
          <ProgressChart />
        </div>

        {/* Alertas & Recomendações AI */}
        <div className="grid gap-6">
          <AIInsights />
        </div>

        {/* Próximos Passos e Documentos */}
        <div className="grid gap-6">
          <NextSteps />
        </div>

        {/* DNA MXMO */}
        <div className="grid gap-6">
          <CompanyDNA />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;