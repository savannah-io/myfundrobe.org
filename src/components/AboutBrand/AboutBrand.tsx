import React from 'react';
import { ContactFormHero } from '../Hero/ContactFormHero';
import { StatsGrid } from '../Stats';
import { SectionBackground } from '../common/SectionBackground';

export function AboutBrand() {
  return (
    <SectionBackground className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Empowering Schools Through Innovative Fundraising
            </h2>
            
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">At Fundrobe Fundraising, we're dedicated to:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Serving the local Savannah area, helping as many kids in the area achieve brighter futures As Soon As Possible</li>
                <li>Supporting educational projects, sports teams, and fine arts groups through semester-long fundraising campaigns, ensuring every student has the opportunity to thrive beyond the classroom</li>
              </ul>
            </div>
          </div>

          <div className="lg:ml-auto">
            <ContactFormHero />
          </div>
        </div>

        <StatsGrid />
      </div>
    </SectionBackground>
  );
}