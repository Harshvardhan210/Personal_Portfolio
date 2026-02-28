import BentoCard from "../components/BentoCard";

const Projects = () => {
    const projects = [
        {
            title: "Orbion",
            category: "Game Dev",
            description: "3D Ball Adventure with physics-based puzzles built in Unity.",
            span: "md:col-span-2 md:row-span-2",
            pattern: (
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
                    <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                </svg>
            )
        },
        {
            title: "VitalViz",
            category: "Web App",
            description: "Medical report visualization platform for health metrics tracking.",
            span: "md:col-span-2 md:row-span-1",
            pattern: (
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100">
                    <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
                    <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
            )
        },
        {
            title: "Ball Adventure",
            category: "Unity",
            description: "Advanced 3D movement and environment design for Windows.",
            span: "md:col-span-1 md:row-span-1",
            pattern: (
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100">
                    <path d="M10 50 Q 50 10 90 50 T 10 50" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
            )
        },
        {
            title: "Portfolio V2",
            category: "React",
            description: "Responsive personal site showcasing skills and certificates.",
            span: "md:col-span-1 md:row-span-1",
            pattern: (
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100">
                    <circle cx="20" cy="20" r="5" fill="currentColor" />
                    <circle cx="80" cy="80" r="10" fill="currentColor" />
                </svg>
            )
        }
    ];

    return (
        <div className="flex flex-col gap-12">
            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-4">
                    <h2 className="text-xs uppercase tracking-[0.3em] font-black text-primary/60">Selected Work</h2>
                    <h3 className="text-5xl font-black tracking-tighter">Bento Portfolio</h3>
                </div>
                <button className="h-10 px-6 rounded-full glass-card text-[10px] font-black uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                    View all Projects
                </button>
            </div>

            <div className="bento-grid">
                {projects.map((project, index) => (
                    <BentoCard
                        key={index}
                        className={project.span}
                        delay={index * 0.1}
                    >
                        {project.pattern}
                        <div className="mt-auto relative z-20">
                            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-primary mb-2 block">
                                {project.category}
                            </span>
                            <h4 className="text-2xl font-black tracking-tighter mb-3 leading-none">{project.title}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px]">
                                {project.description}
                            </p>
                        </div>
                    </BentoCard>
                ))}
            </div>
        </div>
    );
};

export default Projects;
