const projectMeta = [
  {
    id: 'finly',
    name: 'Finly',
    repository: 'https://github.com/LucasBelhassof/finly',
    stack: ['React', 'Vite', 'TypeScript', 'Express', 'PostgreSQL'],
    startedAt: '2026',
    isInDevelopment: true,
    journeyOrder: 1,
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
    startedAt: '2025',
    isInDevelopment: true,
    journeyOrder: 2,
    isPrivate: true,
    featuredOnHome: true,
    featuredInJourney: true,
  },
  {
    id: 'nexa-system',
    name: 'NexaSystem',
    repository: 'https://github.com/LucasBelhassof/nexaSystem',
    stack: ['Laravel', 'Vue 3', 'Inertia', 'Vite', 'Tailwind CSS'],
    startedAt: '2025',
    isInDevelopment: true,
    journeyOrder: 3,
    isPrivate: true,
    featuredOnHome: true,
    featuredInJourney: true,
  },
  {
    id: 'cost',
    name: 'Cost',
    repository: 'https://github.com/LucasBelhassof/Cost',
    stack: ['React', 'CRA', 'React Router', 'JSON Server'],
    startedAt: '2025',
    isInDevelopment: false,
    journeyOrder: 4,
    featuredOnHome: true,
    featuredInJourney: true,
  },
  {
    id: 'real-trends-clone',
    name: 'RealTrends Clone',
    repository: 'https://github.com/LucasBelhassof/real-trends-clone',
    stack: ['Flutter', 'Dart'],
    startedAt: '2023',
    isInDevelopment: false,
    journeyOrder: 5,
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
  getProjectData(t)
    .filter((project) => project.featuredInJourney)
    .sort((projectA, projectB) => projectA.journeyOrder - projectB.journeyOrder);
