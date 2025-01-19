import { supabase } from './supabase';
import type { SchoolProgram } from '../types/program';

export async function getSchoolProgram(accessCode: string): Promise<SchoolProgram | null> {
  try {
    const { data, error } = await supabase
      .from('school_programs')
      .select('*')
      .eq('access_code', accessCode)
      .eq('is_active', true)
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return null;
    }

    if (!data) return null;

    // Transform the data to match our SchoolProgram type
    return {
      id: data.id,
      name: data.name,
      description: data.description || undefined,
      accessCode: data.access_code,
      logoUrl: data.logo_url || undefined,
      primaryColor: data.primary_color,
      secondaryColor: data.secondary_color,
      isActive: data.is_active,
      settings: data.settings || {}
    };
  } catch (error) {
    console.error('Error fetching school program:', error);
    return null;
  }
}

export async function getProgramMetrics(programId: string) {
  const { data, error } = await supabase
    .from('program_metrics')
    .select('*')
    .eq('program_id', programId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function getProgramDonations(programId: string) {
  const { data, error } = await supabase
    .from('program_donations')
    .select('*')
    .eq('program_id', programId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}