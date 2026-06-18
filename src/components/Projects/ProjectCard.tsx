import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/src/data/types';
import { isVideo, getEmbedUrl } from '@/src/lib/utils';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const isVideoContent = isVideo(project.image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className="group bg-bg rounded-4xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-charcoal/5 cursor-pointer"
    >
      <div className="aspect-4/3 rounded-3xl overflow-hidden mb-6 relative">
        {isVideoContent ? (
          <div className="w-full h-full relative">
            <iframe
              src={getEmbedUrl(project.image)}
              className="w-full h-full object-cover border-0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={project.title}
            />
            <div className="absolute inset-0 z-10" />
          </div>
        ) : (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        )}
        {!isVideoContent && (
          <div className="absolute top-4 right-4">
            <div className="glass p-2 rounded-full text-charcoal">
              <ExternalLink size={18} />
            </div>
          </div>
        )}
      </div>
      <h3 className="text-2xl font-serif text-center">{project.title}</h3>
    </motion.div>
  );
}
