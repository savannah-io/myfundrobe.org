import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { verifyCode, resendVerificationCode } from '../lib/auth';

export function VerifyEmail() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await verifyCode(email, code);
      if (response.success) {
        navigate('/dashboard');
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError('Error verifying code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setError('');
    setLoading(true);

    try {
      const response = await resendVerificationCode(email);
      if (!response.success) {
        setError(response.message);
      }
    } catch (error) {
      setError('Error resending code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Verify Your Email</h2>
        <p className="text-gray-600 mb-8">
          Please enter the 4-digit code sent to your email address.
        </p>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
              Verification Code
            </label>
            <input
              type="text"
              id="code"
              maxLength={4}
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
              className="w-full px-4 py-3 text-center text-2xl tracking-widest rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5de0e6] focus:border-[#5de0e6]"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading || code.length !== 4}
            className="w-full py-3 bg-gradient-to-r from-[#5de0e6] to-[#4bc5cb] text-gray-900 rounded-lg font-semibold hover:from-[#4bc5cb] hover:to-[#3ab0b6] transition-all duration-300 disabled:opacity-50"
          >
            {loading ? 'Verifying...' : 'Verify Email'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={handleResend}
            disabled={loading}
            className="text-[#5de0e6] hover:text-[#4bc5cb] text-sm font-medium"
          >
            Resend Code
          </button>
        </div>
      </div>
    </div>
  );
}