import React, { useState } from 'react';

export function AnimatedProcess() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="w-full max-w-6xl transform scale-150 relative">
      {/* Image Container */}
      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 bg-transparent animate-pulse flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-[#5de0e6] border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        
        <img
          src="https://i.im.ge/2025/01/06/zp6HPC.ezgif-com-video-to-gif-converter.gif"
          alt="FunDrobe Process Animation"
          className={`w-full h-auto object-contain mix-blend-multiply transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ filter: 'contrast(1.1) brightness(0.95)' }}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
        
        {hasError && (
          <div className="absolute inset-0 bg-transparent flex items-center justify-center text-gray-500">
            Unable to load animation
          </div>
        )}
      </div>
    </div>
  );
}