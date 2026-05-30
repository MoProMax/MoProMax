import { NextRequest, NextResponse } from "next/server";
import { saveBooking } from "@/app/lib/firestore";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, date, time, notes } = body;

    if (!name || !email || !date || !time) {
      return NextResponse.json({ error: "Vul alle verplichte velden in." }, { status: 400 });
    }

    await saveBooking({ name, email, phone: phone || "", service: service || "", date, time, notes: notes || "" });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Booking API error:", err);
    return NextResponse.json({ error: "Er ging iets mis. Probeer het opnieuw." }, { status: 500 });
  }
}
