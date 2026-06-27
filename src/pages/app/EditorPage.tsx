import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Seo } from "@/components/marketing/Seo";
import { EditorTopbar } from "@/components/editor/EditorTopbar";
import { BlockLibraryPanel } from "@/components/editor/BlockLibraryPanel";
import { EditorCanvas } from "@/components/editor/EditorCanvas";
import { InspectorPanel } from "@/components/editor/InspectorPanel";
import { AdvancedModeDrawer } from "@/components/editor/AdvancedModeDrawer";
import { PublishBar } from "@/components/editor/PublishBar";
import { useEditorStore } from "@/store/editorStore";
import { useProject } from "@/lib/queries/projects";
import { useRequireAuth } from "@/lib/useRequireAuth";

const PLACEHOLDER_PAGE_ID = "page_home";

export default function EditorPage() {
  const { isChecking } = useRequireAuth();
  const { projectId } = useParams<{ projectId: string }>();
  const { data: project } = useProject(projectId);
  const { mode, loadPage, blockTree } = useEditorStore();
  const [showAdvanced, setShowAdvanced] = useState(false);

  useEffect(() => {
    loadPage(PLACEHOLDER_PAGE_ID, blockTree.length > 0 ? blockTree : []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId]);

  useEffect(() => {
    setShowAdvanced(mode === "advanced");
  }, [mode]);

  if (isChecking) {
<<<<<<< HEAD
    return <div className="flex min-h-screen items-center justify-center text-sm text-forge-text-muted">Verifica sessione…</div>;
=======
    return <div className="flex min-h-screen items-center justify-center text-sm text-[var(--text-muted)]">Verifica sessione…</div>;
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
  }
  if (!projectId) return null;

  return (
    <>
      <Seo title="Editor — ForgeSite" description="" path={`/app/projects/${projectId}/editor`} indexable={false} />
      <div className="flex h-screen flex-col">
        <EditorTopbar projectId={projectId} projectName={project?.name ?? "Caricamento…"} />
        <div className="flex flex-1 overflow-hidden">
          <BlockLibraryPanel />
          <EditorCanvas />
          <InspectorPanel />
        </div>
        <PublishBar projectId={projectId} pageId={PLACEHOLDER_PAGE_ID} />
        {showAdvanced && <AdvancedModeDrawer onClose={() => useEditorStore.getState().setMode("block")} />}
      </div>
    </>
  );
}
