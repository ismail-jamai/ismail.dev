
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
        'group relative overflow-hidden rounded-xl transition-all duration-500',
        'bg-card border border-border/40 hover:border-primary/30',
        'transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        
        <div className={cn(
          'absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300',
          isHovered ? 'opacity-100' : ''
        )} />
        
        <div className={cn(
          'absolute bottom-0 left-0 w-full p-4 transform translate-y-4 opacity-0 transition-all duration-300',
          isHovered ? 'translate-y-0 opacity-100' : ''
        )}>
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/20 text-white backdrop-blur-sm">
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
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
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
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                aria-label={`Live demo for ${title}`}
              >
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
