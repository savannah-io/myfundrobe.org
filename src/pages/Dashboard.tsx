import React from 'react';
import { ShoppingCart, DollarSign, Package, TrendingUp } from 'lucide-react';
import { StatCard } from '../components/dashboard/StatCard';
import { RecentOrders } from '../components/dashboard/RecentOrders';
import { InventoryStatus } from '../components/dashboard/InventoryStatus';

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <button className="bg-[#5de0e6] text-white px-4 py-2 rounded-lg hover:bg-[#4bc5cb] transition-colors">
          New Order
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Orders"
          value="156"
          icon={ShoppingCart}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Revenue"
          value="$12,426"
          icon={DollarSign}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Products"
          value="45"
          icon={Package}
          trend={{ value: 2, isPositive: true }}
        />
        <StatCard
          title="Growth"
          value="24%"
          icon={TrendingUp}
          trend={{ value: 5, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RecentOrders />
        <InventoryStatus />
      </div>
    </div>
  );
}