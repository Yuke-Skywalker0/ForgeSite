import { Link } from "react-router-dom";
import { ArrowLeft, MousePointer2, LayoutGrid, Code2, Server } from "lucide-react";
import { useEditorStore, type EditorMode } from "@/store/editorStore";
import { cn } from "@/lib/cn";

const modes: Array<{ key: EditorMode; label: string; icon: typeof MousePointer2 }> = [
  { key: "inline", label: "Inline", icon: MousePointer2 },
  { key: "block", label: "Blocchi", icon: LayoutGrid },
  { key: "advanced", label: "Avanzata", icon: Code2 },
];

export function EditorTopbar({
  projectId,
  projectName,
}: {
  projectId: string;
  projectName: string;
}) {
  const { mode, setMode } = useEditorStore();

  return (
    <div className="flex items-center justify-between border-b border-forge-border bg-forge-surface px-5 py-2.5">
      <div className="flex items-center gap-3">
        <Link
          to="/dashboard"
          className="text-forge-text-secondary hover:text-forge-text-primary"
          aria-label="Torna alla dashboard"
        >
          <ArrowLeft size={16} strokeWidth={1.75} />
        </Link>
        <span className="font-display text-sm font-medium">{projectName}</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex gap-1 rounded-sm bg-forge-surface-raised p-0.5">
          {modes.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setMode(key)}
              className={cn(
                "flex items-center gap-1.5 rounded-sm px-2.5 py-1 text-xs transition-colors",
                mode === key
                  ? "bg-forge-ember text-forge-bg"
                  : "text-forge-text-secondary hover:text-forge-text-primary"
              )}
            >
              <Icon size={13} strokeWidth={1.75} />
              {label}
            </button>
          ))}
        </div>

        <Link
          to={`/projects/${projectId}/backend`}
          className="flex items-center gap-1.5 rounded-sm border border-forge-border px-2.5 py-1 text-xs text-forge-text-secondary hover:border-forge-ember/40 hover:text-forge-text-primary"
        >
          <Server size={13} strokeWidth={1.75} />
          Backend
        </Link>
      </div>
    </div>
  );
}
