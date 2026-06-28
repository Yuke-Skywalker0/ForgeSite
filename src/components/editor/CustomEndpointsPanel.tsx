import { useState, type FormEvent } from "react";
import { Plus, Lock } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { useCustomEndpoints, useCreateCustomEndpoint } from "@/lib/queries/backend";
import type { CustomEndpoint } from "@/types";

const methods: CustomEndpoint["method"][] = ["GET", "POST", "PATCH", "DELETE"];

export function CustomEndpointsPanel({ projectBackendId }: { projectBackendId: string }) {
  const { data: endpoints } = useCustomEndpoints(projectBackendId);
  const createEndpoint = useCreateCustomEndpoint(projectBackendId);

  const [showForm, setShowForm] = useState(false);
  const [path, setPath] = useState("");
  const [method, setMethod] = useState<CustomEndpoint["method"]>("GET");
  const [description, setDescription] = useState("");
  const [requiresAuth, setRequiresAuth] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    createEndpoint.mutate(
      { path, method, description, requiresAuth },
      {
        onSuccess: () => {
          setShowForm(false);
          setPath("");
          setDescription("");
        },
      }
    );
  }

  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-sm font-medium">Endpoint API custom</h3>
        <Button variant="secondary" onClick={() => setShowForm((v) => !v)}>
          <Plus size={14} strokeWidth={2} />
          Nuovo endpoint
        </Button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 rounded-sm border border-forge-border p-4">
          <div className="flex gap-3">
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value as CustomEndpoint["method"])}
              className="rounded-sm border border-forge-border bg-forge-surface-raised px-3 py-2 text-sm"
            >
              {methods.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
            <Input
              label=""
              value={path}
              onChange={(e) => setPath(e.target.value)}
              placeholder="/api/newsletter/subscribe"
              className="flex-1"
            />
          </div>
          <Input
            label="Cosa deve fare questo endpoint (linguaggio naturale, ForgeAI genera il codice)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="es. Salva email e nome nella tabella subscribers, invia email di conferma"
          />
          <label className="flex items-center gap-2 text-sm text-forge-text-secondary">
            <input
              type="checkbox"
              checked={requiresAuth}
              onChange={(e) => setRequiresAuth(e.target.checked)}
              className="accent-forge-ember"
            />
            Richiede utente autenticato
          </label>
          <div className="flex gap-2 self-start">
            <Button type="submit" disabled={!path || !description || createEndpoint.isPending}>
              {createEndpoint.isPending ? "Generazione…" : "Genera endpoint"}
            </Button>
            <Button type="button" variant="ghost" onClick={() => setShowForm(false)}>
              Annulla
            </Button>
          </div>
        </form>
      )}

      <div className="flex flex-col gap-2">
        {endpoints?.length === 0 && (
          <p className="text-sm text-forge-text-muted">Nessun endpoint custom ancora.</p>
        )}
        {endpoints?.map((ep: CustomEndpoint) => (
          <div
            key={ep.id}
            className="flex items-center gap-3 rounded-sm border border-forge-border px-3 py-2"
          >
            <Badge variant="ember">{ep.method}</Badge>
            <span className="font-mono text-xs text-forge-text-primary">{ep.path}</span>
            {ep.requiresAuth && (
              <Lock size={12} className="text-forge-text-muted" strokeWidth={1.75} />
            )}
            <span className="ml-auto truncate text-xs text-forge-text-secondary">
              {ep.description}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
