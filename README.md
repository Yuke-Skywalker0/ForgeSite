# FORGESITE — Frontend

Frontend della piattaforma SaaS FORGESITE: sito marketing pubblico + dashboard
ed editor visuale per la gestione dei siti generati. Single Page Application
React + Vite + React Router, pubblicata su GitHub Pages.

## Cos'è

FORGESITE è una piattaforma che consente la creazione, modifica e gestione di
siti web statici ospitati su GitHub Pages, tramite editor visuale a blocchi,
automazione GitHub e generazione AI. Questo repository contiene il frontend:
il sito che presenta il prodotto (Home, Chi siamo, Servizi, Prezzi) e
l'applicazione web (login, dashboard, editor) con cui i clienti gestiscono i
propri progetti.

## Stack

- **React 18** + **Vite** + **TypeScript** (strict mode)
- **React Router** — routing, sia per le pagine marketing che per l'app autenticata
- **TailwindCSS 3** — styling, design token centralizzati
- **Zustand** — stato locale (sessione utente, editor)
- **React Query** — stato server (progetti, backend collegati)
- **DnD Kit** — drag and drop nell'editor a blocchi
- **Monaco Editor** — modalità di editing JSON avanzata

Nessuna dipendenza di terze parti per la gestione dei meta tag SEO: titolo e
meta tag per pagina sono impostati nativamente (componente `Seo`, vedi
`src/components/marketing/Seo.tsx`), senza librerie esterne — scelta
deliberata per ridurre la superficie di rischio di pacchetti poco mantenuti.

## Architettura

Il sito è una SPA: tutte le pagine (marketing e app autenticata) sono
gestite dallo stesso router React, nello stesso bundle. Le pagine marketing
(`/`, `/chi-siamo`, `/servizi`, `/prezzi`, `/privacy`, `/termini`) sono
caricate eagerly (incluse nel bundle principale, niente attesa aggiuntiva).
Le pagine dell'app autenticata (`/app/login`, `/app/dashboard`,
`/app/projects/...`, `/app/settings`) sono caricate lazy via `React.lazy`,
così chi visita solo il sito marketing non scarica il codice dell'editor.

Il base path per il deploy (sottocartella del repository su GitHub Pages) è
centralizzato in `vite.config.ts`.

## Struttura

```
frontend/
├── public/                          asset statici copiati 1:1 nel build
│   ├── favicon.svg
│   ├── og-cover.png                 immagine anteprima social
│   ├── robots.txt
│   ├── sitemap.xml
│   └── .nojekyll
├── scripts/
│   └── create-404.mjs               genera 404.html per il routing SPA
├── src/
│   ├── components/
│   │   ├── ui/                      Button, Input, Card, Badge
│   │   ├── layout/                  AppShell, AppSidebar, MarketingLayout
│   │   ├── marketing/                Navbar, Footer, Seo, FlowDiagram
│   │   ├── dashboard/                ProjectCard, DeployHeatBar
│   │   └── editor/                   BlockLibraryPanel, EditorCanvas, BlockNode,
│   │                                  InspectorPanel, AdvancedModeDrawer, PublishBar,
│   │                                  BackendSetupPanel, blockLibrary
│   ├── pages/
│   │   ├── marketing/                HomePage, ChiSiamoPage, ServiziPage, PrezziPage,
│   │   │                              PrivacyPage, TerminiPage, NotFoundPage
│   │   └── app/                      LoginPage, RegisterPage, DashboardPage,
│   │                                  ProjectsListPage, CreateProjectPage, EditorPage,
│   │                                  ProjectBackendPage, SettingsPage
│   ├── store/                        authStore, editorStore (Zustand)
│   ├── lib/
│   │   ├── apiClient.ts              fetch wrapper, cookie-based auth
│   │   ├── useRequireAuth.ts         guard di sessione per le pagine /app/*
│   │   └── queries/                  hook React Query per risorsa
│   ├── types/                        tipi condivisi, mirror del data model backend
│   ├── routes/
│   │   └── routes.tsx                definizione unica di tutte le route
│   ├── App.tsx                       providers (React Query) + RouterProvider
│   └── main.tsx                      entry point
├── vite.config.ts                    base path GitHub Pages (un solo punto di config)
├── tailwind.config.js                design token (palette scuro/verde smeraldo)
└── .github/workflows/deploy.yml      build e deploy automatico
```

## Stato

Il frontend è completo e autonomo: l'interfaccia (sito marketing, login,
dashboard, editor) è interamente costruita e pubblicabile. Le funzionalità
che richiedono il backend (autenticazione reale, salvataggio progetti,
pubblicazione su GitHub) mostrano l'interfaccia ma non eseguono operazioni
finché il backend FORGESITE non è collegato — è lo sviluppo successivo.
