import { useState } from 'react';
import { motion } from 'motion/react';
import { Experience } from '@/src/data/types';

interface ExperienceRowProps {
  exp: Experience;
}

export function ExperienceRow({ exp }: ExperienceRowProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      className="relative border-b border-charcoal/10 py-12 group cursor-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl md:text-4xl font-serif text-charcoal/40 group-hover:text-charcoal transition-colors duration-500">
            {exp.role}
          </h3>
          <p className="text-lg text-charcoal/60 mt-2">{exp.company}</p>
        </div>
        <span className="text-sm font-mono text-charcoal/40 uppercase tracking-widest">
          {exp.period}
        </span>
      </div>

      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed pointer-events-none z-40 w-64 h-48 rounded-2xl overflow-hidden shadow-2xl"
          style={{ 
            left: mousePos.x + 20, 
            top: mousePos.y - 100,
          }}
        >
          <img 
            src={exp.image} 
            alt={exp.company} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-accent-sage/20 mix-blend-multiply" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/60 to-transparent">
            <p className="text-white text-xs leading-relaxed">
              {exp.description}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
