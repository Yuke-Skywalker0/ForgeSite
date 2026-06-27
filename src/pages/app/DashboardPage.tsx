import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/dashboard/ProjectCard";
import { useProjects } from "@/lib/queries/projects";
import { useRequireAuth } from "@/lib/useRequireAuth";

export default function DashboardPage() {
  const { isChecking } = useRequireAuth();
  const { data: projects, isLoading } = useProjects();

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

  return (
    <>
      <Seo title="Dashboard — ForgeSite" description="" path="/app/dashboard" indexable={false} />
      <AppShell>
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
<<<<<<< HEAD
              <h1 className="font-display text-2xl font-semibold text-[var(--text-primary)]">Dashboard</h1>
              <p className="text-sm text-[var(--text-secondary)]">I tuoi siti e lo stato dei deploy.</p>
=======
<<<<<<< HEAD
              <h1 className="font-display text-2xl font-semibold text-forge-text-primary">Dashboard</h1>
              <p className="text-sm text-forge-text-secondary">I tuoi siti e lo stato dei deploy.</p>
=======
              <h1 className="font-display text-2xl font-semibold text-[var(--text-primary)]">Dashboard</h1>
              <p className="text-sm text-[var(--text-secondary)]">I tuoi siti e lo stato dei deploy.</p>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
            </div>
            <Link to="/app/projects/new">
              <Button>
                <Plus size={16} strokeWidth={2} />
                Nuovo progetto
              </Button>
            </Link>
          </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
          {isLoading && <p className="text-sm text-forge-text-muted">Caricamento progetti…</p>}
          {!isLoading && projects?.length === 0 && (
            <div className="rounded-md border border-dashed border-forge-border p-8 text-center">
              <p className="text-sm text-forge-text-secondary">
=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
          {isLoading && <p className="text-sm text-[var(--text-muted)]">Caricamento progetti…</p>}
          {!isLoading && projects?.length === 0 && (
            <div className="rounded-md border border-dashed border-[var(--border)] p-8 text-center">
              <p className="text-sm text-[var(--text-secondary)]">
<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
                Nessun progetto ancora. Crea il primo sito per iniziare.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </AppShell>
    </>
  );
}
