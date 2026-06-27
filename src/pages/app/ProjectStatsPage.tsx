import { useState } from "react";
import { useParams } from "react-router-dom";
import { Plus, Trash2, Phone, Mail, MessageCircle, Link2, MousePointerClick } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { KpiCard } from "@/components/analytics/KpiCard";
import { MiniLineChart } from "@/components/analytics/MiniLineChart";
import { MockDataBadge } from "@/components/analytics/MockDataBadge";
import { useRequireAuth } from "@/lib/useRequireAuth";

type ClickType = "phone" | "email" | "whatsapp" | "custom";

interface ClickTracker {
  id: string;
  type: ClickType;
  label: string;
  value: string;
  enabled: boolean;
}

const clickTypeIcons: Record<ClickType, typeof Phone> = {
  phone: Phone,
  email: Mail,
  whatsapp: MessageCircle,
  custom: Link2,
};

const clickTypeLabels: Record<ClickType, string> = {
  phone: "Numero di telefono",
  email: "Indirizzo email",
  whatsapp: "WhatsApp",
  custom: "Link personalizzato",
};

const defaultTrackers: ClickTracker[] = [
  { id: "t1", type: "phone", label: "Telefono principale", value: "+39 333 1234567", enabled: true },
  { id: "t2", type: "email", label: "Email contatti", value: "info@miosito.it", enabled: true },
  { id: "t3", type: "whatsapp", label: "WhatsApp Business", value: "+39 333 1234567", enabled: false },
];

const mockClickStats = [
  { id: "t1", label: "Telefono principale", clicks: 48, trend: [3, 5, 4, 7, 6, 8, 9, 7, 8, 10, 9, 11] },
  { id: "t2", label: "Email contatti", clicks: 32, trend: [2, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8] },
];

export default function ProjectStatsPage() {
  const { isChecking } = useRequireAuth();
  const { projectId } = useParams<{ projectId: string }>();
  const [trackers, setTrackers] = useState<ClickTracker[]>(defaultTrackers);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newType, setNewType] = useState<ClickType>("phone");
  const [newLabel, setNewLabel] = useState("");
  const [newValue, setNewValue] = useState("");
  const [saving, setSaving] = useState(false);

<<<<<<< HEAD
  if (isChecking) return <div className="flex min-h-screen items-center justify-center text-sm text-forge-text-muted">Verifica sessione…</div>;
=======
  if (isChecking) return <div className="flex min-h-screen items-center justify-center text-sm text-[var(--text-muted)]">Verifica sessione…</div>;
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
  if (!projectId) return null;

  function handleAdd() {
    if (!newLabel.trim() || !newValue.trim()) return;
    setTrackers((t) => [
      ...t,
      { id: `t_${Date.now()}`, type: newType, label: newLabel.trim(), value: newValue.trim(), enabled: true },
    ]);
    setNewLabel("");
    setNewValue("");
    setShowAddForm(false);
  }

  async function handleSave() {
    setSaving(true);
    // In questo round (frontend-only) la persistenza è simulata.
    // Nel round backend: questa funzione chiamerà POST /projects/:id/stats-config
    // che scriverà le preferenze nel database del provider backend del cliente
    // (Supabase/Render/Cloudflare), mantenendo i dati nell'infrastruttura
    // del cliente invece che nel DB di ForgeSite.
    await new Promise((r) => setTimeout(r, 800));
    setSaving(false);
  }

  return (
    <>
      <Seo title="Statistiche — ForgeSite" description="" path={`/app/projects/${projectId}/stats`} indexable={false} />
      <AppShell>
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
<<<<<<< HEAD
            <h1 className="mb-1 font-display text-2xl font-semibold text-forge-text-primary">Statistiche e clic</h1>
            <p className="text-sm text-forge-text-secondary">
=======
            <h1 className="mb-1 font-display text-2xl font-semibold text-[var(--text-primary)]">Statistiche e clic</h1>
            <p className="text-sm text-[var(--text-secondary)]">
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
              Configura quali azioni del sito vuoi tracciare. Le preferenze vengono salvate nel backend del tuo progetto.
            </p>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <KpiCard label="Visite totali" value={2840} change={12.4} />
            <KpiCard label="Clic tracciati" value={80} change={8.1} />
            <KpiCard label="Tasso di coinvolgimento" value="2.8%" change={3.2} />
          </div>

          <div className="mb-8 flex flex-col gap-4">
            <div className="flex items-center justify-between">
<<<<<<< HEAD
              <h2 className="font-display text-sm font-medium text-forge-text-primary">Clic per azione</h2>
=======
              <h2 className="font-display text-sm font-medium text-[var(--text-primary)]">Clic per azione</h2>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
              <MockDataBadge />
            </div>
            {mockClickStats.map((stat) => (
              <Card key={stat.id} className="flex items-center gap-4">
                <div className="flex-1">
<<<<<<< HEAD
                  <p className="mb-1 text-sm text-forge-text-primary">{stat.label}</p>
                  <p className="font-display text-xl font-semibold text-forge-accent-soft">{stat.clicks}</p>
                  <p className="text-xs text-forge-text-muted">clic nelle ultime 2 settimane</p>
=======
                  <p className="mb-1 text-sm text-[var(--text-primary)]">{stat.label}</p>
                  <p className="font-display text-xl font-semibold text-[var(--accent-soft)]">{stat.clicks}</p>
                  <p className="text-xs text-[var(--text-muted)]">clic nelle ultime 2 settimane</p>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
                </div>
                <div className="w-40">
                  <MiniLineChart data={stat.trend} height={48} />
                </div>
              </Card>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
<<<<<<< HEAD
              <h2 className="font-display text-sm font-medium text-forge-text-primary">Azioni tracciate</h2>
=======
              <h2 className="font-display text-sm font-medium text-[var(--text-primary)]">Azioni tracciate</h2>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
              <Button variant="secondary" onClick={() => setShowAddForm(true)}>
                <Plus size={14} strokeWidth={2} />
                Aggiungi
              </Button>
            </div>

            {trackers.map((tracker) => {
              const Icon = clickTypeIcons[tracker.type];
              return (
                <Card key={tracker.id} className="flex items-center gap-3">
<<<<<<< HEAD
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-md bg-forge-surface-raised">
                    <Icon size={16} className="text-forge-text-secondary" strokeWidth={1.75} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-forge-text-primary">{tracker.label}</p>
                    <p className="truncate text-xs text-forge-text-muted">{tracker.value}</p>
=======
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-md bg-[var(--surface-raised)]">
                    <Icon size={16} className="text-[var(--text-secondary)]" strokeWidth={1.75} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[var(--text-primary)]">{tracker.label}</p>
                    <p className="truncate text-xs text-[var(--text-muted)]">{tracker.value}</p>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
                  </div>
                  <Badge variant={tracker.enabled ? "success" : "neutral"}>
                    {tracker.enabled ? "Attivo" : "Disabilitato"}
                  </Badge>
                  <button
                    onClick={() => setTrackers((t) => t.map((x) => x.id === tracker.id ? { ...x, enabled: !x.enabled } : x))}
<<<<<<< HEAD
                    className="text-xs text-forge-text-secondary hover:text-forge-text-primary"
=======
                    className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
                  >
                    {tracker.enabled ? "Disabilita" : "Abilita"}
                  </button>
                  <button
                    onClick={() => setTrackers((t) => t.filter((x) => x.id !== tracker.id))}
<<<<<<< HEAD
                    className="text-forge-text-muted hover:text-forge-danger"
=======
                    className="text-[var(--text-muted)] hover:text-[#EF4444]"
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
                    aria-label="Rimuovi"
                  >
                    <Trash2 size={14} strokeWidth={1.75} />
                  </button>
                </Card>
              );
            })}

            {showAddForm && (
              <Card className="flex flex-col gap-3">
<<<<<<< HEAD
                <h3 className="font-display text-sm font-medium text-forge-text-primary">Nuova azione da tracciare</h3>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-forge-text-secondary">Tipo di azione</label>
                  <select
                    value={newType}
                    onChange={(e) => setNewType(e.target.value as ClickType)}
                    className="rounded-sm border border-forge-border bg-forge-surface-raised px-3 py-2 text-sm text-forge-text-primary"
=======
                <h3 className="font-display text-sm font-medium text-[var(--text-primary)]">Nuova azione da tracciare</h3>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-[var(--text-secondary)]">Tipo di azione</label>
                  <select
                    value={newType}
                    onChange={(e) => setNewType(e.target.value as ClickType)}
                    className="rounded-sm border border-[var(--border)] bg-[var(--surface-raised)] px-3 py-2 text-sm text-[var(--text-primary)]"
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
                  >
                    {(Object.keys(clickTypeLabels) as ClickType[]).map((type) => (
                      <option key={type} value={type}>{clickTypeLabels[type]}</option>
                    ))}
                  </select>
                </div>
                <Input label="Etichetta" value={newLabel} onChange={(e) => setNewLabel(e.target.value)} placeholder="es. Telefono principale" />
                <Input
                  label={newType === "email" ? "Indirizzo email" : newType === "phone" || newType === "whatsapp" ? "Numero di telefono" : "URL"}
                  value={newValue}
                  onChange={(e) => setNewValue(e.target.value)}
                  placeholder={newType === "email" ? "info@esempio.it" : newType === "custom" ? "https://..." : "+39 333 0000000"}
                />
                <div className="flex gap-2 pt-1">
                  <Button onClick={handleAdd} disabled={!newLabel.trim() || !newValue.trim()}>Aggiungi</Button>
                  <Button variant="ghost" onClick={() => setShowAddForm(false)}>Annulla</Button>
                </div>
              </Card>
            )}

            <div className="flex justify-end pt-2">
              <Button onClick={handleSave} disabled={saving}>
                {saving ? "Salvataggio…" : "Salva preferenze"}
                <MousePointerClick size={14} strokeWidth={1.75} />
              </Button>
            </div>
          </div>
        </div>
      </AppShell>
    </>
  );
}
