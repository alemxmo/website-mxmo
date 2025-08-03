import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { CompanyData } from '@/hooks/useCompanyData';

interface CompanyBasicInfoProps {
  data: CompanyData;
  onChange: (data: CompanyData) => void;
}

export function CompanyBasicInfo({ data, onChange }: CompanyBasicInfoProps) {
  const updateProjectOverview = (field: string, value: string | number) => {
    onChange({
      ...data,
      projectOverview: {
        ...data.projectOverview,
        [field]: value
      }
    });
  };

  const updateCompanyName = (empresa: string) => {
    onChange({
      ...data,
      empresa
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Informações Básicas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="empresa">Nome da Empresa</Label>
            <Input
              id="empresa"
              value={data.empresa}
              onChange={(e) => updateCompanyName(e.target.value)}
              placeholder="Nome da empresa"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Visão Geral do Projeto</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="currentPhase">Fase Atual</Label>
            <Input
              id="currentPhase"
              value={data.projectOverview.currentPhase}
              onChange={(e) => updateProjectOverview('currentPhase', e.target.value)}
              placeholder="Ex: Fase 1 - Análise"
            />
          </div>

          <div>
            <Label htmlFor="progress">Progresso (%)</Label>
            <Input
              id="progress"
              type="number"
              min="0"
              max="100"
              value={data.projectOverview.progress}
              onChange={(e) => {
                const value = e.target.value;
                updateProjectOverview('progress', value === '' ? 0 : parseInt(value));
              }}
              placeholder="0-100"
            />
          </div>

          <div>
            <Label htmlFor="nextMilestone">Próximo Marco</Label>
            <Input
              id="nextMilestone"
              value={data.projectOverview.nextMilestone}
              onChange={(e) => updateProjectOverview('nextMilestone', e.target.value)}
              placeholder="Ex: Entrega do Diagnóstico"
            />
          </div>

          <div>
            <Label htmlFor="daysRemaining">Dias Restantes</Label>
            <Input
              id="daysRemaining"
              type="number"
              min="0"
              value={data.projectOverview.daysRemaining}
              onChange={(e) => {
                const value = e.target.value;
                updateProjectOverview('daysRemaining', value === '' ? 0 : parseInt(value));
              }}
              placeholder="Número de dias"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}