import type { DeploymentStatus } from "@/types";
import { cn } from "@/lib/cn";

// Elemento signature del design: una "barra di calore" che comunica lo stato
// del deploy come se fosse il colore del metallo nella fucina — da rovente
// (building) a temprato/verde (success). Non è decorazione: il colore e il
// movimento codificano lo stato reale, non sostituiscono il testo (sempre
// presente altrove per accessibilità).

const statusConfig: Record<
  DeploymentStatus,
  { label: string; className: string; animated: boolean }
> = {
  queued: {
    label: "In coda",
    className: "bg-forge-text-muted",
    animated: false,
  },
  building: {
    label: "In costruzione",
    className:
      "bg-gradient-to-r from-forge-ember via-forge-warning to-forge-ember bg-[length:200%_100%] animate-heat-sweep",
    animated: true,
  },
  success: {
    label: "Pubblicato",
    className: "bg-forge-success",
    animated: false,
  },
  failed: {
    label: "Fallito",
    className: "bg-forge-danger",
    animated: false,
  },
};

export function DeployHeatBar({ status }: { status: DeploymentStatus }) {
  const config = statusConfig[status];
  return (
    <div className="flex items-center gap-2">
      <div className="h-1 w-16 overflow-hidden rounded-full bg-forge-border">
        <div className={cn("h-full w-full", config.className)} />
      </div>
      <span
        className={cn(
          "text-xs text-forge-text-secondary",
          config.animated && "animate-heat-pulse"
        )}
      >
        {config.label}
      </span>
    </div>
  );
}
