import React from 'react';
import { Heart, Plane, Laptop, GraduationCap } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    items: [
      "Comprehensive health insurance",
      "Dental and vision coverage",
      "Mental health support",
      "Wellness stipend"
    ]
  },
  {
    icon: Plane,
    title: "Time Off",
    items: [
      "Unlimited PTO",
      "Paid holidays",
      "Paid parental leave",
      "Volunteer time off"
    ]
  },
  {
    icon: Laptop,
    title: "Work Setup",
    items: [
      "Remote-first culture",
      "Home office stipend",
      "Latest equipment",
      "Flexible hours"
    ]
  },
  {
    icon: GraduationCap,
    title: "Growth",
    items: [
      "Learning stipend",
      "Conference budget",
      "Career development",
      "Mentorship program"
    ]
  }
];

export function BenefitsSection() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits & Perks</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
            <div className="inline-block p-3 bg-[#5de0e6]/10 rounded-lg mb-4">
              <benefit.icon className="w-6 h-6 text-[#5de0e6]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
            <ul className="space-y-2">
              {benefit.items.map((item, idx) => (
                <li key={idx} className="text-gray-600 flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#5de0e6] rounded-full mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}