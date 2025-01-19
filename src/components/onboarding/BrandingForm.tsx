import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { Upload } from 'lucide-react';

interface BrandingFormProps {
  initialData?: {
    primaryColor: string;
    secondaryColor: string;
    logoUrl?: string;
  };
  onSubmit: (data: {
    primaryColor: string;
    secondaryColor: string;
    logoUrl?: string;
  }) => void;
}

export function BrandingForm({ initialData, onSubmit }: BrandingFormProps) {
  const [primaryColor, setPrimaryColor] = useState(initialData?.primaryColor || '#5de0e6');
  const [secondaryColor, setSecondaryColor] = useState(initialData?.secondaryColor || '#4bc5cb');
  const [logoUrl, setLogoUrl] = useState(initialData?.logoUrl || '');
  const [showPrimaryPicker, setShowPrimaryPicker] = useState(false);
  const [showSecondaryPicker, setShowSecondaryPicker] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      primaryColor,
      secondaryColor,
      logoUrl
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Logo Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Program Logo
        </label>
        <div className="flex items-center space-x-6">
          {logoUrl ? (
            <img
              src={logoUrl}
              alt="Program logo"
              className="w-24 h-24 object-contain rounded-lg border"
            />
          ) : (
            <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
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
      </div>

      {/* Color Pickers */}
      <div className="grid grid-cols-2 gap-8">
        {/* Primary Color */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Primary Color
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowPrimaryPicker(!showPrimaryPicker)}
              className="w-full h-10 rounded-lg border shadow-sm"
              style={{ backgroundColor: primaryColor }}
            />
            {showPrimaryPicker && (
              <div className="absolute z-10 mt-2">
                <div
                  className="fixed inset-0"
                  onClick={() => setShowPrimaryPicker(false)}
                />
                <ChromePicker
                  color={primaryColor}
                  onChange={(color) => setPrimaryColor(color.hex)}
                />
              </div>
            )}
          </div>
        </div>

        {/* Secondary Color */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Secondary Color
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowSecondaryPicker(!showSecondaryPicker)}
              className="w-full h-10 rounded-lg border shadow-sm"
              style={{ backgroundColor: secondaryColor }}
            />
            {showSecondaryPicker && (
              <div className="absolute z-10 mt-2">
                <div
                  className="fixed inset-0"
                  onClick={() => setShowSecondaryPicker(false)}
                />
                <ChromePicker
                  color={secondaryColor}
                  onChange={(color) => setSecondaryColor(color.hex)}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Preview */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-4">Preview</h3>
        <div 
          className="p-6 rounded-lg"
          style={{ backgroundColor: primaryColor + '10' }}
        >
          <div className="space-y-4">
            <button
              type="button"
              style={{ backgroundColor: primaryColor }}
              className="px-4 py-2 rounded-lg text-white"
            >
              Primary Button
            </button>
            <button
              type="button"
              style={{ backgroundColor: secondaryColor }}
              className="px-4 py-2 rounded-lg text-white"
            >
              Secondary Button
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}