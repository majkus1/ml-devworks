import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Klient dla użycia po stronie klienta
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Klient dla użycia po stronie serwera (z service role key)
export function createServerClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  
  if (!serviceRoleKey) {
    throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY environment variable');
  }
  
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

// Typy dla rezerwacji
export interface Booking {
  id: string;
  email: string;
  name: string | null;
  datetime: string;
  google_event_id: string | null;
  meet_link: string | null;
  created_at: string;
  cancelled: boolean;
}

