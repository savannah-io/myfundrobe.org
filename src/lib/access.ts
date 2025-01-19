import { supabase } from './supabase';
import type { ProgramAccess, ProgramAccessLog } from '../types/access';

export async function validateAccessCode(accessCode: string): Promise<boolean> {
  // Special cases for test mode and auth routes
  if (accessCode === 'signin' || accessCode === 'signup') {
    return false;
  }

  try {
    const { data, error } = await supabase
      .from('school_programs')
      .select('id, is_active')
      .eq('access_code', accessCode)
      .eq('is_active', true)
      .maybeSingle();

    if (error) {
      console.error('Error validating access code:', error);
      return false;
    }

    return !!data;
  } catch (error) {
    console.error('Error validating access code:', error);
    return false;
  }
}

export async function logAccessAttempt(accessCode: string, success: boolean): Promise<void> {
  // Skip logging for auth routes and test codes
  if (accessCode === 'signin' || accessCode === 'signup') {
    return;
  }

  try {
    const { error } = await supabase
      .from('program_access_logs')
      .insert([{
        access_code: accessCode,
        success,
        ip_address: '', // We don't track IPs for privacy
        user_agent: navigator.userAgent
      }]);

    if (error) {
      console.error('Error logging access attempt:', error);
    }
  } catch (error) {
    console.error('Error logging access attempt:', error);
  }
}