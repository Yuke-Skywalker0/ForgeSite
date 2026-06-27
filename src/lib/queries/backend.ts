import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/apiClient";
import type { CustomEndpoint, CustomEndpointMethod, ProjectBackend, BackendProvider } from "@/types";

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

interface CreateCustomEndpointInput {
  path: string;
  method: CustomEndpointMethod;
  description: string;
  requiresAuth: boolean;
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
    queryKey: ["backend", projectBackendId, "custom-endpoints"],
    queryFn: () => api.get<CustomEndpoint[]>(`/backends/${projectBackendId}/custom-endpoints`),
    enabled: Boolean(projectBackendId),
  });
}

export function useCreateCustomEndpoint(projectBackendId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateCustomEndpointInput) =>
      api.post<CustomEndpoint>(`/backends/${projectBackendId}/custom-endpoints`, input),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["backend", projectBackendId, "custom-endpoints"] });
    },
  });
}
