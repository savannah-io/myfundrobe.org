/*
  # Update posts table and policies

  1. Changes
    - Create posts table if not exists
    - Enable RLS
    - Set up policies for public and authenticated access
    - Add sample posts with unique slugs

  2. Security
    - Enable RLS
    - Add policies for public read access to published posts
    - Add policies for authenticated users to manage posts
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

-- Drop existing policies if they exist to avoid conflicts
DROP POLICY IF EXISTS "Anyone can read published posts" ON posts;
DROP POLICY IF EXISTS "Authenticated users have full access" ON posts;

-- Create new policies
CREATE POLICY "Anyone can read published posts"
  ON posts
  FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users have full access"
  ON posts
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert sample posts with unique slugs
DO $$
BEGIN
  -- Only insert if the slugs don't exist
  IF NOT EXISTS (SELECT 1 FROM posts WHERE slug = 'maximizing-school-fundraising-potential-2024') THEN
    INSERT INTO posts (title, slug, content, excerpt, author, category, image_url, published)
    VALUES (
      'Maximizing Your School''s Fundraising Potential',
      'maximizing-school-fundraising-potential-2024',
      E'# Maximizing Your School''s Fundraising Potential\n\nIn today''s educational landscape, schools are constantly seeking innovative ways to raise funds...',
      'Discover proven strategies to enhance your school''s fundraising efforts through year-round spirit wear sales.',
      'Sarah Johnson',
      'Fundraising Tips',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      true
    );
  END IF;

  IF NOT EXISTS (SELECT 1 FROM posts WHERE slug = 'building-school-spirit-merchandise-2024') THEN
    INSERT INTO posts (title, slug, content, excerpt, author, category, image_url, published)
    VALUES (
      'Building School Spirit Through Custom Merchandise',
      'building-school-spirit-merchandise-2024',
      E'# Building School Spirit Through Custom Merchandise\n\nSchool spirit is more than just wearing team colors...',
      'Learn how custom spirit wear can strengthen your school''s identity and community bonds.',
      'Michael Chen',
      'School Spirit',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      true
    );
  END IF;
END $$;