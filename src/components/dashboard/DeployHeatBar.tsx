import type { DeploymentStatus } from "@/types";
import { cn } from "@/lib/cn";

const statusConfig: Record<DeploymentStatus, { label: string; className: string; animated: boolean }> = {
<<<<<<< HEAD
  queued: { label: "In coda", className: "bg-[var(--text-muted)]", animated: false },
=======
<<<<<<< HEAD
  queued: { label: "In coda", className: "bg-forge-text-muted", animated: false },
=======
  queued: { label: "In coda", className: "bg-[var(--text-muted)]", animated: false },
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
  building: {
    label: "In costruzione",
    className: "bg-gradient-to-r from-forge-accent via-forge-warning to-forge-accent bg-[length:200%_100%] animate-flow-dash",
    animated: true,
  },
<<<<<<< HEAD
  success: { label: "Pubblicato", className: "bg-[var(--accent)]", animated: false },
  failed: { label: "Fallito", className: "bg-[#EF4444]", animated: false },
=======
<<<<<<< HEAD
  success: { label: "Pubblicato", className: "bg-forge-accent", animated: false },
  failed: { label: "Fallito", className: "bg-forge-danger", animated: false },
=======
  success: { label: "Pubblicato", className: "bg-[var(--accent)]", animated: false },
  failed: { label: "Fallito", className: "bg-[#EF4444]", animated: false },
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
};

export function DeployHeatBar({ status }: { status: DeploymentStatus }) {
  const config = statusConfig[status];
  return (
    <div className="flex items-center gap-2">
      <div className="h-1 w-16 overflow-hidden rounded-full bg-[var(--border)]">
        <div className={cn("h-full w-full", config.className)} />
      </div>
<<<<<<< HEAD
      <span className="text-xs text-[var(--text-secondary)]">{config.label}</span>
=======
<<<<<<< HEAD
      <span className="text-xs text-forge-text-secondary">{config.label}</span>
=======
      <span className="text-xs text-[var(--text-secondary)]">{config.label}</span>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
    </div>
  );
}
