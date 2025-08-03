import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, Plus } from 'lucide-react';
import type { CompanyData } from '@/hooks/useCompanyData';

interface CompanyKPIsProps {
  data: CompanyData;
  onChange: (data: CompanyData) => void;
}

export function CompanyKPIs({ data, onChange }: CompanyKPIsProps) {
  const addKPI = () => {
    const newKPI = {
      title: '',
      value: '',
      target: '',
      progress: 0,
      description: ''
    };
    
    onChange({
      ...data,
      kpis: [...data.kpis, newKPI]
    });
  };

  const updateKPI = (index: number, field: string, value: string | number) => {
    const updatedKPIs = data.kpis.map((kpi, i) => 
      i === index ? { ...kpi, [field]: value } : kpi
    );
    
    onChange({
      ...data,
      kpis: updatedKPIs
    });
  };

  const removeKPI = (index: number) => {
    const updatedKPIs = data.kpis.filter((_, i) => i !== index);
    onChange({
      ...data,
      kpis: updatedKPIs
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">KPIs da Empresa</h3>
        <Button onClick={addKPI} variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Adicionar KPI
        </Button>
      </div>

      <div className="space-y-4">
        {data.kpis.map((kpi, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                KPI #{index + 1}
              </CardTitle>
              <Button 
                onClick={() => removeKPI(index)}
                variant="outline"
                size="sm"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <Label htmlFor={`title-${index}`}>Título</Label>
                <Input
                  id={`title-${index}`}
                  value={kpi.title}
                  onChange={(e) => updateKPI(index, 'title', e.target.value)}
                  placeholder="Ex: Faturamento Impactado"
                />
              </div>

              <div>
                <Label htmlFor={`value-${index}`}>Valor Atual</Label>
                <Input
                  id={`value-${index}`}
                  value={kpi.value}
                  onChange={(e) => updateKPI(index, 'value', e.target.value)}
                  placeholder="Ex: R$ 1.2M"
                />
              </div>

              <div>
                <Label htmlFor={`target-${index}`}>Meta</Label>
                <Input
                  id={`target-${index}`}
                  value={kpi.target}
                  onChange={(e) => updateKPI(index, 'target', e.target.value)}
                  placeholder="Ex: R$ 3.5M"
                />
              </div>

              <div>
                <Label htmlFor={`progress-${index}`}>Progresso (%)</Label>
                <Input
                  id={`progress-${index}`}
                  type="number"
                  min="0"
                  max="100"
                  value={kpi.progress}
                  onChange={(e) => updateKPI(index, 'progress', parseInt(e.target.value) || 0)}
                  placeholder="0-100"
                />
              </div>

              <div className="md:col-span-2">
                <Label htmlFor={`description-${index}`}>Descrição</Label>
                <Input
                  id={`description-${index}`}
                  value={kpi.description}
                  onChange={(e) => updateKPI(index, 'description', e.target.value)}
                  placeholder="Ex: Meta vs. Realizado"
                />
              </div>
            </CardContent>
          </Card>
        ))}

        {data.kpis.length === 0 && (
          <Card>
            <CardContent className="flex items-center justify-center py-8">
              <div className="text-center text-muted-foreground">
                <p>Nenhum KPI adicionado ainda.</p>
                <p className="text-sm">Clique em "Adicionar KPI" para começar.</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}