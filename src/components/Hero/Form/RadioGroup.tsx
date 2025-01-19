import React from 'react';

interface RadioGroupProps {
  id: string;
  label: string;
  options: Array<{ value: string; label: string; }>;
}

export function RadioGroup({ id, label, options }: RadioGroupProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="space-y-2">
        {options.map(option => (
          <div key={option.value} className="flex items-center">
            <input
              type="radio"
              id={`${id}-${option.value}`}
              name={id}
              value={option.value}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              required
            />
            <label
              htmlFor={`${id}-${option.value}`}
              className="ml-2 block text-sm text-gray-700"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}