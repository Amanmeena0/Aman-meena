import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, FileText, Menu, X } from 'lucide-react';

export const FloatingNav: React.FC = () => {
  const [scrolled, setScrolled]       = useState(false);
  const [activeSection, setActive]    = useState('home');
  const [mobileOpen, setMobileOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ['home','about','skills','projects','experience','contact'];
      const pos = window.scrollY + 200;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActive(s); break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { name: 'Home',       href: '#home' },
    { name: 'About',      href: '#about' },
    { name: 'Skills',     href: '#skills' },
    { name: 'Projects',   href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact',    href: '#contact' },
  ];

  const goTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <nav
        className="w-full max-w-6xl rounded-2xl transition-all duration-500 px-6 py-3.5 flex items-center justify-between"
        style={
          scrolled
            ? {
                background: 'rgba(14,14,14,0.82)',
                backdropFilter: 'blur(22px)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 10px 35px rgba(0,0,0,0.7)',
              }
            : {
                background: 'rgba(255,255,255,0.025)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.06)',
              }
        }
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => goTo(e, '#home')}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div
            className="w-9 h-9 rounded-xl p-[1px] transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #FF6B3D, #F9C74F)',
              boxShadow: '0 0 18px rgba(255,107,61,0.35)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 28px rgba(255,107,61,0.7)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 18px rgba(255,107,61,0.35)';
            }}
          >
            <div className="w-full h-full bg-[#050505] rounded-[11px] flex items-center justify-center">
              <Cpu className="w-4 h-4 text-[#FF6B3D] group-hover:rotate-45 transition-transform duration-500" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-base tracking-wider text-white flex items-center gap-1">
              AMAN<span className="text-[#FF6B3D]">.OS</span>
            </span>
            <span className="text-[10px] font-mono text-[#8E8E8E] -mt-1 tracking-widest uppercase">
              Digital Universe
            </span>
          </div>
        </a>

        {/* Desktop nav pills */}
        <ul
          className="hidden md:flex items-center gap-1 rounded-full px-4 py-1.5"
          style={{
            background: 'rgba(255,255,255,0.035)',
            border: '1px solid rgba(255,255,255,0.07)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => goTo(e, item.href)}
                  className="relative px-4 py-1.5 text-xs font-mono font-medium rounded-full transition-all duration-300 block"
                  style={{ color: isActive ? '#FFFFFF' : '#8E8E8E' }}
                  onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = '#C8C8C8'; }}
                  onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = '#8E8E8E'; }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,107,61,0.25), rgba(249,199,79,0.15))',
                        border: '1px solid rgba(255,107,61,0.35)',
                        boxShadow: '0 0 14px rgba(255,107,61,0.25)',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Resume button — gradient outline */}
        <div className="hidden md:flex">
          <a
            href="https://drive.google.com/file/d/15gF3wKZ2mEMCrzhPAm1RC0uhFUc5bRuy/view"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center p-[1px] rounded-xl overflow-hidden transition-all duration-300"
            style={{ boxShadow: '0 0 0 0 rgba(255,107,61,0)' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 22px rgba(255,107,61,0.45)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 0 rgba(255,107,61,0)';
            }}
          >
            <span
              className="absolute inset-0 rounded-xl opacity-80 group-hover:opacity-100 transition-opacity"
              style={{ background: 'linear-gradient(135deg, #FF6B3D, #F9C74F)' }}
            />
            <span
              className="relative px-4 py-2 rounded-[11px] flex items-center gap-2 text-xs font-mono font-semibold text-white"
              style={{ background: '#050505' }}
            >
              <FileText className="w-3.5 h-3.5 text-[#FF8752]" />
              Resume
            </span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-xl text-white"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 p-6 rounded-2xl flex flex-col gap-4 md:hidden z-50"
            style={{
              background: 'rgba(10,10,10,0.96)',
              border: '1px solid rgba(255,107,61,0.2)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.7)',
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => goTo(e, item.href)}
                className="text-sm font-mono py-2 border-b flex items-center justify-between transition-colors"
                style={{
                  color: '#C8C8C8',
                  borderColor: 'rgba(255,255,255,0.06)',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#FF8752'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#C8C8C8'; }}
              >
                <span>{item.name}</span>
                <span className="text-xs text-[#8E8E8E]">➜</span>
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1YK33pcxcN4ACycCYLdcpeQR_kL0IGkv8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full py-3 rounded-xl text-center text-xs font-mono font-bold text-white flex items-center justify-center gap-2"
              style={{ background: 'linear-gradient(135deg, #FF5C39, #FF7A3D)' }}
            >
              <FileText className="w-4 h-4" /> Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
