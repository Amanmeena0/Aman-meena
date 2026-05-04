import { INTERNSHIPS } from '@/src/data/internships';
import { InternshipCard } from '../Internship/InternshipCard';

export function InternshipsSection() {
  return (
    <section id="work" className="py-32 bg-surface/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-charcoal mb-4">
              Internships
            </h2>
            <p className="text-charcoal/60 font-mono text-sm">
              Hands-on experience building solutions that matter
            </p>
          </div>
          <div className="text-charcoal/40 font-mono text-sm whitespace-nowrap">
            {String(INTERNSHIPS.length).padStart(2, '0')} / {String(INTERNSHIPS.length).padStart(2, '0')}
          </div>
        </div>

        {/* Internship Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTERNSHIPS.map((internship, index) => (
            <InternshipCard
              key={internship.id}
              internship={internship}
              index={index}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 bg-white rounded-2xl border border-charcoal/5">
            <p className="text-2xl md:text-3xl font-serif text-charcoal mb-2">{INTERNSHIPS.length}</p>
            <p className="text-xs font-mono uppercase tracking-widest text-charcoal/60">Internships</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-charcoal/5">
            <p className="text-2xl md:text-3xl font-serif text-charcoal mb-2">15+</p>
            <p className="text-xs font-mono uppercase tracking-widest text-charcoal/60">Months Experience</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-charcoal/5">
            <p className="text-2xl md:text-3xl font-serif text-charcoal mb-2">30+</p>
            <p className="text-xs font-mono uppercase tracking-widest text-charcoal/60">Technologies</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-charcoal/5">
            <p className="text-2xl md:text-3xl font-serif text-charcoal mb-2">100%</p>
            <p className="text-xs font-mono uppercase tracking-widest text-charcoal/60">Commitment</p>
          </div>
        </div>
      </div>
    </section>
  );
}
