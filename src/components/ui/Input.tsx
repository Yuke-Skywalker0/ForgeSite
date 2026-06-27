import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Input({ label, error, id, className, ...props }: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-sm" style={{ color: "var(--text-secondary)" }}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn("rounded-lg px-3 py-2 text-sm outline-none transition-all focus:ring-2", className)}
        style={{
          backgroundColor: "var(--surface-raised)",
          border: `1px solid ${error ? "#EF4444" : "var(--border)"}`,
          color: "var(--text-primary)",
        }}
        aria-invalid={Boolean(error)}
        {...props}
      />
      {error && <span className="text-xs" style={{ color: "#EF4444" }}>{error}</span>}
    </div>
  );
}
