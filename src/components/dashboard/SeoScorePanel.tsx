import { Card } from "@/components/ui/Card";

interface SeoScoreItem {
  projectName: string;
  score: number;
}

export function SeoScorePanel({ items }: { items: SeoScoreItem[] }) {
  return (
    <Card>
      <h2 className="mb-3 font-display text-sm font-medium text-forge-text-primary">
        Punteggio SEO
      </h2>
      <div className="flex flex-col gap-3">
        {items.length === 0 && (
          <p className="text-sm text-forge-text-muted">
            Nessun progetto da analizzare ancora.
          </p>
        )}
        {items.map((item) => (
          <div key={item.projectName} className="flex items-center gap-3">
            <span className="w-28 truncate text-sm text-forge-text-secondary">
              {item.projectName}
            </span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-forge-border">
              <div
                className="h-full rounded-full bg-forge-ember"
                style={{ width: `${item.score}%` }}
              />
            </div>
            <span className="w-8 text-right font-mono text-xs text-forge-text-secondary">
              {item.score}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
