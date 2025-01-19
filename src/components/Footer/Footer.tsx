import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Footer() {
  const location = useLocation();

  const handleStartClick = () => {
    if (location.pathname !== '/') {
      window.location.href = '/#hero-section';
    } else {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleAboutClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTipsClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSuccessClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCareersClick = () => {
    if (window.location.pathname === '/about') {
      const careersSection = document.getElementById('careers');
      if (careersSection) {
        careersSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#5de0e6] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <img 
              src="https://i.im.ge/2025/01/06/zp6jNc.Animated-Fundrobe-Logo-2.png"
              alt="Fundrobe Logo"
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-gray-900">Fundrobe</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/about" onClick={handleAboutClick} className="text-gray-900 hover:text-white transition-colors">About</Link>
            <Link to="/blog" onClick={handleTipsClick} className="text-gray-900 hover:text-white transition-colors">Tips</Link>
            <Link to="/success" onClick={handleSuccessClick} className="text-gray-900 hover:text-white transition-colors">Success Stories</Link>
            <Link to="/about#careers" onClick={handleCareersClick} className="text-gray-900 hover:text-white transition-colors">Careers</Link>
            <Link to="/support" className="text-gray-900 hover:text-white transition-colors">Support</Link>
            <Link to="/donate" className="text-gray-900 hover:text-white transition-colors">Donate</Link>
            <button 
              onClick={handleStartClick}
              className="bg-white text-[#5de0e6] px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              START
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}