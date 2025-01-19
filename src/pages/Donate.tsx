import React from 'react';
import { Heart, Star, Trophy, Users } from 'lucide-react';

const tiers = [
  {
    name: "Bronze Supporter",
    amount: "$25",
    icon: Heart,
    benefits: [
      "Support local education",
      "Donor recognition",
      "Tax deduction receipt"
    ]
  },
  {
    name: "Silver Champion",
    amount: "$50",
    icon: Star,
    benefits: [
      "All Bronze benefits",
      "Exclusive updates",
      "Name on donor wall"
    ]
  },
  {
    name: "Gold Partner",
    amount: "$100",
    icon: Trophy,
    benefits: [
      "All Silver benefits",
      "VIP event access",
      "Special recognition plaque"
    ]
  },
  {
    name: "Platinum Benefactor",
    amount: "$250+",
    icon: Users,
    benefits: [
      "All Gold benefits",
      "Custom recognition event",
      "Program naming rights"
    ]
  }
];

export function Donate() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Support Our Mission</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your donation helps us provide sustainable funding solutions to schools across the nation.
          Every contribution makes a difference in a student's education.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiers.map((tier, index) => {
          const Icon = tier.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
              <div className="text-center mb-6">
                <div className="inline-block p-3 bg-[#5de0e6]/10 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-[#5de0e6]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold text-[#5de0e6]">{tier.amount}</p>
              </div>
              <ul className="space-y-3 mb-6">
                {tier.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-[#5de0e6] rounded-full mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#5de0e6] text-white py-2 rounded-lg hover:bg-[#4bc5cb] transition-colors">
                Donate Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}