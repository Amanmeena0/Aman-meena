import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, MessageSquare, X, Send, ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { GoogleGenAI } from "@google/genai";
import Markdown from "react-markdown";

// --- Types ---

interface Project {
  title: string;
  description: string;
  why: string;
  tags: string[];
  link: string;
  image: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  image: string;
}

// --- Data ---

const PROJECTS: Project[] = [
  {
    title: "AI Market Analysis Platform",
    description: "A predictive system blending economic indicators with sentiment analysis to forecast market trends.",
    why: "I built this to bridge the gap between abstract economic theory and real-time data execution.",
    tags: ["Python", "TensorFlow", "FastAPI", "Economics"],
    link: "#",
    image: "https://picsum.photos/seed/market/800/600"
  },
  {
    title: "RAG-based Policy Assistant",
    description: "A specialized chatbot for government officials to query complex trade regulations using LLMs.",
    why: "Navigating bureaucracy is hard; I wanted to make policy data accessible and conversational.",
    tags: ["LangChain", "MongoDB", "OpenAI", "React"],
    link: "#",
    image: "https://picsum.photos/seed/policy/800/600"
  },
  {
    title: "Neural Network Optimizer",
    description: "A backend service that dynamically adjusts model parameters based on server load and latency.",
    why: "Efficiency is key in production AI. This project focuses on scaling intelligence sustainably.",
    tags: ["Go", "PyTorch", "Redis", "Docker"],
    link: "#",
    image: "https://picsum.photos/seed/neural/800/600"
  }
];

const EXPERIENCES: Experience[] = [
  {
    role: "Software Engineering Intern",
    company: "Accenture",
    period: "2023 - Present",
    description: "Developing enterprise-scale AI solutions and optimizing backend microservices for global clients.",
    image: "https://picsum.photos/seed/accenture/400/300"
  },
  {
    role: "Research Intern",
    company: "DIPR, DRDO",
    period: "Summer 2022",
    description: "Implemented multi-neural network systems for psychological profiling and data-driven decision support.",
    image: "https://picsum.photos/seed/drdo/400/300"
  },
  {
    role: "Data Analyst Intern",
    company: "DGFT, Ministry of Commerce",
    period: "Winter 2021",
    description: "Analyzed international trade data to identify economic trends and support policy formulation.",
    image: "https://picsum.photos/seed/dgft/400/300"
  }
];

// --- Components ---

const FloatingNav = () => {
  return (
    <motion.nav 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="glass px-6 py-3 rounded-full flex items-center gap-8 shadow-lg">
        {["Home", "Work", "Projects", "Contact"].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

const ExperienceRow = ({ exp }: { exp: Experience }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      className="relative border-b border-charcoal/10 py-12 group cursor-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl md:text-4xl font-serif text-charcoal/40 group-hover:text-charcoal transition-colors duration-500">
            {exp.role}
          </h3>
          <p className="text-lg text-charcoal/60 mt-2">{exp.company}</p>
        </div>
        <span className="text-sm font-mono text-charcoal/40 uppercase tracking-widest">
          {exp.period}
        </span>
      </div>

      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed pointer-events-none z-40 w-64 h-48 rounded-2xl overflow-hidden shadow-2xl"
          style={{ 
            left: mousePos.x + 20, 
            top: mousePos.y - 100,
          }}
        >
          <img 
            src={exp.image} 
            alt={exp.company} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-accent-sage/20 mix-blend-multiply" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
            <p className="text-white text-xs leading-relaxed">
              {exp.description}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>([
    { role: 'ai', content: "Hi! I'm Aman's AI assistant. Ask me anything about his background in economics, his tech stack, or his projects!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { 
            role: "user", 
            parts: [{ text: `You are Aman's portfolio assistant. 
            Aman's background: Economics graduate turned Software Engineer. 
            Skills: Python, FastAPI, MongoDB, React, Generative AI, Machine Learning.
            Experience: Accenture, DRDO, Ministry of Commerce.
            Tone: Professional, warm, insightful.
            User question: ${userMsg}` }] 
          }
        ],
      });

      setMessages(prev => [...prev, { role: 'ai', content: response.text || "I'm sorry, I couldn't process that." }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', content: "I'm having a little trouble connecting right now. Feel free to reach out to Aman directly!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-accent-terracotta text-white flex items-center justify-center shadow-xl"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute bottom-20 right-0 w-80 md:w-96 glass rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[500px]"
        >
          <div className="p-4 bg-accent-terracotta text-white font-serif flex justify-between items-center">
            <span>Aman's AI Assistant</span>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-bg/50">
            {messages.map((msg, i) => (
              <div key={i} className={cn("flex", msg.role === 'user' ? "justify-end" : "justify-start")}>
                <div className={cn(
                  "max-w-[85%] p-3 rounded-2xl text-sm",
                  msg.role === 'user' ? "bg-accent-sage text-white" : "bg-surface text-charcoal shadow-sm"
                )}>
                  <div className="markdown-body">
                    <Markdown>{msg.content}</Markdown>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-surface p-3 rounded-2xl text-sm animate-pulse">Thinking...</div>
              </div>
            )}
          </div>
          <div className="p-4 border-t border-charcoal/5 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me something..."
              className="flex-1 bg-surface rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-terracotta/20"
            />
            <button 
              onClick={handleSend}
              className="p-2 text-accent-terracotta hover:bg-accent-terracotta/10 rounded-full transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default function App() {
  const [greeting, setGreeting] = useState("Good morning");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 17) setGreeting("Good evening");
    else if (hour >= 12) setGreeting("Good afternoon");
    else setGreeting("Good morning");
  }, []);

  return (
    <div className="min-h-screen selection:bg-accent-terracotta/20">
      <div className="noise-overlay" />
      <FloatingNav />
      <ChatWidget />

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-6 pt-32 pb-20 min-h-[80vh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="text-accent-terracotta font-medium tracking-widest uppercase text-sm mb-6 block">
            {greeting}, I'm Aman
          </span>
          <h1 className="text-5xl md:text-8xl font-serif leading-[1.1] text-charcoal mb-8 motivational-glow">
            Building a <span className="italic text-accent-sage">smarter future</span> through data and empathy.
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/60 leading-relaxed max-w-2xl mb-12">
            I believe every data point tells a story. My mission is to translate those stories into intelligent systems that drive progress and inspire change.
          </p>
          <div className="flex flex-wrap gap-6">
            <motion.a 
              href="#work"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-charcoal text-white rounded-full font-medium flex items-center gap-2 shadow-lg shadow-charcoal/10"
            >
              View My Work <ArrowRight size={18} />
            </motion.a>
            <div className="flex items-center gap-4">
              <a href="#" className="p-3 rounded-full bg-surface text-charcoal hover:text-accent-sage transition-colors shadow-sm">
                <Github size={20} />
              </a>
              <a href="#" className="p-3 rounded-full bg-surface text-charcoal hover:text-accent-sage transition-colors shadow-sm">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="bg-surface py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-4xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://picsum.photos/seed/aman-portrait/800/800" 
                alt="Aman" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-accent-terracotta/10 mix-blend-overlay" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Empowering progress through purpose.</h2>
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
                <p>
                  I believe that the greatest challenges of our time can be solved by combining human intuition with machine precision. My journey from economics to AI is driven by a single goal: to build tools that make a difference.
                </p>
                <p>
                  Every line of code I write and every model I train is a step toward a more efficient, equitable, and intelligent world.
                </p>
                <div className="pt-4 flex flex-wrap gap-3">
                  {["Python", "FastAPI", "TensorFlow", "React", "MongoDB", "Generative AI"].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-bg rounded-full text-sm font-medium text-charcoal/60 border border-charcoal/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="work" className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-4xl md:text-6xl font-serif">Experience</h2>
            <p className="text-charcoal/40 font-mono text-sm hidden md:block">01 / 03</p>
          </div>
          <div className="flex flex-col">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceRow key={i} exp={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-surface/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-serif mb-20">Selected Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-bg rounded-4xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-charcoal/5"
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="glass p-2 rounded-full text-charcoal">
                      <ExternalLink size={18} />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-3">{project.title}</h3>
                <p className="text-charcoal/60 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="bg-surface/50 p-4 rounded-2xl mb-6">
                  <p className="text-xs font-medium text-accent-terracotta uppercase tracking-wider mb-1">Why I built this</p>
                  <p className="text-sm text-charcoal/80 italic">{project.why}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono uppercase tracking-widest text-charcoal/40 px-2 py-1 bg-surface rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-serif mb-8">Let's build something meaningful.</h2>
            <p className="text-xl text-charcoal/60 mb-12">
              Whether it's a complex data problem or a new AI initiative, I'm always open to discussing how we can create impact.
            </p>
            <a 
              href="meenaaman581@gmail.com" 
              className="inline-flex items-center gap-3 text-2xl md:text-4xl font-serif text-accent-terracotta hover:text-accent-sage transition-colors group"
            >
              hello@aman.dev
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight size={32} />
              </motion.span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-charcoal/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-serif text-xl">Aman.</div>
          <div className="flex gap-8 text-sm font-medium text-charcoal/60">
            <a href="#" className="hover:text-charcoal transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-charcoal transition-colors">GitHub</a>
            <a href="#" className="hover:text-charcoal transition-colors">Twitter</a>
          </div>
          <div className="text-sm text-charcoal/40">
            © 2026 Aman. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
