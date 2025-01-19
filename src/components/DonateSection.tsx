import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DonateSection() {
  const handleDonateClick = () => {
    // Navigate to donate page and scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-2 [text-shadow:_2px_2px_0_rgb(0_0_0)]">
            Support the Fundrobe Mission
          </h2>
          <h3 className="text-lg text-white/90 mb-4">
            Even $5 can help change the accessibility to resources for education forever.
          </h3>
          <Link
            to="/donate"
            onClick={handleDonateClick}
            className="inline-flex items-center bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Heart className="w-4 h-4 mr-2" />
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  );
}