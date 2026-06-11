import { Reveal } from "../Reveal";
import { SectionHeader } from "./SectionHeader";
import { Leaf, Cpu, Recycle } from "lucide-react";

export function Sobre() {
  return (
    <section id="sobre" className="relative border-b border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          eyebrow="Sobre o Projeto"
          title="BIOGLOW™ — onde a vida se conecta"
          description="Sob o tema BIOGLOW™ — A vida se conecta, do Torneio Interno de Robótica 2026, a Chelsea Robotics desenvolveu um projeto de inovação focado em um problema ambiental grave e frequentemente negligenciado: a contaminação de rios e oceanos por microplásticos."
        />

        <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
          {[
            {
              icon: Leaf,
              title: "Sustentabilidade",
              text: "Solução construída inteiramente com materiais recicláveis, naturais e de baixíssimo custo — acessível a qualquer comunidade.",
            },
            {
              icon: Cpu,
              title: "Robótica & Engenharia",
              text: "Projeto desenhado, testado e iterado por estudantes do Ensino Fundamental II, aplicando método científico real.",
            },
            {
              icon: Recycle,
              title: "Impacto Real",
              text: "Captura microplásticos antes que avancem pelos rios e atinjam os oceanos, protegendo ecossistemas e cadeias alimentares.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="group relative h-full bg-card p-8 transition-colors hover:bg-accent/40">
                <div className="absolute top-0 left-0 h-1 w-12 bg-royal transition-all duration-500 group-hover:w-full" />
                <c.icon className="h-8 w-8 text-royal" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-xl font-bold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
