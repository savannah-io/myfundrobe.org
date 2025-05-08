import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { NeonFormContainer } from '../common/NeonForm';
import { NeonInput } from '../common/NeonInput';
import { NeonButton } from '../common/NeonButton';

export function SignInForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    setLoading(true);
    setError('');
    
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;
      navigate('/blog');
    } catch (error) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <NeonFormContainer title="Sign In">
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

        <NeonButton type="submit" disabled={loading}>
          <span>{loading ? 'Signing In...' : 'Sign In'}</span>
          <LogIn className="w-4 h-4 ml-2" />
        </NeonButton>
      </form>
    </NeonFormContainer>
  );
}