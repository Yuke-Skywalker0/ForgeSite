export type GoogleToolId = "analytics" | "search-console" | "ads" | "tag-manager";

export interface GoogleToolDefinition {
  id: GoogleToolId;
  name: string;
  description: string;
  /** Etichetta del campo dove l'utente incolla il proprio ID (es. "G-XXXXXXX"). */
  fieldLabel: string;
  fieldPlaceholder: string;
  /** Link ufficiale dove l'utente trova/crea quell'ID. */
  officialUrl: string;
  officialUrlLabel: string;
  /** Mini-guida passo-passo, in linguaggio semplice. */
  steps: string[];
}

export const googleTools: GoogleToolDefinition[] = [
  {
    id: "analytics",
    name: "Google Analytics",
    description: "Misura visitatori, sorgenti di traffico e comportamento su tutte le pagine del tuo sito.",
    fieldLabel: "Measurement ID",
    fieldPlaceholder: "G-XXXXXXXXXX",
    officialUrl: "https://analytics.google.com",
    officialUrlLabel: "analytics.google.com",
    steps: [
      "Vai su analytics.google.com e accedi con il tuo account Google.",
      "Crea una nuova proprietà per il tuo sito (o usane una esistente).",
      "Vai su Amministrazione → Flussi di dati → aggiungi un flusso web con l'URL del tuo sito.",
      "Copia il Measurement ID (inizia con \"G-\") e incollalo qui sotto.",
    ],
  },
  {
    id: "search-console",
    name: "Google Search Console",
    description: "Controlla come Google vede e indicizza il tuo sito, ed eventuali errori di scansione.",
    fieldLabel: "Codice di verifica",
    fieldPlaceholder: "google-site-verification=...",
    officialUrl: "https://search.google.com/search-console",
    officialUrlLabel: "search.google.com/search-console",
    steps: [
      "Vai su Search Console e aggiungi una nuova proprietà con l'URL del tuo sito.",
      "Scegli il metodo di verifica \"Tag HTML\".",
      "Copia il contenuto del meta tag di verifica e incollalo qui sotto.",
      "Una volta collegato, invia la tua sitemap.xml da Search Console per velocizzare l'indicizzazione.",
    ],
  },
  {
    id: "ads",
    name: "Google Ads",
    description: "Collega le tue campagne pubblicitarie per misurare le conversioni generate dal sito.",
    fieldLabel: "ID conversione",
    fieldPlaceholder: "AW-XXXXXXXXX",
    officialUrl: "https://ads.google.com",
    officialUrlLabel: "ads.google.com",
    steps: [
      "Accedi al tuo account Google Ads.",
      "Vai su Strumenti e impostazioni → Conversioni → crea una nuova azione di conversione.",
      "Copia l'ID di conversione (inizia con \"AW-\") e incollalo qui sotto.",
    ],
  },
  {
    id: "tag-manager",
    name: "Google Tag Manager",
    description: "Gestisci tutti i tag di tracciamento da un unico posto, senza modificare il codice ad ogni cambiamento.",
    fieldLabel: "Container ID",
    fieldPlaceholder: "GTM-XXXXXXX",
    officialUrl: "https://tagmanager.google.com",
    officialUrlLabel: "tagmanager.google.com",
    steps: [
      "Vai su tagmanager.google.com e crea un nuovo account/container per il tuo sito.",
      "Scegli \"Web\" come piattaforma del container.",
      "Copia il Container ID (inizia con \"GTM-\") e incollalo qui sotto.",
    ],
  },
];
