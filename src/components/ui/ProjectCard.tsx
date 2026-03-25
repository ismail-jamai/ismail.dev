
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { fadeIn } from '@/lib/animations';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  fullStack?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  fullStack,
  index
}) => {
  return (
    <motion.div 
      variants={fadeIn('up', 'spring', index * 0.2, 1)}
      className="group relative bg-white/5 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-700 shadow-2xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
        
        {/* Hover Overlay Actions */}
        <div className="absolute top-6 right-6 flex gap-3 transform translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground backdrop-blur-md transition-all shadow-lg shadow-primary/20"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-8 space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div>
          <h3 className="text-2xl font-black group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
            {title}
          </h3>
          <p className="mt-3 text-muted-foreground leading-relaxed text-sm line-clamp-3">
            {description}
          </p>
          {fullStack && (
            <div className="mt-4 pt-4 border-t border-white/5">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1">Architecture</p>
              <p className="text-xs text-muted-foreground leading-relaxed italic">{fullStack}</p>
            </div>
          )}
        </div>

        <div className="pt-4 flex items-center justify-between">
          <a 
            href={liveUrl || githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 group/btn"
          >
            Explore Project
            <div className="w-8 h-px bg-primary/30 group-hover/btn:w-12 transition-all duration-300" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
