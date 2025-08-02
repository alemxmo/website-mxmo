import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const { empresa } = useParams<{ empresa: string }>();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-foreground text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/e0d7654f-584f-4726-95e1-e2f81e68a227.png" 
              alt="MXMO Logo"
              className="h-8 w-auto"
            />
            <h1 className="text-xl font-bold">Dashboard - {empresa}</h1>
          </div>
          <Button variant="outline" onClick={handleLogout} className="text-white border-white hover:bg-white hover:text-foreground">
            Sair
          </Button>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Bem-vindo, {empresa}!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Este é o dashboard exclusivo da sua empresa. Aqui você terá acesso aos dados e relatórios personalizados.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Relatórios</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Acesse relatórios detalhados e análises específicas para {empresa}.
              </p>
              <Button className="mt-4" disabled>
                Ver Relatórios
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Planilhas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Consulte e baixe planilhas exclusivas da sua empresa.
              </p>
              <Button className="mt-4" disabled>
                Acessar Planilhas
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Suporte</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Entre em contato com nossa equipe de suporte técnico.
              </p>
              <Button className="mt-4" disabled>
                Contatar Suporte
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Configurações</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Gerencie as configurações da conta da sua empresa.
              </p>
              <Button className="mt-4" disabled>
                Configurações
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Histórico</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Visualize o histórico de atividades e acessos.
              </p>
              <Button className="mt-4" disabled>
                Ver Histórico
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;