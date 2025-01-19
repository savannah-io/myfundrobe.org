import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="relative group">
      {/* Animated gradient background with consistent margin */}
      <div className="absolute -inset-[4px] bg-gradient-to-r from-[#5de0e6] to-[#4bc5cb] rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient bg-[length:200%_auto]" />
      
      {/* Card content with full coverage */}
      <div className="relative bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl h-full">
        <div className="text-[#5de0e6] mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}