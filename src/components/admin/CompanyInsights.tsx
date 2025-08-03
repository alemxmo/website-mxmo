import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, Plus } from 'lucide-react';
import type { CompanyData } from '@/hooks/useCompanyData';

interface CompanyInsightsProps {
  data: CompanyData;
  onChange: (data: CompanyData) => void;
}

export function CompanyInsights({ data, onChange }: CompanyInsightsProps) {
  const addInsight = () => {
    const newInsight = {
      type: 'insight' as const,
      title: '',
      content: ''
    };
    
    onChange({
      ...data,
      insights: [...data.insights, newInsight]
    });
  };

  const updateInsight = (index: number, field: string, value: string) => {
    const updatedInsights = data.insights.map((insight, i) => 
      i === index ? { ...insight, [field]: value } : insight
    );
    
    onChange({
      ...data,
      insights: updatedInsights
    });
  };

  const removeInsight = (index: number) => {
    const updatedInsights = data.insights.filter((_, i) => i !== index);
    onChange({
      ...data,
      insights: updatedInsights
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Insights e Ações</h3>
        <Button onClick={addInsight} variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Insight
        </Button>
      </div>

      <div className="space-y-4">
        {data.insights.map((insight, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Insight #{index + 1}
              </CardTitle>
              <Button 
                onClick={() => removeInsight(index)}
                variant="outline"
                size="sm"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`type-${index}`}>Tipo</Label>
                  <Select 
                    value={insight.type} 
                    onValueChange={(value) => updateInsight(index, 'type', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="insight">Insight</SelectItem>
                      <SelectItem value="action">Ação</SelectItem>
                      <SelectItem value="alert">Alerta</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor={`title-${index}`}>Título</Label>
                  <Input
                    id={`title-${index}`}
                    value={insight.title}
                    onChange={(e) => updateInsight(index, 'title', e.target.value)}
                    placeholder="Título do insight"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor={`content-${index}`}>Conteúdo</Label>
                <Textarea
                  id={`content-${index}`}
                  value={insight.content}
                  onChange={(e) => updateInsight(index, 'content', e.target.value)}
                  placeholder="Descreva o insight, ação ou alerta"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        ))}

        {data.insights.length === 0 && (
          <Card>
            <CardContent className="flex items-center justify-center py-8">
              <div className="text-center text-muted-foreground">
                <p>Nenhum insight adicionado ainda.</p>
                <p className="text-sm">Clique em "Adicionar Insight" para começar.</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}