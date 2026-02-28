const ProjectCard = ({ title, description, tags, image, link }: {
    title: string;
    description: string;
    tags: string[];
    image: string;
    link: string;
}) => {
    return (
        <div className="project-card glass">
            <div className="project-image-container">
                <img src={image} alt={title} className="project-image" />
                <div className="project-overlay">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="btn">View Project</a>
                </div>
            </div>
            <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project-tags">
                    {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
            </div>

            <style>{`
        .project-card {
          border-radius: 16px;
          overflow: hidden;
          transition: var(--transition-slow);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent-color);
        }

        .project-image-container {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-slow);
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 10, 12, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition-fast);
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-info {
          padding: 24px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .project-info h3 {
          margin-bottom: 12px;
          font-size: 1.25rem;
        }

        .project-info p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tag {
          font-size: 0.75rem;
          padding: 4px 10px;
          background: rgba(99, 102, 241, 0.1);
          color: var(--accent-color);
          border-radius: 4px;
          font-weight: 600;
        }
      `}</style>
        </div>
    );
};

export default ProjectCard;
