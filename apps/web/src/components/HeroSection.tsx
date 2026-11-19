import Image from "next/image";

const proofPoints = [
  { value: "20 min", label: "diagnóstico inicial sin cargo" },
  { value: "1 a 4 sem", label: "primeras soluciones en producción" },
  { value: "100%", label: "código y flujos a tu nombre" },
];

export function HeroSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 pt-8 pb-12 sm:px-8 sm:pt-12 sm:pb-16">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        {/* Bloque Principal Izquierdo */}
        <div className="bento-card flex flex-col justify-between p-7 sm:p-10 lg:col-span-7">
          <div>
            <p className="font-mono text-[13px] font-medium tracking-wide text-locro-ink-muted">
              ia &amp; software a medida_
            </p>

            <h1 className="mt-5 font-display text-[36px] leading-[1.08] font-bold tracking-[-0.03em] text-locro-ink sm:text-[50px] lg:text-[54px]">
              Integramos IA y software sobre lo que tu Pyme ya usa.
            </h1>

            <p className="mt-6 max-w-xl text-[17px] leading-[1.6] text-locro-ink-muted sm:text-[18px]">
              Automatizamos procesos operativos, armamos agentes de IA útiles y
              desarrollamos herramientas a medida conectadas a tus planillas,
              WhatsApp y sistema de gestión. Sin tirar todo ni empezar de cero.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#diagnostico"
              className="inline-flex items-center justify-center rounded-[12px] bg-locro-accent px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-locro-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-locro-accent focus-visible:ring-offset-2 focus-visible:ring-offset-locro-surface"
            >
              Agendá un diagnóstico de 20 min
            </a>
            <a
              href="#proceso"
              className="inline-flex items-center justify-center rounded-[12px] border-[1.5px] border-locro-ink px-6 py-3.5 text-[15px] font-semibold text-locro-ink transition-colors hover:bg-locro-ink hover:text-locro-ink-on-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-locro-accent focus-visible:ring-offset-2 focus-visible:ring-offset-locro-surface"
            >
              Ver cómo trabajamos
            </a>
          </div>
        </div>

        {/* Columna Derecha Bento: Isotipo + Datos clave */}
        <div className="flex flex-col gap-5 lg:col-span-5">
          <div className="bento-card flex flex-1 flex-col items-center justify-between p-7 text-center sm:p-8">
            <div className="flex w-full items-center justify-between font-mono text-[12px] text-locro-ink-muted">
              <span>{`{ locro. }`}</span>
              <span>pymes · argentina</span>
            </div>

            <div className="my-4 flex items-center justify-center">
              <Image
                src="/brand/isotipo.svg"
                alt="Isotipo de Locro: cazuela minimalista de circuito con rombos de datos y vapor binario"
                width={220}
                height={220}
                priority
                className="h-[200px] w-[200px] sm:h-[220px] sm:w-[220px]"
              />
            </div>

            <p className="font-mono text-[12.5px] text-locro-ink-muted">
              <span className="text-locro-accent">{"//"}</span> sistemas + datos +
              ia en la misma olla
            </p>
          </div>

          <div className="rounded-[20px] bg-locro-surface-dark p-6 text-locro-ink-on-dark sm:p-7">
            <div className="grid grid-cols-3 gap-4">
              {proofPoints.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span className="font-display text-[22px] leading-tight font-bold tracking-[-0.02em] text-locro-maize sm:text-[26px]">
                    {item.value}
                  </span>
                  <span className="mt-1.5 text-[12.5px] leading-[1.35] text-locro-border">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
