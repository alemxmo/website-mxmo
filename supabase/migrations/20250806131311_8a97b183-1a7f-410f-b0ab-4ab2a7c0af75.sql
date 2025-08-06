-- Limpar dados anteriores do admin que podem estar com problemas
DELETE FROM public.admin_users WHERE email = 'MXMOADM@admin.local';

-- Inserir admin com dados limpos
INSERT INTO public.admin_users (
  id,
  name,
  email,
  created_at,
  updated_at
) VALUES (
  gen_random_uuid(),
  'MXMO Administrator',
  'MXMOADM@admin.local',
  now(),
  now()
);