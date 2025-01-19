import React from 'react';
import { Heart, Users, Lightbulb, Target } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Mission-Driven",
    description: "We're passionate about empowering schools and making education accessible."
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We believe in the power of teamwork and diverse perspectives."
  },
  {
    icon: Lightbulb,
    title: "Innovative",
    description: "We encourage creative thinking and bold solutions."
  },
  {
    icon: Target,
    title: "Impact-Focused",
    description: "Every decision we make is guided by our mission to help schools succeed."
  }
];

export function CultureSection() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Culture</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
            <div className="inline-block p-3 bg-[#5de0e6]/10 rounded-lg mb-4">
              <value.icon className="w-6 h-6 text-[#5de0e6]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}