import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface AdminLoginModalProps {
  children: React.ReactNode;
}

const AdminLoginModal: React.FC<AdminLoginModalProps> = ({ children }) => {
  const [empresa, setEmpresa] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!empresa.trim() || !senha.trim()) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/emp_lgn.txt');
      const text = await response.text();
      const lines = text.trim().split('\n');
      
      const credentials = lines.map(line => {
        const [company, password, path] = line.split(':');
        return { company, password, path };
      });

      const validCredential = credentials.find(
        cred => cred.company.toLowerCase() === empresa.toLowerCase() && 
                cred.password === senha
      );

      if (validCredential && validCredential.path === 'admin') {
        toast.success("Login realizado com sucesso!");
        setIsOpen(false);
        navigate('/admin/company-editor');
      } else {
        toast.error("Credenciais inválidas");
      }
    } catch (error) {
      console.error('Erro no login:', error);
      toast.error("Erro ao fazer login. Tente novamente.");
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
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Acesso Administrativo</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="empresa">Empresa</Label>
            <Input
              id="empresa"
              type="text"
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
              placeholder="Digite sua senha"
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

export default AdminLoginModal;