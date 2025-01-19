import React from 'react';
import { AnimatedHeader } from '../common/AnimatedHeader';

const timelineEvents = [
  {
    year: '2018',
    title: 'The Beginning',
    description: 'FunDrobe was founded with a vision to revolutionize school fundraising through custom spirit wear.'
  },
  {
    year: '2019',
    title: 'First 50 Schools',
    description: 'Reached our first milestone of partnering with 50 schools across three states.'
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description: 'Launched our innovative online platform, making fundraising accessible during challenging times.'
  },
  {
    year: '2021',
    title: 'Nationwide Expansion',
    description: 'Expanded operations to serve schools in all 50 states, helping raise over $1M collectively.'
  },
  {
    year: '2022',
    title: 'Community Impact',
    description: 'Reached 100,000+ students supported through our programs.'
  },
  {
    year: '2023',
    title: 'Innovation & Growth',
    description: 'Introduced AI-powered design tools and surpassed $2M in total funds raised for schools.'
  }
];

export function Timeline() {
  return (
    <section className="bg-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedHeader className="text-3xl font-bold text-center text-white mb-16">
          Our Journey
        </AnimatedHeader>
        
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-700" />
          
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}>
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-700/30">
                    <span className="text-[#5de0e6] font-bold text-xl mb-2 block">
                      {event.year}
                    </span>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {event.title}
                    </h3>
                    <p className="text-blue-100">
                      {event.description}
                    </p>
                  </div>
                </div>
                
                {/* Circle Marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#5de0e6] shadow-[0_0_20px_rgba(93,224,230,0.5)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}