import { useState } from "react";
import { GitBranch, GitPullRequest, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useEditorStore } from "@/store/editorStore";
import { usePublishChanges, useMergePullRequest } from "@/lib/queries/publish";

type PublishStage = "idle" | "committing" | "pr_open" | "merging" | "merged";

export function PublishBar({ projectId, pageId }: { projectId: string; pageId: string }) {
  const { blockTree, isDirty, markSaved } = useEditorStore();
  const [stage, setStage] = useState<PublishStage>("idle");
  const [prInfo, setPrInfo] = useState<{ id: string; url: string } | null>(null);

  const publish = usePublishChanges();
  const merge = useMergePullRequest();

  function handlePublish() {
    setStage("committing");
    publish.mutate(
      { projectId, pageId, blockTree, message: "Aggiornamento contenuti da editor visuale" },
      {
        onSuccess: (result) => {
          setStage("pr_open");
          setPrInfo({ id: result.id, url: result.pullRequestUrl });
          markSaved();
        },
        onError: () => setStage("idle"),
      }
    );
  }

  function handleMerge() {
    if (!prInfo) return;
    setStage("merging");
    merge.mutate(
      { projectId, prId: prInfo.id },
      { onSuccess: () => setStage("merged"), onError: () => setStage("pr_open") }
    );
  }

  return (
    <div className="flex items-center justify-between border-t border-[var(--border)] bg-[var(--surface)] px-5 py-3">
      <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
        {isDirty && stage === "idle" && (
          <>
            <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
            Modifiche non pubblicate
          </>
        )}
        {stage === "pr_open" && prInfo && (
          <>
<<<<<<< HEAD
            <GitPullRequest size={14} className="text-forge-accent-soft" />
            Pull request aperta —{" "}
            <a href={prInfo.url} target="_blank" rel="noreferrer" className="text-forge-accent-soft hover:underline">
=======
            <GitPullRequest size={14} className="text-[var(--accent-soft)]" />
            Pull request aperta —{" "}
            <a href={prInfo.url} target="_blank" rel="noreferrer" className="text-[var(--accent-soft)] hover:underline">
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
              revisiona su GitHub
            </a>
          </>
        )}
        {stage === "merged" && (
          <>
<<<<<<< HEAD
            <CheckCircle2 size={14} className="text-forge-accent" />
=======
            <CheckCircle2 size={14} className="text-[var(--accent)]" />
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
            Pubblicato — deploy in corso su GitHub Pages
          </>
        )}
      </div>

      <div className="flex gap-2">
        {stage === "idle" && (
          <Button onClick={handlePublish} disabled={!isDirty || publish.isPending}>
            <GitBranch size={14} strokeWidth={1.75} />
            Pubblica modifiche
          </Button>
        )}
        {stage === "committing" && (
          <Button disabled>
            <Loader2 size={14} className="animate-spin" />
            Creazione branch e commit…
          </Button>
        )}
        {stage === "pr_open" && (
          <Button onClick={handleMerge} disabled={merge.isPending}>
            Approva e pubblica
          </Button>
        )}
        {stage === "merging" && (
          <Button disabled>
            <Loader2 size={14} className="animate-spin" />
            Merge in corso…
          </Button>
        )}
      </div>
    </div>
  );
}
