import { Reveal } from "../Reveal";
import { CircleDollarSign, Wrench, GraduationCap, Layers, Zap, Heart } from "lucide-react";

const pillars = [
  { icon: CircleDollarSign, title: "Baixíssimo custo", text: "Materiais recicláveis ou de fácil acesso: PET, algodão, carvão, areia." },
  { icon: Wrench, title: "Acessibilidade", text: "Qualquer pessoa pode construir, sem conhecimento técnico ou poder aquisitivo." },
  { icon: Heart, title: "Sustentável", text: "Maioria dos componentes é reutilizável ou biodegradável." },
  { icon: GraduationCap, title: "Educativo", text: "Construção e operação conscientizam sobre o problema dos microplásticos." },
  { icon: Layers, title: "Modular", text: "Múltiplos filtros em série aumentam eficiência e vazão." },
  { icon: Zap, title: "Sem energia", text: "Funciona exclusivamente por gravidade — ideal para áreas remotas." },
];

export function Solucao() {
  return (
    <section id="solucao" className="relative overflow-hidden border-b border-border bg-background py-24 md:py-32">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-accent/40 to-transparent -z-10" />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-royal font-semibold">
                <span className="inline-block h-px w-8 bg-royal" />
                Nossa Solução
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl text-balance">
                MICROTRAP™ <br />
                <span className="text-royal">A armadilha para microplásticos</span>
              </h2>
              <p className="mt-6 text-base text-muted-foreground md:text-lg leading-relaxed">
                <strong className="text-foreground">MICRO</strong> — partículas minúsculas que o
                filtro captura. <strong className="text-foreground">TRAP</strong> — do inglês,
                armadilha. Um filtro de baixo custo, construído com materiais recicláveis e
                naturais, projetado para reter microplásticos em pequenos cursos d'água antes que
                atinjam o oceano.
              </p>
            </div>
          </Reveal>

          <Reveal variant="right">
            <div className="relative border border-border bg-card p-8 shadow-[0_20px_60px_-30px_oklch(0.42_0.18_260/0.5)]">
              <div className="absolute -top-3 left-8 bg-royal px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                Protótipo · v2
              </div>
              <div className="font-display text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Materiais utilizados
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  ["Garrafa PET 2L", "estrutura principal"],
                  ["Carvão ativado", "absorve toxinas"],
                  ["Algodão", "retenção fina"],
                  ["Areia", "filtragem média"],
                  ["Pedriscos", "pré-filtro"],
                  ["Fibra de coco", "filtragem natural"],
                ].map(([mat, fn], i) => (
                  <li
                    key={mat}
                    className="flex items-baseline justify-between border-b border-dashed border-border pb-2 text-sm"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-royal">
                        0{i + 1}
                      </span>
                      <span className="font-medium">{mat}</span>
                    </span>
                    <span className="text-xs text-muted-foreground">{fn}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-border pt-4 text-xs uppercase tracking-wider text-muted-foreground">
                + Vazão melhorada em <span className="text-royal font-bold">30%</span> após
                ajustes no protótipo.
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className="group h-full bg-background p-7 hover:bg-card transition-colors">
                <p.icon className="h-7 w-7 text-royal" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
