import React from 'react';
import { SectionBackground } from '../components/common/SectionBackground';
import { StatsGrid } from '../components/Stats';
import { Mission, Values } from '../components/about';
import { CareerPreview } from '../components/careers';
import { DonateSection } from '../components/DonateSection';
import { Footer } from '../components/Footer/Footer';

export function About() {
  return (
    <div className="overflow-x-hidden">
      <SectionBackground className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gold Box Section */}
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 blur-lg opacity-50 animate-pulse" />
            <div className="relative bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 p-1 rounded-2xl">
              <div className="bg-white px-8 py-12 rounded-xl">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-6">
                    <div className="relative">
                      <img 
                        src="https://i.ibb.co/hKRkZ6s/Untitled-design-11.png"
                        alt="Fundy Mascot"
                        className="w-24 h-24 object-contain animate-bounce-slow relative z-10"
                      />
                      <div className="absolute -bottom-4 left-4 w-16 h-4 bg-black/20 rounded-full blur-sm animate-bounce-slow transform -skew-x-12"></div>
                    </div>
                    <div className="inline-block relative">
                      <h1 className="text-4xl md:text-5xl font-bold relative">
                        {/* Base text with gradient */}
                        <span className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent relative">
                          About Fundrobe
                        </span>

                        {/* Shine effect overlay */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 blur-sm animate-shimmer" 
                          style={{
                            '--rotation': '25deg',
                            maskImage: 'linear-gradient(to right, transparent, black, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black, transparent)',
                          }}
                        />

                        {/* Additional shine layer */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 blur-md animate-shimmer delay-75"
                          style={{
                            '--rotation': '-15deg',
                            maskImage: 'linear-gradient(to right, transparent, black, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black, transparent)',
                          }}
                        />

                        {/* Neon underline */}
                        <span className="absolute -bottom-2 left-0 right-0 h-[4px] bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 animate-pulse shadow-[0_0_15px_#fcd34d,0_0_30px_#fcd34d,0_0_45px_#fcd34d]" />
                        <span className="absolute -bottom-2 left-0 right-0 h-[4px] bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 blur-[3px] animate-pulse opacity-95" />
                        <span className="absolute -bottom-2 left-0 right-0 h-[4px] bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 blur-[6px] animate-pulse opacity-90" />
                      </h1>
                    </div>
                  </div>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
                    Discover how we're revolutionizing school fundraising through innovative solutions and community engagement
                  </p>
                </div>

                <div className="mt-12">
                  <StatsGrid />
                </div>
              </div>
            </div>
          </div>

          <div id="mission">
            <Mission />
          </div>
        </div>
      </SectionBackground>

      <DonateSection />

      <div id="values">
        <SectionBackground className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Values />
          </div>
        </SectionBackground>
      </div>

      <DonateSection />

      <div id="careers">
        <SectionBackground className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CareerPreview />
          </div>
        </SectionBackground>
      </div>
      
      <Footer />
    </div>
  );
}