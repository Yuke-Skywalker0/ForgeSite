export interface BoardCard {
  id: string;
  title: string;
  description?: string;
  tag?: { label: string; color: string };
}

export interface BoardColumn {
  id: string;
  title: string;
  cards: BoardCard[];
}

export const initialBoardColumns: BoardColumn[] = [
  {
    id: "col-todo",
    title: "Da fare",
    cards: [
      { id: "card-1", title: "Scrivere testi pagina Servizi", tag: { label: "Contenuti", color: "#60A5FA" } },
      { id: "card-2", title: "Scegliere immagini hero", tag: { label: "Design", color: "#A78BFA" } },
      { id: "card-3", title: "Configurare dominio personalizzato", tag: { label: "Tecnico", color: "#FBBF24" } },
    ],
  },
  {
    id: "col-doing",
    title: "In corso",
    cards: [
      { id: "card-4", title: "Revisione blocco Hero", description: "Verificare copy e CTA prima della pubblicazione", tag: { label: "Contenuti", color: "#60A5FA" } },
    ],
  },
  {
    id: "col-review",
    title: "In revisione",
    cards: [
      { id: "card-5", title: "Pull request #14 — aggiornamento footer", tag: { label: "Tecnico", color: "#FBBF24" } },
    ],
  },
  {
    id: "col-done",
    title: "Completato",
    cards: [
      { id: "card-6", title: "Setup iniziale repository", tag: { label: "Tecnico", color: "#FBBF24" } },
      { id: "card-7", title: "Collegamento GitHub Pages", tag: { label: "Tecnico", color: "#FBBF24" } },
    ],
  },
];
