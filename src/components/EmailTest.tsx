
import React from "react";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const EmailTest = () => {
  const testEmail = async () => {
    try {
      await emailjs.send(
        'service_soq4zxl',
        'template_0osw7ti',
        {
          to_name: 'Alexandre',
          to_email: 'alexandre.maximo1701@gmail.com',
          from_name: 'Teste Sistema',
          reply_to: 'teste@mxmo.com.br',
          message: 'Este é um email de teste para verificar se o sistema está funcionando.',
          subject: 'Teste de Email - Sistema MXMO'
        },
        'bDrIc2tRtXZjSbaMi'
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
