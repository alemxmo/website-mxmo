import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

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
      // Fetch the login credentials file
      const response = await fetch('/emp_lgn.txt');
      const text = await response.text();
      
      // Parse the credentials
      const credentials = text.trim().split('\n').map(line => {
        const [comp, pass] = line.split(':');
        return { empresa: comp, senha: pass };
      });

      // Validate login
      const validCredential = credentials.find(
        cred => cred.empresa.toUpperCase() === empresa.toUpperCase() && cred.senha === senha
      );

      if (validCredential) {
        toast.success("Login realizado com sucesso!");
        setIsOpen(false);
        navigate(`/dashboard/${validCredential.empresa.toUpperCase()}`);
      } else {
        toast.error("Empresa ou senha incorretos");
      }
    } catch (error) {
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