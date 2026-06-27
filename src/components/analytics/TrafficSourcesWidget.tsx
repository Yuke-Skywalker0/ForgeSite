import { Card } from "@/components/ui/Card";
import { MockDataBadge } from "@/components/analytics/MockDataBadge";
import { mockTrafficSources } from "@/data/mockAnalytics";

function DonutChart({ data }: { data: typeof mockTrafficSources }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  let offsetAccumulator = 0;

  return (
    <svg viewBox="0 0 100 100" className="h-28 w-28 flex-none -rotate-90" aria-hidden="true">
      <circle cx="50" cy="50" r={radius} fill="none" stroke="#2A3830" strokeWidth="14" />
      {data.map((segment) => {
        const dash = (segment.percentage / 100) * circumference;
        const circle = (
          <circle
            key={segment.source}
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={segment.color}
            strokeWidth="14"
            strokeDasharray={`${dash} ${circumference - dash}`}
            strokeDashoffset={-offsetAccumulator}
            strokeLinecap="butt"
          />
        );
        offsetAccumulator += dash;
        return circle;
      })}
    </svg>
  );
}

export function TrafficSourcesWidget({ isConnected = false }: { isConnected?: boolean }) {
  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-sm font-medium text-[var(--text-primary)]">Sorgenti di traffico</h3>
        {!isConnected && <MockDataBadge />}
      </div>
      <div className="flex items-center gap-5">
        <DonutChart data={mockTrafficSources} />
        <div className="flex flex-1 flex-col gap-2">
          {mockTrafficSources.map((s) => (
            <div key={s.source} className="flex items-center gap-2 text-xs">
              <span className="h-2 w-2 flex-none rounded-full" style={{ backgroundColor: s.color }} />
              <span className="flex-1 text-[var(--text-secondary)]">{s.source}</span>
              <span className="font-mono text-[var(--text-muted)]">{s.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
