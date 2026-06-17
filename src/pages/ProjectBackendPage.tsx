import { useParams } from "react-router-dom";
import { BackendSetupPanel } from "@/components/editor/BackendSetupPanel";
import { CustomEndpointsPanel } from "@/components/editor/CustomEndpointsPanel";
import { useProjectBackend } from "@/lib/queries/backend";

export function ProjectBackendPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const { data: backend } = useProjectBackend(projectId);

  if (!projectId) return null;

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-1 font-display text-2xl font-semibold">Backend del sito</h1>
      <p className="mb-6 text-sm text-forge-text-secondary">
        Attiva autenticazione, database e API custom per i siti che hanno bisogno di più
        di pagine statiche.
      </p>

      <div className="flex flex-col gap-5">
        <BackendSetupPanel projectId={projectId} />
        {backend?.status === "active" && backend.features.customEndpoints && (
          <CustomEndpointsPanel projectBackendId={backend.id} />
        )}
      </div>
    </div>
  );
}
