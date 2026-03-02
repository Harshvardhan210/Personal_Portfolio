import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import springBootCert from "../assets/Spring boot Certificate.pdf";
import jsCert from "../assets/JavaScript_Certification.pdf";
import reactCert from "../assets/React_certificate.pdf";
import isroCert from "../assets/isro_certificate.pdf";

const Certification = () => {
    const certifications = [
        {
            title: "Spring Framework for Java Development",
            issuer: "SkillUp (Coursera)",
            date: "2025",
            link: springBootCert,
            desc: "Comprehensive certification covering Spring Core, Spring Boot, Data Access, and building enterprise-grade Java applications."
        },
        {
            title: "Hands-On React. Build advanced React JS Frontend",
            issuer: "Udemy (Nick Ovchinnikov)",
            date: "2025",
            link: reactCert,
            desc: "Advanced React development course focused on building complex front-end applications with expert-level techniques."
        },
        {
            title: "JavaScript 20 Projects In 20 Days",
            issuer: "Udemy (Vijay Kumar)",
            date: "2025",
            link: jsCert,
            desc: "Project-based learning covering 20 diverse JavaScript applications to master DOM manipulation and core JS logic."
        },
        {
            title: "Overview of Space Science and Technology",
            issuer: "ISRO (Indian Space Research Organisation)",
            date: "2023",
            link: isroCert,
            desc: "Online training programme (START) providing a comprehensive introduction to space science and technology."
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
