import React from 'react';
import { SectionBackground } from '../components/common/SectionBackground';
import { Footer } from '../components/Footer';
import { Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Careers() {
  return (
    <>
      <SectionBackground className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/"
            className="inline-flex items-center text-[#5de0e6] hover:text-[#4bc5cb] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Careers at Fundrobe
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us in revolutionizing school fundraising and making a difference in education
            </p>
          </div>

          {/* Message Card */}
          <div className="bg-white rounded-2xl p-12 shadow-xl text-center relative overflow-hidden">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#5de0e6]/5 via-blue-400/5 to-[#4bc5cb]/5 animate-gradient opacity-50" />
            
            {/* Content */}
            <div className="relative">
              <div className="inline-block p-4 bg-[#5de0e6]/10 rounded-full mb-6">
                <Clock className="w-12 h-12 text-[#5de0e6]" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sorry, we aren't hiring right now, check back in a Jif!
              </h2>
              
              <div className="inline-block mt-8">
                <Link
                  to="/"
                  className="bg-[#5de0e6] text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-[#4bc5cb] transition-colors shadow-lg hover:shadow-xl"
                >
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionBackground>
      <Footer />
    </>
  );
}