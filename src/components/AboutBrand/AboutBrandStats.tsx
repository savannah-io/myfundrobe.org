import React from 'react';
import { Building, Users, Trophy, Heart } from 'lucide-react';

const stats = [
  {
    icon: Building,
    stat: "500+",
    label: "Partner Schools"
  },
  {
    icon: Users,
    stat: "100K+",
    label: "Students Supported"
  },
  {
    icon: Trophy,
    stat: "$2M+",
    label: "Funds Raised"
  },
  {
    icon: Heart,
    stat: "98%",
    label: "Satisfaction Rate"
  }
];

export function AboutBrandStats() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {stats.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-[#5de0e6] mb-2">
            <item.icon className="w-6 h-6" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{item.stat}</div>
          <div className="text-sm text-gray-600">{item.label}</div>
        </div>
      ))}
    </div>
  );
}