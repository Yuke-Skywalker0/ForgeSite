import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/apiClient";
import type { Commit, Block } from "@/types";

interface CommitInput {
  projectId: string;
  pageId: string;
  blockTree: Block[];
  message: string;
}

interface CommitResult extends Commit {
  pullRequestUrl: string;
  previewUrl: string | null;
}

export function usePublishChanges() {
  return useMutation({
    mutationFn: ({ projectId, ...body }: CommitInput) =>
      api.post<CommitResult>(`/projects/${projectId}/commit`, body),
  });
}

export function useMergePullRequest() {
  return useMutation({
    mutationFn: ({ projectId, prId }: { projectId: string; prId: string }) =>
      api.post<{ merged: boolean }>(`/projects/${projectId}/pr/${prId}/merge`),
  });
}
