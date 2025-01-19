import React from 'react';
import { Book, Calendar, FileText, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Book,
    title: "Order History",
    description: "View your past orders and track current deliveries"
  },
  {
    icon: Calendar,
    title: "Upcoming Events",
    description: "Stay updated on fundraising events and spirit wear sales"
  },
  {
    icon: FileText,
    title: "Documents",
    description: "Access important forms and fundraising materials"
  },
  {
    icon: MessageCircle,
    title: "Support",
    description: "Get help with orders or fundraising questions"
  }
];

export function ParentPortal() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Parent Portal</h1>
        <button className="bg-[#5de0e6] text-white px-4 py-2 rounded-lg hover:bg-[#4bc5cb] transition-colors">
          Contact Support
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="p-2 bg-[#5de0e6]/10 rounded-lg w-fit mb-4">
                <Icon className="w-6 h-6 text-[#5de0e6]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Orders</h2>
        {/* Add order history table here */}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Events</h2>
        {/* Add events calendar/list here */}
      </div>
    </div>
  );
}