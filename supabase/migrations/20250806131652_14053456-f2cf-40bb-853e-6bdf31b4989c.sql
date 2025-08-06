-- Atualizar email do admin para formato válido
UPDATE public.admin_users 
SET email = 'admin@mxmo.com', updated_at = now()
WHERE email = 'MXMOADM@admin.local';