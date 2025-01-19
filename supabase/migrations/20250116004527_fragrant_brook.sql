/*
  # School Programs and Multi-Tenant System

  1. New Tables
    - school_programs
      - Basic school program information
      - Access codes and configuration
    - instructors
      - Instructor accounts linked to programs
      - Authentication and access management
    - program_metrics
      - Program-specific fundraising metrics
      - Analytics and tracking
    - program_donations
      - Donation records for each program
      - Donor information and amounts

  2. Security
    - Enable RLS on all tables
    - Add policies for program-specific access
    - Secure access codes and instructor credentials
*/

-- Create school_programs table
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

-- Create instructors table
CREATE TABLE IF NOT EXISTS instructors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  auth_user_id uuid REFERENCES auth.users ON DELETE CASCADE,
  program_id uuid REFERENCES school_programs ON DELETE CASCADE,
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text UNIQUE NOT NULL,
  role text DEFAULT 'instructor',
  settings jsonb DEFAULT '{}'::jsonb,
  UNIQUE(auth_user_id, program_id)
);

-- Create program_metrics table
CREATE TABLE IF NOT EXISTS program_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  program_id uuid REFERENCES school_programs ON DELETE CASCADE,
  metric_type text NOT NULL,
  value numeric NOT NULL,
  recorded_at timestamptz DEFAULT now()
);

-- Create program_donations table
CREATE TABLE IF NOT EXISTS program_donations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  program_id uuid REFERENCES school_programs ON DELETE CASCADE,
  donor_name text NOT NULL,
  donor_email text NOT NULL,
  amount numeric NOT NULL,
  tier text NOT NULL,
  message text,
  is_anonymous boolean DEFAULT false
);

-- Enable RLS
ALTER TABLE school_programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE instructors ENABLE ROW LEVEL SECURITY;
ALTER TABLE program_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE program_donations ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public can view active programs"
  ON school_programs
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Instructors can view their program"
  ON school_programs
  FOR SELECT
  USING (
    id IN (
      SELECT program_id 
      FROM instructors 
      WHERE auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Instructors can view their own data"
  ON instructors
  FOR SELECT
  USING (auth_user_id = auth.uid());

CREATE POLICY "Instructors can view their program metrics"
  ON program_metrics
  FOR SELECT
  USING (
    program_id IN (
      SELECT program_id 
      FROM instructors 
      WHERE auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Instructors can view their program donations"
  ON program_donations
  FOR SELECT
  USING (
    program_id IN (
      SELECT program_id 
      FROM instructors 
      WHERE auth_user_id = auth.uid()
    )
  );

-- Create indexes for performance
CREATE INDEX idx_school_programs_access_code ON school_programs(access_code);
CREATE INDEX idx_instructors_auth_user ON instructors(auth_user_id);
CREATE INDEX idx_instructors_program ON instructors(program_id);
CREATE INDEX idx_program_metrics_program ON program_metrics(program_id);
CREATE INDEX idx_program_donations_program ON program_donations(program_id);