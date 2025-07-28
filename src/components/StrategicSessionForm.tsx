import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Calendar, Clock, Building, Users, Target, TrendingUp } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  whatsapp: z.string().min(10, "WhatsApp deve ter pelo menos 10 dígitos"),
  company: z.string().min(2, "Nome da empresa é obrigatório"),
  position: z.string().min(2, "Cargo é obrigatório"),
  revenue: z.string().min(1, "Selecione o faturamento anual"),
  employees: z.string().min(1, "Selecione o número de colaboradores"),
  growthGoal: z.string().min(10, "Descreva sua meta de crescimento"),
  preferredTime: z.string().min(1, "Selecione o melhor horário"),
});

type FormData = z.infer<typeof formSchema>;

interface StrategicSessionFormProps {
  trigger?: React.ReactNode;
  triggerClassName?: string;
  triggerText?: string;
}

const StrategicSessionForm = ({ 
  trigger, 
  triggerClassName = "button-primary", 
  triggerText = "Agendar Sessão Estratégica" 
}: StrategicSessionFormProps) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
      company: "",
      position: "",
      revenue: "",
      employees: "",
      growthGoal: "",
      preferredTime: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/send-strategic-session-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }
      
      toast.success("Formulário enviado com sucesso! Entraremos em contato em breve.");
      form.reset();
    } catch (error) {
      console.error('Error sending form:', error);
      toast.error("Erro ao enviar formulário. Tente novamente.");
    }
  };

  const revenueOptions = [
    { value: "up-to-100k", label: "Até R$ 100 mil" },
    { value: "100k-500k", label: "R$ 100 mil - R$ 500 mil" },
    { value: "500k-1m", label: "R$ 500 mil - R$ 1 milhão" },
    { value: "1m-5m", label: "R$ 1 milhão - R$ 5 milhões" },
    { value: "5m-10m", label: "R$ 5 milhões - R$ 10 milhões" },
    { value: "10m-plus", label: "Mais de R$ 10 milhões" },
  ];

  const employeeOptions = [
    { value: "1-5", label: "1-5 colaboradores" },
    { value: "6-10", label: "6-10 colaboradores" },
    { value: "11-25", label: "11-25 colaboradores" },
    { value: "26-50", label: "26-50 colaboradores" },
    { value: "51-100", label: "51-100 colaboradores" },
    { value: "100-plus", label: "Mais de 100 colaboradores" },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button className={triggerClassName}>
            {triggerText}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Calendar className="w-4 h-4" />
              Vagas Limitadas
            </div>
            
            <DialogTitle className="text-2xl sm:text-3xl font-bold text-foreground">
              Aplique-se para Sessão Estratégica{" "}
              <span className="gradient-text">GRATUITA!</span>
            </DialogTitle>
            
            <p className="text-base text-muted-foreground">
              Liberamos <strong>10 Sessões Estratégicas</strong> de Expansão, mas por pouquíssimo tempo.
              <br />Preencha o formulário e aguarde o nosso contato.
            </p>
          </div>
        </DialogHeader>

        <div className="mt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {/* Nome */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Seu nome
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* E-mail */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Seu e-mail</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="seu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* WhatsApp */}
                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Seu WhatsApp</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="(11) 99999-9999" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Empresa */}
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        Empresa
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Nome da sua empresa" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Cargo */}
                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Qual seu cargo na empresa?</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: CEO, Diretor, Sócio..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Faturamento */}
                <FormField
                  control={form.control}
                  name="revenue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Faturamento ANUAL da empresa
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o faturamento" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {revenueOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Colaboradores */}
                <FormField
                  control={form.control}
                  name="employees"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantos colaboradores?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o número" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {employeeOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Meta de crescimento */}
              <FormField
                control={form.control}
                name="growthGoal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Qual sua meta de crescimento?
                    </FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Descreva qual é sua meta de crescimento para os próximos 12 meses..."
                        className="min-h-[80px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Horário preferido */}
              <FormField
                control={form.control}
                name="preferredTime"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Qual melhor horário para conversarmos?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="morning" id="morning" />
                          <label htmlFor="morning" className="cursor-pointer text-sm">Manhã (9h às 12h)</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="afternoon" id="afternoon" />
                          <label htmlFor="afternoon" className="cursor-pointer text-sm">Tarde (13h às 17h)</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="evening" id="evening" />
                          <label htmlFor="evening" className="cursor-pointer text-sm">Fim de tarde (17h às 19h)</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <div className="text-center pt-4">
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full text-base px-8 py-3"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Enviando..." : "SOLICITAR SESSÃO GRATUITA"}
                </Button>
                
                <p className="text-xs text-muted-foreground mt-3">
                  📞 Entraremos em contato em até 24 horas
                </p>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StrategicSessionForm;