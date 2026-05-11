import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Internship } from '@/src/data/types';
import { X, Briefcase, Clock, Award, Code } from 'lucide-react';

interface InternshipCardProps {
  internship: Internship;
  index: number;
}

export function InternshipCard({ internship, index }: InternshipCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        onClick={() => setIsExpanded(true)}
        className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={internship.image}
            alt={internship.company}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
          {/* Subtle color tint */}
          <div 
            className="absolute inset-0 opacity-20 mix-blend-multiply"
            style={{ backgroundColor: internship.color }}
          />
        </div>

        {/* Card Content - Bottom Section */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
          {/* Top - Tag */}
          <div className="flex justify-between items-start">
            <div 
              className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-white/90 glass"
              style={{ 
                backgroundColor: internship.color + '20',
                borderColor: internship.color + '40'
              }}
            >
              {internship.company}
            </div>
            <div className="text-white/70 text-xs font-mono">{internship.period}</div>
          </div>

          {/* Bottom - Main Info */}
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-serif text-white leading-tight">
              {internship.title}
            </h3>
            <p className="text-sm md:text-base text-white/80 leading-relaxed line-clamp-2">
              {internship.description}
            </p>

            {/* Hover indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="pt-4 text-white/60 text-xs font-mono uppercase tracking-widest group-hover:text-white transition-colors duration-300"
            >
              ↗ View Details
            </motion.div>
          </div>
        </div>

        {/* Hover border effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 border-2 rounded-3xl transition-colors duration-300"
          style={{ borderColor: internship.color + '40' }}
        />
      </motion.div>

      {/* Detail Modal/Overlay */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-4 md:inset-8 lg:inset-12 bg-bg rounded-3xl overflow-hidden z-50 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsExpanded(false)}
                className="absolute top-6 right-6 p-3 rounded-full bg-charcoal/10 hover:bg-charcoal/20 transition-colors z-10"
              >
                <X size={24} className="text-charcoal" />
              </motion.button>

              <div className="flex flex-col lg:flex-row h-full overflow-y-auto">
                {/* Left - Image */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="lg:w-1/2 relative overflow-hidden"
                >
                  <img
                    src={internship.image}
                    alt={internship.company}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                </motion.div>

                {/* Right - Content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="lg:w-1/2 p-8 md:p-12 overflow-y-auto"
                >
                  {/* Header */}
                  <div className="mb-8">
                    <div 
                      className="inline-block px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest mb-4"
                      style={{ 
                        backgroundColor: internship.color + '20',
                        color: internship.color
                      }}
                    >
                      {internship.company}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-2">
                      {internship.title}
                    </h2>
                    <p className="text-charcoal/60 text-lg font-mono">{internship.period}</p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-surface/50 p-4 rounded-2xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock size={16} className="text-charcoal/60" />
                        <p className="text-xs font-mono uppercase tracking-widest text-charcoal/60">Duration</p>
                      </div>
                      <p className="text-lg font-serif text-charcoal">{internship.duration}</p>
                    </div>
                    <div className="bg-surface/50 p-4 rounded-2xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase size={16} className="text-charcoal/60" />
                        <p className="text-xs font-mono uppercase tracking-widest text-charcoal/60">Role</p>
                      </div>
                      <p className="text-sm font-serif text-charcoal">{internship.title}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-sm font-mono uppercase tracking-widest text-charcoal/60 mb-3">About This Role</h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      {internship.detailedDescription}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <Code size={16} className="text-charcoal/60" />
                      <h3 className="text-sm font-mono uppercase tracking-widest text-charcoal/60">Skills & Technologies</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ y: -2 }}
                          className="px-3 py-1 bg-charcoal/5 text-charcoal/70 text-xs font-mono rounded-lg border border-charcoal/10 hover:border-charcoal/30 transition-colors"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Award size={16} className="text-charcoal/60" />
                      <h3 className="text-sm font-mono uppercase tracking-widest text-charcoal/60">Key Achievements</h3>
                    </div>
                    <ul className="space-y-2">
                      {internship.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex gap-3 text-charcoal/70 text-sm"
                        >
                          <span 
                            className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: internship.color }}
                          />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
