import React from 'react';
import { SectionBackground } from '../components/common/SectionBackground';
import { Footer } from '../components/Footer/Footer';
import { HeartHandshake, MessageCircle, Clock, Users2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import { AnimatedHeader } from '../components/common/AnimatedHeader';
import { FAQSection } from '../components/support/FAQSection';

const features = [
  {
    icon: HeartHandshake,
    title: "Dedicated Support Advisor",
    description: "Get paired with a personal fundraising advisor who understands your program's unique needs"
  },
  {
    icon: MessageCircle,
    title: "Always Available",
    description: "Whether you're troubleshooting or brainstorming, we're here to help anytime"
  },
  {
    icon: Clock,
    title: "Quick Response Time",
    description: "Get answers to your questions within hours, not days"
  },
  {
    icon: Users2,
    title: "Community Support",
    description: "Connect with other instructors and share fundraising success stories"
  }
];

export function Support() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800">
        <div className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Box */}
            <div className="relative mb-16">
              {/* Enhanced background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 blur-lg opacity-50 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 via-purple-300/20 to-purple-400/30 blur-xl" />
              <div className="absolute inset-0 bg-gradient-to-tl from-purple-400/20 via-white/30 to-purple-400/20 blur-2xl" />
              
              <div className="relative bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 p-1 rounded-2xl">
                <div className="bg-transparent backdrop-blur-sm px-8 py-4 rounded-xl">
                  <div className="flex items-center justify-center space-x-6">
                    <div className="relative">
                      <img 
                        src="https://i.ibb.co/hKRkZ6s/Untitled-design-11.png"
                        alt="Fundy Mascot"
                        className="w-24 h-24 object-contain animate-bounce-slow relative z-10"
                      />
                      <div className="absolute -bottom-4 left-4 w-16 h-4 bg-black/20 rounded-full blur-sm animate-bounce-slow transform -skew-x-12"></div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold relative">
                      {/* Base text */}
                      <span className="text-white relative">
                        Instructor Support
                      </span>

                      {/* Static shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-30 blur-sm" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-20 blur-md" />

                      {/* Neon underline */}
                      <span className="absolute -bottom-2 left-0 right-0 h-[4px] bg-gradient-to-r from-purple-300 via-white to-purple-300 animate-pulse shadow-[0_0_15px_#9333ea,0_0_30px_#9333ea,0_0_45px_#9333ea]" />
                      <span className="absolute -bottom-2 left-0 right-0 h-[4px] bg-gradient-to-r from-purple-300 via-white to-purple-300 blur-[3px] animate-pulse opacity-95" />
                      <span className="absolute -bottom-2 left-0 right-0 h-[4px] bg-gradient-to-r from-purple-300 via-white to-purple-300 blur-[6px] animate-pulse opacity-90" />
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-16">
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Ready to transform your school's fundraising? We're here to help you get started 
                and answer any questions you may have.
              </p>
            </div>

            {/* Rest of the content remains unchanged */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/20">
                <ContactForm />
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/20">
                <ContactInfo />
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Free Support, Always
              </h2>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                At Fundrobe, we believe instructors should never have to pay for great service and support. 
                Your success is our success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="inline-block p-3 bg-purple-500/30 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-purple-200" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-purple-100">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/20 mb-20">
              <FAQSection />
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Join thousands of instructors who have transformed their fundraising with Fundrobe's 
                  dedicated support system.
                </p>
                <Link
                  to="/"
                  className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors"
                >
                  Start Your Campaign
                </Link>
              </div>
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}