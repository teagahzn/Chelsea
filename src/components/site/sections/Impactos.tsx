import { Reveal } from "../Reveal";
import { SectionHeader } from "./SectionHeader";
import { Leaf, Users, TrendingUp, BookOpen } from "lucide-react";

const blocks = [
  {
    icon: Leaf,
    label: "Ambientais",
    rows: [
      ["Redução de microplásticos", "Captura antes que atinjam o oceano"],
      ["Qualidade da água", "Melhoria localizada em pequenos cursos d'água"],
      ["Biodiversidade", "Menos ingestão de plástico por peixes"],
      ["Toxicidade", "Carvão ativado absorve toxinas"],
      ["Ecossistemas", "Protege manguezais, recifes e estuários"],
    ],
  },
  {
    icon: Users,
    label: "Sociais",
    rows: [
      ["Conscientização", "Comunidades aprendem sobre o problema na prática"],
      ["Autonomia", "Construção e operação sem tecnologia cara"],
      ["Educação", "Ferramenta pedagógica em ciências e biologia"],
      ["Saúde", "Redução indireta de exposição a contaminantes"],
      ["Engajamento", "Moradores tornam-se agentes ativos"],
    ],
  },
  {
    icon: TrendingUp,
    label: "Econômicos",
    rows: [
      ["Custo de implementação", "Praticamente zero — materiais recicláveis"],
      ["Geração de renda", "Produção e venda para escolas e ONGs"],
      ["Preservação da pesca", "Mantém populações de peixes saudáveis"],
      ["Baixa manutenção", "Troca periódica de algodão e carvão"],
      ["Escalabilidade", "Replicável em larga escala"],
    ],
  },
  {
    icon: BookOpen,
    label: "Educacionais",
    rows: [
      ["Aprendizagem prática", "Alunos constroem e entendem o ciclo da água"],
      ["Ciência cidadã", "Comunidades monitoram qualidade antes/depois"],
      ["Pensamento crítico", "Revela um problema invisível"],
      ["Interdisciplinaridade", "Biologia, química, engenharia e cidadania"],
      ["Protagonismo juvenil", "Estudantes viram multiplicadores"],
    ],
  },
];

export function Impactos() {
  return (
    <section id="impactos" className="relative border-b border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          eyebrow="Impactos Positivos"
          title="Pequenas ações. Consequências em larga escala."
          description="Os efeitos do MICROTRAP™ se propagam em quatro dimensões interligadas — meio ambiente, sociedade, economia e educação."
        />

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
          {blocks.map((b, i) => (
            <Reveal key={b.label} delay={i * 80}>
              <div className="h-full bg-card p-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center bg-royal text-white">
                    <b.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="font-display text-2xl font-bold">{b.label}</h3>
                </div>
                <ul className="mt-6 divide-y divide-border">
                  {b.rows.map(([k, v]) => (
                    <li key={k} className="grid grid-cols-[1fr_1.4fr] gap-4 py-3 text-sm">
                      <span className="font-medium text-foreground">{k}</span>
                      <span className="text-muted-foreground">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 relative overflow-hidden border border-royal bg-royal text-white p-10 md:p-14">
            <div className="absolute inset-0 grid-tech opacity-25" />
            <div className="absolute -right-20 -bottom-20 h-80 w-80 bg-royal-glow/40 blur-[120px]" />
            <div className="relative max-w-3xl">
              <div className="text-xs uppercase tracking-[0.3em] text-white/70 font-semibold">
                Em escala global
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold leading-tight md:text-3xl text-balance">
                Uma rede distribuída de filtragem de baixo custo, criada por comunidades,
                escolas e estudantes.
              </h3>
              <p className="mt-5 text-white/85 leading-relaxed">
                Se amplamente adotado, o MICROTRAP™ pode reduzir significativamente a carga de
                microplásticos transportada por pequenos rios para os oceanos, gerar dados
                comunitários sobre regiões não monitoradas e pressionar governos por políticas
                mais rigorosas contra plásticos de uso único.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
