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
  /** Credenziali dell'account esistente del cliente, se isExistingAccount=true.
   *  Non vengono mai salvate in chiaro lato client; il backend le cifra at-rest. */
  existingCredentials?: { apiKey?: string; projectUrl?: string };
  features: {
    authEnabled: boolean;
    databaseEnabled: boolean;
    customEndpoints: boolean;
  };
}

export function useProvisionBackend(projectId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: ProvisionBackendInput) =>
      api.post<ProjectBackend>(`/projects/${projectId}/backend`, input),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: ["projects", projectId, "backend"],
      });
    },
  });
}

export function useCustomEndpoints(projectBackendId: string | undefined) {
  return useQuery({
    queryKey: ["backends", projectBackendId, "endpoints"],
    queryFn: () =>
      api.get<CustomEndpoint[]>(`/backends/${projectBackendId}/endpoints`),
    enabled: Boolean(projectBackendId),
  });
}

interface CreateEndpointInput {
  path: string;
  method: CustomEndpoint["method"];
  description: string;
  requiresAuth: boolean;
}

export function useCreateCustomEndpoint(projectBackendId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateEndpointInput) =>
      api.post<CustomEndpoint>(`/backends/${projectBackendId}/endpoints`, input),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: ["backends", projectBackendId, "endpoints"],
      });
    },
  });
}
