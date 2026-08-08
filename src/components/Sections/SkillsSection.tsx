import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, X, CheckCircle2, Layers } from 'lucide-react';

interface Planet {
  name: string;
  iconLabel: string;
  category: 'languages' | 'ai' | 'backend' | 'devops' | 'tools' | 'specializations';
  level: number;
  experience: string;
  gradient: string;
  glowColor: string;
  details: string[];
}

const PLANETS: Planet[] = [
  // Languages
  { name: 'Python', iconLabel: 'PY', category: 'languages', level: 95, experience: '3+ Years', gradient: 'from-[#F9C74F] to-[#FF8752]', glowColor: '#F9C74F', details: ['FastAPI & Flask Backends', 'PyTorch & Data Processing', 'Scripting & Automation'] },
  { name: 'SQL', iconLabel: 'SQL', category: 'languages', level: 92, experience: '2.5+ Years', gradient: 'from-[#336791] to-[#2B5B84]', glowColor: '#336791', details: ['PostgreSQL & T-SQL Queries', 'Aggregation Pipelines', 'Relational Schema Optimization'] },
  { name: 'TypeScript', iconLabel: 'TS', category: 'languages', level: 90, experience: '2.5+ Years', gradient: 'from-[#61DAFB] to-[#2B7489]', glowColor: '#61DAFB', details: ['Strict Type Safety & Interfaces', 'React & Next.js Ecosystem', 'SDK & Library Design'] },
  { name: 'JavaScript', iconLabel: 'JS', category: 'languages', level: 90, experience: '3+ Years', gradient: 'from-[#F7DF1E] to-[#D4B817]', glowColor: '#F7DF1E', details: ['Modern ES6+ Features', 'Async/Await & Promises', 'Frontend & Node.js Runtime'] },
  { name: 'C / C++', iconLabel: 'C++', category: 'languages', level: 85, experience: '2+ Years', gradient: 'from-[#00599C] to-[#00447C]', glowColor: '#00599C', details: ['Object Oriented Programming', 'Low-level Memory & Pointers', 'Data Structures & Algorithms'] },

  // AI & LLMs
  { name: 'Agentic AI', iconLabel: 'AGI', category: 'ai', level: 94, experience: '2+ Years', gradient: 'from-purple-500 to-pink-500', glowColor: '#A855F7', details: ['Multi-Agent Systems', 'Autonomous Decision Workflows', 'Agent Orchestration Frameworks'] },
  { name: 'LangGraph', iconLabel: 'GRAPH', category: 'ai', level: 92, experience: '1.5+ Years', gradient: 'from-[#FF6B3D] to-[#F9C74F]', glowColor: '#FF6B3D', details: ['Multi-Node Reflection Cycles', 'Gap-Driven Agent Routing', 'State & Memory Management'] },
  { name: 'LangChain', iconLabel: 'LangChain', category: 'ai', level: 93, experience: '2+ Years', gradient: 'from-[#FF8752] to-[#FF6B3D]', glowColor: '#FF8752', details: ['Document Indexing (2K+ chunks)', 'Retrieval@3 Optimization', 'RAG-Chain Caching & Workers'] },
  { name: 'RAG', iconLabel: 'RAG', category: 'ai', level: 93, experience: '2+ Years', gradient: 'from-[#b1df17ff] to-[#FF6B3D]', glowColor: '#b1df17ff', details: ['Document Indexing (2K+ chunks)', 'Retrieval@3 Optimization', 'RAG-Chain Caching & Workers'] },
  { name: 'MCP Protocol', iconLabel: 'MCP', category: 'ai', level: 88, experience: '1+ Years', gradient: 'from-[#00E5FF] to-[#00B0FF]', glowColor: '#00E5FF', details: ['Model Context Protocol Servers', 'Multi-Source Data Integrations', 'Retry/Backoff & Rate Limiting'] },
  { name: 'Prompt Eng.', iconLabel: 'PRM', category: 'ai', level: 95, experience: '2+ Years', gradient: 'from-[#F9C74F] to-[#FF8752]', glowColor: '#F9C74F', details: ['Eval Set Benchmark Testing', 'AI Guardrails & Session Safety', 'Hallucination Minimization'] },
  { name: 'PyTorch', iconLabel: 'TORCH', category: 'ai', level: 85, experience: '1.5+ Years', gradient: 'from-[#EE4C2C] to-[#C73719]', glowColor: '#EE4C2C', details: ['Multimodal Deception Pipelines', 'Linguistic & Acoustic Models', 'Feature Extraction & Embeddings'] },

  // Backend & APIs
  { name: 'REST & Sockets', iconLabel: 'API', category: 'backend', level: 92, experience: '2.5+ Years', gradient: 'from-[#FF6B3D] to-[#FF8752]', glowColor: '#FF6B3D', details: ['FastAPI Backend Architecture', 'Real-Time WebSocket Streaming', 'Clean Service-Repository Pattern'] },
  { name: 'PostgreSQL', iconLabel: 'PG', category: 'backend', level: 90, experience: '2+ Years', gradient: 'from-[#336791] to-[#417EAF]', glowColor: '#336791', details: ['SQLAlchemy ORM & Neon Host', 'Geospatial GeoJSON Caching', 'ACID Transactions & Indexing'] },
  { name: 'MongoDB', iconLabel: 'MDB', category: 'backend', level: 85, experience: '2+ Years', gradient: 'from-[#47A248] to-[#3B873C]', glowColor: '#47A248', details: ['Document Schema Modeling', 'Aggregation Pipelines', 'NoSQL Storage Solutions'] },
  { name: 'ChromaDB & Redis', iconLabel: 'VEC', category: 'backend', level: 88, experience: '1.5+ Years', gradient: 'from-[#DC382D] to-[#FF4438]', glowColor: '#DC382D', details: ['Persistent RAG Vector Storage', 'Celery Background Task Queues', 'In-Memory Cache Latency Reduction'] },
  { name: 'JWT Auth', iconLabel: 'AUTH', category: 'backend', level: 90, experience: '2+ Years', gradient: 'from-[#D9D9D9] to-[#8E8E8E]', glowColor: '#D9D9D9', details: ['Clerk JWT Authentication', 'JWKS Auto-Sync Verification', 'Session Safety Guardrails'] },

  // Cloud & DevOps
  { name: 'AWS (S3, EC2)', iconLabel: 'AWS', category: 'devops', level: 88, experience: '2+ Years', gradient: 'from-[#FF9900] to-[#E68A00]', glowColor: '#FF9900', details: ['S3 Evidence Storage', 'EC2 Instance Management', 'Cloud Infrastructure Setup'] },
  { name: 'Docker & Linux', iconLabel: 'DOC', category: 'devops', level: 86, experience: '2+ Years', gradient: 'from-[#2496ED] to-[#1A77C2]', glowColor: '#2496ED', details: ['Multi-Stage Container Builds', 'Linux System Administration', 'Isolated Environment Config'] },
  { name: 'GitHub CI/CD', iconLabel: 'CI', category: 'devops', level: 88, experience: '2+ Years', gradient: 'from-[#F05032] to-[#D83A1C]', glowColor: '#F05032', details: ['Automated Build & Test Pipelines', 'Version Control & Branching', 'Deployment Automation'] },

  // Developer Tools
  { name: 'VS Code', iconLabel: 'IDE', category: 'tools', level: 95, experience: '3+ Years', gradient: 'from-[#007ACC] to-[#005C99]', glowColor: '#007ACC', details: ['Advanced Workflows', 'Extensions & Snippets', 'Integrated Terminal'] },
  { name: 'Ollama', iconLabel: 'Model', category: 'tools', level: 85, experience: '1+ Year', gradient: 'from-[#69d404ff] to-[#D4A333]', glowColor: '#69d404ff', details: ['LLM Tracing & Debugging', 'Agent Evaluation', 'Prompt Playground'] },
  { name: 'Postman', iconLabel: 'API', category: 'tools', level: 92, experience: '2.5+ Years', gradient: 'from-[#FF6C37] to-[#E55B29]', glowColor: '#FF6C37', details: ['API Endpoint Testing', 'Environment Variables', 'Automated Workflows'] },
  { name: 'Neon', iconLabel: 'DB', category: 'tools', level: 88, experience: '1.5+ Years', gradient: 'from-[#00E599] to-[#00B377]', glowColor: '#00E599', details: ['Serverless Postgres', 'Branching & Snapshots', 'Connection Pooling'] },
  { name: 'LangSmith', iconLabel: 'AI', category: 'tools', level: 85, experience: '1+ Year', gradient: 'from-[#F6C23E] to-[#D4A333]', glowColor: '#F6C23E', details: ['LLM Tracing & Debugging', 'Agent Evaluation', 'Prompt Playground'] },
  
  // Specializations
  { name: 'System Design', iconLabel: 'LLD', category: 'specializations', level: 90, experience: '2+ Years', gradient: 'from-[#F9C74F] to-[#FF6B3D]', glowColor: '#F9C74F', details: ['LLD System Architecture', 'Database Schema Architecture', 'API Design & Agent Orchestration'] },
  { name: 'LLM Evaluation', iconLabel: 'EVAL', category: 'specializations', level: 85, experience: '1+ Year', gradient: 'from-[#9B51E0] to-[#6F42C1]', glowColor: '#9B51E0', details: ['Automated Benchmarking', 'Quality Assurance', 'RAG Metrics'] },
  { name: 'Prompt Engineering', iconLabel: 'PRMPT', category: 'specializations', level: 92, experience: '1.5+ Years', gradient: 'from-[#2D9CDB] to-[#2F80ED]', glowColor: '#2D9CDB', details: ['Few-Shot & CoT', 'Context Optimization', 'System Prompt Tuning'] },
  { name: 'MCP Orchestration', iconLabel: 'MCP', category: 'specializations', level: 88, experience: '1+ Year', gradient: 'from-[#F2994A] to-[#EB5757]', glowColor: '#F2994A', details: ['Multi-Agent Systems', 'Tool Calling Architecture', 'Task Delegation'] },
  { name: 'Multi-Model Usage', iconLabel: 'MM', category: 'specializations', level: 85, experience: '1+ Year', gradient: 'from-[#27AE60] to-[#219653]', glowColor: '#27AE60', details: ['Model Routing & Selection', 'Fallback Strategies', 'Cost Optimization'] },
];

type FilterType = 'all' | 'languages' | 'ai' | 'backend' | 'devops' | 'tools' | 'specializations';

export const SkillsSection: React.FC = () => {
  const [selected, setSelected] = useState<Planet | null>(null);
  const [filter, setFilter]     = useState<FilterType>('all');

  const visible = PLANETS.filter((p) => filter === 'all' || p.category === filter);

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-4 mb-14">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest"
          style={{ background: 'rgba(249,199,79,0.08)', border: '1px solid rgba(249,199,79,0.2)', color: '#F9C74F' }}
        >
          <Globe className="w-3.5 h-3.5 animate-pulse" /> Planetary Tech Constellation
        </div>
        <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white tracking-tight">
          Orbital{' '}
          <span style={{ background: 'linear-gradient(135deg,#FF6B3D,#F9C74F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Skills Universe
          </span>
        </h2>
        <p className="text-base text-[#8E8E8E] max-w-2xl">
          Each skill is a celestial body in my tech galaxy. Hover to scan, click to inspect telemetry.
        </p>

        {/* Filter pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {(['all','languages','ai','backend','devops','tools','specializations'] as FilterType[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="px-4 py-1.5 rounded-full text-xs font-mono capitalize transition-all duration-300"
              style={
                filter === cat
                  ? { background: '#FF6B3D', color: '#fff', fontWeight: 700, boxShadow: '0 0 14px rgba(255,107,61,0.45)' }
                  : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#8E8E8E' }
              }
            >
              {cat === 'all'
                ? 'All Planets'
                : cat === 'languages'
                ? 'Languages'
                : cat === 'ai'
                ? 'AI & LLMs'
                : cat === 'backend'
                ? 'Backend & APIs'
                : cat === 'devops'
                ? 'Cloud & DevOps'
                : cat === 'tools'
                ? 'Dev Tools'
                : 'Specializations'}
            </button>
          ))}
        </div>
      </div>

      {/* Planet grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
        {visible.map((planet, idx) => (
          <motion.div
            key={planet.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.04 }}
            onClick={() => setSelected(planet)}
            className="group relative flex flex-col items-center cursor-pointer p-4"
          >
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full border border-dashed opacity-35 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 animate-spin-slow"
                style={{ borderColor: planet.glowColor }}
              />
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${planet.gradient} flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:scale-125`}
                style={{ boxShadow: `0 0 18px ${planet.glowColor}33` }}
              >
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/15 rounded-t-full" />
                <span className="text-[10px] font-mono font-extrabold text-[#050505] z-10 drop-shadow tracking-tight px-1 text-center">
                  {planet.iconLabel}
                </span>
              </div>
            </div>
            <div className="mt-3 text-center">
              <div className="text-sm font-heading font-semibold text-white group-hover:text-[#FF8752] transition-colors">
                {planet.name}
              </div>
              <div className="text-[11px] font-mono text-[#8E8E8E] mt-0.5">{planet.experience}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="p-8 rounded-3xl max-w-lg w-full relative overflow-hidden"
              style={{
                background: '#111111',
                border: '1px solid rgba(255,107,61,0.3)',
                boxShadow: '0 0 50px rgba(255,107,61,0.2)',
              }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-white transition-colors"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-6 mb-6">
                <div className="relative w-20 h-20 flex items-center justify-center flex-shrink-0">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed animate-spin-slow" style={{ borderColor: selected.glowColor }} />
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${selected.gradient} flex items-center justify-center text-[#050505] font-extrabold text-xs tracking-tight px-1 text-center`}>
                    {selected.iconLabel}
                  </div>
                </div>
                <div>
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase"
                    style={{ background: 'rgba(255,107,61,0.12)', color: '#FF8752', border: '1px solid rgba(255,107,61,0.25)' }}
                  >
                    {selected.category}
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-white mt-1">{selected.name}</h3>
                  <p className="text-xs font-mono text-[#8E8E8E]">{selected.experience}</p>
                </div>
              </div>

              {/* Level bar */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-[#C8C8C8]">Orbital Mastery</span>
                  <span className="text-[#FF6B3D] font-bold">{selected.level}%</span>
                </div>
                <div className="w-full h-3 rounded-full overflow-hidden p-0.5" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${selected.level}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className={`h-full rounded-full bg-gradient-to-r ${selected.gradient}`}
                  />
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#8E8E8E] flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#FF8752]" /> Core Capabilities
                </h4>
                {selected.details.map((d, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs p-2.5 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B3D] flex-shrink-0 mt-0.5" />
                    <span className="text-[#C8C8C8]">{d}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-white/8 text-center">
                <button
                  onClick={() => setSelected(null)}
                  className="w-full py-2.5 rounded-xl text-xs font-mono font-bold text-white transition-colors"
                  style={{ background: 'rgba(255,107,61,0.1)', border: '1px solid rgba(255,107,61,0.3)' }}
                >
                  Close Telemetry Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

