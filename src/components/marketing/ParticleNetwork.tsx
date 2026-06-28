import { useEffect, useRef } from "react";
import { useThemeStore } from "@/store/themeStore";

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number; o: number;
  color: string;
}

interface ParticleNetworkProps {
  count?: number;
  maxDistance?: number;
  className?: string;
  /** Se true, le particelle reagiscono al mouse */
  interactive?: boolean;
}

/**
 * Rete di particelle con linee di connessione — effetto "costellazione".
 * Più intenso di StarField ma meno pesante di GalaxyCanvas.
 * Usato per spezzare le sezioni chiave (features, prezzi, CTA).
 * Rispetta prefers-reduced-motion.
 */
export function ParticleNetwork({
  count = 70,
  maxDistance = 120,
  className = "",
  interactive = true,
}: ParticleNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);
  const mouseRef  = useRef({ x: -9999, y: -9999 });
  const { theme } = useThemeStore();
  const isDark    = theme === "dark";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const context = ctx;

    let W = canvas.offsetWidth || 800;
    let H = canvas.offsetHeight || 400;
    canvas.width  = W;
    canvas.height = H;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Palette colori adattiva al tema
    const palette = isDark
      ? ["52,211,153", "96,165,250", "167,139,250", "110,231,183"]
      : ["16,185,129", "59,130,246", "139,92,246",  "6,182,212"];

    const particles: Particle[] = Array.from({ length: count }, () => {
      const color = palette[Math.floor(Math.random() * palette.length)]!;
      return {
        x:  Math.random() * W,
        y:  Math.random() * H,
        vx: (Math.random() - 0.5) * (reduced ? 0 : 0.4),
        vy: (Math.random() - 0.5) * (reduced ? 0 : 0.4),
        r:  Math.random() * 2 + 1,
        o:  Math.random() * 0.6 + 0.3,
        color,
      };
    });

    // Particella fantasma legata al mouse
    const mouse: Particle = { x: -9999, y: -9999, vx: 0, vy: 0, r: 3, o: 0, color: palette[0]! };

    const onMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouseRef.current = { x: mouse.x, y: mouse.y };
    };
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    const onResize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width  = W;
      canvas.height = H;
    };
    window.addEventListener("resize", onResize, { passive: true });

    function draw() {
      context.clearRect(0, 0, W, H);

      // Muovi particelle
      if (!reduced) {
        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;
        });
      }

      const all = [...particles, mouse];

      // Disegna connessioni
      for (let i = 0; i < all.length; i++) {
        for (let j = i + 1; j < all.length; j++) {
          const a = all[i]!;
          const b = all[j]!;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.35;
            // Linea con gradiente colore delle due particelle
            const grad = context.createLinearGradient(a.x, a.y, b.x, b.y);
            grad.addColorStop(0, `rgba(${a.color},${alpha})`);
            grad.addColorStop(1, `rgba(${b.color},${alpha})`);
            context.strokeStyle = grad;
            context.lineWidth   = 0.8;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      // Disegna particelle
      particles.forEach((p) => {
        // Alone
        const glow = context.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        glow.addColorStop(0, `rgba(${p.color},${p.o * 0.4})`);
        glow.addColorStop(1, `rgba(${p.color},0)`);
        context.fillStyle = glow;
        context.beginPath();
        context.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        context.fill();

        // Nucleo
        context.globalAlpha = p.o;
        context.fillStyle   = `rgb(${p.color})`;
        context.beginPath();
        context.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        context.fill();
        context.globalAlpha = 1;
      });

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
    };
  }, [theme, count, maxDistance, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-auto select-none ${className}`}
      aria-hidden="true"
    />
  );
}
