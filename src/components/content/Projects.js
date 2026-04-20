const projectList = [
  {
    name: 'Finly',
    subtitle: 'Full-stack finance platform',
    repository: 'https://github.com/LucasBelhassof/finly',
    date: '2026',
    stack: ['React', 'Vite', 'TypeScript', 'Express', 'PostgreSQL'],
    highlights: [
      'Financial platform with dashboard, insights, chat and data persistence.',
      'Built with a dedicated backend, REST API endpoints and SQL migrations.',
      'Structured to run frontend and backend locally with a real database flow.',
    ],
  },
  {
    name: 'NexaSystem Cliente',
    subtitle: 'Client-facing business platform',
    repository: 'https://github.com/LucasBelhassof/nexaSystem_Cliente',
    date: '2026',
    stack: [
      'Laravel',
      'Vue 3',
      'Inertia',
      'Vite',
      'Tailwind CSS',
      'TypeScript',
    ],
    highlights: [
      'Client-oriented system built on Laravel and Vue 3 with a modern web stack.',
      'Includes business features such as real-time communication and payment integrations.',
      'Presented as a private case study because the repository is not public.',
    ],
    isPrivate: true,
  },
  {
    name: 'NexaSystem',
    subtitle: 'Administrative core platform',
    repository: 'https://github.com/LucasBelhassof/nexaSystem',
    date: '2026',
    stack: ['Laravel', 'Vue 3', 'Inertia', 'Vite', 'Tailwind CSS'],
    highlights: [
      'Administrative system that complements the NexaSystem ecosystem.',
      'Built with Laravel 12, Vue 3 and Inertia to support a structured operations flow.',
      'Presented as a private case study because the repository is not public.',
    ],
    isPrivate: true,
  },
  {
    name: 'Cost',
    subtitle: 'Project Manager',
    repository: 'https://github.com/LucasBelhassof/Cost',
    date: '1 March 2025',
    stack: ['React', 'CRA', 'React Router', 'JSON Server'],
    highlights: [
      'Project manager focused on budgets, categories and service control.',
      'Includes CRUD flows to create projects and manage services within budget.',
      'Uses a lightweight local backend strategy for development and data simulation.',
    ],
  },
  {
    name: 'RealTrends Clone',
    subtitle: 'Flutter product interface recreation',
    repository: 'https://github.com/LucasBelhassof/real-trends-clone',
    date: '25 September 2023',
    stack: ['Flutter', 'Dart'],
    highlights: [
      'Clone inspired by the Real Trends product and interface.',
      'Focused on reproducing key flows and the overall visual structure of the platform.',
      'Useful to demonstrate UI execution and product replication skills in Flutter.',
    ],
  },
];

const Projects = () => {
  return (
    <div
      className="container mx-4 my-4 p-4 bg-light rounded shadow"
      style={{
        maxWidth: '800px',
      }}
    >
      {projectList.map((project) => (
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
