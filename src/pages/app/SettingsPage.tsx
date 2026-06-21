import { Seo } from "@/components/marketing/Seo";
import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/ui/Card";
import { useAuthStore } from "@/store/authStore";
import { useRequireAuth } from "@/lib/useRequireAuth";

export default function SettingsPage() {
  const { isChecking } = useRequireAuth();
  const user = useAuthStore((s) => s.user);

  if (isChecking) {
    return <div className="flex min-h-screen items-center justify-center text-sm text-forge-text-muted">Verifica sessione…</div>;
  }

  return (
    <>
      <Seo title="Impostazioni — ForgeSite" description="" path="/app/settings" indexable={false} />
      <AppShell>
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-6 font-display text-2xl font-semibold text-forge-text-primary">Impostazioni</h1>

          <Card className="mb-4">
            <h2 className="mb-3 font-display text-sm font-medium text-forge-text-primary">Account</h2>
            <div className="flex flex-col gap-1 text-sm">
              <span className="text-forge-text-secondary">Email: {user?.email}</span>
              <span className="text-forge-text-secondary capitalize">Ruolo: {user?.role}</span>
            </div>
          </Card>

          <Card>
            <h2 className="mb-3 font-display text-sm font-medium text-forge-text-primary">Integrazione GitHub</h2>
            <p className="text-sm text-forge-text-secondary">
              Gestione installazione GitHub App — da collegare a GET /github/installation.
            </p>
          </Card>
        </div>
      </AppShell>
    </>
  );
}
