import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

interface FormData {
  name: string
  email: string
  whatsapp: string
  company: string
  position: string
  revenue: string
  employees: string
  growthGoal: string
  preferredTime: string
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const formData: FormData = await req.json()

    const revenueLabels: { [key: string]: string } = {
      "up-to-100k": "Até R$ 100 mil",
      "100k-500k": "R$ 100 mil - R$ 500 mil",
      "500k-1m": "R$ 500 mil - R$ 1 milhão",
      "1m-5m": "R$ 1 milhão - R$ 5 milhões",
      "5m-10m": "R$ 5 milhões - R$ 10 milhões",
      "10m-plus": "Mais de R$ 10 milhões",
    }

    const employeeLabels: { [key: string]: string } = {
      "1-5": "1-5 colaboradores",
      "6-10": "6-10 colaboradores",
      "11-25": "11-25 colaboradores",
      "26-50": "26-50 colaboradores",
      "51-100": "51-100 colaboradores",
      "100-plus": "Mais de 100 colaboradores",
    }

    const timeLabels: { [key: string]: string } = {
      "morning": "Manhã (9h às 12h)",
      "afternoon": "Tarde (13h às 17h)",
      "evening": "Fim de tarde (17h às 19h)",
    }

    const emailHtml = `
    <h2>Nova Solicitação de Sessão Estratégica</h2>
    <p><strong>Nome:</strong> ${formData.name}</p>
    <p><strong>E-mail:</strong> ${formData.email}</p>
    <p><strong>WhatsApp:</strong> ${formData.whatsapp}</p>
    <p><strong>Empresa:</strong> ${formData.company}</p>
    <p><strong>Cargo:</strong> ${formData.position}</p>
    <p><strong>Faturamento Anual:</strong> ${revenueLabels[formData.revenue] || formData.revenue}</p>
    <p><strong>Número de Colaboradores:</strong> ${employeeLabels[formData.employees] || formData.employees}</p>
    <p><strong>Meta de Crescimento:</strong> ${formData.growthGoal}</p>
    <p><strong>Horário Preferido:</strong> ${timeLabels[formData.preferredTime] || formData.preferredTime}</p>
    <hr>
    <p><em>Enviado em ${new Date().toLocaleString('pt-BR')}</em></p>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'noreply@resend.dev',
        to: ['alexandre@mxmo.com.br'],
        subject: `Nova Sessão Estratégica - ${formData.name} (${formData.company})`,
        html: emailHtml,
      }),
    })

    if (res.ok) {
      return new Response(
        JSON.stringify({ success: true }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        }
      )
    } else {
      const error = await res.text()
      throw new Error(`Failed to send email: ${error}`)
    }

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})