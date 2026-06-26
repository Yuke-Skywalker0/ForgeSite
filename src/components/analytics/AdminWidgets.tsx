import { Card } from "@/components/ui/Card";
import { mockPlansBreakdown, mockTopTemplatesUsed } from "@/data/mockAnalytics";

export function PlansBreakdownWidget() {
  const total = mockPlansBreakdown.reduce((sum, p) => sum + p.count, 0);
  return (
    <Card className="flex flex-col gap-3">
      <h3 className="font-display text-sm font-medium text-forge-text-primary">Distribuzione piani</h3>
      <div className="flex h-2.5 overflow-hidden rounded-full">
        {mockPlansBreakdown.map((p) => (
          <div key={p.plan} style={{ width: `${(p.count / total) * 100}%`, backgroundColor: p.color }} />
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {mockPlansBreakdown.map((p) => (
          <div key={p.plan} className="flex items-center gap-2 text-xs">
            <span className="h-2 w-2 flex-none rounded-full" style={{ backgroundColor: p.color }} />
            <span className="flex-1 text-forge-text-secondary">{p.plan}</span>
            <span className="font-mono text-forge-text-muted">{p.count}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function TopTemplatesWidget() {
  const maxUses = Math.max(...mockTopTemplatesUsed.map((t) => t.uses));
  return (
    <Card className="flex flex-col gap-3">
      <h3 className="font-display text-sm font-medium text-forge-text-primary">Template più usati</h3>
      <div className="flex flex-col gap-2.5">
        {mockTopTemplatesUsed.map((t) => (
          <div key={t.name} className="flex items-center gap-3">
            <span className="w-36 flex-none truncate text-xs text-forge-text-secondary">{t.name}</span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-forge-border">
              <div className="h-full rounded-full bg-forge-info" style={{ width: `${(t.uses / maxUses) * 100}%` }} />
            </div>
            <span className="w-10 flex-none text-right font-mono text-xs text-forge-text-muted">{t.uses}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
