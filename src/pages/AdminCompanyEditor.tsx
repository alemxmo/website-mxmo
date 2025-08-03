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
      console.error('Erro ao carregar empresas:', error);
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

  const handleCompanySelect = (companyName: string) => {
    setSelectedCompany(companyName);
    loadCompanyData(companyName);
  };

  const saveCompanyJSON = async (companyName: string, data: CompanyData) => {
    try {
      const jsonString = JSON.stringify(data, null, 2);
      
      // Tentar sobrescrever o arquivo JSON diretamente na pasta company-data
      const response = await fetch(`/company-data/${companyName}.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonString,
      });
      
      if (!response.ok) {
        throw new Error(`Erro ao salvar arquivo: ${response.statusText}`);
      }
      
      return true;
    } catch (error) {
      console.error('Erro ao salvar JSON:', error);
      throw error;
    }
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
      const companyName = selectedCompany || companyData.empresa;
      
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

  const handleSave = async () => {
    if (!companyData) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Nenhum dado para salvar."
      });
      return;
    }
    
    setSaving(true);
    try {
      const companyName = selectedCompany || companyData.empresa;
      
      if (!companyName) {
        throw new Error('Nome da empresa não definido');
      }

      // Salvar o JSON
      await saveCompanyJSON(companyName, companyData);
      
      toast({
        title: "Sucesso!",
        description: `Dados da empresa ${companyName} foram atualizados automaticamente.`,
        duration: 5000
      });
    } catch (error) {
      console.error('Erro ao salvar:', error);
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
      setCompanies(prev => [...prev, companyName]);
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
            
            {companyData && (
              <div className="flex gap-2 pt-4 border-t">
                <Button 
                  onClick={selectedCompany ? handleSave : handleAddNewCompany} 
                  disabled={saving}
                  className="min-w-[150px]"
                >
                  {saving ? 'Salvando...' : selectedCompany ? 'Salvar Alterações' : 'Criar Nova Empresa'}
                </Button>
                
                {selectedCompany && (
                  <Button 
                    onClick={handleDownload} 
                    disabled={saving}
                    variant="outline"
                  >
                    Baixar JSON
                  </Button>
                )}
                
                <div className="text-sm text-muted-foreground flex items-center ml-4">
                  {selectedCompany ? 
                    'Salvar: atualiza automaticamente | Baixar: faz download do JSON' :
                    'Uma nova empresa será criada com arquivos para download'
                  }
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {(companyData && !loading) && (
          <Card>
            <CardHeader>
              <CardTitle>
                {selectedCompany ? `Editando: ${companyData.empresa}` : 'Criando Nova Empresa'}
              </CardTitle>
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