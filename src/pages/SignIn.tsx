import React from 'react';
import { Link } from 'react-router-dom';
import { SignInForm } from '../components/auth/SignInForm';
import { SectionBackground } from '../components/common/SectionBackground';
import { Footer } from '../components/Footer';

export function SignIn() {
  return (
    <>
      <SectionBackground className="pt-32 pb-20">
        <div className="max-w-md mx-auto px-4">
          <SignInForm />
          <p className="text-center mt-6 text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-[#5de0e6] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </SectionBackground>
      <Footer />
    </>
  );
}