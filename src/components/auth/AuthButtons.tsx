import React from 'react';
import { LogIn, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AuthButtons() {
  return (
    <div className="flex items-center space-x-4">
      <Link
        to="/signin"
        className="flex items-center space-x-2 text-gray-600 hover:text-[#5de0e6] transition-colors"
      >
        <LogIn className="w-4 h-4" />
        <span>Sign In</span>
      </Link>
      <Link
        to="/signup"
        className="flex items-center space-x-2 bg-[#5de0e6] text-gray-900 px-4 py-2 rounded-md hover:bg-[#4bc5cb] transition-colors"
      >
        <UserPlus className="w-4 h-4" />
        <span>Sign Up</span>
      </Link>
    </div>
  );
}