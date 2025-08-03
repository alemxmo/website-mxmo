import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, Plus } from 'lucide-react';
import type { CompanyData } from '@/hooks/useCompanyData';

interface CompanyDocumentsProps {
  data: CompanyData;
  onChange: (data: CompanyData) => void;
}

export function CompanyDocuments({ data, onChange }: CompanyDocumentsProps) {
  const addDocument = () => {
    const newDocument = {
      name: '',
      available: false,
      link: ''
    };
    
    onChange({
      ...data,
      documents: [...data.documents, newDocument]
    });
  };

  const updateDocument = (index: number, field: string, value: string | boolean) => {
    const updatedDocuments = data.documents.map((doc, i) => 
      i === index ? { ...doc, [field]: value } : doc
    );
    
    onChange({
      ...data,
      documents: updatedDocuments
    });
  };

  const removeDocument = (index: number) => {
    const updatedDocuments = data.documents.filter((_, i) => i !== index);
    onChange({
      ...data,
      documents: updatedDocuments
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Documentos do Projeto</h3>
        <Button onClick={addDocument} variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Documento
        </Button>
      </div>

      <div className="space-y-4">
        {data.documents.map((document, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Documento #{index + 1}
              </CardTitle>
              <Button 
                onClick={() => removeDocument(index)}
                variant="outline"
                size="sm"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor={`name-${index}`}>Nome do Documento</Label>
                <Input
                  id={`name-${index}`}
                  value={document.name}
                  onChange={(e) => updateDocument(index, 'name', e.target.value)}
                  placeholder="Ex: Diagnóstico Preliminar"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id={`available-${index}`}
                  checked={document.available}
                  onCheckedChange={(checked) => updateDocument(index, 'available', checked)}
                />
                <Label htmlFor={`available-${index}`}>Documento disponível</Label>
              </div>

              {document.available && (
                <div>
                  <Label htmlFor={`link-${index}`}>Link do Documento</Label>
                  <Input
                    id={`link-${index}`}
                    value={document.link || ''}
                    onChange={(e) => updateDocument(index, 'link', e.target.value)}
                    placeholder="https://docs.google.com/..."
                    type="url"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        ))}

        {data.documents.length === 0 && (
          <Card>
            <CardContent className="flex items-center justify-center py-8">
              <div className="text-center text-muted-foreground">
                <p>Nenhum documento adicionado ainda.</p>
                <p className="text-sm">Clique em "Adicionar Documento" para começar.</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}