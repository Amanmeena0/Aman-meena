import { useEffect, useRef, useState, useCallback } from 'react';

interface SmoothScrollState {
  progress: number;
  activeIndex: number;
  totalItems: number;
}

export function useSmoothScroll(
  containerRef: React.RefObject<HTMLElement | null>,
  itemCount: number
): SmoothScrollState {
  const [state, setState] = useState<SmoothScrollState>({
    progress: 0,
    activeIndex: 0,
    totalItems: itemCount,
  });

  const targetProgress = useRef(0);
  const currentProgress = useRef(0);
  const rafId = useRef<number>(0);

  const lerp = useCallback((start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Total scrollable distance within this section
      const sectionHeight = container.offsetHeight;
      const scrollableDistance = sectionHeight - windowHeight;

      if (scrollableDistance <= 0) return;

      // How far the section top has scrolled past the viewport top
      const scrolled = -rect.top;
      const raw = scrolled / scrollableDistance;
      targetProgress.current = Math.max(0, Math.min(1, raw));
    };

    const animate = () => {
      // Smooth interpolation — 0.08 for responsive yet cinematic feel
      currentProgress.current = lerp(
        currentProgress.current,
        targetProgress.current,
        0.08
      );

      // Snap when very close
      if (Math.abs(currentProgress.current - targetProgress.current) < 0.0001) {
        currentProgress.current = targetProgress.current;
      }

      const maxIndex = itemCount - 1;
      const activeIndex = Math.round(currentProgress.current * maxIndex);

      setState({
        progress: currentProgress.current,
        activeIndex: Math.max(0, Math.min(maxIndex, activeIndex)),
        totalItems: itemCount,
      });

      rafId.current = requestAnimationFrame(animate);
    };

    // Listen to both scroll and Lenis-driven updates
    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', updateScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, [containerRef, itemCount, lerp]);

  return state;
}
