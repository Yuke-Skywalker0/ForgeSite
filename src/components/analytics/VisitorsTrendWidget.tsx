import { Card } from "@/components/ui/Card";
import { MiniLineChart } from "@/components/analytics/MiniLineChart";
import { MockDataBadge } from "@/components/analytics/MockDataBadge";
import { mockVisitorsTrend } from "@/data/mockAnalytics";

export function VisitorsTrendWidget({ isConnected = false }: { isConnected?: boolean }) {
  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
<<<<<<< HEAD
        <h3 className="font-display text-sm font-medium text-forge-text-primary">Visitatori — ultimi 12 giorni</h3>
=======
        <h3 className="font-display text-sm font-medium text-[var(--text-primary)]">Visitatori — ultimi 12 giorni</h3>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
        {!isConnected && <MockDataBadge />}
      </div>
      <MiniLineChart data={mockVisitorsTrend} />
    </Card>
  );
}
