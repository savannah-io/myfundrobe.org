import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSchoolProgram } from '../lib/program';
import type { SchoolProgram } from '../types/program';

export function ProgramSection() {
  const { code, section } = useParams();
  const navigate = useNavigate();
  const [program, setProgram] = useState<SchoolProgram | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {program.name} - {section?.toUpperCase()}
            </h1>
            
            {/* YouTube Embed */}
            <div className="max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/your-video-id"
                title={`${program.name} ${section} Video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-6 mt-12">
              <button
                onClick={() => navigate(`/${code}/${section}/products`)}
                className="px-8 py-3 bg-[#5de0e6] text-gray-900 rounded-full font-semibold hover:bg-[#4bc5cb] transition-colors"
              >
                Shop {section} Products
              </button>
              <button
                onClick={() => navigate(`/${code}`)}
                className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-50 transition-colors"
              >
                Back to Program
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}