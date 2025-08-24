import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'ai-chat-assistant',
    title: 'AI Chat Assistant',
    description: 'Intelligent conversational AI built with modern ML frameworks',
    technologies: ['Python', 'FastAPI', 'OpenAI', 'React', 'WebSocket'],
    demoUrl: 'https://chat.buildwithduke.com',
    githubUrl: 'https://github.com/duke/ai-chat',
    imageUrl: '/projects/ai-chat.jpg',
    featured: true,
    category: 'ai-ml',
    status: 'live'
  },
  {
    id: 'task-automation-suite',
    title: 'Task Automation Suite',
    description: 'Personal productivity tool that automates daily workflows',
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Next.js'],
    demoUrl: 'https://automation.buildwithduke.com',
    githubUrl: 'https://github.com/duke/task-automation',
    imageUrl: '/projects/automation.jpg',
    featured: true,
    category: 'fullstack',
    status: 'live'
  },
  {
    id: 'ml-image-classifier',
    title: 'ML Image Classifier',
    description: 'Real-time image classification using custom trained models',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'Docker'],
    demoUrl: 'https://classify.buildwithduke.com',
    githubUrl: 'https://github.com/duke/ml-classifier',
    imageUrl: '/projects/classifier.jpg',
    featured: true,
    category: 'ai-ml',
    status: 'live'
  },
  {
    id: 'expense-tracker',
    title: 'Smart Expense Tracker',
    description: 'AI-powered expense categorization and budget insights',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Python'],
    demoUrl: 'https://expenses.buildwithduke.com',
    githubUrl: 'https://github.com/duke/expense-tracker',
    imageUrl: '/projects/expenses.jpg',
    featured: true,
    category: 'fullstack',
    status: 'development'
  },
  {
    id: 'code-review-bot',
    title: 'Code Review Bot',
    description: 'Automated code review assistant using LLMs',
    technologies: ['Python', 'GitHub API', 'OpenAI', 'Docker'],
    githubUrl: 'https://github.com/duke/code-review-bot',
    imageUrl: '/projects/code-review.jpg',
    featured: true,
    category: 'tool',
    status: 'completed'
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Analytics Dashboard',
    description: 'Interactive weather data visualization and forecasting',
    technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
    demoUrl: 'https://weather.buildwithduke.com',
    githubUrl: 'https://github.com/duke/weather-dashboard',
    imageUrl: '/projects/weather.jpg',
    featured: true,
    category: 'fullstack',
    status: 'live'
  }
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured).slice(0, 6);
};