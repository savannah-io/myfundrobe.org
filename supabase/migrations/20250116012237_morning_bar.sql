-- Create school_programs table if it doesn't exist
CREATE TABLE IF NOT EXISTS school_programs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  description text,
  access_code text UNIQUE NOT NULL,
  logo_url text,
  primary_color text DEFAULT '#5de0e6',
  secondary_color text DEFAULT '#4bc5cb',
  is_active boolean DEFAULT true,
  settings jsonb DEFAULT '{}'::jsonb
);

-- Insert test program if it doesn't exist
INSERT INTO school_programs (name, description, access_code, is_active)
VALUES (
  'Lincoln High School',
  'Supporting our student athletes and programs',
  '0000',
  true
) ON CONFLICT (access_code) DO NOTHING;

-- Enable RLS if not already enabled
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM pg_tables 
    WHERE schemaname = 'public' 
    AND tablename = 'school_programs' 
    AND rowsecurity = true
  ) THEN
    ALTER TABLE school_programs ENABLE ROW LEVEL SECURITY;
  END IF;
END $$;

-- Drop existing policy if it exists and create new one
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Public can view active programs" ON school_programs;
  
  IF NOT EXISTS (
    SELECT 1 
    FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = 'school_programs' 
    AND policyname = 'Public can view active programs'
  ) THEN
    CREATE POLICY "Public can view active programs"
      ON school_programs
      FOR SELECT
      USING (is_active = true);
  END IF;
END $$;

-- Create index if it doesn't exist
CREATE INDEX IF NOT EXISTS idx_school_programs_access_code 
  ON school_programs(access_code);