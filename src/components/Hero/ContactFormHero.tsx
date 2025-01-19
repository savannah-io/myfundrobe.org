import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { groupTypeOptions } from './constants';
import { NeonFormContainer } from '../common/NeonForm';
import { NeonInput } from '../common/NeonInput';
import { NeonSelect } from '../common/NeonSelect';
import { NeonButton } from '../common/NeonButton';

export function ContactFormHero() {
  const [formData, setFormData] = useState({
    firstName: '',
    programName: '',
    email: '',
    programType: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(formData).every(value => value)) {
      window.open('https://calendly.com/2025fundrobe/30min', '_blank');
    }
  };

  return (
    <div id="contact-form" className="w-full">
      <NeonFormContainer title="Start Campaign Here">
        <form onSubmit={handleSubmit} className="space-y-4">
          <NeonInput
            id="firstName"
            label="First Name"
            type="text"
            placeholder="Enter your first name"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
          <NeonInput
            id="programName"
            label="Program Name"
            type="text"
            placeholder="Enter your program name"
            required
            value={formData.programName}
            onChange={handleChange}
          />
          <NeonInput
            id="email"
            label="Best Contact Email"
            type="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <NeonSelect
            id="programType"
            label="Program Type"
            options={groupTypeOptions}
            required
            value={formData.programType}
            onChange={handleChange}
          />
          <NeonButton type="submit">
            <span className="text-sm sm:text-base">Schedule Virtual Onboarding</span>
            <Send className="w-4 h-4 ml-2" />
          </NeonButton>
        </form>
      </NeonFormContainer>
    </div>
  );
}