import React from 'react';
import { Box, AlertTriangle } from 'lucide-react';

const inventory = [
  {
    name: 'Lincoln High Spirit T-Shirt',
    sku: 'LHS-001',
    stock: 45,
    reorderPoint: 20,
    status: 'In Stock'
  },
  {
    name: 'Riverside Academy Hoodie',
    sku: 'RAH-002',
    stock: 12,
    reorderPoint: 15,
    status: 'Low Stock'
  },
  {
    name: 'Oakridge High Baseball Cap',
    sku: 'OHC-003',
    stock: 8,
    reorderPoint: 10,
    status: 'Low Stock'
  }
];

export function InventoryStatus() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Box className="w-5 h-5 text-[#5de0e6]" />
            <h2 className="text-lg font-semibold text-gray-900">Inventory Status</h2>
          </div>
          <button className="text-sm text-[#5de0e6] hover:text-[#4bc5cb]">Manage Inventory</button>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {inventory.map((item) => (
            <div key={item.sku} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                <p className="text-xs text-gray-500">SKU: {item.sku}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{item.stock} units</p>
                  <p className="text-xs text-gray-500">Reorder at {item.reorderPoint}</p>
                </div>
                {item.stock <= item.reorderPoint && (
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}