import React from 'react';

export function ContactFormHero() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Start Your Fundraising Journey
      </h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700">School Name</label>
          <input
            type="text"
            id="schoolName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your school name"
            required
          />
        </div>
        <div>
          <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">Contact Name</label>
          <input
            type="text"
            id="contactName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            id="phone"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div>
          <label htmlFor="groupType" className="block text-sm font-medium text-gray-700">Group Type</label>
          <select
            id="groupType"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="">Select your group type</option>
            <option value="school">School</option>
            <option value="sports">Sports Team</option>
            <option value="band">Band</option>
            <option value="rotc">ROTC</option>
            <option value="club">Club</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
        >
          Schedule Free Consultation
        </button>
      </form>
    </div>
  );
}