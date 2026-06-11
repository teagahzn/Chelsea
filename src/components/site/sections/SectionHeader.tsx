import { Reveal } from "../Reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal>
      <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
        <div
          className={`flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-royal font-semibold ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="inline-block h-px w-8 bg-royal" />
          {eyebrow}
        </div>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl text-balance">
          {title}
        </h2>
        {description && (
          <p className="mt-5 text-base text-muted-foreground md:text-lg text-balance">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
