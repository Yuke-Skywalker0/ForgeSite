import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeVariant = "neutral" | "success" | "warning" | "danger" | "accent";

const variantStyles: Record<BadgeVariant, string> = {
  neutral: "bg-forge-surface-raised text-forge-text-secondary",
  success: "bg-forge-accent/10 text-forge-accent-soft",
  warning: "bg-forge-warning/10 text-forge-warning",
  danger: "bg-forge-danger/10 text-forge-danger",
  accent: "bg-forge-accent-dim text-forge-accent-soft",
};

export function Badge({ variant = "neutral", children }: { variant?: BadgeVariant; children: ReactNode }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-sm px-2 py-0.5 text-xs font-medium", variantStyles[variant])}>
      {children}
    </span>
  );
}
