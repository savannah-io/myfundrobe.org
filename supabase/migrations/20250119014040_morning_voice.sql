-- Drop existing policies first to avoid conflicts
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Users can view their own verification codes" ON verification_codes;
  DROP POLICY IF EXISTS "Users can create verification codes" ON verification_codes;
END $$;

-- Create policies with proper UUID handling
CREATE POLICY "Users can view their own verification codes"
  ON verification_codes
  FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "Users can create verification codes"
  ON verification_codes
  FOR INSERT
  WITH CHECK (user_id = auth.uid());

-- Create indexes if they don't exist
CREATE INDEX IF NOT EXISTS idx_verification_codes_user ON verification_codes(user_id);
CREATE INDEX IF NOT EXISTS idx_verification_codes_code ON verification_codes(code);
CREATE INDEX IF NOT EXISTS idx_verification_codes_expires ON verification_codes(expires_at);