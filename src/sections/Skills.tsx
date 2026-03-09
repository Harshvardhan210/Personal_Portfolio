import { motion } from "framer-motion";
import { cn } from "@/lib/utils";


const mainSkills = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", color: "193, 100%, 50%" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", color: "200, 100%, 40%" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", color: "200, 100%, 50%" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", color: "30, 80%, 50%" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", color: "140, 100%, 40%" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", color: "53, 93%, 54%" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", color: "37, 100%, 50%" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", color: "20, 100%, 50%" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg", color: "190, 100%, 50%" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", color: "200, 80%, 45%" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", color: "210, 100%, 40%" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", color: "0, 100%, 40%" },
  { name: "GitHub", icon: "devicon-github-original", color: "0, 0%, 100%" },
];

const GlassTile = ({ skill, index }: { skill: typeof mainSkills[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.05,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group cursor-none"
    >
      <div className="relative w-32 h-32 md:w-40 md:h-40 glass-card bg-white/[0.02] border border-white/5 group-hover:border-primary/20 transition-all duration-700 rounded-[2.5rem] flex flex-col items-center justify-center gap-4 overflow-hidden">
        {/* Subtle Ethereal Glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 blur-2xl"
          style={{ backgroundColor: `hsla(${skill.color}, 1)` }}
        />

        <div className="relative z-10 p-4 rounded-full bg-white/[0.02] group-hover:bg-transparent transition-colors duration-700 flex items-center justify-center">
          {skill.icon.startsWith("http") ? (
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-10 h-10 md:w-12 md:h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]"
            />
          ) : (
            <i className={cn(skill.icon, "text-4xl md:text-5xl filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]")} />
          )}
        </div>

        <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground group-hover:text-foreground transition-colors duration-700">
          {skill.name}
        </span>
      </div>

      {/* Zen Floating Animation Overlay */}
      <motion.div
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2
        }}
        className="absolute inset-x-0 -bottom-2 h-1 w-1/4 mx-auto bg-primary/20 blur-[4px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </motion.div>
  );
};

export default function Skills() {
  return (
    <div className="section-container relative min-h-[80vh] flex flex-col items-center justify-center py-20 overflow-hidden">
      {/* Refined Header */}
      <div className="flex flex-col items-center gap-8 mb-24 relative z-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-12 h-[1px] bg-primary/30"
        />

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-black tracking-tight text-center leading-[1.1]"
        >
          Technical <br />
          <span className="inline-block px-4 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary/80 via-foreground to-primary/80 bg-[length:200%_auto] animate-mesh italic">
            Skills
          </span>
        </motion.h2>
      </div>

      {/* Balanced Symmetrical Cluster */}
      <div className="w-full max-w-5xl mx-auto flex flex-wrap justify-center gap-6 md:gap-10 px-10 relative z-10">
        {mainSkills.map((skill, idx) => (
          <GlassTile key={skill.name} skill={skill} index={idx} />
        ))}
      </div>

      {/* Refined Custom Cursor Area - Hint */}
      <div className="mt-20 flex flex-col items-center opacity-20 group">
        <div className="w-px h-16 bg-gradient-to-b from-primary via-transparent to-transparent group-hover:h-24 transition-all duration-1000" />
      </div>

      {/* Ultra-Soft Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.03)_0%,transparent_70%)] pointer-events-none -z-10" />
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none mix-blend-overlay -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
