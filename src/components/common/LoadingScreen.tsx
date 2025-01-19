import React from 'react';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        {/* Smooth gradient waves */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#5de0e6]/10 via-blue-400/5 to-[#4bc5cb]/10 animate-gradient bg-[length:200%_200%]" />
        
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#5de0e6]/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4bc5cb]/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Loading Content */}
      <div className="relative z-10">
        {/* Logo Container */}
        <div className="relative w-32 h-32 mb-8 mx-auto">
          <img 
            src="https://i.im.ge/2025/01/06/zp6jNc.Animated-Fundrobe-Logo-2.png"
            alt="Fundrobe Logo"
            className="w-full h-full object-contain animate-spin-slow"
          />
          
          {/* Glow Effects */}
          <div className="absolute inset-0 bg-[#5de0e6] opacity-20 blur-xl animate-pulse" />
          <div className="absolute inset-[-50%] bg-blue-400 opacity-10 blur-2xl animate-pulse delay-150" />
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <div className="text-[#5de0e6] text-2xl font-medium tracking-wider mb-4">
            Loading
            <span className="inline-flex ml-2">
              {[...Array(3)].map((_, i) => (
                <span
                  key={i}
                  className="animate-bounce mx-0.5"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  .
                </span>
              ))}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-gradient-to-r from-[#5de0e6] via-blue-400 to-[#4bc5cb] animate-progress rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}