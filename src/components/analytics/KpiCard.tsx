import { ArrowUp, ArrowDown } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

interface KpiCardProps {
  label: string;
  value: string | number;
  change: number;
}

export function KpiCard({ label, value, change }: KpiCardProps) {
  const isPositive = change >= 0;
  return (
    <Card className="flex flex-col gap-1.5">
      <span className="text-xs text-[var(--text-secondary)]">{label}</span>
      <span className="font-display text-2xl font-semibold text-[var(--text-primary)]">{value}</span>
      <span
        className={cn(
          "flex items-center gap-1 text-xs font-medium",
          isPositive ? "text-[var(--accent-soft)]" : "text-[#EF4444]"
        )}
      >
        {isPositive ? <ArrowUp size={12} strokeWidth={2.5} /> : <ArrowDown size={12} strokeWidth={2.5} />}
        {Math.abs(change)}% rispetto al periodo precedente
      </span>
    </Card>
  );
}
