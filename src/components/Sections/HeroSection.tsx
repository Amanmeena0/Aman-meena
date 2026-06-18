import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, MailCheckIcon } from 'lucide-react';
import { useGreeting } from '@/src/hooks/useGreeting';

export function HeroSection() {
  const greeting = useGreeting();

  return (
    <section id="home" className="relative container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20 min-h-[80vh] flex flex-col justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl z-10"
      >
        <span className="text-accent-terracotta font-medium tracking-widest uppercase text-sm mb-6 block">
          {greeting}, I'm Aman
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] text-charcoal mb-8 motivational-glow">
          Building a <span className="italic text-accent-sage">smarter future</span> through data and empathy.
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-charcoal/60 leading-relaxed max-w-2xl mb-10 sm:mb-12">
          I believe every data point tells a story. My mission is to translate those stories into intelligent systems that drive progress and inspire change.
        </p>
        <div className="flex flex-wrap gap-6">
          <motion.a 
            href="#work"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-charcoal text-bg rounded-full font-medium flex items-center gap-2 shadow-lg shadow-charcoal/10"
          >
            View My Work <ArrowRight size={18} />
          </motion.a>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Amanmeena0" className="p-3 rounded-full bg-surface text-charcoal hover:text-accent-sage transition-colors shadow-sm">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/aman-meena-11326a395" className="p-3 rounded-full bg-surface text-charcoal hover:text-accent-sage transition-colors shadow-sm">
              <Linkedin size={20} />
            </a>  
            <a href="mailto:meenaaman581@gmail.com" className="p-3 rounded-full bg-surface text-charcoal hover:text-accent-sage transition-colors shadow-sm">
              <MailCheckIcon size={20} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Decorative Name */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative mt-10 lg:absolute lg:mt-0 lg:right-4 xl:right-8 lg:top-1/2 lg:-translate-y-1/2 pointer-events-none select-none opacity-[0.03] lg:opacity-[0.04] hidden sm:flex justify-center lg:block z-0"
      >
        <div className="text-[6rem] sm:text-[9rem] md:text-[12rem] lg:text-[15rem] xl:text-[20rem] font-serif [writing-mode:horizontal-tb] lg:[writing-mode:vertical-rl] text-charcoal leading-none">
          安缦
        </div>
      </motion.div>
    </section>
  );
}