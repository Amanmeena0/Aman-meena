import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '@/src/data/projects';
import { ProjectCard } from '../Projects/ProjectCard';
import type { Project } from '@/src/data/types';
import { isVideo, getEmbedUrl } from '@/src/lib/utils';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 bg-surface/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-serif mb-20">Selected Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard 
              key={i} 
              project={project} 
              index={i}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-bg rounded-4xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2 hover:bg-surface rounded-full transition-colors"
              >
                <X size={24} className="text-charcoal" />
              </button>

              {/* Image/Video */}
              <div className="w-full h-64 md:h-80 overflow-hidden rounded-t-4xl">
                {isVideo(selectedProject.image) ? (
                  <iframe
                    src={getEmbedUrl(selectedProject.image)}
                    className="w-full h-full border-0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={selectedProject.title}
                  />
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                <h2 className="text-3xl md:text-4xl font-serif mb-4">{selectedProject.title}</h2>

                <p className="text-charcoal/70 text-lg mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Why I built this */}
                <div className="bg-surface/50 p-6 rounded-2xl mb-8">
                  <p className="text-sm font-medium text-accent-terracotta uppercase tracking-wider mb-2">
                    Why I built this
                  </p>
                  <p className="text-charcoal/80 italic leading-relaxed">
                    {selectedProject.why}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <p className="text-sm font-medium text-accent-terracotta uppercase tracking-wider mb-3">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono uppercase tracking-widest text-charcoal/60 px-3 py-1.5 bg-surface rounded-lg border border-charcoal/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  {selectedProject.link && selectedProject.link !== "#" && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent-terracotta text-bg rounded-xl hover:bg-accent-terracotta/90 transition-colors font-medium"
                    >
                      View Project
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-bg rounded-xl hover:bg-charcoal/80 transition-colors font-medium"
                    >
                      Source Code
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
