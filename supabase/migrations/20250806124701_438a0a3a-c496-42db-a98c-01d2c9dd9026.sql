-- Ensure we have the correct admin user in the admin_users table
-- First, let's clear any existing admin users to avoid conflicts
DELETE FROM public.admin_users;

-- Insert the admin user with the correct data
-- This should match the auth user we'll create
INSERT INTO public.admin_users (id, name, email, created_at, updated_at) 
VALUES (
  gen_random_uuid(), -- We'll update this with the actual auth user ID later
  'MXMO Administrator',
  'MXMOADM@admin.local',
  now(),
  now()
);

-- Note: After this migration, you'll need to:
-- 1. Sign up a user with email 'MXMOADM@admin.local' and password '1721' through the auth system
-- 2. Update the admin_users table with the actual auth user ID