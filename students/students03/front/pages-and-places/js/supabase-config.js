import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://vceeksxzmcxqdjjzollw.supabase.co";
const supabaseKey = "sb_publishable_hzgNfwYlRlFaWxe0S1fWuw_Z7mlOXbN";

export const supabase = createClient(supabaseUrl, supabaseKey);