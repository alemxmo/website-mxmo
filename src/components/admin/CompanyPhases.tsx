import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { CompanyData } from '@/hooks/useCompanyData';

interface CompanyPhasesProps {
  data: CompanyData;
  onChange: (data: CompanyData) => void;
}

export function CompanyPhases({ data, onChange }: CompanyPhasesProps) {
  const updatePhase = (index: number, field: string, value: string | number) => {
    const updatedPhases = data.phaseProgress.map((phase, i) => 
      i === index ? { ...phase, [field]: value } : phase
    );
    
    onChange({
      ...data,
      phaseProgress: updatedPhases
    });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Progresso das Fases</h3>

      <div className="space-y-4">
        {data.phaseProgress.map((phase, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                Fase {index + 1}
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <Label htmlFor={`phase-${index}`}>Nome da Fase</Label>
                <Input
                  id={`phase-${index}`}
                  value={phase.phase}
                  onChange={(e) => updatePhase(index, 'phase', e.target.value)}
                  placeholder="Ex: Análise & Diagnóstico"
                />
              </div>

              <div>
                <Label htmlFor={`phaseName-${index}`}>Nome Simplificado</Label>
                <Input
                  id={`phaseName-${index}`}
                  value={phase.phaseName}
                  onChange={(e) => updatePhase(index, 'phaseName', e.target.value)}
                  placeholder="Ex: Diagnóstico"
                />
              </div>

              <div>
                <Label htmlFor={`completed-${index}`}>Concluído (%)</Label>
                <Input
                  id={`completed-${index}`}
                  type="number"
                  min="0"
                  max="100"
                  value={phase.completed}
                  onChange={(e) => updatePhase(index, 'completed', parseInt(e.target.value) || 0)}
                  placeholder="0-100"
                />
              </div>

              <div>
                <Label htmlFor={`remaining-${index}`}>Restante (%)</Label>
                <Input
                  id={`remaining-${index}`}
                  type="number"
                  min="0"
                  max="100"
                  value={phase.remaining}
                  onChange={(e) => updatePhase(index, 'remaining', parseInt(e.target.value) || 0)}
                  placeholder="0-100"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}