import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { Seo } from "@/components/marketing/Seo";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/dashboard/ProjectCard";
import { useProjects } from "@/lib/queries/projects";
import { useRequireAuth } from "@/lib/useRequireAuth";

export default function ProjectsListPage() {
  const { isChecking } = useRequireAuth();
  const { data: projects, isLoading } = useProjects();

  if (isChecking) {
    return <div className="flex min-h-screen items-center justify-center text-sm text-forge-text-muted">Verifica sessione…</div>;
  }

  return (
    <>
      <Seo title="Progetti — ForgeSite" description="" path="/app/projects" indexable={false} />
      <AppShell>
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="font-display text-2xl font-semibold text-forge-text-primary">Progetti</h1>
            <Link to="/app/projects/new">
              <Button>
                <Plus size={16} strokeWidth={2} />
                Nuovo progetto
              </Button>
            </Link>
          </div>

          {isLoading && <p className="text-sm text-forge-text-muted">Caricamento…</p>}

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
