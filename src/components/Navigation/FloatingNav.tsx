import { motion } from "motion/react";

export function FloatingNav() {
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
}
