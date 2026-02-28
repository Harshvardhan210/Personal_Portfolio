import { motion } from "framer-motion";

const Work = () => {
    const experiences = [
        {
            company: "Appwizards Technology",
            role: "Quality Assurance Intern",
            period: "Jan 2026 — Present",
            desc: "Manual testing of web-based applications, functional and regression testing, and ensuring usability standards."
        },
        {
            company: "Mastek",
            role: "Application Developer Intern",
            period: "Jan 2024 — June 2024",
            desc: "Developing membership management systems, Java, SQL, and Agile methodology integration."
        },
    ];

    return (
        <div className="flex flex-col gap-12">
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-black text-primary/60">Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                        whileHover={{ y: -5 }}
                        className="glass-card rounded-[2.5rem] p-10 flex flex-col gap-6 group relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-24 h-24 bg-primary/5 blur-3xl -ml-12 -mt-12 group-hover:bg-primary/10 transition-colors" />
                        <div className="flex flex-col gap-2 relative z-10">
                            <span className="text-[10px] font-black text-primary tracking-[0.2em] uppercase">
                                {exp.period}
                            </span>
                            <h3 className="text-2xl font-medium tracking-tighter leading-tight">{exp.company}</h3>
                            <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest">{exp.role}</p>
                        </div>
                        <p className="text-sm text-muted-foreground/60 font-medium leading-relaxed relative z-10">
                            {exp.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Work;



