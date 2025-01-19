import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does the fundraising program work?",
    answer: "We create a custom online store for your school featuring branded merchandise. Your community can purchase items year-round, and you earn funds from every sale. We handle all production, shipping, and customer service."
  },
  {
    question: "Is there any upfront cost?",
    answer: "No! There are absolutely no upfront costs or inventory requirements. We handle all production and shipping costs. You only earn money - you never spend it."
  },
  {
    question: "How long does it take to get started?",
    answer: "The process is quick! After a 15-minute consultation, we'll create your custom designs within 24-48 hours. Once you approve the designs, your store can be live within days."
  },
  {
    question: "How do we receive our funds?",
    answer: "Funds are automatically deposited into your program's account monthly. You'll receive detailed reports of all sales and earnings for complete transparency."
  },
  {
    question: "What kind of support do you provide?",
    answer: "You'll have a dedicated fundraising advisor available to help with everything from campaign strategy to technical support. We provide ongoing assistance and regular check-ins to ensure your success."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <span className="font-medium text-white">{faq.question}</span>
              <div className="ml-4 flex-shrink-0">
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-purple-300" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-purple-300" />
                )}
              </div>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-6 pb-4 text-purple-100">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}