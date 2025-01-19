import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What's the interview process like?",
    answer: "Our interview process typically includes an initial phone screen, a technical or role-specific interview, and a final team culture fit interview. We aim to be transparent and communicative throughout the process."
  },
  {
    question: "Do you offer remote work options?",
    answer: "Yes! We're a remote-first company with team members across the country. We believe in providing flexibility while maintaining strong team collaboration."
  },
  {
    question: "What's the onboarding process like?",
    answer: "New team members go through a comprehensive 2-week onboarding program, including product training, team introductions, and mentorship pairing."
  },
  {
    question: "How often do you have new openings?",
    answer: "We're growing steadily and regularly add new positions. Even if you don't see a current opening that matches your skills, we encourage you to submit your resume for future opportunities."
  }
];

export function CareerFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}