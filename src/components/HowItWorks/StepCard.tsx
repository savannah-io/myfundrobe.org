import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isLast?: boolean;
}

export function StepCard({ number, title, description, icon: Icon, isLast }: StepCardProps) {
  return (
    <div className="relative group">
      {!isLast && (
        <div className="hidden lg:block absolute top-8 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-0.5 bg-[#5de0e6]/20" />
      )}
      
      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 relative z-10">
        <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#5de0e6] text-white rounded-xl flex items-center justify-center text-lg font-bold shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
          {number}
        </div>
        
        <div className="mb-6 text-[#5de0e6] transform group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
        
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#5de0e6]/5 rounded-tl-[100px] -z-10" />
      </div>
    </div>
  );
}