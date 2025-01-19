import React from 'react';
import { AnimatedHeader } from '../common/AnimatedHeader';

export function Story() {
  return (
    <div className="bg-white rounded-2xl p-12 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-[#5de0e6]/10 w-96 h-96 rounded-full blur-3xl" />
      <div className="relative">
        <AnimatedHeader className="text-3xl font-bold text-gray-900 mb-6">
          Our Story
        </AnimatedHeader>
        <div className="prose prose-lg text-gray-600 max-w-none">
          <p className="mb-4">
            Founded with a vision to transform traditional fundraising methods, 
            FunDrobe began as a simple idea: what if schools could generate 
            continuous funding while building community pride?
          </p>
          <p className="mb-4">
            Today, we've grown into a nationwide platform that has helped hundreds 
            of schools raise millions of dollars through custom spirit wear programs. 
            Our success is measured not just in dollars raised, but in the 
            communities strengthened and the educational opportunities created.
          </p>
          <p>
            We continue to innovate and expand our services, always keeping our 
            core mission in focus: empowering schools to achieve their fundraising 
            goals while fostering school spirit and community engagement.
          </p>
        </div>
      </div>
    </div>
  );
}