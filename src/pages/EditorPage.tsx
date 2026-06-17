import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EditorTopbar } from "@/components/editor/EditorTopbar";
import { BlockLibraryPanel } from "@/components/editor/BlockLibraryPanel";
import { EditorCanvas } from "@/components/editor/EditorCanvas";
import { InspectorPanel } from "@/components/editor/InspectorPanel";
import { AdvancedModeDrawer } from "@/components/editor/AdvancedModeDrawer";
import { PublishBar } from "@/components/editor/PublishBar";
import { useEditorStore } from "@/store/editorStore";
import { useProject } from "@/lib/queries/projects";

// In produzione il blockTree iniziale arriva da GET /pages/:id; qui carichiamo
// un albero vuoto finché quell'endpoint non è collegato, per non bloccare lo
// sviluppo dell'editor in attesa del backend.
const PLACEHOLDER_PAGE_ID = "page_home";

export function EditorPage() {
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

  if (!projectId) return null;

  return (
    <div className="flex h-screen flex-col">
      <EditorTopbar projectId={projectId} projectName={project?.name ?? "Caricamento…"} />
      <div className="flex flex-1 overflow-hidden">
        <BlockLibraryPanel />
        <EditorCanvas />
        <InspectorPanel />
      </div>
      <PublishBar projectId={projectId} pageId={PLACEHOLDER_PAGE_ID} />

      {showAdvanced && (
        <AdvancedModeDrawer onClose={() => useEditorStore.getState().setMode("block")} />
      )}
    </div>
  );
}
