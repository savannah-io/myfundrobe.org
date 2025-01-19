import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface NeonSelectProps {
  label: string;
  id: string;
  options: Option[];
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function NeonSelect({ label, id, options, required, value, onChange }: NeonSelectProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1 block w-full rounded-md border-[#5de0e6]/30 shadow-sm focus:border-[#5de0e6] focus:ring focus:ring-[#5de0e6]/20 focus:ring-opacity-50 bg-white/50 backdrop-blur-sm transition-all duration-300"
      >
        <option value="">Select an option</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}