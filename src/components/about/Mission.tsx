import React from 'react';
import { AnimatedHeader } from '../common/AnimatedHeader';

export function Mission() {
  return (
    <div className="relative flex items-center justify-center perspective pb-0">
      {/* Enhanced 3D Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5de0e6]/10 via-[#5de0e6]/5 to-[#5de0e6]/10 transform rotate-12 preserve-3d" 
          style={{ transform: 'translateZ(-100px)' }} 
        />
        
        {/* Animated Gradient Lines */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5de0e6]/10 to-transparent animate-shimmer"
            style={{
              '--rotation': `${i * 15}deg`,
              animationDelay: `${i * 0.5}s`,
              transform: `rotate(${i * 15}deg) translateZ(${i * 10}px)`,
            }}
          />
        ))}
        
        {/* Enhanced Floating Orbs */}
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-[#5de0e6]/10 rounded-full blur-2xl animate-float-slow" />
        <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-[#5de0e6]/10 rounded-full blur-2xl animate-float-delayed" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center transform preserve-3d hover:scale-105 transition-transform duration-500">
          <AnimatedHeader as="h1" className="text-5xl md:text-6xl font-bold text-blue-900 mb-8">
            Our Mission to Empower Education
          </AnimatedHeader>
          <p className="text-xl md:text-2xl text-blue-800 max-w-4xl mx-auto leading-relaxed">
            FunDrobe is revolutionizing school fundraising by combining custom spirit wear 
            with innovative technology to help change the accessibility to resources for education.
          </p>
        </div>
      </div>

      {/* Interactive Hover Effect */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-[#5de0e6]/5 via-[#5de0e6]/5 to-[#5de0e6]/5 animate-gradient" />
      </div>
    </div>
  );
}