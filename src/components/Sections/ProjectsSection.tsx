import React, { useRef } from 'react';
import { PROJECTS } from '../../data/projects';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { ProjectCarousel } from '../Projects/ProjectCarousel';
import { ProjectDetails } from '../Projects/ProjectDetails';

export const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { progress, activeIndex } = useSmoothScroll(sectionRef, PROJECTS.length);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative z-10"
      style={{
        // Each project gets ~100vh of scroll distance
        height: `${PROJECTS.length * 100}vh`,
      }}
    >
      {/* Sticky viewport — stays fixed while user scrolls through the tall section */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-start overflow-hidden pt-24 sm:pt-32 pb-10 px-4">

        {/* Carousel wrapper to ensure it fits and shrinks if needed */}
        <div className="flex-1 w-full flex items-center justify-center min-h-0 relative">
          <ProjectCarousel
            projects={PROJECTS}
            progress={progress}
            activeIndex={activeIndex}
          />
        </div>

        {/* Details / progress indicator */}
        <div className="mt-6 md:mt-8 flex-shrink-0">
          <ProjectDetails
            project={PROJECTS[activeIndex]}
            index={activeIndex}
            total={PROJECTS.length}
          />
        </div>

        {/* Scroll hint */}
        {progress < 0.05 && (
          <div
            className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-700 pointer-events-none"
            style={{ opacity: 1 - progress * 20 }}
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8E8E8E]">
              Scroll to explore
            </span>
            <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-[#FF6B3D]/40 to-transparent" />
          </div>
        )}
      </div>
    </section>
  );
};
