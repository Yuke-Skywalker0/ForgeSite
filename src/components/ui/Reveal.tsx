import type { ReactNode } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  /** Ritardo in ms, utile per effetto "stagger" su griglie di card. */
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn("opacity-0", isVisible && "animate-fade-up", className)}
      style={isVisible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
