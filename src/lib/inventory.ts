import { supabase } from './supabase';
import type { ProgramProduct, ProductVariant, ProductInventory, ProgramOrder, OrderItem } from '../types/inventory';

// Product Management
export async function createProduct(product: Omit<ProgramProduct, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('program_products')
    .insert([product])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getProductsByProgram(programId: string): Promise<ProgramProduct[]> {
  const { data, error } = await supabase
    .from('program_products')
    .select('*')
    .eq('program_id', programId)
    .eq('is_active', true);

  if (error) throw error;
  return data || [];
}

// Variant Management
export async function createVariant(variant: Omit<ProductVariant, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('product_variants')
    .insert([variant])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getVariantsByProduct(productId: string): Promise<ProductVariant[]> {
  const { data, error } = await supabase
    .from('product_variants')
    .select('*')
    .eq('product_id', productId)
    .eq('is_active', true);

  if (error) throw error;
  return data || [];
}

// Inventory Management
export async function updateInventory(variantId: string, quantity: number) {
  const { data, error } = await supabase
    .from('product_inventory')
    .upsert([{
      variant_id: variantId,
      quantity,
      last_restock_at: new Date().toISOString()
    }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getInventoryByVariant(variantId: string): Promise<ProductInventory | null> {
  const { data, error } = await supabase
    .from('product_inventory')
    .select('*')
    .eq('variant_id', variantId)
    .single();

  if (error) throw error;
  return data;
}

// Order Management
export async function createOrder(order: Omit<ProgramOrder, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('program_orders')
    .insert([order])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getOrdersByProgram(programId: string): Promise<ProgramOrder[]> {
  const { data, error } = await supabase
    .from('program_orders')
    .select('*')
    .eq('program_id', programId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function updateOrderStatus(orderId: string, status: ProgramOrder['status']) {
  const { data, error } = await supabase
    .from('program_orders')
    .update({ status })
    .eq('id', orderId)
    .select()
    .single();

  if (error) throw error;
  return data;
}

// Order Items
export async function addOrderItems(items: Array<Omit<OrderItem, 'id' | 'created_at'>>) {
  const { data, error } = await supabase
    .from('order_items')
    .insert(items)
    .select();

  if (error) throw error;
  return data;
}

export async function getOrderItems(orderId: string): Promise<OrderItem[]> {
  const { data, error } = await supabase
    .from('order_items')
    .select('*')
    .eq('order_id', orderId);

  if (error) throw error;
  return data || [];
}