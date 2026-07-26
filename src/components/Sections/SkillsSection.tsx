import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, X, CheckCircle2, Layers } from 'lucide-react';

interface Planet {
  name: string;
  category: string;
  level: number;
  experience: string;
  gradient: string;
  glowColor: string;
  details: string[];
}

const PLANETS: Planet[] = [
  { name: 'Python',         category: 'ai',       level: 92, experience: '3+ Years', gradient: 'from-[#F9C74F] to-[#FF8752]',    glowColor: '#F9C74F', details: ['FastAPI & Flask','PyTorch & TensorFlow ML','NLP & Audio Signal Processing'] },
  { name: 'React',          category: 'frontend', level: 95, experience: '3+ Years', gradient: 'from-[#FF6B3D] to-[#FF4D4D]',   glowColor: '#FF6B3D', details: ['React 19 Hooks & Server Components','Virtual DOM Optimization','Custom Hooks & State Management'] },
  { name: 'Tailwind',       category: 'frontend', level: 95, experience: '3+ Years', gradient: 'from-[#FF8752] to-[#FF6B3D]',   glowColor: '#FF8752', details: ['Tailwind v4 Engine','Custom Design Systems','Responsive Architecture'] },
  { name: 'Next.js',        category: 'frontend', level: 90, experience: '2+ Years', gradient: 'from-white to-[#C8C8C8]',         glowColor: '#FFFFFF', details: ['App Router & Server Actions','SSG, SSR & ISR Data Fetching','Edge Middleware'] },
  { name: 'LangChain/RAG',  category: 'ai',       level: 88, experience: '1.5 Years',gradient: 'from-[#FF6B3D] to-[#F9C74F]',  glowColor: '#FF6B3D', details: ['Agentic AI & LangGraph','ChromaDB Vector Databases','LLM Query Optimization'] },
  { name: 'TypeScript',     category: 'frontend', level: 90, experience: '2.5 Years',gradient: 'from-[#C8C8C8] to-[#8E8E8E]',   glowColor: '#C8C8C8', details: ['Strict Type Safety','Generic Constraints','SDK & Library Design'] },
  { name: 'Node',           category: 'backend',  level: 88, experience: '1+ Years', gradient: 'from-[#D9D9D9] to-[#8E8E8E]',    glowColor: '#D9D9D9', details: ['REST APIs & GraphQL','Express & Fastify','Async I/O Performance'] },
  { name: 'MongoDB',        category: 'backend',  level: 82, experience: '2 Years',  gradient: 'from-[#8E8E8E] to-[#6D6D6D]',   glowColor: '#8E8E8E', details: ['NoSQL Schema Design','Aggregation Pipelines','Mongoose ODM'] },
  { name: 'Supabase',       category: 'backend',  level: 85, experience: '1 Years',  gradient: 'from-[#D9D9D9] to-[#AAAAAA]',   glowColor: '#D9D9D9', details: ['PostgreSQL & RLS','Real-time Subscriptions','Edge Functions'] },
  { name: 'Docker',         category: 'devops',   level: 80, experience: '1 Years',gradient: 'from-[#B8B8B8] to-[#8E8E8E]',  glowColor: '#B8B8B8', details: ['Multi-Stage Containers','Docker Compose','CI/CD Integration'] },
  { name: 'AI Agent Architect', category: 'ai', level: 92, experience: '2+ Years', gradient: 'from-purple-500 to-pink-500', glowColor: '#A855F7', details: ['Multi-Agent Systems','Orchestration Frameworks (LangGraph)','Memory & State Management'] },
];

type FilterType = 'all' | 'frontend' | 'backend' | 'ai' | 'devops';

export const SkillsSection: React.FC = () => {
  const [selected, setSelected] = useState<Planet | null>(null);
  const [filter, setFilter]     = useState<FilterType>('all');

  const visible = PLANETS.filter((p) => filter === 'all' || p.category === filter);

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-4 mb-14">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest"
          style={{ background: 'rgba(249,199,79,0.08)', border: '1px solid rgba(249,199,79,0.2)', color: '#F9C74F' }}
        >
          <Globe className="w-3.5 h-3.5 animate-pulse" /> Planetary Tech Constellation
        </div>
        <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white tracking-tight">
          Orbital{' '}
          <span style={{ background: 'linear-gradient(135deg,#FF6B3D,#F9C74F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Skills Universe
          </span>
        </h2>
        <p className="text-base text-[#8E8E8E] max-w-2xl">
          Each skill is a celestial body in my tech galaxy. Hover to scan, click to inspect telemetry.
        </p>

        {/* Filter pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {(['all','frontend','backend','ai','devops'] as FilterType[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="px-4 py-1.5 rounded-full text-xs font-mono capitalize transition-all duration-300"
              style={
                filter === cat
                  ? { background: '#FF6B3D', color: '#fff', fontWeight: 700, boxShadow: '0 0 14px rgba(255,107,61,0.45)' }
                  : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#8E8E8E' }
              }
            >
              {cat === 'all' ? 'All Planets' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Planet grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
        {visible.map((planet, idx) => (
          <motion.div
            key={planet.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            onClick={() => setSelected(planet)}
            className="group relative flex flex-col items-center cursor-pointer p-4"
          >
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full border border-dashed opacity-35 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 animate-spin-slow"
                style={{ borderColor: planet.glowColor }}
              />
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${planet.gradient} flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:scale-125`}
                style={{ boxShadow: `0 0 18px ${planet.glowColor}33` }}
              >
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/15 rounded-t-full" />
                <span className="text-xs font-mono font-bold text-[#050505] z-10 drop-shadow">
                  {planet.name.slice(0, 3)}
                </span>
              </div>
            </div>
            <div className="mt-3 text-center">
              <div className="text-sm font-heading font-semibold text-white group-hover:text-[#FF8752] transition-colors">
                {planet.name}
              </div>
              <div className="text-[11px] font-mono text-[#8E8E8E] mt-0.5">{planet.experience}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="p-8 rounded-3xl max-w-lg w-full relative overflow-hidden"
              style={{
                background: '#111111',
                border: '1px solid rgba(255,107,61,0.3)',
                boxShadow: '0 0 50px rgba(255,107,61,0.2)',
              }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-white transition-colors"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-6 mb-6">
                <div className="relative w-20 h-20 flex items-center justify-center flex-shrink-0">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed animate-spin-slow" style={{ borderColor: selected.glowColor }} />
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${selected.gradient} flex items-center justify-center text-[#050505] font-bold text-sm`}>
                    {selected.name.slice(0, 3)}
                  </div>
                </div>
                <div>
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase"
                    style={{ background: 'rgba(255,107,61,0.12)', color: '#FF8752', border: '1px solid rgba(255,107,61,0.25)' }}
                  >
                    {selected.category}
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-white mt-1">{selected.name}</h3>
                  <p className="text-xs font-mono text-[#8E8E8E]">{selected.experience}</p>
                </div>
              </div>

              {/* Level bar */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-[#C8C8C8]">Orbital Mastery</span>
                  <span className="text-[#FF6B3D] font-bold">{selected.level}%</span>
                </div>
                <div className="w-full h-3 rounded-full overflow-hidden p-0.5" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${selected.level}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className={`h-full rounded-full bg-gradient-to-r ${selected.gradient}`}
                  />
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#8E8E8E] flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#FF8752]" /> Core Capabilities
                </h4>
                {selected.details.map((d, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs p-2.5 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B3D] flex-shrink-0 mt-0.5" />
                    <span className="text-[#C8C8C8]">{d}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-white/8 text-center">
                <button
                  onClick={() => setSelected(null)}
                  className="w-full py-2.5 rounded-xl text-xs font-mono font-bold text-white transition-colors"
                  style={{ background: 'rgba(255,107,61,0.1)', border: '1px solid rgba(255,107,61,0.3)' }}
                >
                  Close Telemetry Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
