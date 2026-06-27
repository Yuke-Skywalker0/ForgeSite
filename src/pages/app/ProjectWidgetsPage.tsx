import { useState } from "react";
import { useParams } from "react-router-dom";
import { Plus, Trash2, Phone, Mail, MessageCircle, ArrowUp, MessageSquare, Bell, Tag } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
import { useRequireAuth } from "@/lib/useRequireAuth";

type WidgetType = "whatsapp" | "phone" | "email" | "backtop" | "chat_bubble" | "announcement" | "promo_popup";
type Position = "bottom-right" | "bottom-left" | "bottom-center";

interface FloatingWidget {
  id: string;
  type: WidgetType;
  label: string;
  value: string;
  position: Position;
  color: string;
  enabled: boolean;
}

const widgetMeta: Record<WidgetType, { label: string; icon: typeof Phone; description: string; hasValue: boolean; valuePlaceholder: string }> = {
  whatsapp:    { label: "WhatsApp",           icon: MessageCircle, description: "Bottone che apre una chat WhatsApp",            hasValue: true,  valuePlaceholder: "+39 333 0000000" },
  phone:       { label: "Chiama",             icon: Phone,         description: "Bottone click-to-call per mobile",             hasValue: true,  valuePlaceholder: "+39 333 0000000" },
  email:       { label: "Scrivi un'email",    icon: Mail,          description: "Bottone che apre il client email",             hasValue: true,  valuePlaceholder: "info@esempio.it" },
  backtop:     { label: "Torna in cima",      icon: ArrowUp,       description: "Freccia per tornare in cima alla pagina",      hasValue: false, valuePlaceholder: "" },
  chat_bubble: { label: "Chat bubble",        icon: MessageSquare, description: "Bolla di chat con messaggio personalizzabile", hasValue: true,  valuePlaceholder: "Ciao! Come posso aiutarti?" },
  announcement:{ label: "Banner annuncio",   icon: Bell,          description: "Banner nella parte alta o bassa della pagina", hasValue: true,  valuePlaceholder: "🎉 Offerta speciale — scopri di più" },
  promo_popup: { label: "Popup promozionale", icon: Tag,           description: "Popup che appare dopo alcuni secondi",         hasValue: true,  valuePlaceholder: "Sconto 10% sul primo acquisto" },
};

const positions: Array<{ id: Position; label: string }> = [
  { id: "bottom-right",  label: "In basso a destra" },
  { id: "bottom-left",   label: "In basso a sinistra" },
  { id: "bottom-center", label: "In basso al centro" },
];

const defaultWidgets: FloatingWidget[] = [
  { id: "w1", type: "whatsapp", label: "WhatsApp", value: "+39 333 0000000", position: "bottom-right", color: "#25D366", enabled: true },
  { id: "w2", type: "backtop",  label: "Torna in cima", value: "", position: "bottom-right", color: "#34D399", enabled: true },
];

function WidgetPreview({ widget }: { widget: FloatingWidget }) {
  const { icon: Icon } = widgetMeta[widget.type];
  return (
    <div
      className="flex h-10 w-10 items-center justify-center rounded-full shadow-lg"
      style={{ backgroundColor: widget.color }}
    >
<<<<<<< HEAD
      <Icon size={18} color="#fff" strokeWidth={2} />
=======
<<<<<<< HEAD
      <Icon size={18} color="var(--text-on-accent)" strokeWidth={2} />
=======
      <Icon size={18} color="#fff" strokeWidth={2} />
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
    </div>
  );
}

export default function ProjectWidgetsPage() {
  const { isChecking } = useRequireAuth();
  const { projectId } = useParams<{ projectId: string }>();
  const [widgets, setWidgets] = useState<FloatingWidget[]>(defaultWidgets);
  const [showForm, setShowForm] = useState(false);
  const [newType, setNewType] = useState<WidgetType>("whatsapp");
  const [newValue, setNewValue] = useState("");
  const [newPosition, setNewPosition] = useState<Position>("bottom-right");
  const [newColor, setNewColor] = useState("#34D399");
  const [saving, setSaving] = useState(false);

<<<<<<< HEAD
  if (isChecking) return <div className="flex min-h-screen items-center justify-center text-sm text-[var(--text-muted)]">Verifica sessione…</div>;
=======
<<<<<<< HEAD
  if (isChecking) return <div className="flex min-h-screen items-center justify-center text-sm text-forge-text-muted">Verifica sessione…</div>;
=======
  if (isChecking) return <div className="flex min-h-screen items-center justify-center text-sm text-[var(--text-muted)]">Verifica sessione…</div>;
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
  if (!projectId) return null;

  function handleAdd() {
    const meta = widgetMeta[newType];
    setWidgets((w) => [
      ...w,
      {
        id: `w_${Date.now()}`,
        type: newType,
        label: meta.label,
        value: newValue.trim(),
        position: newPosition,
        color: newColor,
        enabled: true,
      },
    ]);
    setNewValue("");
    setShowForm(false);
  }

  async function handleSave() {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 800));
    setSaving(false);
  }

  const selectedMeta = widgetMeta[newType];

  return (
    <>
      <Seo title="Widget galleggianti — ForgeSite" description="" path={`/app/projects/${projectId}/widgets`} indexable={false} />
      <AppShell>
        <div className="mx-auto max-w-3xl">
          <div className="mb-6">
<<<<<<< HEAD
            <h1 className="mb-1 font-display text-2xl font-semibold text-[var(--text-primary)]">Widget galleggianti</h1>
            <p className="text-sm text-[var(--text-secondary)]">
=======
<<<<<<< HEAD
            <h1 className="mb-1 font-display text-2xl font-semibold text-forge-text-primary">Widget galleggianti</h1>
            <p className="text-sm text-forge-text-secondary">
=======
            <h1 className="mb-1 font-display text-2xl font-semibold text-[var(--text-primary)]">Widget galleggianti</h1>
            <p className="text-sm text-[var(--text-secondary)]">
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
              Aggiungi bottoni e widget che appaiono sopra il sito: WhatsApp, chiamata, email, chat bubble, banner e popup promo.
            </p>
          </div>

          {/* Anteprima posizionale */}
<<<<<<< HEAD
          <Card className="relative mb-6 h-48 overflow-hidden bg-[var(--bg)]">
            <p className="absolute left-3 top-3 text-xs text-[var(--text-muted)]">Anteprima posizioni</p>
=======
<<<<<<< HEAD
          <Card className="relative mb-6 h-48 overflow-hidden bg-forge-bg">
            <p className="absolute left-3 top-3 text-xs text-forge-text-muted">Anteprima posizioni</p>
=======
          <Card className="relative mb-6 h-48 overflow-hidden bg-[var(--bg)]">
            <p className="absolute left-3 top-3 text-xs text-[var(--text-muted)]">Anteprima posizioni</p>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
            {widgets.filter((w) => w.enabled).map((widget) => (
              <div
                key={widget.id}
                className={cn(
                  "absolute flex flex-col items-center gap-1",
                  widget.position === "bottom-right"  && "bottom-4 right-4",
                  widget.position === "bottom-left"   && "bottom-4 left-4",
                  widget.position === "bottom-center" && "bottom-4 left-1/2 -translate-x-1/2"
                )}
              >
                <WidgetPreview widget={widget} />
              </div>
            ))}
            {widgets.filter((w) => w.enabled).length === 0 && (
<<<<<<< HEAD
              <p className="absolute inset-0 flex items-center justify-center text-sm text-[var(--text-muted)]">
=======
<<<<<<< HEAD
              <p className="absolute inset-0 flex items-center justify-center text-sm text-forge-text-muted">
=======
              <p className="absolute inset-0 flex items-center justify-center text-sm text-[var(--text-muted)]">
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                Nessun widget abilitato
              </p>
            )}
          </Card>

          <div className="flex flex-col gap-3">
            {widgets.map((widget) => {
              const { icon: Icon } = widgetMeta[widget.type];
              const posLabel = positions.find((p) => p.id === widget.position)?.label ?? widget.position;
              return (
                <Card key={widget.id} className="flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 flex-none items-center justify-center rounded-full"
                    style={{ backgroundColor: widget.color }}
                  >
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    <Icon size={16} color="var(--text-on-accent)" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-forge-text-primary">{widget.label}</p>
                    <p className="truncate text-xs text-forge-text-muted">{posLabel}{widget.value ? ` • ${widget.value}` : ""}</p>
=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                    <Icon size={16} color="#fff" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[var(--text-primary)]">{widget.label}</p>
                    <p className="truncate text-xs text-[var(--text-muted)]">{posLabel}{widget.value ? ` • ${widget.value}` : ""}</p>
<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                  </div>
                  <Badge variant={widget.enabled ? "success" : "neutral"}>
                    {widget.enabled ? "Attivo" : "Off"}
                  </Badge>
                  <button
                    onClick={() => setWidgets((w) => w.map((x) => x.id === widget.id ? { ...x, enabled: !x.enabled } : x))}
<<<<<<< HEAD
                    className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
=======
<<<<<<< HEAD
                    className="text-xs text-forge-text-secondary hover:text-forge-text-primary"
=======
                    className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                  >
                    {widget.enabled ? "Disabilita" : "Abilita"}
                  </button>
                  <button
                    onClick={() => setWidgets((w) => w.filter((x) => x.id !== widget.id))}
<<<<<<< HEAD
                    className="text-[var(--text-muted)] hover:text-[#EF4444]"
=======
<<<<<<< HEAD
                    className="text-forge-text-muted hover:text-forge-danger"
=======
                    className="text-[var(--text-muted)] hover:text-[#EF4444]"
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                    aria-label="Rimuovi widget"
                  >
                    <Trash2 size={14} strokeWidth={1.75} />
                  </button>
                </Card>
              );
            })}

            {showForm && (
              <Card className="flex flex-col gap-4">
<<<<<<< HEAD
=======
<<<<<<< HEAD
                <h3 className="font-display text-sm font-medium text-forge-text-primary">Nuovo widget</h3>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-forge-text-secondary">Tipo di widget</label>
                    <select
                      value={newType}
                      onChange={(e) => { setNewType(e.target.value as WidgetType); setNewValue(""); }}
                      className="rounded-sm border border-forge-border bg-forge-surface-raised px-3 py-2 text-sm text-forge-text-primary"
=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                <h3 className="font-display text-sm font-medium text-[var(--text-primary)]">Nuovo widget</h3>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-[var(--text-secondary)]">Tipo di widget</label>
                    <select
                      value={newType}
                      onChange={(e) => { setNewType(e.target.value as WidgetType); setNewValue(""); }}
                      className="rounded-sm border border-[var(--border)] bg-[var(--surface-raised)] px-3 py-2 text-sm text-[var(--text-primary)]"
<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                    >
                      {(Object.keys(widgetMeta) as WidgetType[]).map((type) => (
                        <option key={type} value={type}>{widgetMeta[type].label}</option>
                      ))}
                    </select>
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    <p className="text-xs text-forge-text-muted">{selectedMeta.description}</p>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-forge-text-secondary">Posizione</label>
                    <select
                      value={newPosition}
                      onChange={(e) => setNewPosition(e.target.value as Position)}
                      className="rounded-sm border border-forge-border bg-forge-surface-raised px-3 py-2 text-sm text-forge-text-primary"
=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                    <p className="text-xs text-[var(--text-muted)]">{selectedMeta.description}</p>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-[var(--text-secondary)]">Posizione</label>
                    <select
                      value={newPosition}
                      onChange={(e) => setNewPosition(e.target.value as Position)}
                      className="rounded-sm border border-[var(--border)] bg-[var(--surface-raised)] px-3 py-2 text-sm text-[var(--text-primary)]"
<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                    >
                      {positions.map((p) => (
                        <option key={p.id} value={p.id}>{p.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {selectedMeta.hasValue && (
                  <Input
                    label={selectedMeta.label}
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    placeholder={selectedMeta.valuePlaceholder}
                  />
                )}

                <div className="flex items-center gap-3">
<<<<<<< HEAD
                  <label className="text-sm text-[var(--text-secondary)]">Colore</label>
=======
<<<<<<< HEAD
                  <label className="text-sm text-forge-text-secondary">Colore</label>
=======
                  <label className="text-sm text-[var(--text-secondary)]">Colore</label>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                  <input
                    type="color"
                    value={newColor}
                    onChange={(e) => setNewColor(e.target.value)}
<<<<<<< HEAD
                    className="h-8 w-14 cursor-pointer rounded-sm border border-[var(--border)] bg-transparent"
                  />
                  <span className="font-mono text-xs text-[var(--text-muted)]">{newColor}</span>
=======
<<<<<<< HEAD
                    className="h-8 w-14 cursor-pointer rounded-sm border border-forge-border bg-transparent"
                  />
                  <span className="font-mono text-xs text-forge-text-muted">{newColor}</span>
=======
                    className="h-8 w-14 cursor-pointer rounded-sm border border-[var(--border)] bg-transparent"
                  />
                  <span className="font-mono text-xs text-[var(--text-muted)]">{newColor}</span>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                </div>

                <div className="flex gap-2 pt-1">
                  <Button onClick={handleAdd} disabled={selectedMeta.hasValue && !newValue.trim()}>
                    Aggiungi widget
                  </Button>
                  <Button variant="ghost" onClick={() => setShowForm(false)}>Annulla</Button>
                </div>
              </Card>
            )}

            {!showForm && (
              <Button variant="secondary" onClick={() => setShowForm(true)}>
                <Plus size={14} strokeWidth={2} />
                Aggiungi widget
              </Button>
            )}

            <div className="flex justify-end pt-2">
              <Button onClick={handleSave} disabled={saving}>
                {saving ? "Salvataggio…" : "Salva configurazione"}
              </Button>
            </div>
          </div>
        </div>
      </AppShell>
    </>
  );
}
