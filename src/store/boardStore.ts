import { create } from "zustand";
import { initialBoardColumns, type BoardColumn, type BoardCard } from "@/data/boardMock";

interface BoardState {
  columns: BoardColumn[];
  /** Sposta una card in una colonna (anche la stessa) ad un certo indice. */
  moveCard: (cardId: string, toColumnId: string, toIndex: number) => void;
  addCard: (columnId: string, title: string) => void;
  removeCard: (cardId: string) => void;
}

// In questo round (frontend-only) lo stato vive in memoria di sessione,
// inizializzato da dati mock. Il salvataggio reale su DB (richiesto
// esplicitamente: "una sorta di Trello, con salvataggio su db") è il lavoro
// del prossimo round backend: qui la forma dei dati (BoardColumn/BoardCard)
// e le azioni (moveCard/addCard/removeCard) sono già quelle che verranno
// sincronizzate via API — il passaggio sarà sostituire questo store con
// chiamate React Query, senza cambiare la UI che lo consuma.
export const useBoardStore = create<BoardState>((set) => ({
  columns: initialBoardColumns,

  moveCard: (cardId, toColumnId, toIndex) =>
    set((state) => {
      let movedCard: BoardCard | null = null;
      const withoutCard = state.columns.map((col) => {
        const found = col.cards.find((c) => c.id === cardId);
        if (found) movedCard = found;
        return { ...col, cards: col.cards.filter((c) => c.id !== cardId) };
      });
      if (!movedCard) return state;

      const next = withoutCard.map((col) => {
        if (col.id !== toColumnId) return col;
        const cards = [...col.cards];
        cards.splice(toIndex, 0, movedCard as BoardCard);
        return { ...col, cards };
      });

      return { columns: next };
    }),

  addCard: (columnId, title) =>
    set((state) => ({
      columns: state.columns.map((col) =>
        col.id === columnId
          ? { ...col, cards: [...col.cards, { id: `card_${Math.random().toString(36).slice(2, 9)}`, title }] }
          : col
      ),
    })),

  removeCard: (cardId) =>
    set((state) => ({
      columns: state.columns.map((col) => ({ ...col, cards: col.cards.filter((c) => c.id !== cardId) })),
    })),
}));
