import { GitCommit, GitPullRequest, Rocket } from "lucide-react";
import { Card } from "@/components/ui/Card";

export type ActivityKind = "commit" | "pull_request" | "deployment";

export interface ActivityItem {
  id: string;
  kind: ActivityKind;
  label: string;
  timestamp: string;
}

const iconByKind: Record<ActivityKind, typeof GitCommit> = {
  commit: GitCommit,
  pull_request: GitPullRequest,
  deployment: Rocket,
};

export function ActivityFeed({ items }: { items: ActivityItem[] }) {
  return (
    <Card>
      <h2 className="mb-3 font-display text-sm font-medium text-forge-text-primary">
        Attività recente
      </h2>
      <div className="flex flex-col gap-3">
        {items.length === 0 && (
          <p className="text-sm text-forge-text-muted">Nessuna attività recente.</p>
        )}
        {items.map((item) => {
          const Icon = iconByKind[item.kind];
          return (
            <div key={item.id} className="flex items-center gap-2.5 text-sm">
              <Icon size={14} className="text-forge-text-secondary" strokeWidth={1.75} />
              <span className="text-forge-text-secondary">{item.label}</span>
              <span className="ml-auto text-xs text-forge-text-muted">
                {item.timestamp}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
