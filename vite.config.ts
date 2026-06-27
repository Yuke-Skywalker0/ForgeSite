import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// UNICO punto dove vive il nome del repository GitHub Pages.
// - Repo "username.github.io" (user/org page, root del dominio): REPO_NAME = ""
// - Qualunque altro nome di repo (project page): REPO_NAME = "NomeRepo"
//   → il sito sarà servito sotto https://username.github.io/NomeRepo/
//
// Questo è l'unico posto da cambiare se rinomini il repo o passi a un
// dominio personalizzato. Vite propaga questo valore in tutta l'app via
// import.meta.env.BASE_URL, quindi non esiste un secondo punto da
// sincronizzare a mano.
const REPO_NAME = "ForgeSite";

// IMPORTANTE: il base path va applicato SOLO in produzione (npm run build),
// MAI in sviluppo (npm run dev). defineConfig riceve "command" — "serve"
// quando giri `vite`/`npm run dev`, "build" quando giri `vite build`. Se si
// applica il prefisso anche in dev, il dev server stesso risponde solo su
// http://localhost:5173/ForgeSite/ e qualunque altro path (inclusa la root
// "/") risulta non gestito da React Router → pagina bianca, esattamente il
// sintomo riscontrato. In build invece DEVE esserci, perché GitHub Pages
// pubblica il sito proprio sotto quel sottopercorso.
export default defineConfig(({ command }) => {
  const basePath = command === "build" && REPO_NAME ? `/${REPO_NAME}/` : "/";

  return {
    base: basePath,
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 5173,
    },
  };
});
