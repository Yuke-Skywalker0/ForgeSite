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
<<<<<<< HEAD
        <h3 className="font-display text-sm font-medium text-[var(--text-primary)]">Dispositivi</h3>
=======
<<<<<<< HEAD
        <h3 className="font-display text-sm font-medium text-forge-text-primary">Dispositivi</h3>
=======
        <h3 className="font-display text-sm font-medium text-[var(--text-primary)]">Dispositivi</h3>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
        {!isConnected && <MockDataBadge />}
      </div>
      <div className="flex flex-col gap-3">
        {mockDevices.map((d) => {
          const Icon = deviceIcons[d.device] ?? Monitor;
          return (
            <div key={d.device} className="flex items-center gap-3">
<<<<<<< HEAD
=======
<<<<<<< HEAD
              <Icon size={15} className="flex-none text-forge-text-secondary" strokeWidth={1.75} />
              <span className="w-16 flex-none text-xs text-forge-text-secondary">{d.device}</span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-forge-border">
                <div className="h-full rounded-full bg-forge-info" style={{ width: `${d.percentage}%` }} />
              </div>
              <span className="w-8 flex-none text-right font-mono text-xs text-forge-text-muted">{d.percentage}%</span>
=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
              <Icon size={15} className="flex-none text-[var(--text-secondary)]" strokeWidth={1.75} />
              <span className="w-16 flex-none text-xs text-[var(--text-secondary)]">{d.device}</span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[var(--border)]">
                <div className="h-full rounded-full bg-[var(--info)]" style={{ width: `${d.percentage}%` }} />
              </div>
              <span className="w-8 flex-none text-right font-mono text-xs text-[var(--text-muted)]">{d.percentage}%</span>
<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
            </div>
          );
        })}
      </div>
    </Card>
  );
}
