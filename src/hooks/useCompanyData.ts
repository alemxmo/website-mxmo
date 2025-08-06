import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface CompanyData {
  empresa: string;
  projectOverview: {
    currentPhase: string;
    progress: number;
    nextMilestone: string;
    daysRemaining: number;
  };
  kpis: Array<{
    title: string;
    value: string;
    target: string;
    progress: number;
    description: string;
  }>;
  timeline: Array<{
    month: string;
    fase1: number;
    fase2: number;
    fase3: number;
  }>;
  phaseProgress: Array<{
    phase: string;
    phaseName: string;
    completed: number;
    remaining: number;
  }>;
  insights: Array<{
    type: 'action' | 'alert' | 'insight';
    title: string;
    content: string;
  }>;
  nextSteps: Array<{
    title: string;
    date: string;
    description: string;
  }>;
  documents: Array<{
    name: string;
    available: boolean;
    link?: string;
  }>;
}

export const useCompanyData = (empresa: string) => {
  const [data, setData] = useState<CompanyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Try Supabase first, fallback to files
        try {
          // Find company by code or name
          const { data: company, error: companyError } = await supabase
            .from('companies')
            .select('id')
            .or(`code.eq.${empresa},name.ilike.%${empresa}%`)
            .single();

          if (company && !companyError) {
            // Use Supabase data
            const supabaseData = await fetchSupabaseData(company.id);
            setData(supabaseData);
            return;
          }
        } catch (supabaseError) {
          console.log('Supabase fallback to file system:', supabaseError);
        }

        // Fallback to file system
        const loginResponse = await fetch('/emp_lgn.txt');
        const loginText = await loginResponse.text();
        
        const lines = loginText.trim().split('\n');
        const companyLine = lines.find(line => line.startsWith(`${empresa}:`));
        
        if (!companyLine) {
          throw new Error(`Empresa ${empresa} não encontrada`);
        }
        
        const [, , jsonPath] = companyLine.split(':');
        const response = await fetch(jsonPath);
        
        if (!response.ok) {
          throw new Error(`Dados não encontrados para a empresa ${empresa}`);
        }
        
        const companyData: CompanyData = await response.json();
        setData(companyData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar dados');
        console.error('Erro ao carregar dados da empresa:', err);
      } finally {
        setLoading(false);
      }
    };

    if (empresa) {
      fetchCompanyData();
    }
  }, [empresa]);

  return { data, loading, error };
};

// Helper function to fetch data from Supabase
const fetchSupabaseData = async (companyId: string): Promise<CompanyData> => {
  // This function will be implemented using useSupabaseCompanyData logic
  // For now, we'll import the supabase client here
  const { supabase } = await import('@/integrations/supabase/client');
  
  // Fetch company basic info
  const { data: company } = await supabase
    .from('companies')
    .select('*')
    .eq('id', companyId)
    .single();

  // Fetch all related data
  const [projectOverview, kpis, timeline, phaseProgress, insights, nextSteps, documents] = await Promise.all([
    supabase.from('project_overview').select('*').eq('company_id', companyId).single(),
    supabase.from('company_kpis').select('*').eq('company_id', companyId),
    supabase.from('company_timeline').select('*').eq('company_id', companyId),
    supabase.from('project_phases').select('*').eq('company_id', companyId),
    supabase.from('company_insights').select('*').eq('company_id', companyId),
    supabase.from('next_steps').select('*').eq('company_id', companyId),
    supabase.from('company_documents').select('*').eq('company_id', companyId),
  ]);

  // Transform data to match CompanyData interface
  return {
    empresa: company?.name || '',
    projectOverview: {
      currentPhase: projectOverview.data?.current_phase || '',
      progress: projectOverview.data?.progress || 0,
      nextMilestone: projectOverview.data?.next_milestone || '',
      daysRemaining: projectOverview.data?.days_remaining || 0,
    },
    kpis: kpis.data?.map(kpi => ({
      title: kpi.title,
      value: kpi.value,
      target: kpi.target,
      progress: kpi.progress,
      description: kpi.description || '',
    })) || [],
    timeline: timeline.data?.map(t => ({
      month: t.month,
      fase1: t.fase1,
      fase2: t.fase2,
      fase3: t.fase3,
    })) || [],
    phaseProgress: phaseProgress.data?.map(phase => ({
      phase: phase.phase,
      phaseName: phase.phase_name,
      completed: phase.completed,
      remaining: phase.remaining,
    })) || [],
    insights: insights.data?.map(insight => ({
      type: insight.type as 'action' | 'alert' | 'insight',
      title: insight.title,
      content: insight.content,
    })) || [],
    nextSteps: nextSteps.data?.map(step => ({
      title: step.title,
      date: step.date,
      description: step.description,
    })) || [],
    documents: documents.data?.map(doc => ({
      name: doc.name,
      available: doc.available,
      link: doc.link || undefined,
    })) || [],
  };
};