import React from 'react';
import { Send } from 'lucide-react';
import { NeonFormContainer } from './common/NeonForm';
import { NeonInput } from './common/NeonInput';
import { NeonButton } from './common/NeonButton';

export function ContactForm() {
  return (
    <NeonFormContainer title="Start Your Fundraising Journey">
      <form className="space-y-6">
        <NeonInput
          id="schoolName"
          label="School Name"
          type="text"
          placeholder="Enter your school name"
          required
        />
        <NeonInput
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          required
        />
        <NeonInput
          id="phone"
          label="Phone"
          type="tel"
          placeholder="Enter your phone number"
          required
        />
        <NeonButton type="submit">
          <span>Schedule Free Consultation</span>
          <Send className="w-4 h-4 ml-2" />
        </NeonButton>
      </form>
    </NeonFormContainer>
  );
}