import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

export function Button({ variant = "primary", className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant; children: ReactNode }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all disabled:cursor-not-allowed disabled:opacity-40";

  const styles: Record<ButtonVariant, React.CSSProperties> = {
<<<<<<< HEAD
    primary:   { backgroundColor: "var(--accent)", color: "#fff" },
=======
<<<<<<< HEAD
    primary:   { backgroundColor: "var(--accent)", color: "var(--text-on-accent)" },
=======
    primary:   { backgroundColor: "var(--accent)", color: "#fff" },
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
    secondary: { backgroundColor: "var(--surface-raised)", color: "var(--text-primary)", border: "1px solid var(--border)" },
    ghost:     { backgroundColor: "transparent", color: "var(--text-secondary)" },
    danger:    { backgroundColor: "rgba(239,68,68,0.1)", color: "#EF4444" },
  };

  return (
    <button className={cn(base, className)} style={styles[variant]} {...props}>
      {children}
    </button>
  );
}
