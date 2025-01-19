import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BarChart, DollarSign, Users, TrendingUp } from 'lucide-react';
import { getSchoolProgram, getProgramMetrics, getProgramDonations } from '../lib/program';
import type { SchoolProgram, ProgramMetrics, ProgramDonation } from '../types/program';

export function InstructorPortal() {
  const { programId } = useParams();
  const [program, setProgram] = useState<SchoolProgram | null>(null);
  const [metrics, setMetrics] = useState<ProgramMetrics[]>([]);
  const [donations, setDonations] = useState<ProgramDonation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProgramData() {
      if (!programId) return;
      
      try {
        const [programData, metricsData, donationsData] = await Promise.all([
          getSchoolProgram(programId),
          getProgramMetrics(programId),
          getProgramDonations(programId)
        ]);

        setProgram(programData);
        setMetrics(metricsData);
        setDonations(donationsData);
      } catch (error) {
        console.error('Error loading program data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProgramData();
  }, [programId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!program) {
    return <div>Program not found</div>;
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{program.name}</h1>
          <p className="text-gray-600">Instructor Dashboard</p>
        </div>
        <div className="flex space-x-4">
          <button className="bg-[#5de0e6] text-white px-4 py-2 rounded-lg hover:bg-[#4bc5cb] transition-colors">
            Export Data
          </button>
          <button className="bg-white text-gray-900 px-4 py-2 rounded-lg border hover:bg-gray-50 transition-colors">
            Settings
          </button>
        </div>
      </div>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Donations"
          value={`$${donations.reduce((sum, d) => sum + d.amount, 0).toLocaleString()}`}
          icon={DollarSign}
        />
        <MetricCard
          title="Total Donors"
          value={donations.length.toString()}
          icon={Users}
        />
        <MetricCard
          title="Average Donation"
          value={`$${(donations.reduce((sum, d) => sum + d.amount, 0) / (donations.length || 1)).toFixed(2)}`}
          icon={BarChart}
        />
        <MetricCard
          title="Monthly Growth"
          value="+12%"
          icon={TrendingUp}
        />
      </div>

      {/* Recent Donations */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Recent Donations</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Donor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tier</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {donations.slice(0, 5).map((donation) => (
                <tr key={donation.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {donation.isAnonymous ? 'Anonymous Donor' : donation.donorName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${donation.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {donation.tier}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(donation.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
}

function MetricCard({ title, value, icon: Icon }: MetricCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-[#5de0e6]/10 rounded-xl">
          <Icon className="w-6 h-6 text-[#5de0e6]" />
        </div>
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}