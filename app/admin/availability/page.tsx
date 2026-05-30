"use client";

import { useEffect, useState } from "react";
import { getAvailability, setAvailability, AvailabilitySlot } from "@/app/lib/firestore";

const TIME_SLOTS = [
  "09:00","09:30","10:00","10:30","11:00","11:30",
  "12:00","12:30","13:00","13:30","14:00","14:30",
  "15:00","15:30","16:00","16:30","17:00","17:30",
];

function getDatesBetween(start: Date, days: number) {
  return Array.from({ length: days }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return d.toISOString().split("T")[0];
  });
}

export default function AvailabilityPage() {
  const [slots,   setSlots]   = useState<Record<string, AvailabilitySlot>>({});
  const [loading, setLoading] = useState(true);
  const [saving,  setSaving]  = useState<string | null>(null);

  // Show next 14 days
  const today = new Date();
  today.setHours(0,0,0,0);
  const dates = getDatesBetween(today, 14);

  useEffect(() => {
    getAvailability().then(avail => {
      const map: Record<string, AvailabilitySlot> = {};
      avail.forEach(a => { map[a.date] = a; });
      setSlots(map);
      setLoading(false);
    });
  }, []);

  const toggleTime = (date: string, time: string) => {
    const current = slots[date]?.times ?? [];
    const next = current.includes(time)
      ? current.filter(t => t !== time)
      : [...current, time].sort();
    setSlots(prev => ({ ...prev, [date]: { ...prev[date], date, times: next, blocked: prev[date]?.blocked ?? false } }));
  };

  const toggleBlocked = (date: string) => {
    setSlots(prev => ({ ...prev, [date]: { ...prev[date], date, times: prev[date]?.times ?? [], blocked: !prev[date]?.blocked } }));
  };

  const save = async (date: string) => {
    setSaving(date);
    const s = slots[date] ?? { date, times: [], blocked: false };
    await setAvailability(date, s.times, s.blocked);
    setSaving(null);
  };

  if (loading) return <p className="text-white/40 text-sm">Laden…</p>;

  return (
    <div>
      <h1 className="text-2xl font-black mb-2">Beschikbaarheid</h1>
      <p className="text-white/50 text-sm mb-8">Komende 14 dagen — selecteer beschikbare tijdslots per dag.</p>

      <div className="space-y-4">
        {dates.map(date => {
          const s = slots[date];
          const blocked = s?.blocked ?? false;
          const times   = s?.times ?? [];
          const label   = new Date(date + "T12:00:00").toLocaleDateString("nl-NL", { weekday: "long", day: "numeric", month: "long" });

          return (
            <div key={date} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <p className="font-semibold capitalize">{label}</p>
                  <button onClick={() => toggleBlocked(date)}
                    className={`text-xs px-2 py-1 rounded-full font-medium transition-colors ${blocked ? "bg-red-500/20 text-red-400" : "bg-white/5 text-white/40 hover:text-white"}`}>
                    {blocked ? "🚫 Geblokkeerd" : "Blokkeer dag"}
                  </button>
                </div>
                <button onClick={() => save(date)} disabled={saving === date}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-white disabled:opacity-50 transition-opacity"
                  style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)" }}>
                  {saving === date ? "Opslaan…" : "Opslaan"}
                </button>
              </div>

              {!blocked && (
                <div className="flex flex-wrap gap-2">
                  {TIME_SLOTS.map(t => (
                    <button key={t} onClick={() => toggleTime(date, t)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        times.includes(t)
                          ? "bg-violet-600 text-white"
                          : "bg-white/5 text-white/40 hover:text-white hover:bg-white/10"
                      }`}>
                      {t}
                    </button>
                  ))}
                </div>
              )}
              {blocked && <p className="text-red-400/60 text-sm">Dag geblokkeerd — geen afspraken mogelijk.</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
