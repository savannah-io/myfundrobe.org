/*
  # Create blog posts table

  1. New Tables
    - `posts`
      - `id` (uuid, primary key)
      - `created_at` (timestamp with time zone)
      - `title` (text)
      - `slug` (text, unique)
      - `content` (text)
      - `excerpt` (text)
      - `author` (text)
      - `category` (text)
      - `image_url` (text)
      - `published` (boolean)

  2. Security
    - Enable RLS on `posts` table
    - Add policy for public read access to published posts
    - Add policy for authenticated users to manage posts
*/

-- Create posts table
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

-- Public can read published posts
CREATE POLICY "Public can read published posts"
  ON posts
  FOR SELECT
  TO public
  USING (published = true);

-- Authenticated users can manage posts
CREATE POLICY "Authenticated users can manage posts"
  ON posts
  TO authenticated
  USING (true)
  WITH CHECK (true);