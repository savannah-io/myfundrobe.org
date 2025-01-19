/*
  # Fix Blog RLS Policies
  
  1. Changes
    - Drop existing policies to start fresh
    - Create new policies with proper permissions
    - Enable anon access for reading published posts
  
  2. Security
    - Public can read published posts
    - Service role has full access
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Public can read published posts" ON posts;
DROP POLICY IF EXISTS "Authenticated users can manage posts" ON posts;
DROP POLICY IF EXISTS "Service role can manage all posts" ON posts;

-- Enable RLS
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Allow public and authenticated users to read published posts
CREATE POLICY "Anyone can read published posts"
  ON posts
  FOR SELECT
  USING (published = true);

-- Allow service role full access
CREATE POLICY "Service role has full access"
  ON posts
  TO service_role
  USING (true)
  WITH CHECK (true);