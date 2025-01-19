-- Enable RLS for program_access_logs if not already enabled
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM pg_tables 
    WHERE schemaname = 'public' 
    AND tablename = 'program_access_logs' 
    AND rowsecurity = true
  ) THEN
    ALTER TABLE program_access_logs ENABLE ROW LEVEL SECURITY;
  END IF;
END $$;

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Instructors can view their access logs" ON program_access_logs;
DROP POLICY IF EXISTS "Anyone can create access logs" ON program_access_logs;

-- Create policies for program_access_logs
CREATE POLICY "Anyone can create access logs"
  ON program_access_logs
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Instructors can view their access logs"
  ON program_access_logs
  FOR SELECT
  USING (
    program_id IN (
      SELECT program_id 
      FROM instructors 
      WHERE auth_user_id = auth.uid()
    )
  );