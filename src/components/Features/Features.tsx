import React from 'react';
import { Calendar, DollarSign, Truck, Users, Palette } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { FeatureHighlight } from './FeatureHighlight';
import { SectionBackground } from '../common/SectionBackground';

const additionalFeatures = [
  {
    icon: Users,
    title: "Community Building",
    description: "Foster school spirit and unity through custom branded merchandise"
  },
  {
    icon: Palette,
    title: "Custom Design Service",
    description: "Professional designers create unique designs that represent your school"
  }
];

export function Features() {
  return (
    <SectionBackground className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Cost-Free Funding Year-Round
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of programs that have transformed their fundraising with our all-inclusive platform, featuring <strong>fundraising news, tips, and a personalized merchandise store</strong>.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-16">
          <FeatureHighlight 
            icon={Calendar}
            title="Year-Round Revenue"
            description="Unlike traditional one-time events, Fundrobe provides continuous passive income through customized spirit wear sales, supporting your program's needs throughout the entire year."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <FeatureCard 
            icon={<DollarSign className="w-8 h-8 text-[#5de0e6]" />}
            title="No Upfront Cost"
            description="Launch your fundraising campaign without any monetary investment. We handle all production and shipping costs."
          />
          <FeatureCard 
            icon={<Truck className="w-8 h-8 text-[#5de0e6]" />}
            title="Full-Service Solution"
            description="We manage everything from design to delivery, letting you focus on what matters most."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {additionalFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={<feature.icon className="w-8 h-8 text-[#5de0e6]" />}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </SectionBackground>
  );
}