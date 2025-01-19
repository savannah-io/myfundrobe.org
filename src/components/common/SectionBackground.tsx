import React from 'react';

interface SectionBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionBackground({ children, className = '' }: SectionBackgroundProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#5de0e6]/5" />
      <div className="absolute -top-[500px] -right-[500px] w-[1000px] h-[1000px] rounded-full bg-[#5de0e6]/5 blur-3xl" />
      <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-[#5de0e6]/5 blur-3xl" />
      
      {/* Content */}
      <div className="relative">{children}</div>
    </section>
  );
}