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
      <label htmlFor={inputId} className="text-sm text-forge-text-secondary">
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          "rounded-sm border border-forge-border bg-forge-surface-raised px-3 py-2 text-sm text-forge-text-primary placeholder:text-forge-text-muted focus:border-forge-ember/60",
          error && "border-forge-danger",
          className
        )}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <span id={`${inputId}-error`} className="text-xs text-forge-danger">
          {error}
        </span>
      )}
    </div>
  );
}
