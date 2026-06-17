import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Card({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-md border border-forge-border bg-forge-surface p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
