import { useState, useEffect, useRef } from "react";

/**
 * Robust scroll-spy hook that handles lazy-rendered sections.
 * Uses MutationObserver to detect when sections appear in DOM,
 * then tracks them with IntersectionObserver.
 */
export function useScrollSpy(sectionIds: string[], offset = 80) {
  const [activeId, setActiveId] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const mutationRef = useRef<MutationObserver | null>(null);
  const trackedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    // Cleanup previous
    observerRef.current?.disconnect();
    mutationRef.current?.disconnect();
    trackedRef.current.clear();

    const visibilityMap = new Map<string, number>();

    // Create IntersectionObserver
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0
          );
        });

        // Pick the visible section closest to the top of the viewport
        let bestId = "";
        let bestTop = Infinity;
        visibilityMap.forEach((ratio, id) => {
          if (ratio > 0) {
            const el = document.getElementById(id);
            if (el) {
              const dist = Math.abs(el.getBoundingClientRect().top - offset);
              if (dist < bestTop) {
                bestTop = dist;
                bestId = id;
              }
            }
          }
        });

        if (bestId) setActiveId(bestId);
      },
      {
        rootMargin: `-${offset}px 0px -20% 0px`,
        threshold: [0, 0.05, 0.1, 0.2, 0.3, 0.5],
      }
    );
    observerRef.current = io;

    // Try to observe existing sections
    const tryObserve = () => {
      sectionIds.forEach((id) => {
        if (trackedRef.current.has(id)) return;
        const el = document.getElementById(id);
        if (el) {
          io.observe(el);
          trackedRef.current.add(id);
        }
      });
    };

    tryObserve();

    // MutationObserver to catch lazy-rendered sections
    const mo = new MutationObserver(() => {
      if (trackedRef.current.size < sectionIds.length) {
        tryObserve();
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });
    mutationRef.current = mo;

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [sectionIds.join(","), offset]);

  return activeId;
}
