interface Env {
  supabaseUrl: string;
  supabaseAnonKey: string;
  mainSiteUrl: string;
}

export const env: Env = {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  mainSiteUrl: import.meta.env.VITE_MAIN_SITE_URL || 'https://fundrobe.org'
} as const;

// Validate environment variables
Object.entries(env).forEach(([key, value]) => {
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
});