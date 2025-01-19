/*
  # Update Blog Schema
  
  1. Tables
    - Ensure posts table exists with all required columns
  
  2. Security
    - Enable RLS on posts table if not already enabled
    - Add policies if they don't exist:
      - Public read access for published posts
      - Service role full access
*/

-- Create posts table if it doesn't exist
CREATE TABLE IF NOT EXISTS posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text NOT NULL,
  author text NOT NULL,
  category text NOT NULL,
  image_url text NOT NULL,
  published boolean DEFAULT false
);

-- Enable RLS
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Create policies only if they don't exist
DO $$ 
BEGIN
  -- Check and create public read policy
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'posts' 
    AND policyname = 'Public can read published posts'
  ) THEN
    CREATE POLICY "Public can read published posts"
      ON posts
      FOR SELECT
      TO public
      USING (published = true);
  END IF;

  -- Check and create service role policy
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'posts' 
    AND policyname = 'Service role can manage all posts'
  ) THEN
    CREATE POLICY "Service role can manage all posts"
      ON posts
      TO service_role
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;