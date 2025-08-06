-- Create admin users table
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create companies table
CREATE TABLE public.companies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create company access table for login credentials
CREATE TABLE public.company_access (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  last_login TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create project overview table
CREATE TABLE public.project_overview (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE UNIQUE,
  current_phase TEXT NOT NULL,
  progress INTEGER NOT NULL DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  next_milestone TEXT NOT NULL,
  days_remaining INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create company KPIs table
CREATE TABLE public.company_kpis (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  value TEXT NOT NULL,
  target TEXT NOT NULL,
  progress INTEGER NOT NULL DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create company timeline table
CREATE TABLE public.company_timeline (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  month TEXT NOT NULL,
  fase1 INTEGER NOT NULL DEFAULT 0 CHECK (fase1 >= 0 AND fase1 <= 100),
  fase2 INTEGER NOT NULL DEFAULT 0 CHECK (fase2 >= 0 AND fase2 <= 100),
  fase3 INTEGER NOT NULL DEFAULT 0 CHECK (fase3 >= 0 AND fase3 <= 100),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create project phases table
CREATE TABLE public.project_phases (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  phase TEXT NOT NULL,
  phase_name TEXT NOT NULL,
  completed INTEGER NOT NULL DEFAULT 0 CHECK (completed >= 0 AND completed <= 100),
  remaining INTEGER NOT NULL DEFAULT 0 CHECK (remaining >= 0 AND remaining <= 100),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create company insights table
CREATE TABLE public.company_insights (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('action', 'alert', 'insight')),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create next steps table
CREATE TABLE public.next_steps (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  date TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create company documents table
CREATE TABLE public.company_documents (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  available BOOLEAN NOT NULL DEFAULT false,
  link TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create access logs table for auditing
CREATE TABLE public.access_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID,
  user_type TEXT NOT NULL CHECK (user_type IN ('admin', 'company')),
  action TEXT NOT NULL,
  details JSONB,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security on all tables
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.company_access ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_overview ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.company_kpis ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.company_timeline ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_phases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.company_insights ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.next_steps ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.company_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.access_logs ENABLE ROW LEVEL SECURITY;

-- Create function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users WHERE id = user_id
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- Create function to get company for user
CREATE OR REPLACE FUNCTION public.get_user_company(user_id UUID)
RETURNS UUID AS $$
BEGIN
  RETURN (
    SELECT c.id 
    FROM public.companies c
    JOIN public.company_access ca ON ca.company_id = c.id
    WHERE ca.id = user_id
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_admin_users_updated_at
  BEFORE UPDATE ON public.admin_users
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_companies_updated_at
  BEFORE UPDATE ON public.companies
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_company_access_updated_at
  BEFORE UPDATE ON public.company_access
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_project_overview_updated_at
  BEFORE UPDATE ON public.project_overview
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_company_kpis_updated_at
  BEFORE UPDATE ON public.company_kpis
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_company_timeline_updated_at
  BEFORE UPDATE ON public.company_timeline
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_project_phases_updated_at
  BEFORE UPDATE ON public.project_phases
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_company_insights_updated_at
  BEFORE UPDATE ON public.company_insights
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_next_steps_updated_at
  BEFORE UPDATE ON public.next_steps
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_company_documents_updated_at
  BEFORE UPDATE ON public.company_documents
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- RLS Policies for admin_users
CREATE POLICY "Admins can view all admin users" ON public.admin_users
  FOR SELECT USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can insert admin users" ON public.admin_users
  FOR INSERT WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update admin users" ON public.admin_users
  FOR UPDATE USING (public.is_admin(auth.uid()));

-- RLS Policies for companies
CREATE POLICY "Admins can view all companies" ON public.companies
  FOR SELECT USING (public.is_admin(auth.uid()));

CREATE POLICY "Companies can view their own data" ON public.companies
  FOR SELECT USING (id = public.get_user_company(auth.uid()));

CREATE POLICY "Admins can insert companies" ON public.companies
  FOR INSERT WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update companies" ON public.companies
  FOR UPDATE USING (public.is_admin(auth.uid()));

-- RLS Policies for company_access
CREATE POLICY "Admins can view all company access" ON public.company_access
  FOR SELECT USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage company access" ON public.company_access
  FOR ALL USING (public.is_admin(auth.uid()));

-- RLS Policies for project_overview
CREATE POLICY "Admins can view all project overviews" ON public.project_overview
  FOR SELECT USING (public.is_admin(auth.uid()));

CREATE POLICY "Companies can view their project overview" ON public.project_overview
  FOR SELECT USING (company_id = public.get_user_company(auth.uid()));

CREATE POLICY "Admins can manage project overviews" ON public.project_overview
  FOR ALL USING (public.is_admin(auth.uid()));

-- RLS Policies for company_kpis
CREATE POLICY "Admins can view all KPIs" ON public.company_kpis
  FOR SELECT USING (public.is_admin(auth.uid()));

CREATE POLICY "Companies can view their KPIs" ON public.company_kpis
  FOR SELECT USING (company_id = public.get_user_company(auth.uid()));

CREATE POLICY "Admins can manage KPIs" ON public.company_kpis
  FOR ALL USING (public.is_admin(auth.uid()));

-- RLS Policies for company_timeline
CREATE POLICY "Admins can view all timelines" ON public.company_timeline
  FOR SELECT USING (public.is_admin(auth.uid()));

CREATE POLICY "Companies can view their timeline" ON public.company_timeline
  FOR SELECT USING (company_id = public.get_user_company(auth.uid()));

CREATE POLICY "Admins can manage timelines" ON public.company_timeline
  FOR ALL USING (public.is_admin(auth.uid()));

-- RLS Policies for project_phases
CREATE POLICY "Admins can view all phases" ON public.project_phases
  FOR SELECT USING (public.is_admin(auth.uid()));

CREATE POLICY "Companies can view their phases" ON public.project_phases
  FOR SELECT USING (company_id = public.get_user_company(auth.uid()));

CREATE POLICY "Admins can manage phases" ON public.project_phases
  FOR ALL USING (public.is_admin(auth.uid()));

-- RLS Policies for company_insights
CREATE POLICY "Admins can view all insights" ON public.company_insights
  FOR SELECT USING (public.is_admin(auth.uid()));

CREATE POLICY "Companies can view their insights" ON public.company_insights
  FOR SELECT USING (company_id = public.get_user_company(auth.uid()));

CREATE POLICY "Admins can manage insights" ON public.company_insights
  FOR ALL USING (public.is_admin(auth.uid()));

-- RLS Policies for next_steps
CREATE POLICY "Admins can view all next steps" ON public.next_steps
  FOR SELECT USING (public.is_admin(auth.uid()));

CREATE POLICY "Companies can view their next steps" ON public.next_steps
  FOR SELECT USING (company_id = public.get_user_company(auth.uid()));

CREATE POLICY "Admins can manage next steps" ON public.next_steps
  FOR ALL USING (public.is_admin(auth.uid()));

-- RLS Policies for company_documents
CREATE POLICY "Admins can view all documents" ON public.company_documents
  FOR SELECT USING (public.is_admin(auth.uid()));

CREATE POLICY "Companies can view their documents" ON public.company_documents
  FOR SELECT USING (company_id = public.get_user_company(auth.uid()));

CREATE POLICY "Admins can manage documents" ON public.company_documents
  FOR ALL USING (public.is_admin(auth.uid()));

-- RLS Policies for access_logs
CREATE POLICY "Admins can view all access logs" ON public.access_logs
  FOR SELECT USING (public.is_admin(auth.uid()));

CREATE POLICY "Anyone can insert access logs" ON public.access_logs
  FOR INSERT WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX idx_companies_code ON public.companies(code);
CREATE INDEX idx_company_access_username ON public.company_access(username);
CREATE INDEX idx_company_access_company_id ON public.company_access(company_id);
CREATE INDEX idx_project_overview_company_id ON public.project_overview(company_id);
CREATE INDEX idx_company_kpis_company_id ON public.company_kpis(company_id);
CREATE INDEX idx_company_timeline_company_id ON public.company_timeline(company_id);
CREATE INDEX idx_project_phases_company_id ON public.project_phases(company_id);
CREATE INDEX idx_company_insights_company_id ON public.company_insights(company_id);
CREATE INDEX idx_next_steps_company_id ON public.next_steps(company_id);
CREATE INDEX idx_company_documents_company_id ON public.company_documents(company_id);
CREATE INDEX idx_access_logs_user_id ON public.access_logs(user_id);
CREATE INDEX idx_access_logs_created_at ON public.access_logs(created_at);

-- Insert default admin user
INSERT INTO public.admin_users (email, name) VALUES ('admin@mxmo.com.br', 'MXMO Admin');

-- Migrate existing company data from ATHON.json
INSERT INTO public.companies (code, name, email) VALUES ('ATHON', 'Athon Tecnologia', 'contato@athon.com.br');

-- Get the company ID for ATHON
DO $$
DECLARE
    athon_company_id UUID;
BEGIN
    SELECT id INTO athon_company_id FROM public.companies WHERE code = 'ATHON';
    
    -- Insert project overview for ATHON
    INSERT INTO public.project_overview (company_id, current_phase, progress, next_milestone, days_remaining)
    VALUES (athon_company_id, 'Fase 2: Implementação', 65, 'Entrega do MVP', 23);
    
    -- Insert KPIs for ATHON
    INSERT INTO public.company_kpis (company_id, title, value, target, progress, description) VALUES
    (athon_company_id, 'Faturamento Mensal', 'R$ 2.4M', 'R$ 3.5M', 68, 'Crescimento de 15% em relação ao mês anterior'),
    (athon_company_id, 'Oportunidades Ativas', '47', '65', 72, 'Pipeline robusto com potencial de R$ 8.2M'),
    (athon_company_id, 'Entregas no Prazo', '94%', '95%', 99, 'Excelente performance da equipe de desenvolvimento'),
    (athon_company_id, 'ROI do Projeto', '23%', '30%', 77, 'Resultados já superando expectativas iniciais');
    
    -- Insert timeline for ATHON
    INSERT INTO public.company_timeline (company_id, month, fase1, fase2, fase3) VALUES
    (athon_company_id, 'Jan', 100, 20, 0),
    (athon_company_id, 'Fev', 100, 45, 0),
    (athon_company_id, 'Mar', 100, 70, 10),
    (athon_company_id, 'Abr', 100, 95, 25),
    (athon_company_id, 'Mai', 100, 100, 50),
    (athon_company_id, 'Jun', 100, 100, 80);
    
    -- Insert phases for ATHON
    INSERT INTO public.project_phases (company_id, phase, phase_name, completed, remaining) VALUES
    (athon_company_id, 'Fase 1', 'Diagnóstico & Estratégia', 100, 0),
    (athon_company_id, 'Fase 2', 'Implementação & Otimização', 65, 35),
    (athon_company_id, 'Fase 3', 'Escala & Crescimento', 15, 85);
    
    -- Insert insights for ATHON
    INSERT INTO public.company_insights (company_id, type, title, content) VALUES
    (athon_company_id, 'action', 'Acelerar Captação', 'Recomendamos intensificar as ações de geração de leads nos próximos 30 dias para atingir a meta de faturamento.'),
    (athon_company_id, 'alert', 'Atenção: Prazo Apertado', 'O cronograma da Fase 3 está com pouca margem. Considere realocar recursos para garantir a entrega.'),
    (athon_company_id, 'insight', 'Oportunidade de Cross-sell', 'Identificamos 12 clientes atuais com potencial para serviços adicionais, representando R$ 850k em receita adicional.');
    
    -- Insert next steps for ATHON
    INSERT INTO public.next_steps (company_id, title, date, description) VALUES
    (athon_company_id, 'Reunião de Alinhamento', '2024-01-15', 'Revisar KPIs do Q4 e definir metas para 2024'),
    (athon_company_id, 'Workshop de Vendas', '2024-01-22', 'Treinamento da equipe comercial com novas técnicas de abordagem'),
    (athon_company_id, 'Implementação CRM', '2024-02-01', 'Início da migração para o novo sistema de gestão de clientes');
    
    -- Insert documents for ATHON
    INSERT INTO public.company_documents (company_id, name, available, link) VALUES
    (athon_company_id, 'Relatório Mensal', true, '/reports/athon-monthly.pdf'),
    (athon_company_id, 'Análise de Mercado', true, '/reports/athon-market-analysis.pdf'),
    (athon_company_id, 'Plano Estratégico 2024', false, null);
    
    -- Insert company access for ATHON
    INSERT INTO public.company_access (company_id, username, password_hash)
    VALUES (athon_company_id, 'athon', crypt('athon123', gen_salt('bf')));
END $$;