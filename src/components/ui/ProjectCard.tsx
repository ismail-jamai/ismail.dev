import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        'group relative bg-card rounded-xl overflow-hidden border border-border/50',
        'transition-all duration-500 ease-out',
        'hover:border-primary/30 hover:shadow-xl',
        'transform hover:-translate-y-2',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className={cn(
            'w-full h-full object-cover transition-transform duration-700',
            'group-hover:scale-110'
          )}
        />
        
        <div className={cn(
          'absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent',
          'transition-opacity duration-500',
          isHovered ? 'opacity-100' : 'opacity-0'
        )}>
          <div className={cn(
            'absolute bottom-0 left-0 w-full p-4 transform transition-all duration-500',
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          )}>
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs px-2 py-1 rounded-full bg-primary/20 text-white backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex gap-2">
              {githubUrl && (
                <a 
                  href={githubUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
                  aria-label={`GitHub repository for ${title}`}
                >
                  <Github className="w-4 h-4 text-white" />
                </a>
              )}
              
              {liveUrl && (
                <a 
                  href={liveUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
                  aria-label={`Live demo for ${title}`}
                >
                  <ExternalLink className="w-4 h-4 text-white" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
