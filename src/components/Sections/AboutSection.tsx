import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Orbit, Compass, GraduationCap, MapPin, Terminal, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'journey' | 'education' | 'station'>('journey');

  const tab = (id: typeof activeTab, label: string, Icon: React.ElementType) => {
    const active = activeTab === id;
    return (
      <button
        onClick={() => setActiveTab(id)}
        className="px-5 py-2.5 rounded-xl text-xs font-mono font-medium transition-all duration-300 flex items-center gap-2"
        style={
          active
            ? { background: 'linear-gradient(135deg,#FF6B3D,#FF8752)', color: '#fff', boxShadow: '0 0 18px rgba(255,107,61,0.3)' }
            : { color: '#8E8E8E' }
        }
      >
        <Icon className="w-4 h-4" /> {label}
      </button>
    );
  };

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest"
          style={{
            background: 'rgba(255,107,61,0.08)',
            border: '1px solid rgba(255,107,61,0.2)',
            color: '#FF8752',
          }}
        >
          <Orbit className="w-3.5 h-3.5" /> Space Station Module
        </div>
        <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white tracking-tight">
          About{' '}
          <span
            style={{
              background: 'linear-gradient(135deg,#FF6B3D,#F9C74F)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            The Command Center
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 glass-panel p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden"
        >
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: 'radial-gradient(#FF6B3D 1px,transparent 1px)', backgroundSize: '18px 18px' }}
          />

          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            {/* Floating astronaut */}
            <div className="relative w-44 h-44 flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full border border-dashed animate-spin-slow"
                style={{ borderColor: 'rgba(255,107,61,0.3)' }}
              />
              <div
                className="absolute inset-2 rounded-full border border-dashed"
                style={{ borderColor: 'rgba(249,199,79,0.3)', animation: 'orbitSpin 30s linear infinite reverse' }}
              />
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [-3, 3, -3] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-32 h-32 flex items-center justify-center rounded-full border border-white/10"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(255,107,61,0.15), rgba(249,199,79,0.08))',
                  boxShadow: '0 0 28px rgba(255,107,61,0.25)',
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20">
                  <circle cx="12" cy="10" r="5" stroke="white" />
                  <path d="M12 15c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" stroke="white" />
                  <path d="M9 10c0-1.66 1.34-3 3-3s3 1.34 3 3" stroke="#FF6B3D" />
                  <circle cx="18" cy="6" r="1.5" fill="#F9C74F" />
                  <circle cx="6"  cy="7" r="1"   fill="#FF8752" />
                </svg>
              </motion.div>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-heading font-bold text-white">Aman Meena</h3>
              <p className="text-sm font-mono text-[#FF6B3D]">Full Stack & AI Engineer</p>
              <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#8E8E8E] pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#FF4D4D]" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* HUD diagnostics */}
          <div className="mt-8 pt-6 border-t border-white/8 grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="text-[#8E8E8E]">Status</div>
              <div className="text-[#FF6B3D] font-bold flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Operational
              </div>
            </div>
            <div className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="text-[#8E8E8E]">Primary Core</div>
              <div className="text-[#F9C74F] font-bold mt-0.5">Next.js & Python AI</div>
            </div>
          </div>
        </motion.div>

        {/* Right tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col space-y-6"
        >
          <div
            className="flex items-center gap-2 p-1.5 rounded-2xl w-fit"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            {tab('journey',   'My Journey',    Compass)}
            {tab('education', 'Education',     GraduationCap)}
            {tab('station',   'Station Logs',  Terminal)}
          </div>

          <div className="glass-panel p-8 rounded-3xl flex-1 flex flex-col justify-between">
            {activeTab === 'journey' && (
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B3D]" /> Mission Narrative
                </h3>
                <p className="text-[#C8C8C8] leading-relaxed text-sm sm:text-base">
                  Full Stack Developer & AI Engineer passionate about constructing high-performance digital systems spanning React/Next.js frontends to Python/FastAPI backends and enterprise RAG architecture.
                </p>
                <p className="text-[#C8C8C8] leading-relaxed text-sm sm:text-base">
                  Having researched multimodal lie detection at DIPR (DRDO), engineered trade policy RAG systems at DGFT (Ministry of Commerce), and managed production enterprise software at Accenture (top P3 performer), I thrive at the intersection of AI innovation and production engineering.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    { t: 'Full-Stack Systems', c: '#FF6B3D', d: 'React 19, Next.js 15, TypeScript — building responsive, accessible, ultra-fast UX.' },
                    { t: 'AI & RAG Architecture', c: '#F9C74F', d: 'Agentic AI, ChromaDB, LangChain, LangGraph, and LLM-powered production applications.' },
                  ].map((x) => (
                    <div key={x.t} className="p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="text-sm font-heading font-bold" style={{ color: x.c }}>{x.t}</div>
                      <div className="text-xs text-[#8E8E8E] mt-1">{x.d}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-6">
                <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#FF8752]" /> Academic Orbit
                </h3>
                <div className="p-6 rounded-2xl space-y-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-lg font-heading font-bold text-white">B.Tech — Computer Science & Engineering</h4>
                    <span className="px-3 py-1 rounded-full text-xs font-mono" style={{ background: 'rgba(255,107,61,0.12)', color: '#FF8752', border: '1px solid rgba(255,107,61,0.25)' }}>2022 – 2026</span>
                  </div>
                  <p className="text-xs text-[#8E8E8E] leading-relaxed">
                    Data Structures, Operating Systems, Machine Learning, Deep Learning, Web Technologies, and Software Engineering.
                  </p>
                </div>
                <div className="p-6 rounded-2xl space-y-2" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <h4 className="text-base font-heading font-bold text-white flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#F9C74F]" /> Certifications
                  </h4>
                  <ul className="text-xs font-mono text-[#C8C8C8] space-y-1.5 list-disc list-inside">
                    <li>Accenture MyCompetency P3 Rating (Best Intern-Level)</li>
                    <li>Agentic AI, LangGraph & RAG System Architecture</li>
                    <li>DevOps, Azure & Containerization Certifications</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'station' && (
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-[#FF4D4D]" /> Orbital Telemetry Log
                </h3>
                <div className="p-4 rounded-2xl space-y-2 font-mono text-xs" style={{ background: '#0A0805', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="text-green-400">[01:56:50] ACCENTURE_MODULE: Ticket Resolution SLA 99.4% achieved.</div>
                  <div className="text-[#FF8752]">[01:22:14] DGFT_RAG_NODE: Scaled handler to 1K+ concurrent requests.</div>
                  <div className="text-[#F9C74F]">[00:45:00] DRDO_RESEARCH: Published multimodal lie detection paper.</div>
                  <div className="text-[#8E8E8E]">[00:12:08] SYSTEM_STATUS: All orbital systems at peak performance.</div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
