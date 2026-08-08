import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/src/data/types';

interface ProjectCardProps {
  project: Project;
  index: number;
  isActive: boolean;
  offset: number; // -1 = left, 0 = center, 1 = right, fractional for in-between
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isActive,
  offset,
}) => {
  const [imgError, setImgError] = useState(false);

  // Compute transform values based on offset from center
  const absOffset = Math.abs(offset);
  const scale = isActive ? 1 : Math.max(0.72, 1 - absOffset * 0.14);
  const opacity = isActive ? 1 : Math.max(0.3, 1 - absOffset * 0.35);
  const blur = isActive ? 0 : Math.min(4, absOffset * 2);

  // Horizontal translation in vw units for viewport-relative spacing
  const translateXvw = offset * 90;

  return (
    <div
      className="absolute top-1/2 left-1/2 w-[85vw] max-w-[720px] will-change-transform"
      style={{
        transform: `translate(-50%, -50%) translateX(${translateXvw}vw) scale(${scale})`,
        opacity,
        filter: blur > 0 ? `blur(${blur}px)` : 'none',
        zIndex: isActive ? 10 : 5 - Math.floor(absOffset),
        pointerEvents: isActive ? 'auto' : 'none',
      }}
    >
      <div className="rounded-2xl overflow-hidden" style={{
        background: '#0D0D0D',
        border: `1px solid ${isActive ? 'rgba(255,107,61,0.2)' : 'rgba(255,255,255,0.06)'}`,
      }}>
        {/* Project Image */}
        <div className="relative aspect-[1200/630] overflow-hidden bg-[#111]">
          {imgError ? (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #0D0D0D 0%, #1a1a2e 50%, #16213e 100%)',
              }}
            >
              <span className="text-6xl font-heading font-bold text-white/10">
                {project.title.charAt(0)}
              </span>
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          )}
          {/* Subtle bottom gradient for text readability */}
          <div
            className="absolute inset-x-0 bottom-0 h-24"
            style={{
              background: 'linear-gradient(to top, #0D0D0D, transparent)',
            }}
          />
        </div>

        {/* Project Info */}
        <div className="px-8 py-7 space-y-5">
          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-tight">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#8E8E8E] leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-[11px] font-mono"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#C8C8C8',
                }}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 5 && (
              <span className="px-2 py-1 text-[11px] font-mono text-[#8E8E8E]">
                +{project.tags.length - 5}
              </span>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06]">
            {project.link && (
              <a
                href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-white flex items-center gap-2"
                style={{
                  background: 'linear-gradient(135deg,#FF5C39,#FF7A3D)',
                }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                View Project
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-white flex items-center gap-2 hover:bg-white/[0.08] transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
