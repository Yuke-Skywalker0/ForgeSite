import { Card } from "@/components/ui/Card";
import { useAuthStore } from "@/store/authStore";

export function SettingsPage() {
  const user = useAuthStore((s) => s.user);

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-6 font-display text-2xl font-semibold">Impostazioni</h1>

      <Card className="mb-4">
        <h2 className="mb-3 font-display text-sm font-medium">Account</h2>
        <div className="flex flex-col gap-1 text-sm">
          <span className="text-forge-text-secondary">Email: {user?.email}</span>
          <span className="text-forge-text-secondary capitalize">Ruolo: {user?.role}</span>
        </div>
      </Card>

      <Card>
        <h2 className="mb-3 font-display text-sm font-medium">Integrazione GitHub</h2>
        <p className="text-sm text-forge-text-secondary">
          Gestione installazione GitHub App — da collegare a GET /github/installation.
        </p>
      </Card>
    </div>
  );
}
