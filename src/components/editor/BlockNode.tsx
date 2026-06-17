import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Trash2 } from "lucide-react";
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

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: block.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

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
        isSelected ? "border-forge-ember" : "hover:border-forge-border",
        isDragging && "opacity-50"
      )}
    >
      <div
        className={cn(
          "absolute -top-3 left-3 hidden items-center gap-1.5 rounded-sm bg-forge-ember px-2 py-0.5 text-xs text-forge-bg",
          (isSelected || true) && "group-hover:flex",
          isSelected && "flex"
        )}
      >
        <button {...attributes} {...listeners} className="cursor-grab" aria-label="Sposta blocco">
          <GripVertical size={12} />
        </button>
        {Icon && <Icon size={12} />}
        <span className="font-medium capitalize">{block.type}</span>
      </div>

      <div className="flex min-h-[64px] items-center justify-center rounded-sm bg-forge-surface-raised text-sm text-forge-text-muted">
        Blocco "{meta?.label ?? block.type}" — anteprima resa dal componente reale in produzione
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

export function BlockToolbar({ block }: { block: Block }) {
  return (
    <button
      className="rounded-sm p-1 text-forge-text-muted hover:bg-forge-danger/10 hover:text-forge-danger"
      aria-label={`Elimina blocco ${block.type}`}
    >
      <Trash2 size={13} strokeWidth={1.75} />
    </button>
  );
}
