import React, { useState } from 'react';
import { Upload } from 'lucide-react';

interface DonationPageFormProps {
  initialData?: {
    title: string;
    description: string;
    heroImageUrl?: string;
  };
  onSubmit: (data: {
    title: string;
    description: string;
    heroImageUrl?: string;
  }) => void;
}

export function DonationPageForm({ initialData, onSubmit }: DonationPageFormProps) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [heroImageUrl, setHeroImageUrl] = useState(initialData?.heroImageUrl || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      heroImageUrl
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Hero Image Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Hero Image
        </label>
        <div className="flex items-center space-x-6">
          {heroImageUrl ? (
            <img
              src={heroImageUrl}
              alt="Hero"
              className="w-48 h-24 object-cover rounded-lg border"
            />
          ) : (
            <div className="w-48 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
              <Upload className="w-8 h-8 text-gray-400" />
            </div>
          )}
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
          >
            Choose File
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Recommended size: 1920x400 pixels
        </p>
      </div>

      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
          Page Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5de0e6] focus:border-[#5de0e6]"
          placeholder="Support Our Program"
        />
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Page Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5de0e6] focus:border-[#5de0e6]"
          placeholder="Help us make a difference in our students' lives..."
        />
      </div>

      {/* Preview */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Preview</h3>
        <div className="relative h-48 rounded-lg overflow-hidden">
          {heroImageUrl ? (
            <img
              src={heroImageUrl}
              alt="Hero preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-100" />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center text-center p-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {title || 'Your Page Title'}
              </h2>
              <p className="text-white/90">
                {description || 'Your page description will appear here'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}