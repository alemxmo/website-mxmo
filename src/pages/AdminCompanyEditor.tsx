import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { CompanyBasicInfo } from '@/components/admin/CompanyBasicInfo';
import { CompanyKPIs } from '@/components/admin/CompanyKPIs';
import { CompanyTimeline } from '@/components/admin/CompanyTimeline';
import { CompanyPhases } from '@/components/admin/CompanyPhases';
import { CompanyInsights } from '@/components/admin/CompanyInsights';
import { CompanyNextSteps } from '@/components/admin/CompanyNextSteps';
import { CompanyDocuments } from '@/components/admin/CompanyDocuments';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminFooter from '@/components/admin/AdminFooter';
import type { CompanyData } from '@/hooks/useCompanyData';
import { fetchSupabaseCompanyData, saveCompanyDataToSupabase } from '@/utils/supabaseCompanyData';

interface Company {
  id: string;
  name: string;
  code: string;
  email: string;
}

export default function AdminCompanyEditor() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<string>('');
  const [companyData, setCompanyData] = useState<CompanyData | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  useEffect(() => {
    loadCompanies();
  }, []);

  const loadCompanies = async () => {
    try {
      // Try Supabase first, fallback to file system
      try {
        const { data: supabaseCompanies, error } = await supabase
          .from('companies')
          .select('id, name, code, email')
          .order('name');

        if (!error && supabaseCompanies) {
          setCompanies(supabaseCompanies);
          return;
        }
      } catch (supabaseError) {
        console.log('Fallback to file system for companies list');
      }

      // Fallback to file system
      const response = await fetch('/emp_lgn.txt');
      const text = await response.text();
      const lines = text.trim().split('\n');
      const companyNames = lines.map(line => line.split(':')[0]);
      const fileCompanies = companyNames.map(name => ({
        id: name,
        name,
        code: name,
        email: `${name}@example.com`
      }));
      setCompanies(fileCompanies);
    } catch (error) {
      console.error('Erro ao carregar empresas:', error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível carregar a lista de empresas."
      });
    }
  };

  const loadCompanyData = async (companyId: string) => {
    setLoading(true);
    try {
      // Try Supabase first
      try {
        const supabaseData = await fetchSupabaseCompanyData(companyId);
        setCompanyData(supabaseData);
        return;
      } catch (supabaseError) {
        console.log('Fallback to file system for company data');
      }

      // Fallback to file system
      const company = companies.find(c => c.id === companyId);
      if (!company) {
        throw new Error(`Empresa não encontrada`);
      }

      const response = await fetch('/emp_lgn.txt');
      const text = await response.text();
      const lines = text.trim().split('\n');
      const companyLine = lines.find(line => line.startsWith(`${company.name}:`));
      
      if (!companyLine) {
        throw new Error(`Empresa ${company.name} não encontrada`);
      }
      
      const [, , jsonPath] = companyLine.split(':');
      const dataResponse = await fetch(jsonPath);
      const data = await dataResponse.json();
      setCompanyData(data);
    } catch (error) {
      console.error('Erro ao carregar dados da empresa:', error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível carregar os dados da empresa."
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCompanySelect = (companyId: string) => {
    setSelectedCompany(companyId);
    loadCompanyData(companyId);
  };


  const downloadCompanyJSON = async (companyName: string, data: CompanyData) => {
    try {
      // Criar um link para download do arquivo JSON atualizado
      const jsonString = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonString], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      
      // Criar elemento de download invisível
      const link = document.createElement('a');
      link.href = url;
      link.download = `${companyName}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      return true;
    } catch (error) {
      console.error('Erro ao gerar JSON:', error);
      throw error;
    }
  };

  const handleSave = async () => {
    if (!companyData || !selectedCompany) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Nenhum dado para salvar."
      });
      return;
    }
    
    setSaving(true);
    try {
      // Try to save to Supabase first
      await saveCompanyDataToSupabase(selectedCompany, companyData);
      
      toast({
        title: "Sucesso!",
        description: "Dados salvos no banco de dados.",
        duration: 5000
      });
    } catch (error) {
      console.error('Erro ao salvar no Supabase, fazendo download do JSON:', error);
      
      // Fallback to download JSON
      try {
        const company = companies.find(c => c.id === selectedCompany);
        const companyName = company?.name || companyData.empresa;
        
        await downloadCompanyJSON(companyName, companyData);
        
        toast({
          title: "Dados baixados!",
          description: `Arquivo ${companyName}.json foi baixado (falha ao salvar no banco).`,
          duration: 5000
        });
      } catch (downloadError) {
        toast({
          variant: "destructive",
          title: "Erro",
          description: "Não foi possível salvar os dados."
        });
      }
    } finally {
      setSaving(false);
    }
  };

  const handleDownload = async () => {
    if (!companyData) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Nenhum dado para baixar."
      });
      return;
    }
    
    setSaving(true);
    try {
      const company = companies.find(c => c.id === selectedCompany);
      const companyName = company?.name || companyData.empresa;
      
      if (!companyName) {
        throw new Error('Nome da empresa não definido');
      }

      // Baixar o JSON
      await downloadCompanyJSON(companyName, companyData);
      
      toast({
        title: "Sucesso!",
        description: `Arquivo ${companyName}.json foi baixado com sucesso.`,
        duration: 5000
      });
    } catch (error) {
      console.error('Erro ao baixar:', error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível baixar o arquivo."
      });
    } finally {
      setSaving(false);
    }
  };


  const handleCreateNew = () => {
    const defaultKPIs = [
      {
        title: "Faturamento Impactado",
        value: "R$ 0",
        target: "R$ 0",
        progress: 0,
        description: "Meta vs. Realizado"
      },
      {
        title: "Oportunidades",
        value: "0",
        target: "0",
        progress: 0,
        description: "Identificadas e Capturadas"
      },
      {
        title: "Entregas Validadas",
        value: "0",
        target: "0",
        progress: 0,
        description: "Marcos Concluídos"
      },
      {
        title: "ROI Projetado",
        value: "0%",
        target: "0%",
        progress: 0,
        description: "Retorno sobre Investimento"
      }
    ];

    const newCompanyData: CompanyData = {
      empresa: 'NOVA_EMPRESA',
      projectOverview: {
        currentPhase: 'Fase 1 - Análise',
        progress: 0,
        nextMilestone: 'Início do Projeto',
        daysRemaining: 30
      },
      kpis: defaultKPIs,
      timeline: [
        { month: "Jan", fase1: 0, fase2: 0, fase3: 0 },
        { month: "Fev", fase1: 0, fase2: 0, fase3: 0 },
        { month: "Mar", fase1: 0, fase2: 0, fase3: 0 },
        { month: "Abr", fase1: 0, fase2: 0, fase3: 0 },
        { month: "Mai", fase1: 0, fase2: 0, fase3: 0 },
        { month: "Jun", fase1: 0, fase2: 0, fase3: 0 }
      ],
      phaseProgress: [
        { phase: 'Análise & Diagnóstico', phaseName: 'Diagnóstico', completed: 0, remaining: 100 },
        { phase: 'Implementação', phaseName: 'Plano de Expansão', completed: 0, remaining: 100 },
        { phase: 'Validação & Entrega', phaseName: 'Execução e Otimização', completed: 0, remaining: 100 }
      ],
      insights: [],
      nextSteps: [],
      documents: [
        { name: "Diagnóstico Preliminar", available: false },
        { name: "Análise de Processos", available: false },
        { name: "Plano de Implementação", available: false }
      ]
    };
    setCompanyData(newCompanyData);
    setSelectedCompany('');
  };

  const handleAddNewCompany = async () => {
    if (!companyData) return;
    
    const companyName = companyData.empresa;
    if (!companyName || companyName === 'NOVA_EMPRESA') {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Por favor, defina um nome válido para a empresa antes de salvar."
      });
      return;
    }

    try {
      setSaving(true);
      
      // Baixar o JSON da nova empresa (não tentar fazer PUT para arquivo inexistente)
      await downloadCompanyJSON(companyName, companyData);
      
      // Gerar o texto para adicionar ao emp_lgn.txt
      const loginEntry = `${companyName}:SENHA:/company-data/${companyName}.json`;
      
      // Criar um arquivo de texto com a entrada para emp_lgn.txt
      const loginBlob = new Blob([loginEntry], { type: 'text/plain' });
      const loginUrl = URL.createObjectURL(loginBlob);
      const loginLink = document.createElement('a');
      loginLink.href = loginUrl;
      loginLink.download = `emp_lgn_entry_${companyName}.txt`;
      document.body.appendChild(loginLink);
      loginLink.click();
      document.body.removeChild(loginLink);
      URL.revokeObjectURL(loginUrl);
      
      toast({
        title: "Nova empresa criada!",
        description: `Arquivos baixados: ${companyName}.json e linha para emp_lgn.txt. Adicione os arquivos ao servidor.`,
        duration: 15000
      });
      
      // Atualizar a lista de empresas
      const newCompany: Company = {
        id: companyName,
        name: companyName,
        code: companyName,
        email: `${companyName}@example.com`
      };
      setCompanies(prev => [...prev, newCompany]);
      setSelectedCompany(companyName);
      
    } catch (error) {
      console.error('Erro ao criar nova empresa:', error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível criar a nova empresa."
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <AdminHeader onLogout={handleLogout} />
      
      <main className="px-3 py-4 space-y-4 sm:px-4 sm:py-6 sm:space-y-6 lg:container lg:mx-auto lg:px-8">
        <Card>
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-xl text-center sm:text-2xl lg:text-3xl">
              Editor Administrativo de Empresas
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4 sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 sm:items-end">
              <div className="flex-1">
                <label className="text-sm font-medium">Selecionar Empresa</label>
                <Select value={selectedCompany} onValueChange={handleCompanySelect}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Escolha uma empresa para editar" />
                  </SelectTrigger>
                  <SelectContent>
                    {companies.map(company => (
                      <SelectItem key={company.id} value={company.id}>
                        {company.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleCreateNew} variant="outline" className="w-full sm:w-auto">
                Criar Nova Empresa
              </Button>
            </div>
            
            {companyData && (
              <div className="flex flex-col gap-3 pt-4 border-t sm:flex-row sm:gap-2">
                {selectedCompany ? (
                  <>
                    <Button 
                      onClick={handleSave} 
                      disabled={saving}
                      className="w-full sm:w-auto sm:min-w-[150px]"
                    >
                      {saving ? 'Salvando...' : 'Salvar no Banco'}
                    </Button>
                    <Button 
                      onClick={handleDownload} 
                      disabled={saving}
                      variant="outline"
                      className="w-full sm:w-auto sm:min-w-[150px]"
                    >
                      Baixar JSON
                    </Button>
                  </>
                ) : (
                  <Button 
                    onClick={handleAddNewCompany} 
                    disabled={saving}
                    className="w-full sm:w-auto sm:min-w-[150px]"
                  >
                    {saving ? 'Criando...' : 'Criar Nova Empresa'}
                  </Button>
                )}
                
                <div className="text-xs text-muted-foreground text-center sm:flex sm:items-center sm:ml-4 sm:text-sm">
                  {selectedCompany ? 
                    'Salvar: persiste no banco de dados' :
                    'Uma nova empresa será criada com arquivos para download'
                  }
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {(companyData && !loading) && (
          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl">
                {selectedCompany ? `Editando: ${companyData.empresa}` : 'Criando Nova Empresa'}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <Tabs defaultValue="basic" className="w-full">
                <div className="w-full overflow-x-auto">
                  <TabsList className="flex w-max min-w-full grid-cols-7 sm:grid sm:w-full">
                    <TabsTrigger value="basic" className="text-xs sm:text-sm">Básico</TabsTrigger>
                    <TabsTrigger value="kpis" className="text-xs sm:text-sm">KPIs</TabsTrigger>
                    <TabsTrigger value="timeline" className="text-xs sm:text-sm">Timeline</TabsTrigger>
                    <TabsTrigger value="phases" className="text-xs sm:text-sm">Fases</TabsTrigger>
                    <TabsTrigger value="insights" className="text-xs sm:text-sm">Insights</TabsTrigger>
                    <TabsTrigger value="steps" className="text-xs sm:text-sm">Próximos</TabsTrigger>
                    <TabsTrigger value="documents" className="text-xs sm:text-sm">Docs</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="basic" className="mt-4 space-y-4">
                  <CompanyBasicInfo 
                    data={companyData} 
                    onChange={setCompanyData} 
                  />
                </TabsContent>

                <TabsContent value="kpis" className="mt-4 space-y-4">
                  <CompanyKPIs 
                    data={companyData} 
                    onChange={setCompanyData} 
                  />
                </TabsContent>

                <TabsContent value="timeline" className="mt-4 space-y-4">
                  <CompanyTimeline 
                    data={companyData} 
                    onChange={setCompanyData} 
                  />
                </TabsContent>

                <TabsContent value="phases" className="mt-4 space-y-4">
                  <CompanyPhases 
                    data={companyData} 
                    onChange={setCompanyData} 
                  />
                </TabsContent>

                <TabsContent value="insights" className="mt-4 space-y-4">
                  <CompanyInsights 
                    data={companyData} 
                    onChange={setCompanyData} 
                  />
                </TabsContent>

                <TabsContent value="steps" className="mt-4 space-y-4">
                  <CompanyNextSteps 
                    data={companyData} 
                    onChange={setCompanyData} 
                  />
                </TabsContent>

                <TabsContent value="documents" className="mt-4 space-y-4">
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
            <CardContent className="flex items-center justify-center py-8 p-4 sm:p-6">
              <div className="text-center space-y-2">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mx-auto sm:h-8 sm:w-8"></div>
                <p className="text-sm sm:text-base">Carregando dados da empresa...</p>
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      <AdminFooter />
    </div>
  );
}