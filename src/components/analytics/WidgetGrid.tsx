import type { ReactNode } from "react";
import { DndContext, closestCenter, type DragEndEvent } from "@dnd-kit/core";
import { SortableContext, useSortable, rectSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/cn";
import type { WidgetLayoutItem } from "@/store/widgetLayoutStore";

const spanClass: Record<WidgetLayoutItem["span"], string> = {
  4: "sm:col-span-6 lg:col-span-4",
  6: "sm:col-span-6 lg:col-span-6",
  8: "sm:col-span-12 lg:col-span-8",
  12: "col-span-full",
};

function SortableWidget({ id, span, children }: { id: string; span: WidgetLayoutItem["span"]; children: ReactNode }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn("group relative col-span-full", spanClass[span], isDragging && "z-10 opacity-70")}
    >
      <button
        {...attributes}
        {...listeners}
        aria-label="Sposta widget"
<<<<<<< HEAD
        className="absolute right-3 top-3 z-10 cursor-grab rounded-sm p-1 text-forge-text-muted opacity-0 transition-opacity hover:bg-forge-surface-raised hover:text-forge-text-primary group-hover:opacity-100"
=======
        className="absolute right-3 top-3 z-10 cursor-grab rounded-sm p-1 text-[var(--text-muted)] opacity-0 transition-opacity hover:bg-[var(--surface-raised)] hover:text-[var(--text-primary)] group-hover:opacity-100"
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
      >
        <GripVertical size={14} strokeWidth={1.75} />
      </button>
      {children}
    </div>
  );
}

interface WidgetGridProps {
  layout: WidgetLayoutItem[];
  onReorder: (activeId: string, overId: string) => void;
  /** Mappa id widget -> contenuto React da renderizzare dentro la card. */
  renderWidget: (id: string) => ReactNode;
}

export function WidgetGrid({ layout, onReorder, renderWidget }: WidgetGridProps) {
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      onReorder(String(active.id), String(over.id));
    }
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={layout.map((w) => w.id)} strategy={rectSortingStrategy}>
        <div className="grid grid-cols-12 gap-4">
          {layout.map((widget) => (
            <SortableWidget key={widget.id} id={widget.id} span={widget.span}>
              {renderWidget(widget.id)}
            </SortableWidget>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
