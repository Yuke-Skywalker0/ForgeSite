import { useState } from "react";
import { useParams } from "react-router-dom";
import { BarChart3, Link2 } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { AppShell } from "@/components/layout/AppShell";
import { cn } from "@/lib/cn";
import { useRequireAuth } from "@/lib/useRequireAuth";
import { WidgetGrid } from "@/components/analytics/WidgetGrid";
import { KpiCard } from "@/components/analytics/KpiCard";
import { VisitorsTrendWidget } from "@/components/analytics/VisitorsTrendWidget";
import { TopPagesWidget } from "@/components/analytics/TopPagesWidget";
import { TrafficSourcesWidget } from "@/components/analytics/TrafficSourcesWidget";
import { DevicesWidget } from "@/components/analytics/DevicesWidget";
import { GoogleToolsPanel, useGoogleConnectionsMock } from "@/components/analytics/GoogleToolsPanel";
import { createWidgetLayoutStore, type WidgetLayoutItem } from "@/store/widgetLayoutStore";
import { mockKpis } from "@/data/mockAnalytics";

const defaultLayout: WidgetLayoutItem[] = [
  { id: "kpis", span: 12 },
  { id: "visitors-trend", span: 8 },
  { id: "devices", span: 4 },
  { id: "top-pages", span: 6 },
  { id: "traffic-sources", span: 6 },
];

const useLayoutStore = createWidgetLayoutStore(defaultLayout);

type Tab = "overview" | "google-tools";

export default function ProjectAnalyticsPage() {
  const { isChecking } = useRequireAuth();
  const { projectId } = useParams<{ projectId: string }>();
  const [tab, setTab] = useState<Tab>("overview");
  const [connections, setConnections] = useGoogleConnectionsMock();
  const { layout, reorder } = useLayoutStore();

  const analyticsConnected = Boolean(connections.analytics);

  if (isChecking) {
<<<<<<< HEAD
    return <div className="flex min-h-screen items-center justify-center text-sm text-forge-text-muted">Verifica sessione…</div>;
=======
    return <div className="flex min-h-screen items-center justify-center text-sm text-[var(--text-muted)]">Verifica sessione…</div>;
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
  }
  if (!projectId) return null;

  function renderWidget(id: string) {
    switch (id) {
      case "kpis":
        return (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <KpiCard label="Visitatori" value={mockKpis.visitors.value} change={mockKpis.visitors.change} />
            <KpiCard label="Visualizzazioni pagina" value={mockKpis.pageviews.value} change={mockKpis.pageviews.change} />
            <KpiCard label="Durata media sessione" value={mockKpis.avgSession.value} change={mockKpis.avgSession.change} />
            <KpiCard label="Frequenza di rimbalzo" value={mockKpis.bounceRate.value} change={mockKpis.bounceRate.change} />
          </div>
        );
      case "visitors-trend":
        return <VisitorsTrendWidget isConnected={analyticsConnected} />;
      case "devices":
        return <DevicesWidget isConnected={analyticsConnected} />;
      case "top-pages":
        return <TopPagesWidget isConnected={analyticsConnected} />;
      case "traffic-sources":
        return <TrafficSourcesWidget isConnected={analyticsConnected} />;
      default:
        return null;
    }
  }

  return (
    <>
      <Seo title="Analytics — ForgeSite" description="" path={`/app/projects/${projectId}/analytics`} indexable={false} />
      <AppShell>
        <div className="mx-auto max-w-6xl">
          <div className="mb-6">
<<<<<<< HEAD
            <h1 className="mb-1 font-display text-2xl font-semibold text-forge-text-primary">Analytics</h1>
            <p className="text-sm text-forge-text-secondary">
=======
            <h1 className="mb-1 font-display text-2xl font-semibold text-[var(--text-primary)]">Analytics</h1>
            <p className="text-sm text-[var(--text-secondary)]">
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
              Trascina i widget per riorganizzare la dashboard come preferisci.
            </p>
          </div>

<<<<<<< HEAD
          <div className="mb-6 flex w-fit gap-1 rounded-sm bg-forge-surface-raised p-1">
=======
          <div className="mb-6 flex w-fit gap-1 rounded-sm bg-[var(--surface-raised)] p-1">
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
            <button
              onClick={() => setTab("overview")}
              className={cn(
                "flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-xs font-medium transition-colors",
<<<<<<< HEAD
                tab === "overview" ? "bg-forge-accent text-forge-bg" : "text-forge-text-secondary hover:text-forge-text-primary"
=======
                tab === "overview" ? "bg-[var(--accent)] text-white" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
              )}
            >
              <BarChart3 size={13} strokeWidth={1.75} />
              Panoramica
            </button>
            <button
              onClick={() => setTab("google-tools")}
              className={cn(
                "flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-xs font-medium transition-colors",
<<<<<<< HEAD
                tab === "google-tools" ? "bg-forge-accent text-forge-bg" : "text-forge-text-secondary hover:text-forge-text-primary"
=======
                tab === "google-tools" ? "bg-[var(--accent)] text-white" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
              )}
            >
              <Link2 size={13} strokeWidth={1.75} />
              Strumenti Google
            </button>
          </div>

          {tab === "overview" ? (
            <WidgetGrid layout={layout} onReorder={reorder} renderWidget={renderWidget} />
          ) : (
            <div className="max-w-2xl">
              <GoogleToolsPanel connections={connections} onChange={setConnections} />
            </div>
          )}
        </div>
      </AppShell>
    </>
  );
}
