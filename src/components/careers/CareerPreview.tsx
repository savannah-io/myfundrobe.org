import React from 'react';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CareerPreview() {
  return (
    <section id="careers-section" className="py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Mission
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Help us revolutionize school fundraising and make a difference in education
          </p>
        </div>

        {/* Enhanced Notice Box */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 via-[#5de0e6] to-blue-600 p-1.5 rounded-2xl shadow-2xl animate-gradient bg-[length:200%_auto]">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-10 text-center relative overflow-hidden">
              {/* Enhanced Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-[#5de0e6]/10 to-blue-50 animate-gradient opacity-70" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#5de0e6]/20 rounded-full blur-3xl animate-pulse delay-1000" />
              
              {/* Content */}
              <div className="relative">
                <div className="inline-block p-5 bg-blue-100 rounded-full mb-8">
                  <Clock className="w-10 h-10 text-blue-600" />
                </div>
                
                <h3 className="text-4xl font-bold text-blue-900 mb-6 leading-tight">
                  Sorry, we aren't hiring right now,
                  <br />
                  check back in a Jif!
                </h3>
                
                <p className="text-blue-700 text-xl max-w-2xl mx-auto mb-8">
                  While we don't have any open positions at the moment, we're always interested in connecting with talented individuals who share our passion for education.
                </p>

                <div className="text-lg">
                  <Link 
                    to="/support" 
                    className="text-[#5de0e6] hover:text-[#4bc5cb] font-semibold hover:underline transition-colors"
                  >
                    Fill out contact info form
                  </Link>
                  <span className="text-gray-600"> and attach your resume. We'll keep you in mind for future opportunities!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}