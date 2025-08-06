import { supabase } from '@/integrations/supabase/client';
import type { CompanyData } from '@/hooks/useCompanyData';

interface MigrationResult {
  success: boolean;
  companyId?: string;
  error?: string;
}

export const migrateCompanyToSupabase = async (
  companyCode: string, 
  companyData: CompanyData,
  password: string = 'temp123'
): Promise<MigrationResult> => {
  try {
    // 1. Create company
    const { data: company, error: companyError } = await supabase
      .from('companies')
      .insert({
        name: companyData.empresa,
        code: companyCode,
        email: `${companyCode.toLowerCase()}@example.com`
      })
      .select()
      .single();

    if (companyError) {
      console.error('Error creating company:', companyError);
      return { success: false, error: companyError.message };
    }

    const companyId = company.id;

    // 2. Create company access
    const { error: accessError } = await supabase
      .from('company_access')
      .insert({
        company_id: companyId,
        username: companyCode,
        password_hash: password, // In production, this should be hashed
      });

    if (accessError) {
      console.error('Error creating access:', accessError);
      return { success: false, error: accessError.message };
    }

    // 3. Insert project overview
    const { error: overviewError } = await supabase
      .from('project_overview')
      .insert({
        company_id: companyId,
        current_phase: companyData.projectOverview.currentPhase,
        progress: companyData.projectOverview.progress,
        next_milestone: companyData.projectOverview.nextMilestone,
        days_remaining: companyData.projectOverview.daysRemaining,
      });

    if (overviewError) {
      console.error('Error creating project overview:', overviewError);
      return { success: false, error: overviewError.message };
    }

    // 4. Insert KPIs
    if (companyData.kpis.length > 0) {
      const { error: kpisError } = await supabase
        .from('company_kpis')
        .insert(
          companyData.kpis.map(kpi => ({
            company_id: companyId,
            title: kpi.title,
            value: kpi.value,
            target: kpi.target,
            progress: kpi.progress,
            description: kpi.description,
          }))
        );

      if (kpisError) {
        console.error('Error creating KPIs:', kpisError);
        return { success: false, error: kpisError.message };
      }
    }

    // 5. Insert timeline
    if (companyData.timeline.length > 0) {
      const { error: timelineError } = await supabase
        .from('company_timeline')
        .insert(
          companyData.timeline.map(t => ({
            company_id: companyId,
            month: t.month,
            fase1: t.fase1,
            fase2: t.fase2,
            fase3: t.fase3,
          }))
        );

      if (timelineError) {
        console.error('Error creating timeline:', timelineError);
        return { success: false, error: timelineError.message };
      }
    }

    // 6. Insert phase progress
    if (companyData.phaseProgress.length > 0) {
      const { error: phasesError } = await supabase
        .from('project_phases')
        .insert(
          companyData.phaseProgress.map(phase => ({
            company_id: companyId,
            phase: phase.phase,
            phase_name: phase.phaseName,
            completed: phase.completed,
            remaining: phase.remaining,
          }))
        );

      if (phasesError) {
        console.error('Error creating phases:', phasesError);
        return { success: false, error: phasesError.message };
      }
    }

    // 7. Insert insights
    if (companyData.insights.length > 0) {
      const { error: insightsError } = await supabase
        .from('company_insights')
        .insert(
          companyData.insights.map(insight => ({
            company_id: companyId,
            type: insight.type,
            title: insight.title,
            content: insight.content,
          }))
        );

      if (insightsError) {
        console.error('Error creating insights:', insightsError);
        return { success: false, error: insightsError.message };
      }
    }

    // 8. Insert next steps
    if (companyData.nextSteps.length > 0) {
      const { error: stepsError } = await supabase
        .from('next_steps')
        .insert(
          companyData.nextSteps.map(step => ({
            company_id: companyId,
            title: step.title,
            date: step.date,
            description: step.description,
          }))
        );

      if (stepsError) {
        console.error('Error creating next steps:', stepsError);
        return { success: false, error: stepsError.message };
      }
    }

    // 9. Insert documents
    if (companyData.documents.length > 0) {
      const { error: documentsError } = await supabase
        .from('company_documents')
        .insert(
          companyData.documents.map(doc => ({
            company_id: companyId,
            name: doc.name,
            available: doc.available,
            link: doc.link,
          }))
        );

      if (documentsError) {
        console.error('Error creating documents:', documentsError);
        return { success: false, error: documentsError.message };
      }
    }

    console.log(`Successfully migrated company ${companyCode} with ID ${companyId}`);
    return { success: true, companyId };

  } catch (error) {
    console.error('Migration error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

export const migrateAllCompaniesFromFiles = async (): Promise<void> => {
  try {
    // Read company list from emp_lgn.txt
    const response = await fetch('/emp_lgn.txt');
    const text = await response.text();
    const lines = text.trim().split('\n');
    
    for (const line of lines) {
      const [companyCode, password, jsonPath] = line.split(':');
      
      if (!jsonPath || jsonPath === 'admin') {
        continue; // Skip admin entries
      }

      try {
        // Fetch company data from JSON
        const dataResponse = await fetch(jsonPath);
        const companyData: CompanyData = await dataResponse.json();
        
        // Migrate to Supabase
        const result = await migrateCompanyToSupabase(companyCode, companyData, password);
        
        if (result.success) {
          console.log(`✅ Migrated ${companyCode} successfully`);
        } else {
          console.error(`❌ Failed to migrate ${companyCode}: ${result.error}`);
        }
      } catch (error) {
        console.error(`❌ Error processing ${companyCode}:`, error);
      }
    }
    
    console.log('Migration completed!');
  } catch (error) {
    console.error('Migration failed:', error);
  }
};