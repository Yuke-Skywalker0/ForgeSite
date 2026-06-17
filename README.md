# FORGESITE — Frontend

Dashboard e editor visuale a blocchi per la piattaforma FORGESITE.

## Stack
React 18 + Vite + TypeScript strict + TailwindCSS + Zustand + React Query + DnD Kit + Monaco Editor.

## Setup

```bash
npm install
cp .env.example .env
# modifica VITE_API_BASE_URL se il backend non è su localhost:4000
npm run dev
```

L'app parte su `http://localhost:5173`.

## Struttura

```
src/
  components/
    ui/          Button, Input, Card, Badge — primitive di design
    layout/      Sidebar, AppShell
    dashboard/   ProjectCard, SeoScorePanel, AiUsagePanel, ActivityFeed, DeployHeatBar
    editor/      BlockLibraryPanel, EditorCanvas, BlockNode, InspectorPanel,
                 AdvancedModeDrawer, PublishBar, BackendSetupPanel, CustomEndpointsPanel
  pages/         Una pagina per route
  store/         Zustand: authStore (sessione), editorStore (blockTree locale)
  lib/
    apiClient.ts       fetch wrapper, cookie-based auth
    queries/           hook React Query per risorsa (projects, auth, backend, publish)
  types/         Tipi condivisi, mirror del data model backend
  routes/        Router + guard autenticazione
```

## Note implementative

- **Autenticazione**: nessun token in localStorage. La sessione vive in cookie HttpOnly
  impostati dal backend; il frontend manda solo `credentials: "include"`.
- **Editor**: il blockTree è mantenuto come albero immutabile in `editorStore`. Il
  salvataggio verso il backend avviene solo al click su "Pubblica modifiche" (PublishBar),
  non ad ogni keystroke.
- **Advanced Mode**: l'editing JSON raw via Monaco è limitato a ruoli `owner`/`admin`
  (vedi `AdvancedModeDrawer`), enforced sia qui che — obbligatoriamente — anche lato
  backend (mai fidarsi solo del controllo client-side).
- **Backend dei progetti**: `BackendSetupPanel` e `CustomEndpointsPanel` gestiscono
  l'attivazione opzionale di un backend reale (Supabase/Render/Cloudflare) per i siti
  che necessitano di auth utenti finali, database, o API custom oltre alle pagine statiche.

## Cosa manca da collegare

Diversi componenti assumono endpoint backend non ancora implementati nello scaffold
fornito (vedi sezione "Moduli da generare" nel README del backend). I componenti
frontend sono già pronti a riceverli: basta che l'endpoint risponda con la shape
definita in `src/types/index.ts`.
