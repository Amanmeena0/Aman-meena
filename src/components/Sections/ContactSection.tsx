import { motion } from 'motion/react';
import { ArrowRight, Mail, Github, Linkedin, Globe, MailCheckIcon, MailCheck } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              Let's build something <span className="italic text-accent-sage">meaningful</span> together.
            </h2>
            <p className="text-xl text-charcoal/60 mb-12 max-w-lg">
              Whether it's a complex data problem or a new AI initiative, I'm always open to discussing how we can create impact.
            </p>
            
            <div className="flex flex-col gap-6">
              <a 
                href="mailto:hello@aman.dev" 
                className="flex items-center gap-4 text-xl md:text-2xl font-serif text-charcoal hover:text-accent-terracotta transition-colors group"
              >
                <div className="p-4 rounded-2xl bg-bg shadow-sm group-hover:bg-accent-terracotta group-hover:text-bg transition-all">
                  <Mail size={24} />
                </div>
                hello@aman.dev
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-bg rounded-4xl p-10 md:p-16 shadow-xl shadow-charcoal/5"
          >
            <h3 className="text-2xl font-serif mb-8">Connect with me</h3>
            <div className="grid gap-6">
              <a href="https://www.linkedin.com/in/aman-meena-11326a395" className="flex items-center justify-between p-6 rounded-3xl bg-surface/50 hover:bg-surface transition-colors group">
                <div className="flex items-center gap-4">
                  <Linkedin className="text-accent-sage" />
                  <span className="font-medium">LinkedIn</span>
                </div>
                <ArrowRight size={20} className="text-charcoal/20 group-hover:text-charcoal group-hover:translate-x-1 transition-all" />
              </a>
              <a href="https://github.com/Amanmeena0" className="flex items-center justify-between p-6 rounded-3xl bg-surface/50 hover:bg-surface transition-colors group">
                <div className="flex items-center gap-4">
                  <Github className="text-accent-sage" />
                  <span className="font-medium">GitHub</span>
                </div>
                <ArrowRight size={20} className="text-charcoal/20 group-hover:text-charcoal group-hover:translate-x-1 transition-all" />
              </a>
              <a href="mailto:meenaaman581@gmail.com" className="flex items-center justify-between p-6 rounded-3xl bg-surface/50 hover:bg-surface transition-colors group">
                <div className="flex items-center gap-4">
                  <MailCheckIcon className="text-accent-sage" />
                  <span className="font-medium">Email</span>
                </div>
                <ArrowRight size={20} className="text-charcoal/20 group-hover:text-charcoal group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
