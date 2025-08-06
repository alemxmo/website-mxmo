import { supabase } from '@/integrations/supabase/client';
import type { CompanyData } from '@/hooks/useCompanyData';

export const fetchSupabaseCompanyData = async (companyId: string): Promise<CompanyData> => {
  // Fetch company basic info
  const { data: company, error: companyError } = await supabase
    .from('companies')
    .select('*')
    .eq('id', companyId)
    .single();

  if (companyError) throw companyError;

  // Fetch all related data in parallel
  const [
    { data: projectOverview },
    { data: kpis },
    { data: timeline },
    { data: phaseProgress },
    { data: insights },
    { data: nextSteps },
    { data: documents }
  ] = await Promise.all([
    supabase.from('project_overview').select('*').eq('company_id', companyId).single(),
    supabase.from('company_kpis').select('*').eq('company_id', companyId).order('created_at'),
    supabase.from('company_timeline').select('*').eq('company_id', companyId).order('created_at'),
    supabase.from('project_phases').select('*').eq('company_id', companyId).order('created_at'),
    supabase.from('company_insights').select('*').eq('company_id', companyId).order('created_at'),
    supabase.from('next_steps').select('*').eq('company_id', companyId).order('created_at'),
    supabase.from('company_documents').select('*').eq('company_id', companyId).order('created_at')
  ]);

  // Transform data to match CompanyData interface
  return {
    empresa: company.name,
    projectOverview: {
      currentPhase: projectOverview?.current_phase || '',
      progress: projectOverview?.progress || 0,
      nextMilestone: projectOverview?.next_milestone || '',
      daysRemaining: projectOverview?.days_remaining || 0,
    },
    kpis: kpis?.map(kpi => ({
      title: kpi.title,
      value: kpi.value,
      target: kpi.target,
      progress: kpi.progress,
      description: kpi.description || '',
    })) || [],
    timeline: timeline?.map(t => ({
      month: t.month,
      fase1: t.fase1,
      fase2: t.fase2,
      fase3: t.fase3,
    })) || [],
    phaseProgress: phaseProgress?.map(phase => ({
      phase: phase.phase,
      phaseName: phase.phase_name,
      completed: phase.completed,
      remaining: phase.remaining,
    })) || [],
    insights: insights?.map(insight => ({
      type: insight.type as 'action' | 'alert' | 'insight',
      title: insight.title,
      content: insight.content,
    })) || [],
    nextSteps: nextSteps?.map(step => ({
      title: step.title,
      date: step.date,
      description: step.description,
    })) || [],
    documents: documents?.map(doc => ({
      name: doc.name,
      available: doc.available,
      link: doc.link || undefined,
    })) || [],
  };
};

export const saveCompanyDataToSupabase = async (companyId: string, data: CompanyData): Promise<void> => {
  // Update company basic info
  await supabase
    .from('companies')
    .update({ name: data.empresa })
    .eq('id', companyId);

  // Update project overview
  await supabase
    .from('project_overview')
    .upsert({
      company_id: companyId,
      current_phase: data.projectOverview.currentPhase,
      progress: data.projectOverview.progress,
      next_milestone: data.projectOverview.nextMilestone,
      days_remaining: data.projectOverview.daysRemaining,
    });

  // Delete existing data and insert new ones for arrays
  await Promise.all([
    supabase.from('company_kpis').delete().eq('company_id', companyId),
    supabase.from('company_timeline').delete().eq('company_id', companyId),
    supabase.from('project_phases').delete().eq('company_id', companyId),
    supabase.from('company_insights').delete().eq('company_id', companyId),
    supabase.from('next_steps').delete().eq('company_id', companyId),
    supabase.from('company_documents').delete().eq('company_id', companyId),
  ]);

  // Insert new data
  if (data.kpis.length > 0) {
    await supabase.from('company_kpis').insert(
      data.kpis.map(kpi => ({
        company_id: companyId,
        title: kpi.title,
        value: kpi.value,
        target: kpi.target,
        progress: kpi.progress,
        description: kpi.description,
      }))
    );
  }

  if (data.timeline.length > 0) {
    await supabase.from('company_timeline').insert(
      data.timeline.map(t => ({
        company_id: companyId,
        month: t.month,
        fase1: t.fase1,
        fase2: t.fase2,
        fase3: t.fase3,
      }))
    );
  }

  if (data.phaseProgress.length > 0) {
    await supabase.from('project_phases').insert(
      data.phaseProgress.map(phase => ({
        company_id: companyId,
        phase: phase.phase,
        phase_name: phase.phaseName,
        completed: phase.completed,
        remaining: phase.remaining,
      }))
    );
  }

  if (data.insights.length > 0) {
    await supabase.from('company_insights').insert(
      data.insights.map(insight => ({
        company_id: companyId,
        type: insight.type,
        title: insight.title,
        content: insight.content,
      }))
    );
  }

  if (data.nextSteps.length > 0) {
    await supabase.from('next_steps').insert(
      data.nextSteps.map(step => ({
        company_id: companyId,
        title: step.title,
        date: step.date,
        description: step.description,
      }))
    );
  }

  if (data.documents.length > 0) {
    await supabase.from('company_documents').insert(
      data.documents.map(doc => ({
        company_id: companyId,
        name: doc.name,
        available: doc.available,
        link: doc.link,
      }))
    );
  }
};