import React from 'react';
import { Building2, Users2, Trophy, Heart } from 'lucide-react';
import { StatsCard } from './StatsCard';

const stats = [
  {
    icon: Building2,
    stat: "500+",
    label: "Partner Schools",
    description: "Schools nationwide trust FunDrobe for their fundraising needs"
  },
  {
    icon: Users2,
    stat: "100K+",
    label: "Students Supported",
    description: "Helping students achieve their educational goals"
  },
  {
    icon: Trophy,
    stat: "$2M+",
    label: "Funds Raised",
    description: "Total funds raised for our partner schools"
  },
  {
    icon: Heart,
    stat: "98%",
    label: "Satisfaction Rate",
    description: "Schools that would recommend FunDrobe to others"
  }
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
}