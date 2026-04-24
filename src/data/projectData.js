const projectMeta = [
  {
    id: 'finly',
    name: 'Finly',
    repository: 'https://github.com/LucasBelhassof/finly',
    stack: ['React', 'Vite', 'TypeScript', 'Express', 'PostgreSQL'],
    featuredOnHome: true,
    featuredInJourney: true,
  },
  {
    id: 'nexa-cliente',
    name: 'NexaSystem Client',
    repository: 'https://github.com/LucasBelhassof/nexaSystem_Cliente',
    landingPage: 'https://www.nexasystem.com.br',
    stack: [
      'Laravel',
      'Vue 3',
      'Inertia',
      'Vite',
      'Tailwind CSS',
      'TypeScript',
    ],
    isPrivate: true,
    featuredOnHome: true,
    featuredInJourney: true,
  },
  {
    id: 'nexa-system',
    name: 'NexaSystem',
    repository: 'https://github.com/LucasBelhassof/nexaSystem',
    stack: ['Laravel', 'Vue 3', 'Inertia', 'Vite', 'Tailwind CSS'],
    isPrivate: true,
    featuredOnHome: true,
    featuredInJourney: true,
  },
  {
    id: 'cost',
    name: 'Cost',
    repository: 'https://github.com/LucasBelhassof/Cost',
    stack: ['React', 'CRA', 'React Router', 'JSON Server'],
    featuredOnHome: true,
    featuredInJourney: true,
  },
  {
    id: 'real-trends-clone',
    name: 'RealTrends Clone',
    repository: 'https://github.com/LucasBelhassof/real-trends-clone',
    stack: ['Flutter', 'Dart'],
    featuredOnHome: false,
    featuredInJourney: true,
  },
];

export const getProjectData = (t) =>
  projectMeta.map((project) => ({
    ...project,
    ...t(`projects.items.${project.id}`, {
      returnObjects: true,
    }),
  }));

export const getHomeFeaturedProjects = (t) =>
  getProjectData(t).filter((project) => project.featuredOnHome);

export const getJourneyFeaturedProjects = (t) =>
  getProjectData(t).filter((project) => project.featuredInJourney);
