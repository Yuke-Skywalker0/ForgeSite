import { Link } from "react-router-dom";
import { FolderGit2, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { DeployHeatBar } from "@/components/dashboard/DeployHeatBar";
import type { Project, DeploymentStatus } from "@/types";

export function ProjectCard({
  project,
  deployStatus = "success",
}: {
  project: Project;
  deployStatus?: DeploymentStatus;
}) {
  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <FolderGit2 size={16} className="text-[var(--text-secondary)]" strokeWidth={1.75} />
          <Link
            to={`/app/projects/${project.id}/editor`}
<<<<<<< HEAD
            className="font-display text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent-soft)]"
=======
<<<<<<< HEAD
            className="font-display text-sm font-medium text-forge-text-primary hover:text-forge-accent-soft"
=======
            className="font-display text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent-soft)]"
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
          >
            {project.name}
          </Link>
        </div>
        <Badge variant={project.status === "active" ? "success" : "neutral"}>
          {project.status === "active" ? "Attivo" : "Archiviato"}
        </Badge>
      </div>

      {project.githubRepoName && (
        <a
          href={`https://github.com/${project.githubOwner}/${project.githubRepoName}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
        >
          {project.githubOwner}/{project.githubRepoName}
          <ExternalLink size={12} strokeWidth={1.75} />
        </a>
      )}

      <div className="mt-1 flex items-center justify-between">
        <DeployHeatBar status={deployStatus} />
<<<<<<< HEAD
        <span className="font-mono text-xs text-[var(--text-muted)]">{project.defaultBranch}</span>
=======
<<<<<<< HEAD
        <span className="font-mono text-xs text-forge-text-muted">{project.defaultBranch}</span>
=======
        <span className="font-mono text-xs text-[var(--text-muted)]">{project.defaultBranch}</span>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
      </div>
    </Card>
  );
}
