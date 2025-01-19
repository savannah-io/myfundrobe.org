-- Create verification_codes table if it doesn't exist
CREATE TABLE IF NOT EXISTS verification_codes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users ON DELETE CASCADE,
  code text NOT NULL,
  expires_at timestamptz NOT NULL,
  used boolean DEFAULT false
);

-- Enable RLS if not already enabled
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM pg_tables 
    WHERE schemaname = 'public' 
    AND tablename = 'verification_codes' 
    AND rowsecurity = true
  ) THEN
    ALTER TABLE verification_codes ENABLE ROW LEVEL SECURITY;
  END IF;
END $$;

-- Drop existing policy if it exists and create new one
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Users can view their own verification codes" ON verification_codes;
  
  IF NOT EXISTS (
    SELECT 1 
    FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = 'verification_codes' 
    AND policyname = 'Users can view their own verification codes'
  ) THEN
    CREATE POLICY "Users can view their own verification codes"
      ON verification_codes
      FOR SELECT
      USING (user_id = auth.uid());
  END IF;
END $$;

-- Create indexes if they don't exist
CREATE INDEX IF NOT EXISTS idx_verification_codes_user 
  ON verification_codes(user_id);
CREATE INDEX IF NOT EXISTS idx_verification_codes_code 
  ON verification_codes(code);
CREATE INDEX IF NOT EXISTS idx_verification_codes_expires 
  ON verification_codes(expires_at);