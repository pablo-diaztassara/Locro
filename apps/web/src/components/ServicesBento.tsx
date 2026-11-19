const flowSteps = [
  "Web / WhatsApp",
  "n8n + reglas",
  "Tu CRM / Sheets",
  "Alerta al equipo",
];

export function ServicesBento() {
  return (
    <section
      id="servicios"
      className="mx-auto max-w-[1200px] scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16"
    >
      <div className="max-w-2xl">
        <p className="font-mono text-[13px] font-medium text-locro-accent">
          {"// 02 qué armamos"}
        </p>
        <h2 className="mt-3 font-display text-[28px] leading-[1.15] font-bold tracking-[-0.02em] text-locro-ink sm:text-[36px]">
          Soluciones modulares, con alcance cerrado
        </h2>
        <p className="mt-3 text-[16px] leading-[1.6] text-locro-ink-muted">
          Si un proceso se resuelve con una automatización simple y no necesita
          IA, te lo decimos de frente. Arrancás por el módulo que mayor retorno
          te da hoy.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-12">
        {/* Pack 01 — Card Acento Amarillo Maíz */}
        <article className="flex flex-col justify-between rounded-[20px] bg-locro-maize p-7 text-locro-ink sm:p-8 lg:col-span-5">
          <div>
            <div className="flex items-center justify-between font-mono text-[12px] font-medium">
              <span>pack_01</span>
              <span className="rounded-full bg-locro-ink/10 px-2.5 py-0.5">
                1 semana
              </span>
            </div>
            <h3 className="mt-4 font-display text-[24px] leading-[1.2] font-bold tracking-[-0.02em]">
              Diagnóstico &amp; Mapa de Procesos
            </h3>
            <p className="mt-3 text-[15.5px] leading-[1.6] text-locro-ink/85">
              Relevamos tu operación real, detectamos cuellos de botella y te
              entregamos una hoja de ruta priorizada por impacto en horas y
              plata.
            </p>
          </div>
          <p className="mt-6 border-t border-locro-ink/15 pt-4 font-mono text-[12.5px] font-medium">
            Ideal si sabés que perdés tiempo pero no por dónde empezar.
          </p>
        </article>

        {/* Pack 02 — Automatización Operativa + Diagrama de Nodos */}
        <article className="bento-card bento-card-interactive flex flex-col justify-between p-7 sm:p-8 lg:col-span-7">
          <div>
            <div className="flex items-center justify-between font-mono text-[12px] font-medium text-locro-ink-muted">
              <span className="text-locro-accent">pack_02</span>
              <span className="rounded-full border border-locro-border bg-locro-bg px-2.5 py-0.5 text-locro-ink">
                1 a 3 semanas
              </span>
            </div>
            <h3 className="mt-4 font-display text-[24px] leading-[1.2] font-bold tracking-[-0.02em] text-locro-ink">
              Automatización Operativa
            </h3>
            <p className="mt-3 text-[15.5px] leading-[1.6] text-locro-ink-muted">
              Conectamos formularios, WhatsApp, planillas, CRM y facturación con
              flujos en n8n y APIs para eliminar el copiar y pegar manual de
              todos los días.
            </p>
          </div>

          {/* Diagrama limpio estilo circuito */}
          <div className="mt-7 rounded-[14px] border border-locro-border bg-locro-bg p-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {flowSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-2 sm:gap-3">
                  <span className="inline-flex items-center gap-2 rounded-[10px] border border-locro-border bg-locro-surface px-3 py-1.5 font-mono text-[12px] font-medium text-locro-ink">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        index === 1 ? "bg-locro-accent" : "bg-locro-ink"
                      }`}
                      aria-hidden="true"
                    />
                    {step}
                  </span>
                  {index < flowSteps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="font-mono text-[13px] text-locro-ink-muted"
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Pack 03 — Agentes de IA Aplicados (Card Marrón Tierra) */}
        <article className="flex flex-col justify-between rounded-[20px] bg-locro-surface-dark p-7 text-locro-ink-on-dark sm:p-8 lg:col-span-7">
          <div>
            <div className="flex items-center justify-between font-mono text-[12px] font-medium">
              <span className="text-locro-accent">pack_03</span>
              <span className="rounded-full border border-locro-border/25 px-2.5 py-0.5 text-locro-border">
                2 a 4 semanas
              </span>
            </div>
            <h3 className="mt-4 font-display text-[24px] leading-[1.2] font-bold tracking-[-0.02em] text-locro-ink-on-dark">
              Agentes de IA Aplicados
            </h3>
            <p className="mt-3 text-[15.5px] leading-[1.6] text-locro-border">
              Asistentes entrenados con tu catálogo, precios y políticas que
              responden consultas 24/7 por WhatsApp o web, califican clientes y
              agendan reuniones directo en tu calendario.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-3 border-t border-locro-border/20 pt-5 sm:grid-cols-3">
            <div>
              <p className="font-mono text-[12px] text-locro-maize">01 · responde</p>
              <p className="mt-1 text-[13.5px] text-locro-border">
                Con tu tono y tus datos reales, sin inventar respuestas.
              </p>
            </div>
            <div>
              <p className="font-mono text-[12px] text-locro-maize">02 · califica</p>
              <p className="mt-1 text-[13.5px] text-locro-border">
                Filtra consultas y junta los datos antes de pasar a ventas.
              </p>
            </div>
            <div>
              <p className="font-mono text-[12px] text-locro-maize">03 · deriva</p>
              <p className="mt-1 text-[13.5px] text-locro-border">
                Escala a una persona de tu equipo cuando hace falta.
              </p>
            </div>
          </div>
        </article>

        {/* Pack 04 — Software a Medida */}
        <article className="bento-card bento-card-interactive flex flex-col justify-between p-7 sm:p-8 lg:col-span-5">
          <div>
            <div className="flex items-center justify-between font-mono text-[12px] font-medium text-locro-ink-muted">
              <span className="text-locro-accent">pack_04</span>
              <span className="rounded-full border border-locro-border bg-locro-bg px-2.5 py-0.5 text-locro-ink">
                4 a 8 semanas
              </span>
            </div>
            <h3 className="mt-4 font-display text-[24px] leading-[1.2] font-bold tracking-[-0.02em] text-locro-ink">
              Software a Medida &amp; Integraciones
            </h3>
            <p className="mt-3 text-[15.5px] leading-[1.6] text-locro-ink-muted">
              Aplicaciones web internas, portales de clientes, tableros de
              gestión o conectores a medida cuando tu Excel ya explotó y ningún
              software enlatado encaja.
            </p>
          </div>
          <p className="mt-6 border-t border-locro-border pt-4 font-mono text-[12.5px] text-locro-ink-muted">
            Construido sobre tu ERP/stack actual, sin licencias por usuario.
          </p>
        </article>
      </div>
    </section>
  );
}
