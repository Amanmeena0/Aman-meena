import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/src/data/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-bg rounded-4xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-charcoal/5"
    >
      <div className="aspect-4/3 rounded-3xl overflow-hidden mb-6 relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4">
          <div className="glass p-2 rounded-full text-charcoal">
            <ExternalLink size={18} />
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-serif mb-3">{project.title}</h3>
      <p className="text-charcoal/60 text-sm mb-4 leading-relaxed">
        {project.description}
      </p>
      <div className="bg-surface/50 p-4 rounded-2xl mb-6">
        <p className="text-xs font-medium text-accent-terracotta uppercase tracking-wider mb-1">Why I built this</p>
        <p className="text-sm text-charcoal/80 italic">{project.why}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="text-[10px] font-mono uppercase tracking-widest text-charcoal/40 px-2 py-1 bg-surface rounded-md">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
