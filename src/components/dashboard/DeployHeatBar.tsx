import type { DeploymentStatus } from "@/types";
import { cn } from "@/lib/cn";

const statusConfig: Record<DeploymentStatus, { label: string; className: string; animated: boolean }> = {
  queued: { label: "In coda", className: "bg-forge-text-muted", animated: false },
  building: {
    label: "In costruzione",
    className: "bg-gradient-to-r from-forge-accent via-forge-warning to-forge-accent bg-[length:200%_100%] animate-flow-dash",
    animated: true,
  },
  success: { label: "Pubblicato", className: "bg-forge-accent", animated: false },
  failed: { label: "Fallito", className: "bg-forge-danger", animated: false },
};

export function DeployHeatBar({ status }: { status: DeploymentStatus }) {
  const config = statusConfig[status];
  return (
    <div className="flex items-center gap-2">
      <div className="h-1 w-16 overflow-hidden rounded-full bg-forge-border">
        <div className={cn("h-full w-full", config.className)} />
      </div>
      <span className="text-xs text-forge-text-secondary">{config.label}</span>
    </div>
  );
}
