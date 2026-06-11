import { Reveal } from "../Reveal";
import { SectionHeader } from "./SectionHeader";
import { Fish, Utensils, Users, TreePine, Hourglass } from "lucide-react";

const groups = [
  {
    icon: Fish,
    title: "Animais marinhos",
    text: "Peixes, tartarugas, baleias e aves marinhas confundem microplásticos com alimento. Mais de 800 espécies sofrem com obstrução intestinal, desnutrição e morte.",
  },
  {
    icon: Utensils,
    title: "Cadeia alimentar humana",
    text: "Os microplásticos sobem na cadeia alimentar. Uma pessoa pode consumir cerca de 5g de plástico por semana via peixes e frutos do mar contaminados.",
  },
  {
    icon: Users,
    title: "Comunidades ribeirinhas",
    text: "Populações que vivem das margens dos rios e da pesca veem sua renda, alimentação e qualidade de água diretamente comprometidas pela poluição.",
  },
  {
    icon: TreePine,
    title: "Ecossistemas inteiros",
    text: "Microplásticos carregam toxinas, alteram o equilíbrio aquático, prejudicam a biodiversidade e comprometem a reprodução de espécies essenciais.",
  },
  {
    icon: Hourglass,
    title: "Gerações futuras",
    text: "Sem ação, a concentração de microplásticos só aumenta. As próximas gerações herdam um ambiente mais degradado e recursos comprometidos.",
  },
];

export function Afetados() {
  return (
    <section id="afetados" className="relative border-b border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          eyebrow="Quem é Afetado"
          title="O impacto se espalha por toda a cadeia da vida"
          description="A poluição por microplásticos não escolhe vítima — atinge desde o plâncton até o ser humano, passando por economias inteiras."
        />

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 80}>
              <article className="group relative h-full bg-card p-8 transition-all hover:bg-royal hover:text-white">
                <div className="flex items-start justify-between">
                  <span className="font-display text-4xl font-bold text-royal/30 group-hover:text-white/40">
                    0{i + 1}
                  </span>
                  <g.icon
                    className="h-8 w-8 text-royal group-hover:text-white transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold">{g.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-white/90 transition-colors">
                  {g.text}
                </p>
              </article>
            </Reveal>
          ))}
          {/* filler */}
          <div className="hidden lg:block bg-card relative overflow-hidden">
            <div className="absolute inset-0 diagonal-stripes opacity-40" />
            <div className="relative h-full p-8 flex items-end">
              <p className="font-display text-xl font-bold leading-tight text-balance">
                Um problema invisível.{" "}
                <span className="text-royal">Um impacto gigantesco.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
