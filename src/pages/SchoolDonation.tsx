import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { getSchoolProgram } from '../lib/program';
import { getDonationPage, getDonationTiers } from '../lib/donation';
import type { SchoolProgram, DonationPage, DonationTier } from '../types';

export function SchoolDonation() {
  const { accessCode } = useParams();
  const [program, setProgram] = useState<SchoolProgram | null>(null);
  const [donationPage, setDonationPage] = useState<DonationPage | null>(null);
  const [tiers, setTiers] = useState<DonationTier[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDonationPage() {
      if (!accessCode) return;
      
      try {
        const programData = await getSchoolProgram(accessCode);
        if (!programData) throw new Error('Program not found');
        
        const [pageData, tiersData] = await Promise.all([
          getDonationPage(programData.id),
          getDonationTiers(programData.id)
        ]);

        setProgram(programData);
        setDonationPage(pageData);
        setTiers(tiersData);
      } catch (error) {
        console.error('Error loading donation page:', error);
      } finally {
        setLoading(false);
      }
    }

    loadDonationPage();
  }, [accessCode]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!program || !donationPage) {
    return <div>Program not found</div>;
  }

  return (
    <div className="min-h-screen" style={{
      backgroundColor: program.primaryColor + '10',
      '--color-primary': program.primaryColor,
      '--color-secondary': program.secondaryColor,
    }}>
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${donationPage.heroImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4">{donationPage.title}</h1>
            <p className="text-xl text-white/90">{donationPage.description}</p>
          </div>
        </div>
      </div>

      {/* Donation Tiers */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div key={tier.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
              <div className="text-center mb-6">
                <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold text-primary">${tier.amount}</p>
              </div>
              <div className="space-y-3 mb-6">
                {tier.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {benefit}
                  </div>
                ))}
              </div>
              <button 
                className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors"
                onClick={() => {/* Handle donation */}}
              >
                Donate Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}