"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

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
              {"// 04 diagnóstico inicial"}
            </p>
            <h2 className="mt-4 font-display text-[30px] leading-[1.12] font-bold tracking-[-0.02em] sm:text-[36px]">
              Contanos qué proceso querés ordenar
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.6] text-locro-border">
              Agendamos una charla directa de 20 minutos para ver tus
              herramientas actuales y detectar dónde podés ahorrar horas rápido.
              Sin compromiso ni presentaciones eternas.
            </p>
          </div>

          <div className="mt-8 space-y-3 border-t border-locro-border/20 pt-6 text-[14px] text-locro-border">
            <p>
              <span className="font-mono text-locro-maize">mail:</span>{" "}
              <a
                href="mailto:somoslocro@gmail.com"
                className="underline decoration-locro-border/40 underline-offset-4 transition-colors hover:text-white"
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
                className="underline decoration-locro-border/40 underline-offset-4 transition-colors hover:text-white"
              >
                @somoslocro
              </a>
            </p>
            <p className="font-mono text-[12px] text-locro-border/80">
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
                className="mt-6 inline-flex w-fit items-center rounded-[12px] border-[1.5px] border-locro-ink px-5 py-2.5 text-[14px] font-semibold text-locro-ink transition-colors hover:bg-locro-ink hover:text-locro-ink-on-dark"
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
