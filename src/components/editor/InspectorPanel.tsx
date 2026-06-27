import { useEditorStore, type Breakpoint } from "@/store/editorStore";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/cn";
import type { Block } from "@/types";

function findBlock(nodes: Block[], id: string): Block | null {
  for (const node of nodes) {
    if (node.id === id) return node;
    const found = findBlock(node.children, id);
    if (found) return found;
  }
  return null;
}

const breakpoints: Breakpoint[] = ["desktop", "tablet", "mobile"];

export function InspectorPanel() {
  const { blockTree, selectedBlockId, activeBreakpoint, setBreakpoint, updateBlockProps, updateBlockStyles } = useEditorStore();
  const selectedBlock = selectedBlockId ? findBlock(blockTree, selectedBlockId) : null;

  if (!selectedBlock) {
    return (
<<<<<<< HEAD
      <div className="flex w-72 flex-none flex-col border-l border-forge-border bg-forge-surface p-4">
        <p className="text-sm text-forge-text-muted">Seleziona un blocco per modificarne contenuto e stile.</p>
=======
      <div className="flex w-72 flex-none flex-col border-l border-[var(--border)] bg-[var(--surface)] p-4">
        <p className="text-sm text-[var(--text-muted)]">Seleziona un blocco per modificarne contenuto e stile.</p>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
      </div>
    );
  }

  const currentStyles = selectedBlock.styles[activeBreakpoint];

  return (
<<<<<<< HEAD
    <div className="flex w-72 flex-none flex-col border-l border-forge-border bg-forge-surface">
      <div className="border-b border-forge-border px-4 py-3">
        <h2 className="font-display text-xs font-medium uppercase tracking-wide text-forge-text-muted">{selectedBlock.type}</h2>
=======
    <div className="flex w-72 flex-none flex-col border-l border-[var(--border)] bg-[var(--surface)]">
      <div className="border-b border-[var(--border)] px-4 py-3">
        <h2 className="font-display text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">{selectedBlock.type}</h2>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
      </div>

      <div className="flex-1 overflow-y-auto p-4 scrollbar-thin">
        <section className="mb-6">
          <h3 className="mb-2 text-xs font-medium text-[var(--text-secondary)]">Contenuto</h3>
          <div className="flex flex-col gap-3">
            <Input
              label="Titolo"
              value={(selectedBlock.props["title"] as string) ?? ""}
              onChange={(e) => updateBlockProps(selectedBlock.id, { title: e.target.value })}
            />
            <Input
              label="Testo"
              value={(selectedBlock.props["text"] as string) ?? ""}
              onChange={(e) => updateBlockProps(selectedBlock.id, { text: e.target.value })}
            />
          </div>
        </section>

        <section>
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-xs font-medium text-[var(--text-secondary)]">Stile</h3>
            <div className="flex gap-1 rounded-sm bg-[var(--surface-raised)] p-0.5">
              {breakpoints.map((bp) => (
                <button
                  key={bp}
                  onClick={() => setBreakpoint(bp)}
                  className={cn(
                    "rounded-sm px-2 py-0.5 text-xs capitalize transition-colors",
<<<<<<< HEAD
                    activeBreakpoint === bp ? "bg-forge-accent text-forge-bg" : "text-forge-text-muted hover:text-forge-text-primary"
=======
                    activeBreakpoint === bp ? "bg-[var(--accent)] text-white" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
                  )}
                >
                  {bp === "desktop" ? "Desktop" : bp === "tablet" ? "Tablet" : "Mobile"}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Input
              label="Padding"
              value={(currentStyles["padding"] as string) ?? ""}
              placeholder="es. 24px"
              onChange={(e) => updateBlockStyles(selectedBlock.id, activeBreakpoint, { padding: e.target.value })}
            />
            <Input
              label="Colore di sfondo"
              value={(currentStyles["backgroundColor"] as string) ?? ""}
              placeholder="es. #161D19"
              onChange={(e) => updateBlockStyles(selectedBlock.id, activeBreakpoint, { backgroundColor: e.target.value })}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
