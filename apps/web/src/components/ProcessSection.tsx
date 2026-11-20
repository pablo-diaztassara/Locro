const steps = [
  {
    number: "// 01",
    title: "Diagnóstico de 20 min",
    duration: "Día 1 · Sin cargo",
    description:
      "Charlamos sobre tu operación actual y detectamos 1 o 2 procesos con retorno rápido. En menos de 48h hábiles te enviamos una propuesta clara con alcance cerrado.",
  },
  {
    number: "// 02",
    title: "Prototipo funcional",
    duration: "Semana 1",
    description:
      "No desaparecemos tres meses: en los primeros días ya ves el flujo, agente o pantalla funcionando con casos reales de tu negocio para ajustar detalles rápido.",
  },
  {
    number: "// 03",
    title: "Integración y entrega",
    duration: "Salida a producción",
    description:
      "Lo conectamos a tus herramientas actuales, capacitamos a tu equipo en 45 minutos y te entregamos código, flujos y accesos 100% a nombre de tu empresa.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="proceso"
      className="mx-auto max-w-[1200px] scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16"
    >
      <div className="max-w-2xl">
        <p className="font-mono text-[13px] font-medium text-locro-accent">
          {"// 04 cómo trabajamos"}
        </p>
        <h2 className="mt-3 font-display text-[28px] leading-[1.15] font-bold tracking-[-0.02em] text-locro-ink sm:text-[36px]">
          Sin proyectos eternos ni sorpresas
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bento-card flex flex-col justify-between p-7"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[14px] font-medium text-locro-accent">
                  {step.number}
                </span>
                <span className="font-mono text-[12px] text-locro-ink-muted">
                  {step.duration}
                </span>
              </div>
              <h3 className="mt-4 font-display text-[22px] leading-[1.25] font-semibold tracking-[-0.015em] text-locro-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-locro-ink-muted">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
