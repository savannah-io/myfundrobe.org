import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureHighlightProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureHighlight({ icon: Icon, title, description }: FeatureHighlightProps) {
  return (
    <div className="relative group">
      {/* Animated gradient background */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#5de0e6] to-[#4bc5cb] rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient bg-[length:200%_auto]" />
      
      {/* Card content */}
      <div className="relative bg-white rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
        <div className="inline-block bg-[#5de0e6]/10 p-3 rounded-xl mb-6">
          <Icon className="w-8 h-8 text-[#5de0e6]" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
        
        {/* Additional decorative elements */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#5de0e6]/5 rounded-tl-[100px] -z-10" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#5de0e6]/10 rounded-full blur-3xl group-hover:bg-[#5de0e6]/20 transition-colors duration-300" />
      </div>
    </div>
  );
}