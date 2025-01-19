import React from 'react';
import { Circle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { TestimonialCard } from './TestimonialCard';
import { testimonials } from './testimonialData';
import { SectionBackground } from '../common/SectionBackground';

function BeeIcon() {
  return (
    <div className="relative inline-flex items-center justify-center transform hover:scale-110 transition-transform mx-3">
      <div className="w-12 h-7 bg-amber-400 rounded-full relative">
        <div className="absolute inset-y-0 left-1/3 w-1 bg-black transform skew-x-12"></div>
        <div className="absolute inset-y-0 right-1/4 w-1 bg-black transform skew-x-12"></div>
        <div className="absolute -top-2 left-1/4 w-6 h-5 bg-white/90 rounded-full transform -rotate-15 border border-amber-300"></div>
        <div className="absolute -top-1 left-1/3 w-5 h-4 bg-white/90 rounded-full transform rotate-15 border border-amber-300"></div>
        <div className="absolute -top-2 left-[15%] w-0.5 h-2.5 bg-black transform -rotate-30"></div>
        <div className="absolute -top-1 left-[25%] w-0.5 h-2 bg-black transform -rotate-15"></div>
        <div className="absolute top-1/2 left-[15%] transform -translate-y-1/2">
          <Circle className="w-1.5 h-1.5 text-black fill-black" />
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-amber-400 clip-path-triangle"></div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate('/success');
    // Scroll to top after navigation
    window.scrollTo(0, 0);
  };

  return (
    <SectionBackground className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4 flex items-center justify-center">
          <BeeIcon />
          Most Recent Buzz On Fundrobe
          <BeeIcon />
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Join thousands of schools that have transformed their fundraising with Fundrobe
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={handleSeeMore}
            className="inline-flex items-center bg-[#5de0e6] text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-[#4bc5cb] transition-colors shadow-lg hover:shadow-xl"
          >
            See More Success Stories
          </button>
        </div>
      </div>
    </SectionBackground>
  );
}