import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Plus } from "lucide-react";
import { BoardCardItem } from "@/components/board/BoardCardItem";
import type { BoardColumn } from "@/data/boardMock";

interface BoardColumnViewProps {
  column: BoardColumn;
  onAddCard: (title: string) => void;
  onRemoveCard: (cardId: string) => void;
}

export function BoardColumnView({ column, onAddCard, onRemoveCard }: BoardColumnViewProps) {
  const { setNodeRef } = useDroppable({ id: column.id, data: { type: "column" } });
  const [adding, setAdding] = useState(false);
  const [title, setTitle] = useState("");

  function handleSubmit() {
    if (title.trim()) {
      onAddCard(title.trim());
      setTitle("");
    }
    setAdding(false);
  }

  return (
<<<<<<< HEAD
    <div className="flex w-72 flex-none flex-col rounded-md bg-forge-surface/60 p-3">
      <div className="mb-3 flex items-center justify-between px-1">
        <h3 className="text-xs font-medium uppercase tracking-wide text-forge-text-secondary">{column.title}</h3>
        <span className="rounded-full bg-forge-surface-raised px-1.5 py-0.5 text-[10px] text-forge-text-muted">
=======
    <div className="flex w-72 flex-none flex-col rounded-md bg-[var(--surface)]/60 p-3">
      <div className="mb-3 flex items-center justify-between px-1">
        <h3 className="text-xs font-medium uppercase tracking-wide text-[var(--text-secondary)]">{column.title}</h3>
        <span className="rounded-full bg-[var(--surface-raised)] px-1.5 py-0.5 text-[10px] text-[var(--text-muted)]">
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
          {column.cards.length}
        </span>
      </div>

      <div ref={setNodeRef} className="flex min-h-[40px] flex-col gap-2">
        <SortableContext items={column.cards.map((c) => c.id)} strategy={verticalListSortingStrategy}>
          {column.cards.map((card) => (
            <BoardCardItem key={card.id} card={card} onRemove={() => onRemoveCard(card.id)} />
          ))}
        </SortableContext>
      </div>

      {adding ? (
        <div className="mt-2 flex flex-col gap-2">
          <textarea
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSubmit(); }
            }}
            placeholder="Titolo della card…"
            rows={2}
<<<<<<< HEAD
            className="resize-none rounded-sm border border-forge-border bg-forge-surface-raised p-2 text-sm text-forge-text-primary placeholder:text-forge-text-muted focus:border-forge-accent/60"
          />
          <div className="flex gap-2">
            <button onClick={handleSubmit} className="rounded-sm bg-forge-accent px-2.5 py-1 text-xs font-medium text-forge-bg">
              Aggiungi
            </button>
            <button onClick={() => setAdding(false)} className="text-xs text-forge-text-muted hover:text-forge-text-secondary">
=======
            className="resize-none rounded-sm border border-[var(--border)] bg-[var(--surface-raised)] p-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)]/60"
          />
          <div className="flex gap-2">
            <button onClick={handleSubmit} className="rounded-sm bg-[var(--accent)] px-2.5 py-1 text-xs font-medium text-white">
              Aggiungi
            </button>
            <button onClick={() => setAdding(false)} className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)]">
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
              Annulla
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setAdding(true)}
<<<<<<< HEAD
          className="mt-2 flex items-center gap-1.5 rounded-sm px-1 py-1.5 text-xs text-forge-text-muted hover:text-forge-text-secondary"
=======
          className="mt-2 flex items-center gap-1.5 rounded-sm px-1 py-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
        >
          <Plus size={13} strokeWidth={1.75} />
          Aggiungi card
        </button>
      )}
    </div>
  );
}
