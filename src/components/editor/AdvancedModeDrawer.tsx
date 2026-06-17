import Editor from "@monaco-editor/react";
import { X } from "lucide-react";
import { useEditorStore } from "@/store/editorStore";
import { useAuthStore } from "@/store/authStore";
import { Button } from "@/components/ui/Button";

// Sezione 8 della spec: Advanced Mode è JSON block editing ad accesso ristretto.
// owner/admin possono modificare il blockTree raw; editor/viewer no, per evitare
// che utenti non tecnici rompano la struttura dati con JSON malformato.
const ADVANCED_MODE_ROLES = new Set(["owner", "admin"]);

export function AdvancedModeDrawer({ onClose }: { onClose: () => void }) {
  const { blockTree } = useEditorStore();
  const setBlockTree = useEditorStore.setState;
  const role = useAuthStore((s) => s.user?.role);
  const canEdit = role ? ADVANCED_MODE_ROLES.has(role) : false;

  function handleChange(value: string | undefined) {
    if (!value || !canEdit) return;
    try {
      const parsed = JSON.parse(value);
      setBlockTree({ blockTree: parsed, isDirty: true });
    } catch {
      // JSON non valido durante la digitazione: non propagare, l'utente è ancora a metà modifica.
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="flex h-[80vh] w-[90vw] max-w-3xl flex-col rounded-md border border-forge-border bg-forge-surface">
        <div className="flex items-center justify-between border-b border-forge-border px-4 py-3">
          <h2 className="font-display text-sm font-medium">Modalità avanzata — JSON</h2>
          <Button variant="ghost" onClick={onClose} aria-label="Chiudi">
            <X size={16} strokeWidth={1.75} />
          </Button>
        </div>

        {!canEdit ? (
          <div className="flex flex-1 items-center justify-center p-8 text-center">
            <p className="text-sm text-forge-text-secondary">
              Solo owner e admin possono modificare la struttura JSON dei blocchi.
            </p>
          </div>
        ) : (
          <div className="flex-1">
            <Editor
              height="100%"
              defaultLanguage="json"
              theme="vs-dark"
              value={JSON.stringify(blockTree, null, 2)}
              onChange={handleChange}
              options={{
                minimap: { enabled: false },
                fontSize: 13,
                fontFamily: "JetBrains Mono, monospace",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
