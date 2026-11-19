import { NextRequest, NextResponse } from "next/server";

interface LeadPayload {
  name?: string;
  email?: string;
  company?: string;
  whatsapp?: string;
  message?: string;
  website?: string; // honeypot anti-spam
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let body: LeadPayload;

  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Formato de solicitud inválido." },
      { status: 400 }
    );
  }

  // Honeypot: silently accept bot submissions without forwarding
  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim().toLowerCase();
  const company = (body.company ?? "").trim();
  const whatsapp = (body.whatsapp ?? "").trim();
  const message = (body.message ?? "").trim();

  if (name.length < 2) {
    return NextResponse.json(
      { ok: false, error: "Ingresá tu nombre para poder responderte." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Ingresá un email válido." },
      { status: 400 }
    );
  }

  if (message.length < 10) {
    return NextResponse.json(
      {
        ok: false,
        error: "Contanos brevemente qué proceso o tarea querés ordenar.",
      },
      { status: 400 }
    );
  }

  const normalizedLead = {
    source: "locro.com.ar",
    submittedAt: new Date().toISOString(),
    name,
    email,
    company: company || null,
    whatsapp: whatsapp || null,
    message,
  };

  const webhookUrl = process.env.N8N_LEAD_WEBHOOK_URL;
  const webhookSecret = process.env.N8N_WEBHOOK_SECRET;

  if (webhookUrl) {
    try {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (webhookSecret) {
        headers["x-locro-webhook-secret"] = webhookSecret;
      }

      const upstream = await fetch(webhookUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(normalizedLead),
        signal: AbortSignal.timeout(8000),
      });

      if (!upstream.ok) {
        console.error(
          "[locro/leads] n8n webhook returned status:",
          upstream.status
        );
        return NextResponse.json(
          {
            ok: false,
            error:
              "No pudimos registrar tu consulta en este momento. Escribinos directo a somoslocro@gmail.com.",
          },
          { status: 502 }
        );
      }
    } catch (error) {
      console.error("[locro/leads] Failed forwarding to n8n:", error);
      return NextResponse.json(
        {
          ok: false,
          error:
            "Hubo un problema de conexión. Probá de nuevo o escribinos a somoslocro@gmail.com.",
        },
        { status: 502 }
      );
    }
  } else {
    // Development / pre-Track-4 mode: log sanitized payload on server
    console.info("[locro/leads] Lead received (webhook not configured):", {
      source: normalizedLead.source,
      submittedAt: normalizedLead.submittedAt,
      company: normalizedLead.company,
    });
  }

  return NextResponse.json(
    {
      ok: true,
      message:
        "Recibimos tu mensaje. En menos de 24 horas hábiles te respondemos para coordinar el diagnóstico.",
    },
    { status: 200 }
  );
}
