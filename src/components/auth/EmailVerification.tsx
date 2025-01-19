import React, { useState, useEffect } from 'react';
import { Lock, Mail, ArrowRight } from 'lucide-react';
import { verifyCode, resendVerificationCode, isEmailVerified } from '../../lib/auth';

interface EmailVerificationProps {
  email: string;
  onVerified: () => void;
}

export function EmailVerification({ email, onVerified }: EmailVerificationProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  useEffect(() => {
    // Check if email is already verified
    const checkVerification = async () => {
      const isVerified = await isEmailVerified();
      if (isVerified) {
        setVerified(true);
        onVerified();
      }
    };

    checkVerification();
  }, [onVerified]);

  useEffect(() => {
    // Handle resend timer
    if (resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setResendDisabled(false);
    }
  }, [resendTimer]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await verifyCode(email, code);
      if (response.success) {
        setVerified(true);
        onVerified();
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
    setResendDisabled(true);
    setResendTimer(60); // 60 second cooldown

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

  if (verified) {
    return (
      <div className="text-center space-y-4">
        <div className="inline-block p-4 bg-green-100 rounded-full mb-2">
          <Lock className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Email Verified!</h3>
        <p className="text-gray-600">Your email has been successfully verified.</p>
        <button
          onClick={onVerified}
          className="mt-4 inline-flex items-center px-6 py-3 bg-[#5de0e6] text-white rounded-lg hover:bg-[#4bc5cb] transition-colors"
        >
          Continue
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Email Info */}
      <div className="text-center">
        <div className="inline-block p-4 bg-[#5de0e6]/10 rounded-full mb-4">
          <Mail className="w-8 h-8 text-[#5de0e6]" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Check Your Email</h3>
        <p className="text-gray-600">
          We've sent a verification code to <strong>{email}</strong>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        <div>
          <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
            Enter Verification Code
          </label>
          <div className="relative">
            <input
              type="text"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
              className="w-full px-4 py-3 text-center text-2xl tracking-[0.5em] rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5de0e6] focus:border-[#5de0e6] font-mono"
              maxLength={6}
              placeholder="000000"
              disabled={loading}
              required
            />
            {loading && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="w-5 h-5 border-2 border-[#5de0e6] border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <button
            type="submit"
            disabled={loading || code.length !== 6}
            className="w-full bg-[#5de0e6] text-white py-3 rounded-lg font-medium hover:bg-[#4bc5cb] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Verifying...' : 'Verify Email'}
          </button>

          <div className="text-center">
            <button
              type="button"
              onClick={handleResend}
              disabled={loading || resendDisabled}
              className="text-[#5de0e6] hover:text-[#4bc5cb] text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {resendTimer > 0 
                ? `Resend code in ${resendTimer}s` 
                : "Didn't receive the code? Resend"}
            </button>
          </div>
        </div>
      </form>

      <div className="text-center text-sm text-gray-500">
        <p>
          Check your spam folder if you don't see the email in your inbox.
        </p>
      </div>
    </div>
  );
}