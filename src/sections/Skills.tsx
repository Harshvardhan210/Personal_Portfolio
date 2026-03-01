import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

const mainSkills = [
  { name: "React", icon: "https://icon.icepanel.io/technology/svg/React.svg", color: "150, 100%, 50%" },
  { name: "TypeScript", icon: "https://icon.icepanel.io/technology/svg/TypeScript.svg", color: "210, 100%, 50%" },
  { name: "Node.js", icon: "https://icon.icepanel.io/technology/svg/Node.js.svg", color: "140, 100%, 40%" },
  { name: "Next.js", icon: "https://icon.icepanel.io/technology/svg/Next.js.svg", color: "0, 0%, 100%" },
  { name: "Tailwind", icon: "https://icon.icepanel.io/technology/svg/Tailwind-CSS.svg", color: "190, 100%, 50%" },
  { name: "PostgreSQL", icon: "https://icon.icepanel.io/technology/svg/PostgreSQL.svg", color: "200, 100%, 40%" },
  { name: "Docker", icon: "https://icon.icepanel.io/technology/svg/Docker.svg", color: "200, 100%, 50%" },
  { name: "Framer", icon: "https://icon.icepanel.io/technology/svg/Framer-Motion.svg", color: "300, 100%, 50%" },
];

const SkillPillar = ({ skill, index }: { skill: typeof mainSkills[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
      whileHover={{ y: -20 }}
      className="relative group cursor-default"
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full"
        style={{ backgroundColor: `hsla(${skill.color}, 1)` }}
      />

      <div className="relative glass-card flex flex-col items-center justify-center p-8 md:p-12 w-full md:w-[150px] aspect-[2/3] md:aspect-[3/5] rounded-[3rem] border border-white/5 group-hover:border-primary/30 transition-all duration-500 overflow-hidden">
        {/* Environmental Reflection Effect */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent skew-y-12 -translate-y-full group-hover:translate-y-0 transition-transform duration-1000" />

        <div className="relative z-10 flex flex-col items-center gap-8 h-full">
          <div className="mt-4 p-4 rounded-3xl bg-white/[0.03] border border-white/5 group-hover:bg-white/[0.08] group-hover:scale-110 transition-all duration-500">
            <img src={skill.icon} alt={skill.name} className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
          </div>

          <div className="mt-auto items-center flex flex-col gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground group-hover:text-primary transition-colors">Tech</span>
            <h3 className="text-sm md:text-base font-black uppercase tracking-widest text-foreground text-center line-clamp-1">
              {skill.name}
            </h3>
          </div>
        </div>

        {/* Dynamic Light Strip */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
      </div>

      {/* Vertical Title (Hidden on mobile) */}
      <div className="absolute -left-12 top-1/2 -rotate-90 origin-center pointer-events-none hidden md:block">
        <span className="text-[8px] font-black uppercase tracking-[1em] text-white/5 group-hover:text-white/10 transition-colors">EXPERTISE</span>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <div className="section-container relative min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-6 mb-32 relative z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="px-6 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-md mb-4"
        >
          <span className="text-[12px] uppercase tracking-[0.5em] font-black text-primary">Core Arsenal</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-7xl md:text-[10rem] font-black tracking-tighter text-center leading-[0.7] md:leading-[0.7]"
        >
          Power <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-mesh">
            Stack
          </span>
        </motion.h2>
      </div>

      {/* Centered Pillar Layout */}
      <div className="w-full max-w-7xl mx-auto flex flex-wrap justify-center gap-6 md:gap-8 px-6 relative z-10">
        {mainSkills.map((skill, idx) => (
          <SkillPillar key={skill.name} skill={skill} index={idx} />
        ))}
      </div>

      {/* Floating Experience Tag */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-32 flex flex-col items-center gap-4 text-center"
      >
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <p className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground">3+ Years of Refined Craft</p>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
      </motion.div>

      {/* Intense Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square bg-primary/5 blur-[200px] rounded-full pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] pointer-events-none -z-0" />
    </div>
  );
}
