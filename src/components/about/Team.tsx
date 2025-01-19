import React from 'react';
import { AnimatedHeader } from '../common/AnimatedHeader';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    bio: 'Former educator passionate about revolutionizing school fundraising.'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    bio: 'Creative director with 15+ years in apparel design and branding.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Community Success',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    bio: 'Dedicated to helping schools achieve their fundraising goals.'
  }
];

export function Team() {
  return (
    <div className="mb-20">
      <AnimatedHeader className="text-3xl font-bold text-center text-gray-900 mb-16">
        Meet Our Team
      </AnimatedHeader>
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-center text-gray-900 mb-1">
              {member.name}
            </h3>
            <p className="text-[#5de0e6] text-sm text-center mb-3">
              {member.role}
            </p>
            <p className="text-gray-600 text-center">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}