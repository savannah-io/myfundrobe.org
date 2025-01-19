import React, { useState, useCallback } from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  schoolName: string;
  imageUrl: string;
}

export function TestimonialCard({ quote, author, role, schoolName, imageUrl }: TestimonialCardProps) {
  const [showVeteranInfo, setShowVeteranInfo] = useState(false);
  const isMilitary = role.includes('JROTC') || author.includes('TSgt');
  
  const handleModalClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <div className={`rounded-xl shadow-lg p-8 transition-all duration-300 relative ${
      isMilitary 
        ? 'bg-gradient-to-b from-[#4B5320] to-[#3D421B] border-2 border-[#5A6324] text-white'
        : 'bg-white'
    }`}>
      {isMilitary && (
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full flex items-center justify-center transform rotate-12 shadow-lg">
          <span className="text-2xl">🎖️</span>
        </div>
      )}
      <div className="flex items-center space-x-4 mb-6">
        <div className={`relative ${isMilitary ? 'p-1 bg-[#5A6324] rounded-full' : ''}`}>
          {/* Decorative Frame */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[84px] h-[84px]">
            <img
              src="https://i.postimg.cc/cC8ckDzM/F-7.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="relative z-10 w-16 h-16 rounded-full overflow-hidden">
            <img
              src={imageUrl}
              alt={author}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h4 className={`font-semibold ${isMilitary ? 'text-[#D4D6A7]' : 'text-gray-900'}`}>
            {author}
          </h4>
          <p className={`text-sm ${isMilitary ? 'text-[#BFC192]' : 'text-gray-600'}`}>
            {role}
          </p>
          <p className={`text-sm ${isMilitary ? 'text-[#8A9B68]' : 'text-blue-600'}`}>
            {schoolName}
          </p>
        </div>
      </div>
      <blockquote className={`italic ${isMilitary ? 'text-[#E8E8D5]' : 'text-gray-700'}`}>
        "{quote}"
      </blockquote>
      {isMilitary && (
        <>
          <div className="mt-4 border-t border-[#5A6324] pt-4">
            <div className="flex justify-end">
              <div className="w-16 h-4 bg-[#5A6324] rounded-sm opacity-50" />
            </div>
          </div>
          <button
            onClick={() => setShowVeteranInfo(true)}
            className="mt-4 w-full bg-gradient-to-r from-amber-300/20 via-amber-400/20 to-amber-300/20 border border-amber-400/30 rounded-lg p-3 hover:from-amber-300/30 hover:via-amber-400/30 hover:to-amber-300/30 transition-all duration-300"
          >
            <p className="text-center text-amber-200 text-sm font-medium">
              Thank You For Your Service 🎖️ Click to Learn More
            </p>
          </button>

          {showVeteranInfo && (
            <div 
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 touch-none" 
              onClick={() => setShowVeteranInfo(false)}
            >
              <div 
                className="bg-[#4B5320] rounded-xl p-6 sm:p-8 w-full max-w-2xl mx-auto shadow-2xl border-2 border-[#5A6324] max-h-[90vh] overflow-y-auto" 
                onClick={handleModalClick}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-amber-300 mb-6">Supporting Our Veterans in Education</h3>
                
                <div className="space-y-6 text-[#E8E8D5]">
                  <p>
                    Veterans serving in education face unique challenges while making invaluable contributions to our schools:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-3">
                    <li>Many JROTC programs operate on limited funding despite their significant impact on student development</li>
                    <li>Veterans often use personal resources to support their educational programs</li>
                    <li>Military experience brings unique leadership and discipline perspectives to education</li>
                    <li>JROTC programs help develop future leaders and citizens</li>
                  </ul>

                  <div className="bg-[#5A6324] rounded-lg p-4 mt-6">
                    <p className="text-amber-200 font-medium mb-2">How You Can Help:</p>
                    <ul className="list-disc pl-6 space-y-2 text-[#D4D6A7]">
                      <li>Support JROTC fundraising initiatives</li>
                      <li>Volunteer at JROTC events</li>
                      <li>Advocate for increased program funding</li>
                      <li>Share success stories of veteran educators</li>
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => setShowVeteranInfo(false)}
                  className="mt-8 w-full bg-gradient-to-r from-amber-400 to-amber-500 text-[#4B5320] py-3 rounded-lg font-bold hover:from-amber-300 hover:to-amber-400 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}