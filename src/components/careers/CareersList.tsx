import React from 'react';
import { JobCard } from './JobCard';
import { openPositions } from './careersData';

export function CareersList() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Open Positions</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {openPositions.map((position, index) => (
          <JobCard key={index} {...position} />
        ))}
      </div>
    </div>
  );
}