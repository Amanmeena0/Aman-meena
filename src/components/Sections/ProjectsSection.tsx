import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, ExternalLink, Github, X, Eye, Terminal, Cpu } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import { Project } from '../../data/types';

export const ProjectsSection: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [category, setCategory] = useState('All');

  const cats = ['All', 'Full Stack', 'AI & ML', 'Open Source'];
  const visible = PROJECTS.filter((p) => {
    if (category === 'All') return true;
    if (category === 'Full Stack')  return p.tags.includes('React.js') || p.tags.includes('Next.js') || p.tags.includes('Supabase');
    if (category === 'AI & ML')     return p.tags.includes('Python') || p.tags.includes('PyTorch') || p.tags.includes('LLM') || p.tags.includes('NLP');
    if (category === 'Open Source') return p.tags.includes('GitHub API') || p.tags.includes('GitHub Actions');
    return true;
  });

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-4 mb-14">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest"
          style={{ background: 'rgba(255,107,61,0.08)', border: '1px solid rgba(255,107,61,0.2)', color: '#FF8752' }}
        >
          <Rocket className="w-3.5 h-3.5 animate-bounce" /> Spacecraft Hangar
        </div>
        <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white tracking-tight">
          Futuristic{' '}
          <span style={{ background: 'linear-gradient(135deg,#FF6B3D,#F9C74F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Project Spacecrafts
          </span>
        </h2> 

        {/* Category filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className="px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-300"
              style={
                category === c
                  ? { background: 'linear-gradient(135deg,#FF6B3D,#FF8752)', color: '#fff', fontWeight: 700, boxShadow: '0 0 14px rgba(255,107,61,0.4)' }
                  : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#8E8E8E' }
              }
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visible.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            onClick={() => setSelected(p)}
            className="hologram-card glass-panel rounded-3xl p-6 cursor-pointer flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 relative group"
            style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF6B3D] animate-ping" />
                <span className="text-[10px] font-mono text-[#FF8752] uppercase tracking-wider">Craft 0{i+1}</span>
              </div>
              <span
                className="text-[10px] font-mono px-2.5 py-0.5 rounded-full"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: '#8E8E8E' }}
              >
                ACTIVE
              </span>
            </div>

            <div className="space-y-3 mb-6">
              <h3 className="text-xl font-heading font-bold text-white group-hover:text-[#FF8752] transition-colors leading-snug">
                {p.title}
              </h3>
              <p className="text-xs text-[#8E8E8E] line-clamp-3 leading-relaxed">{p.description}</p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {p.tags.slice(0, 4).map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-[10px] font-mono" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: '#C8C8C8' }}>
                    {t}
                  </span>
                ))}
                {p.tags.length > 4 && <span className="px-2 py-1 text-[10px] font-mono text-[#8E8E8E]">+{p.tags.length - 4}</span>}
              </div>
              <div className="pt-3 border-t border-white/8 flex items-center justify-between text-xs font-mono text-[#FF6B3D] group-hover:text-[#FF8752] transition-colors">
                <span className="flex items-center gap-1.5"><Eye className="w-3.5 h-3.5" /> Initialize Hologram</span>
                <span className="group-hover:translate-x-1 transition-transform">➜</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/88 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="p-6 sm:p-8 rounded-3xl max-w-3xl w-full relative my-8"
              style={{
                background: '#0D0D0D',
                border: '1px solid rgba(255,107,61,0.3)',
                boxShadow: '0 0 60px rgba(255,107,61,0.2)',
              }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-white z-20"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-3" style={{ color: '#FF8752' }}>
                <Cpu className="w-4 h-4" /> Hologram Telemetry View
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">{selected.title}</h3>

              {/* Why */}
              <div className="p-4 rounded-2xl mb-6" style={{ background: 'rgba(255,107,61,0.08)', border: '1px solid rgba(255,107,61,0.2)' }}>
                <div className="text-xs font-mono font-bold mb-1 flex items-center gap-1.5" style={{ color: '#FF8752' }}>
                  <Terminal className="w-3.5 h-3.5" /> Mission Rationale
                </div>
                <p className="text-xs sm:text-sm text-[#C8C8C8] leading-relaxed">{selected.why}</p>
              </div>

              <p className="text-sm text-[#C8C8C8] leading-relaxed mb-6">{selected.description}</p>

              <div className="mb-8">
                <div className="text-xs font-mono uppercase text-[#8E8E8E] tracking-wider mb-2">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {selected.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono text-white" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,107,61,0.2)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/8">
                {selected.link && (
                  <a
                    href={selected.link.startsWith('http') ? selected.link : `https://${selected.link}`}
                    target="_blank" rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl font-mono text-xs font-bold text-white flex items-center gap-2 transition-all"
                    style={{ background: 'linear-gradient(135deg,#FF5C39,#FF7A3D)', boxShadow: '0 0 18px rgba(255,107,61,0.35)' }}
                  >
                    <ExternalLink className="w-4 h-4" /> Launch Live Demo
                  </a>
                )}
                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank" rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl font-mono text-xs font-bold text-white flex items-center gap-2 transition-all hover:bg-white/10"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)' }}
                  >
                    <Github className="w-4 h-4" /> GitHub Repository
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
