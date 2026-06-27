import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Upload } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { AppShell } from "@/components/layout/AppShell";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { useRequireAuth } from "@/lib/useRequireAuth";
import { useCreateProject } from "@/lib/queries/projects";
import { templates, templateCategories, type TemplateCategory, type Template } from "@/data/templates";
import { TemplatePreviewCard } from "@/components/templates/TemplatePreviewCard";
import { TemplateDetailModal } from "@/components/templates/TemplateDetailModal";

export default function TemplatesLibraryPage() {
  const { isChecking } = useRequireAuth();
  const navigate = useNavigate();
  const createProject = useCreateProject();

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<TemplateCategory | "all">("all");
  const [selected, setSelected] = useState<Template | null>(null);

  const filtered = useMemo(() => {
    return templates.filter((t) => {
      const matchesCategory = activeCategory === "all" || t.category === activeCategory;
      const matchesSearch =
        search.trim().length === 0 ||
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

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

  function handleUseTemplate(template: Template) {
    createProject.mutate(
      { name: template.name, templateId: template.id },
      { onSuccess: (project) => navigate(`/app/projects/${project.id}/editor`) }
    );
  }

  return (
    <>
      <Seo title="Template — ForgeSite" description="" path="/app/templates" indexable={false} />
      <AppShell>
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <div>
<<<<<<< HEAD
              <h1 className="mb-1 font-display text-2xl font-semibold text-[var(--text-primary)]">Libreria template</h1>
              <p className="text-sm text-[var(--text-secondary)]">
=======
<<<<<<< HEAD
              <h1 className="mb-1 font-display text-2xl font-semibold text-forge-text-primary">Libreria template</h1>
              <p className="text-sm text-forge-text-secondary">
=======
              <h1 className="mb-1 font-display text-2xl font-semibold text-[var(--text-primary)]">Libreria template</h1>
              <p className="text-sm text-[var(--text-secondary)]">
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                {templates.length} template pronti per ogni tipo di attività. Scegline uno o importa un tuo tema.
              </p>
            </div>
            <Button variant="secondary">
              <Upload size={14} strokeWidth={1.75} />
              Importa tema
            </Button>
          </div>

          <div className="mb-5">
            <Input
              label=""
              placeholder="Cerca un template…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="max-w-sm"
            />
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                activeCategory === "all"
<<<<<<< HEAD
                  ? "border-[var(--accent)] bg-[var(--accent-dim)] text-[var(--accent-soft)]"
                  : "border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)]/40"
=======
<<<<<<< HEAD
                  ? "border-forge-accent bg-forge-accent-dim text-forge-accent-soft"
                  : "border-forge-border text-forge-text-secondary hover:border-forge-accent/40"
=======
                  ? "border-[var(--accent)] bg-[var(--accent-dim)] text-[var(--accent-soft)]"
                  : "border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)]/40"
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
              )}
            >
              Tutti
            </button>
            {templateCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                  activeCategory === cat.id
<<<<<<< HEAD
                    ? "border-[var(--accent)] bg-[var(--accent-dim)] text-[var(--accent-soft)]"
                    : "border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)]/40"
=======
<<<<<<< HEAD
                    ? "border-forge-accent bg-forge-accent-dim text-forge-accent-soft"
                    : "border-forge-border text-forge-text-secondary hover:border-forge-accent/40"
=======
                    ? "border-[var(--accent)] bg-[var(--accent-dim)] text-[var(--accent-soft)]"
                    : "border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)]/40"
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
<<<<<<< HEAD
            <div className="flex flex-col items-center gap-2 rounded-md border border-dashed border-[var(--border)] py-16 text-center">
              <Search size={20} className="text-[var(--text-muted)]" strokeWidth={1.5} />
              <p className="text-sm text-[var(--text-secondary)]">Nessun template trovato per questa ricerca.</p>
=======
<<<<<<< HEAD
            <div className="flex flex-col items-center gap-2 rounded-md border border-dashed border-forge-border py-16 text-center">
              <Search size={20} className="text-forge-text-muted" strokeWidth={1.5} />
              <p className="text-sm text-forge-text-secondary">Nessun template trovato per questa ricerca.</p>
=======
            <div className="flex flex-col items-center gap-2 rounded-md border border-dashed border-[var(--border)] py-16 text-center">
              <Search size={20} className="text-[var(--text-muted)]" strokeWidth={1.5} />
              <p className="text-sm text-[var(--text-secondary)]">Nessun template trovato per questa ricerca.</p>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((template) => (
                <TemplatePreviewCard key={template.id} template={template} onSelect={() => setSelected(template)} />
              ))}
            </div>
          )}
        </div>

        {selected && (
          <TemplateDetailModal
            template={selected}
            onClose={() => setSelected(null)}
            onUse={() => handleUseTemplate(selected)}
          />
        )}
      </AppShell>
    </>
  );
}
