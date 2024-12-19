"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function supabaseSignOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}