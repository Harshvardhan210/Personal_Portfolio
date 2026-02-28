import { useScrollReveal } from '../hooks/useScrollReveal';

const Experience = () => {
    const { elementRef, isVisible } = useScrollReveal();

    const education = [
        {
            title: "Master of Engineering in Computer Science",
            institution: "Example University",
            period: "2022 - 2024",
            description: "Focused on Advanced Algorithms, Machine Learning, and Cloud Computing."
        },
        {
            title: "Bachelor of Technology in Computer Science",
            institution: "State Engineering College",
            period: "2018 - 2022",
            description: "Foundation in Software Development, Database Management, and Networking."
        }
    ];

    const internships = [
        {
            title: "Full-Stack Intern",
            company: "Tech Solutions Inc.",
            period: "Summer 2023",
            description: "Developed responsive React components and optimized backend API performance."
        },
        {
            title: "QA Intern",
            company: "Innovate Software",
            period: "Winter 2021",
            description: "Conducted automated testing and identified critical performance bottlenecks."
        }
    ];

    return (
        <section id="experience" className="experience-section" ref={elementRef}>
            <div className={`container reveal ${isVisible ? 'visible' : ''}`}>
                <h2 className="section-title">My <span className="accent-text">Journey</span></h2>

                <div className="experience-grid">
                    <div className="timeline-column">
                        <h3 className="column-title">Education</h3>
                        <div className="timeline">
                            {education.map((item, index) => (
                                <div key={index} className={`timeline-item reveal reveal-${(index % 5) + 1} ${isVisible ? 'visible' : ''}`}>
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <span className="timeline-date">{item.period}</span>
                                        <h4>{item.title}</h4>
                                        <p className="institution">{item.institution}</p>
                                        <p className="description">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="timeline-column">
                        <h3 className="column-title">Internships</h3>
                        <div className="timeline">
                            {internships.map((item, index) => (
                                <div key={index} className={`timeline-item reveal reveal-${(index % 5) + 1} ${isVisible ? 'visible' : ''}`}>
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <span className="timeline-date">{item.period}</span>
                                        <h4>{item.title}</h4>
                                        <p className="institution">{item.company}</p>
                                        <p className="description">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .experience-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .column-title {
          font-size: 1.8rem;
          margin-bottom: 2rem;
          color: var(--text-primary);
        }

        .timeline {
          position: relative;
          padding-left: 30px;
          border-left: 1px solid var(--glass-border);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 40px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          left: -36px;
          top: 5px;
          width: 10px;
          height: 10px;
          background-color: var(--accent-color);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-color);
        }

        .timeline-date {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-color);
          margin-bottom: 8px;
          padding: 4px 12px;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 4px;
        }

        .timeline-content h4 {
          font-size: 1.2rem;
          margin-bottom: 4px;
        }

        .timeline-content .institution {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-primary);
          opacity: 0.8;
          margin-bottom: 12px;
        }

        .timeline-content .description {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        @media (max-width: 900px) {
          .experience-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
        </section>
    );
};

export default Experience;
