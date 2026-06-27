import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeVariant = "neutral" | "success" | "warning" | "danger" | "accent" | "info" | "ember";

const variantStyles: Record<BadgeVariant, { bg: string; color: string }> = {
  neutral: { bg: "var(--surface-raised)", color: "var(--text-secondary)" },
  success: { bg: "rgba(16,185,129,0.12)", color: "var(--accent-soft)" },
  warning: { bg: "rgba(245,158,11,0.12)", color: "#F59E0B" },
  danger:  { bg: "rgba(239,68,68,0.12)",  color: "#EF4444" },
  accent:  { bg: "var(--accent-dim)",     color: "var(--accent)" },
  info:    { bg: "var(--info-dim)",        color: "var(--info-soft)" },
  ember:   { bg: "rgba(251,191,36,0.16)",  color: "var(--accent)" },
};

export function Badge({ variant = "neutral", children, className }: { variant?: BadgeVariant; children: ReactNode; className?: string }) {
  const s = variantStyles[variant];
  return (
    <span
      className={cn("inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-xs font-medium", className)}
      style={{ backgroundColor: s.bg, color: s.color }}
    >
      {children}
    </span>
  );
}
