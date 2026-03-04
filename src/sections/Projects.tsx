import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Marquee } from "@/components/magicui/marquee";
import { X, Github, Code2, Globe } from "lucide-react";

// ... (ProjectMarqueeCard component remains unchanged) ...

const ProjectMarqueeCard = ({ project, onClick }: { project: any; onClick: () => void }) => (
    <div
        onClick={onClick}
        className="group relative w-[350px] md:w-[450px] aspect-[1.6/1] glass-card rounded-[2.5rem] p-8 overflow-hidden cursor-pointer border-white/10 hover:border-primary/50 transition-all duration-500"
    >
        <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
            {project.pattern}
        </div>

        <div className="relative z-10 h-full flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-primary mb-2 block">
                {project.category}
            </span>
            <h4 className="text-3xl font-black tracking-tighter mb-4 leading-none group-hover:text-primary transition-colors">
                {project.title}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {project.description}
            </p>

            <div className="mt-auto flex items-center justify-between">
                <div className="flex gap-2">
                    {project.tech.slice(0, 2).map((tag: string) => (
                        <span key={tag} className="px-2 py-1 bg-primary/10 rounded-full border border-primary/20 text-[8px] font-bold text-muted-foreground">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Code2 size={16} className="text-white group-hover:text-primary-foreground" />
                </div>
            </div>
        </div>

        {/* Hover Glow */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
    </div>
);

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [isViewingAll, setIsViewingAll] = useState(false);

    useEffect(() => {
        if (selectedProject || isViewingAll) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedProject, isViewingAll]);

    const projects = [
        {
            id: "orbion",
            title: "Orbion",
            category: "Game Development",
            description: "3D Ball Adventure with physics-based puzzles built in Unity.",
            longDescription: "Orbion is a challenging 3D platformer where players control a high-tech sphere through increasingly complex environments. It features custom physics, dynamic lighting, and a unique 'gravity-shift' mechanic built from scratch in C#.",
            tech: ["Unity", "C#", "Blender", "Shader Graph"],
            github: "https://github.com/Harshvardhan210/Orbion---Ball-Adventure",
            demo: "#",
            pattern: (
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
            )
        },
        {
            id: "vitalviz",
            title: "VitalViz",
            category: "Medical Tech",
            description: "Medical report visualization platform for health metrics tracking.",
            longDescription: "VitalViz transforms complex medical data into intuitive, interactive dashboards. It helps patients and professionals track vital health trends over time with automated analysis and high-fidelity data visualization components.",
            tech: ["React", "TypeScript", "D3.js", "Tailwind CSS"],
            github: "https://github.com/Harshvardhan210/Medical-Report-Visualization",
            demo: "#",
            pattern: (
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100">
                    <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
                    <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
            )
        },
        {
            id: "ball-adventure",
            title: "Ball Adventure",
            category: "Unity Enterprise",
            description: "Advanced 3D movement and environment design for Windows.",
            longDescription: "A specialized project focusing on high-performance character controllers in Unity. Includes custom terrain generation and optimized rendering pipelines for mid-range hardware.",
            tech: ["Unity", "C#", "HLSL", "U-Render"],
            github: "https://github.com/Harshvardhan210/Adventure-Ball-Game",
            demo: "#",
            pattern: (
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100">
                    <path d="M10 50 Q 50 10 90 50 T 10 50" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
            )
        },
        // {
        //     id: "portfolio-v2",
        //     title: "Portfolio V2",
        //     category: "Web Engineering",
        //     description: "Responsive personal site showcasing skills and certificates.",
        //     longDescription: "My previous iteration focusing on clean typography and fast load times. Built with a focus on SEO and performance metrics, achieving a 100/100 Lighthouse score.",
        //     tech: ["React", "High-Performance CSS", "Vite", "SEO Utils"],
        //     github: "https://github.com/Harshvardhan210",
        //     demo: "#",
        //     pattern: (
        //         <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100">
        //             <circle cx="20" cy="20" r="5" fill="currentColor" />
        //             <circle cx="80" cy="80" r="10" fill="currentColor" />
        //         </svg>
        //     )
        // },
        {
            id: "cashflow",
            title: "CashFlow",
            category: "FinTech App",
            description: "Full-stack expense tracking web application.",
            longDescription: "A comprehensive expense tracker built with Spring Boot and PostgreSQL on the backend, and React on the frontend. It features data management and graphical representations of spending patterns to help users manage their finances effectively.",
            tech: ["Spring Boot", "React", "PostgreSQL", "Tailwind CSS"],
            github: "https://github.com/Harshvardhan210/cashflow-v1",
            demo: "https://cashflow-v1.onrender.com/landingpage.html",
            pattern: (
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100">
                    <rect x="20" y="20" width="60" height="60" rx="10" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
            )
        },
        {
            id: "codecandy",
            title: "CodeCandy",
            category: "Dev Tool",
            description: "Modern macOS-inspired code snippet manager.",
            longDescription: "CodeCandy is a sleek, macOS-inspired code snippet manager designed for developers who value both productivity and aesthetics. It allows users to create, organize, and manage multi-block code snippets with real-time search and dynamic light/dark theme switching. Features smooth micro-animations and secure local persistence.",
            tech: ["React", "Vite", "Framer Motion", "Firebase", "Lucide"],
            github: "https://github.com/Harshvardhan210/CodeCandy",
            demo: "https://codecandy.netlify.app/",
            pattern: (
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100">
                    <path d="M30 30 L70 30 L70 70 L30 70 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M30 40 L70 40 M30 50 L70 50 M30 60 L70 60" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                    <circle cx="35" cy="35" r="1.5" fill="currentColor" />
                    <circle cx="42" cy="35" r="1.5" fill="currentColor" />
                    <circle cx="49" cy="35" r="1.5" fill="currentColor" />
                </svg>
            )
        }
    ];

    return (
        <div className="flex flex-col gap-12 relative py-20">
            <div className="flex flex-col gap-4 text-center items-center px-6">
                <h2 className="text-xs uppercase tracking-[0.4em] font-black text-primary/60">My Work</h2>
                <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">Projects<span className="text-primary">.</span></h3>
            </div>

            <div className="relative w-full">
                <Marquee
                    pauseOnHover
                    className={`[--duration:15s] [--gap:2rem] py-10 ${(isViewingAll || selectedProject) ? '[&_div]:[animation-play-state:paused]' : ''}`}
                >
                    {projects.slice(0, 3).map((project) => (
                        <ProjectMarqueeCard
                            key={project.id}
                            project={project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </Marquee>

                {/* Side Fade Gradients */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background z-20" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background z-20" />
            </div>

            <div className="flex justify-center mt-4">
                <button
                    onClick={() => setIsViewingAll(true)}
                    className="px-8 py-4 glass-card rounded-full font-black text-sm uppercase tracking-widest hover:bg-primary/10 hover:text-primary transition-all border border-white/10 hover:border-primary/30"
                >
                    View All Projects
                </button>
            </div>

            <AnimatePresence>
                {/* View All Projects Modal */}
                {isViewingAll && !selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsViewingAll(false)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
                        />

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative w-full max-w-5xl h-[85vh] glass-card force-dark text-foreground rounded-[3rem] p-8 md:p-12 overflow-hidden flex flex-col border-white/20 shadow-2xl"
                        >
                            <div className="flex justify-between items-center mb-10 w-full shrink-0">
                                <div>
                                    <h2 className="text-4xl font-black tracking-tighter text-white">All Projects.</h2>
                                    <p className="text-white/60 text-sm mt-2 font-medium tracking-wide">A comprehensive list of my work and experiments.</p>
                                </div>
                                <button
                                    onClick={() => setIsViewingAll(false)}
                                    className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors text-white"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="overflow-y-auto pr-4 space-y-4 custom-scrollbar flex-1" data-lenis-prevent>
                                <div className="flex flex-col gap-4">
                                    {projects.map((project) => (
                                        <div
                                            key={project.id}
                                            onClick={() => setSelectedProject(project)}
                                            className="group relative glass-card border-white/10 hover:border-primary/50 text-white rounded-3xl p-6 md:p-8 cursor-pointer overflow-hidden transition-all duration-300 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center"
                                        >
                                            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                                                {project.pattern}
                                            </div>

                                            <div className="relative z-10 w-full md:w-1/3 shrink-0">
                                                <span className="text-[9px] uppercase tracking-[0.3em] font-black text-primary mb-2 block">
                                                    {project.category}
                                                </span>
                                                <h4 className="text-3xl font-black tracking-tighter leading-none group-hover:text-primary transition-colors text-white">
                                                    {project.title}
                                                </h4>
                                            </div>

                                            <div className="relative z-10 w-full md:w-2/3 flex flex-col gap-4">
                                                <p className="text-sm text-white/70 leading-relaxed">
                                                    {project.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tech.map((tag: string) => (
                                                        <span key={tag} className="px-3 py-1 bg-primary/10 rounded-full border border-primary/20 text-[9px] font-black uppercase tracking-wider text-muted-foreground">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Hover Glow */}
                                            <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}

                {/* Individual Project Detail Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 md:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
                        />

                        <motion.div
                            layoutId={`modal-target-${selectedProject.id}`}
                            className="relative w-full max-w-5xl glass-card force-dark text-foreground rounded-[3rem] p-8 md:p-16 overflow-hidden flex flex-col lg:flex-row gap-12 border-white/20 shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-8 right-8 w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors z-50 text-white"
                            >
                                <X size={20} />
                            </button>

                            <div className="w-full lg:w-1/2 aspect-video lg:aspect-square rounded-[2rem] bg-white/5 relative overflow-hidden flex items-center justify-center border border-white/5">
                                <div className="absolute inset-0 opacity-5">
                                    {selectedProject.pattern}
                                </div>
                                <Code2 size={160} className="text-primary opacity-10" />

                                <div className="absolute bottom-8 left-8 right-8 flex gap-3">
                                    <div className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/60">
                                        Release v1.2
                                    </div>
                                    <div className="px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary">
                                        Live Production
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 flex flex-col gap-10">
                                <div>
                                    <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-6 block">
                                        {selectedProject.category}
                                    </span>
                                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] mb-8 text-white">
                                        {selectedProject.title}
                                    </h2>
                                    <p className="text-lg text-white/70 leading-relaxed font-medium">
                                        {selectedProject.longDescription}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((tag: string) => (
                                            <span key={tag} className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-[10px] font-black uppercase text-white tracking-widest">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto flex gap-4">
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        className="h-16 flex-1 flex items-center justify-center gap-3 rounded-full bg-white/5 border border-white/20 font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-colors text-white"
                                    >
                                        <Github size={18} /> Source
                                    </a>
                                    {selectedProject.demo !== "#" && (
                                        <a
                                            href={selectedProject.demo}
                                            target="_blank"
                                            className="h-16 flex-1 flex items-center justify-center gap-3 rounded-full bg-primary text-primary-foreground font-black text-xs uppercase tracking-widest hover:shadow-[0_0_40px_-10px_hsl(var(--primary))] transition-all"
                                        >
                                            <Globe size={18} /> Launch
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;
