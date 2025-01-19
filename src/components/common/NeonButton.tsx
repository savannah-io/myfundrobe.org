import React from 'react';

interface NeonButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export function NeonButton({ children, type = 'button', onClick }: NeonButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-gradient-to-r from-[#5de0e6] to-[#4bc5cb] text-gray-900 px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(93,224,230,0.3)] hover:shadow-[0_0_30px_rgba(93,224,230,0.5)] relative overflow-hidden group"
    >
      <span className="relative z-10 flex items-center justify-center space-x-2">
        {children}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-[#5de0e6] via-blue-400 to-[#4bc5cb] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient" />
    </button>
  );
}