import React, { useEffect, useState } from 'react';

export const SpaceCursor: React.FC = () => {
  const [pos, setPos]         = useState({ x: -100, y: -100 });
  const [isHovered, setHov]   = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const t = e.target as HTMLElement;
      setHov(
        t.tagName === 'A' || t.tagName === 'BUTTON' ||
        !!t.closest('button') || !!t.closest('a') ||
        t.classList.contains('cursor-pointer')
      );
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const base = { left: pos.x, top: pos.y, transform: 'translate(-50%, -50%)' };

  return (
    <>
      {/* Outer ring */}
      <div
        className="fixed pointer-events-none z-50 hidden md:block rounded-full transition-all duration-200"
        style={{
          ...base,
          width:  isHovered ? '36px' : '28px',
          height: isHovered ? '36px' : '28px',
          border: `1.5px solid ${isHovered ? '#FF6B3D' : 'rgba(255,107,61,0.45)'}`,
          background: isHovered ? 'rgba(255,107,61,0.08)' : 'transparent',
          boxShadow: isHovered ? '0 0 16px rgba(255,107,61,0.5)' : 'none',
        }}
      />
      {/* Centre dot */}
      <div
        className="fixed pointer-events-none z-50 hidden md:block rounded-full"
        style={{
          ...base,
          width: '6px', height: '6px',
          background: '#FF6B3D',
          boxShadow: '0 0 8px rgba(255,107,61,0.8)',
        }}
      />
    </>
  );
};
