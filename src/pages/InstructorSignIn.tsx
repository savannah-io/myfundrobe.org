import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function InstructorSignIn() {
  const { code } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Validate code parameter
  useEffect(() => {
    if (code !== '0000') {
      navigate('/');
    }
  }, [code, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      // Successful login - navigate to instructor portal
      navigate('/instructor');
    } catch (error) {
      console.error('Error signing in:', error);
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#5de0e6]/10 via-blue-400/5 to-[#4bc5cb]/10 animate-gradient bg-[length:200%_200%]" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#5de0e6]/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl animate-float-delayed" />
        
        {/* Additional animated gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-[#5de0e6]/5 to-blue-400/5 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-tl from-[#5de0e6]/10 via-transparent to-blue-400/10 animate-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_50px_rgba(93,224,230,0.3)] relative overflow-hidden">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#5de0e6]/5 via-blue-400/5 to-[#4bc5cb]/5 animate-gradient opacity-50" />
          
          {/* Glow Effects */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#5de0e6]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#5de0e6]/20 rounded-full blur-3xl animate-pulse delay-1000" />

          <div className="relative">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#5de0e6] to-[#4bc5cb] bg-clip-text text-transparent animate-gradient">
                Instructor Sign In
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5de0e6] focus:border-[#5de0e6]"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5de0e6] focus:border-[#5de0e6] pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#5de0e6] to-[#4bc5cb] text-gray-900 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(93,224,230,0.3)] hover:shadow-[0_0_30px_rgba(93,224,230,0.5)] relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {loading ? 'Signing in...' : 'Sign In'}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#5de0e6] via-blue-400 to-[#4bc5cb] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient" />
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="text-sm text-[#5de0e6] hover:text-[#4bc5cb] transition-colors"
                >
                  Return to Program
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}