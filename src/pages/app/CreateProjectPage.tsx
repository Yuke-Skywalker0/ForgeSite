import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, LayoutTemplate } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { AppShell } from "@/components/layout/AppShell";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import { useCreateProject } from "@/lib/queries/projects";
import { useRequireAuth } from "@/lib/useRequireAuth";

type CreationPath = "template" | "ai";

const templateCategories = [
  "barber", "restaurant", "saas", "portfolio", "ecommerce",
  "agency", "developer", "landing", "legal", "healthcare", "startup",
] as const;

export default function CreateProjectPage() {
  const { isChecking } = useRequireAuth();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [name, setName] = useState("");
  const [path, setPath] = useState<CreationPath | null>(null);
  const [templateId, setTemplateId] = useState<string | null>(null);
  const [businessInfo, setBusinessInfo] = useState({ sector: "", tone: "" });
  const navigate = useNavigate();
  const createProject = useCreateProject();

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

  function handleStepOneSubmit(e: FormEvent) {
    e.preventDefault();
    if (name.trim().length === 0) return;
    setStep(2);
  }

  function handleFinalize() {
    createProject.mutate(
      {
        name,
        templateId: path === "template" ? (templateId ?? undefined) : undefined,
        aiGenerate: path === "ai",
      },
      { onSuccess: (project) => navigate(`/app/projects/${project.id}/editor`) }
    );
  }

  return (
    <>
      <Seo title="Nuovo progetto — ForgeSite" description="" path="/app/projects/new" indexable={false} />
      <AppShell>
        <div className="mx-auto max-w-2xl">
<<<<<<< HEAD
          <h1 className="mb-1 font-display text-2xl font-semibold text-[var(--text-primary)]">Nuovo progetto</h1>
          <p className="mb-8 text-sm text-[var(--text-secondary)]">Passo {step} di 3</p>
=======
<<<<<<< HEAD
          <h1 className="mb-1 font-display text-2xl font-semibold text-forge-text-primary">Nuovo progetto</h1>
          <p className="mb-8 text-sm text-forge-text-secondary">Passo {step} di 3</p>
=======
          <h1 className="mb-1 font-display text-2xl font-semibold text-[var(--text-primary)]">Nuovo progetto</h1>
          <p className="mb-8 text-sm text-[var(--text-secondary)]">Passo {step} di 3</p>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb

          {step === 1 && (
            <form onSubmit={handleStepOneSubmit} className="flex flex-col gap-4">
              <Input
                label="Nome del progetto"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="es. Sito Studio Legale Rossi"
                autoFocus
                required
              />
              <Button type="submit" className="self-start">Continua</Button>
            </form>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => { setPath("template"); setStep(3); }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  className="flex flex-col items-start gap-2 rounded-md border border-forge-border bg-forge-surface p-5 text-left hover:border-forge-accent/40"
                >
                  <LayoutTemplate size={20} className="text-forge-accent-soft" strokeWidth={1.75} />
                  <span className="font-display text-sm font-medium text-forge-text-primary">Scegli un template</span>
                  <span className="text-xs text-forge-text-secondary">Parti da una struttura pronta e personalizzala.</span>
=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                  className="flex flex-col items-start gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] p-5 text-left hover:border-[var(--accent)]/40"
                >
                  <LayoutTemplate size={20} className="text-[var(--accent-soft)]" strokeWidth={1.75} />
                  <span className="font-display text-sm font-medium text-[var(--text-primary)]">Scegli un template</span>
                  <span className="text-xs text-[var(--text-secondary)]">Parti da una struttura pronta e personalizzala.</span>
<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                </button>

                <button
                  type="button"
                  onClick={() => { setPath("ai"); setStep(3); }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  className="flex flex-col items-start gap-2 rounded-md border border-forge-border bg-forge-surface p-5 text-left hover:border-forge-accent/40"
                >
                  <Sparkles size={20} className="text-forge-accent-soft" strokeWidth={1.75} />
                  <span className="font-display text-sm font-medium text-forge-text-primary">Genera con AI</span>
                  <span className="text-xs text-forge-text-secondary">Descrivi la tua attività, l'AI genera il sito.</span>
=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                  className="flex flex-col items-start gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] p-5 text-left hover:border-[var(--accent)]/40"
                >
                  <Sparkles size={20} className="text-[var(--accent-soft)]" strokeWidth={1.75} />
                  <span className="font-display text-sm font-medium text-[var(--text-primary)]">Genera con AI</span>
                  <span className="text-xs text-[var(--text-secondary)]">Descrivi la tua attività, l'AI genera il sito.</span>
<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                </button>
              </div>
              <Button variant="ghost" onClick={() => setStep(1)} className="self-start">Torna indietro</Button>
            </div>
          )}

          {step === 3 && path === "template" && (
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-3">
                {templateCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setTemplateId(cat)}
                    className={cn(
                      "rounded-sm border px-3 py-3 text-center text-sm capitalize transition-colors",
                      templateId === cat
<<<<<<< HEAD
                        ? "border-[var(--accent)] bg-[var(--accent-dim)] text-[var(--accent-soft)]"
                        : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:border-[var(--accent)]/40"
=======
<<<<<<< HEAD
                        ? "border-forge-accent bg-forge-accent-dim text-forge-accent-soft"
                        : "border-forge-border bg-forge-surface text-forge-text-secondary hover:border-forge-accent/40"
=======
                        ? "border-[var(--accent)] bg-[var(--accent-dim)] text-[var(--accent-soft)]"
                        : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:border-[var(--accent)]/40"
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <Button variant="ghost" onClick={() => setStep(2)}>Torna indietro</Button>
                <Button onClick={handleFinalize} disabled={!templateId || createProject.isPending}>
                  {createProject.isPending ? "Creazione in corso…" : "Crea progetto"}
                </Button>
              </div>
            </div>
          )}

          {step === 3 && path === "ai" && (
            <div className="flex flex-col gap-4">
              <Card className="flex flex-col gap-4">
                <Input
                  label="Settore di attività"
                  value={businessInfo.sector}
                  onChange={(e) => setBusinessInfo((b) => ({ ...b, sector: e.target.value }))}
                  placeholder="es. studio legale, ristorante, software house"
                />
                <Input
                  label="Tono di voce desiderato"
                  value={businessInfo.tone}
                  onChange={(e) => setBusinessInfo((b) => ({ ...b, tone: e.target.value }))}
                  placeholder="es. professionale, amichevole, minimal"
                />
              </Card>
              <div className="flex gap-3">
                <Button variant="ghost" onClick={() => setStep(2)}>Torna indietro</Button>
                <Button
                  onClick={handleFinalize}
                  disabled={businessInfo.sector.trim().length === 0 || createProject.isPending}
                >
                  {createProject.isPending ? "Generazione in corso…" : "Genera sito"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </AppShell>
    </>
  );
}
