import React from 'react';
import { SectionBackground } from '../components/common/SectionBackground';
import { Footer } from '../components/Footer/Footer';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import { AnimatedHeader } from '../components/common/AnimatedHeader';

export function Contact() {
  return (
    <>
      <SectionBackground className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedHeader as="h1" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </AnimatedHeader>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your school's fundraising? We're here to help you get started 
              and answer any questions you may have.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </SectionBackground>
      <Footer />
    </>
  );
}