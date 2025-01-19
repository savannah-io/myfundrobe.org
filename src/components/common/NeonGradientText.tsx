import React from 'react';

interface NeonGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function NeonGradientText({ children, className = '' }: NeonGradientTextProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      {/* Base text */}
      <span className="relative z-10 bg-gradient-to-r from-[#5de0e6] via-blue-400 to-[#4bc5cb] bg-clip-text text-transparent animate-gradient">
        {children}
      </span>
      
      {/* Glow effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-[#5de0e6] via-blue-400 to-[#4bc5cb] blur-xl opacity-30 animate-glow" />
    </span>
  );
}