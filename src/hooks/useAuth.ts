import { useState, useEffect, createContext, useContext } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  isAdmin: boolean;
  companyId?: string;
}

interface AuthContextType {
  user: AuthUser | null;
  session: Session | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  adminLogin: (username: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  login: async () => ({ success: false }),
  adminLogin: async () => ({ success: false }),
  logout: async () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const useAuthState = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        
        if (session?.user) {
          // Check if user is admin
          const { data: adminData } = await supabase
            .from('admin_users')
            .select('id, name, email')
            .eq('id', session.user.id)
            .single();

          if (adminData) {
            setUser({
              id: session.user.id,
              email: adminData.email,
              name: adminData.name,
              isAdmin: true,
            });
          } else {
            // Check company access
            const { data: companyData } = await supabase
              .from('company_access')
              .select(`
                id,
                username,
                company_id,
                companies (
                  id,
                  name,
                  email
                )
              `)
              .eq('id', session.user.id)
              .single();

            if (companyData && companyData.companies) {
              setUser({
                id: session.user.id,
                email: companyData.companies.email,
                name: companyData.companies.name,
                isAdmin: false,
                companyId: companyData.company_id,
              });
            }
          }
        } else {
          setUser(null);
        }
        
        setLoading(false);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (!session) {
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: 'Erro ao fazer login' };
    }
  };

  const adminLogin = async (username: string, password: string) => {
    try {
      // For admin login, we'll use the username as email
      const { error } = await supabase.auth.signInWithPassword({
        email: `${username}@admin.local`,
        password,
      });

      if (error) {
        return { success: false, error: 'Credenciais inválidas' };
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: 'Erro ao fazer login' };
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      toast.success('Logout realizado com sucesso');
    } catch (error) {
      toast.error('Erro ao fazer logout');
    }
  };

  return {
    user,
    session,
    loading,
    login,
    adminLogin,
    logout,
  };
};

export { AuthContext };