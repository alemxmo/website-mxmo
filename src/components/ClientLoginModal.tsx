import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface ClientLoginModalProps {
  triggerClassName?: string;
  triggerText?: string;
  trigger?: React.ReactNode;
}

const ClientLoginModal = ({ 
  triggerClassName = "button-primary", 
  triggerText = "Área do Cliente MXMO",
  trigger 
}: ClientLoginModalProps) => {
  const [empresa, setEmpresa] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!empresa || !senha) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    setIsLoading(true);
    
    try {
      // Find company access by username and password
      const { data: companyAccess, error } = await supabase
        .from('company_access')
        .select(`
          id,
          username,
          password_hash,
          company_id,
          companies (
            id,
            name,
            code
          )
        `)
        .eq('username', empresa.toUpperCase())
        .single();

      if (error || !companyAccess) {
        toast.error("Empresa não encontrada");
        return;
      }

      // For now, we'll compare passwords directly (in production, use proper hashing)
      if (companyAccess.password_hash !== senha) {
        toast.error("Senha incorreta");
        return;
      }

      // Update last login
      await supabase
        .from('company_access')
        .update({ last_login: new Date().toISOString() })
        .eq('id', companyAccess.id);

      // Log access
      await supabase
        .from('access_logs')
        .insert({
          user_id: companyAccess.id,
          user_type: 'company',
          action: 'login',
          details: { company_name: companyAccess.companies?.name }
        });

      toast.success("Login realizado com sucesso!");
      setIsOpen(false);
      navigate(`/dashboard/${companyAccess.companies?.code || companyAccess.company_id}`);
    } catch (error) {
      console.error('Login error:', error);
      toast.error("Erro ao realizar login");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <button className={triggerClassName}>
            {triggerText}
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="mx-4 w-[calc(100vw-2rem)] max-w-md sm:mx-auto sm:w-full">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Área do Cliente MXMO
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="empresa">Nome da Empresa</Label>
            <Input
              id="empresa"
              placeholder="Digite o nome da empresa"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="senha">Senha</Label>
            <Input
              id="senha"
              type="password"
              placeholder="Digite a senha numérica"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <Button 
            onClick={handleLogin} 
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ClientLoginModal;