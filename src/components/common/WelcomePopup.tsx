import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface WelcomePopupProps {
  programName: string;
  onClose: () => void;
}

export function WelcomePopup({ programName, onClose }: WelcomePopupProps) {
  const navigate = useNavigate();

  const handleInstructorPortal = () => {
    navigate('/0000/instructorsignin');
    onClose();
  };

  const handleSupporterPortal = () => {
    // Keep existing parent/supporter navigation logic
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Welcome Message */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to {programName}!
            </h2>
            <p className="text-lg text-gray-600">
              Choose your portal to get started with your fundraising journey.
            </p>
          </div>

          {/* Portal Options */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Instructor Portal */}
            <button
              onClick={handleInstructorPortal}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#5de0e6] to-[#4bc5cb] p-[1px] text-left"
            >
              <div className="relative bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Instructor Portal
                </h3>
                <p className="text-gray-600 mb-4">
                  Manage your program, track donations, and access fundraising tools.
                </p>
                <div className="flex items-center text-[#5de0e6] group-hover:translate-x-1 transition-transform">
                  <span className="mr-2">Access Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </button>

            {/* Parent/Supporter Portal */}
            <button
              onClick={handleSupporterPortal}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#5de0e6] to-[#4bc5cb] p-[1px] text-left"
            >
              <div className="relative bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Parent/Supporter Portal
                </h3>
                <p className="text-gray-600 mb-4">
                  Support our program through donations and spirit wear purchases.
                </p>
                <div className="flex items-center text-[#5de0e6] group-hover:translate-x-1 transition-transform">
                  <span className="mr-2">View Options</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Need help? Contact support at support@fundrobe.org
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}