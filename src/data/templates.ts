export type TemplateCategory =
  | "business" | "ristorazione" | "portfolio" | "ecommerce" | "agenzia"
  | "sviluppatori" | "landing" | "legale" | "salute" | "startup" | "eventi" | "no-profit";

export interface Template {
  id: string;
  name: string;
  category: TemplateCategory;
  description: string;
  /** Coppia di colori usata per generare un'anteprima SVG astratta, coerente
   *  col design system — niente foto stock, zero rischio copyright. */
  previewColors: [string, string];
  pages: string[];
  popular?: boolean;
}

export const templateCategories: Array<{ id: TemplateCategory; label: string }> = [
  { id: "business", label: "Business" },
  { id: "ristorazione", label: "Ristorazione" },
  { id: "portfolio", label: "Portfolio" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "agenzia", label: "Agenzia" },
  { id: "sviluppatori", label: "Sviluppatori" },
  { id: "landing", label: "Landing page" },
  { id: "legale", label: "Studio legale" },
  { id: "salute", label: "Salute e benessere" },
  { id: "startup", label: "Startup" },
  { id: "eventi", label: "Eventi" },
  { id: "no-profit", label: "No-profit" },
];

export const templates: Template[] = [
  { id: "tpl-business-clean", name: "Clean Business", category: "business", description: "Layout corporate pulito, sezioni servizi e team.", previewColors: ["#34D399", "#1C3329"], pages: ["Home", "Servizi", "Team", "Contatti"], popular: true },
  { id: "tpl-business-bold", name: "Bold Corporate", category: "business", description: "Tipografia grande, forte impatto visivo per aziende affermate.", previewColors: ["#60A5FA", "#1E2A3D"], pages: ["Home", "Chi siamo", "Servizi", "Contatti"] },
  { id: "tpl-ristoro-trattoria", name: "Trattoria Calda", category: "ristorazione", description: "Menu in evidenza, galleria piatti, prenotazione tavolo.", previewColors: ["#FBBF24", "#3D2F12"], pages: ["Home", "Menu", "Galleria", "Prenota"], popular: true },
  { id: "tpl-ristoro-bar", name: "Bar & Cocktail", category: "ristorazione", description: "Atmosfera notturna, lista drink, eventi live.", previewColors: ["#F87171", "#3D1F1F"], pages: ["Home", "Drink list", "Eventi", "Contatti"] },
  { id: "tpl-portfolio-minimal", name: "Minimal Portfolio", category: "portfolio", description: "Griglia progetti essenziale, focus totale sul lavoro.", previewColors: ["#F3F6F4", "#1E2922"], pages: ["Home", "Progetti", "Bio", "Contatti"], popular: true },
  { id: "tpl-portfolio-creative", name: "Creative Showcase", category: "portfolio", description: "Layout asimmetrico, animazioni, per designer e fotografi.", previewColors: ["#A78BFA", "#241E3D"], pages: ["Home", "Lavori", "About", "Contatti"] },
  { id: "tpl-shop-minimal", name: "Shop Minimal", category: "ecommerce", description: "Catalogo prodotti pulito, checkout semplificato.", previewColors: ["#34D399", "#1C3329"], pages: ["Home", "Catalogo", "Prodotto", "Carrello"], popular: true },
  { id: "tpl-shop-boutique", name: "Boutique Elegante", category: "ecommerce", description: "Estetica raffinata per prodotti di fascia alta.", previewColors: ["#FBBF24", "#2E2410"], pages: ["Home", "Collezione", "Prodotto", "Checkout"] },
  { id: "tpl-agency-studio", name: "Studio Creativo", category: "agenzia", description: "Presenta servizi e case study con grande impatto.", previewColors: ["#60A5FA", "#1E2A3D"], pages: ["Home", "Servizi", "Case study", "Contatti"] },
  { id: "tpl-agency-digital", name: "Digital Agency", category: "agenzia", description: "Per agenzie marketing e comunicazione digitale.", previewColors: ["#34D399", "#1C3329"], pages: ["Home", "Servizi", "Clienti", "Contatti"], popular: true },
  { id: "tpl-dev-portfolio", name: "Developer Portfolio", category: "sviluppatori", description: "Sezione progetti con tag tecnologie, link repository.", previewColors: ["#34D399", "#161D19"], pages: ["Home", "Progetti", "Stack", "Contatti"] },
  { id: "tpl-dev-product", name: "Product Docs", category: "sviluppatori", description: "Landing per prodotto software con sezione documentazione.", previewColors: ["#60A5FA", "#161D19"], pages: ["Home", "Funzionalità", "Documentazione", "Prezzi"] },
  { id: "tpl-landing-app", name: "App Launch", category: "landing", description: "Landing page singola per il lancio di un'app o prodotto.", previewColors: ["#34D399", "#1C3329"], pages: ["Landing"], popular: true },
  { id: "tpl-landing-webinar", name: "Webinar Signup", category: "landing", description: "Pagina dedicata a iscrizioni evento o webinar.", previewColors: ["#F87171", "#3D1F1F"], pages: ["Landing"] },
  { id: "tpl-legal-studio", name: "Studio Legale Classico", category: "legale", description: "Tono professionale e rassicurante, aree di pratica in evidenza.", previewColors: ["#9CA8A1", "#1E2922"], pages: ["Home", "Aree di pratica", "Team", "Contatti"], popular: true },
  { id: "tpl-legal-notarile", name: "Studio Notarile", category: "legale", description: "Sobrio, istituzionale, orari e contatti in evidenza.", previewColors: ["#60A5FA", "#1E2A3D"], pages: ["Home", "Servizi", "Studio", "Contatti"] },
  { id: "tpl-health-clinic", name: "Clinica Moderna", category: "salute", description: "Prenotazione visite, presentazione specialisti.", previewColors: ["#60A5FA", "#1E2A3D"], pages: ["Home", "Specialisti", "Servizi", "Prenota"], popular: true },
  { id: "tpl-health-wellness", name: "Centro Benessere", category: "salute", description: "Atmosfera calma, focus su trattamenti e relax.", previewColors: ["#6EE7B7", "#1C3329"], pages: ["Home", "Trattamenti", "Galleria", "Contatti"] },
  { id: "tpl-startup-saas", name: "SaaS Launch", category: "startup", description: "Hero ad alta conversione, sezione funzionalità e pricing.", previewColors: ["#34D399", "#1C3329"], pages: ["Home", "Funzionalità", "Prezzi", "Contatti"], popular: true },
  { id: "tpl-startup-pitch", name: "Pitch Deck Online", category: "startup", description: "Presenta la tua startup a investitori e early adopter.", previewColors: ["#A78BFA", "#241E3D"], pages: ["Home", "Problema", "Soluzione", "Team"] },
  { id: "tpl-events-conference", name: "Conferenza", category: "eventi", description: "Programma, speaker e biglietti per eventi e conferenze.", previewColors: ["#FBBF24", "#2E2410"], pages: ["Home", "Programma", "Speaker", "Biglietti"], popular: true },
  { id: "tpl-events-wedding", name: "Matrimonio", category: "eventi", description: "Pagina elegante per invitati, location e RSVP.", previewColors: ["#F3F6F4", "#1E2922"], pages: ["Home", "Location", "Programma", "RSVP"] },
  { id: "tpl-nonprofit-cause", name: "Causa Sociale", category: "no-profit", description: "Racconta la missione, raccogli donazioni e volontari.", previewColors: ["#34D399", "#1C3329"], pages: ["Home", "Missione", "Dona", "Contatti"], popular: true },
  { id: "tpl-nonprofit-foundation", name: "Fondazione", category: "no-profit", description: "Tono istituzionale, trasparenza e rendicontazione.", previewColors: ["#60A5FA", "#1E2A3D"], pages: ["Home", "Progetti", "Trasparenza", "Contatti"] },
];
