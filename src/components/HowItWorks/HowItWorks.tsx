import React from 'react';
import { StepCard } from './StepCard';
import { steps } from './stepsData';
import { HowItWorksBackground } from './HowItWorksBackground';

export function HowItWorks() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background - Moved to front but with lower z-index */}
      <div className="absolute inset-0 z-0">
        <HowItWorksBackground />
      </div>
      
      {/* Content Container - Higher z-index */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Steps to a Successful Campaign
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get started with our simple four-step process to transform your school's fundraising
          </p>
        </div>
        
        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}