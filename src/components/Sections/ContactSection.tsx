import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github, FileText, CheckCircle2, Radio, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formData, setFormData]     = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSub]    = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const earthRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = earthRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;
    let w = (canvas.width  = canvas.parentElement?.clientWidth  || 400);
    let h = (canvas.height = canvas.parentElement?.clientHeight || 400);
    let rotation = 0;

    const render = () => {
      rotation += 0.004;
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      const r  = Math.min(w, h) * 0.38;

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
        const lat  = (i % 20) * (Math.PI / 10) - Math.PI / 2;
        const lon  = (Math.floor(i / 20) * (Math.PI / 5) + rotation) % (Math.PI * 2);
        const x    = cx + r * Math.cos(lat) * Math.sin(lon);
        const y    = cy + r * Math.sin(lat);
        const z    = Math.cos(lat) * Math.cos(lon);
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
      w = canvas.width  = canvas.parentElement.clientWidth;
      h = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', onResize); };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setIsSub(true);
    setTimeout(() => {
      setIsSub(false); setSubmitted(true);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#FF6B3D', '#FF8752', '#F9C74F'] });
    }, 1200);
  };

  const socialLinks = [
    { icon: Mail,     label: 'Direct Email',     sub: 'amanmeena00@gmail.com',         href: 'mailto:amanmeena00@gmail.com',                             accent: '#FF6B3D' },
    { icon: Github,   label: 'GitHub Code Vault', sub: 'github.com/Amanmeena0',          href: 'https://github.com/Amanmeena0',                           accent: '#FF8752' },
    { icon: Linkedin, label: 'LinkedIn Satellite',sub: 'Aman Meena',                    href: 'https://linkedin.com/in/ananay-meena',                     accent: '#F9C74F' },
    { icon: FileText, label: 'Curriculum Vitae',  sub: 'Download Resume PDF',            href: 'https://drive.google.com/file/d/1YK33pcxcN4ACycCYLdcpeQR_kL0IGkv8/view?usp=sharing', accent: '#C8C8C8' },
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
        <p className="text-base text-[#8E8E8E] max-w-2xl">
          Transmit your signal to my deep space relay array. Let's collaborate on groundbreaking software or AI engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left: Earth + socials */}
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="lg:col-span-5 glass-panel p-8 rounded-3xl flex flex-col justify-between h-full relative overflow-hidden min-h-[480px]"
        >
          <div className="absolute inset-0 w-full h-full opacity-50 pointer-events-none flex items-center justify-center">
            <canvas ref={earthRef} className="w-full h-full" />
          </div>

          <div className="relative z-10 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#FF6B3D] uppercase tracking-widest">Orbiting Telemetry</span>
              <h3 className="text-2xl font-heading font-bold text-white">Deep Space Communications</h3>
              <p className="text-xs sm:text-sm text-[#C8C8C8] leading-relaxed">
                Earth base station online. Send a direct transmission or connect across planetary channels.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              {socialLinks.map(({ icon: Icon, label, sub, href, accent }) => (
                <a
                  key={label}
                  href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl transition-all group"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${accent}44`; (e.currentTarget as HTMLElement).style.background = `${accent}0A`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ background: `${accent}18`, color: accent }}>
                    <Icon className="w-5 h-5" />
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

        {/* Right: Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 p-8 sm:p-10 rounded-3xl"
          style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 0 50px rgba(0,0,0,0.6)' }}
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center animate-pulse" style={{ background: 'rgba(255,107,61,0.12)', border: '2px solid #FF6B3D' }}>
                <CheckCircle2 className="w-8 h-8 text-[#FF6B3D]" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">Transmission Dispatched!</h3>
              <p className="text-sm text-[#8E8E8E] max-w-md">Your message has been encoded and transmitted. I will respond shortly.</p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                className="mt-4 px-6 py-2.5 rounded-xl text-xs font-mono text-white transition-colors"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                Send Another Signal
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/8 pb-4">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">Transmit Message Signal</h3>
                  <p className="text-xs font-mono text-[#8E8E8E]">Fill out transmission parameters below</p>
                </div>
                <Sparkles className="w-5 h-5 text-[#FF6B3D]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: 'Explorer Name', key: 'name', type: 'text', placeholder: 'Enter your name' },
                  { label: 'Return Signal Email', key: 'email', type: 'email', placeholder: 'name@domain.com' },
                ].map(({ label, key, type, placeholder }) => (
                  <div key={key} className="space-y-2">
                    <label className="text-xs font-mono text-[#8E8E8E] uppercase">{label}</label>
                    <input
                      type={type} required
                      value={(formData as any)[key]}
                      onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-[#555] outline-none transition-all"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'inherit' }}
                      onFocus={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(255,107,61,0.5)'; }}
                      onBlur={(e)  => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-[#8E8E8E] uppercase">Transmission Content</label>
                <textarea
                  required rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, mission proposal, or inquiry..."
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-[#555] outline-none transition-all resize-none"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'inherit' }}
                  onFocus={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(255,107,61,0.5)'; }}
                  onBlur={(e)  => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}
                />
              </div>

              <button
                type="submit" disabled={isSubmitting}
                className="w-full py-4 rounded-2xl font-mono text-sm font-bold text-white flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 transition-all"
                style={{ background: 'linear-gradient(135deg,#FF5C39,#FF7A3D,#F9C74F)', boxShadow: '0 0 28px rgba(255,107,61,0.35)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(255,107,61,0.65)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 28px rgba(255,107,61,0.35)'; }}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    Transmitting Across Cosmos...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Send Deep Space Transmission
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
