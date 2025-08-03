import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, Plus } from 'lucide-react';
import type { CompanyData } from '@/hooks/useCompanyData';

interface CompanyTimelineProps {
  data: CompanyData;
  onChange: (data: CompanyData) => void;
}

export function CompanyTimeline({ data, onChange }: CompanyTimelineProps) {
  const addTimelineEntry = () => {
    const newEntry = {
      month: '',
      fase1: 0,
      fase2: 0,
      fase3: 0
    };
    
    onChange({
      ...data,
      timeline: [...data.timeline, newEntry]
    });
  };

  const updateTimelineEntry = (index: number, field: string, value: string | number) => {
    const updatedTimeline = data.timeline.map((entry, i) => 
      i === index ? { ...entry, [field]: value } : entry
    );
    
    onChange({
      ...data,
      timeline: updatedTimeline
    });
  };

  const removeTimelineEntry = (index: number) => {
    const updatedTimeline = data.timeline.filter((_, i) => i !== index);
    onChange({
      ...data,
      timeline: updatedTimeline
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Timeline do Projeto</h3>
        <Button onClick={addTimelineEntry} variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Período
        </Button>
      </div>

      <div className="space-y-4">
        {data.timeline.map((entry, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Período #{index + 1}
              </CardTitle>
              <Button 
                onClick={() => removeTimelineEntry(index)}
                variant="outline"
                size="sm"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor={`month-${index}`}>Mês</Label>
                <Input
                  id={`month-${index}`}
                  value={entry.month}
                  onChange={(e) => updateTimelineEntry(index, 'month', e.target.value)}
                  placeholder="Ex: Jan, Fev, Mar"
                />
              </div>

              <div>
                <Label htmlFor={`fase1-${index}`}>Fase 1 (%)</Label>
                <Input
                  id={`fase1-${index}`}
                  type="number"
                  min="0"
                  max="100"
                  value={entry.fase1}
                  onChange={(e) => updateTimelineEntry(index, 'fase1', parseInt(e.target.value) || 0)}
                  placeholder="0-100"
                />
              </div>

              <div>
                <Label htmlFor={`fase2-${index}`}>Fase 2 (%)</Label>
                <Input
                  id={`fase2-${index}`}
                  type="number"
                  min="0"
                  max="100"
                  value={entry.fase2}
                  onChange={(e) => updateTimelineEntry(index, 'fase2', parseInt(e.target.value) || 0)}
                  placeholder="0-100"
                />
              </div>

              <div>
                <Label htmlFor={`fase3-${index}`}>Fase 3 (%)</Label>
                <Input
                  id={`fase3-${index}`}
                  type="number"
                  min="0"
                  max="100"
                  value={entry.fase3}
                  onChange={(e) => updateTimelineEntry(index, 'fase3', parseInt(e.target.value) || 0)}
                  placeholder="0-100"
                />
              </div>
            </CardContent>
          </Card>
        ))}

        {data.timeline.length === 0 && (
          <Card>
            <CardContent className="flex items-center justify-center py-8">
              <div className="text-center text-muted-foreground">
                <p>Nenhum período adicionado ainda.</p>
                <p className="text-sm">Clique em "Adicionar Período" para começar.</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}