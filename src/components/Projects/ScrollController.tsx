import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface ScrollControllerProps {
  children: React.ReactNode;
}

/**
 * Wraps the app (or a section) with Lenis smooth scrolling.
 * Handles the rAF loop and cleanup.
 */
export const ScrollController: React.FC<ScrollControllerProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
