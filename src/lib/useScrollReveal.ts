import { useEffect, useRef, useState } from "react";

/**
 * Rivela un elemento (fade-up) la prima volta che entra nel viewport durante
 * lo scroll. Nessuna libreria esterna: usa IntersectionObserver nativo,
 * supportato da ogni browser moderno. Rispetta prefers-reduced-motion (la
 * classe CSS applicata in index.css disattiva la transizione per chi lo
 * richiede, qui ci limitiamo a non bloccare il contenuto se JS è lento:
 * l'elemento parte già "visible" lato server/primo paint, l'observer lo
 * anima solo se non è già visibile al mount).
 */
export function useScrollReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
