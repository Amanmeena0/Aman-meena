import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Building, Calendar, CheckCircle2, Star } from 'lucide-react';
import { INTERNSHIPS } from '../../data/internships';

export const ExperienceSection: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const active = INTERNSHIPS.find((i) => i.id === activeId) || INTERNSHIPS[0];

  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest"
          style={{ background: 'rgba(249,199,79,0.08)', border: '1px solid rgba(249,199,79,0.2)', color: '#F9C74F' }}
        >
          <Compass className="w-3.5 h-3.5" /> Space Flight Trajectory
        </div>
        <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white tracking-tight">
          Journey Through{' '}
          <span style={{ background: 'linear-gradient(135deg,#FF6B3D,#F9C74F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Space &amp; Time
          </span>
        </h2>
        <p className="text-base text-[#8E8E8E] max-w-2xl">
          Every milestone is a unique planetary destination. Select a planet to review key mission accomplishments.
        </p>
      </div>

      {/* Planetary waypoints */}
      <div className="relative mb-16">
        <div
          className="absolute top-1/2 left-4 right-4 h-px -translate-y-1/2 hidden md:block"
          style={{ background: 'linear-gradient(to right, #FF6B3D44, #F9C74F44, #FF6B3D44)' }}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {INTERNSHIPS.map((item, idx) => {
            const isSelected = activeId === item.id;
            return (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.03 }}
                onClick={() => setActiveId(item.id)}
                className="p-6 rounded-3xl cursor-pointer transition-all duration-500 relative flex flex-col items-center text-center"
                style={
                  isSelected
                    ? { background: 'rgba(255,107,61,0.1)', border: '1px solid rgba(255,107,61,0.4)', boxShadow: '0 0 35px rgba(255,107,61,0.2)' }
                    : { background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }
                }
              >
                {/* Planet node */}
                <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-full border-2 border-dashed transition-all duration-500"
                    style={{
                      borderColor: '#FF6B3D',
                      opacity: isSelected ? 1 : 0.35,
                      animation: isSelected ? 'orbitSpin 8s linear infinite' : 'none',
                    }}
                  />
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-300"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, #FF8752, #050505)`,
                      transform: isSelected ? 'scale(1.1)' : 'scale(1)',
                    }}
                  >
                    0{idx + 1}
                  </div>
                </div>
                <div className="text-xs font-mono uppercase mb-1" style={{ color: '#FF6B3D' }}>{item.company}</div>
                <h3 className="text-base font-heading font-bold text-white mb-2 line-clamp-1">{item.title}</h3>
                <div className="text-xs font-mono text-[#8E8E8E]">{item.period}</div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Active mission report */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="p-8 sm:p-10 rounded-3xl"
          style={{
            background: '#0D0D0D',
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: '0 0 50px rgba(0,0,0,0.6)',
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/8 mb-8">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <Building className="w-5 h-5 text-[#FF6B3D]" />
                <span className="text-xl sm:text-2xl font-heading font-bold text-white">{active.company}</span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-mono"
                  style={{ background: 'rgba(255,107,61,0.1)', color: '#FF8752', border: '1px solid rgba(255,107,61,0.25)' }}
                >
                  {active.duration}
                </span>
              </div>
              <h3 className="text-lg font-heading text-[#C8C8C8] font-semibold">{active.title}</h3>
            </div>
            <div
              className="flex items-center gap-2 text-xs font-mono text-[#8E8E8E] px-4 py-2 rounded-xl w-fit"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <Calendar className="w-4 h-4 text-[#F9C74F]" />
              <span>{active.period}</span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-mono uppercase text-[#8E8E8E] tracking-wider mb-2">Mission Overview</h4>
              <p className="text-sm sm:text-base text-[#C8C8C8] leading-relaxed">{active.detailedDescription}</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase text-[#8E8E8E] tracking-wider flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-[#F9C74F]" /> Key Milestones
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {active.achievements.map((a, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-2xl"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B3D] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#C8C8C8] leading-relaxed">{a}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-xs font-mono uppercase text-[#8E8E8E] tracking-wider mb-3">Technologies Deployed</h4>
              <div className="flex flex-wrap gap-2">
                {active.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-lg text-xs font-mono text-white"
                    style={{ background: 'rgba(249,199,79,0.08)', border: '1px solid rgba(249,199,79,0.2)' }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
