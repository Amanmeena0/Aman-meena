import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function ContactSection() {
  return (
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
  );
}
