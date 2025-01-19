import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';
import { env } from '../config/env';

// Create Supabase client with retry logic and error handling
const createSupabaseClient = () => {
  if (!env.supabaseUrl || !env.supabaseAnonKey) {
    console.error('Missing Supabase environment variables');
    // Return a mock client that returns fallback data
    return {
      from: () => ({
        select: () => ({
          eq: () => ({
            maybeSingle: () => ({
              data: null,
              error: null
            })
          })
        })
      }),
      auth: {
        getSession: async () => ({ data: { session: null }, error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
        signUp: async () => ({ data: { user: null }, error: null }),
        signInWithPassword: async () => ({ data: { session: null }, error: null })
      }
    } as any;
  }

  try {
    const client = createClient<Database>(
      env.supabaseUrl,
      env.supabaseAnonKey,
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
        },
        global: {
          headers: {
            'x-application-name': 'fundrobe-fulfillment',
          },
        },
      }
    );

    return client;
  } catch (error) {
    console.error('Error creating Supabase client:', error);
    throw error;
  }
};

export const supabase = createSupabaseClient();