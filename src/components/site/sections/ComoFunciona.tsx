import { Reveal } from "../Reveal";
import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    n: "01",
    title: "Coleta da água",
    text: "Água contaminada de pequenos rios, ribeirões ou drenagem é despejada na entrada do filtro.",
  },
  {
    n: "02",
    title: "Pré-filtro de pedriscos",
    text: "A primeira camada retém detritos maiores e impurezas grosseiras visíveis a olho nu.",
  },
  {
    n: "03",
    title: "Filtragem por areia e fibra",
    text: "Camadas de areia e fibra de coco capturam partículas médias e desaceleram o fluxo.",
  },
  {
    n: "04",
    title: "Carvão ativado",
    text: "Absorve toxinas e substâncias químicas associadas aos microplásticos.",
  },
  {
    n: "05",
    title: "Algodão — retenção fina",
    text: "Última camada de filtragem captura as menores partículas, incluindo microplásticos.",
  },
  {
    n: "06",
    title: "Água filtrada",
    text: "Sai pela base, cristalina, com redução significativa de impurezas. Sem energia — só gravidade.",
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="relative border-b border-border bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          eyebrow="Como Funciona"
          title="Seis camadas de engenharia simples e eficaz"
          description="Da entrada à saída, cada camada cumpre uma função específica — sem eletricidade, sem bombas, apenas a força da gravidade."
        />

        <div className="mt-16 relative">
          {/* vertical line */}
          <div className="pointer-events-none absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2" />

          <div className="space-y-10">
            {steps.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <Reveal key={s.n} variant={right ? "right" : "left"}>
                  <div
                    className={`relative grid gap-6 md:grid-cols-2 ${
                      right ? "md:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className={`pl-16 md:pl-0 ${right ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                      <span className="font-display text-5xl font-bold text-royal/30 md:text-6xl">
                        {s.n}
                      </span>
                      <h3 className="mt-2 font-display text-xl font-bold md:text-2xl">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                        {s.text}
                      </p>
                    </div>
                    <div className="hidden md:block" />
                    {/* dot */}
                    <span className="absolute left-6 top-2 z-10 h-3 w-3 -translate-x-1/2 bg-royal shadow-[0_0_0_4px_var(--color-card)] md:left-1/2" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
