import { supabase } from "@/integrations/supabase/client";

export const setupAdminUser = async () => {
  try {
    // Create the admin user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: 'MXMOADM@admin.local',
      password: '1721',
      options: {
        emailRedirectTo: `${window.location.origin}/`,
      }
    });

    if (authError) {
      console.error('Error creating auth user:', authError);
      return { success: false, error: authError.message };
    }

    if (authData.user) {
      // Update the admin_users table with the correct auth user ID
      const { error: updateError } = await supabase
        .from('admin_users')
        .update({ id: authData.user.id })
        .eq('email', 'MXMOADM@admin.local');

      if (updateError) {
        console.error('Error updating admin_users table:', updateError);
        return { success: false, error: updateError.message };
      }

      return { success: true, message: 'Admin user created successfully' };
    }

    return { success: false, error: 'User creation failed' };
  } catch (error) {
    console.error('Error in setupAdminUser:', error);
    return { success: false, error: 'Unknown error occurred' };
  }
};