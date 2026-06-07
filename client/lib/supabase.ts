import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || "";
const supabasePublishableKey = process.env.EXPO_PUBLIC_SUPABASE_KEY || "";

const storage = typeof window !== "undefined" ? window.localStorage : undefined;

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
	auth: {
		storage,
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: false,
	},
});
