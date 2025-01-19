import React from 'react';
import { Step } from './Step';

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          How It Works
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <Step number="1" title="Book a Call" description="Schedule your free onboarding consultation" />
          <Step number="2" title="Design" description="We create your custom online store" />
          <Step number="3" title="Launch" description="Share your store link with your community" />
          <Step number="4" title="Earn" description="Start earning funds from every purchase" />
        </div>
      </div>
    </section>
  );
}