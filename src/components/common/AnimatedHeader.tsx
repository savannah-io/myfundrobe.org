import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface AnimatedHeaderProps {
  as?: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
  className?: string;
}

export function AnimatedHeader({ 
  as: Component = 'h2', 
  children, 
  className = '' 
}: AnimatedHeaderProps) {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <Component
      ref={elementRef}
      className={`transform transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </Component>
  );
}