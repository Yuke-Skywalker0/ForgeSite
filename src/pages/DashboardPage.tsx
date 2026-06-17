import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/dashboard/ProjectCard";
import { SeoScorePanel } from "@/components/dashboard/SeoScorePanel";
import { AiUsagePanel } from "@/components/dashboard/AiUsagePanel";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { useProjects } from "@/lib/queries/projects";

export function DashboardPage() {
  const { data: projects, isLoading } = useProjects();

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold">Dashboard</h1>
          <p className="text-sm text-forge-text-secondary">
            I tuoi siti, lo stato dei deploy e l'attività recente.
          </p>
        </div>
        <Link to="/projects/new">
          <Button>
            <Plus size={16} strokeWidth={2} />
            Nuovo progetto
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <h2 className="font-display text-sm font-medium text-forge-text-secondary">
            Progetti
          </h2>
          {isLoading && (
            <p className="text-sm text-forge-text-muted">Caricamento progetti…</p>
          )}
          {!isLoading && projects?.length === 0 && (
            <div className="rounded-md border border-dashed border-forge-border p-8 text-center">
              <p className="text-sm text-forge-text-secondary">
                Nessun progetto ancora. Crea il primo sito per iniziare.
              </p>
            </div>
          )}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <SeoScorePanel items={[]} />
          <AiUsagePanel logs={[]} />
          <ActivityFeed items={[]} />
        </div>
      </div>
    </div>
  );
}
