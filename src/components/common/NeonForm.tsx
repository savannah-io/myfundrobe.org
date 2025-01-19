import React from 'react';

interface NeonFormContainerProps {
  children: React.ReactNode;
  title: string;
}

export function NeonFormContainer({ children, title }: NeonFormContainerProps) {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_50px_rgba(93,224,230,0.3)] relative overflow-hidden group hover:shadow-[0_0_80px_rgba(93,224,230,0.4)] transition-all duration-500">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#5de0e6]/5 via-blue-400/5 to-[#4bc5cb]/5 animate-gradient opacity-50" />
      
      {/* Glow Effects */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#5de0e6]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#5de0e6]/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#5de0e6] to-[#4bc5cb] bg-clip-text text-transparent animate-gradient mb-6">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}