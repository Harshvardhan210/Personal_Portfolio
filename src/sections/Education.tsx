import { motion } from "framer-motion";

const Education = () => {
    const education = [
        {
            school: "Master of Engineering in Computer Science",
            degree: "Shri Ram Institute of Technology",
            period: "2024 — 2026",
            desc: "Specialized in Computer Science and Engineering. Current CGPA: 7.21/10."
        },
        {
            school: "Bachelor of Technology in Computer Science",
            degree: "Shri Ram Institute of Technology",
            period: "2020 — 2024",
            desc: "Specialized in Computer Science and Engineering. Graduated with CGPA: 8.27/10."
        }
    ];

    return (
        <div className="flex flex-col gap-12">
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-black text-primary/60">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                        whileHover={{ scale: 1.01 }}
                        className="glass-card rounded-[2.5rem] p-10 flex flex-col gap-6 relative overflow-hidden group"
                    >
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/5 blur-3xl -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors" />
                        <div className="flex flex-col gap-2 relative z-10">
                            <span className="text-[10px] font-black text-accent tracking-[0.2em] uppercase">
                                {edu.period}
                            </span>
                            <h3 className="text-2xl font-bold tracking-tighter leading-tight">{edu.school}</h3>
                            <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest leading-none">{edu.degree}</p>
                        </div>
                        <p className="text-sm text-muted-foreground/60 font-medium leading-relaxed relative z-10">
                            {edu.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Education;
