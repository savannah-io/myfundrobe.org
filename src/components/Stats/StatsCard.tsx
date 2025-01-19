import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  stat: string;
  label: string;
  description: string;
}

export function StatsCard({ icon: Icon, stat, label, description }: StatsCardProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-[#5de0e6]/20 rounded-xl group-hover:bg-[#5de0e6]/30 transition-colors">
          <Icon className="w-6 h-6 text-[#5de0e6]" />
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900">{stat}</div>
          <div className="text-sm font-medium text-gray-700 mb-2">{label}</div>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}