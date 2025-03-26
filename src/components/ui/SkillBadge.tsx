
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  className?: string;
  level?: number; // 1-10
}

const SkillBadge: React.FC<SkillBadgeProps> = ({
  name,
  icon,
  className,
  level = 0
}) => {
  return (
    <div 
      className={cn(
        'group relative flex items-center gap-2 px-4 py-3 rounded-lg',
        'bg-card/80 backdrop-blur-sm border border-border/50',
        'hover:border-primary/30 transition-all duration-300',
        'transform hover:-translate-y-1',
        className
      )}
    >
      {icon && (
        <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
          {icon}
        </div>
      )}
      
      <div className="flex flex-col">
        <span className="font-medium">{name}</span>
        
        {level > 0 && (
          <div className="mt-1 w-full h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
              style={{ width: `${level * 10}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillBadge;
