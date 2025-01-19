import React from 'react';
import { ContactFormHero } from './ContactFormHero';
import { HeroFeatureList } from './HeroFeatureList';
import { HeroBackground } from './HeroBackground';

export function Hero() {
  return (
    <header id="hero-section" className="relative min-h-screen flex items-center">
      <HeroBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-white space-y-6 md:space-y-8 text-center md:text-left pt-16 md:pt-20">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
                <span className="inline-block text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  Fundraising,
                </span>
                <div className="relative inline-block transform hover:scale-105 transition-transform duration-300">
                  <div className="relative">
                    <span className="absolute -left-2 -top-2 text-5xl sm:text-6xl md:text-8xl font-black text-black/10 blur-sm">
                      FREE
                    </span>
                    
                    {[...Array(4)].map((_, i) => (
                      <span
                        key={i}
                        className="absolute text-5xl sm:text-6xl md:text-8xl font-black text-[#FFD700]/30"
                        style={{
                          left: `${-0.5 * (3-i)}rem`,
                          top: `${-0.5 * (3-i)}rem`,
                          filter: `blur(${2 * (3-i)}px)`,
                          transform: `translateZ(${10 * i}px)`,
                        }}
                      >
                        FREE
                      </span>
                    ))}

                    <span className="relative z-20 text-5xl sm:text-6xl md:text-8xl font-black bg-gradient-to-br from-[#FFD700] via-[#FFF8DC] to-[#FFD700] bg-clip-text text-transparent animate-gradient inline-block transform">
                      FREE
                    </span>

                    <span className="absolute inset-0 text-5xl sm:text-6xl md:text-8xl font-black bg-gradient-to-br from-white/50 via-transparent to-transparent bg-clip-text text-transparent">
                      FREE
                    </span>

                    <div className="absolute inset-0 blur-xl bg-gradient-to-r from-[#FFD700]/30 via-[#FFF8DC]/30 to-[#FFD700]/30 animate-pulse" />
                  </div>
                </div>
                <br />
                <span className="inline-block text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  All Year Long.
                </span>
              </h1>
            </div>
            
            <p className="text-lg sm:text-xl text-blue-100 max-w-xl mx-auto md:mx-0">
              Need to fund your next game? Get Started Before The Other Team Does...
            </p>
            
            <div className="hidden md:block">
              <HeroFeatureList />
            </div>
          </div>
          
          <div className="md:ml-auto w-full max-w-md mx-auto">
            <ContactFormHero />
          </div>

          <div className="md:hidden">
            <HeroFeatureList />
          </div>
        </div>
      </div>
    </header>
  );
}