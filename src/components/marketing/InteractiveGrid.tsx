import { useEffect, useRef } from "react";
import { useThemeStore } from "@/store/themeStore";

/**
 * Griglia di punti interattiva: i punti si illuminano e si avvicinano al
 * cursore del mouse, creando un effetto "campo magnetico" sottile. Usato
 * come sfondo per le sezioni di contenuto, dove la galassia sarebbe
 * troppo pesante visivamente. Si adatta ai colori del tema.
 */
export function InteractiveGrid({ className = "" }: { className?: string }) {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const mouseRef   = useRef({ x: -9999, y: -9999 });
  const rafRef     = useRef<number>(0);
  const { theme }  = useThemeStore();
  const isDark     = theme === "dark";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = canvas.offsetWidth || 800;
    let H = canvas.offsetHeight || 400;
    canvas.width  = W;
    canvas.height = H;

    const SPACING = 40;
    const RADIUS  = 1.5;
    const ATTRACT = 80; // raggio di influenza del mouse

    // Colori per tema
    const baseColor    = isDark ? "52,211,153"  : "16,185,129";
    const activeColor  = isDark ? "110,231,183" : "5,150,105";
    const baseAlpha    = isDark ? 0.12 : 0.18;
    const activeAlpha  = isDark ? 0.9  : 0.85;

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };
    const onResize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width  = W;
      canvas.height = H;
    };

    canvas.addEventListener("mousemove", onMouse);
    canvas.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize, { passive: true });

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function draw() {
      ctx.clearRect(0, 0, W, H);

      const { x: mx, y: my } = mouseRef.current;

      for (let gx = SPACING / 2; gx < W; gx += SPACING) {
        for (let gy = SPACING / 2; gy < H; gy += SPACING) {
          const dx = mx - gx;
          const dy = my - gy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - dist / ATTRACT);

          let px = gx;
          let py = gy;

          if (!reduced && influence > 0) {
            // Attrazione verso il mouse
            px = gx + dx * influence * 0.25;
            py = gy + dy * influence * 0.25;
          }

          const alpha = baseAlpha + (activeAlpha - baseAlpha) * influence;
          const col   = influence > 0.1 ? activeColor : baseColor;
          const r     = RADIUS + influence * 2;

          ctx.globalAlpha = alpha;
          ctx.fillStyle   = `rgb(${col})`;
          ctx.beginPath();
          ctx.arc(px, py, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      rafRef.current  = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("mousemove", onMouse);
      canvas.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`select-none ${className}`}
      aria-hidden="true"
    />
  );
}
