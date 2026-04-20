export const projectData = [
  {
    id: 'finly',
    name: 'Finly',
    subtitle: 'Full-stack finance platform',
    label: 'Featured',
    description:
      'Full-stack finance platform with dashboard, insights, chat, API endpoints and Postgres persistence.',
    repository: 'https://github.com/LucasBelhassof/finly',
    date: '2026',
    stack: ['React', 'Vite', 'TypeScript', 'Express', 'PostgreSQL'],
    highlights: [
      'Financial platform with dashboard, insights, chat and data persistence.',
      'Built with a dedicated backend, REST API endpoints and SQL migrations.',
      'Structured to run frontend and backend locally with a real database flow.',
    ],
    featuredOnHome: true,
    featuredInJourney: true,
  },
  {
    id: 'nexa-cliente',
    name: 'NexaSystem Cliente',
    subtitle: 'Client-facing business platform',
    label: 'Private case study',
    description:
      'Client-facing business system built with Laravel, Vue 3, Inertia and a modern operational stack.',
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
    featuredOnHome: true,
    featuredInJourney: true,
  },
  {
    id: 'nexa-system',
    name: 'NexaSystem',
    subtitle: 'Administrative core platform',
    label: 'Private case study',
    description:
      'Administrative core platform designed to support structured operations in the NexaSystem ecosystem.',
    repository: 'https://github.com/LucasBelhassof/nexaSystem',
    date: '2026',
    stack: ['Laravel', 'Vue 3', 'Inertia', 'Vite', 'Tailwind CSS'],
    highlights: [
      'Administrative system that complements the NexaSystem ecosystem.',
      'Built with Laravel 12, Vue 3 and Inertia to support a structured operations flow.',
      'Presented as a private case study because the repository is not public.',
    ],
    isPrivate: true,
    featuredOnHome: true,
    featuredInJourney: true,
  },
  {
    id: 'cost',
    name: 'Cost',
    subtitle: 'Project Manager',
    label: 'Project manager',
    description:
      'Project and budget management application focused on categories, services and CRUD flows.',
    repository: 'https://github.com/LucasBelhassof/Cost',
    date: '1 March 2025',
    stack: ['React', 'CRA', 'React Router', 'JSON Server'],
    highlights: [
      'Project manager focused on budgets, categories and service control.',
      'Includes CRUD flows to create projects and manage services within budget.',
      'Uses a lightweight local backend strategy for development and data simulation.',
    ],
    featuredOnHome: true,
    featuredInJourney: true,
  },
  {
    id: 'real-trends-clone',
    name: 'RealTrends Clone',
    subtitle: 'Flutter product interface recreation',
    label: 'UI clone',
    description:
      'Clone inspired by a marketplace-focused product, recreated in Flutter to demonstrate product execution and interface fidelity.',
    repository: 'https://github.com/LucasBelhassof/real-trends-clone',
    date: '25 September 2023',
    stack: ['Flutter', 'Dart'],
    highlights: [
      'Clone inspired by the Real Trends product and interface.',
      'Focused on reproducing key flows and the overall visual structure of the platform.',
      'Useful to demonstrate UI execution and product replication skills in Flutter.',
    ],
    featuredOnHome: false,
    featuredInJourney: true,
  },
];

export const homeFeaturedProjects = projectData.filter(
  (project) => project.featuredOnHome,
);

export const journeyFeaturedProjects = projectData.filter(
  (project) => project.featuredInJourney,
);
