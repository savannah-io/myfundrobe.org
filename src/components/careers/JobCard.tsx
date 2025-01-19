import React from 'react';
import { MapPin, Clock } from 'lucide-react';

interface JobCardProps {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

export function JobCard({ title, department, location, type, description }: JobCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-[#5de0e6] font-medium">{department}</p>
      </div>
      
      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
        <span className="flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          {location}
        </span>
        <span className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {type}
        </span>
      </div>
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      <button className="w-full bg-[#5de0e6]/10 text-[#5de0e6] px-4 py-2 rounded-lg font-medium hover:bg-[#5de0e6]/20 transition-colors">
        View Position
      </button>
    </div>
  );
}