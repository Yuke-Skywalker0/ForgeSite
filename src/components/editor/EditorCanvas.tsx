import { useState } from "react";
import { DndContext, DragOverlay, closestCenter, type DragEndEvent, type DragStartEvent } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { useEditorStore } from "@/store/editorStore";
import { BlockNode } from "@/components/editor/BlockNode";
import { createEmptyBlock, blockLibrary } from "@/components/editor/blockLibrary";
import type { BlockType } from "@/types";
import { cn } from "@/lib/cn";

const breakpointWidths: Record<string, string> = {
  desktop: "max-w-4xl",
  tablet: "max-w-xl",
  mobile: "max-w-sm",
};

export function EditorCanvas() {
  const { blockTree, activeBreakpoint, selectBlock, reorderBlocks } = useEditorStore();
  const setBlockTree = useEditorStore.setState;
  const [activeDragType, setActiveDragType] = useState<BlockType | null>(null);

  function handleDragStart(event: DragStartEvent) {
    const data = event.active.data.current as { source: "library"; blockType: BlockType } | undefined;
    if (data?.source === "library") setActiveDragType(data.blockType);
  }

  function handleDragEnd(event: DragEndEvent) {
    setActiveDragType(null);
    const { active, over } = event;
    if (!over) return;

    const activeData = active.data.current as { source: "library"; blockType: BlockType } | undefined;
    if (activeData?.source === "library") {
      const newBlock = createEmptyBlock(activeData.blockType);
      setBlockTree((state) => ({ blockTree: [...state.blockTree, newBlock] }));
      return;
    }

    if (active.id !== over.id) {
      const ids = blockTree.map((b) => b.id);
      const oldIndex = ids.indexOf(active.id as string);
      const newIndex = ids.indexOf(over.id as string);
      if (oldIndex === -1 || newIndex === -1) return;
      reorderBlocks(null, arrayMove(ids, oldIndex, newIndex));
    }
  }

  const activeMeta = blockLibrary.find((b) => b.type === activeDragType);

  return (
    <div className="flex-1 overflow-y-auto bg-forge-bg p-8" onClick={() => selectBlock(null)}>
      <div className={cn("mx-auto rounded-md border border-forge-border bg-forge-surface p-6 transition-all", breakpointWidths[activeBreakpoint])}>
        <DndContext collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          {blockTree.length === 0 ? (
            <div className="flex min-h-[300px] items-center justify-center rounded-sm border border-dashed border-forge-border text-sm text-forge-text-muted">
              Trascina un blocco qui per iniziare
            </div>
          ) : (
            <SortableContext items={blockTree.map((b) => b.id)} strategy={verticalListSortingStrategy}>
              <div className="flex flex-col gap-3">
                {blockTree.map((block) => (
                  <BlockNode key={block.id} block={block} />
                ))}
              </div>
            </SortableContext>
          )}

          <DragOverlay>
            {activeMeta && (
              <div className="flex items-center gap-2 rounded-sm bg-forge-accent px-3 py-2 text-sm text-forge-bg shadow-lg">
                <activeMeta.icon size={14} />
                {activeMeta.label}
              </div>
            )}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  );
}
