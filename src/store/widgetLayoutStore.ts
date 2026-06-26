import { create } from "zustand";

export interface WidgetLayoutItem {
  id: string;
  /** Colonne occupate su una griglia a 12 colonne (responsive via Tailwind). */
  span: 4 | 6 | 8 | 12;
}

interface WidgetLayoutState {
  layout: WidgetLayoutItem[];
  setLayout: (layout: WidgetLayoutItem[]) => void;
  reorder: (activeId: string, overId: string) => void;
}

/**
 * Store generico per l'ordine dei widget in una dashboard a griglia.
 * Una istanza per dashboard (cliente/admin), inizializzata con l'ordine di
 * default — l'utente può trascinare per riordinare, l'ordine personalizzato
 * sarà persistito lato backend nel prossimo round (oggi resta in memoria
 * per la sessione, coerente con "dati mock" del resto dell'app).
 */
export function createWidgetLayoutStore(defaultLayout: WidgetLayoutItem[]) {
  return create<WidgetLayoutState>((set, get) => ({
    layout: defaultLayout,
    setLayout: (layout) => set({ layout }),
    reorder: (activeId, overId) => {
      const { layout } = get();
      const oldIndex = layout.findIndex((w) => w.id === activeId);
      const newIndex = layout.findIndex((w) => w.id === overId);
      if (oldIndex === -1 || newIndex === -1) return;
      const next = [...layout];
      const [moved] = next.splice(oldIndex, 1);
      if (moved) next.splice(newIndex, 0, moved);
      set({ layout: next });
    },
  }));
}
