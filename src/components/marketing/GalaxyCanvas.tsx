import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number; // depth 0-1, usato per parallax
  radius: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface NebulaPatch {
  x: number;
  y: number;
  radius: number;
  color: string;
  opacity: number;
}

interface GalaxyCanvasProps {
  /** Numero di stelle. Default 180 */
  starCount?: number;
  /** Opacità massima nebula 0-1. Default 0.18 */
  nebulaOpacity?: number;
  /** Classe CSS per il wrapper (es. altezza, posizione) */
  className?: string;
}

const PALETTE = [
  "rgba(52,211,153,",   // verde smeraldo
  "rgba(110,231,183,",  // verde chiaro
  "rgba(96,165,250,",   // blu info
  "rgba(167,139,250,",  // viola soft
  "rgba(243,246,244,",  // bianco caldo
];

function buildScene(w: number, h: number, starCount: number) {
  const stars: Star[] = Array.from({ length: starCount }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    z: Math.random(),
    radius: Math.random() * 1.4 + 0.3,
    opacity: Math.random() * 0.7 + 0.2,
    twinkleSpeed: Math.random() * 0.015 + 0.005,
    twinkleOffset: Math.random() * Math.PI * 2,
  }));

  const nebulae: NebulaPatch[] = [
    { x: w * 0.15, y: h * 0.25, radius: w * 0.28, color: "52,211,153", opacity: 0 },
    { x: w * 0.8,  y: h * 0.6,  radius: w * 0.22, color: "96,165,250", opacity: 0 },
    { x: w * 0.5,  y: h * 0.85, radius: w * 0.18, color: "167,139,250", opacity: 0 },
    { x: w * 0.88, y: h * 0.12, radius: w * 0.15, color: "110,231,183", opacity: 0 },
  ];

  return { stars, nebulae };
}

export function GalaxyCanvas({ starCount = 180, nebulaOpacity = 0.18, className = "" }: GalaxyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const visibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let nebulae: NebulaPatch[] = [];
    let t = 0;
    let scrollY = window.scrollY;
    let reducedMotion = false;
    let isMobile = false;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 768px)");

    const updateReducedMotion = () => {
      reducedMotion = motionQuery.matches;
    };

    const updateIsMobile = () => {
      isMobile = mobileQuery.matches;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ({ stars, nebulae } = buildScene(width, height, starCount));
    };

    const io = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry?.isIntersecting ?? true;
    }, { threshold: 0 });
    io.observe(canvas);

    const onMouseMove = (event: MouseEvent) => {
      if (isMobile) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (event.clientX - rect.left) / width - 0.5,
        y: (event.clientY - rect.top) / height - 0.5,
      };
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    const wrap = (value: number, limit: number) => ((value % limit) + limit) % limit;

    const draw = () => {
      if (!visibleRef.current) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      if (!reducedMotion) t += 1;
      ctx.clearRect(0, 0, width, height);

      const mx = reducedMotion ? 0 : mouseRef.current.x * 18;
      const my = reducedMotion ? 0 : mouseRef.current.y * 12;
      const scrollShift = reducedMotion ? 0 : scrollY * 0.06;

      nebulae.forEach((n) => {
        const x = n.x + mx * 0.3;
        const y = n.y + my * 0.3 - scrollShift * 0.4;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, n.radius);
        grad.addColorStop(0, `rgba(${n.color},${nebulaOpacity})`);
        grad.addColorStop(0.5, `rgba(${n.color},${nebulaOpacity * 0.4})`);
        grad.addColorStop(1, `rgba(${n.color},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, n.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      stars.forEach((star) => {
        const twinkle = reducedMotion
          ? star.opacity
          : star.opacity * (0.65 + 0.35 * Math.sin(t * star.twinkleSpeed + star.twinkleOffset));

        const px = star.x + mx * (1 - star.z) * 14 + scrollShift * (1 - star.z) * 0.5;
        const py = star.y + my * (1 - star.z) * 10 - scrollShift * star.z * 0.3;
        const x = wrap(px, width);
        const y = wrap(py, height);
        const colorIdx = Math.floor(star.z * PALETTE.length) % PALETTE.length;
        const color = PALETTE[colorIdx] ?? PALETTE[0]!;

        ctx.globalAlpha = twinkle * 0.85;
        ctx.fillStyle = `${color}1)`;
        ctx.beginPath();
        ctx.arc(x, y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        if (star.radius > 1.1) {
          const glow = ctx.createRadialGradient(x, y, 0, x, y, star.radius * 3);
          glow.addColorStop(0, `${color}${(twinkle * 0.25).toFixed(2)})`);
          glow.addColorStop(1, `${color}0)`);
          ctx.globalAlpha = 1;
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(x, y, star.radius * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(draw);
    };

    updateReducedMotion();
    updateIsMobile();
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    if (motionQuery.addEventListener) {
      motionQuery.addEventListener("change", updateReducedMotion);
    } else {
      motionQuery.addListener(updateReducedMotion);
    }

    if (mobileQuery.addEventListener) {
      mobileQuery.addEventListener("change", updateIsMobile);
    } else {
      mobileQuery.addListener(updateIsMobile);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      io.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener("change", updateReducedMotion);
      } else {
        motionQuery.removeListener(updateReducedMotion);
      }
      if (mobileQuery.removeEventListener) {
        mobileQuery.removeEventListener("change", updateIsMobile);
      } else {
        mobileQuery.removeListener(updateIsMobile);
      }
    };
  }, [starCount, nebulaOpacity]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
}
