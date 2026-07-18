import { FloatingNav } from "@/src/components/Navigation/FloatingNav";
import { HeroSection } from "@/src/components/Sections/HeroSection";
import { AboutSection } from "@/src/components/Sections/AboutSection";
import { InternshipsSection } from "@/src/components/Sections/InternshipsSection";
import { ProjectsSection } from "@/src/components/Sections/ProjectsSection";
import { ContactSection } from "@/src/components/Sections/ContactSection";
import { Footer } from "@/src/components/Sections/Footer";
import { SkillsSection } from "@/src/components/Sections/SkillsSection";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent-terracotta/20">
      <div className="noise-overlay" />
      <FloatingNav />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <InternshipsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <Analytics />
    </div>
  );
}
