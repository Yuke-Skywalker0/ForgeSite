import { ShieldAlert } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { AppShell } from "@/components/layout/AppShell";
import { useRequireAuth } from "@/lib/useRequireAuth";
import { useAuthStore } from "@/store/authStore";
import { WidgetGrid } from "@/components/analytics/WidgetGrid";
import { KpiCard } from "@/components/analytics/KpiCard";
import { MiniLineChart } from "@/components/analytics/MiniLineChart";
import { Card } from "@/components/ui/Card";
import { PlansBreakdownWidget, TopTemplatesWidget } from "@/components/analytics/AdminWidgets";
import { createWidgetLayoutStore, type WidgetLayoutItem } from "@/store/widgetLayoutStore";
import { mockPlatformKpis, mockSignupsTrend } from "@/data/mockAnalytics";

const defaultLayout: WidgetLayoutItem[] = [
  { id: "kpis", span: 12 },
  { id: "signups-trend", span: 8 },
  { id: "plans-breakdown", span: 4 },
  { id: "top-templates", span: 6 },
];

const useAdminLayoutStore = createWidgetLayoutStore(defaultLayout);

const ADMIN_ROLES = new Set(["owner", "admin"]);

export default function AdminAnalyticsPage() {
  const { isChecking } = useRequireAuth();
  const role = useAuthStore((s) => s.user?.role);
  const { layout, reorder } = useAdminLayoutStore();

  if (isChecking) {
<<<<<<< HEAD
    return <div className="flex min-h-screen items-center justify-center text-sm text-[var(--text-muted)]">Verifica sessione…</div>;
=======
<<<<<<< HEAD
    return <div className="flex min-h-screen items-center justify-center text-sm text-forge-text-muted">Verifica sessione…</div>;
=======
    return <div className="flex min-h-screen items-center justify-center text-sm text-[var(--text-muted)]">Verifica sessione…</div>;
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
  }

  const hasAccess = role ? ADMIN_ROLES.has(role) : false;

  if (!hasAccess) {
    return (
      <AppShell>
        <div className="mx-auto flex max-w-md flex-col items-center gap-3 py-20 text-center">
<<<<<<< HEAD
          <ShieldAlert size={28} className="text-[var(--text-muted)]" strokeWidth={1.5} />
          <h1 className="font-display text-lg font-semibold text-[var(--text-primary)]">Accesso riservato</h1>
          <p className="text-sm text-[var(--text-secondary)]">
=======
<<<<<<< HEAD
          <ShieldAlert size={28} className="text-forge-text-muted" strokeWidth={1.5} />
          <h1 className="font-display text-lg font-semibold text-forge-text-primary">Accesso riservato</h1>
          <p className="text-sm text-forge-text-secondary">
=======
          <ShieldAlert size={28} className="text-[var(--text-muted)]" strokeWidth={1.5} />
          <h1 className="font-display text-lg font-semibold text-[var(--text-primary)]">Accesso riservato</h1>
          <p className="text-sm text-[var(--text-secondary)]">
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
            Questa sezione è visibile solo agli amministratori della piattaforma.
          </p>
        </div>
      </AppShell>
    );
  }

  function renderWidget(id: string) {
    switch (id) {
      case "kpis":
        return (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <KpiCard label="Utenti totali" value={mockPlatformKpis.totalUsers.value} change={mockPlatformKpis.totalUsers.change} />
            <KpiCard label="Progetti attivi" value={mockPlatformKpis.activeProjects.value} change={mockPlatformKpis.activeProjects.change} />
            <KpiCard label="Nuove registrazioni (7gg)" value={mockPlatformKpis.newSignups7d.value} change={mockPlatformKpis.newSignups7d.change} />
            <KpiCard label="Tasso di conversione" value={mockPlatformKpis.conversionRate.value} change={mockPlatformKpis.conversionRate.change} />
          </div>
        );
      case "signups-trend":
        return (
          <Card className="flex flex-col gap-3">
<<<<<<< HEAD
            <h3 className="font-display text-sm font-medium text-[var(--text-primary)]">Registrazioni — ultimi 12 giorni</h3>
=======
<<<<<<< HEAD
            <h3 className="font-display text-sm font-medium text-forge-text-primary">Registrazioni — ultimi 12 giorni</h3>
=======
            <h3 className="font-display text-sm font-medium text-[var(--text-primary)]">Registrazioni — ultimi 12 giorni</h3>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
            <MiniLineChart data={mockSignupsTrend} color="#60A5FA" />
          </Card>
        );
      case "plans-breakdown":
        return <PlansBreakdownWidget />;
      case "top-templates":
        return <TopTemplatesWidget />;
      default:
        return null;
    }
  }

  return (
    <>
      <Seo title="Admin Analytics — ForgeSite" description="" path="/app/admin/analytics" indexable={false} />
      <AppShell>
        <div className="mx-auto max-w-6xl">
          <div className="mb-6">
<<<<<<< HEAD
=======
<<<<<<< HEAD
            <h1 className="mb-1 font-display text-2xl font-semibold text-forge-text-primary">
              Analytics della piattaforma
            </h1>
            <p className="text-sm text-forge-text-secondary">
=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
            <h1 className="mb-1 font-display text-2xl font-semibold text-[var(--text-primary)]">
              Analytics della piattaforma
            </h1>
            <p className="text-sm text-[var(--text-secondary)]">
<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
              Metriche aggregate su tutti i tenant — visibile solo al team ForgeSite.
            </p>
          </div>
          <WidgetGrid layout={layout} onReorder={reorder} renderWidget={renderWidget} />
        </div>
      </AppShell>
    </>
  );
}
