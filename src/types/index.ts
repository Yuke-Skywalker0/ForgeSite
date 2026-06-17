// Tipi condivisi — derivati 1:1 dal Core Data Model della specifica FORGESITE.
// Questi tipi rappresentano il contratto con l'API; vanno mantenuti sincronizzati
// con gli schema Zod lato backend quando verranno generati.

export type UserRole = "owner" | "admin" | "editor" | "viewer";

export interface User {
  id: string;
  email: string;
  emailVerified: boolean;
  role: UserRole;
  tenantId: string;
  createdAt: string;
  lastLoginAt: string | null;
}

export type ProjectStatus = "active" | "archived";

export interface Project {
  id: string;
  tenantId: string;
  name: string;
  githubRepoId: string | null;
  githubRepoName: string | null;
  githubOwner: string | null;
  defaultBranch: string;
  status: ProjectStatus;
  templateId: string | null;
  createdAt: string;
}

export type BlockType =
  | "hero"
  | "text"
  | "image"
  | "cta"
  | "faq"
  | "form"
  | "gallery"
  | "pricing"
  | "features"
  | "testimonials"
  | "navbar"
  | "footer"
  | "contact"
  | "video"
  | "map";

export interface ResponsiveStyles {
  desktop: Record<string, string | number>;
  tablet: Record<string, string | number>;
  mobile: Record<string, string | number>;
}

export interface Block {
  id: string;
  type: BlockType;
  props: Record<string, unknown>;
  styles: ResponsiveStyles;
  children: Block[];
}

export interface Page {
  id: string;
  projectId: string;
  routePath: string;
  title: string;
  seoTitle: string | null;
  seoDescription: string | null;
  blockTree: Block[];
  isHomePage: boolean;
  lastCommitSha: string | null;
}

export type CommitStatus = "pending" | "merged" | "failed";

export interface Commit {
  id: string;
  projectId: string;
  branch: string;
  sha: string;
  message: string;
  status: CommitStatus;
  createdAt: string;
}

export type DeploymentStatus = "queued" | "building" | "success" | "failed";

export interface Deployment {
  id: string;
  projectId: string;
  commitSha: string;
  status: DeploymentStatus;
  type: "github-pages";
  deployedAt: string | null;
}

export interface Media {
  id: string;
  tenantId: string;
  url: string;
  optimizedUrl: string | null;
  webpUrl: string | null;
  altText: string | null;
  sizeBytes: number;
}

export type FormFieldType =
  | "text"
  | "email"
  | "phone"
  | "select"
  | "checkbox"
  | "radio"
  | "file";

export interface FormField {
  id: string;
  name: string;
  type: FormFieldType;
  label: string;
  required: boolean;
  options?: string[];
}

export type SubmissionMode = "email" | "db" | "both";

export interface FormDefinition {
  id: string;
  projectId: string;
  fields: FormField[];
  submissionMode: SubmissionMode;
}

export type AiLogType = "page" | "section" | "seo" | "copy" | "schema";

export interface AiLog {
  id: string;
  tenantId: string;
  type: AiLogType;
  createdAt: string;
  cost: number;
}

// --- Project Backend: estensione per siti con logica server-side ---
// Un progetto resta statico per default (GitHub Pages). Se il sito richiede
// auth utenti finali, DB, o API custom, il cliente attiva un ProjectBackend
// su un provider a sua scelta (o ne crea uno guidato da FORGESITE).

export type BackendProvider = "render" | "cloudflare" | "supabase";

export type BackendStatus =
  | "not_configured"
  | "provisioning"
  | "active"
  | "error";

export interface ProjectBackend {
  id: string;
  projectId: string;
  provider: BackendProvider;
  status: BackendStatus;
  /** True se il cliente ha collegato un account/progetto provider già esistente */
  isExistingAccount: boolean;
  /** URL base dell'API (Render/Cloudflare) o URL progetto (Supabase) */
  apiBaseUrl: string | null;
  /** Funzionalità attivate su questo backend */
  features: {
    authEnabled: boolean;
    databaseEnabled: boolean;
    customEndpoints: boolean;
  };
  createdAt: string;
}

export type CustomEndpointMethod = "GET" | "POST" | "PATCH" | "DELETE";

export interface CustomEndpoint {
  id: string;
  projectBackendId: string;
  path: string;
  method: CustomEndpointMethod;
  /** Descrizione in linguaggio naturale → usata da ForgeAI per generare il codice handler */
  description: string;
  /** Codice handler generato/validato, eseguito sandboxed nel backend del progetto */
  handlerCode: string;
  requiresAuth: boolean;
  createdAt: string;
}
