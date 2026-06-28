export interface CustomEndpoint {
  id: string;
  projectBackendId: string;
  path: string;
  method: "GET" | "POST" | "PATCH" | "DELETE";
  description: string;
  requiresAuth: boolean;
  createdAt: string;
}

export interface AiLog {
  id: string;
  type: string;
  cost: number;
  createdAt: string;
}
