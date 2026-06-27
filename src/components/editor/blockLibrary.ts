import {
  LayoutTemplate, Type, Image, MousePointerClick, HelpCircle, FileText,
  GalleryHorizontal, Tag, Star, MessageSquareQuote, PanelTop, PanelBottom,
  Mail, Video, Map,
} from "lucide-react";
import type { BlockType, Block } from "@/types";

export const blockLibrary: Array<{ type: BlockType; label: string; icon: typeof LayoutTemplate }> = [
  { type: "hero", label: "Hero", icon: LayoutTemplate },
  { type: "text", label: "Testo", icon: Type },
  { type: "image", label: "Immagine", icon: Image },
  { type: "cta", label: "Call to action", icon: MousePointerClick },
  { type: "faq", label: "FAQ", icon: HelpCircle },
  { type: "form", label: "Form", icon: FileText },
  { type: "gallery", label: "Galleria", icon: GalleryHorizontal },
  { type: "pricing", label: "Prezzi", icon: Tag },
  { type: "features", label: "Caratteristiche", icon: Star },
  { type: "testimonials", label: "Testimonianze", icon: MessageSquareQuote },
  { type: "navbar", label: "Barra navigazione", icon: PanelTop },
  { type: "footer", label: "Footer", icon: PanelBottom },
  { type: "contact", label: "Contatti", icon: Mail },
  { type: "video", label: "Video", icon: Video },
  { type: "map", label: "Mappa", icon: Map },
];

export function createEmptyBlock(type: BlockType): Block {
  return {
    id: `block_${Math.random().toString(36).slice(2, 10)}`,
    type,
    props: {},
    styles: { desktop: {}, tablet: {}, mobile: {} },
    children: [],
  };
}
