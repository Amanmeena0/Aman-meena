import React, { useEffect, useRef } from 'react';

export const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;
    let width  = (canvas.width  = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      width  = canvas.width  = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };
    window.addEventListener('resize', onResize);

    // Mouse parallax
    let mouseX = 0, mouseY = 0, tMouseX = 0, tMouseY = 0;
    const onMouse = (e: MouseEvent) => {
      tMouseX = (e.clientX - width  / 2) * 0.025;
      tMouseY = (e.clientY - height / 2) * 0.025;
    };
    window.addEventListener('mousemove', onMouse);

    // Stars — warm whites/greys only, no blue
    interface Star {
      x: number; y: number; z: number;
      size: number; baseAlpha: number;
      twinkleSpeed: number; color: string;
    }
    const STAR_COUNT = 520;
    let stars: Star[] = [];
    const STAR_COLORS = ['#FFFFFF', '#F0EBE0', '#D9D9D9', '#C8C8C8', '#FFE4CC'];

    const initStars = () => {
      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: (Math.random() - 0.5) * width  * 2,
        y: (Math.random() - 0.5) * height * 2,
        z: Math.random() * width,
        size: Math.random() * 1.4 + 0.4,
        baseAlpha: Math.random() * 0.55 + 0.2,
        twinkleSpeed: Math.random() * 0.018 + 0.004,
        color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
      }));
    };
    initStars();

    // Nebula blobs — deep orange / warm dust
    const nebulae = [
      { x: width * 0.18, y: height * 0.25, r: 420, color: 'rgba(255,107,61,0.045)' },
      { x: width * 0.78, y: height * 0.55, r: 480, color: 'rgba(249,199,79,0.035)' },
      { x: width * 0.50, y: height * 0.82, r: 360, color: 'rgba(255,77,77,0.030)' },
    ];

    let time = 0;

    const render = () => {
      time += 0.012;
      mouseX += (tMouseX - mouseX) * 0.04;
      mouseY += (tMouseY - mouseY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Rich matte black gradient
      const bg = ctx.createLinearGradient(0, 0, width, height);
      bg.addColorStop(0,   '#050505');
      bg.addColorStop(0.5, '#080808');
      bg.addColorStop(1,   '#030303');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      // Nebula fog
      nebulae.forEach((n, i) => {
        const pulse = Math.sin(time + i) * 22;
        const nx = n.x + mouseX * 0.4;
        const ny = n.y + mouseY * 0.4;
        const grad = ctx.createRadialGradient(nx, ny, 0, nx, ny, n.r + pulse);
        grad.addColorStop(0, n.color);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(nx, ny, n.r + pulse, 0, Math.PI * 2);
        ctx.fill();
      });

      // Stars with slow drift + twinkle
      const cx = width / 2, cy = height / 2;
      stars.forEach((s) => {
        const alpha = s.baseAlpha + Math.sin(time * 8 * s.twinkleSpeed) * 0.18;
        s.x += 0.07;
        if (s.x > width) s.x = -width;
        const k  = 400 / (s.z || 1);
        const px = (s.x - mouseX * 0.5) * k + cx;
        const py = (s.y - mouseY * 0.5) * k + cy;
        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const sz = Math.max(0.4, s.size * k * 0.75);
          ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
          ctx.fillStyle   = s.color;
          ctx.beginPath();
          ctx.arc(px, py, sz, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      ctx.globalAlpha = 1;

      rafId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};
