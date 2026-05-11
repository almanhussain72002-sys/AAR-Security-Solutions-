import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // Placeholder integration point:
  // Connect this to email, CRM, WhatsApp automation, Google Sheets, or a database.
  console.log("New AAR Security Solutions inquiry:", body);

  return NextResponse.json({ ok: true });
}
