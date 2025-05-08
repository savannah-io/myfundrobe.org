import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { NeonFormContainer } from '../common/NeonForm';
import { NeonInput } from '../common/NeonInput';
import { NeonButton } from '../common/NeonButton';

export function SignUpForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (signUpError) throw signUpError;

      // Wait a moment for the signup to process
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Only proceed with sign in if signup was successful
      if (signUpData.user) {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

        if (signInError) throw signInError;
        
        navigate('/blog');
      }
    } catch (error) {
      setError('Error creating account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <NeonFormContainer title="Create Account">
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}

        <NeonInput
          id="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <NeonInput
          id="password"
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <NeonInput
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <NeonButton type="submit" disabled={loading}>
          <span>{loading ? 'Creating Account...' : 'Sign Up'}</span>
          <UserPlus className="w-4 h-4 ml-2" />
        </NeonButton>
      </form>
    </NeonFormContainer>
  );
}