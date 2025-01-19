/*
  # School Donation Pages and Program Onboarding

  1. New Tables
    - donation_pages
      - School-specific donation page configuration
      - Custom content and branding
    - donation_tiers
      - Program-specific donation tiers
      - Custom amounts and benefits
    - program_onboarding
      - Track program setup progress
      - Store onboarding settings

  2. Security
    - Enable RLS on all tables
    - Add policies for program-specific access
*/

-- Create donation_pages table
CREATE TABLE IF NOT EXISTS donation_pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  program_id uuid REFERENCES school_programs ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  hero_image_url text,
  custom_styles jsonb DEFAULT '{}'::jsonb,
  is_active boolean DEFAULT true,
  settings jsonb DEFAULT '{}'::jsonb,
  UNIQUE(program_id)
);

-- Create donation_tiers table
CREATE TABLE IF NOT EXISTS donation_tiers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  program_id uuid REFERENCES school_programs ON DELETE CASCADE,
  name text NOT NULL,
  amount numeric NOT NULL,
  description text,
  benefits text[],
  is_featured boolean DEFAULT false,
  display_order integer DEFAULT 0
);

-- Create program_onboarding table
CREATE TABLE IF NOT EXISTS program_onboarding (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  program_id uuid REFERENCES school_programs ON DELETE CASCADE,
  current_step text NOT NULL,
  completed_steps text[] DEFAULT ARRAY[]::text[],
  settings jsonb DEFAULT '{}'::jsonb,
  is_complete boolean DEFAULT false,
  UNIQUE(program_id)
);

-- Enable RLS
ALTER TABLE donation_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE donation_tiers ENABLE ROW LEVEL SECURITY;
ALTER TABLE program_onboarding ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public can view active donation pages"
  ON donation_pages
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Instructors can manage their donation pages"
  ON donation_pages
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

CREATE POLICY "Public can view donation tiers"
  ON donation_tiers
  FOR SELECT
  USING (
    program_id IN (
      SELECT id 
      FROM school_programs 
      WHERE is_active = true
    )
  );

CREATE POLICY "Instructors can manage their donation tiers"
  ON donation_tiers
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

CREATE POLICY "Instructors can view their onboarding"
  ON program_onboarding
  TO authenticated
  USING (
    program_id IN (
      SELECT program_id 
      FROM instructors 
      WHERE auth_user_id = auth.uid()
    )
  );

-- Create indexes
CREATE INDEX idx_donation_pages_program ON donation_pages(program_id);
CREATE INDEX idx_donation_tiers_program ON donation_tiers(program_id);
CREATE INDEX idx_program_onboarding_program ON program_onboarding(program_id);