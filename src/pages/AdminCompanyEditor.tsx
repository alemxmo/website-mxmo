import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { CompanyBasicInfo } from '@/components/admin/CompanyBasicInfo';
import { CompanyKPIs } from '@/components/admin/CompanyKPIs';
import { CompanyTimeline } from '@/components/admin/CompanyTimeline';
import { CompanyPhases } from '@/components/admin/CompanyPhases';
import { CompanyInsights } from '@/components/admin/CompanyInsights';
import { CompanyNextSteps } from '@/components/admin/CompanyNextSteps';
import { CompanyDocuments } from '@/components/admin/CompanyDocuments';
import type { CompanyData } from '@/hooks/useCompanyData';

export default function AdminCompanyEditor() {
  const [companies, setCompanies] = useState<string[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<string>('');
  const [companyData, setCompanyData] = useState<CompanyData | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadCompanies();
  }, []);

  const loadCompanies = async () => {
    try {
      const response = await fetch('/emp_lgn.txt');
      const text = await response.text();
      const lines = text.trim().split('\n');
      const companyNames = lines.map(line => line.split(':')[0]);
      setCompanies(companyNames);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível carregar a lista de empresas."
      });
    }
  };

  const loadCompanyData = async (companyName: string) => {
    setLoading(true);
    try {
      const response = await fetch('/emp_lgn.txt');
      const text = await response.text();
      const lines = text.trim().split('\n');
      const companyLine = lines.find(line => line.startsWith(`${companyName}:`));
      
      if (!companyLine) {
        throw new Error(`Empresa ${companyName} não encontrada`);
      }
      
      const [, , jsonPath] = companyLine.split(':');
      const dataResponse = await fetch(jsonPath);
      const data = await dataResponse.json();
      setCompanyData(data);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível carregar os dados da empresa."
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCompanySelect = (companyName: string) => {
    setSelectedCompany(companyName);
    loadCompanyData(companyName);
  };

  const handleSave = async () => {
    if (!companyData || !selectedCompany) return;
    
    setSaving(true);
    try {
      // Simular salvamento - na implementação real seria uma API
      console.log('Salvando dados da empresa:', selectedCompany, companyData);
      
      // Simular delay de salvamento
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Sucesso!",
        description: "Dados da empresa atualizados com sucesso."
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível salvar os dados da empresa."
      });
    } finally {
      setSaving(false);
    }
  };

  const handleCreateNew = () => {
    const newCompanyData: CompanyData = {
      empresa: 'NOVA_EMPRESA',
      projectOverview: {
        currentPhase: 'Fase 1 - Análise',
        progress: 0,
        nextMilestone: 'Início do Projeto',
        daysRemaining: 30
      },
      kpis: [],
      timeline: [],
      phaseProgress: [
        { phase: 'Análise & Diagnóstico', phaseName: 'Diagnóstico', completed: 0, remaining: 100 },
        { phase: 'Implementação', phaseName: 'Plano de Expansão', completed: 0, remaining: 100 },
        { phase: 'Validação & Entrega', phaseName: 'Execução e Otimização', completed: 0, remaining: 100 }
      ],
      insights: [],
      nextSteps: [],
      documents: []
    };
    setCompanyData(newCompanyData);
    setSelectedCompany('');
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-center">
              MXMO - Editor Administrativo de Empresas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4 items-end">
              <div className="flex-1">
                <label className="text-sm font-medium">Selecionar Empresa</label>
                <Select value={selectedCompany} onValueChange={handleCompanySelect}>
                  <SelectTrigger>
                    <SelectValue placeholder="Escolha uma empresa para editar" />
                  </SelectTrigger>
                  <SelectContent>
                    {companies.map(company => (
                      <SelectItem key={company} value={company}>
                        {company}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleCreateNew} variant="outline">
                Criar Nova Empresa
              </Button>
            </div>
          </CardContent>
        </Card>

        {(companyData && !loading) && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>
                Editando: {companyData.empresa}
              </CardTitle>
              <Button 
                onClick={handleSave} 
                disabled={saving}
                className="min-w-[120px]"
              >
                {saving ? 'Salvando...' : 'Salvar Alterações'}
              </Button>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full grid-cols-7">
                  <TabsTrigger value="basic">Básico</TabsTrigger>
                  <TabsTrigger value="kpis">KPIs</TabsTrigger>
                  <TabsTrigger value="timeline">Timeline</TabsTrigger>
                  <TabsTrigger value="phases">Fases</TabsTrigger>
                  <TabsTrigger value="insights">Insights</TabsTrigger>
                  <TabsTrigger value="steps">Próximos Passos</TabsTrigger>
                  <TabsTrigger value="documents">Documentos</TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="space-y-4">
                  <CompanyBasicInfo 
                    data={companyData} 
                    onChange={setCompanyData} 
                  />
                </TabsContent>

                <TabsContent value="kpis" className="space-y-4">
                  <CompanyKPIs 
                    data={companyData} 
                    onChange={setCompanyData} 
                  />
                </TabsContent>

                <TabsContent value="timeline" className="space-y-4">
                  <CompanyTimeline 
                    data={companyData} 
                    onChange={setCompanyData} 
                  />
                </TabsContent>

                <TabsContent value="phases" className="space-y-4">
                  <CompanyPhases 
                    data={companyData} 
                    onChange={setCompanyData} 
                  />
                </TabsContent>

                <TabsContent value="insights" className="space-y-4">
                  <CompanyInsights 
                    data={companyData} 
                    onChange={setCompanyData} 
                  />
                </TabsContent>

                <TabsContent value="steps" className="space-y-4">
                  <CompanyNextSteps 
                    data={companyData} 
                    onChange={setCompanyData} 
                  />
                </TabsContent>

                <TabsContent value="documents" className="space-y-4">
                  <CompanyDocuments 
                    data={companyData} 
                    onChange={setCompanyData} 
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}

        {loading && (
          <Card>
            <CardContent className="flex items-center justify-center py-8">
              <div className="text-center space-y-2">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <p>Carregando dados da empresa...</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}