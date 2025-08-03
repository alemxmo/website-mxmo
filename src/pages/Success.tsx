import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Rocket, Target, Users, ArrowRight, Clock, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Hero Success Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-primary" />
              </div>
              <div className="absolute -inset-2 border-2 border-primary/20 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Success Message */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Sua solicitação foi enviada com sucesso!
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Parabéns por dar o primeiro passo para revolucionar seu negócio com inteligência artificial
            </p>
          </div>

          {/* Next Steps */}
          <div className="bg-card/50 backdrop-blur border rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">Próximos Passos</h3>
            </div>
            <div className="text-left space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-medium text-primary">1</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Nossa equipe analisará suas informações nas próximas <strong>24 horas</strong>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-medium text-primary">2</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Entraremos em contato para agendar uma <strong>sessão estratégica gratuita</strong>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-medium text-primary">3</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Apresentaremos um <strong>plano personalizado</strong> para sua empresa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why MXMO Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que você fez a escolha certa com a MXMO
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Resultados Comprovados</h3>
                <p className="text-muted-foreground text-sm">
                  Mais de <strong>200% de ROI</strong> em média para nossos clientes nos primeiros 6 meses
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Especialistas Dedicados</h3>
                <p className="text-muted-foreground text-sm">
                  Time com <strong>+10 anos</strong> de experiência em IA e transformação digital
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Implementação Rápida</h3>
                <p className="text-muted-foreground text-sm">
                  Primeiros resultados visíveis em <strong>30 dias</strong> ou menos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border-primary/20">
            <CardContent className="p-8 text-center space-y-6">
              <h3 className="text-2xl font-bold">Precisa falar conosco urgentemente?</h3>
              <p className="text-muted-foreground">
                Nossa equipe está sempre disponível para esclarecer dúvidas e acelerar seu processo
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="https://wa.me/5511941168878" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-green-500" />
                  <span>(11) 94116-8878</span>
                </a>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>contato@mxmo.com.br</span>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild className="group">
                  <Link to="/">
                    Voltar ao site
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="container mx-auto px-4 py-16 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            Seus dados estão seguros conosco. Respeitamos sua privacidade e seguimos a LGPD.
          </p>
        </div>
      </div>
    </div>
  );
}