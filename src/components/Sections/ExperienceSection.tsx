import { EXPERIENCES } from '@/src/data/experiences';
import { ExperienceRow } from '../Experience/ExperienceRow';

export function ExperienceSection() {
  return (
    <section id="work" className="py-32">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-4xl md:text-6xl font-serif">Experience</h2>
          <p className="text-charcoal/40 font-mono text-sm hidden md:block">01 / 03</p>
        </div>
        <div className="flex flex-col">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceRow key={i} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
