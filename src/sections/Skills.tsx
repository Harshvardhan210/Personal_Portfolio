import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "https://icon.icepanel.io/technology/svg/React.svg" },
      { name: "TypeScript", icon: "https://icon.icepanel.io/technology/svg/TypeScript.svg" },
      { name: "Next.js", icon: "https://icon.icepanel.io/technology/svg/Next.js.svg" },
      { name: "Tailwind CSS", icon: "https://icon.icepanel.io/technology/svg/Tailwind-CSS.svg" },
      { name: "Redux", icon: "https://icon.icepanel.io/technology/svg/Redux.svg" },
      { name: "Framer Motion", icon: "https://icon.icepanel.io/technology/svg/Framer-Motion.svg" },
    ],
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "https://icon.icepanel.io/technology/svg/Node.js.svg" },
      { name: "PostgreSQL", icon: "https://icon.icepanel.io/technology/svg/PostgreSQL.svg" },
      { name: "Firebase", icon: "https://icon.icepanel.io/technology/svg/Firebase.svg" },
    ],
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Docker", icon: "https://icon.icepanel.io/technology/svg/Docker.svg" },
      { name: "Git", icon: "https://icon.icepanel.io/technology/svg/Git.svg" },
      { name: "Three.js", icon: "https://icon.icepanel.io/technology/svg/Three.js.svg" },
    ],
    className: "md:col-span-2 md:row-span-1",
  },
];

const SkillBadge = ({ name, icon }: { name: string; icon: string }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -2 }}
    className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all group cursor-default"
  >
    <img src={icon} alt={name} className="w-6 h-6 object-contain opacity-90 group-hover:scale-110 transition-transform" />
    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
      {name}
    </span>
  </motion.div>
);

export default function Skills() {
  return (
    <div className="section-container relative">
      <div className="flex flex-col items-center gap-6 mb-20 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-muted rounded-full border border-border mb-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-black text-muted-foreground">Expertise</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tighter text-center leading-[0.8]"
        >
          Technical <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-mesh">
            Capabilities
          </span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={cn(
              "glass-card p-8 rounded-[2.5rem] relative overflow-hidden group",
              category.className
            )}
          >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Large Decorative Background Icon */}
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700 pointer-events-none">
              <img
                src={category.skills[0].icon}
                className="w-48 h-48 object-contain filter grayscale invert"
                alt=""
              />
            </div>

            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-xl font-black uppercase tracking-widest mb-8 text-foreground/80">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3 mt-auto">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill.name} {...skill} />
                ))}
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 blur-[50px] rounded-full group-hover:bg-primary/20 transition-colors duration-700" />
          </motion.div>
        ))}

        {/* Dynamic Experience Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-4 glass-card p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group"
        >
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />

          <div className="flex flex-col gap-2 text-center md:text-left relative z-10">
            <h4 className="text-2xl font-black uppercase tracking-tighter">Always Learning</h4>
            <p className="text-muted-foreground text-sm max-w-md">
              Continuously exploring emerging technologies to build more robust and performant digital solutions.
            </p>
          </div>

          <div className="flex items-baseline gap-2 relative z-10">
            <span className="text-6xl font-black tracking-tighter text-primary italic">3+</span>
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Years of <br />Coding</span>
          </div>

          {/* Decorative icons for experience card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] flex gap-12 pointer-events-none">
            {skillCategories[0].skills.slice(0, 3).map((s, i) => (
              <img key={i} src={s.icon} className="w-32 h-32 filter grayscale invert" alt="" />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-0" />
    </div>
  );
}

