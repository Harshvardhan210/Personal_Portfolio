import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const Certification = () => {
    const certifications = [
        {
            title: "Meta Front-End Developer Professional Certificate",
            issuer: "Meta (Coursera)",
            date: "2024",
            link: "#",
            desc: "Comprehensive certification covering React, JavaScript, Responsive Design, and Front-End Development best practices."
        },
        {
            title: "Java Full Stack Developer",
            issuer: "Example Certification Body",
            date: "2023",
            link: "#",
            desc: "In-depth training on Java, Spring Boot, SQL, and building scalable full-stack applications."
        }
    ];

    return (
        <div className="flex flex-col gap-12">
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-black text-primary/60">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                        className="glass-card rounded-[2.5rem] p-10 flex flex-col gap-6 group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />

                        <div className="flex justify-between items-start relative z-10">
                            <div className="p-3 bg-primary/10 rounded-2xl">
                                <Award size={24} className="text-primary" />
                            </div>
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                            >
                                <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>
                        </div>

                        <div className="flex flex-col gap-2 relative z-10">
                            <span className="text-[10px] font-black text-primary tracking-[0.2em] uppercase">
                                {cert.date} — {cert.issuer}
                            </span>
                            <h3 className="text-2xl font-medium tracking-tighter leading-tight group-hover:text-primary transition-colors">
                                {cert.title}
                            </h3>
                        </div>

                        <p className="text-sm text-muted-foreground/60 font-medium leading-relaxed relative z-10">
                            {cert.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Certification;
