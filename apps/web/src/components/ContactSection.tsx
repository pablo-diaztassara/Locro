"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const WHATSAPP_PREFILL =
  "Hola { locro. }, quiero coordinar un diagnóstico de 20 min para mi negocio";

function getWhatsAppHref(): string {
  const baseUrl = (process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "").trim();
  const encodedText = encodeURIComponent(WHATSAPP_PREFILL);

  if (!baseUrl) {
    return `https://wa.me/?text=${encodedText}`;
  }

  if (baseUrl.includes("text=")) {
    return baseUrl;
  }

  const separator = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${separator}text=${encodedText}`;
}

const WHATSAPP_HREF = getWhatsAppHref();

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          whatsapp,
          message,
          website,
        }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        message?: string;
        error?: string;
      };

      if (!response.ok || !data.ok) {
        setStatus("error");
        setFeedback(
          data.error ||
            "No pudimos enviar tu consulta. Revisá los datos e intentá de nuevo."
        );
        return;
      }

      setStatus("success");
      setFeedback(
        data.message ||
          "Recibimos tu mensaje. En menos de 24 horas hábiles te respondemos para coordinar el diagnóstico."
      );
      setName("");
      setEmail("");
      setCompany("");
      setWhatsapp("");
      setMessage("");
    } catch {
      setStatus("error");
      setFeedback(
        "Hubo un error de conexión. Probá de nuevo o escribinos directo a somoslocro@gmail.com."
      );
    }
  }

  return (
    <section
      id="diagnostico"
      className="mx-auto max-w-[1200px] scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16"
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        {/* Columna izquierda informativa */}
        <div className="flex flex-col justify-between rounded-[20px] bg-locro-surface-dark p-7 text-locro-ink-on-dark sm:p-10 lg:col-span-5">
          <div>
            <p className="font-mono text-[13px] font-medium text-locro-maize">
              {"// 06 diagnóstico inicial"}
            </p>
            <h2 className="mt-4 font-display text-[30px] leading-[1.12] font-bold tracking-[-0.02em] sm:text-[36px]">
              Contanos qué proceso querés ordenar
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.6] text-locro-sand">
              Agendamos una charla directa de 20 minutos para ver tus
              herramientas actuales y detectar dónde podés ahorrar horas rápido.
              Sin compromiso ni presentaciones eternas.
            </p>

            <div className="mt-6">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-[12px] on-maize bg-locro-maize px-5 py-3.5 text-[15px] font-semibold text-locro-ink transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-locro-maize focus-visible:ring-offset-2 focus-visible:ring-offset-locro-surface-dark sm:w-auto"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.59 5.95L0 24l6.32-1.66a11.86 11.86 0 0 0 5.73 1.46h.01c6.55 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.44-8.42Zm-8.46 18.3h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.75.98 1-3.65-.24-.38a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.89 7c0 5.45-4.44 9.89-9.89 9.89Zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z"
                    fill="currentColor"
                  />
                </svg>
                Escribinos por WhatsApp
              </a>
              <p className="mt-2.5 font-mono text-[12px] text-locro-sand/80">
                ¿Preferís algo más rápido? Mandanos un mensaje directo.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-3 border-t border-locro-sand/20 pt-6 text-[14px] text-locro-sand">
            <p>
              <span className="font-mono text-locro-maize">mail:</span>{" "}
              <a
                href="mailto:somoslocro@gmail.com"
                className="underline decoration-locro-sand/40 underline-offset-4 transition-colors hover:text-white"
              >
                somoslocro@gmail.com
              </a>
            </p>
            <p>
              <span className="font-mono text-locro-maize">redes:</span>{" "}
              <a
                href="https://instagram.com/somoslocro"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-locro-sand/40 underline-offset-4 transition-colors hover:text-white"
              >
                @somoslocro
              </a>
            </p>
            <p className="font-mono text-[12px] text-locro-sand/80">
              Respuesta garantizada en menos de 24h hábiles.
            </p>
          </div>
        </div>

        {/* Columna derecha formulario */}
        <div className="bento-card p-7 sm:p-10 lg:col-span-7">
          {status === "success" ? (
            <div
              role="status"
              className="flex h-full flex-col justify-center py-8"
            >
              <span className="font-mono text-[13px] font-medium text-locro-accent">
                {"// consulta recibida"}
              </span>
              <h3 className="mt-3 font-display text-[26px] font-bold text-locro-ink">
                ¡Gracias por escribirnos!
              </h3>
              <p className="mt-3 max-w-md text-[16px] leading-[1.6] text-locro-ink-muted">
                {feedback}
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 inline-flex w-fit items-center rounded-[12px] border-[1.5px] border-locro-ink px-5 py-2.5 text-[14px] font-semibold text-locro-ink transition-colors hover:bg-locro-ink hover:text-locro-bg"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Honeypot invisible para bots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="lead-website">Website</label>
                <input
                  id="lead-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="lead-name"
                    className="block text-[14px] font-medium text-locro-ink"
                  >
                    Tu nombre *
                  </label>
                  <input
                    id="lead-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Martín Gómez"
                    className="mt-1.5 w-full rounded-[12px] border border-locro-border bg-locro-surface px-4 py-3 text-[15px] text-locro-ink placeholder:text-locro-ink-muted/65 focus:border-locro-accent focus:outline-none focus:ring-2 focus:ring-locro-accent/25"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lead-email"
                    className="block text-[14px] font-medium text-locro-ink"
                  >
                    Email *
                  </label>
                  <input
                    id="lead-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="martin@tupyme.com.ar"
                    className="mt-1.5 w-full rounded-[12px] border border-locro-border bg-locro-surface px-4 py-3 text-[15px] text-locro-ink placeholder:text-locro-ink-muted/65 focus:border-locro-accent focus:outline-none focus:ring-2 focus:ring-locro-accent/25"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="lead-company"
                    className="block text-[14px] font-medium text-locro-ink"
                  >
                    Empresa / Pyme
                  </label>
                  <input
                    id="lead-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Nombre de tu negocio"
                    className="mt-1.5 w-full rounded-[12px] border border-locro-border bg-locro-surface px-4 py-3 text-[15px] text-locro-ink placeholder:text-locro-ink-muted/65 focus:border-locro-accent focus:outline-none focus:ring-2 focus:ring-locro-accent/25"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lead-whatsapp"
                    className="block text-[14px] font-medium text-locro-ink"
                  >
                    WhatsApp (opcional)
                  </label>
                  <input
                    id="lead-whatsapp"
                    name="whatsapp"
                    type="tel"
                    autoComplete="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="+54 9 11 ..."
                    className="mt-1.5 w-full rounded-[12px] border border-locro-border bg-locro-surface px-4 py-3 text-[15px] text-locro-ink placeholder:text-locro-ink-muted/65 focus:border-locro-accent focus:outline-none focus:ring-2 focus:ring-locro-accent/25"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="lead-message"
                  className="block text-[14px] font-medium text-locro-ink"
                >
                  ¿Qué tarea o proceso querés ordenar? *
                </label>
                <textarea
                  id="lead-message"
                  name="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Contanos qué tarea hoy les saca más horas por semana..."
                  className="mt-1.5 w-full resize-y rounded-[12px] border border-locro-border bg-locro-surface px-4 py-3 text-[15px] text-locro-ink placeholder:text-locro-ink-muted/65 focus:border-locro-accent focus:outline-none focus:ring-2 focus:ring-locro-accent/25"
                />
              </div>

              {status === "error" && (
                <p
                  role="alert"
                  className="rounded-[10px] border border-locro-accent/30 bg-locro-accent/10 px-4 py-3 text-[14px] font-medium text-locro-ink"
                >
                  {feedback}
                </p>
              )}

              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center rounded-[12px] bg-locro-accent px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-locro-accent-hover disabled:cursor-not-allowed disabled:opacity-65 focus:outline-none focus-visible:ring-2 focus-visible:ring-locro-accent focus-visible:ring-offset-2 focus-visible:ring-offset-locro-surface"
                >
                  {status === "submitting"
                    ? "Enviando consulta..."
                    : "Pedir diagnóstico de 20 min"}
                </button>
                <span className="font-mono text-[12px] text-locro-ink-muted">
                  Sin spam. Respondemos nosotros directo.
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
