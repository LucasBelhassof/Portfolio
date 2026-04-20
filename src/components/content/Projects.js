import { projectData } from '../../data/projectData';

const Projects = () => {
  return (
    <div
      className="container mx-4 my-4 p-4 bg-light rounded shadow"
      style={{
        maxWidth: '800px',
      }}
    >
      {projectData.map((project) => (
        <div key={project.name}>
          <div className="mb-3 pb-2 border-bottom">
            <h3 className="m-0 text-dark" style={{ fontSize: '24px' }}>
              {project.name}{' '}
              <span style={{ fontSize: '18px' }}>{project.subtitle}</span>{' '}
              {project.isPrivate ? (
                <span
                  className="border border-gray-300 rounded-pill px-2 small"
                  style={{ fontSize: '13px' }}
                >
                  Private Repository
                </span>
              ) : (
                <a
                  className="text-reset text-decoration-none"
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '18px' }}
                >
                  {'//Code'}
                </a>
              )}
            </h3>
            <div className="d-flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <div
                  key={`${project.name}-${item}`}
                  className="mt-1 border border-gray-300 rounded-pill px-2 small"
                  style={{ fontSize: '12px' }}
                >
                  {item}
                </div>
              ))}
            </div>
            <h4
              className="mt-1 mb-2 text-secondary"
              style={{ fontSize: '16px' }}
            >
              {project.date}
            </h4>
          </div>
          <ul
            className="mb-3"
            style={{
              listStyleType: 'disc',
              paddingLeft: '20px',
              color: 'var(--muted)',
              margin: '0 0 20px',
            }}
          >
            {project.highlights.map((highlight) => (
              <li key={`${project.name}-${highlight}`} className="mb-2">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Projects;
