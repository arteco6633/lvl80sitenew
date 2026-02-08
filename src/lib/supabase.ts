import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("[Supabase] VITE_SUPABASE_URL или VITE_SUPABASE_ANON_KEY не заданы в .env.local")
}

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export interface ContactSubmission {
  name: string
  phone: string
  message: string
  source: "contacts" | "modal"
}

export async function submitContactForm(data: ContactSubmission): Promise<{ ok: boolean; error?: string }> {
  if (!supabase) {
    console.warn("[Supabase] Клиент не инициализирован")
    return { ok: false, error: "Supabase не настроен" }
  }
  const { error } = await supabase
    .from("contact_requests")
    .insert({
      name: data.name,
      phone: data.phone,
      message: data.message,
      source: data.source,
    })
  if (error) {
    console.error("[Supabase]", error)
    return { ok: false, error: error.message }
  }
  return { ok: true }
}
