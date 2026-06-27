import { Card } from "@/components/ui/Card";
import { MiniLineChart } from "@/components/analytics/MiniLineChart";
import { MockDataBadge } from "@/components/analytics/MockDataBadge";
import { mockVisitorsTrend } from "@/data/mockAnalytics";

export function VisitorsTrendWidget({ isConnected = false }: { isConnected?: boolean }) {
  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-sm font-medium text-[var(--text-primary)]">Visitatori — ultimi 12 giorni</h3>
        {!isConnected && <MockDataBadge />}
      </div>
      <MiniLineChart data={mockVisitorsTrend} />
    </Card>
  );
}
