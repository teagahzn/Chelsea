import { Reveal } from "../Reveal";

const values = [
  ["Descoberta", "Os microplásticos são um problema grave e negligenciado."],
  ["Inovação", "Solução original com materiais simples e recicláveis."],
  ["Impacto", "Uma ideia pequena pode gerar mudanças reais."],
  ["Inclusão", "Solução acessível a todos, independentemente de renda."],
  ["Trabalho em equipe", "Cada integrante contribuiu com suas habilidades."],
  ["Diversão", "O processo de criação e teste foi motivador e prazeroso."],
];

export function Conclusao() {
  return (
    <section
      id="conclusao"
      className="relative overflow-hidden border-b border-border bg-gradient-to-br from-royal-deep via-ink to-black text-white py-24 md:py-32"
    >
      <div className="absolute inset-0 grid-tech opacity-30" />
      <div className="absolute -top-32 right-1/4 h-[500px] w-[500px] bg-royal-glow/30 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-royal-glow font-semibold">
            <span className="inline-block h-px w-8 bg-royal-glow" />
            Conclusão
          </div>
          <h2 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-tight md:text-5xl text-balance">
            Inovação não depende de alta tecnologia.{" "}
            <span className="text-royal-glow">Depende de propósito.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white/90">
                Core Values FIRST LEGO League
              </h3>
              <div className="mt-6 grid gap-px bg-white/10 sm:grid-cols-2">
                {values.map(([k, v], i) => (
                  <div key={k} className="bg-ink/60 p-5">
                    <div className="font-mono text-xs text-royal-glow">0{i + 1}</div>
                    <div className="mt-1 font-display font-bold text-white">{k}</div>
                    <p className="mt-2 text-sm text-white/75 leading-relaxed">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <div className="border border-white/15 bg-white/[0.04] p-8 backdrop-blur">
              <h3 className="font-display text-xl font-bold">Reconhecendo limites</h3>
              <p className="mt-4 text-white/85 leading-relaxed">
                O MICROTRAP™ não é uma solução definitiva para o problema global dos
                microplásticos. Possui limitações de vazão, requer manutenção periódica e não
                substitui políticas públicas efetivas de redução de plásticos e saneamento.
              </p>
              <p className="mt-4 text-white/85 leading-relaxed">
                É, porém, uma <strong className="text-royal-glow">solução complementar,
                educativa e de base</strong> — pronta para ser adotada por comunidades, escolas
                e projetos ambientais imediatamente, sem grandes investimentos.
              </p>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="font-display text-lg font-bold leading-tight text-balance">
                  "A vida se conecta — e cabe a nós manter essas conexões limpas."
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/50">
                  — Equipe Chelsea Robotics
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
