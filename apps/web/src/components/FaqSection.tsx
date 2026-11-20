"use client";

import { useEffect, useId, useRef, useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "¿Necesito saber de tecnología para usar lo que arman?",
    answer:
      "Para nada. Diseñamos todo para que tu equipo siga operando desde las herramientas que ya conoce (WhatsApp, planillas, mail o su ERP) y entregamos una capacitación práctica de 45 minutos junto con guías simples en español.",
  },
  {
    question: "¿Esto reemplaza a mi equipo?",
    answer:
      "No. La idea es sacarle de encima la carga repetitiva —copiar datos, responder siempre lo mismo o cruzar planillas— para que tu gente dedique esas horas a vender mejor, atender casos complejos y tomar decisiones.",
  },
  {
    question: "¿A nombre de quién quedan el código, las cuentas y los flujos?",
    answer:
      "100% a nombre de tu empresa, desde el día uno. No usamos plataformas cerradas ni te atamos con licencias propietarias: el código, los flujos de n8n y las credenciales son tuyos, sin lock-in.",
  },
  {
    question:
      "¿Cómo se arranca sin comprometer un presupuesto grande de entrada?",
    answer:
      "Arrancamos con un diagnóstico de 20 minutos sin cargo y proponemos un primer módulo chico, con alcance cerrado y retorno rápido (1 a 4 semanas). Recién cuando ves resultados reales decidís si querés seguir sumando procesos.",
  },
  {
    question: "¿Qué costos externos hay aparte del desarrollo?",
    answer:
      "Total transparencia: los consumos de terceros —como APIs de IA (OpenAI/Anthropic), WhatsApp Business API o hosting— se configuran directo en cuentas a tu nombre, sin recargos ocultos. Antes de arrancar te estimamos ese gasto mensual.",
  },
  {
    question: "¿Qué pasa si algo falla o quiero sumar funciones después?",
    answer:
      "Cada entrega incluye capacitación para tu equipo, documentación clara y garantía para ajustes iniciales. Además, si querés seguir sumando módulos o delegar el mantenimiento, ofrecemos un abono mensual opcional de soporte y evolución continua.",
  },
];

export function FaqSection() {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({
    0: true,
  });
  const sectionHeadingId = useId();
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const cleanups: Array<() => void> = [];

    panelRefs.current.forEach((panel, index) => {
      if (!panel) return;
      const handleBeforeMatch = () => {
        setOpenItems((prev) => ({ ...prev, [index]: true }));
      };
      panel.addEventListener("beforematch", handleBeforeMatch);
      cleanups.push(() =>
        panel.removeEventListener("beforematch", handleBeforeMatch)
      );
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section
      id="preguntas"
      aria-labelledby={sectionHeadingId}
      className="mx-auto max-w-[1200px] scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-[13px] font-medium text-locro-accent">
            {"// 05 preguntas frecuentes"}
          </p>
          <h2
            id={sectionHeadingId}
            className="mt-3 font-display text-[28px] leading-[1.15] font-bold tracking-[-0.02em] text-locro-ink sm:text-[36px]"
          >
            Lo que más nos preguntan antes de empezar
          </h2>
          <p className="mt-3 text-[15.5px] leading-[1.6] text-locro-ink-muted">
            Respuestas directas sobre cómo trabajamos, costos y propiedad de tus
            herramientas. Si te queda alguna duda puntual, la vemos en el
            diagnóstico.
          </p>
        </div>

        <div className="space-y-3 lg:col-span-8">
          {faqItems.map((item, index) => {
            const isOpen = Boolean(openItems[index]);

            return (
              <div key={item.question} className="bento-card overflow-hidden">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleItem(index)}
                    className="flex w-full cursor-pointer items-center gap-3.5 px-6 py-5 text-left transition-colors hover:bg-locro-bg/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-locro-accent sm:px-7"
                  >
                    <span
                      aria-hidden="true"
                      className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-locro-border bg-locro-bg text-locro-accent motion-safe:transition-transform motion-safe:duration-200 ${
                        isOpen ? "rotate-90" : "rotate-0"
                      }`}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M4.5 2.5L8 6L4.5 9.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="font-display text-[17px] leading-[1.35] font-semibold tracking-[-0.01em] text-locro-ink sm:text-[18px]">
                      {item.question}
                    </span>
                  </button>
                </h3>

                <div
                  ref={(el) => {
                    panelRefs.current[index] = el;
                  }}
                  hidden={
                    isOpen ? undefined : ("until-found" as unknown as boolean)
                  }
                >
                  <div className="border-t border-locro-border/70 px-6 pt-4 pb-5 pl-[62px] sm:px-7 sm:pl-[66px]">
                    <p className="text-[15px] leading-[1.65] text-locro-ink-muted">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
