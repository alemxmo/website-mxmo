import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ProjectOverview from "@/components/dashboard/ProjectOverview";
import KPICards from "@/components/dashboard/KPICards";
import ProgressChart from "@/components/dashboard/ProgressChart";
import AIInsights from "@/components/dashboard/AIInsights";
import NextSteps from "@/components/dashboard/NextSteps";
import CompanyDNA from "@/components/dashboard/CompanyDNA";
import { useCompanyData } from "@/hooks/useCompanyData";
import { supabase } from "@/integrations/supabase/client";

const Dashboard = () => {
  const { empresa } = useParams<{ empresa: string }>();
  const navigate = useNavigate();
  const { data, loading, error } = useCompanyData(empresa || '');

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (!empresa) {
    return <div>Empresa não encontrada</div>;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Carregando dados da empresa...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => navigate("/")} 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Voltar ao Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DashboardHeader empresa={empresa} onLogout={handleLogout} />
      
      <main className="container mx-auto px-4 py-6 space-y-6 sm:px-6 lg:px-8 lg:space-y-8">
        {/* Visão Geral do Projeto */}
        <div className="grid gap-6">
          <ProjectOverview empresa={empresa} data={data} />
        </div>

        {/* KPIs Estratégicos */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          <KPICards data={data} />
        </div>

        {/* Gráficos de Progresso */}
        <div className="grid gap-6">
          <ProgressChart data={data} />
        </div>

        {/* Alertas & Recomendações AI */}
        <div className="grid gap-6">
          <AIInsights data={data} />
        </div>

        {/* Próximos Passos e Documentos */}
        <div className="grid gap-6">
          <NextSteps data={data} />
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