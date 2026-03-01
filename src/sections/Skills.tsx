import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const skillCategories = [
  {
    title: "Frontend Engineering",
    description: "Crafting immersive, high-performance user interfaces with modern React ecosystems and cutting-edge motion libraries.",
    skills: [
      { name: "React", icon: "https://icon.icepanel.io/technology/svg/React.svg" },
      { name: "TypeScript", icon: "https://icon.icepanel.io/technology/svg/TypeScript.svg" },
      { name: "Next.js", icon: "https://icon.icepanel.io/technology/svg/Next.js.svg" },
      { name: "Tailwind CSS", icon: "https://icon.icepanel.io/technology/svg/Tailwind-CSS.svg" },
      { name: "Redux", icon: "https://icon.icepanel.io/technology/svg/Redux.svg" },
      { name: "Framer Motion", icon: "https://icon.icepanel.io/technology/svg/Framer-Motion.svg" },
    ],
  },
  {
    title: "Backend Architecture",
    description: "Designing scalable server-side systems, robust API structures, and efficient data orchestration layers.",
    skills: [
      { name: "Node.js", icon: "https://icon.icepanel.io/technology/svg/Node.js.svg" },
      { name: "PostgreSQL", icon: "https://icon.icepanel.io/technology/svg/PostgreSQL.svg" },
      { name: "Firebase", icon: "https://icon.icepanel.io/technology/svg/Firebase.svg" },
    ],
  },
  {
    title: "Creative & DevOps",
    description: "Bridging the gap between 3D visualization, automated deployment, and seamless DX.",
    skills: [
      { name: "Docker", icon: "https://icon.icepanel.io/technology/svg/Docker.svg" },
      { name: "Git", icon: "https://icon.icepanel.io/technology/svg/Git.svg" },
      { name: "Three.js", icon: "https://icon.icepanel.io/technology/svg/Three.js.svg" },
    ],
  },
];

const SkillItem = ({ name, icon }: { name: string; icon: string }) => (
  <motion.div
    whileHover={{ scale: 1.05, x: 5 }}
    className="flex items-center gap-4 px-6 py-4 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all cursor-default"
  >
    <img src={icon} alt={name} className="w-8 h-8 object-contain" />
    <span className="text-sm font-black uppercase tracking-[0.2em] text-foreground/80">{name}</span>
  </motion.div>
);

const Layer = ({ category, index, activeIndex, setActiveIndex }: any) => {
  const isActive = activeIndex === index;

  return (
    <motion.div
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(null)}
      animate={{
        height: isActive ? "auto" : "100px",
        rotateX: isActive ? 0 : 20,
        y: isActive ? -20 : 0,
        z: isActive ? 50 : 0,
        scale: isActive ? 1.02 : 1,
      }}
      initial={false}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className={cn(
        "relative w-full glass-card overflow-hidden group cursor-pointer border-t-[1px]",
        isActive ? "bg-white/[0.08] border-primary/40 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] z-50 rounded-[3rem]" : "bg-white/[0.03] border-white/5 opacity-50 grayscale-[0.3] rounded-[2.5rem]"
      )}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="p-10 h-full flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-8">
            <span className="text-5xl font-black text-primary/10 italic leading-none">0{index + 1}</span>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-foreground leading-none">
              {category.title}
            </h3>
          </div>
          <div className={cn(
            "w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500",
            isActive ? "bg-primary text-black border-none scale-110" : "text-muted-foreground"
          )}>
            <svg className={cn("w-6 h-6 transition-transform", isActive ? "rotate-45" : "")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6v12m6-6H6" />
            </svg>
          </div>
        </div>

        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 pb-6">
                <p className="text-muted-foreground text-lg max-w-3xl mb-12 leading-relaxed font-medium">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill: any) => (
                    <SkillItem key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative large background icon */}
      <div className="absolute -right-16 -bottom-16 opacity-[0.02] pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-700">
        <img
          src={category.skills[0].icon}
          className="w-80 h-80 object-contain filter grayscale invert rotate-12"
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="section-container relative" style={{ perspective: "2000px" }}>
      <div className="flex flex-col items-center gap-6 mb-28 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full border border-border mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[12px] uppercase tracking-[0.3em] font-black text-muted-foreground">Expertise Architecture</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-9xl font-black tracking-tighter text-center leading-[0.75]"
        >
          Technical <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-mesh">
            Capabilities
          </span>
        </motion.h2>
      </div>

      <div className="flex flex-col gap-6 max-w-5xl mx-auto relative z-10">
        {skillCategories.map((category, idx) => (
          <Layer
            key={category.title}
            category={category}
            index={idx}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}

        {/* Dynamic Experience Card - Now integrated as a bottom layer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 glass-card p-12 rounded-[3.5rem] flex flex-col md:flex-row items-center justify-between gap-12 border-primary/10 hover:border-primary/30 transition-all duration-700 relative overflow-hidden group"
        >
          <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />

          <div className="flex flex-col gap-4 text-center md:text-left relative z-10">
            <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Stacking Knowledge</h4>
            <p className="text-muted-foreground text-lg max-w-xl font-medium">
              Over 3 years of continuous evolution, mastering tools that bridge the gap between creative vision and technical reality.
            </p>
          </div>

          <div className="flex items-center gap-6 relative z-10 group-hover:scale-110 transition-transform duration-500">
            <span className="text-7xl md:text-9xl font-black tracking-tighter text-primary italic drop-shadow-[0_0_30px_rgba(34,197,94,0.3)]">3+</span>
            <div className="flex flex-col">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground">Years of</span>
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Mastery</span>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] flex gap-20 pointer-events-none grayscale invert">
            {skillCategories[0].skills.slice(0, 4).map((s, i) => (
              <img key={i} src={s.icon} className="w-32 h-32" alt="" />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Extreme Background Blur Effects */}
      <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[200px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -bottom-1/4 right-0 w-[800px] h-[800px] bg-accent/5 blur-[180px] rounded-full pointer-events-none -z-10" />
    </div>
  );
}
