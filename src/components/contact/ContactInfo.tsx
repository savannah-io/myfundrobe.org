import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Address',
    content: '123 E River St, Savannah GA, 31404'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '(470) 350-3601'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'support@fundrobe.org'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Monday - Saturday: 7:00 AM - 5:00 PM EST'
  }
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
        <div className="space-y-6">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="p-2 bg-purple-500/30 rounded-lg">
                <detail.icon className="w-6 h-6 text-purple-200" />
              </div>
              <div>
                <h3 className="font-medium text-white">{detail.title}</h3>
                <p className="text-purple-100">{detail.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Preview */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-white mb-2">
              How does the fundraising program work?
            </h3>
            <p className="text-purple-100">
              We create a custom online store for your school featuring branded merchandise. 
              Your community can purchase items year-round, and you earn funds from every sale.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-white mb-2">
              Is there any upfront cost?
            </h3>
            <p className="text-purple-100">
              No! There are no upfront costs or inventory requirements. We handle 
              production, shipping, and customer service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}