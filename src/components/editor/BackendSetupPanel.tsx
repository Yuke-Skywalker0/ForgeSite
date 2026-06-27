import { useState } from "react";
import { Database, Zap, ShieldCheck, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { useProjectBackend, useProvisionBackend } from "@/lib/queries/backend";
import type { BackendProvider } from "@/types";

const providerInfo: Record<BackendProvider, { label: string; tagline: string; bestFor: string; signupUrl: string }> = {
  supabase: {
    label: "Supabase",
    tagline: "Auth utenti finali + Postgres incluso",
    bestFor: "Consigliato se il sito ha login utenti, aree riservate, e-commerce",
    signupUrl: "https://supabase.com/dashboard/sign-up",
  },
  render: {
    label: "Render",
    tagline: "API custom dedicata, stesso stack del backend FORGESITE",
    bestFor: "Consigliato per logica server-side semplice senza auth complessa",
    signupUrl: "https://dashboard.render.com/register",
  },
  cloudflare: {
    label: "Cloudflare Workers",
    tagline: "Funzioni serverless globali + D1 database",
    bestFor: "Consigliato per progetti con traffico alto o utenti distribuiti geograficamente",
    signupUrl: "https://dash.cloudflare.com/sign-up",
  },
};

export function BackendSetupPanel({ projectId }: { projectId: string }) {
  const { data: backend, isLoading } = useProjectBackend(projectId);
  const provision = useProvisionBackend(projectId);

  const [provider, setProvider] = useState<BackendProvider | null>(null);
  const [accountMode, setAccountMode] = useState<"existing" | "new" | null>(null);
  const [apiKey, setApiKey] = useState("");
  const [projectUrl, setProjectUrl] = useState("");
  const [features, setFeatures] = useState({ authEnabled: false, databaseEnabled: true, customEndpoints: true });

<<<<<<< HEAD
  if (isLoading) return <p className="text-sm text-forge-text-muted">Caricamento configurazione…</p>;
=======
  if (isLoading) return <p className="text-sm text-[var(--text-muted)]">Caricamento configurazione…</p>;
>>>>>>> 06d1697 (versione 4 frontend quasi finale)

  if (backend && backend.status !== "not_configured") {
    return (
      <Card className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
<<<<<<< HEAD
          <h3 className="font-display text-sm font-medium text-forge-text-primary">Backend del sito</h3>
=======
          <h3 className="font-display text-sm font-medium text-[var(--text-primary)]">Backend del sito</h3>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
          <Badge variant={backend.status === "active" ? "success" : backend.status === "provisioning" ? "warning" : "danger"}>
            {backend.status === "active" ? "Attivo" : backend.status === "provisioning" ? "In configurazione" : "Errore"}
          </Badge>
        </div>
        <p className="text-sm text-[var(--text-secondary)]">
          Provider: <span className="capitalize">{providerInfo[backend.provider].label}</span>
        </p>
        {backend.apiBaseUrl && (
<<<<<<< HEAD
          <a href={backend.apiBaseUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs text-forge-accent-soft hover:underline">
=======
          <a href={backend.apiBaseUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs text-[var(--accent-soft)] hover:underline">
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
            {backend.apiBaseUrl}
            <ExternalLink size={11} />
          </a>
        )}
        <div className="flex gap-2">
          {backend.features.authEnabled && <Badge variant="accent">Auth</Badge>}
          {backend.features.databaseEnabled && <Badge variant="accent">Database</Badge>}
          {backend.features.customEndpoints && <Badge variant="accent">API custom</Badge>}
        </div>
      </Card>
    );
  }

  return (
    <Card className="flex flex-col gap-5">
      <div>
<<<<<<< HEAD
        <h3 className="font-display text-sm font-medium text-forge-text-primary">Aggiungi un backend al sito</h3>
        <p className="text-sm text-forge-text-secondary">
=======
        <h3 className="font-display text-sm font-medium text-[var(--text-primary)]">Aggiungi un backend al sito</h3>
        <p className="text-sm text-[var(--text-secondary)]">
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
          Facoltativo. Serve solo se il sito ha bisogno di login utenti, database, o logica server-side oltre ai form statici.
        </p>
      </div>

      {!provider && (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {(Object.keys(providerInfo) as BackendProvider[]).map((key) => {
            const info = providerInfo[key];
            const Icon = key === "supabase" ? ShieldCheck : key === "render" ? Database : Zap;
            return (
              <button
                key={key}
                onClick={() => setProvider(key)}
<<<<<<< HEAD
                className="flex flex-col items-start gap-2 rounded-md border border-forge-border bg-forge-surface-raised p-4 text-left hover:border-forge-accent/40"
              >
                <Icon size={18} className="text-forge-accent-soft" strokeWidth={1.75} />
                <span className="font-display text-sm font-medium text-forge-text-primary">{info.label}</span>
                <span className="text-xs text-forge-text-secondary">{info.tagline}</span>
                <span className="text-xs text-forge-text-muted">{info.bestFor}</span>
=======
                className="flex flex-col items-start gap-2 rounded-md border border-[var(--border)] bg-[var(--surface-raised)] p-4 text-left hover:border-[var(--accent)]/40"
              >
                <Icon size={18} className="text-[var(--accent-soft)]" strokeWidth={1.75} />
                <span className="font-display text-sm font-medium text-[var(--text-primary)]">{info.label}</span>
                <span className="text-xs text-[var(--text-secondary)]">{info.tagline}</span>
                <span className="text-xs text-[var(--text-muted)]">{info.bestFor}</span>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
              </button>
            );
          })}
        </div>
      )}

      {provider && !accountMode && (
        <div className="flex flex-col gap-3">
<<<<<<< HEAD
          <p className="text-sm text-forge-text-secondary">Hai già un account {providerInfo[provider].label}?</p>
=======
          <p className="text-sm text-[var(--text-secondary)]">Hai già un account {providerInfo[provider].label}?</p>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
          <div className="flex gap-3">
            <Button variant="secondary" onClick={() => setAccountMode("existing")}>Sì, collega account esistente</Button>
            <Button variant="secondary" onClick={() => setAccountMode("new")}>No, voglio crearne uno</Button>
          </div>
          <Button variant="ghost" onClick={() => setProvider(null)} className="self-start">Cambia provider</Button>
        </div>
      )}

      {provider && accountMode === "new" && (
<<<<<<< HEAD
        <div className="flex flex-col gap-3 rounded-sm border border-dashed border-forge-border p-4">
          <p className="text-sm text-forge-text-secondary">
=======
        <div className="flex flex-col gap-3 rounded-sm border border-dashed border-[var(--border)] p-4">
          <p className="text-sm text-[var(--text-secondary)]">
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
            Crea un account gratuito su {providerInfo[provider].label}, poi torna qui per collegarlo.
          </p>
          <a href={providerInfo[provider].signupUrl} target="_blank" rel="noreferrer" className="self-start">
            <Button variant="secondary">
              Crea account su {providerInfo[provider].label}
              <ExternalLink size={13} strokeWidth={1.75} />
            </Button>
          </a>
          <Button variant="ghost" onClick={() => setAccountMode("existing")} className="self-start">Fatto, ora collego le chiavi</Button>
        </div>
      )}

      {provider && accountMode === "existing" && (
        <div className="flex flex-col gap-3">
          <Input
            label={provider === "supabase" ? "Project URL Supabase" : "API Base URL"}
            value={projectUrl}
            onChange={(e) => setProjectUrl(e.target.value)}
            placeholder={provider === "supabase" ? "https://xxxx.supabase.co" : "https://..."}
          />
          <Input
            label={provider === "supabase" ? "Service Role Key" : "API Key"}
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
<<<<<<< HEAD
          <p className="text-xs text-forge-text-muted">
=======
          <p className="text-xs text-[var(--text-muted)]">
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
            Le chiavi vengono cifrate at-rest e non sono mai visibili nel frontend dopo il salvataggio.
          </p>

          <div className="mt-2 flex flex-col gap-2">
<<<<<<< HEAD
            <span className="text-xs font-medium text-forge-text-secondary">Funzionalità</span>
=======
            <span className="text-xs font-medium text-[var(--text-secondary)]">Funzionalità</span>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
            {([
              ["authEnabled", "Autenticazione utenti finali"],
              ["databaseEnabled", "Database dedicato"],
              ["customEndpoints", "Endpoint API custom"],
            ] as const).map(([key, label]) => (
<<<<<<< HEAD
              <label key={key} className="flex items-center gap-2 text-sm text-forge-text-secondary">
=======
              <label key={key} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
                <input
                  type="checkbox"
                  checked={features[key]}
                  onChange={(e) => setFeatures((f) => ({ ...f, [key]: e.target.checked }))}
                  className="accent-forge-accent"
                />
                {label}
              </label>
            ))}
          </div>

          <div className="mt-2 flex gap-3">
            <Button variant="ghost" onClick={() => setAccountMode(null)}>Torna indietro</Button>
            <Button
              disabled={!projectUrl || !apiKey || provision.isPending}
              onClick={() => provision.mutate({ provider, isExistingAccount: true, existingCredentials: { apiKey, projectUrl }, features })}
            >
              {provision.isPending ? "Configurazione in corso…" : "Collega backend"}
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}
