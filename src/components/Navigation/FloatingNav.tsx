import { motion } from "motion/react";
import { useDarkMode } from "@/src/hooks/useDarkMode";
import { Sun, Moon } from "lucide-react";

export function FloatingNav() {
  const { isDark, toggle } = useDarkMode();

  return (
    <motion.nav 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3"
    >
      <div className="glass px-4 py-2.5 sm:px-6 sm:py-3 rounded-full flex items-center gap-4 sm:gap-8 shadow-lg">
        {["Home", "Skills", "Work", "Projects", "Contact"].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      
      <button
        onClick={toggle}
        className="glass p-3 rounded-full shadow-lg text-charcoal hover:scale-110 transition-transform"
        aria-label="Toggle dark mode"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </motion.nav>
  );
}
