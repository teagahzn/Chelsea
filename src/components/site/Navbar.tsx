import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { href: "#sobre", label: "Sobre" },
  { href: "#problema", label: "Problema" },
  { href: "#solucao", label: "Solução" },
  { href: "#impactos", label: "Impactos" },
  { href: "#equipe", label: "Equipe" },
  { href: "#objetivos", label: "Futuro" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md shadow-[0_2px_20px_-8px_rgba(0,0,0,0.3)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="relative inline-flex h-9 w-9 items-center justify-center bg-royal text-white font-display font-bold text-sm shadow-[0_4px_14px_-4px_oklch(0.42_0.18_260/0.7)]">
            CR
            <span className="absolute -bottom-1 -right-1 h-2 w-2 bg-royal-glow" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display font-bold tracking-tight text-sm md:text-base">
              CHELSEA ROBOTICS
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              BIOGLOW™ · 2026
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative px-3 py-2 text-sm font-medium text-foreground/80 hover:text-royal transition-colors after:absolute after:left-3 after:right-3 after:bottom-1 after:h-[2px] after:scale-x-0 after:bg-royal after:transition-transform hover:after:scale-x-100"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center border border-border bg-background/60"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-l-2 border-transparent px-3 py-3 text-sm font-medium hover:border-royal hover:bg-accent/40 hover:text-royal transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
