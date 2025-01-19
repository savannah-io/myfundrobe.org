/*
  # Blog Schema and Permissions Update
  
  1. Tables
    - posts table with all required columns
  
  2. Security
    - Enable RLS
    - Public read access for published posts
    - Authenticated users can manage all posts
    - Service role has full access
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
  -- Public read policy for published posts
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

  -- Authenticated users can manage all posts
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'posts' 
    AND policyname = 'Authenticated users can manage posts'
  ) THEN
    CREATE POLICY "Authenticated users can manage posts"
      ON posts
      TO authenticated
      USING (true)
      WITH CHECK (true);
  END IF;

  -- Service role can manage all posts
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