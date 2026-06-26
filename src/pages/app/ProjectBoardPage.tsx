import { useParams } from "react-router-dom";
import {
  DndContext,
  DragOverlay,
  closestCenter,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { useState } from "react";
import { Seo } from "@/components/marketing/Seo";
import { AppShell } from "@/components/layout/AppShell";
import { useRequireAuth } from "@/lib/useRequireAuth";
import { useBoardStore } from "@/store/boardStore";
import { BoardColumnView } from "@/components/board/BoardColumnView";
import type { BoardCard } from "@/data/boardMock";

export default function ProjectBoardPage() {
  const { isChecking } = useRequireAuth();
  const { projectId } = useParams<{ projectId: string }>();
  const { columns, moveCard, addCard, removeCard } = useBoardStore();
  const [activeCard, setActiveCard] = useState<BoardCard | null>(null);

  if (isChecking) {
    return <div className="flex min-h-screen items-center justify-center text-sm text-forge-text-muted">Verifica sessione…</div>;
  }
  if (!projectId) return null;

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    for (const col of columns) {
      const found = col.cards.find((c) => c.id === active.id);
      if (found) { setActiveCard(found); break; }
    }
  }

  function handleDragEnd(event: DragEndEvent) {
    setActiveCard(null);
    const { active, over } = event;
    if (!over) return;

    const activeId = String(active.id);
    const overId = String(over.id);

    let toColumnId = "";
    let toIndex = 0;

    for (const col of columns) {
      if (col.id === overId) {
        toColumnId = col.id;
        toIndex = col.cards.length;
        break;
      }
      const cardIndex = col.cards.findIndex((c) => c.id === overId);
      if (cardIndex !== -1) {
        toColumnId = col.id;
        toIndex = cardIndex;
        break;
      }
    }

    if (toColumnId) moveCard(activeId, toColumnId, toIndex);
  }

  return (
    <>
      <Seo title="Board attività — ForgeSite" description="" path={`/app/projects/${projectId}/board`} indexable={false} />
      <AppShell>
        <div className="flex h-full flex-col">
          <div className="mb-6">
            <h1 className="mb-1 font-display text-2xl font-semibold text-forge-text-primary">Board attività</h1>
            <p className="text-sm text-forge-text-secondary">
              Trascina le card tra le colonne. Il salvataggio su database sarà attivo dopo il collegamento al backend.
            </p>
          </div>

          <DndContext collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <div className="flex gap-4 overflow-x-auto pb-6">
              {columns.map((col) => (
                <BoardColumnView
                  key={col.id}
                  column={col}
                  onAddCard={(title) => addCard(col.id, title)}
                  onRemoveCard={(cardId) => removeCard(cardId)}
                />
              ))}
            </div>

            <DragOverlay>
              {activeCard && (
                <div className="rotate-2 cursor-grabbing rounded-md border border-forge-accent/30 bg-forge-surface p-3 shadow-xl shadow-black/30">
                  <p className="text-sm text-forge-text-primary">{activeCard.title}</p>
                </div>
              )}
            </DragOverlay>
          </DndContext>
        </div>
      </AppShell>
    </>
  );
}
