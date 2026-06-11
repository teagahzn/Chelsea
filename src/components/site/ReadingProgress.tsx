import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function ReadingProgress() {
  const progress = useScrollProgress();
  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-royal via-royal-glow to-royal transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
