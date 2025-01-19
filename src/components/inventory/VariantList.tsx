import React from 'react';
import { Tag, Edit, Trash2 } from 'lucide-react';
import type { ProductVariant } from '../../types/inventory';

interface VariantListProps {
  variants: ProductVariant[];
  onEdit: (variant: ProductVariant) => void;
  onDelete: (variantId: string) => void;
}

export function VariantList({ variants, onEdit, onDelete }: VariantListProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Tag className="w-5 h-5 text-[#5de0e6]" />
            <h2 className="text-lg font-semibold text-gray-900">Variants</h2>
          </div>
          <span className="text-sm text-gray-500">{variants.length} items</span>
        </div>
      </div>
      
      <div className="divide-y divide-gray-100">
        {variants.map((variant) => (
          <div key={variant.id} className="p-6 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-900">SKU: {variant.sku}</div>
                <div className="mt-1 text-sm text-gray-500">
                  {variant.size && <span className="mr-4">Size: {variant.size}</span>}
                  {variant.color && <span>Color: {variant.color}</span>}
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  {variant.priceAdjustment !== 0 && (
                    <div className="text-sm font-medium text-gray-900">
                      {variant.priceAdjustment > 0 ? '+' : ''}{variant.priceAdjustment.toFixed(2)}
                    </div>
                  )}
                  {!variant.isActive && (
                    <div className="text-sm text-red-500">Inactive</div>
                  )}
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onEdit(variant)}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onDelete(variant.id)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}