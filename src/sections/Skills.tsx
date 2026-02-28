import { useScrollReveal } from '../hooks/useScrollReveal';

const Skills = () => {
  const { elementRef, isVisible } = useScrollReveal();
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Redux", "Tailwind CSS", "Three.js"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "AWS", "Vercel", "Jest", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="glass-section" ref={elementRef}>
      <div className={`container reveal ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title">Technical <span className="accent-text">Skills</span></h2>
        <div className="skills-grid">
          {skillCategories.map((cat, index) => (
            <div key={index} className="skill-category glass">
              <h3>{cat.title}</h3>
              <div className="skill-list">
                {cat.skills.map(skill => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .skill-category {
          padding: 32px;
          border-radius: 16px;
        }

        .skill-category h3 {
          margin-bottom: 24px;
          font-size: 1.5rem;
          color: var(--accent-color);
        }

        .skill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .skill-badge {
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 50px;
          font-size: 0.9rem;
          transition: var(--transition-fast);
        }

        .skill-badge:hover {
          background: var(--accent-color);
          color: white;
          border-color: var(--accent-color);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default Skills;
