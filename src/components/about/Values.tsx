import React from 'react';
import { GraduationCap, Rocket, Heart, DollarSign, Users2 } from 'lucide-react';
import { FeatureHighlight } from '../Features/FeatureHighlight';
import { AnimatedHeader } from '../common/AnimatedHeader';

const values = [
  {
    icon: GraduationCap,
    title: "Educational Excellence",
    description: "We're committed to helping schools provide enhanced learning experiences through sustainable funding solutions.",
    model: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    icon: DollarSign,
    title: "Sustainable Funding",
    description: "Creating year-round revenue streams that allow programs to focus on teaching rather than fundraising.",
    model: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    icon: Heart,
    title: "Program Support",
    description: "Every fundraising campaign directly supports enriching activities, equipment, and experiences for students.",
    model: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
];

export function Values() {
  return (
    <div className="mb-20">
      <AnimatedHeader className="text-3xl font-bold text-center text-gray-900 mb-16">
        Our Core Values
      </AnimatedHeader>
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div key={index} className="group perspective">
            <div className="relative transform transition-all duration-1000 preserve-3d group-hover:rotate-y-180">
              {/* Front */}
              <div className="backface-hidden">
                <FeatureHighlight
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              </div>
              
              {/* Back */}
              <div className="absolute inset-0 backface-hidden rotate-y-180">
                <div className="h-full bg-gradient-to-br from-[#5de0e6] to-[#4bc5cb] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={value.model}
                    alt={value.title}
                    className="w-full h-full object-cover mix-blend-overlay opacity-90 transform scale-105 group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                      <p className="text-white/90">{value.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}