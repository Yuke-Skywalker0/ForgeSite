export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  publishedAt: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
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
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
