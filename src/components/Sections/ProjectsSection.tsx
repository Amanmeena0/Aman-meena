import { PROJECTS } from '@/src/data/projects';
import { ProjectCard } from '../Projects/ProjectCard';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 bg-surface/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-serif mb-20">Selected Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
