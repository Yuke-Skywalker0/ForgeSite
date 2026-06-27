import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/apiClient";
import type { ProjectBackend, BackendProvider, CustomEndpoint } from "@/types";

export function useProjectBackend(projectId: string | undefined) {
  return useQuery({
    queryKey: ["projects", projectId, "backend"],
    queryFn: () => api.get<ProjectBackend | null>(`/projects/${projectId}/backend`),
    enabled: Boolean(projectId),
  });
}

interface ProvisionBackendInput {
  provider: BackendProvider;
  isExistingAccount: boolean;
  existingCredentials?: { apiKey?: string; projectUrl?: string };
  features: { authEnabled: boolean; databaseEnabled: boolean; customEndpoints: boolean };
}

export function useProvisionBackend(projectId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: ProvisionBackendInput) => api.post<ProjectBackend>(`/projects/${projectId}/backend`, input),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["projects", projectId, "backend"] });
    },
  });
}

export function useCustomEndpoints(projectBackendId: string | undefined) {
  return useQuery({
    queryKey: ["backend", projectBackendId, "custom-endpoints"],
    queryFn: () => api.get<CustomEndpoint[]>(`/projects/${projectBackendId}/backend/custom-endpoints`),
    enabled: Boolean(projectBackendId),
  });
}

export function useCreateCustomEndpoint(projectBackendId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: Pick<CustomEndpoint, "path" | "method" | "description" | "requiresAuth">) =>
      api.post<CustomEndpoint>(`/projects/${projectBackendId}/backend/custom-endpoints`, input),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["backend", projectBackendId, "custom-endpoints"] });
    },
  });
}
