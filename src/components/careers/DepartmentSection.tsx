import React from 'react';
import { Code, Palette, Users2, Megaphone, Briefcase, HeartHandshake } from 'lucide-react';

interface DepartmentSectionProps {
  selectedDepartment: string | null;
  onDepartmentSelect: (department: string) => void;
}

const departments = [
  {
    id: 'engineering',
    name: 'Engineering',
    icon: Code,
    description: 'Build the future of fundraising technology'
  },
  {
    id: 'design',
    name: 'Design',
    icon: Palette,
    description: 'Create beautiful and intuitive experiences'
  },
  {
    id: 'sales',
    name: 'Sales',
    icon: HeartHandshake,
    description: 'Help schools achieve their goals'
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: Megaphone,
    description: 'Share our story with the world'
  },
  {
    id: 'operations',
    name: 'Operations',
    icon: Briefcase,
    description: 'Keep everything running smoothly'
  },
  {
    id: 'success',
    name: 'Customer Success',
    icon: Users2,
    description: 'Support our school partners'
  }
];

export function DepartmentSection({ selectedDepartment, onDepartmentSelect }: DepartmentSectionProps) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Explore Departments</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {departments.map((dept) => {
          const Icon = dept.icon;
          const isSelected = selectedDepartment === dept.id;
          
          return (
            <button
              key={dept.id}
              onClick={() => onDepartmentSelect(dept.id)}
              className={`p-4 rounded-xl text-left transition-all duration-300 ${
                isSelected
                  ? 'bg-[#5de0e6] text-white shadow-lg scale-105'
                  : 'bg-white hover:bg-[#5de0e6]/10 shadow-md'
              }`}
            >
              <Icon className={`w-6 h-6 mb-2 ${isSelected ? 'text-white' : 'text-[#5de0e6]'}`} />
              <h3 className={`font-medium mb-1 ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                {dept.name}
              </h3>
              <p className={`text-sm ${isSelected ? 'text-white/90' : 'text-gray-500'}`}>
                {dept.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}