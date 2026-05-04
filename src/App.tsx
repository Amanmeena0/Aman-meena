import { FloatingNav } from "@/src/components/Navigation/FloatingNav";
import { HeroSection } from "@/src/components/Sections/HeroSection";
import { AboutSection } from "@/src/components/Sections/AboutSection";
import { ExperienceSection } from "@/src/components/Sections/ExperienceSection";
import { ProjectsSection } from "@/src/components/Sections/ProjectsSection";
import { ContactSection } from "@/src/components/Sections/ContactSection";
import { Footer } from "@/src/components/Sections/Footer";
export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent-terracotta/20">
      <div className="noise-overlay" />
      <FloatingNav />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
