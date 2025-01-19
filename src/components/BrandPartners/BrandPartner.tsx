import React from 'react';

interface BrandPartnerProps {
  name: string;
}

export function BrandPartner({ name }: BrandPartnerProps) {
  return (
    <div className="group relative">
      <div className="text-white text-xl font-bold opacity-40 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" style={{ fontFamily: "'Varela Round', serif" }}>
        {name}
      </div>
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg filter blur-lg transition-all duration-500 -z-10" />
    </div>
  );
}