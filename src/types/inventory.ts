export interface ProgramProduct {
  id: string;
  programId: string;
  name: string;
  description?: string;
  basePrice: number;
  imageUrl?: string;
  category?: string;
  isActive: boolean;
  settings: Record<string, any>;
}

export interface ProductVariant {
  id: string;
  productId: string;
  size?: string;
  color?: string;
  priceAdjustment: number;
  sku: string;
  isActive: boolean;
}

export interface ProductInventory {
  id: string;
  variantId: string;
  quantity: number;
  reorderPoint: number;
  lastRestockAt?: string;
  lastReorderAt?: string;
}

export interface ProgramOrder {
  id: string;
  programId: string;
  customerName: string;
  customerEmail: string;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  totalAmount: number;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  trackingNumber?: string;
  notes?: string;
  metadata: Record<string, any>;
}

export interface OrderItem {
  id: string;
  orderId: string;
  variantId: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  customization: Record<string, any>;
}