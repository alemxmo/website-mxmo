import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyDialogProps {
  children: React.ReactNode;
}

const PrivacyPolicyDialog = ({ children }: PrivacyPolicyDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Política de Privacidade</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <div>
              <h3 className="text-lg font-semibold mb-3">1. Informações Gerais</h3>
              <p className="text-muted-foreground leading-relaxed">
                A MXMO Consultoria está comprometida em proteger a privacidade e os dados pessoais de seus clientes, visitantes e usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">2. Dados Coletados</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Coletamos as seguintes categorias de dados pessoais:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Dados de identificação:</strong> nome, e-mail, telefone, empresa</li>
                <li><strong>Dados de navegação:</strong> endereço IP, cookies, páginas visitadas</li>
                <li><strong>Dados de comunicação:</strong> mensagens enviadas através de formulários de contato</li>
                <li><strong>Dados profissionais:</strong> cargo, área de atuação, necessidades de consultoria</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">3. Finalidade do Tratamento</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Utilizamos seus dados pessoais para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Responder a solicitações de contato e dúvidas</li>
                <li>Fornecer serviços de consultoria empresarial</li>
                <li>Enviar materiais informativos e newsletters (mediante consentimento)</li>
                <li>Melhorar nossos serviços e experiência do usuário</li>
                <li>Cumprir obrigações legais e regulamentares</li>
                <li>Realizar análises estatísticas e de mercado</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">4. Base Legal</h3>
              <p className="text-muted-foreground leading-relaxed">
                O tratamento de seus dados pessoais é realizado com base nas seguintes hipóteses legais previstas na LGPD: consentimento do titular, execução de contrato, legítimo interesse, cumprimento de obrigação legal e exercício regular de direitos.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">5. Compartilhamento de Dados</h3>
              <p className="text-muted-foreground leading-relaxed">
                Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais. Podemos compartilhar informações apenas nas seguintes situações: com prestadores de serviços que nos auxiliam na operação do website, quando exigido por lei ou ordem judicial, ou para proteger nossos direitos legais.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">6. Segurança dos Dados</h3>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia, controles de acesso e monitoramento contínuo de nossos sistemas.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">7. Retenção de Dados</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta política, respeitando os prazos legais de retenção. Após esse período, os dados serão eliminados de forma segura.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">8. Seus Direitos</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                De acordo com a LGPD, você tem os seguintes direitos:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Confirmação da existência de tratamento</li>
                <li>Acesso aos dados</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                <li>Anonimização, bloqueio ou eliminação de dados</li>
                <li>Portabilidade dos dados</li>
                <li>Revogação do consentimento</li>
                <li>Informação sobre compartilhamento de dados</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">9. Cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies para melhorar sua experiência de navegação, analisar o tráfego do site e personalizar conteúdo. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">10. Alterações na Política</h3>
              <p className="text-muted-foreground leading-relaxed">
                Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você revise regularmente esta página para se manter informado sobre nossas práticas de privacidade.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">11. Contato</h3>
              <p className="text-muted-foreground leading-relaxed">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato conosco:
              </p>
              <div className="mt-3 space-y-1 text-muted-foreground ml-4">
                <p><strong>E-mail:</strong> contato@mxmo.com.br</p>
                <p><strong>WhatsApp:</strong> (11) 94116-8878</p>
                <p><strong>Endereço:</strong> São Paulo, SP - Brasil</p>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyDialog;