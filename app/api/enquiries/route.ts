import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) return null;
  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parentName = typeof body.parentName === "string" ? body.parentName.trim() : "";
    const contact = typeof body.contact === "string" ? body.contact.trim() : "";
    const childClass = typeof body.childClass === "string" ? body.childClass : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const consent = body.consent === true;

    if (!parentName || parentName.length > 120) {
      return NextResponse.json({ error: "Enter a valid parent or guardian name." }, { status: 400 });
    }
    if (!contact || contact.length > 200) {
      return NextResponse.json({ error: "Enter a valid phone number or email address." }, { status: 400 });
    }
    if (!["Class 5 to 8", "Class 9 to 10", "Class 11 to 12"].includes(childClass)) {
      return NextResponse.json({ error: "Choose a valid class range." }, { status: 400 });
    }
    if (message.length > 3000 || !consent) {
      return NextResponse.json({ error: "Please confirm consent and check your message." }, { status: 400 });
    }

    const supabase = getSupabase();
    if (!supabase) {
      console.error("Missing Supabase environment variables.");
      return NextResponse.json({ error: "The enquiry service is not configured yet." }, { status: 503 });
    }

    const { error } = await supabase.from("enquiries").insert({
      parent_name: parentName,
      contact,
      child_class: childClass,
      message: message || null,
      consent,
      source: "website",
    });

    if (error) {
      console.error("Supabase enquiry insert failed:", error.message);
      return NextResponse.json({ error: "We couldn't save your enquiry right now." }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
