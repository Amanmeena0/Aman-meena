import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Radio } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const earthRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = earthRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;
    let w = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let h = (canvas.height = canvas.parentElement?.clientHeight || 400);
    let rotation = 0;

    const render = () => {
      rotation += 0.004;
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      const r = Math.min(w, h) * 0.42;

      // Warm orange atmosphere glow
      const atm = ctx.createRadialGradient(cx, cy, r * 0.9, cx, cy, r * 1.35);
      atm.addColorStop(0, 'rgba(255,107,61,0.35)');
      atm.addColorStop(0.5, 'rgba(249,199,79,0.12)');
      atm.addColorStop(1, 'transparent');
      ctx.fillStyle = atm;
      ctx.beginPath(); ctx.arc(cx, cy, r * 1.35, 0, Math.PI * 2); ctx.fill();

      // Dark sphere
      const sphere = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, 10, cx, cy, r);
      sphere.addColorStop(0, '#1A0D05');
      sphere.addColorStop(0.6, '#0D0603');
      sphere.addColorStop(1, '#050301');
      ctx.fillStyle = sphere;
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();

      // Surface data points
      ctx.save();
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.clip();
      ctx.fillStyle = 'rgba(255,107,61,0.55)';
      for (let i = 0; i < 200; i++) {
        const lat = (i % 20) * (Math.PI / 10) - Math.PI / 2;
        const lon = (Math.floor(i / 20) * (Math.PI / 5) + rotation) % (Math.PI * 2);
        const x = cx + r * Math.cos(lat) * Math.sin(lon);
        const y = cy + r * Math.sin(lat);
        const z = Math.cos(lat) * Math.cos(lon);
        if (z > 0) { ctx.beginPath(); ctx.arc(x, y, Math.max(1, z * 2.5), 0, Math.PI * 2); ctx.fill(); }
      }
      ctx.restore();

      // Border ring
      ctx.strokeStyle = 'rgba(255,107,61,0.18)';
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();

      rafId = requestAnimationFrame(render);
    };
    render();

    const onResize = () => {
      if (!canvas || !canvas.parentElement) return;
      w = canvas.width = canvas.parentElement.clientWidth;
      h = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', onResize); };
  }, []);

  const socialLinks = [
    { icon: Mail, label: 'Direct Email', sub: 'meenaaman581@gmail.com', href: 'mailto:meenaaman581@gmail.com', accent: '#FF6B3D' },
    { icon: Github, label: 'GitHub Code Vault', sub: 'Amanmeena0', href: 'https://github.com/Amanmeena0', accent: '#FF8752' },
    { icon: Linkedin, label: 'LinkedIn Satellite', sub: 'Aman Meena', href: 'https://www.linkedin.com/in/aman-meena-11326a395/', accent: '#F9C74F' },
  ];

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest"
          style={{ background: 'rgba(255,107,61,0.08)', border: '1px solid rgba(255,107,61,0.2)', color: '#FF8752' }}
        >
          <Radio className="w-3.5 h-3.5 animate-pulse text-[#FF4D4D]" /> Final Station Destination
        </div>
        <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white tracking-tight">
          Establish{' '}
          <span style={{ background: 'linear-gradient(135deg,#FF6B3D,#F9C74F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Space Telemetry Link
          </span>
        </h2>
      </div>

      {/* Full-width Deep Space Communications card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden min-h-[380px] flex flex-col justify-between"
      >
        {/* Planet illustration — centered behind content */}
        <div className="absolute inset-0 w-full h-full opacity-50 pointer-events-none flex items-center justify-center">
          <canvas ref={earthRef} className="w-full h-full" />
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-10">
          {/* Card heading */}
          <div className="mb-17 space-y-2">
            <span className="text-xs font-mono text-[#FF6B3D] uppercase tracking-widest">Orbiting Telemetry</span>
            <h3 className="text-2xl font-heading font-bold text-white">Deep Space Communications</h3>
          </div>

          {/* Contact cards grid: 3-col desktop, 2-col tablet, 1-col mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {socialLinks.map(({ icon: Icon, label, sub, href, accent }) => (
              <a
                key={label}
                href={href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 rounded-2xl transition-all group"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${accent}44`; (e.currentTarget as HTMLElement).style.background = `${accent}0A`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0" style={{ background: `${accent}18`, color: accent }}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#8E8E8E]">{label}</div>
                  <div className="text-sm font-heading font-semibold text-white">{sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
