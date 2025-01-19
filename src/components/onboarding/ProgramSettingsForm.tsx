import React, { useState } from 'react';
import { Settings, Bell, Mail } from 'lucide-react';

interface ProgramSettingsFormProps {
  initialData?: {
    notificationsEnabled: boolean;
    emailUpdates: boolean;
    donationAlerts: boolean;
    minimumDonation: number;
    customThankYouMessage: string;
  };
  onSubmit: (data: {
    notificationsEnabled: boolean;
    emailUpdates: boolean;
    donationAlerts: boolean;
    minimumDonation: number;
    customThankYouMessage: string;
  }) => void;
}

export function ProgramSettingsForm({ initialData, onSubmit }: ProgramSettingsFormProps) {
  const [settings, setSettings] = useState({
    notificationsEnabled: initialData?.notificationsEnabled ?? true,
    emailUpdates: initialData?.emailUpdates ?? true,
    donationAlerts: initialData?.donationAlerts ?? true,
    minimumDonation: initialData?.minimumDonation ?? 5,
    customThankYouMessage: initialData?.customThankYouMessage ?? 'Thank you for supporting our program!'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(settings);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Notification Settings */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <Bell className="w-5 h-5 text-[#5de0e6] mr-2" />
          Notification Preferences
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label htmlFor="notifications" className="font-medium text-gray-700">
                Enable Notifications
              </label>
              <p className="text-sm text-gray-500">
                Receive updates about donations and program activity
              </p>
            </div>
            <input
              type="checkbox"
              id="notifications"
              checked={settings.notificationsEnabled}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                notificationsEnabled: e.target.checked
              }))}
              className="h-4 w-4 text-[#5de0e6] focus:ring-[#5de0e6] border-gray-300 rounded"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label htmlFor="emailUpdates" className="font-medium text-gray-700">
                Email Updates
              </label>
              <p className="text-sm text-gray-500">
                Receive weekly summary reports via email
              </p>
            </div>
            <input
              type="checkbox"
              id="emailUpdates"
              checked={settings.emailUpdates}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                emailUpdates: e.target.checked
              }))}
              className="h-4 w-4 text-[#5de0e6] focus:ring-[#5de0e6] border-gray-300 rounded"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label htmlFor="donationAlerts" className="font-medium text-gray-700">
                Donation Alerts
              </label>
              <p className="text-sm text-gray-500">
                Get notified immediately when you receive a donation
              </p>
            </div>
            <input
              type="checkbox"
              id="donationAlerts"
              checked={settings.donationAlerts}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                donationAlerts: e.target.checked
              }))}
              className="h-4 w-4 text-[#5de0e6] focus:ring-[#5de0e6] border-gray-300 rounded"
            />
          </div>
        </div>
      </div>

      {/* Donation Settings */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <Settings className="w-5 h-5 text-[#5de0e6] mr-2" />
          Donation Settings
        </h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="minimumDonation" className="block text-sm font-medium text-gray-700">
              Minimum Donation Amount ($)
            </label>
            <input
              type="number"
              id="minimumDonation"
              min="1"
              value={settings.minimumDonation}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                minimumDonation: Number(e.target.value)
              }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#5de0e6] focus:ring-[#5de0e6] sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="thankYouMessage" className="block text-sm font-medium text-gray-700">
              Custom Thank You Message
            </label>
            <textarea
              id="thankYouMessage"
              rows={4}
              value={settings.customThankYouMessage}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                customThankYouMessage: e.target.value
              }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#5de0e6] focus:ring-[#5de0e6] sm:text-sm"
              placeholder="Enter a custom message to thank your donors..."
            />
          </div>
        </div>
      </div>

      {/* Preview */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <Mail className="w-5 h-5 text-[#5de0e6] mr-2" />
          Email Preview
        </h3>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-700">Thank You Email Preview</h4>
              <div className="mt-2 p-4 bg-white rounded border border-gray-200">
                <p className="text-gray-600">{settings.customThankYouMessage}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}