import { Monitor, Smartphone, Tablet } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { MockDataBadge } from "@/components/analytics/MockDataBadge";
import { mockDevices } from "@/data/mockAnalytics";

const deviceIcons: Record<string, typeof Monitor> = {
  Desktop: Monitor,
  Mobile: Smartphone,
  Tablet: Tablet,
};

export function DevicesWidget({ isConnected = false }: { isConnected?: boolean }) {
  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-sm font-medium text-forge-text-primary">Dispositivi</h3>
        {!isConnected && <MockDataBadge />}
      </div>
      <div className="flex flex-col gap-3">
        {mockDevices.map((d) => {
          const Icon = deviceIcons[d.device] ?? Monitor;
          return (
            <div key={d.device} className="flex items-center gap-3">
              <Icon size={15} className="flex-none text-forge-text-secondary" strokeWidth={1.75} />
              <span className="w-16 flex-none text-xs text-forge-text-secondary">{d.device}</span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-forge-border">
                <div className="h-full rounded-full bg-forge-info" style={{ width: `${d.percentage}%` }} />
              </div>
              <span className="w-8 flex-none text-right font-mono text-xs text-forge-text-muted">{d.percentage}%</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
