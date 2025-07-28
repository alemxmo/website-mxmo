import React from "react";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const EmailTest = () => {
  const testEmail = async () => {
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Substitua pelo seu Service ID do EmailJS
        'YOUR_TEMPLATE_ID', // Substitua pelo seu Template ID do EmailJS
        {
          to_email: 'alexandre@mxmo.com.br',
          from_name: 'Teste Sistema',
          from_email: 'teste@mxmo.com.br',
          message: 'Este é um email de teste para verificar se o sistema está funcionando.',
          subject: 'Teste de Email - Sistema MXMO'
        },
        'YOUR_PUBLIC_KEY' // Substitua pela sua Public Key do EmailJS
      );
      
      toast({
        title: "Sucesso!",
        description: "Email de teste enviado com sucesso!",
      });
    } catch (error) {
      console.error('Error sending test email:', error);
      toast({
        title: "Erro",
        description: "Erro ao enviar email de teste. Verifique as configurações do EmailJS.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button 
        onClick={testEmail}
        variant="outline"
        size="sm"
        className="bg-background border shadow-lg"
      >
        🧪 Testar Email
      </Button>
    </div>
  );
};

export default EmailTest;