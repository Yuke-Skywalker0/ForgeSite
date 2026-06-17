import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-forge-ember text-forge-bg hover:bg-forge-ember-soft",
  secondary:
    "bg-forge-surface-raised text-forge-text-primary border border-forge-border hover:border-forge-ember/40",
  ghost: "bg-transparent text-forge-text-secondary hover:text-forge-text-primary",
  danger: "bg-forge-danger/10 text-forge-danger hover:bg-forge-danger/20",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-sm px-3.5 py-2 text-sm font-medium transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-40",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
