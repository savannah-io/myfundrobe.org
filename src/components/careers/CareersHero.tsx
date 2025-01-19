import React from 'react';
import { NeonGradientText } from '../common/NeonGradientText';

export function CareersHero() {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        <NeonGradientText>Join Our Mission</NeonGradientText>
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Help us revolutionize school fundraising and make a difference in education. 
        We're looking for passionate individuals to join our growing team.
      </p>
    </div>
  );
}