import React from 'react';
import { SpaceBackground } from '@/src/components/Space/SpaceBackground';
import { SpaceCursor } from '@/src/components/Space/SpaceCursor';
import { FloatingNav } from '@/src/components/Navigation/FloatingNav';
import { HeroSection } from '@/src/components/Sections/HeroSection';
import { AboutSection } from '@/src/components/Sections/AboutSection';
import { SkillsSection } from '@/src/components/Sections/SkillsSection';
import { ProjectsSection } from '@/src/components/Sections/ProjectsSection';
import { ExperienceSection } from '@/src/components/Sections/ExperienceSection';
import { ContactSection } from '@/src/components/Sections/ContactSection';
import { Footer } from '@/src/components/Sections/Footer';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050816] text-white selection:bg-[#5B8CFF]/30 selection:text-white overflow-x-hidden font-sans">
      {/* Sci-Fi Ambient Noise Overlay */}
      <div className="space-noise" />

      {/* Dynamic Animated Canvas Space Background */}
      <SpaceBackground />

      {/* Interactive Glowing Space Cursor */}
      <SpaceCursor />

      {/* Glass Floating Navigation */}
      <FloatingNav />

      {/* Main Portfolio Sections */}
      <main className="relative z-10 space-y-12">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Deep Space Footer */}
      <Footer />

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}
