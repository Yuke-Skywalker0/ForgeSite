export type PlanId = "free" | "starter" | "pro" | "business" | "agency" | "white_label" | "enterprise";

export interface PlanFeature {
  label: string;
  included: boolean;
  locked?: boolean; // mostra lucchetto, sblocca con piano superiore
}

export interface Plan {
  id: PlanId;
  name: string;
  tagline: string;
  price: number;    // EUR/mese
  yearlyDiscount: number; // % sconto annuale
  featured?: boolean;
  badgeLabel?: string;
  cta: string;
  maxProjects: number | "unlimited";
  maxPagesPerProject: number | "unlimited";
  aiGenerations: number | "unlimited"; // al mese
  features: PlanFeature[];
}

export const plans: Plan[] = [
  {
    id: "free",
    name: "Gratis",
    tagline: "Per chi vuole provare senza impegno",
    price: 0,
    yearlyDiscount: 0,
    cta: "Inizia gratis",
    maxProjects: 1,
    maxPagesPerProject: 3,
    aiGenerations: 5,
    features: [
      { label: "1 sito web",                   included: true },
      { label: "3 pagine per sito",             included: true },
      { label: "5 generazioni AI al mese",      included: true },
      { label: "Template base (6 disponibili)", included: true },
      { label: "Pubblicazione su GitHub Pages", included: true },
      { label: "SEO automatico base",           included: true },
      { label: "Template premium",              included: false, locked: true },
      { label: "Dominio personalizzato",        included: false, locked: true },
      { label: "Analytics avanzate",            included: false, locked: true },
      { label: "Widget galleggianti",           included: false, locked: true },
      { label: "Board attività",                included: false, locked: true },
      { label: "Supporto prioritario",          included: false, locked: true },
    ],
  },
  {
    id: "starter",
    name: "Starter",
    tagline: "Per freelance e piccoli professionisti",
    price: 7,
    yearlyDiscount: 20,
    cta: "Inizia con Starter",
    maxProjects: 3,
    maxPagesPerProject: 10,
    aiGenerations: 50,
    features: [
      { label: "3 siti web",                    included: true },
      { label: "10 pagine per sito",            included: true },
      { label: "50 generazioni AI al mese",     included: true },
      { label: "Tutti i template (24)",          included: true },
      { label: "Dominio personalizzato",         included: true },
      { label: "SEO automatico completo",        included: true },
      { label: "Widget galleggianti",            included: true },
      { label: "Analytics base",                 included: true },
      { label: "Analytics avanzate",             included: false, locked: true },
      { label: "Backend opzionale",              included: false, locked: true },
      { label: "Board attività",                 included: false, locked: true },
      { label: "Supporto email",                 included: true },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Per chi ha bisogno di più potenza",
    price: 19,
    yearlyDiscount: 25,
    featured: true,
    badgeLabel: "Più scelto",
    cta: "Inizia con Pro",
    maxProjects: 10,
    maxPagesPerProject: "unlimited",
    aiGenerations: 300,
    features: [
      { label: "10 siti web",                   included: true },
      { label: "Pagine illimitate",              included: true },
      { label: "300 generazioni AI al mese",    included: true },
      { label: "Tutti i template (24)",          included: true },
      { label: "Dominio personalizzato",         included: true },
      { label: "SEO avanzato + Schema.org",      included: true },
      { label: "Analytics avanzate + Google Tools", included: true },
      { label: "Widget galleggianti completi",   included: true },
      { label: "Board attività",                 included: true },
      { label: "Backend opzionale (1 progetto)", included: true },
      { label: "Statistiche e tracciamento clic",included: true },
      { label: "Supporto prioritario",           included: true },
    ],
  },
  {
    id: "business",
    name: "Business",
    tagline: "Per team e PMI in crescita",
    price: 49,
    yearlyDiscount: 30,
    cta: "Inizia con Business",
    maxProjects: "unlimited",
    maxPagesPerProject: "unlimited",
    aiGenerations: "unlimited",
    features: [
      { label: "Siti illimitati",               included: true },
      { label: "Pagine illimitate",             included: true },
      { label: "AI illimitata",                 included: true },
      { label: "Tutti i template",              included: true },
      { label: "Dominio + SSL gestito",         included: true },
      { label: "Backend su tutti i progetti",   included: true },
      { label: "Analytics + Google Ads + Tag Manager", included: true },
      { label: "Gestione team (3 utenti)",      included: true },
      { label: "Importatore temi",              included: true },
      { label: "Gestione DNS avanzata",         included: true },
      { label: "Supporto chat dedicato",        included: true },
      { label: "White-label",                   included: false, locked: true },
    ],
  },
  {
    id: "agency",
    name: "Agenzia",
    tagline: "Per agenzie che gestiscono siti dei clienti",
    price: 99,
    yearlyDiscount: 30,
    badgeLabel: "Per agenzie",
    cta: "Inizia con Agenzia",
    maxProjects: "unlimited",
    maxPagesPerProject: "unlimited",
    aiGenerations: "unlimited",
    features: [
      { label: "Tutto di Business",             included: true },
      { label: "Gestione team (10 utenti)",     included: true },
      { label: "Dashboard clienti separata",    included: true },
      { label: "Reportistica brandizzata",      included: true },
      { label: "Priorità sugli aggiornamenti",  included: true },
      { label: "Onboarding dedicato",           included: true },
      { label: "White-label",                   included: false, locked: true },
      { label: "Account manager dedicato",      included: false, locked: true },
    ],
  },
  {
    id: "white_label",
    name: "White Label",
    tagline: "Rivendi ForgeSite con il tuo brand",
    price: 199,
    yearlyDiscount: 20,
    badgeLabel: "Reseller",
    cta: "Contattaci",
    maxProjects: "unlimited",
    maxPagesPerProject: "unlimited",
    aiGenerations: "unlimited",
    features: [
      { label: "Tutto di Agenzia",              included: true },
      { label: "Piattaforma con il tuo brand",  included: true },
      { label: "Dominio personalizzato SaaS",   included: true },
      { label: "Account manager dedicato",      included: true },
      { label: "SLA garantito",                 included: true },
      { label: "Clienti illimitati",            included: true },
      { label: "Revenue sharing",               included: true },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Soluzioni su misura per grandi organizzazioni",
    price: 0, // contatto diretto
    yearlyDiscount: 0,
    badgeLabel: "Su misura",
    cta: "Parla con noi",
    maxProjects: "unlimited",
    maxPagesPerProject: "unlimited",
    aiGenerations: "unlimited",
    features: [
      { label: "Tutto di White Label",          included: true },
      { label: "Infrastruttura dedicata",       included: true },
      { label: "Integrazione SSO/SAML",         included: true },
      { label: "Contratto su misura",           included: true },
      { label: "Team tecnico dedicato",         included: true },
      { label: "Formazione personalizzata",     included: true },
      { label: "Audit di sicurezza",            included: true },
    ],
  },
];
