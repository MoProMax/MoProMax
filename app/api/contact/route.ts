import { NextRequest, NextResponse } from "next/server";
import { saveContactMessage } from "@/app/lib/firestore";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Vul alle verplichte velden in." }, { status: 400 });
    }

    await saveContactMessage({ name, email, phone: phone || "", message });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Er ging iets mis. Probeer het opnieuw." }, { status: 500 });
  }
}
