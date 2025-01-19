import React from 'react';

const features = [
  'Custom branded merchandise',
  'Zero upfront costs',
  'Automated online ordering',
  'Hassle-free delivery'
];

export function HeroFeatureList() {
  return (
    <ul className="space-y-3 md:space-y-4 max-w-sm mx-auto md:mx-0">
      {features.map((item, index) => (
        <li key={index} className="flex items-center space-x-2 text-sm md:text-base">
          <CheckIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#5de0e6] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path 
        fillRule="evenodd" 
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
        clipRule="evenodd" 
      />
    </svg>
  );
}