import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Project } from '@/src/data/types';

interface ProjectCarouselProps {
  projects: Project[];
  progress: number; // 0 to 1
  activeIndex: number;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  projects,
  progress,
  activeIndex,
}) => {
  const maxIndex = projects.length - 1;
  // Continuous float index for smooth interpolation
  const floatIndex = progress * maxIndex;

  return (
    <div className="relative w-full h-full min-h-[350px] max-h-[700px] flex items-center justify-center overflow-hidden">
      {projects.map((project, i) => {
        // Offset from the current continuous position
        const offset = i - floatIndex;

        return (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            isActive={i === activeIndex}
            offset={offset}
          />
        );
      })}
    </div>
  );
};
