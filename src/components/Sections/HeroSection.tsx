import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { useGreeting } from '@/src/hooks/useGreeting';

export function HeroSection() {
  const greeting = useGreeting();

  return (
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
  );
}
