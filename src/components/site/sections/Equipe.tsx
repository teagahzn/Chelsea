import { Reveal } from "../Reveal";
import { SectionHeader } from "./SectionHeader";

const members = [
  { name: "Mateus", role: "Pesquisa" },
  { name: "Costalonga", role: "Engenharia" },
  { name: "Jão Fylipe", role: "Prototipagem" },
  { name: "Gael", role: "Testes" },
  { name: "Matheus", role: "Documentação" },
  { name: "Emanuel", role: "Comunicação" },
];

function initials(name: string) {
  const parts = name.split(" ");
  return (parts[0][0] + (parts[1]?.[0] ?? parts[0][1] ?? "")).toUpperCase();
}

export function Equipe() {
  return (
    <section id="equipe" className="relative overflow-hidden border-b border-border bg-ink text-white py-24 md:py-32">
      <div className="absolute inset-0 grid-tech opacity-25" />
      <div className="absolute top-1/4 -left-32 h-[400px] w-[400px] bg-royal/40 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-royal-glow font-semibold">
            <span className="inline-block h-px w-8 bg-royal-glow" />
            A Equipe
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl text-balance">
            Chelsea Robotics — seis estudantes, um oceano de propósito.
          </h2>
          <p className="mt-6 text-white/80 text-balance">
            Equipe formada por seis estudantes do Ensino Fundamental II. O nome é uma referência
            ao <strong className="text-white">Chelsea Football Club</strong> da Inglaterra, e as
            cores — <span className="text-royal-glow font-semibold">azul royal</span> e branco —
            representam simbolicamente os oceanos que o projeto busca proteger.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m, i) => (
            <Reveal key={m.name} delay={i * 70}>
              <article className="group relative h-full bg-ink p-7 transition-colors hover:bg-royal/20">
                <div className="flex items-start justify-between">
                  <div className="relative flex h-20 w-20 items-center justify-center bg-gradient-to-br from-royal to-royal-glow font-display text-2xl font-bold text-white shadow-[0_10px_30px_-10px_oklch(0.62_0.20_256/0.7)]">
                    {initials(m.name)}
                    <span className="absolute -bottom-1 -right-1 h-3 w-3 bg-white" />
                  </div>
                  <span className="font-mono text-xs text-white/40">CR_0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold">{m.name}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-royal-glow mt-1">
                  {m.role}
                </p>
                <div className="mt-6 h-px w-12 bg-white/30 transition-all duration-500 group-hover:w-full group-hover:bg-royal-glow" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
