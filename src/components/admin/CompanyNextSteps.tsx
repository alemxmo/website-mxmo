import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, Plus } from 'lucide-react';
import type { CompanyData } from '@/hooks/useCompanyData';

interface CompanyNextStepsProps {
  data: CompanyData;
  onChange: (data: CompanyData) => void;
}

export function CompanyNextSteps({ data, onChange }: CompanyNextStepsProps) {
  const addStep = () => {
    const newStep = {
      title: '',
      date: '',
      description: ''
    };
    
    onChange({
      ...data,
      nextSteps: [...data.nextSteps, newStep]
    });
  };

  const updateStep = (index: number, field: string, value: string) => {
    const updatedSteps = data.nextSteps.map((step, i) => 
      i === index ? { ...step, [field]: value } : step
    );
    
    onChange({
      ...data,
      nextSteps: updatedSteps
    });
  };

  const removeStep = (index: number) => {
    const updatedSteps = data.nextSteps.filter((_, i) => i !== index);
    onChange({
      ...data,
      nextSteps: updatedSteps
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Próximos Passos</h3>
        <Button onClick={addStep} variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Passo
        </Button>
      </div>

      <div className="space-y-4">
        {data.nextSteps.map((step, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Passo #{index + 1}
              </CardTitle>
              <Button 
                onClick={() => removeStep(index)}
                variant="outline"
                size="sm"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`title-${index}`}>Título</Label>
                  <Input
                    id={`title-${index}`}
                    value={step.title}
                    onChange={(e) => updateStep(index, 'title', e.target.value)}
                    placeholder="Ex: Workshop Validação"
                  />
                </div>

                <div>
                  <Label htmlFor={`date-${index}`}>Data</Label>
                  <Input
                    id={`date-${index}`}
                    value={step.date}
                    onChange={(e) => updateStep(index, 'date', e.target.value)}
                    placeholder="Ex: 10 Fev"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor={`description-${index}`}>Descrição</Label>
                <Textarea
                  id={`description-${index}`}
                  value={step.description}
                  onChange={(e) => updateStep(index, 'description', e.target.value)}
                  placeholder="Descreva o que será feito neste passo"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        ))}

        {data.nextSteps.length === 0 && (
          <Card>
            <CardContent className="flex items-center justify-center py-8">
              <div className="text-center text-muted-foreground">
                <p>Nenhum próximo passo adicionado ainda.</p>
                <p className="text-sm">Clique em "Adicionar Passo" para começar.</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}