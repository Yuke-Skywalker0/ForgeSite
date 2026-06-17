import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/apiClient";
import type { Project } from "@/types";

const PROJECTS_KEY = ["projects"] as const;

export function useProjects() {
  return useQuery({
    queryKey: PROJECTS_KEY,
    queryFn: () => api.get<Project[]>("/projects"),
  });
}

export function useProject(projectId: string | undefined) {
  return useQuery({
    queryKey: ["projects", projectId],
    queryFn: () => api.get<Project>(`/projects/${projectId}`),
    enabled: Boolean(projectId),
  });
}

interface CreateProjectInput {
  name: string;
  templateId?: string;
  aiGenerate?: boolean;
}

export function useCreateProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateProjectInput) =>
      api.post<Project>("/projects", input),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: PROJECTS_KEY });
    },
  });
}
