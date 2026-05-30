"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { getAvailability, saveBooking, AvailabilitySlot } from "@/app/lib/firestore";

const SERVICES = [
  "Starter pakket — €199",
  "Pro pakket — €349",
  "Pro Max pakket — €849",
  "Custom / Nog niet zeker",
];

function formatDate(dateStr: string) {
  return new Date(dateStr + "T12:00:00").toLocaleDateString("nl-NL", {
    weekday: "long", day: "numeric", month: "long",
  });
}

export default function BoekenPage() {
  const [availability, setAvailability] = useState<Record<string, AvailabilitySlot>>({});
  const [loading,  setLoading]  = useState(true);
  const [step,     setStep]     = useState<1 | 2 | 3>(1);
  const [sent,     setSent]     = useState(false);
  const [sending,  setSending]  = useState(false);
  const [error,    setError]    = useState("");

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: SERVICES[0], notes: "" });

  useEffect(() => {
    getAvailability().then(slots => {
      const map: Record<string, AvailabilitySlot> = {};
      const today = new Date().toISOString().split("T")[0];
      slots.forEach(s => { if (s.date >= today && !s.blocked && s.times.length > 0) map[s.date] = s; });
      setAvailability(map);
      setLoading(false);
    });
  }, []);

  const availableDates = Object.keys(availability).sort();

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await saveBooking({
        name:    form.name,
        email:   form.email,
        phone:   form.phone,
        service: form.service,
        date:    selectedDate,
        time:    selectedTime,
        notes:   form.notes,
      });
      setSent(true);
    } catch (err) {
      console.error(err);
      setError("Er ging iets mis. Probeer het opnieuw.");
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="min-h-screen bg-[#130836] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
          </div>
          <h1 className="text-3xl font-black text-white mb-3">Afspraak ingepland!</h1>
          <p className="text-white/60 mb-2">
            <span className="text-white font-semibold capitalize">{formatDate(selectedDate)}</span> om <span className="text-white font-semibold">{selectedTime}</span>
          </p>
          <p className="text-white/50 text-sm mb-8">Je ontvangt een bevestiging van Mo zodra de afspraak bevestigd is.</p>
          <a href="/" className="inline-block px-6 py-3 rounded-xl text-white font-bold text-sm" style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)" }}>
            Terug naar de website
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#130836] px-6 py-20">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <a href="/" className="text-white/40 text-sm hover:text-white transition-colors mb-6 inline-block">← Terug</a>
          <h1 className="text-4xl font-black text-white mb-3">Plan een gratis gesprek</h1>
          <p className="text-white/50">30 minuten · Vrijblijvend · Wij reageren binnen 2 uur</p>
        </div>

        {/* Steps indicator */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {[1,2,3].map(s => (
            <div key={s} className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= s ? "bg-violet-600 text-white" : "bg-white/10 text-white/30"}`}>
                {s}
              </div>
              {s < 3 && <div className={`w-12 h-px ${step > s ? "bg-violet-600" : "bg-white/10"}`} />}
            </div>
          ))}
        </div>

        {/* Step 1: Pick date */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Kies een datum</h2>
            {loading && <p className="text-white/40">Beschikbaarheid laden…</p>}
            {!loading && availableDates.length === 0 && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <p className="text-white/50">Momenteel geen beschikbare datums.</p>
                <p className="text-white/30 text-sm mt-2">Neem contact op via het contactformulier.</p>
                <a href="/#contact" className="inline-block mt-4 text-violet-400 hover:text-violet-300 text-sm">Naar contactformulier →</a>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {availableDates.map(date => (
                <button key={date} onClick={() => { setSelectedDate(date); setStep(2); }}
                  className={`p-4 rounded-2xl border text-left transition-all hover:-translate-y-0.5 ${
                    selectedDate === date ? "border-violet-500 bg-violet-600/20" : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}>
                  <p className="text-white font-semibold capitalize">{formatDate(date)}</p>
                  <p className="text-white/40 text-sm mt-1">{availability[date].times.length} tijdslots beschikbaar</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Pick time */}
        {step === 2 && selectedDate && (
          <div>
            <button onClick={() => setStep(1)} className="text-white/40 hover:text-white text-sm mb-6 inline-block transition-colors">← Andere datum</button>
            <h2 className="text-xl font-bold text-white mb-2">Kies een tijd</h2>
            <p className="text-white/40 text-sm mb-6 capitalize">{formatDate(selectedDate)}</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {availability[selectedDate]?.times.map(time => (
                <button key={time} onClick={() => { setSelectedTime(time); setStep(3); }}
                  className={`py-3 rounded-xl border text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                    selectedTime === time ? "border-violet-500 bg-violet-600/20 text-white" : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}>
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Fill details */}
        {step === 3 && (
          <div>
            <button onClick={() => setStep(2)} className="text-white/40 hover:text-white text-sm mb-6 inline-block transition-colors">← Andere tijd</button>
            <div className="bg-violet-600/10 border border-violet-500/20 rounded-xl px-4 py-3 mb-6 flex items-center gap-3">
              <span className="text-violet-400">📅</span>
              <p className="text-white text-sm">
                <span className="font-semibold capitalize">{formatDate(selectedDate)}</span> om <span className="font-semibold">{selectedTime}</span>
              </p>
            </div>
            <h2 className="text-xl font-bold text-white mb-6">Jouw gegevens</h2>
            <form onSubmit={handleBook} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white/50 mb-1.5">Naam *</label>
                  <input value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-violet-500"
                    placeholder="Jouw naam" />
                </div>
                <div>
                  <label className="block text-xs text-white/50 mb-1.5">E-mail *</label>
                  <input type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-violet-500"
                    placeholder="email@voorbeeld.nl" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-white/50 mb-1.5">Telefoonnummer</label>
                  <input value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-violet-500"
                    placeholder="06-12345678" />
                </div>
                <div>
                  <label className="block text-xs text-white/50 mb-1.5">Pakket interesse</label>
                  <select value={form.service} onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-violet-500">
                    {SERVICES.map(s => <option key={s} value={s} className="bg-[#1a0f3a]">{s}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs text-white/50 mb-1.5">Opmerkingen (optioneel)</label>
                <textarea value={form.notes} onChange={e => setForm(p => ({ ...p, notes: e.target.value }))} rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-violet-500 resize-none"
                  placeholder="Vertel kort iets over jouw bedrijf of project…" />
              </div>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <button type="submit" disabled={sending}
                className="w-full py-4 rounded-2xl font-black text-white text-lg disabled:opacity-50 transition-opacity"
                style={{ background: "linear-gradient(135deg,#22c55e,#16a34a)", boxShadow: "0 6px 24px -4px rgba(34,197,94,0.45)" }}>
                {sending ? "Bezig met inplannen…" : "Afspraak inplannen →"}
              </button>
              <p className="text-center text-white/30 text-xs">Vrijblijvend · Geen betaling vereist · Mo bevestigt binnen 2 uur</p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
