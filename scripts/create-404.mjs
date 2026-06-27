// GitHub Pages non supporta routing lato server: se un utente visita
// direttamente /ForgeSite/app/projects/abc123/editor (URL non pre-renderizzato
// come file fisico), GitHub risponde 404 invece di servire la SPA.
//
// Il workaround standard (single-page-apps-for-github-pages) è copiare
// l'index.html generato come 404.html: GitHub Pages serve quel file per ogni
// URL sconosciuto, il quale poi carica comunque il bundle React, che a sua
// volta legge l'URL reale e fa il match della route lato client.
//
// Eseguito automaticamente dopo "vite build" (vedi package.json).
import { copyFileSync, existsSync } from "fs";
import { join } from "path";

const DIST_DIR = join(process.cwd(), "dist");
const source = join(DIST_DIR, "index.html");
const target = join(DIST_DIR, "404.html");

if (!existsSync(source)) {
  console.error("dist/index.html non trovato — esegui prima la build.");
  process.exit(1);
}

copyFileSync(source, target);
console.log("404.html creato da index.html (fallback routing GitHub Pages SPA).");
