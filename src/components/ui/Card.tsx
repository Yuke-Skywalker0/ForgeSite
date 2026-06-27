import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Card({ className, children, ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div
      className={cn("rounded-xl p-5 transition-all", className)}
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
      }}
      {...props}
    >
      {children}
    </div>
  );
}
