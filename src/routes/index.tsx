import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { ReadingProgress } from "@/components/site/ReadingProgress";
import { BackToTop } from "@/components/site/BackToTop";
import { Hero } from "@/components/site/sections/Hero";
import { Sobre } from "@/components/site/sections/Sobre";
import { Problema } from "@/components/site/sections/Problema";
import { Afetados } from "@/components/site/sections/Afetados";
import { Solucao } from "@/components/site/sections/Solucao";
import { ComoFunciona } from "@/components/site/sections/ComoFunciona";
import { Impactos } from "@/components/site/sections/Impactos";
import { Equipe } from "@/components/site/sections/Equipe";
import { Objetivos } from "@/components/site/sections/Objetivos";
import { Conclusao } from "@/components/site/sections/Conclusao";
import { Footer } from "@/components/site/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chelsea Robotics — BIOGLOW™ · MICROTRAP™" },
      {
        name: "description",
        content:
          "Chelsea Robotics apresenta o MICROTRAP™: filtro sustentável feito com garrafas PET e materiais recicláveis para capturar microplásticos antes que cheguem aos oceanos.",
      },
      { property: "og:title", content: "Chelsea Robotics — BIOGLOW™ · MICROTRAP™" },
      {
        property: "og:description",
        content:
          "Equipe de robótica e o filtro MICROTRAP™ para reter microplásticos em rios e proteger os oceanos.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ReadingProgress />
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Problema />
        <Afetados />
        <Solucao />
        <ComoFunciona />
        <Impactos />
        <Equipe />
        <Objetivos />
        <Conclusao />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
