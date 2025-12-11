import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL || "https://your-placeholder.supabase.co";
const key = import.meta.env.VITE_SUPABASE_ANON_KEY || "public-anon-key-placeholder";

export const supabase = (url && key) ? createClient(url, key) : null;
