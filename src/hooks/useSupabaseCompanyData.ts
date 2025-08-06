import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { CompanyData } from './useCompanyData';

export const useSupabaseCompanyData = (companyId: string) => {
  const [data, setData] = useState<CompanyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!companyId) {
      setLoading(false);
      return;
    }

    const fetchCompanyData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch company basic info
        const { data: company, error: companyError } = await supabase
          .from('companies')
          .select('*')
          .eq('id', companyId)
          .single();

        if (companyError) throw companyError;

        // Fetch project overview
        const { data: projectOverview, error: overviewError } = await supabase
          .from('project_overview')
          .select('*')
          .eq('company_id', companyId)
          .single();

        if (overviewError) throw overviewError;

        // Fetch KPIs
        const { data: kpis, error: kpisError } = await supabase
          .from('company_kpis')
          .select('*')
          .eq('company_id', companyId)
          .order('created_at', { ascending: true });

        if (kpisError) throw kpisError;

        // Fetch timeline
        const { data: timeline, error: timelineError } = await supabase
          .from('company_timeline')
          .select('*')
          .eq('company_id', companyId)
          .order('created_at', { ascending: true });

        if (timelineError) throw timelineError;

        // Fetch phase progress
        const { data: phaseProgress, error: phaseError } = await supabase
          .from('project_phases')
          .select('*')
          .eq('company_id', companyId)
          .order('created_at', { ascending: true });

        if (phaseError) throw phaseError;

        // Fetch insights
        const { data: insights, error: insightsError } = await supabase
          .from('company_insights')
          .select('*')
          .eq('company_id', companyId)
          .order('created_at', { ascending: true });

        if (insightsError) throw insightsError;

        // Fetch next steps
        const { data: nextSteps, error: stepsError } = await supabase
          .from('next_steps')
          .select('*')
          .eq('company_id', companyId)
          .order('created_at', { ascending: true });

        if (stepsError) throw stepsError;

        // Fetch documents
        const { data: documents, error: documentsError } = await supabase
          .from('company_documents')
          .select('*')
          .eq('company_id', companyId)
          .order('created_at', { ascending: true });

        if (documentsError) throw documentsError;

        // Transform data to match CompanyData interface
        const companyData: CompanyData = {
          empresa: company.name,
          projectOverview: {
            currentPhase: projectOverview.current_phase,
            progress: projectOverview.progress,
            nextMilestone: projectOverview.next_milestone,
            daysRemaining: projectOverview.days_remaining,
          },
          kpis: kpis.map(kpi => ({
            title: kpi.title,
            value: kpi.value,
            target: kpi.target,
            progress: kpi.progress,
            description: kpi.description || '',
          })),
          timeline: timeline.map(t => ({
            month: t.month,
            fase1: t.fase1,
            fase2: t.fase2,
            fase3: t.fase3,
          })),
          phaseProgress: phaseProgress.map(phase => ({
            phase: phase.phase,
            phaseName: phase.phase_name,
            completed: phase.completed,
            remaining: phase.remaining,
          })),
          insights: insights.map(insight => ({
            type: insight.type as 'action' | 'alert' | 'insight',
            title: insight.title,
            content: insight.content,
          })),
          nextSteps: nextSteps.map(step => ({
            title: step.title,
            date: step.date,
            description: step.description,
          })),
          documents: documents.map(doc => ({
            name: doc.name,
            available: doc.available,
            link: doc.link || undefined,
          })),
        };

        setData(companyData);
      } catch (err) {
        console.error('Error fetching company data:', err);
        setError(err instanceof Error ? err.message : 'Erro ao carregar dados da empresa');
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyData();
  }, [companyId]);

  return { data, loading, error };
};