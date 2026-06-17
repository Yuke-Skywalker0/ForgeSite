import { Sparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { AiLog } from "@/types";

export function AiUsagePanel({ logs }: { logs: AiLog[] }) {
  const totalCost = logs.reduce((sum, l) => sum + l.cost, 0);

  return (
    <Card>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-display text-sm font-medium text-forge-text-primary">
          Utilizzo AI
        </h2>
        <span className="font-mono text-xs text-forge-text-secondary">
          ${totalCost.toFixed(3)}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {logs.length === 0 && (
          <p className="text-sm text-forge-text-muted">
            Nessuna generazione AI ancora.
          </p>
        )}
        {logs.slice(0, 5).map((log) => (
          <div key={log.id} className="flex items-center gap-2 text-sm">
            <Sparkles size={14} className="text-forge-ember-soft" strokeWidth={1.75} />
            <span className="capitalize text-forge-text-secondary">{log.type}</span>
            <span className="ml-auto font-mono text-xs text-forge-text-muted">
              {new Date(log.createdAt).toLocaleDateString("it-IT")}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
