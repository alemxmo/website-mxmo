import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Users, Clock } from "lucide-react";
import { CompanyData } from "@/hooks/useCompanyData";

interface NextStepsProps {
  data: CompanyData | null;
}

const NextSteps = ({ data }: NextStepsProps) => {
  const getStepIcon = (index: number) => {
    const icons = [Calendar, Users, FileText, Clock];
    return icons[index % icons.length];
  };

  if (!data) {
    return (
      <div className="col-span-full grid lg:grid-cols-2 gap-6">
        <Card className="shadow-lg animate-pulse">
          <CardHeader>
            <div className="h-6 bg-slate-200 rounded w-1/2"></div>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3].map((index) => (
              <div key={index} className="h-16 bg-slate-200 rounded"></div>
            ))}
          </CardContent>
        </Card>
        <Card className="shadow-lg animate-pulse">
          <CardHeader>
            <div className="h-6 bg-slate-200 rounded w-1/2"></div>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="h-12 bg-slate-200 rounded"></div>
            ))}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="col-span-full grid lg:grid-cols-2 gap-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <Clock className="h-5 w-5 text-blue-600" />
            Próximos Passos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.nextSteps.map((step, index) => {
            const IconComponent = getStepIcon(index);
            return (
              <div key={index} className="bg-slate-50 rounded-lg p-4 border-l-4 border-l-blue-500">
                <div className="flex items-start gap-3">
                  <IconComponent className="h-5 w-5 text-blue-600 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800">{step.title}</h4>
                    <p className="text-sm text-slate-600 mb-1">{step.description}</p>
                    <span className="text-xs text-blue-600 font-medium">{step.date}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <FileText className="h-5 w-5 text-green-600" />
            Documentos & Relatórios
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {data.documents.map((doc, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-700">{doc.name}</span>
              </div>
              {doc.available ? (
                <Button 
                  size="sm" 
                  variant="default"
                  className="text-xs"
                  onClick={() => window.open(doc.link, '_blank')}
                >
                  Acessar
                </Button>
              ) : (
                <Button 
                  size="sm" 
                  variant="outline"
                  disabled
                  className="text-xs"
                >
                  Em breve
                </Button>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default NextSteps;