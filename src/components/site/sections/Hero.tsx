import { ArrowDown, Droplets, Sparkles } from "lucide-react";
import { useTypewriter } from "@/hooks/use-typewriter";

export function Hero() {
  const { text, done } = useTypewriter("BIOGLOW™ — A Vida se Conecta", 55, 400);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink text-white"
    >
      {/* gradient + grid */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-royal-deep via-ink to-black" />
      <div className="absolute inset-0 -z-10 grid-tech opacity-60" />
      <div className="absolute -top-32 -right-32 -z-10 h-[480px] w-[480px] rounded-none bg-royal-glow/30 blur-[140px]" />
      <div className="absolute -bottom-40 -left-20 -z-10 h-[420px] w-[420px] bg-royal/40 blur-[160px]" />
      {/* diagonal stripe accent */}
      <div className="absolute right-0 top-0 -z-10 h-full w-1/3 diagonal-stripes opacity-50" />

      <div className="mx-auto w-full max-w-7xl px-4 py-24 md:px-8 md:py-32">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-royal-glow font-medium">
          <span className="inline-block h-px w-8 bg-royal-glow" />
          <Sparkles className="h-3.5 w-3.5" />
          Torneio Interno de Robótica · 2026
        </div>

        <h1 className="mt-6 max-w-5xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl text-balance">
          <span className="block">{text}</span>
          <span
            className={`inline-block h-[0.9em] w-[3px] translate-y-[0.12em] bg-royal-glow ${
              done ? "animate-pulse" : "animate-pulse"
            }`}
          />
        </h1>

        <p className="mt-8 max-w-2xl text-base text-white/80 md:text-lg">
          A equipe <strong className="text-white">Chelsea Robotics</strong> apresenta o{" "}
          <span className="text-royal-glow font-semibold">MICROTRAP™</span> — um filtro
          sustentável, de baixo custo, feito com garrafas PET e materiais recicláveis para
          capturar microplásticos antes que cheguem aos oceanos.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#sobre"
            className="group inline-flex items-center gap-3 bg-royal-glow px-7 py-4 text-sm font-semibold uppercase tracking-wider text-ink shadow-[0_10px_30px_-10px_oklch(0.62_0.20_256/0.8)] transition-transform hover:-translate-y-0.5"
          >
            Conheça o projeto
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#solucao"
            className="inline-flex items-center gap-2 border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur transition-colors hover:border-royal-glow hover:bg-white/10"
          >
            <Droplets className="h-4 w-4" />
            Ver o MICROTRAP™
          </a>
        </div>

        {/* stats strip */}
        <div className="mt-16 grid max-w-3xl grid-cols-2 gap-px border border-white/10 bg-white/5 backdrop-blur md:grid-cols-3">
          {[
            { v: "90%", l: "do plástico oceânico vem de rios" },
            { v: "5g", l: "de plástico ingerido / semana" },
            { v: "800+", l: "espécies marinhas afetadas" },
          ].map((s) => (
            <div
              key={s.v}
              className="border border-white/5 bg-ink/40 p-5 md:p-6"
            >
              <div className="font-display text-3xl font-bold text-royal-glow md:text-4xl">
                {s.v}
              </div>
              <div className="mt-1 text-xs text-white/70 md:text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-[10px] uppercase tracking-[0.25em] text-white/60 md:px-8 md:text-xs">
          <span>// CR · 2026 · BIOGLOW™</span>
          <span className="hidden md:inline">Microplásticos · Rios · Oceanos</span>
          <span>FILTRO_001 · ATIVO</span>
        </div>
      </div>
    </section>
  );
}
