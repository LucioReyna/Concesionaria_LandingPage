export async function onRequestPost({ request, env }) {
  // CORS Headers
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const data = await request.json();
    const { full_name, phone, email, message, vehicle_interest_id, website } = data;

    // 1. Honeypot check
    if (website) {
      return new Response(JSON.stringify({ error: "Antispam trigger" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // 2. Validation
    if (!full_name || !phone) {
      return new Response(JSON.stringify({ error: "Nombre y teléfono son obligatorios" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // 3. Supabase Integration
    const supabaseUrl = env.SUPABASE_URL;
    const supabaseKey = env.SUPABASE_SECRET_KEY;
    const stageId = env.LEAD_NEW_STAGE_ID;

    if (!supabaseUrl || !supabaseKey || !stageId) {
      console.error("Missing environment variables");
      return new Response(JSON.stringify({ error: "Error de configuración en el servidor" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const payload = {
      full_name,
      phone,
      email: email || null,
      message: message || null,
      source: "landing",
      stage_id: stageId,
      vehicle_interest_id: vehicle_interest_id || null,
    };

    const response = await fetch(`${supabaseUrl}/rest/v1/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": supabaseKey,
        "Authorization": `Bearer ${supabaseKey}`,
        "Prefer": "return=minimal",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Supabase error:", errorData);
      return new Response(JSON.stringify({ error: "Error al registrar el lead en Supabase" }), {
        status: response.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 201,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Internal Error:", error);
    return new Response(JSON.stringify({ error: "Error interno del servidor" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
