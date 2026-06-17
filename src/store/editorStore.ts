import { create } from "zustand";
import type { Block, ResponsiveStyles } from "@/types";

export type EditorMode = "inline" | "block" | "advanced";
export type Breakpoint = "desktop" | "tablet" | "mobile";

interface EditorState {
  pageId: string | null;
  blockTree: Block[];
  selectedBlockId: string | null;
  mode: EditorMode;
  activeBreakpoint: Breakpoint;
  isDirty: boolean;

  loadPage: (pageId: string, blockTree: Block[]) => void;
  selectBlock: (blockId: string | null) => void;
  setMode: (mode: EditorMode) => void;
  setBreakpoint: (bp: Breakpoint) => void;
  updateBlockProps: (blockId: string, props: Record<string, unknown>) => void;
  updateBlockStyles: (
    blockId: string,
    breakpoint: Breakpoint,
    styles: Record<string, string | number>
  ) => void;
  reorderBlocks: (parentId: string | null, orderedIds: string[]) => void;
  markSaved: () => void;
}

// Cammina l'albero ricorsivo e applica `fn` al nodo con id `blockId`.
// L'albero è immutabile: ogni livello viene ricostruito solo se contiene il target.
function mapBlockTree(
  nodes: Block[],
  blockId: string,
  fn: (block: Block) => Block
): Block[] {
  return nodes.map((node) => {
    if (node.id === blockId) return fn(node);
    if (node.children.length > 0) {
      return { ...node, children: mapBlockTree(node.children, blockId, fn) };
    }
    return node;
  });
}

const emptyStyles: ResponsiveStyles = { desktop: {}, tablet: {}, mobile: {} };

export const useEditorStore = create<EditorState>((set) => ({
  pageId: null,
  blockTree: [],
  selectedBlockId: null,
  mode: "block",
  activeBreakpoint: "desktop",
  isDirty: false,

  loadPage: (pageId, blockTree) =>
    set({ pageId, blockTree, selectedBlockId: null, isDirty: false }),

  selectBlock: (blockId) => set({ selectedBlockId: blockId }),

  setMode: (mode) => set({ mode }),

  setBreakpoint: (bp) => set({ activeBreakpoint: bp }),

  updateBlockProps: (blockId, props) =>
    set((state) => ({
      blockTree: mapBlockTree(state.blockTree, blockId, (b) => ({
        ...b,
        props: { ...b.props, ...props },
      })),
      isDirty: true,
    })),

  updateBlockStyles: (blockId, breakpoint, styles) =>
    set((state) => ({
      blockTree: mapBlockTree(state.blockTree, blockId, (b) => ({
        ...b,
        styles: {
          ...emptyStyles,
          ...b.styles,
          [breakpoint]: { ...b.styles[breakpoint], ...styles },
        },
      })),
      isDirty: true,
    })),

  reorderBlocks: (parentId, orderedIds) =>
    set((state) => {
      const reorderAt = (nodes: Block[]): Block[] => {
        const idsInThisLevel = new Set(nodes.map((n) => n.id));
        const isTargetLevel =
          parentId === null
            ? nodes === state.blockTree
            : idsInThisLevel.has(orderedIds[0] ?? "");

        if (isTargetLevel) {
          const byId = new Map(nodes.map((n) => [n.id, n]));
          return orderedIds
            .map((id) => byId.get(id))
            .filter((n): n is Block => n !== undefined);
        }
        return nodes.map((n) =>
          n.children.length > 0
            ? { ...n, children: reorderAt(n.children) }
            : n
        );
      };
      return { blockTree: reorderAt(state.blockTree), isDirty: true };
    }),

  markSaved: () => set({ isDirty: false }),
}));
