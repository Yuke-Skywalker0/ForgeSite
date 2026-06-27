import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";
import type { BoardCard } from "@/data/boardMock";

export function BoardCardItem({ card, onRemove }: { card: BoardCard; onRemove: () => void }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: card.id,
    data: { type: "card" },
  });

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      {...attributes}
      {...listeners}
      className={cn(
        "group cursor-grab rounded-md border border-[var(--border)] bg-[var(--surface)] p-3 transition-colors active:cursor-grabbing",
        "hover:border-[var(--accent)]/30",
        isDragging && "opacity-50"
      )}
    >
      <div className="mb-2 flex items-start justify-between gap-2">
        {card.tag && (
          <span
            className="rounded-sm px-1.5 py-0.5 text-[10px] font-medium"
            style={{ backgroundColor: `${card.tag.color}22`, color: card.tag.color }}
          >
            {card.tag.label}
          </span>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          aria-label="Rimuovi card"
          className="ml-auto opacity-0 transition-opacity hover:text-[#EF4444] group-hover:opacity-100"
        >
          <X size={12} strokeWidth={2} />
        </button>
      </div>
      <p className="text-sm text-[var(--text-primary)]">{card.title}</p>
      {card.description && <p className="mt-1 text-xs text-[var(--text-secondary)]">{card.description}</p>}
    </div>
  );
}
