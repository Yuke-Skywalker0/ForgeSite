import { useParams } from "react-router-dom";
import { Seo } from "@/components/marketing/Seo";
import { AppShell } from "@/components/layout/AppShell";
import { BackendSetupPanel } from "@/components/editor/BackendSetupPanel";
import { useRequireAuth } from "@/lib/useRequireAuth";

export default function ProjectBackendPage() {
  const { isChecking } = useRequireAuth();
  const { projectId } = useParams<{ projectId: string }>();

  if (isChecking) {
    return <div className="flex min-h-screen items-center justify-center text-sm text-[var(--text-muted)]">Verifica sessione…</div>;
  }
  if (!projectId) return null;

  return (
    <>
      <Seo title="Backend del sito — ForgeSite" description="" path={`/app/projects/${projectId}/backend`} indexable={false} />
      <AppShell>
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-1 font-display text-2xl font-semibold text-[var(--text-primary)]">Backend del sito</h1>
          <p className="mb-6 text-sm text-[var(--text-secondary)]">
            Attiva autenticazione, database e API custom per i siti che hanno bisogno di più di pagine statiche.
          </p>
          <BackendSetupPanel projectId={projectId} />
        </div>
      </AppShell>
    </>
  );
}
