import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { LenisContext } from '@/src/hooks/useLenis';
import { SpaceBackground } from '@/src/components/Space/SpaceBackground';
import { SpaceCursor } from '@/src/components/Space/SpaceCursor';
import { FloatingNav } from '@/src/components/Navigation/FloatingNav';
import { HeroSection } from '@/src/components/Sections/HeroSection';
import { AboutSection } from '@/src/components/Sections/AboutSection';
import { SkillsSection } from '@/src/components/Sections/SkillsSection';
import { ProjectsSection } from '@/src/components/Sections/ProjectsSection';
import { ExperienceSection } from '@/src/components/Sections/ExperienceSection';
import { ContactSection } from '@/src/components/Sections/ContactSection';
import { Analytics } from '@vercel/analytics/react';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const AppContent = () => {
  const location = useLocation();

  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* Sci-Fi Ambient Noise Overlay */}
      <div className="space-noise" />

      {/* Dynamic Animated Canvas Space Background */}
      <SpaceBackground />

      {/* Interactive Glowing Space Cursor */}
      <SpaceCursor />

      {/* Glass Floating Navigation */}
      <FloatingNav />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/experience" element={<ExperienceSection />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </main>

      {/* Vercel Analytics */}
      <Analytics />
    </>
  );
};

export default function App() {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
    });

    setLenis(instance);

    let rafId: number;
    const raf = (time: number) => {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      instance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      <div className="relative min-h-screen bg-[#050816] text-white selection:bg-[#5B8CFF]/30 selection:text-white overflow-x-clip font-sans">
        <Router>
          <AppContent />
        </Router>
      </div>
    </LenisContext.Provider>
  );
}
