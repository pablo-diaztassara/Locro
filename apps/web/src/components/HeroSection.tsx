const proofPoints = [
  {
    title: "Sobre lo que ya usás",
    detail:
      "Nos integramos a tu ERP, planillas y herramientas actuales sin obligarte a empezar de cero.",
  },
  {
    title: "IA donde suma",
    detail:
      "Automatizamos tareas operativas con criterio técnico y retorno medible.",
  },
  {
    title: "De punta a punta",
    detail:
      "Un solo equipo desde el diagnóstico inicial hasta el soporte y evolución en producción.",
  },
];

export function HeroSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 pt-8 pb-12 sm:px-8 sm:pt-12 sm:pb-16">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        {/* Bloque Principal Izquierdo */}
        <div className="bento-card flex flex-col justify-between p-7 sm:p-10 lg:col-span-8">
          <div>
            <p className="font-mono text-[13px] font-medium tracking-wide text-locro-ink-muted">
              ia &amp; software a medida_
            </p>

            <h1 className="mt-5 font-display text-[36px] leading-[1.08] font-bold tracking-[-0.03em] text-locro-ink sm:text-[50px] lg:text-[54px]">
              Software a medida, integrado a tus procesos y potenciado con IA.
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] leading-[1.6] text-locro-ink-muted sm:text-[18px]">
              Empezamos con una charla para detectar dónde duele tu operación.
              Diseñamos el plan en conjunto, desarrollamos con una estrategia
              clara de implementación y te acompañamos con seguimiento y
              mejora continua.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#diagnostico"
              className="inline-flex items-center justify-center rounded-[12px] bg-locro-accent px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-locro-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-locro-accent focus-visible:ring-offset-2 focus-visible:ring-offset-locro-surface"
            >
              Hablemos
            </a>
            <a
              href="#proceso"
              className="inline-flex items-center justify-center rounded-[12px] border-[1.5px] border-locro-ink px-6 py-3.5 text-[15px] font-semibold text-locro-ink transition-colors hover:bg-locro-ink hover:text-locro-bg focus:outline-none focus-visible:ring-2 focus-visible:ring-locro-accent focus-visible:ring-offset-2 focus-visible:ring-offset-locro-surface"
            >
              Ver cómo trabajamos
            </a>
          </div>
        </div>

        {/* Columna Derecha Bento: Datos clave */}
        <div className="flex flex-col justify-between rounded-[20px] bg-locro-surface-dark p-7 text-locro-ink-on-dark sm:p-8 lg:col-span-4">
          <div className="flex items-center justify-between font-mono text-[12px] text-locro-sand/80">
            <span>{`{ locro. }`}</span>
          </div>

          <div className="my-6 divide-y divide-locro-sand/15">
            {proofPoints.map((item) => (
              <div key={item.title} className="py-4 first:pt-0 last:pb-0">
                <span className="font-display text-[22px] leading-tight font-bold tracking-[-0.02em] text-locro-maize sm:text-[24px]">
                  {item.title}
                </span>
                <p className="mt-1.5 text-[14px] leading-[1.5] text-locro-sand/85">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <p className="font-mono text-[12px] text-locro-sand/75">
            <span className="text-locro-accent">{"//"}</span> diagnóstico · desarrollo · seguimiento
          </p>
        </div>
      </div>
    </section>
  );
}
