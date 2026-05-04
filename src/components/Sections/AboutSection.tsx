import { motion } from 'motion/react';

export function AboutSection() {
  const skills = ["Python", "FastAPI", "TensorFlow", "React", "MongoDB", "Generative AI"];

  return (
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
                {skills.map(skill => (
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
  );
}
