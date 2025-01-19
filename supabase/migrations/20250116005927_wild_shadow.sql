/*
  # Program Inventory and Orders Schema

  1. New Tables
    - program_products: Stores product information for each program
    - product_variants: Stores size/color variants for products
    - product_inventory: Tracks inventory levels
    - program_orders: Stores order information
    - order_items: Stores items within each order
  
  2. Security
    - Enable RLS on all tables
    - Add policies for public and authenticated access
    
  3. Changes
    - Add indexes for performance optimization
*/

-- Create program_products table
CREATE TABLE IF NOT EXISTS program_products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  program_id uuid REFERENCES school_programs ON DELETE CASCADE,
  name text NOT NULL,
  description text,
  base_price numeric NOT NULL,
  image_url text,
  category text,
  is_active boolean DEFAULT true,
  settings jsonb DEFAULT '{}'::jsonb
);

-- Create product_variants table
CREATE TABLE IF NOT EXISTS product_variants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  product_id uuid REFERENCES program_products ON DELETE CASCADE,
  size text,
  color text,
  price_adjustment numeric DEFAULT 0,
  sku text UNIQUE NOT NULL,
  is_active boolean DEFAULT true
);

-- Create product_inventory table
CREATE TABLE IF NOT EXISTS product_inventory (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  variant_id uuid REFERENCES product_variants ON DELETE CASCADE,
  quantity integer NOT NULL DEFAULT 0,
  reorder_point integer DEFAULT 10,
  last_restock_at timestamptz,
  last_reorder_at timestamptz
);

-- Create program_orders table
CREATE TABLE IF NOT EXISTS program_orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  program_id uuid REFERENCES school_programs ON DELETE CASCADE,
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  shipping_address jsonb NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  total_amount numeric NOT NULL,
  payment_status text NOT NULL DEFAULT 'pending',
  tracking_number text,
  notes text,
  metadata jsonb DEFAULT '{}'::jsonb
);

-- Create order_items table
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  order_id uuid REFERENCES program_orders ON DELETE CASCADE,
  variant_id uuid REFERENCES product_variants ON DELETE CASCADE,
  quantity integer NOT NULL,
  unit_price numeric NOT NULL,
  total_price numeric NOT NULL,
  customization jsonb DEFAULT '{}'::jsonb
);

-- Enable RLS
ALTER TABLE program_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_variants ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_inventory ENABLE ROW LEVEL SECURITY;
ALTER TABLE program_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public can view active products"
  ON program_products
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Instructors can manage their products"
  ON program_products
  TO authenticated
  USING (
    program_id IN (
      SELECT program_id 
      FROM instructors 
      WHERE auth_user_id = auth.uid()
    )
  )
  WITH CHECK (
    program_id IN (
      SELECT program_id 
      FROM instructors 
      WHERE auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Public can view active variants"
  ON product_variants
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Instructors can manage their variants"
  ON product_variants
  TO authenticated
  USING (
    product_id IN (
      SELECT id 
      FROM program_products 
      WHERE program_id IN (
        SELECT program_id 
        FROM instructors 
        WHERE auth_user_id = auth.uid()
      )
    )
  )
  WITH CHECK (
    product_id IN (
      SELECT id 
      FROM program_products 
      WHERE program_id IN (
        SELECT program_id 
        FROM instructors 
        WHERE auth_user_id = auth.uid()
      )
    )
  );

CREATE POLICY "Instructors can view their inventory"
  ON product_inventory
  TO authenticated
  USING (
    variant_id IN (
      SELECT id 
      FROM product_variants 
      WHERE product_id IN (
        SELECT id 
        FROM program_products 
        WHERE program_id IN (
          SELECT program_id 
          FROM instructors 
          WHERE auth_user_id = auth.uid()
        )
      )
    )
  );

CREATE POLICY "Instructors can view their orders"
  ON program_orders
  TO authenticated
  USING (
    program_id IN (
      SELECT program_id 
      FROM instructors 
      WHERE auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Instructors can view their order items"
  ON order_items
  TO authenticated
  USING (
    order_id IN (
      SELECT id 
      FROM program_orders 
      WHERE program_id IN (
        SELECT program_id 
        FROM instructors 
        WHERE auth_user_id = auth.uid()
      )
    )
  );

-- Create indexes
CREATE INDEX idx_program_products_program ON program_products(program_id);
CREATE INDEX idx_product_variants_product ON product_variants(product_id);
CREATE INDEX idx_product_inventory_variant ON product_inventory(variant_id);
CREATE INDEX idx_program_orders_program ON program_orders(program_id);
CREATE INDEX idx_order_items_order ON order_items(order_id);
CREATE INDEX idx_order_items_variant ON order_items(variant_id);