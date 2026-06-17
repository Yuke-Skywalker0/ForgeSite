import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeVariant = "neutral" | "success" | "warning" | "danger" | "ember";

const variantStyles: Record<BadgeVariant, string> = {
  neutral: "bg-forge-surface-raised text-forge-text-secondary",
  success: "bg-forge-success/10 text-forge-success",
  warning: "bg-forge-warning/10 text-forge-warning",
  danger: "bg-forge-danger/10 text-forge-danger",
  ember: "bg-forge-ember-dim text-forge-ember-soft",
};

export function Badge({
  variant = "neutral",
  children,
}: {
  variant?: BadgeVariant;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm px-2 py-0.5 text-xs font-medium",
        variantStyles[variant]
      )}
    >
      {children}
    </span>
  );
}
