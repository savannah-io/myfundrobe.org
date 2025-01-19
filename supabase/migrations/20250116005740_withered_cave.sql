-- Create program_access table to manage access codes
CREATE TABLE IF NOT EXISTS program_access (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  program_id uuid REFERENCES school_programs ON DELETE CASCADE,
  access_code text UNIQUE NOT NULL,
  is_active boolean DEFAULT true,
  expires_at timestamptz,
  settings jsonb DEFAULT '{}'::jsonb
);

-- Create program_access_logs to track access attempts
CREATE TABLE IF NOT EXISTS program_access_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  program_id uuid REFERENCES school_programs ON DELETE CASCADE,
  access_code text NOT NULL,
  ip_address text,
  user_agent text,
  success boolean DEFAULT false
);

-- Create program_donation_pages for customized donation pages
CREATE TABLE IF NOT EXISTS program_donation_pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  program_id uuid REFERENCES school_programs ON DELETE CASCADE,
  access_code text REFERENCES program_access(access_code),
  title text NOT NULL,
  description text,
  hero_image_url text,
  custom_styles jsonb DEFAULT '{}'::jsonb,
  is_active boolean DEFAULT true,
  settings jsonb DEFAULT '{}'::jsonb,
  UNIQUE(program_id, access_code)
);

-- Enable RLS
ALTER TABLE program_access ENABLE ROW LEVEL SECURITY;
ALTER TABLE program_access_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE program_donation_pages ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public can view active access codes"
  ON program_access
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Instructors can manage their program access"
  ON program_access
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

CREATE POLICY "Instructors can view their access logs"
  ON program_access_logs
  TO authenticated
  USING (
    program_id IN (
      SELECT program_id 
      FROM instructors 
      WHERE auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Public can view active donation pages"
  ON program_donation_pages
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Instructors can manage their donation pages"
  ON program_donation_pages
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

-- Create indexes
CREATE INDEX idx_program_access_code ON program_access(access_code);
CREATE INDEX idx_program_access_program ON program_access(program_id);
CREATE INDEX idx_program_access_logs_program ON program_access_logs(program_id);
CREATE INDEX idx_program_donation_pages_access ON program_donation_pages(access_code);
CREATE INDEX idx_program_donation_pages_program ON program_donation_pages(program_id);