import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface NeonInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export function NeonInput({ label, id, type, ...props }: NeonInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative mt-1">
        <input
          id={id}
          type={isPassword ? (showPassword ? 'text' : 'password') : type}
          {...props}
          className="block w-full rounded-md border-[#5de0e6]/30 shadow-sm focus:border-[#5de0e6] focus:ring focus:ring-[#5de0e6]/20 focus:ring-opacity-50 bg-white/50 backdrop-blur-sm transition-all duration-300 pr-10"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}