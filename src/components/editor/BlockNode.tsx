import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import { blockLibrary } from "@/components/editor/blockLibrary";
import { useEditorStore } from "@/store/editorStore";
import { cn } from "@/lib/cn";
import type { Block } from "@/types";

function blockMeta(type: Block["type"]) {
  return blockLibrary.find((b) => b.type === type);
}

export function BlockNode({ block }: { block: Block }) {
  const { selectedBlockId, selectBlock } = useEditorStore();
  const isSelected = selectedBlockId === block.id;
  const meta = blockMeta(block.type);
  const Icon = meta?.icon;

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: block.id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div
      ref={setNodeRef}
      style={style}
      onClick={(e) => {
        e.stopPropagation();
        selectBlock(block.id);
      }}
      className={cn(
        "group relative rounded-sm border-2 border-transparent p-4 transition-colors",
<<<<<<< HEAD
        isSelected ? "border-[var(--accent)]" : "hover:border-[var(--border)]",
=======
<<<<<<< HEAD
        isSelected ? "border-forge-accent" : "hover:border-forge-border",
=======
        isSelected ? "border-[var(--accent)]" : "hover:border-[var(--border)]",
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
        isDragging && "opacity-50"
      )}
    >
      <div
        className={cn(
<<<<<<< HEAD
          "absolute -top-3 left-3 hidden items-center gap-1.5 rounded-sm bg-[var(--accent)] px-2 py-0.5 text-xs text-white group-hover:flex",
=======
<<<<<<< HEAD
          "absolute -top-3 left-3 hidden items-center gap-1.5 rounded-sm bg-forge-accent px-2 py-0.5 text-xs text-forge-bg group-hover:flex",
=======
          "absolute -top-3 left-3 hidden items-center gap-1.5 rounded-sm bg-[var(--accent)] px-2 py-0.5 text-xs text-white group-hover:flex",
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
          isSelected && "flex"
        )}
      >
        <button {...attributes} {...listeners} className="cursor-grab" aria-label="Sposta blocco">
          <GripVertical size={12} />
        </button>
        {Icon && <Icon size={12} />}
        <span className="font-medium capitalize">{block.type}</span>
      </div>

<<<<<<< HEAD
      <div className="flex min-h-[64px] items-center justify-center rounded-sm bg-[var(--surface-raised)] text-sm text-[var(--text-muted)]">
=======
<<<<<<< HEAD
      <div className="flex min-h-[64px] items-center justify-center rounded-sm bg-forge-surface-raised text-sm text-forge-text-muted">
=======
      <div className="flex min-h-[64px] items-center justify-center rounded-sm bg-[var(--surface-raised)] text-sm text-[var(--text-muted)]">
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
        Blocco "{meta?.label ?? block.type}"
      </div>

      {block.children.length > 0 && (
        <div className="mt-3 flex flex-col gap-2 pl-4">
          {block.children.map((child) => (
            <BlockNode key={child.id} block={child} />
          ))}
        </div>
      )}
    </div>
  );
}
