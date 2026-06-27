export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  readingTime: string;
  publishedAt: string;
  content: string[];
=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
  categoryColor: string;
  readingTime: string;
  publishedAt: string;
  author: string;
  authorRole: string;
  content: Array<{ type: "paragraph" | "heading" | "tip" | "quote"; text: string }>;
  relatedSlugs?: string[];
<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
}

export const blogPosts: BlogPost[] = [
  {
<<<<<<< HEAD
=======
<<<<<<< HEAD
    slug: "perche-github-pages-per-il-tuo-sito",
    title: "Perché GitHub Pages è una scelta seria per il tuo sito",
    excerpt:
      "Hosting gratuito, HTTPS incluso, CDN globale: GitHub Pages non è solo per sviluppatori. Ecco perché conviene anche a chi non scrive una riga di codice.",
    category: "Guide",
    readingTime: "4 min",
    publishedAt: "2026-01-12",
    content: [
      "Quando si parla di hosting per un sito web, la prima associazione mentale è quasi sempre un servizio a pagamento con pannello di controllo proprietario. GitHub Pages ribalta questa aspettativa: è gratuito, include HTTPS automatico, distribuisce i contenuti su una rete CDN globale, e non ha limiti di traffico per un sito personale o aziendale di dimensioni normali.",
      "Il vantaggio meno ovvio è il controllo. Il tuo sito vive in un repository Git: ogni modifica ha una cronologia, ogni versione precedente è recuperabile, e non sei mai bloccato dentro l'infrastruttura di un singolo fornitore. Se un giorno decidi di cambiare strumento di gestione, il sito resta esattamente dove è sempre stato.",
      "Il limite storico era la curva di apprendimento: pubblicare su GitHub Pages richiedeva sapere cos'è un branch, come funziona un commit, come strutturare un repository. È esattamente il problema che ForgeSite risolve — l'editor visuale e l'automazione gestiscono la parte tecnica, tu resti proprietario di un repository GitHub vero, leggibile e portabile in qualsiasi momento.",
    ],
  },
  {
    slug: "seo-automatico-cosa-significa-davvero",
    title: "SEO automatico: cosa significa davvero (e cosa no)",
    excerpt:
      "\"SEO automatico\" è una promessa comune nei tool di creazione siti. Vediamo concretamente cosa può essere automatizzato e cosa richiede sempre una decisione umana.",
    category: "SEO",
    readingTime: "5 min",
    publishedAt: "2026-02-03",
    content: [
      "La parte automatizzabile della SEO tecnica è più ampia di quanto si pensi: meta title e description generati in modo coerente per ogni pagina, dati strutturati Schema.org corretti per il tipo di contenuto, sitemap.xml sempre aggiornata, canonical URL impostati senza errori, tag Open Graph per le anteprime social. Sono tutti elementi che un sistema può generare correttamente ogni volta, senza errori di distrazione.",
      "Quello che nessun automatismo può fare al posto tuo è decidere la strategia: quali parole chiave ha senso targettizzare per la tua attività specifica, che tono di voce userai nei contenuti, quale struttura di navigazione riflette davvero come i tuoi clienti pensano alla tua offerta. Questa è la parte che richiede una persona che conosce il business.",
      "L'approccio corretto è lasciare che l'automazione gestisca la parte meccanica e ripetitiva — quella in cui l'errore umano è probabile e costoso — e lasciare alla persona il controllo delle decisioni di contenuto, che restano sempre modificabili.",
    ],
  },
  {
    slug: "quando-un-sito-statico-non-basta-piu",
    title: "Quando un sito statico non basta più (e cosa fare)",
    excerpt:
      "Un sito statico copre la maggior parte dei casi d'uso. Ma login utenti, e-commerce, aree riservate richiedono qualcosa in più: ecco come affrontarlo senza ripartire da zero.",
    category: "Architettura",
    readingTime: "6 min",
    publishedAt: "2026-02-20",
    content: [
      "Un sito statico — solo HTML, CSS e JavaScript, senza un server che esegue codice ad ogni richiesta — copre benissimo siti vetrina, portfolio, blog, landing page. È veloce, sicuro per costruzione (non c'è un database da violare se non esiste), ed economico da ospitare.",
      "Il limite arriva quando serve stato: un utente che si registra e accede, un carrello che ricorda cosa ha scelto, un modulo che salva dati in un database invece di limitarsi a inviare un'email. A quel punto serve un backend reale, con un proprio database.",
      "La scelta più comune è ripartire da zero con uno stack completamente diverso. L'alternativa più efficiente è mantenere il frontend statico — che funziona già, è veloce, è già pubblicato — e collegarci un backend dedicato solo dove serve davvero: un progetto può restare statico al 100%, oppure attivare selettivamente autenticazione, database e API custom, senza dover ripensare l'intero sito.",
    ],
=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
    slug: "crea-sito-senza-programmare",
    title: "Come creare un sito professionale senza sapere programmare nel 2026",
    excerpt: "Hai bisogno di un sito per la tua attività ma non sai cosa sia un \"codice HTML\"? Nessun problema. Ecco la guida pratica per avere un sito online in meno di un'ora.",
    category: "Guide pratiche",
    categoryColor: "#10B981",
    readingTime: "5 min",
    publishedAt: "2026-05-20",
    author: "Team ForgeSite",
    authorRole: "Redazione",
    content: [
      { type: "paragraph", text: "La buona notizia: nel 2026, creare un sito professionale non richiede più nessuna competenza tecnica. La cattiva notizia (o forse no): esistono talmente tanti strumenti che scegliere quello giusto è diventato il vero problema." },
      { type: "heading", text: "Cosa significa davvero 'sito professionale'?" },
      { type: "paragraph", text: "Un sito professionale non è quello con le animazioni più belle o il design più complesso. È quello che carica veloce, si vede bene su telefono, appare su Google quando qualcuno cerca la tua attività, e fa capire in 5 secondi cosa fai e come contattarti." },
      { type: "tip", text: "La maggior parte dei visitatori arriva da mobile. Se il tuo sito non funziona bene sullo schermo del telefono, stai perdendo più della metà dei potenziali clienti." },
      { type: "heading", text: "Il problema dei page builder tradizionali" },
      { type: "paragraph", text: "Strumenti come Wix o Squarespace sono ottimi per iniziare. Il problema arriva quando vuoi cambiare qualcosa di specifico, esportare il sito, o smettere di pagare l'abbonamento — in quel caso, il sito semplicemente scompare. Non è tuo, è loro." },
      { type: "quote", text: "Il tuo sito dovrebbe essere tuo davvero, non in affitto mensile su una piattaforma che può cambiare i prezzi o chiudere domani." },
      { type: "heading", text: "La differenza con GitHub Pages" },
      { type: "paragraph", text: "GitHub Pages è un servizio di hosting gratuito di Microsoft (sì, gratuito per sempre) che pubblica siti web statici — cioè veloci, sicuri, senza server da gestire. Il codice del sito vive nel tuo account GitHub, è tuo al 100%, e puoi spostarlo o scaricarlo in qualsiasi momento." },
      { type: "paragraph", text: "ForgeSite è il ponte tra te e GitHub Pages: tu usi l'editor visuale per costruire il sito, e ForgeSite gestisce automaticamente tutto il resto — i commit, le pull request, la pubblicazione. Tu non devi sapere cosa significhino queste parole." },
    ],
    relatedSlugs: ["seo-senza-tecnico", "github-pages-spiegato-semplice"],
  },
  {
    slug: "seo-senza-tecnico",
    title: "SEO spiegato a chi non sa cos'è la SEO",
    excerpt: "\"Ottimizzare per i motori di ricerca\" suona complicato. In realtà ci sono solo 5 cose che contano davvero, e puoi impostarle in 10 minuti.",
    category: "SEO",
    categoryColor: "#3B82F6",
    readingTime: "6 min",
    publishedAt: "2026-05-28",
    author: "Team ForgeSite",
    authorRole: "Redazione",
    content: [
      { type: "paragraph", text: "SEO significa 'Search Engine Optimization', cioè ottimizzazione per i motori di ricerca. In parole semplici: fare in modo che Google ti trovi e ti mostri alle persone giuste." },
      { type: "heading", text: "La cosa più importante che la maggior parte ignora" },
      { type: "paragraph", text: "Google non 'vede' il tuo sito come lo vedi tu. Legge del testo, e giudica quanto quel testo risponde alla domanda che qualcuno ha cercato. Questo significa che le foto belle, le animazioni e i colori contano zero per la SEO. Contano i testi." },
      { type: "tip", text: "Prima di pensare alla SEO tecnica, scrivi testi chiari che spiegano cosa fai, per chi lo fai, e dove si trova la tua attività (se hai una sede fisica). Google capirà da solo." },
      { type: "heading", text: "Le 5 cose che contano davvero" },
      { type: "paragraph", text: "1) Il titolo della pagina (il testo che appare nel tab del browser) — deve contenere le parole che i tuoi clienti userebbero per cercarti. 2) La descrizione della pagina — il testo che appare sotto il link su Google. 3) I titoli nei contenuti (H1, H2) — strutturano il testo e aiutano Google a capire i temi. 4) La velocità di caricamento — un sito lento viene penalizzato. 5) I link da altri siti al tuo — più autorevoli sono i siti che ti linkano, meglio è." },
      { type: "heading", text: "Cosa fa ForgeSite in automatico" },
      { type: "paragraph", text: "ForgeSite genera automaticamente titoli, descrizioni e dati strutturati per ogni pagina che crei. Aggiunge anche la sitemap (la mappa del sito che aiuta Google a indicizzarti) e i tag Open Graph (che controllano come appare il link quando lo condividi su WhatsApp o social). Devi solo scrivere buoni contenuti — del resto si occupa la piattaforma." },
      { type: "quote", text: "Il miglior plugin SEO è un testo che risponde davvero alla domanda del tuo cliente." },
    ],
    relatedSlugs: ["crea-sito-senza-programmare", "github-pages-spiegato-semplice"],
  },
  {
    slug: "github-pages-spiegato-semplice",
    title: "GitHub Pages: hosting gratuito per sempre (spiegato senza tecnicismi)",
    excerpt: "Hosting gratuito, HTTPS automatico, veloce in tutto il mondo. GitHub Pages è una delle migliori opzioni per un sito statico — ecco perché e come funziona.",
    category: "Tecnologia",
    categoryColor: "#8B5CF6",
    readingTime: "4 min",
    publishedAt: "2026-06-05",
    author: "Team ForgeSite",
    authorRole: "Redazione",
    content: [
      { type: "paragraph", text: "GitHub Pages è un servizio gratuito di Microsoft che permette di pubblicare siti web direttamente da un repository GitHub. Non ha costi nascosti, non ha limiti di traffico per siti normali, e il sito rimane online finché il tuo account GitHub esiste." },
      { type: "heading", text: "Cosa significa 'sito statico'?" },
      { type: "paragraph", text: "Un sito statico è fatto di file HTML, CSS e JavaScript che vengono serviti direttamente al visitatore, senza un server che elabora ogni richiesta. È come ricevere un documento già pronto invece di aspettare che qualcuno lo scriva ogni volta che lo chiedi." },
      { type: "tip", text: "I siti statici sono più veloci, più sicuri e più economici da ospitare dei siti dinamici. Per la maggior parte delle attività — siti vetrina, portfolio, blog, landing page — sono la scelta migliore." },
      { type: "heading", text: "Il vantaggio del 'tuo repository'" },
      { type: "paragraph", text: "Quando usi ForgeSite, ogni modifica che fai al sito viene salvata nel tuo repository GitHub come una versione numerata. Questo significa che puoi tornare a qualsiasi versione precedente del sito in qualsiasi momento, vedere esattamente cosa è cambiato e quando, e portare il sito su un altro provider senza perdere nulla." },
      { type: "quote", text: "Il repository GitHub è la cassaforte del tuo sito. ForgeSite ti aiuta a costruire il contenuto; la cassaforte è sempre tua." },
      { type: "heading", text: "HTTPS incluso, sempre" },
      { type: "paragraph", text: "GitHub Pages aggiunge automaticamente il certificato HTTPS (il lucchetto verde che vedi nel browser). Questo è importante non solo per la sicurezza, ma anche per la SEO: Google penalizza i siti senza HTTPS. Con ForgeSite e GitHub Pages non devi pensarci — c'è sempre." },
    ],
    relatedSlugs: ["crea-sito-senza-programmare", "seo-senza-tecnico"],
<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
