import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { ProductList } from '../components/inventory/ProductList';
import { ProductForm } from '../components/inventory/ProductForm';
import { VariantList } from '../components/inventory/VariantList';
import { VariantForm } from '../components/inventory/VariantForm';
import { getProductsByProgram, createProduct, getVariantsByProduct } from '../lib/inventory';
import type { ProgramProduct, ProductVariant } from '../types/inventory';

// Test program ID (valid UUID format)
const TEST_PROGRAM_ID = '123e4567-e89b-12d3-a456-426614174000';

export function Products() {
  const [products, setProducts] = useState<ProgramProduct[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProgramProduct | null>(null);
  const [variants, setVariants] = useState<ProductVariant[]>([]);
  const [showProductForm, setShowProductForm] = useState(false);
  const [showVariantForm, setShowVariantForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    if (selectedProduct) {
      loadVariants(selectedProduct.id);
    }
  }, [selectedProduct]);

  async function loadProducts() {
    try {
      const data = await getProductsByProgram(TEST_PROGRAM_ID);
      setProducts(data);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  }

  async function loadVariants(productId: string) {
    try {
      const data = await getVariantsByProduct(productId);
      setVariants(data);
    } catch (error) {
      console.error('Error loading variants:', error);
    }
  }

  const handleCreateProduct = async (data: Omit<ProgramProduct, 'id' | 'created_at'>) => {
    try {
      await createProduct({
        ...data,
        programId: TEST_PROGRAM_ID
      });
      await loadProducts();
      setShowProductForm(false);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleEditProduct = (product: ProgramProduct) => {
    setSelectedProduct(product);
    setShowProductForm(true);
  };

  const handleDeleteProduct = async (productId: string) => {
    // TODO: Implement delete functionality
    console.log('Delete product:', productId);
  };

  const handleEditVariant = (variant: ProductVariant) => {
    // TODO: Implement edit functionality
    console.log('Edit variant:', variant);
  };

  const handleDeleteVariant = async (variantId: string) => {
    // TODO: Implement delete functionality
    console.log('Delete variant:', variantId);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Products</h1>
        <button
          onClick={() => setShowProductForm(true)}
          className="flex items-center space-x-2 bg-[#5de0e6] text-white px-4 py-2 rounded-lg hover:bg-[#4bc5cb] transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Add Product</span>
        </button>
      </div>

      {/* Product Form Modal */}
      {showProductForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {selectedProduct ? 'Edit Product' : 'New Product'}
            </h2>
            <ProductForm
              initialData={selectedProduct || undefined}
              onSubmit={handleCreateProduct}
              onCancel={() => {
                setShowProductForm(false);
                setSelectedProduct(null);
              }}
            />
          </div>
        </div>
      )}

      {/* Products List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <ProductList
            products={products}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          />
        </div>

        {/* Variants Section */}
        {selectedProduct && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Variants for {selectedProduct.name}
              </h2>
              <button
                onClick={() => setShowVariantForm(true)}
                className="flex items-center space-x-2 text-[#5de0e6] hover:text-[#4bc5cb]"
              >
                <Plus className="w-4 h-4" />
                <span>Add Variant</span>
              </button>
            </div>

            <VariantList
              variants={variants}
              onEdit={handleEditVariant}
              onDelete={handleDeleteVariant}
            />

            {/* Variant Form Modal */}
            {showVariantForm && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    New Variant
                  </h2>
                  <VariantForm
                    onSubmit={(data) => {
                      // TODO: Implement create variant
                      console.log('Create variant:', data);
                      setShowVariantForm(false);
                    }}
                    onCancel={() => setShowVariantForm(false)}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}