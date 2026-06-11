import { useEffect, useRef, useState, type ReactNode } from "react";

type Variant = "fade" | "up" | "left" | "right";

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShow(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const initial =
    variant === "up"
      ? "translate-y-8 opacity-0"
      : variant === "left"
        ? "-translate-x-8 opacity-0"
        : variant === "right"
          ? "translate-x-8 opacity-0"
          : "opacity-0";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        show ? "translate-x-0 translate-y-0 opacity-100" : initial
      } ${className}`}
    >
      {children}
    </div>
  );
}
