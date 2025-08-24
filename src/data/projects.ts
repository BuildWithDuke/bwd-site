import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'linecheck',
    title: 'LineCheck',
    description: 'AI-powered computer vision system detecting damaged electrical insulators in power transmission lines with 99.38% accuracy',
    technologies: ['Python', 'PyTorch', 'FastAI', 'ResNet-34', 'FastAPI', 'Docker'],
    githubUrl: 'https://github.com/DukeofWaterloo/LineCheck',
    imageUrl: '/projects/linecheck.jpg',
    featured: true,
    category: 'ai-ml',
    status: 'completed'
  },
  {
    id: 'eagle-eye',
    title: 'Eagle Eye',
    description: 'AI-powered B2B SaaS platform for managing and responding to online Google reviews with intelligent, context-aware responses',
    technologies: ['Python', 'Flask', 'Ollama', 'PostgreSQL', 'Celery', 'Docker'],
    githubUrl: 'https://github.com/DukeofWaterloo/Eagle-Eye',
    imageUrl: '/projects/eagle-eye.jpg',
    featured: true,
    category: 'ai-ml',
    status: 'live'
  },
  {
    id: 'compass',
    title: 'Compass',
    description: 'AI-powered course recommendation system for University of Waterloo students using LangChain and modern web technologies',
    technologies: ['Python', 'FastAPI', 'LangChain', 'React', 'TypeScript', 'SQLite'],
    githubUrl: 'https://github.com/DukeofWaterloo/Compass',
    imageUrl: '/projects/compass.jpg',
    featured: true,
    category: 'ai-ml',
    status: 'completed'
  },
  {
    id: 'educated-misfits',
    title: 'Educated Misfits',
    description: 'Full-stack e-commerce platform for campus culture apparel with Stripe integration, creator dashboard, and comprehensive business logic',
    technologies: ['Node.js', 'Express', 'Stripe API', 'HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/DukeofWaterloo/educated-misfits',
    imageUrl: '/projects/educated-misfits.jpg',
    featured: true,
    category: 'fullstack',
    status: 'live'
  },
  {
    id: 't-9',
    title: 'T-9 Ultimate Tic-Tac-Toe',
    description: 'Real-time multiplayer Ultimate Tic-Tac-Toe game with WebSocket communication, complex game logic, and responsive design',
    technologies: ['Go', 'Gin', 'SvelteKit', 'TypeScript', 'WebSocket'],
    githubUrl: 'https://github.com/DukeofWaterloo/T-9',
    imageUrl: '/projects/t9.jpg',
    featured: true,
    category: 'fullstack',
    status: 'live'
  },
  {
    id: 'pigeon',
    title: 'Pigeon',
    description: 'Minimalist ephemeral file-sharing application for trusted networks with automatic file cleanup and large file support',
    technologies: ['Node.js', 'Express', 'SQLite', 'Docker', 'HTML5'],
    githubUrl: 'https://github.com/DukeofWaterloo/pigeon',
    imageUrl: '/projects/pigeon.jpg',
    featured: true,
    category: 'tool',
    status: 'development'
  }
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured).slice(0, 6);
};