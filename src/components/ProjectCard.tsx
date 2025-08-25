import { ProjectCardProps } from '@/types/project';
import Link from 'next/link';

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-green-500';
      case 'development': return 'bg-yellow-500';
      case 'completed': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Link href={`/projects/${project.id}`}>
      <div
        className="group relative bg-muted border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300 hover:-translate-y-2 fade-in-roll cursor-pointer"
        style={{ animationDelay: `${index * 0.15}s` }}
      >
      <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent-hover/20 flex items-center justify-center">
        <div className="text-4xl opacity-50">🚀</div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`} />
        </div>
        
        <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-md">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex gap-3 text-sm">
          {project.demoUrl && (
            <Link 
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition-colors flex items-center gap-1"
            >
              <span>Live Demo</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          )}
          {project.githubUrl && (
            <Link 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors flex items-center gap-1"
            >
              <span>Code</span>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </Link>
          )}
        </div>
      </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Link>
  );
};

export default ProjectCard;