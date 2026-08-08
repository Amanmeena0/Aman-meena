import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Download, ArrowDown, Cpu } from 'lucide-react';
import { HeroOrbitCanvas } from '../Space/HeroPlanet3D';
import { useNavigate } from 'react-router-dom';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* ── Full-viewport orbit canvas (layers 1–5) ── */}
      <HeroOrbitCanvas onTechClick={(id) => navigate(`/${id}`)} />

      {/* Radial vignette — keeps text readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[5]"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 50%, transparent 15%, #050505 100%)',
        }}
      />

      {/* Bottom gradient fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-56 z-[5]"
        style={{ background: 'linear-gradient(to bottom, transparent, #050505)' }}
      />

      {/* ── Text + UI layers (6–8) ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 w-full max-w-6xl mx-auto pt-28 pb-24 select-none">

        {/* Status badge */}
        <motion.div {...fadeUp(0.05)} className="mb-8">
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full"
            style={{
              background: 'rgba(255,107,61,0.08)',
              border: '1px solid rgba(255,107,61,0.25)',
              backdropFilter: 'blur(14px)',
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B3D] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6B3D]" />
            </span>
            <span className="text-[11px] font-mono text-[#FF8752] uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              Currently Building AI Products
            </span>
          </div>
        </motion.div>

        {/* "Hello, I'm" */}
        <motion.div {...fadeUp(0.15)} className="mb-1">
          <p className="font-mono text-[#8E8E8E] text-base sm:text-lg tracking-wider">
            Hello, I'm
          </p>
        </motion.div>

        {/* AMAN MEENA — cinematic focal point */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-extrabold uppercase leading-none tracking-[-0.01em] text-center glow-name w-full"
          style={{ fontSize: 'clamp(48px, 9vw, 160px)', lineHeight: 1.0, whiteSpace: 'nowrap' }}
        >
          AMAN MEENA
        </motion.h1>

        {/* Role */}
        <motion.h2
          {...fadeUp(0.35)}
          className="mt-5 font-heading font-semibold text-white"
          style={{ fontSize: 'clamp(18px, 2.6vw, 36px)' }}
        >
          Full Stack Developer &amp; AI Engineer
        </motion.h2>

        {/* Description */}
        <motion.p
          {...fadeUp(0.44)}
          className="mt-4 font-sans text-[#8E8E8E] leading-relaxed max-w-xl"
          style={{ fontSize: 'clamp(14px, 1.3vw, 17px)' }}
        >
          Building production-grade AI systems, modern web apps, and scalable software.
          Specialized in Next.js 15, RAG pipelines, Agentic AI, and high-performance
          full-stack architectures.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...fadeUp(0.53)} className="mt-8 flex flex-wrap items-center justify-center gap-4">

          {/* Primary — orange gradient */}
          <button
            id="hero-explore-btn"
            onClick={() => navigate('/projects')}
            className="group relative flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-mono text-sm font-bold text-white overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #FF5C39, #FF7A3D)',
              boxShadow: '0 0 22px rgba(255,107,61,0.35)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 36px rgba(255,107,61,0.65)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 22px rgba(255,107,61,0.35)';
            }}
          >
            <span className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <Compass className="w-4 h-4 relative z-10 group-hover:rotate-45 transition-transform" />
            <span className="relative z-10">Explore Universe</span>
          </button>

          {/* Secondary — transparent black + white border */}
          <a
            id="hero-resume-btn"
            href="https://drive.google.com/file/d/15gF3wKZ2mEMCrzhPAm1RC0uhFUc5bRuy/view"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-mono text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.14)',
              backdropFilter: 'blur(16px)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,107,61,0.45)';
              (e.currentTarget as HTMLElement).style.background  = 'rgba(255,107,61,0.08)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.14)';
              (e.currentTarget as HTMLElement).style.background  = 'rgba(255,255,255,0.03)';
            }}
          >
            <Download className="w-4 h-4 text-[#FF8752]" />
            Download Resume
          </a>
        </motion.div>

        {/* Statistics */}
        <motion.div
          {...fadeUp(0.62)}
          className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-lg"
        >
          {[
            { value: '6+',  label: 'Projects',      color: '#FF6B3D' },
            { value: '3+',  label: 'Internships',   color: '#FF8752' },
            { value: '15+', label: 'Technologies',  color: '#F9C74F' },
            { value: 'P3', label: 'Accenture Top', color: '#FFFFFF' },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center py-3.5 px-2 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <span className="text-2xl font-heading font-extrabold" style={{ color: s.color }}>
                {s.value}
              </span>
              <span className="text-[11px] font-mono text-[#8E8E8E] mt-0.5">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        onClick={() => navigate('/about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 cursor-pointer group"
      >
        <ArrowDown className="w-4 h-4 text-[#FF6B3D] animate-bounce group-hover:translate-y-1 transition-transform" />
        <span className="text-[10px] font-mono text-[#8E8E8E] uppercase tracking-widest">
          Explore More
        </span>
      </div>
    </section>
  );
};