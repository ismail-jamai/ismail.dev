
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  speed?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  once = true,
  delay = 0,
  speed = 40,
  tag = 'span'
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const visibleRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && (!once || !visibleRef.current)) {
          visibleRef.current = true;
          
          if (containerRef.current) {
            containerRef.current.innerHTML = '';
            
            // Apply initial delay
            setTimeout(() => {
              text.split('').forEach((char, i) => {
                setTimeout(() => {
                  if (containerRef.current) {
                    const span = document.createElement('span');
                    span.classList.add('opacity-0');
                    span.textContent = char;
                    containerRef.current.appendChild(span);
                    
                    // Force a reflow
                    void span.offsetWidth;
                    
                    span.classList.add('transition-opacity', 'duration-100');
                    span.classList.remove('opacity-0');
                  }
                }, i * speed);
              });
            }, delay);
          }
        } else if (!entry.isIntersecting && !once) {
          visibleRef.current = false;
        }
      },
      {
        threshold: 0.1
      }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [text, once, delay, speed]);
  
  const Tag = tag;
  
  return (
    <Tag ref={containerRef as any} className={cn('inline-block', className)}>
      {text.split('').map((char, i) => (
        <span key={i} className="opacity-0">{char}</span>
      ))}
    </Tag>
  );
};

export default AnimatedText;
