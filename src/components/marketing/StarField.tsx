import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  r: number;
  o: number;
  speed: number;
  phase: number;
}

interface StarFieldProps {
  count?: number;
  className?: string;
}

/**
 * Versione leggera di GalaxyCanvas: solo stelle statiche con twinkle
 * sottile, no mouse-tracking, no nebula. Usato nelle sezioni CTA e nelle
 * sezioni di separazione per aggiungere texture senza peso visivo o
 * computazionale eccessivo.
 */
export function StarField({ count = 60, className = "" }: StarFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.offsetWidth || 800;
    const H = canvas.offsetHeight || 200;
    canvas.width = W;
    canvas.height = H;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.2 + 0.2,
      o: Math.random() * 0.5 + 0.15,
      speed: Math.random() * 0.012 + 0.004,
      phase: Math.random() * Math.PI * 2,
    }));

    let t = 0;

    function draw() {
      ctx.clearRect(0, 0, W, H);
      if (!reduced) t += 1;

      particles.forEach((p) => {
        const opacity = reduced ? p.o : p.o * (0.6 + 0.4 * Math.sin(t * p.speed + p.phase));
        ctx.globalAlpha = opacity;
        ctx.fillStyle = "#6EE7B7";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
}
