import { supabase } from "@/integrations/supabase/client";

export const initializeAdminSystem = async () => {
  console.log('🚀 Iniciando configuração do sistema administrativo...');
  
  try {
    // Step 1: Verificar se o usuário admin já existe
    console.log('📋 Verificando usuário admin existente...');
    
    const { data: existingAdmin } = await supabase
      .from('admin_users')
      .select('*')
      .eq('email', 'admin@mxmo.com')
      .single();

    if (existingAdmin) {
      console.log('✅ Usuário admin já existe na tabela admin_users');
      
      // Verificar se existe no Auth
      const { data: { user }, error: signInError } = await supabase.auth.signInWithPassword({
        email: 'admin@mxmo.com',
        password: 'admin1721'
      });

      if (!signInError && user) {
        console.log('✅ Login administrativo já está funcionando!');
        await supabase.auth.signOut(); // Fazer logout para não interferir
        return { success: true, message: 'Sistema admin já configurado e funcionando' };
      }
    }

    // Step 2: Criar usuário no Auth se não existir
    console.log('🔐 Criando usuário admin no Supabase Auth...');
    
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: 'admin@mxmo.com',
      password: 'admin1721',
      options: {
        emailRedirectTo: `${window.location.origin}/`,
        data: {
          name: 'MXMO Administrator'
        }
      }
    });

    if (authError && !authError.message.includes('User already registered') && !authError.message.includes('email address not authorized')) {
      throw new Error(`Erro ao criar usuário: ${authError.message}`);
    }

    // Se o usuário já existe, tentar fazer login para pegar o ID
    let userId = authData?.user?.id;
    
    if (!userId) {
      console.log('🔍 Usuário já existe, fazendo login para obter ID...');
      const { data: { user }, error: signInError } = await supabase.auth.signInWithPassword({
        email: 'admin@mxmo.com',
        password: 'admin1721'
      });

      if (signInError) {
        throw new Error(`Erro ao fazer login: ${signInError.message}`);
      }
      
      userId = user?.id;
      await supabase.auth.signOut(); // Fazer logout
    }

    if (!userId) {
      throw new Error('Não foi possível obter o ID do usuário');
    }

    // Step 3: Atualizar/inserir na tabela admin_users
    console.log('📝 Atualizando tabela admin_users...');
    
    const { error: upsertError } = await supabase
      .from('admin_users')
      .upsert({
        id: userId,
        name: 'MXMO Administrator',
        email: 'admin@mxmo.com',
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'email'
      });

    if (upsertError) {
      throw new Error(`Erro ao atualizar admin_users: ${upsertError.message}`);
    }

    // Step 4: Testar o login
    console.log('🧪 Testando login administrativo...');
    
    const { data: { user: testUser }, error: testError } = await supabase.auth.signInWithPassword({
      email: 'admin@mxmo.com',
      password: 'admin1721'
    });

    if (testError) {
      throw new Error(`Erro no teste de login: ${testError.message}`);
    }

    // Verificar se é reconhecido como admin
    const { data: adminCheck } = await supabase
      .from('admin_users')
      .select('*')
      .eq('id', testUser?.id)
      .single();

    await supabase.auth.signOut(); // Fazer logout após teste

    if (!adminCheck) {
      throw new Error('Usuário não é reconhecido como admin');
    }

    console.log('✅ Sistema administrativo configurado com sucesso!');
    console.log('📋 Credenciais:');
    console.log('   Empresa: MXMOADM');
    console.log('   Senha: admin1721');

    return { 
      success: true, 
      message: 'Sistema administrativo configurado com sucesso!',
      credentials: {
        empresa: 'MXMOADM',
        senha: 'admin1721'
      }
    };

  } catch (error) {
    console.error('❌ Erro na configuração:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Erro desconhecido' 
    };
  }
};

// Auto-executar quando o módulo for importado
if (typeof window !== 'undefined') {
  // Disponibilizar globalmente para uso no console
  (window as any).initializeAdminSystem = initializeAdminSystem;
  
  // Executar automaticamente após um pequeno delay
  setTimeout(async () => {
    console.log('🔧 Executando configuração automática do sistema admin...');
    const result = await initializeAdminSystem();
    if (result.success) {
      console.log('🎉 Configuração concluída! Você já pode fazer login administrativo.');
    } else {
      console.error('❌ Falha na configuração:', result.error);
    }
  }, 2000);
}