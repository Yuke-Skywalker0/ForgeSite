import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/apiClient";
import type { CustomEndpoint, ProjectBackend, BackendProvider } from "@/types";

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

export function useCustomEndpoints(projectBackendId: string) {
  return useQuery({
    queryKey: ["backend", projectBackendId, "customEndpoints"],
    queryFn: () => api.get<CustomEndpoint[]>(`/backends/${projectBackendId}/custom-endpoints`),
    enabled: Boolean(projectBackendId),
  });
}

interface CreateCustomEndpointInput {
  path: string;
  method: CustomEndpoint["method"];
  description: string;
  requiresAuth: boolean;
}

export function useCreateCustomEndpoint(projectBackendId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateCustomEndpointInput) =>
      api.post<CustomEndpoint>(`/backends/${projectBackendId}/custom-endpoints`, input),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["backend", projectBackendId, "customEndpoints"] });
    },
  });
}
