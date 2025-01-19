import React, { useState } from 'react';
import { Plus, X, GripVertical } from 'lucide-react';

interface DonationTier {
  name: string;
  amount: number;
  description?: string;
  benefits: string[];
  isFeatured: boolean;
}

interface DonationTiersFormProps {
  initialTiers?: DonationTier[];
  onSubmit: (tiers: DonationTier[]) => void;
}

export function DonationTiersForm({ initialTiers, onSubmit }: DonationTiersFormProps) {
  const [tiers, setTiers] = useState<DonationTier[]>(initialTiers || [
    {
      name: 'Bronze Supporter',
      amount: 25,
      benefits: ['Support local education'],
      isFeatured: false
    },
    {
      name: 'Silver Champion',
      amount: 50,
      benefits: ['Support local education', 'Exclusive updates'],
      isFeatured: false
    },
    {
      name: 'Gold Partner',
      amount: 100,
      benefits: ['Support local education', 'Exclusive updates', 'VIP event access'],
      isFeatured: true
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(tiers);
  };

  const addTier = () => {
    setTiers([...tiers, {
      name: 'New Tier',
      amount: 0,
      benefits: [],
      isFeatured: false
    }]);
  };

  const removeTier = (index: number) => {
    setTiers(tiers.filter((_, i) => i !== index));
  };

  const updateTier = (index: number, updates: Partial<DonationTier>) => {
    setTiers(tiers.map((tier, i) => 
      i === index ? { ...tier, ...updates } : tier
    ));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 shadow-sm p-6"
          >
            {/* Tier Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <GripVertical className="w-5 h-5 text-gray-400 cursor-move" />
                <h3 className="text-lg font-medium text-gray-900">Tier {index + 1}</h3>
              </div>
              <button
                type="button"
                onClick={() => removeTier(index)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tier Form */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tier Name
                  </label>
                  <input
                    type="text"
                    value={tier.name}
                    onChange={(e) => updateTier(index, { name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5de0e6] focus:border-[#5de0e6]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Amount ($)
                  </label>
                  <input
                    type="number"
                    value={tier.amount}
                    onChange={(e) => updateTier(index, { amount: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5de0e6] focus:border-[#5de0e6]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Benefits (one per line)
                </label>
                <textarea
                  value={tier.benefits.join('\n')}
                  onChange={(e) => updateTier(index, {
                    benefits: e.target.value.split('\n').filter(Boolean)
                  })}
                  rows={4}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5de0e6] focus:border-[#5de0e6]"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id={`featured-${index}`}
                  checked={tier.isFeatured}
                  onChange={(e) => updateTier(index, { isFeatured: e.target.checked })}
                  className="h-4 w-4 text-[#5de0e6] focus:ring-[#5de0e6] border-gray-300 rounded"
                />
                <label
                  htmlFor={`featured-${index}`}
                  className="ml-2 text-sm text-gray-700"
                >
                  Featured Tier
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addTier}
        className="flex items-center space-x-2 text-[#5de0e6] hover:text-[#4bc5cb]"
      >
        <Plus className="w-5 h-5" />
        <span>Add Tier</span>
      </button>
    </form>
  );
}