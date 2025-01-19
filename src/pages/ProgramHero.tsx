import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GraduationCap, Users, ArrowRight } from 'lucide-react';
import { getSchoolProgram } from '../lib/program';
import { WelcomePopup } from '../components/common/WelcomePopup';
import type { SchoolProgram } from '../types/program';

export function ProgramHero() {
  const { code } = useParams();
  const navigate = useNavigate();
  const [program, setProgram] = useState<SchoolProgram | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    async function loadProgram() {
      if (!code) {
        navigate('/');
        return;
      }
      
      try {
        const data = await getSchoolProgram(code);
        if (!data) {
          setError('Program not found');
          return;
        }
        setProgram(data);
      } catch (error) {
        console.error('Error loading program:', error);
        setError('Error loading program');
      } finally {
        setLoading(false);
      }
    }

    loadProgram();
  }, [code, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#5de0e6] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading program...</p>
        </div>
      </div>
    );
  }

  if (error || !program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-900 mb-4">{error || 'Program not found'}</p>
          <button
            onClick={() => navigate('/')}
            className="text-[#5de0e6] hover:text-[#4bc5cb] font-medium"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {showWelcome && (
        <WelcomePopup
          programName={program.name}
          onClose={() => setShowWelcome(false)}
        />
      )}

      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {program.name}
              </h1>
              {program.description && (
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                  {program.description}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Instructor Portal */}
              <button
                onClick={() => navigate('/signin')}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#5de0e6] to-[#4bc5cb] p-[1px]"
              >
                <div className="relative bg-black/50 backdrop-blur-sm rounded-xl p-6 h-full transition-all duration-300 group-hover:bg-black/30">
                  <div className="flex items-center space-x-3 mb-4">
                    <GraduationCap className="w-6 h-6 text-[#5de0e6]" />
                    <h3 className="text-xl font-semibold text-[#5de0e6]">
                      Instructor
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Manage your program and access fundraising tools
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
                onClick={() => navigate(`/${code}/support`)}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#5de0e6] to-[#4bc5cb] p-[1px]"
              >
                <div className="relative bg-black/50 backdrop-blur-sm rounded-xl p-6 h-full transition-all duration-300 group-hover:bg-black/30">
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="w-6 h-6 text-[#5de0e6]" />
                    <h3 className="text-xl font-semibold text-[#5de0e6]">
                      Parent/Supporter
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Support our program through donations and purchases
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
          </div>
        </div>
      </div>
    </>
  );
}