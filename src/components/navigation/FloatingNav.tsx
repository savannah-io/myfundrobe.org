import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, LogIn, UserPlus } from 'lucide-react';

export function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't show nav on welcome page
  if (location.pathname === '/welcome') {
    return null;
  }

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://i.im.ge/2025/01/06/zp6jNc.Animated-Fundrobe-Logo-2.png"
              alt="Fundrobe Logo"
              className="w-10 h-10 object-contain"
            />
            <span className={`text-2xl font-bold ${
              isScrolled ? 'text-gray-900' : 'text-[#5de0e6]'
            } tracking-wide`}>
              Fundrobe
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className={`p-2 rounded-full ${
                isScrolled 
                  ? 'hover:bg-gray-100' 
                  : 'hover:bg-white/10'
              } transition-colors`}
            >
              <Home className={`w-5 h-5 ${
                isScrolled ? 'text-gray-600' : 'text-white'
              }`} />
            </Link>
            <Link
              to="/signin"
              className={`px-4 py-2 rounded-full border-2 ${
                isScrolled
                  ? 'border-[#5de0e6] text-[#5de0e6] hover:bg-[#5de0e6]/10'
                  : 'border-white text-white hover:bg-white/10'
              } font-semibold transition-all duration-300 flex items-center space-x-2`}
            >
              <LogIn className="w-4 h-4" />
              <span>Instructor Dashboard</span>
            </Link>
            <Link
              to="/signup"
              className={`px-4 py-2 rounded-full ${
                isScrolled
                  ? 'bg-[#5de0e6] hover:bg-[#4bc5cb]'
                  : 'bg-white hover:bg-gray-100'
              } font-semibold transition-colors flex items-center space-x-2`}
            >
              <UserPlus className={`w-4 h-4 ${isScrolled ? 'text-white' : 'text-[#5de0e6]'}`} />
              <span className={isScrolled ? 'text-white' : 'text-[#5de0e6]'}>Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}