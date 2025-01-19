import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { signUpWithVerification } from '../lib/auth';
import { EmailVerification } from '../components/auth/EmailVerification';

interface FormData {
  firstName: string;
  lastName: string;
  campaignCode: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    campaignCode: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showVerification, setShowVerification] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    if (e.target.id === 'campaignCode') {
      value = value.toUpperCase();
      if (value.length > 4) return;
    }
    
    setFormData(prev => ({
      ...prev,
      [e.target.id]: value
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      // Try to sign up with verification
      const response = await signUpWithVerification(
        formData.email,
        formData.password,
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          campaign_code: formData.campaignCode
        }
      );

      if (!response.success) {
        setError(response.message);
        return;
      }

      // Show verification screen
      setShowVerification(true);
    } catch (error) {
      console.error('Error during signup:', error);
      setError('An error occurred during signup. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerified = () => {
    navigate('/welcome');
  };

  if (showVerification) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          <EmailVerification 
            email={formData.email}
            onVerified={handleVerified}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm p-4">
      <div className="w-full max-w-[1200px] h-[90vh] flex rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden scale-100 hover:scale-[1.02] transition-all duration-500">
        {/* Left Panel */}
        <div className="w-full lg:w-[45%] bg-white p-6 lg:p-8 flex flex-col relative overflow-y-auto">
          <Link
            to="/"
            className="absolute top-4 left-4 text-gray-600 hover:text-gray-900 transition-colors z-20 flex items-center space-x-2 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </Link>

          <div className="flex-1 flex flex-col max-w-md mx-auto w-full relative z-10">
            {/* Logo and Header */}
            <div className="flex flex-col items-center text-center mb-8 mt-8">
              <img 
                src="https://i.postimg.cc/qMj9ZLjZ/fundylogo-1.png"
                alt="Logo"
                className="w-16 h-16 object-contain transform hover:rotate-3 transition-transform duration-300 mb-4"
              />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Get Started</h1>
              <p className="text-gray-500 text-lg">Welcome to Fundrobe</p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-xl shadow-sm">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5de0e6] focus:border-[#5de0e6] shadow-sm text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5de0e6] focus:border-[#5de0e6] shadow-sm text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="campaignCode" className="block text-sm font-medium text-gray-700 mb-1">
                  Campaign Code
                </label>
                <input
                  type="text"
                  id="campaignCode"
                  value={formData.campaignCode}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5de0e6] focus:border-[#5de0e6] tracking-widest font-mono text-base shadow-sm"
                  placeholder="XXXX"
                  maxLength={4}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5de0e6] focus:border-[#5de0e6] shadow-sm text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5de0e6] focus:border-[#5de0e6] shadow-sm text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5de0e6] focus:border-[#5de0e6] shadow-sm text-sm"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-[#5de0e6] to-[#4bc5cb] text-gray-900 rounded-lg font-semibold text-base hover:from-[#4bc5cb] hover:to-[#3ab0b6] transition-all duration-300 shadow-lg disabled:opacity-50 transform hover:-translate-y-0.5 mt-2"
              >
                {loading ? 'Creating Account...' : 'Sign Up'}
              </button>
            </form>

            <p className="text-center mt-4 text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/signin" className="text-[#5de0e6] hover:text-[#4bc5cb] font-medium">
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* Right Panel with Enhanced Wave Effects */}
        <div className="hidden lg:block lg:w-[55%] bg-[#5de0e6] p-16 relative overflow-hidden">
          {/* Content */}
          <div className="relative z-10 p-6 h-full flex items-center justify-center">
            {/* Shiny blue gradient background for the box */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Primary glow */}
              <div className="absolute w-full max-w-3xl h-[120%] bg-gradient-to-b from-blue-500/30 via-blue-400/20 to-blue-500/30 blur-3xl animate-pulse" />
              
              {/* Secondary glow */}
              <div className="absolute w-full max-w-3xl h-[120%] bg-gradient-to-t from-[#5de0e6]/30 via-blue-400/20 to-[#5de0e6]/30 blur-2xl animate-pulse delay-75" />
              
              {/* Tertiary glow */}
              <div className="absolute w-full max-w-3xl h-[120%] bg-gradient-to-r from-blue-400/20 via-[#5de0e6]/30 to-blue-400/20 blur-xl animate-pulse delay-150" />
              
              {/* Shimmer effect */}
              <div className="absolute w-full max-w-3xl h-[120%] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
            </div>

            <div className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 relative">
              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-white/5" />
              
              {/* Content */}
              <div className="relative">
                {/* Title */}
                <div className="text-center mb-6">
                  <h2 className="text-4xl font-bold text-white">
                    Instructor Dashboard Access
                  </h2>
                  <div className="mt-2 h-0.5 bg-gradient-to-r from-white/0 via-white/50 to-white/0" />
                </div>

                {/* Description */}
                <p className="text-white/90 text-center text-lg mb-6">
                  Get access to powerful tools and resources to manage your fundraising campaign effectively.
                </p>
                
                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    {
                      title: 'Complete Dashboard',
                      description: 'Track progress and monitor success'
                    },
                    {
                      title: 'Management Tools',
                      description: 'Organize fundraising activities'
                    },
                    {
                      title: 'Analytics',
                      description: 'Monitor campaign activity'
                    },
                    {
                      title: 'Resources',
                      description: 'Access step-by-step guides'
                    },
                    {
                      title: 'Page Builder',
                      description: 'Create custom campaign pages'
                    },
                    {
                      title: 'Student Setup',
                      description: 'Easy campaign setup guides'
                    }
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="group p-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all duration-300"
                    >
                      <h3 className="text-white font-semibold text-sm mb-0.5">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 text-xs">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom Section */}
                <div className="text-center space-y-2">
                  <p className="text-white/90 font-medium text-base">
                    Ready to transform your fundraising?
                  </p>
                  <p className="text-white/70 text-sm">
                    Create your account to access these tools
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#5de0e6] to-[#4bc5cb]" />
          
          {/* Background image with reduced opacity */}
          <div className="absolute inset-0 bg-[url('https://i.postimg.cc/YCcpSVcg/Lock-Screen-BG-Site.png')] bg-cover bg-center opacity-10" />
          
          {/* Enhanced wave effects container */}
          <div className="absolute inset-0 animate-[flagWave_6s_ease-in-out_infinite]">
            {/* Ripple effects */}
            {[...Array(5)].map((_, i) => (
              <div
                key={`ripple-${i}`}
                className="absolute inset-0 bg-white/10 rounded-full"
                style={{
                  animation: `ripple ${8 + i * 2}s ease-out infinite`,
                  animationDelay: `${i * 2}s`,
                  transform: 'scale(0.8)',
                  left: '50%',
                  top: '50%',
                  width: '200%',
                  height: '200%',
                  marginLeft: '-100%',
                  marginTop: '-100%',
                  opacity: 0
                }}
              />
            ))}

            {/* Main waves */}
            <div className="absolute inset-0">
              {/* First wave */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30"
                style={{
                  transform: 'rotate(-45deg) scale(2)',
                  animation: 'wave 6s ease-in-out infinite',
                  maskImage: 'linear-gradient(45deg, transparent 30%, black 50%, transparent 70%)',
                  WebkitMaskImage: 'linear-gradient(45deg, transparent 30%, black 50%, transparent 70%)'
                }}
              />
              
              {/* Second wave */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20"
                style={{
                  transform: 'rotate(45deg) scale(2)',
                  animation: 'wave 6s ease-in-out infinite reverse',
                  animationDelay: '-3s',
                  maskImage: 'linear-gradient(-45deg, transparent 30%, black 50%, transparent 70%)',
                  WebkitMaskImage: 'linear-gradient(-45deg, transparent 30%, black 50%, transparent 70%)'
                }}
              />
              
              {/* Third wave */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-white/25 via-transparent to-white/25"
                style={{
                  transform: 'translateY(-50%) scale(3)',
                  animation: 'wave 8s linear infinite',
                  maskImage: 'linear-gradient(transparent 30%, black 50%, transparent 70%)',
                  WebkitMaskImage: 'linear-gradient(transparent 30%, black 50%, transparent 70%)'
                }}
              />
            </div>
          </div>
          
          {/* Content overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20" />
        </div>
      </div>
    </div>
  );
}