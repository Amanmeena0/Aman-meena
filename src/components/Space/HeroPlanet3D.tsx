import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// Warm cosmic palette — no rainbow, no blue
const TECH_ORBITS = [
  { id: 'react',      name: 'React',       category: 'Frontend',    orbitRadius: 5.5,  orbitSpeed: 0.0080, orbitTilt:  0.05,  angleOffset: 0,                      color: '#FF6B3D', size: 0.28 },
  { id: 'nextjs',     name: 'Next.js',     category: 'Framework',   orbitRadius: 7.0,  orbitSpeed: 0.0060, orbitTilt:  0.12,  angleOffset: (Math.PI*2)/10,         color: '#FFFFFF', size: 0.30 },
  { id: 'python',     name: 'Python',      category: 'AI Backend',  orbitRadius: 8.4,  orbitSpeed: 0.0050, orbitTilt: -0.08,  angleOffset: (Math.PI*2)/10*2,       color: '#F9C74F', size: 0.32 },
  { id: 'ai',         name: 'AI / RAG',    category: 'Intelligence',orbitRadius: 9.6,  orbitSpeed: 0.0045, orbitTilt:  0.18,  angleOffset: (Math.PI*2)/10*3,       color: '#FF8752', size: 0.34 },
  { id: 'docker',     name: 'Docker',      category: 'DevOps',      orbitRadius: 10.8, orbitSpeed: 0.0038, orbitTilt: -0.14,  angleOffset: (Math.PI*2)/10*4,       color: '#B8B8B8', size: 0.30 },
  { id: 'nodejs',     name: 'Node.js',     category: 'Runtime',     orbitRadius: 6.2,  orbitSpeed: 0.0070, orbitTilt:  0.22,  angleOffset: (Math.PI*2)/10*5,       color: '#D9D9D9', size: 0.28 },
  { id: 'aws',        name: 'AWS',         category: 'Cloud',       orbitRadius: 11.8, orbitSpeed: 0.0030, orbitTilt: -0.06,  angleOffset: (Math.PI*2)/10*6,       color: '#FF6B3D', size: 0.32 },
  { id: 'tensorflow', name: 'TensorFlow',  category: 'ML',          orbitRadius: 7.8,  orbitSpeed: 0.0055, orbitTilt:  0.10,  angleOffset: (Math.PI*2)/10*7,       color: '#FF4D4D', size: 0.28 },
  { id: 'postgresql', name: 'PostgreSQL',  category: 'Database',    orbitRadius: 9.0,  orbitSpeed: 0.0042, orbitTilt: -0.18,  angleOffset: (Math.PI*2)/10*8,       color: '#8E8E8E', size: 0.30 },
  { id: 'typescript', name: 'TypeScript',  category: 'Language',    orbitRadius: 12.6, orbitSpeed: 0.0025, orbitTilt:  0.15,  angleOffset: (Math.PI*2)/10*9,       color: '#C8C8C8', size: 0.32 },
];

// Warm orbital ring shades — copper / bronze / dark gold / grey
const RING_COLORS = [
  '#6E4E35', '#8B5A2B', '#A0522D', '#7A5C3A',
  '#8E7355', '#B8860B', '#6D6D6D', '#A67C52',
  '#9E8B6E', '#7D6B5A',
];

interface ScreenPos { x: number; y: number; visible: boolean; }
interface Props { onTechClick?: (id: string) => void; }

export const HeroOrbitCanvas: React.FC<Props> = ({ onTechClick }) => {
  const mountRef  = useRef<HTMLDivElement>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [screenPos,   setScreenPos]   = useState<Record<string, ScreenPos>>({});

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let w = container.clientWidth;
    let h = container.clientHeight;

    // ── Scene ──────────────────────────────────────────────────────────────
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 1000);
    camera.position.set(0, 3, 22);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // ── Lighting — warm sun colours ──────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffeedd, 0.45));

    const keyLight = new THREE.DirectionalLight(0xff8c42, 3.0); // orange key
    keyLight.position.set(8, 10, 8);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xf9c74f, 1.8); // gold fill
    fillLight.position.set(-12, -4, -8);
    scene.add(fillLight);

    const rimPoint = new THREE.PointLight(0xff6b3d, 3, 40); // orange rim
    rimPoint.position.set(0, 6, 6);
    scene.add(rimPoint);

    // ── Digital Core Sphere — dark glass + lava glow ──────────────────────
    const CORE_Y = -2.5;

    const coreTex = (() => {
      const c   = document.createElement('canvas');
      c.width = 1024; c.height = 512;
      const ctx = c.getContext('2d')!;

      // Near-black base
      ctx.fillStyle = '#0A0705';
      ctx.fillRect(0, 0, 1024, 512);

      // Warm circuit grid
      ctx.strokeStyle = 'rgba(255,107,61,0.22)';
      ctx.lineWidth = 1;
      for (let x = 0; x < 1024; x += 32) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,512); ctx.stroke(); }
      for (let y = 0; y < 512;  y += 32) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(1024,y); ctx.stroke(); }

      // Circuit traces — warm orange
      ctx.strokeStyle = 'rgba(249,199,79,0.35)';
      ctx.lineWidth = 1.5;
      for (let i = 0; i < 25; i++) {
        const sx = Math.random() * 1024, sy = Math.random() * 512;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx + (Math.random()-0.5)*180, sy + (Math.random()-0.5)*180);
        ctx.stroke();
      }

      // Glowing data nodes — orange/gold
      const nc = ['#FF6B3D','#FF8752','#F9C74F','#FFFFFF','#FF4D4D'];
      for (let i = 0; i < 280; i++) {
        ctx.globalAlpha = Math.random() * 0.7 + 0.3;
        ctx.fillStyle   = nc[Math.floor(Math.random() * nc.length)];
        ctx.beginPath();
        ctx.arc(Math.random()*1024, Math.random()*512, Math.random()*2.5+0.5, 0, Math.PI*2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      return new THREE.CanvasTexture(c);
    })();

    const coreGeo = new THREE.SphereGeometry(3.4, 64, 64);
    const coreMat = new THREE.MeshStandardMaterial({
      map: coreTex,
      roughness: 0.12,
      metalness: 0.80,
      emissive: new THREE.Color(0x1a0800),   // deep orange ember
      emissiveIntensity: 0.75,
      transparent: true,
      opacity: 0.92,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.y = CORE_Y;
    scene.add(coreMesh);

    // Atmosphere shell — warm dark orange haze
    const atmosMat = new THREE.MeshBasicMaterial({
      color: 0x7a3010,
      transparent: true,
      opacity: 0.13,
      side: THREE.BackSide,
    });
    const atmosMesh = new THREE.Mesh(new THREE.SphereGeometry(3.75, 64, 64), atmosMat);
    atmosMesh.position.y = CORE_Y;
    scene.add(atmosMesh);

    // Wireframe cage — bronze/copper
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x8b5e3c,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    coreMesh.add(new THREE.Mesh(
      new THREE.SphereGeometry(3.4, 32, 32).clone(),
      wireMat
    ));

    // Particle cloud — warm orange dots
    const pCount = 500;
    const pPos   = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const u = Math.random(), v = Math.random();
      const theta = u * Math.PI * 2;
      const phi   = Math.acos(2 * v - 1);
      const r     = 3.7 + Math.random() * 2.0;
      pPos[i*3]   = r * Math.sin(phi) * Math.cos(theta);
      pPos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
      pPos[i*3+2] = r * Math.cos(phi);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat    = new THREE.PointsMaterial({ color: 0xff7030, size: 0.06, transparent: true, opacity: 0.55 });
    const partPts = new THREE.Points(pGeo, pMat);
    partPts.position.y = CORE_Y;
    scene.add(partPts);

    // ── Orbital Ring System (warm copper / bronze) ────────────────────────
    const orbitGroup = new THREE.Group();
    orbitGroup.rotation.x = 0.30;
    orbitGroup.rotation.y = -0.08;
    orbitGroup.position.y = CORE_Y;
    scene.add(orbitGroup);

    TECH_ORBITS.forEach((tech, i) => {
      const rGeo = new THREE.RingGeometry(tech.orbitRadius - 0.015, tech.orbitRadius + 0.015, 160);
      const rMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(RING_COLORS[i % RING_COLORS.length]),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.20,
      });
      const rMesh = new THREE.Mesh(rGeo, rMat);
      rMesh.rotation.x = Math.PI / 2 + tech.orbitTilt;
      orbitGroup.add(rMesh);
    });

    // ── Tech Planet Meshes ─────────────────────────────────────────────────
    const techMeshes: Record<string, THREE.Group> = {};
    TECH_ORBITS.forEach((tech) => {
      const tg  = new THREE.Group();
      const pGeo2 = new THREE.SphereGeometry(tech.size, 32, 32);
      const pMat2 = new THREE.MeshStandardMaterial({
        color:            new THREE.Color(tech.color),
        emissive:         new THREE.Color(tech.color),
        emissiveIntensity: 0.85,
        metalness: 0.7,
        roughness: 0.25,
      });
      tg.add(new THREE.Mesh(pGeo2, pMat2));

      // Halo ring
      const hGeo = new THREE.RingGeometry(tech.size * 1.4, tech.size * 1.65, 32);
      const hMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(tech.color),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
      });
      const hMesh = new THREE.Mesh(hGeo, hMat);
      hMesh.rotation.x = Math.PI / 3.5;
      tg.add(hMesh);

      orbitGroup.add(tg);
      techMeshes[tech.id] = tg;
    });

    // ── Mouse Parallax ─────────────────────────────────────────────────────
    let tCamX = 0, tCamY = 3;
    const BASE_Y = 3;
    const onMouse = (e: MouseEvent) => {
      tCamX = ((e.clientX / w) - 0.5) * 3.0;
      tCamY  = BASE_Y - ((e.clientY / h) - 0.5) * 2.0;
    };
    window.addEventListener('mousemove', onMouse);

    // ── Animation ──────────────────────────────────────────────────────────
    const angles: Record<string, number> = {};
    TECH_ORBITS.forEach((t) => { angles[t.id] = t.angleOffset; });
    let time = 0, rafId: number;

    const tick = () => {
      time += 0.014;
      coreMesh.rotation.y   += 0.0025;
      partPts.rotation.y    -= 0.0012;
      atmosMesh.scale.setScalar(1 + Math.sin(time * 1.8) * 0.025);

      camera.position.x += (tCamX - camera.position.x) * 0.035;
      camera.position.y += (tCamY - camera.position.y) * 0.035;
      camera.lookAt(0, 0, 0);

      const newPos: Record<string, ScreenPos> = {};
      const tmp = new THREE.Vector3();
      TECH_ORBITS.forEach((tech) => {
        angles[tech.id] += tech.orbitSpeed;
        const a = angles[tech.id];
        const tg = techMeshes[tech.id];
        if (!tg) return;
        tg.position.x = Math.cos(a) * tech.orbitRadius;
        tg.position.z = Math.sin(a) * tech.orbitRadius;
        tg.rotation.y += 0.025;
        tg.getWorldPosition(tmp);
        tmp.project(camera);
        newPos[tech.id] = {
          x: (tmp.x * 0.5 + 0.5) * w,
          y: (-(tmp.y * 0.5) + 0.5) * h,
          visible: tmp.z < 1.0 && tmp.z > -1.0,
        };
      });
      setScreenPos(newPos);
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(tick);
    };
    tick();

    const onResize = () => {
      w = container.clientWidth;  h = container.clientHeight;
      camera.aspect = w / h;      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full" aria-hidden="true">
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />

      {TECH_ORBITS.map((tech) => {
        const pos  = screenPos[tech.id];
        if (!pos || !pos.visible) return null;
        const isHov = hoveredTech === tech.id;

        return (
          <div
            key={tech.id}
            onMouseEnter={() => setHoveredTech(tech.id)}
            onMouseLeave={() => setHoveredTech(null)}
            onClick={() => onTechClick?.('projects')}
            style={{
              position: 'absolute',
              left: pos.x, top: pos.y,
              transform: 'translate(-50%,-50%)',
              pointerEvents: 'auto',
            }}
            className="cursor-pointer z-10 group"
          >
            <div
              className={`rounded-full flex items-center justify-center font-mono font-bold transition-all duration-300 ${isHov ? 'scale-[1.6]' : ''}`}
              style={{
                width:  `${tech.size * 90 + 16}px`,
                height: `${tech.size * 90 + 16}px`,
                background: `radial-gradient(circle at 35% 35%, ${tech.color}22, #05050588)`,
                border: `1.5px solid ${tech.color}${isHov ? 'CC' : '44'}`,
                boxShadow: isHov
                  ? `0 0 22px ${tech.color}88`
                  : `0 0 8px ${tech.color}22`,
                backdropFilter: 'blur(6px)',
                color: tech.color,
                fontSize: '9px',
              }}
            >
              {tech.name.slice(0, 2)}
            </div>

            {isHov && (
              <div
                className="absolute left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap"
                style={{ top: `${tech.size * 90 + 24}px` }}
              >
                <div
                  className="px-2.5 py-1 rounded-lg text-[10px] font-mono flex items-center gap-1.5"
                  style={{
                    background: 'rgba(5,5,5,0.92)',
                    border: `1px solid ${tech.color}44`,
                    color: '#fff',
                    boxShadow: `0 0 14px ${tech.color}33`,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ background: tech.color }} />
                  <span className="font-semibold">{tech.name}</span>
                  <span className="opacity-50">· {tech.category}</span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
