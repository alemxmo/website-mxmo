import { useState, useEffect } from 'react';

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
        
        // Primeiro busca o arquivo de login para pegar o caminho do JSON
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