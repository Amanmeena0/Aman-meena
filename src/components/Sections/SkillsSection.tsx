import { motion } from 'motion/react';

const SKILL_GROUPS = [
  {
    category: 'AI & Machine Learning',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Reinforcement Learning', 'Agentic AI', 'Model Interpretability'],
  },
  {
    category: 'Data & Engineering',
    skills: ['SQL', 'NoSQL', 'Data Engineering', 'Data Analysis', 'ETL Pipelines', 'Feature Engineering', 'Data Visualization'],
  },
  {
    category: 'Tools & Practices',
    skills: ['Git', 'Agile Methodologies', 'REST APIs', 'Docker', 'Jupyter', 'Linux'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'LangChain', 'Hugging Face', 'FastAPI'],
  },
  {
    category: 'Cloud & Infrastructure',
    skills: ['AWS', 'Azure', 'CI/CD', 'MLflow', 'Weights & Biases', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'Soft Skills',
    skills: ['Problem Solving', 'Technical Writing', 'Cross-functional Collaboration', 'Research', 'Mentoring', 'Communication'],
  },
  {
    category: 'Mathematics & Statistics',
    skills: ['Linear Algebra', 'Probability Theory', 'Statistical Inference', 'Calculus', 'Optimization', 'Time Series Analysis'],
  },
  {
    category: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'c'],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32 bg-bg">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl font-serif text-charcoal mb-12 sm:mb-16 md:mb-20"
        >
          Skills
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface rounded-3xl p-6 sm:p-8 border border-charcoal/5"
            >
              <p className="text-xs font-mono uppercase tracking-widest text-accent-terracotta mb-5">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-bg rounded-full text-sm font-medium text-charcoal/70 border border-charcoal/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
