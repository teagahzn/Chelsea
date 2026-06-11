import { Reveal } from "../Reveal";
import { SectionHeader } from "./SectionHeader";
import { Target, Network, FlaskConical, Globe2 } from "lucide-react";

const goals = [
  {
    icon: FlaskConical,
    title: "Validação científica",
    text: "Realizar testes laboratoriais quantitativos da eficiência de retenção real de microplásticos.",
  },
  {
    icon: Network,
    title: "Rede de escolas",
    text: "Distribuir o passo a passo para escolas públicas e ONGs, formando multiplicadores em ciência ambiental.",
  },
  {
    icon: Target,
    title: "Versão v3 modular",
    text: "Evoluir o protótipo para um sistema modular acoplável, com troca rápida de camadas filtrantes.",
  },
  {
    icon: Globe2,
    title: "Expansão a comunidades",
    text: "Levar o MICROTRAP™ a comunidades ribeirinhas, gerando dados abertos sobre poluição local.",
  },
];

export function Objetivos() {
  return (
    <section id="objetivos" className="relative border-b border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          eyebrow="Objetivos Futuros"
          title="Próximos passos do MICROTRAP™"
          description="O projeto não termina no torneio. A equipe Chelsea Robotics planeja evoluir o protótipo, expandir alcance e formar mais agentes ambientais."
        />

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
          {goals.map((g, i) => (
            <Reveal key={g.title} delay={i * 80}>
              <div className="group relative h-full overflow-hidden bg-card p-8 md:p-10">
                <span className="absolute right-6 top-6 font-display text-5xl font-bold text-royal/10 group-hover:text-royal/30 transition-colors">
                  →
                </span>
                <g.icon className="h-8 w-8 text-royal" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-xl font-bold">{g.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{g.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
