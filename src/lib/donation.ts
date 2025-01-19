import { supabase } from './supabase';
import type { DonationPage, DonationTier, ProgramOnboarding } from '../types/donation';

export async function getDonationPage(programId: string): Promise<DonationPage | null> {
  const { data, error } = await supabase
    .from('donation_pages')
    .select('*')
    .eq('program_id', programId)
    .eq('is_active', true)
    .single();

  if (error) throw error;
  return data;
}

export async function getDonationTiers(programId: string): Promise<DonationTier[]> {
  const { data, error } = await supabase
    .from('donation_tiers')
    .select('*')
    .eq('program_id', programId)
    .order('display_order', { ascending: true });

  if (error) throw error;
  return data || [];
}

export async function createDonationPage(page: Omit<DonationPage, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('donation_pages')
    .insert([page])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateDonationPage(id: string, updates: Partial<DonationPage>) {
  const { data, error } = await supabase
    .from('donation_pages')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function createDonationTier(tier: Omit<DonationTier, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('donation_tiers')
    .insert([tier])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getProgramOnboarding(programId: string): Promise<ProgramOnboarding | null> {
  const { data, error } = await supabase
    .from('program_onboarding')
    .select('*')
    .eq('program_id', programId)
    .single();

  if (error) throw error;
  return data;
}

export async function updateProgramOnboarding(id: string, updates: Partial<ProgramOnboarding>) {
  const { data, error } = await supabase
    .from('program_onboarding')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}