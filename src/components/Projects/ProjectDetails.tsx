import React from 'react';
import { Project } from '@/src/data/types';

interface ProjectDetailsProps {
  project: Project;
  index: number;
  total: number;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  project,
  index,
  total,
}) => {
  return (
    <div className="text-center space-y-3 px-4">
      {/* Counter */}
      <div className="font-mono text-xs tracking-widest text-[#8E8E8E]">
        <span className="text-white font-bold">{String(index + 1).padStart(2, '0')}</span>
        <span className="mx-2">/</span>
        <span>{String(total).padStart(2, '0')}</span>
      </div>

      {/* Progress dots */}
      <div className="flex items-center justify-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-500"
            style={{
              width: i === index ? '24px' : '6px',
              height: '6px',
              background: i === index
                ? 'linear-gradient(135deg,#FF5C39,#FF7A3D)'
                : 'rgba(255,255,255,0.12)',
            }}
          />
        ))}
      </div>
    </div>
  );
};
