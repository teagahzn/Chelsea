import { Reveal } from "../Reveal";
import { SectionHeader } from "./SectionHeader";
import { AlertTriangle, CreditCard, Waves } from "lucide-react";

export function Problema() {
  return (
    <section id="problema" className="relative overflow-hidden border-b border-border bg-ink text-white py-24 md:py-32">
      <div className="absolute inset-0 grid-tech opacity-30" />
      <div className="absolute -top-20 right-0 h-[400px] w-[400px] bg-royal/30 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-royal-glow font-semibold">
            <span className="inline-block h-px w-8 bg-royal-glow" />
            O Problema
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl text-balance">
            Microplásticos: o inimigo invisível dos nossos rios
          </h2>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="space-y-5 text-white/85 leading-relaxed">
              <p>
                Microplásticos são partículas de plástico inferiores a 5 milímetros, muitas vezes
                invisíveis a olho nu. Elas têm origem na degradação de resíduos plásticos maiores,
                em fibras sintéticas liberadas por roupas durante a lavagem, e em produtos
                cosméticos e de limpeza.
              </p>
              <p>
                Estima-se que <strong className="text-royal-glow">90% do plástico presente nos oceanos tenha origem em rios</strong>,
                uma vez que os sistemas convencionais de tratamento de água não conseguem reter
                essas partículas.
              </p>
              <p>
                As consequências são alarmantes: animais marinhos ingerem esses resíduos,
                sofrendo de desnutrição e obstrução intestinal; comunidades ribeirinhas e
                pescadores perdem sua fonte de sustento; e os seres humanos, no topo da cadeia
                alimentar, também ingerem microplásticos.
              </p>
            </div>
          </Reveal>

          <Reveal variant="right">
            <div className="relative border border-white/15 bg-white/[0.03] backdrop-blur">
              <div className="absolute -top-px left-0 h-[2px] w-24 bg-royal-glow" />
              <div className="p-8">
                <CreditCard className="h-10 w-10 text-royal-glow" strokeWidth={1.5} />
                <div className="mt-6 font-display text-6xl font-bold leading-none">5g</div>
                <p className="mt-3 text-sm uppercase tracking-wider text-white/60">
                  por semana
                </p>
                <p className="mt-4 text-sm text-white/80 leading-relaxed">
                  É a quantidade média de plástico que uma pessoa ingere semanalmente — o
                  equivalente ao peso de um cartão de crédito.
                </p>
              </div>
              <div className="grid grid-cols-2 border-t border-white/10">
                <div className="border-r border-white/10 p-5">
                  <Waves className="h-5 w-5 text-royal-glow" />
                  <div className="mt-3 font-display text-2xl font-bold">&lt; 5mm</div>
                  <div className="text-xs text-white/60 mt-1">Tamanho das partículas</div>
                </div>
                <div className="p-5">
                  <AlertTriangle className="h-5 w-5 text-royal-glow" />
                  <div className="mt-3 font-display text-2xl font-bold">90%</div>
                  <div className="text-xs text-white/60 mt-1">Vêm de rios</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
