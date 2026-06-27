import { useDraggable } from "@dnd-kit/core";
import { blockLibrary } from "@/components/editor/blockLibrary";
import { cn } from "@/lib/cn";
import type { BlockType } from "@/types";

function DraggableBlockItem({ type, label, icon: Icon }: (typeof blockLibrary)[number]) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `library-${type}`,
    data: { source: "library", blockType: type as BlockType },
  });

  return (
    <button
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      type="button"
      className={cn(
        "flex w-full items-center gap-2.5 rounded-sm px-3 py-2 text-left text-sm text-[var(--text-secondary)] hover:bg-[var(--surface-raised)] hover:text-[var(--text-primary)]",
        isDragging && "opacity-40"
      )}
    >
      <Icon size={15} strokeWidth={1.75} />
      {label}
    </button>
  );
}

export function BlockLibraryPanel() {
  return (
<<<<<<< HEAD
    <div className="flex h-full w-56 flex-none flex-col border-r border-forge-border bg-forge-surface">
      <div className="border-b border-forge-border px-4 py-3">
        <h2 className="font-display text-xs font-medium uppercase tracking-wide text-forge-text-muted">Blocchi</h2>
=======
    <div className="flex h-full w-56 flex-none flex-col border-r border-[var(--border)] bg-[var(--surface)]">
      <div className="border-b border-[var(--border)] px-4 py-3">
        <h2 className="font-display text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">Blocchi</h2>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
      </div>
      <div className="flex-1 overflow-y-auto p-2 scrollbar-thin">
        {blockLibrary.map((item) => (
          <DraggableBlockItem key={item.type} {...item} />
        ))}
      </div>
    </div>
  );
}
