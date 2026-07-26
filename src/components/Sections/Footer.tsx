import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      className="relative z-10 pt-20 pb-10 border-t overflow-hidden"
      style={{
        background: 'rgba(5,5,5,0.85)',
        backdropFilter: 'blur(16px)',
        borderColor: 'rgba(255,255,255,0.06)',
      }}
    >
      {/* Flying spaceship across top edge */}
      <div className="absolute top-0 left-0 right-0 h-8 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: ['-10%', '110%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1 flex items-center gap-1"
          style={{ color: '#FF6B3D', filter: 'drop-shadow(0 0 8px #FF6B3D)' }}
        >
          <Rocket className="w-5 h-5 rotate-90" />
          <span className="w-14 h-0.5 rounded-full" style={{ background: 'linear-gradient(to right, #FF6B3D, transparent)' }} />
        </motion.div>
      </div>

      {/* Constellation SVG overlay */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="20%" x2="25%" y2="80%" stroke="#FF6B3D" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="25%" y1="80%" x2="45%" y2="40%" stroke="#FF8752" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="45%" y1="40%" x2="70%" y2="70%" stroke="#F9C74F" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="10%" cy="20%" r="3" fill="#FF6B3D" />
          <circle cx="25%" cy="80%" r="3" fill="#FF8752" />
          <circle cx="45%" cy="40%" r="3" fill="#F9C74F" />
          <circle cx="70%" cy="70%" r="3" fill="#FF6B3D" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <div className="flex items-center gap-2 font-heading font-bold text-lg text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B3D] animate-pulse" />
            AMAN MEENA
            <span className="text-xs font-mono text-[#FF6B3D]">.SPACE</span>
          </div>
          <p className="text-xs text-[#8E8E8E] font-mono">Designed & Engineered for Deep Space Exploration.</p>
        </div>

       

        {/* Right: Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group px-4 py-2.5 rounded-xl font-mono text-xs text-white flex items-center gap-2 transition-all cursor-pointer"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,107,61,0.4)';
            (e.currentTarget as HTMLElement).style.boxShadow   = '0 0 16px rgba(255,107,61,0.3)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
            (e.currentTarget as HTMLElement).style.boxShadow   = 'none';
          }}
        >
          Return to Apex Orbit
          <ArrowUp className="w-4 h-4 text-[#FF6B3D] group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};
