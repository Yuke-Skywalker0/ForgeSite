import { Link } from "react-router-dom";
import { FolderGit2, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { DeployHeatBar } from "@/components/dashboard/DeployHeatBar";
import type { Project, DeploymentStatus } from "@/types";

interface ProjectCardProps {
  project: Project;
  deployStatus?: DeploymentStatus;
}

export function ProjectCard({ project, deployStatus = "success" }: ProjectCardProps) {
  return (
    <Card className="flex flex-col gap-3 transition-colors hover:border-forge-ember/30">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <FolderGit2 size={16} className="text-forge-text-secondary" strokeWidth={1.75} />
          <Link
            to={`/projects/${project.id}/editor`}
            className="font-display text-sm font-medium hover:text-forge-ember-soft"
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
          className="flex items-center gap-1 text-xs text-forge-text-secondary hover:text-forge-text-primary"
        >
          {project.githubOwner}/{project.githubRepoName}
          <ExternalLink size={12} strokeWidth={1.75} />
        </a>
      )}

      <div className="mt-1 flex items-center justify-between">
        <DeployHeatBar status={deployStatus} />
        <span className="font-mono text-xs text-forge-text-muted">
          {project.defaultBranch}
        </span>
      </div>
    </Card>
  );
}
