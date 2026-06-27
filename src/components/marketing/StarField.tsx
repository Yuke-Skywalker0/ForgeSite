import { useEffect, useRef } from "react";
import { useThemeStore } from "@/store/themeStore";

interface StarFieldProps { count?: number; className?: string; }

export function StarField({ count = 60, className = "" }: StarFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);
  const { theme } = useThemeStore();
  const isDark    = theme === "dark";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const context = ctx;

    const W = canvas.offsetWidth || 800;
    const H = canvas.offsetHeight || 200;
    canvas.width  = W;
    canvas.height = H;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const col     = isDark ? "110,231,183" : "16,185,129";
    const maxAlpha = isDark ? 0.55 : 0.45;

    const pts = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.3 + 0.2,
      o: Math.random() * maxAlpha + 0.1,
      sp: Math.random() * 0.012 + 0.004,
      ph: Math.random() * Math.PI * 2,
    }));

    let t = 0;
    function draw() {
      context.clearRect(0, 0, W, H);
      if (!reduced) t += 1;
      pts.forEach((p) => {
        const a = reduced ? p.o : p.o * (0.6 + 0.4 * Math.sin(t * p.sp + p.ph));
        context.globalAlpha = a;
        context.fillStyle   = `rgb(${col})`;
        context.beginPath();
        context.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        context.fill();
      });
      context.globalAlpha = 1;
      rafRef.current  = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [count, theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
}
