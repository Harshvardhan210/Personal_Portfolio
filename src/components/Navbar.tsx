import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.toLowerCase());
    if (!element) return;
    // @ts-ignore
    if (window.lenis) {
      // @ts-ignore
      window.lenis.scrollTo(element, {
        offset: -100,
        duration: 1.5,
      });
    } else {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 px-4 md:px-6 py-2.5 md:py-3 glass-card rounded-full flex items-center gap-4 md:gap-8 border-white/5 active:scale-95 transition-transform duration-300 w-[90%] md:w-auto justify-between md:justify-start"
    >
      <a
        href="#hero"
        onClick={(e) => scrollToSection(e, "hero")}
        className="text-sm font-black tracking-tighter hover:text-primary transition-colors shrink-0 py-1"
      >
        HT.
      </a>

      <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />

      <div className="flex items-center gap-4 md:gap-6">
        {["Experience", "Project", "Certification", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={(e) => scrollToSection(e, item === "Experience" ? "work" : item === "Project" ? "projects" : item === "Certification" ? "certification" : "contact")}
            className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="h-4 w-[1px] bg-white/10" />

      <button
        onClick={toggleTheme}
        className="p-1.5 md:p-2 rounded-full hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 shrink-0"
      >
        {theme === "dark" ? <Sun size={14} className="text-primary" /> : <Moon size={14} />}
      </button>
    </motion.nav>
  );
};

export default Navbar;
