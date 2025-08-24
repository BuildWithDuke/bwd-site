export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl: string;
  featured: boolean;
  category: 'fullstack' | 'ai-ml' | 'tool' | 'other';
  status: 'live' | 'development' | 'completed';
}

export interface ProjectCardProps {
  project: Project;
  index: number;
}