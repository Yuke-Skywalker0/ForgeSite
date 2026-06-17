import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/dashboard/ProjectCard";
import { useProjects } from "@/lib/queries/projects";

export function ProjectsListPage() {
  const { data: projects, isLoading } = useProjects();

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-display text-2xl font-semibold">Progetti</h1>
        <Link to="/projects/new">
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
  );
}
