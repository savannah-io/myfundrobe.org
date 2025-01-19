import React, { useState } from 'react';
import type { ProductVariant } from '../../types/inventory';

interface VariantFormProps {
  initialData?: ProductVariant;
  onSubmit: (data: Omit<ProductVariant, 'id' | 'created_at'>) => void;
  onCancel: () => void;
}

export function VariantForm({ initialData, onSubmit, onCancel }: VariantFormProps) {
  const [formData, setFormData] = useState({
    productId: initialData?.productId || '',
    size: initialData?.size || '',
    color: initialData?.color || '',
    priceAdjustment: initialData?.priceAdjustment || 0,
    sku: initialData?.sku || '',
    isActive: initialData?.isActive ?? true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label htmlFor="sku" className="block text-sm font-medium text-gray-700 mb-2">
            SKU
          </label>
          <input
            type="text"
            id="sku"
            value={formData.sku}
            onChange={(e) => setFormData(prev => ({ ...prev, sku: e.target.value }))}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5de0e6] focus:border-[#5de0e6]"
            required
          />
        </div>

        <div>
          <label htmlFor="priceAdjustment" className="block text-sm font-medium text-gray-700 mb-2">
            Price Adjustment ($)
          </label>
          <input
            type="number"
            id="priceAdjustment"
            value={formData.priceAdjustment}
            onChange={(e) => setFormData(prev => ({ ...prev, priceAdjustment: Number(e.target.value) }))}
            step="0.01"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5de0e6] focus:border-[#5de0e6]"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-2">
            Size
          </label>
          <input
            type="text"
            id="size"
            value={formData.size}
            onChange={(e) => setFormData(prev => ({ ...prev, size: e.target.value }))}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5de0e6] focus:border-[#5de0e6]"
          />
        </div>

        <div>
          <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-2">
            Color
          </label>
          <input
            type="text"
            id="color"
            value={formData.color}
            onChange={(e) => setFormData(prev => ({ ...prev, color: e.target.value }))}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5de0e6] focus:border-[#5de0e6]"
          />
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="isActive"
          checked={formData.isActive}
          onChange={(e) => setFormData(prev => ({ ...prev, isActive: e.target.checked }))}
          className="h-4 w-4 text-[#5de0e6] focus:ring-[#5de0e6] border-gray-300 rounded"
        />
        <label htmlFor="isActive" className="ml-2 text-sm text-gray-700">
          Active Variant
        </label>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-700 hover:text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-[#5de0e6] text-white rounded-lg hover:bg-[#4bc5cb] transition-colors"
        >
          {initialData ? 'Update Variant' : 'Create Variant'}
        </button>
      </div>
    </form>
  );
}