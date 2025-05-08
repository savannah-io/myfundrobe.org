import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, X } from 'lucide-react';

interface PremiumAccessModalProps {
  onClose: () => void;
}

export function PremiumAccessModal({ onClose }: PremiumAccessModalProps) {
  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative" 
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-block p-3 bg-[#5de0e6]/10 rounded-full mb-4">
            <Lock className="w-8 h-8 text-[#5de0e6]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Subscribe to Access Premium Tips
          </h2>
          <p className="text-gray-600">
            Get exclusive access to our best fundraising strategies and insider tips.
          </p>
        </div>

        <div className="space-y-4">
          <Link to="/signup" className="block">
            <button className="w-full py-3 px-6 rounded-md font-semibold relative overflow-hidden group bg-gradient-to-r from-[#5de0e6] to-[#4bc5cb] text-white hover:opacity-90 transition-all duration-300">
              <span className="relative z-10">Get Access Now</span>
            </button>
          </Link>
          
          <p className="text-center text-sm text-gray-500">
            Already have an account? <Link to="/signin" className="text-[#5de0e6] hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}