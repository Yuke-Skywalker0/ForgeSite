import { useEffect, useRef } from "react";
import { useThemeStore } from "../../store/themeStore";

interface Star {
  x: number; y: number; z: number;
  r: number; o: number;
  twSpeed: number; twPhase: number;
}
interface Nebula {
  x: number; y: number; radius: number; color: string;
}

// Palette nebula per tema scuro
const DARK_PALETTE   = ["52,211,153","110,231,183","96,165,250","167,139,250","243,246,244"];
const DARK_NEBULAE   = ["52,211,153","96,165,250","167,139,250","110,231,183"];

// Palette nebula per tema chiaro (più sature, su sfondo chiaro)
const LIGHT_PALETTE  = ["16,185,129","5,150,105","59,130,246","139,92,246","6,182,212"];
const LIGHT_NEBULAE  = ["16,185,129","59,130,246","139,92,246","6,182,212"];

function buildStars(w: number, h: number, count: number): Star[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    z: Math.random(),
    r: Math.random() * 1.5 + 0.3,
    o: Math.random() * 0.7 + 0.2,
    twSpeed: Math.random() * 0.015 + 0.005,
    twPhase: Math.random() * Math.PI * 2,
  }));
}

function buildNebulae(w: number, h: number, colors: string[]): Nebula[] {
  return [
    { x: w * 0.15, y: h * 0.25, radius: w * 0.28, color: colors[0]! },
    { x: w * 0.82, y: h * 0.55, radius: w * 0.22, color: colors[1]! },
    { x: w * 0.50, y: h * 0.82, radius: w * 0.18, color: colors[2]! },
    { x: w * 0.88, y: h * 0.12, radius: w * 0.14, color: colors[3]! },
  ];
}

interface GalaxyCanvasProps {
  starCount?:    number;
  nebulaOpacity?: number;
  className?:   string;
}

export function GalaxyCanvas({ starCount = 180, nebulaOpacity = 0.16, className = "" }: GalaxyCanvasProps) {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const mouseRef    = useRef({ x: 0, y: 0 });
  const rafRef      = useRef<number>(0);
  const visibleRef  = useRef(true);
  const { theme }   = useThemeStore();
  const isDark      = theme === "dark";

  const palette   = isDark ? DARK_PALETTE   : LIGHT_PALETTE;
  const nebulaCol = isDark ? DARK_NEBULAE   : LIGHT_NEBULAE;
  // Su tema chiaro le stelle devono essere più visibili ma non troppo intense
  const starAlpha  = isDark ? 0.85 : 0.55;
  const nebulaAlpha = isDark ? nebulaOpacity : nebulaOpacity * 0.7;

  const reduced = typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

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

    let stars   = buildStars(W, H, starCount);
    let nebulae = buildNebulae(W, H, nebulaCol);
    let t = 0;
    let scrollY = window.scrollY;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const io = new IntersectionObserver(([e]) => {
      visibleRef.current = e?.isIntersecting ?? true;
    }, { threshold: 0 });
    io.observe(canvas);

    const onMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      mouseRef.current = { x: e.clientX / W - 0.5, y: e.clientY / H - 0.5 };
    };
    const onScroll = () => { scrollY = window.scrollY; };
    const onResize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width  = W;
      canvas.height = H;
      stars   = buildStars(W, H, starCount);
      nebulae = buildNebulae(W, H, nebulaCol);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll",    onScroll,    { passive: true });
    window.addEventListener("resize",    onResize,    { passive: true });

    function draw() {
      if (!visibleRef.current) { rafRef.current = requestAnimationFrame(draw); return; }
      if (!reduced) t += 1;

      context.clearRect(0, 0, W, H);

      const mx = reduced ? 0 : mouseRef.current.x * 18;
      const my = reduced ? 0 : mouseRef.current.y * 12;
      const sy = reduced ? 0 : scrollY * 0.06;

      // Nebulose
      nebulae.forEach((n) => {
        const nx = n.x + mx * 0.3;
        const ny = n.y + my * 0.3 - sy * 0.4;
        const g  = context.createRadialGradient(nx, ny, 0, nx, ny, n.radius);
        g.addColorStop(0,   `rgba(${n.color},${nebulaAlpha})`);
        g.addColorStop(0.5, `rgba(${n.color},${nebulaAlpha * 0.4})`);
        g.addColorStop(1,   `rgba(${n.color},0)`);
        context.fillStyle = g;
        context.beginPath();
        context.arc(nx, ny, n.radius, 0, Math.PI * 2);
        context.fill();
      });

      // Stelle
      stars.forEach((s) => {
        const tw = reduced ? s.o : s.o * (0.65 + 0.35 * Math.sin(t * s.twSpeed + s.twPhase));
        const px = (s.x + mx * (1 - s.z) * 14 + sy * (1 - s.z) * 0.5) % W;
        const py = (s.y + my * (1 - s.z) * 10 - sy * s.z * 0.3 + H) % H;
        const ci = Math.floor(s.z * palette.length) % palette.length;
        const col = palette[ci] ?? palette[0]!;

        context.globalAlpha = tw * starAlpha;
        context.fillStyle   = `rgba(${col},1)`;
        context.beginPath();
        context.arc(px, py, s.r, 0, Math.PI * 2);
        context.fill();

        // Alone per stelle grandi
        if (s.r > 1.1) {
          const glow = context.createRadialGradient(px, py, 0, px, py, s.r * 4);
          glow.addColorStop(0, `rgba(${col},${(tw * 0.3).toFixed(2)})`);
          glow.addColorStop(1, `rgba(${col},0)`);
          context.globalAlpha = 1;
          context.fillStyle   = glow;
          context.beginPath();
          context.arc(px, py, s.r * 4, 0, Math.PI * 2);
          context.fill();
        }
      });

      context.globalAlpha = 1;
      rafRef.current  = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      io.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll",    onScroll);
      window.removeEventListener("resize",    onResize);
    };
  }, [theme, starCount, nebulaOpacity]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
}
