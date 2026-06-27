import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft, MousePointer2, LayoutGrid, Code2,
  MoreHorizontal, BarChart3, Trello, Globe, Server,
  MousePointerClick, Puzzle,
} from "lucide-react";
import { useEditorStore, type EditorMode } from "@/store/editorStore";
import { cn } from "@/lib/cn";

const modes: Array<{ key: EditorMode; label: string; icon: typeof MousePointer2 }> = [
  { key: "inline",   label: "Inline",   icon: MousePointer2 },
  { key: "block",    label: "Blocchi",  icon: LayoutGrid },
  { key: "advanced", label: "Avanzata", icon: Code2 },
];

function ProjectToolsMenu({ projectId }: { projectId: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const tools = [
    { to: `/app/projects/${projectId}/backend`,  label: "Backend",            icon: Server },
    { to: `/app/projects/${projectId}/analytics`,label: "Analytics",          icon: BarChart3 },
    { to: `/app/projects/${projectId}/stats`,    label: "Statistiche e clic", icon: MousePointerClick },
    { to: `/app/projects/${projectId}/widgets`,  label: "Widget galleggianti", icon: Puzzle },
    { to: `/app/projects/${projectId}/board`,    label: "Board attività",     icon: Trello },
    { to: `/app/projects/${projectId}/domain`,   label: "Dominio e DNS",      icon: Globe },
  ];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-sm border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--text-secondary)] hover:border-[var(--accent)]/40 hover:text-[var(--text-primary)]"
      >
        <MoreHorizontal size={14} strokeWidth={1.75} />
        Strumenti
      </button>
      {open && (
        <div className="absolute right-0 top-full z-20 mt-1.5 w-52 rounded-md border border-[var(--border)] bg-[var(--surface)] py-1.5 shadow-xl shadow-black/30">
          {tools.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 px-3.5 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--surface-raised)] hover:text-[var(--text-primary)]"
            >
              <Icon size={14} strokeWidth={1.75} />
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function EditorTopbar({ projectId, projectName }: { projectId: string; projectName: string }) {
  const { mode, setMode } = useEditorStore();

  return (
    <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-5 py-2.5">
      <div className="flex items-center gap-3">
        <Link to="/app/dashboard" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]" aria-label="Torna alla dashboard">
          <ArrowLeft size={16} strokeWidth={1.75} />
        </Link>
        <span className="font-display text-sm font-medium text-[var(--text-primary)]">{projectName}</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex gap-1 rounded-sm bg-[var(--surface-raised)] p-0.5">
          {modes.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setMode(key)}
              className={cn(
                "flex items-center gap-1.5 rounded-sm px-2.5 py-1 text-xs transition-colors",
                mode === key ? "bg-[var(--accent)] text-white" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              )}
            >
              <Icon size={13} strokeWidth={1.75} />
              {label}
            </button>
          ))}
        </div>
        <ProjectToolsMenu projectId={projectId} />
      </div>
    </div>
  );
}
