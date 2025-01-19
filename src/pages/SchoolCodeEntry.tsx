import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, UserPlus } from 'lucide-react';
import { validateAccessCode, logAccessAttempt } from '../lib/access';

export function SchoolCodeEntry() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    // Only allow alphanumeric characters
    if (/^[A-Z0-9]*$/.test(value) && value.length <= 4) {
      setCode(value);
      setError(''); // Clear error when user types
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate code format
    if (!code || code.length !== 4) {
      setError('Please enter a valid 4-digit code');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const isValid = await validateAccessCode(code);
      
      // Log the access attempt
      await logAccessAttempt(code, isValid);

      if (isValid) {
        // Special case for welcome page
        if (code === '0001') {
          navigate('/welcome');
          return;
        }
        navigate(`/${code}`);
      } else {
        setError('Invalid school code. Please try again.');
      }
    } catch (error) {
      console.error('Error validating code:', error);
      setError('Error validating code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://i.postimg.cc/zffx4P5c/Untitled-design-1.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Add a subtle overlay */}
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Fundrobe Logo and Text */}
      <div className="absolute top-6 left-6 z-20 flex items-center space-x-3">
        <img
          src="https://i.im.ge/2025/01/06/zp6jNc.Animated-Fundrobe-Logo-2.png"
          alt="Fundrobe Logo"
          className="w-10 h-10 object-contain"
        />
        <span className="text-[#5de0e6] text-2xl font-bold tracking-wide">
          Fundrobe
        </span>
      </div>

      {/* Auth Buttons */}
      <div className="absolute top-6 right-6 z-20 flex items-center space-x-4">
        <Link
          to="/signin"
          className="px-6 py-2 rounded-full bg-transparent border-2 border-[#5de0e6] text-[#5de0e6] font-semibold hover:bg-[#5de0e6]/10 transition-all duration-300 group relative flex items-center space-x-2"
        >
          <div className="absolute inset-0 bg-[#5de0e6]/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity rounded-full" />
          <LogIn className="w-4 h-4 relative z-10" />
          <span className="relative z-10">Instructor Dashboard</span>
        </Link>
        <Link
          to="/signup"
          className="px-6 py-2 rounded-full bg-transparent border-2 border-[#5de0e6] text-[#5de0e6] font-semibold hover:bg-[#5de0e6]/10 transition-all duration-300 group relative flex items-center space-x-2"
        >
          <div className="absolute inset-0 bg-[#5de0e6]/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity rounded-full" />
          <UserPlus className="w-4 h-4 relative z-10" />
          <span className="relative z-10">Sign Up</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Black gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40 backdrop-blur-sm rounded-3xl" />
        
        {/* Fundy Logo with Smoke and Thruster Animation */}
        <div className="absolute -top-24 -left-64 w-96 h-96">
          <div className="relative w-full h-full" style={{ animation: 'slideIn 1s ease-out forwards, floatAnimation 4s ease-in-out infinite' }}>
            {/* Thruster Effects */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-40 overflow-hidden">
              {/* Main Thruster Beam */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-32">
                <div 
                  className="absolute bottom-0 w-full h-full bg-gradient-to-t from-[#5de0e6] via-[#5de0e6]/50 to-transparent animate-[thrusterPulse_0.5s_ease-in-out_infinite]"
                />
              </div>

              {/* Side Thrusters */}
              <div className="absolute bottom-0 left-0 w-8 h-24">
                <div 
                  className="absolute bottom-0 w-full h-full bg-gradient-to-t from-[#5de0e6] via-[#5de0e6]/50 to-transparent animate-[thrusterPulse_0.5s_ease-in-out_infinite_0.1s]"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-24">
                <div 
                  className="absolute bottom-0 w-full h-full bg-gradient-to-t from-[#5de0e6] via-[#5de0e6]/50 to-transparent animate-[thrusterPulse_0.5s_ease-in-out_infinite_0.2s]"
                />
              </div>

              {/* Thruster Particles */}
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bottom-0 left-1/2 w-2 h-2 rounded-full bg-[#5de0e6]"
                  style={{
                    left: `${30 + Math.random() * 40}%`,
                    animation: `thrusterParticle ${0.5 + Math.random() * 0.5}s ease-out infinite ${i * 0.1}s`
                  }}
                />
              ))}
            </div>

            {/* Smoke Effects */}
            <div className="absolute inset-0 z-0">
              {/* Smoke Puffs */}
              <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 bg-white/10 rounded-full"
                    style={{
                      animation: `smokePuff 2s ease-out forwards ${i * 0.2}s`,
                      transform: `rotate(${i * 60}deg)`,
                    }}
                  />
                ))}
              </div>
              
              {/* Smoke Rings */}
              <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 border-4 border-white/5 rounded-full"
                    style={{
                      animation: `smokeRing 2.5s ease-out forwards ${i * 0.3}s`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Logo with Glow */}
            <div className="relative w-full h-full hover:scale-110 transition-transform duration-300">
              <div className="absolute inset-0 bg-[#5de0e6]/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute inset-0 bg-[#5de0e6]/10 rounded-full blur-2xl animate-pulse delay-75" />
              <div className="absolute inset-0 bg-[#5de0e6]/5 rounded-full blur-xl animate-pulse delay-150" />
              <img
                src="https://i.postimg.cc/76XpGSw8/fundylogo.png"
                alt="Fundy Logo"
                className="relative z-10 w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="relative text-center space-y-8 p-12">
          {/* Title with Neon Effect */}
          <div className="mb-12">
            <div className="text-center">
              <h1 className="relative text-4xl font-bold mb-4">
                <span className="absolute inset-0 text-[#5de0e6] blur-[2px] animate-pulse">
                  Enter School Code
                </span>
                <span className="absolute inset-0 text-[#5de0e6] blur-md opacity-70 animate-pulse">
                  Enter School Code
                </span>
                <span className="absolute inset-0 text-[#5de0e6] blur-xl opacity-50 animate-pulse">
                  Enter School Code
                </span>
                <span className="relative text-[#5de0e6]">
                  Enter School Code
                </span>
              </h1>
              <p className="text-[#5de0e6]/80 text-lg">
                Enter your 4-digit school code to access your program
              </p>
            </div>
          </div>
          
          {/* Input with Neon Border */}
          <div className="relative">
            <div className="absolute -inset-1 bg-[#5de0e6] opacity-75 blur-lg" />
            <div className="absolute -inset-0.5 bg-[#5de0e6] opacity-50 blur-md" />
            
            <input
              type="text"
              value={code}
              onChange={handleCodeChange}
              maxLength={4}
              className="relative w-full text-center text-5xl font-bold tracking-[0.75em] py-6 bg-black/40 rounded-xl border-2 border-[#5de0e6] text-[#5de0e6] uppercase placeholder:text-[#5de0e6]/30 placeholder:tracking-[0.5em] placeholder:text-4xl focus:outline-none focus:border-[#5de0e6] focus:shadow-[0_0_20px_rgba(93,224,230,0.5)]"
              placeholder="XXXX"
              disabled={loading}
              aria-label="School Code"
              autoComplete="off"
            />
            
            {error && (
              <p className="absolute left-0 right-0 top-full mt-2 text-red-400 text-sm">
                {error}
                <span className="absolute inset-0 blur-sm bg-red-400 opacity-30 z-[-1]" />
              </p>
            )}
          </div>

          {/* Submit Button with Neon Effect */}
          <button
            type="submit"
            disabled={loading || code.length !== 4}
            className="relative px-12 py-4 rounded-full bg-transparent border-2 border-[#5de0e6] text-[#5de0e6] font-semibold text-xl disabled:opacity-50 disabled:cursor-not-allowed group hover:bg-[#5de0e6]/10 transition-colors"
          >
            <div className="absolute inset-0 -z-10 bg-[#5de0e6] opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
            <div className="absolute inset-0 -z-10 bg-[#5de0e6] opacity-10 blur-2xl group-hover:opacity-20 transition-opacity" />
            
            <span className="relative">
              {loading ? 'Validating...' : 'Enter Program'}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}