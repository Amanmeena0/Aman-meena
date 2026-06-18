import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <section className="bg-surface py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
          {/* Text — left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 sm:mb-8">Empowering progress through purpose.</h2>
            <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
              <p>
                I believe growth comes from discomfort, so I consistently push beyond limits, learning faster, thinking deeper, and engineering solutions that stand the test of scale and time.
              </p>
              <p>
                Every line of code I write and every model I train is a step toward a more efficient, equitable, and intelligent world.
              </p>
            </div>
          </motion.div>

          {/* Image — right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
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
        </div>
      </div>
    </section>
  );
}
