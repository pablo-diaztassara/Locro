interface ProjectCase {
  code: string;
  tag: string;
  sector: string;
  problem: string;
  solution: string;
  highlights: string[];
}

const projectCases: ProjectCase[] = [
  {
    code: "proy_01",
    tag: "software_a_medida",
    sector: "Gimnasios & Centros de Entrenamiento",
    problem:
      "Control de cuotas, vencimientos y asistencia llevado a mano en planillas o cuadernos.",
    solution:
      "App integral de gestión de socios, planes, pagos, control de accesos y avisos automáticos de vencimiento para que no se escape ninguna cuota.",
    highlights: ["Socios y planes", "Control de accesos", "Avisos de vencimiento"],
  },
  {
    code: "proy_02",
    tag: "software + tienda",
    sector: "Comercios: Stock, Tienda & Clientes",
    problem:
      "Inventario desactualizado entre el local, planillas de Excel y las consultas que entran por WhatsApp.",
    solution:
      "Sistema a medida para controlar stock y ventas en tiempo real, conectado a tienda online y canal directo de contacto y seguimiento con clientes.",
    highlights: ["Stock en tiempo real", "Tienda online", "Seguimiento de clientes"],
  },
  {
    code: "proy_03",
    tag: "software + agenda",
    sector: "Salud: Alquiler de Consultorios & Turnos",
    problem:
      "Superposición de horarios entre profesionales que alquilan consultorios y turnos de pacientes coordinados por mensajes sueltos.",
    solution:
      "Plataforma para gestionar disponibilidad y alquiler de consultorios por bloque + agenda de turnos de pacientes con confirmaciones y recordatorios automáticos.",
    highlights: ["Alquiler por bloque", "Agenda de turnos", "Recordatorios automáticos"],
  },
  {
    code: "proy_04",
    tag: "automatización + ia",
    sector: "Operación & WhatsApp con IA",
    problem:
      "Consultas repetitivas fuera de horario, datos copiados a mano entre sistemas y presupuestos sin seguimiento.",
    solution:
      "Flujos en n8n y agentes de IA conectados a WhatsApp Business, planillas y sistemas locales (Tango/Colppy/Xubio/Mercado Pago) para responder rápido y ordenar cada lead.",
    highlights: ["WhatsApp Business", "n8n + Agentes IA", "Tango / Colppy / MP"],
  },
];

export function UseCasesSection() {
  return (
    <section
      id="proyectos"
      className="mx-auto max-w-[1200px] scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16"
    >
      <div className="max-w-2xl">
        <p className="font-mono text-[13px] font-medium text-locro-accent">
          {"// 03 proyectos & soluciones reales"}
        </p>
        <h2 className="mt-3 font-display text-[28px] leading-[1.15] font-bold tracking-[-0.02em] text-locro-ink sm:text-[36px]">
          Sistemas concretos que ya estamos armando
        </h2>
        <p className="mt-3 text-[16px] leading-[1.6] text-locro-ink-muted">
          Nada de humo ni prototipos de juguete: herramientas pensadas para
          operaciones reales de todos los días.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        {projectCases.map((item) => (
          <article
            key={item.code}
            className="bento-card bento-card-interactive flex flex-col justify-between p-7 sm:p-8"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-[12px] font-medium text-locro-accent">
                  {item.code}
                </span>
                <span className="rounded-full bg-locro-maize/30 px-3 py-1 font-mono text-[12px] font-semibold text-locro-ink">
                  {item.tag}
                </span>
              </div>

              <h3 className="mt-3.5 font-display text-[22px] leading-[1.25] font-bold tracking-[-0.015em] text-locro-ink">
                {item.sector}
              </h3>

              <div className="mt-5 space-y-3.5">
                <div className="rounded-[14px] border border-locro-border bg-locro-bg px-4 py-3.5">
                  <p className="font-mono text-[11.5px] font-medium uppercase tracking-wide text-locro-ink-muted">
                    Problema que resuelve
                  </p>
                  <p className="mt-1.5 text-[14.5px] leading-[1.55] text-locro-ink-muted">
                    {item.problem}
                  </p>
                </div>

                <div className="rounded-[14px] border border-locro-border bg-locro-surface px-4 py-3.5">
                  <p className="font-mono text-[11.5px] font-medium uppercase tracking-wide text-locro-accent">
                    Qué incluye la solución
                  </p>
                  <p className="mt-1.5 text-[14.5px] leading-[1.55] text-locro-ink">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-locro-border pt-4">
              {item.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-[8px] border border-locro-border bg-locro-bg px-2.5 py-1 font-mono text-[11.5px] text-locro-ink-muted"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
