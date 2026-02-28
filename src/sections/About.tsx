import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section id="about" className="about-section" ref={elementRef}>
      <div className={`container about-wrapper reveal ${isVisible ? 'visible' : ''}`}>
        <div className="about-content">
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            About <span className="accent-text">Me</span>
          </h2>
          <p className="about-text">
            Hello! I'm a passionate developer with a deep love for creating
            elegant solutions to complex problems. My journey in tech started
            with a curiosity for how things work, and it has evolved into a
            career dedicated to building high-performance web applications.
          </p>
          <p className="about-text">
            I believe that great software is the intersection of robust
            functionality and human-centric design. Whether I'm architecting
            a backend system or polishing a frontend interaction, my goal is
            always to deliver a premium user experience.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">20+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
          </div>
        </div>

        <div className="about-visual glass">
          <div className="visual-box">
            {/* This would be an area for a photo or interactive visual */}
            <div className="visual-inner">
              <span className="accent-text" style={{ fontSize: '3rem', fontWeight: '800' }}>JS</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-wrapper {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 80px;
          align-items: center;
        }

        .about-text {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .about-stats {
          display: flex;
          gap: 40px;
          margin-top: 2rem;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          color: var(--accent-color);
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .about-visual {
          aspect-ratio: 1;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .visual-inner {
          width: 80%;
          height: 80%;
          border: 1px dashed var(--glass-border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 900px) {
          .about-wrapper {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-visual {
             order: -1;
             max-width: 300px;
             margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
