const problems = [
  {
    code: "// 01",
    title: "Consultas que se enfrían",
    description:
      "Mensajes por WhatsApp o web que tardan horas en responderse y ventas que se pierden fuera de horario comercial.",
  },
  {
    code: "// 02",
    title: "Carga manual duplicada",
    description:
      "Tu equipo copia datos todos los días desde PDFs, mails o chats hacia planillas de Excel o al sistema de gestión.",
  },
  {
    code: "// 03",
    title: "Presupuestos sin seguimiento",
    description:
      "Se cotiza bien, pero nadie retoma a los 3 días porque no hay alertas ni un CRM ordenado que avise a tiempo.",
  },
  {
    code: "// 04",
    title: "Datos dispersos para decidir",
    description:
      "Para saber ventas, stock o estado de pedidos tenés que pedirle un reporte manual a alguien todas las semanas.",
  },
];

const existingTools = [
  "WhatsApp Business",
  "Google Sheets / Excel",
  "Gmail",
  "Tango / Colppy / Xubio",
  "Odoo",
  "Tiendanube",
  "Mercado Libre",
  "n8n",
];

export function ProblemsSection() {
  return (
    <section
      id="problemas"
      className="mx-auto max-w-[1200px] scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16"
    >
      <div className="max-w-2xl">
        <p className="font-mono text-[13px] font-medium text-locro-accent">
          {"// 01 el problema hoy"}
        </p>
        <h2 className="mt-3 font-display text-[28px] leading-[1.15] font-bold tracking-[-0.02em] text-locro-ink sm:text-[36px]">
          Donde hoy se te escapan horas y ventas
        </h2>
        <p className="mt-3 text-[16px] leading-[1.6] text-locro-ink-muted">
          No hace falta cambiar todo tu negocio para ordenar la operación.
          Atacamos los cuellos de botella concretos que hoy frenan a tu equipo.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((problem) => (
          <article
            key={problem.code}
            className="bento-card bento-card-interactive flex flex-col justify-between p-6"
          >
            <div>
              <span className="font-mono text-[12px] font-medium text-locro-accent">
                {problem.code}
              </span>
              <h3 className="mt-3 font-display text-[20px] leading-[1.25] font-semibold tracking-[-0.015em] text-locro-ink">
                {problem.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-locro-ink-muted">
                {problem.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="bento-card mt-5 flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <span className="shrink-0 font-mono text-[13px] font-medium text-locro-ink">
          Nos montamos sobre lo que ya usás:
        </span>
        <div className="flex flex-wrap gap-2">
          {existingTools.map((tool) => (
            <span
              key={tool}
              className="rounded-[8px] border border-locro-border bg-locro-bg px-3 py-1 font-mono text-[12px] text-locro-ink-muted"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
