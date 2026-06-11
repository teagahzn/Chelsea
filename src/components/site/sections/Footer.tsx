export function Footer() {
  return (
    <footer className="relative bg-ink text-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-royal via-royal-glow to-royal" />
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative inline-flex h-10 w-10 items-center justify-center bg-royal text-white font-display font-bold">
                CR
                <span className="absolute -bottom-1 -right-1 h-2 w-2 bg-royal-glow" />
              </span>
              <div>
                <div className="font-display font-bold tracking-tight">CHELSEA ROBOTICS</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                  BIOGLOW™ · 2026
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-white/70 leading-relaxed">
              Equipe de robótica do Ensino Fundamental II dedicada a desenvolver soluções
              acessíveis para problemas ambientais reais. Inspirada nas cores do Chelsea FC —
              e nos oceanos que o projeto busca proteger.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-white/50 font-semibold">
              Projeto
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["#sobre", "Sobre o projeto"],
                ["#problema", "O problema"],
                ["#solucao", "MICROTRAP™"],
                ["#como-funciona", "Como funciona"],
                ["#impactos", "Impactos"],
              ].map(([h, l]) => (
                <li key={h}>
                  <a
                    href={h}
                    className="text-white/80 transition-colors hover:text-royal-glow"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-white/50 font-semibold">
              Contexto
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>Torneio Interno de Robótica</li>
              <li>Tema: BIOGLOW™ — A vida se conecta</li>
              <li>Edição 2026</li>
              <li>FIRST LEGO League</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Chelsea Robotics. Todos os direitos reservados.</span>
          <span className="font-mono uppercase tracking-[0.2em]">
            // MICROTRAP_001 · Status: ATIVO
          </span>
        </div>
      </div>
    </footer>
  );
}
