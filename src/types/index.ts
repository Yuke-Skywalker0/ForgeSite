// Tipi condivisi — derivati dal Core Data Model della specifica FORGESITE.
// Mantenuti sincronizzati con gli schema Zod lato backend.

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

<<<<<<< HEAD
=======
<<<<<<< HEAD
export type BackendProvider = "render" | "cloudflare" | "supabase";
export type BackendStatus = "not_configured" | "provisioning" | "active" | "error";

export interface ProjectBackend {
  id: string;
  projectId: string;
  provider: BackendProvider;
  status: BackendStatus;
  isExistingAccount: boolean;
  apiBaseUrl: string | null;
  features: {
    authEnabled: boolean;
    databaseEnabled: boolean;
    customEndpoints: boolean;
  };
  createdAt: string;
}
=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
export interface AiLog {
  id: string;
  type: string;
  cost: number;
  createdAt: string;
}

export type CustomEndpointMethod = "GET" | "POST" | "PATCH" | "DELETE";

export interface CustomEndpoint {
  id: string;
  projectBackendId: string;
  path: string;
  method: CustomEndpointMethod;
  description: string;
  requiresAuth: boolean;
  createdAt: string;
}

export type BackendProvider = "render" | "cloudflare" | "supabase";
export type BackendStatus = "not_configured" | "provisioning" | "active" | "error";

export interface ProjectBackend {
  id: string;
  projectId: string;
  provider: BackendProvider;
  status: BackendStatus;
  isExistingAccount: boolean;
  apiBaseUrl: string | null;
  features: {
    authEnabled: boolean;
    databaseEnabled: boolean;
    customEndpoints: boolean;
  };
  createdAt: string;
}
<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
