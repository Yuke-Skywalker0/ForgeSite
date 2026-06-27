import { Card } from "@/components/ui/Card";
import { MockDataBadge } from "@/components/analytics/MockDataBadge";
import { mockTopPages } from "@/data/mockAnalytics";

export function TopPagesWidget({ isConnected = false }: { isConnected?: boolean }) {
  const maxViews = Math.max(...mockTopPages.map((p) => p.views));

  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
<<<<<<< HEAD
        <h3 className="font-display text-sm font-medium text-forge-text-primary">Pagine più viste</h3>
=======
        <h3 className="font-display text-sm font-medium text-[var(--text-primary)]">Pagine più viste</h3>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
        {!isConnected && <MockDataBadge />}
      </div>
      <div className="flex flex-col gap-2.5">
        {mockTopPages.map((page) => (
          <div key={page.path} className="flex items-center gap-3">
<<<<<<< HEAD
            <span className="w-32 flex-none truncate text-xs text-forge-text-secondary">{page.label}</span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-forge-border">
              <div
                className="h-full rounded-full bg-forge-accent"
                style={{ width: `${(page.views / maxViews) * 100}%` }}
              />
            </div>
            <span className="w-12 flex-none text-right font-mono text-xs text-forge-text-muted">{page.views}</span>
=======
            <span className="w-32 flex-none truncate text-xs text-[var(--text-secondary)]">{page.label}</span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[var(--border)]">
              <div
                className="h-full rounded-full bg-[var(--accent)]"
                style={{ width: `${(page.views / maxViews) * 100}%` }}
              />
            </div>
            <span className="w-12 flex-none text-right font-mono text-xs text-[var(--text-muted)]">{page.views}</span>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
          </div>
        ))}
      </div>
    </Card>
  );
}
