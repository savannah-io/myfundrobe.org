import React from 'react';
import { MapPin } from 'lucide-react';

const cities = [
  'Savannah',
  'Pooler',
  'Richmond Hill',
  'Hinesville',
  'Statesboro',
  'Brunswick',
  'Bluffton',
  'Hilton Head',
  'Beaufort',
  'Charleston'
];

export function BrandPartners() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#7de8ec] via-[#6de5ea] to-[#7de8ec] py-6 mt-[-1px]">
      {/* Enhanced Animated Background Effects */}
      <div className="absolute inset-0">
        {/* Primary gradient layer with animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5de0e6]/30 via-blue-400/20 to-[#4bc5cb]/30 animate-gradient bg-[length:200%_200%]" />
        
        {/* Multiple shimmering layers */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"
            style={{
              animationDelay: `${i * 0.3}s`,
              transform: `rotate(${i * 12}deg) scale(${1 + i * 0.1})`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Title Container with Enhanced Glowing Border */}
        <div className="relative max-w-fit mx-auto mb-6">
          {/* Multiple layered glow effects */}
          <div className="absolute -inset-1 bg-gradient-to-r from-white via-[#5de0e6]/50 to-white opacity-75 blur-lg animate-pulse" />
          <div className="absolute -inset-2 bg-gradient-to-r from-[#5de0e6]/30 via-white/50 to-[#5de0e6]/30 opacity-50 blur-xl animate-gradient" />
          
          {/* Enhanced border container */}
          <div className="relative bg-gradient-to-r from-white/60 via-[#5de0e6]/40 to-white/60 p-[1px] rounded-xl">
            <div className="bg-gradient-to-br from-[#5de0e6]/10 to-white/5 backdrop-blur-sm rounded-xl px-8 py-4">
              {/* Title content */}
              <h2 className="text-center text-4xl font-bold flex items-center justify-center" style={{ fontFamily: "'Varela Round', serif" }}>
                <MapPin className="w-8 h-8 mr-3 animate-bounce text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]" />
                <span className="bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]">
                  <u>Current Operation Cities</u>
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action Text */}
        <p className="text-center mb-6 mx-auto relative" style={{ maxWidth: '80%' }}>
          <span className="text-base bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)] font-medium tracking-wide inline-block">
            Help us provide more monetary opportunities for extra-curricular students & programs by starting your fundraiser today!
          </span>
        </p>
        
        {/* Enhanced Scrolling Container */}
        <div className="relative flex overflow-hidden mx-auto max-w-5xl">
          {/* Enhanced gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#7de8ec] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#7de8ec] to-transparent z-10" />
          
          {/* Scrolling Content */}
          <div className="flex space-x-24 animate-scroll-right whitespace-nowrap py-4">
            {[...cities, ...cities].map((city, index) => (
              <div
                key={`${city}-${index}`}
                className="relative group"
              >
                <div className="px-6 py-2 rounded-lg border-2 border-white/80 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  <span className="text-xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]">
                    {city}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}