"use client";

import { useEffect, useState } from "react";
import { getBookings, updateBookingStatus, deleteBooking, Booking } from "@/app/lib/firestore";

const STATUS_LABEL = { pending: "In afwachting", confirmed: "Bevestigd", cancelled: "Geannuleerd" };
const STATUS_COLOR = { pending: "bg-amber-500/20 text-amber-400", confirmed: "bg-green-500/20 text-green-400", cancelled: "bg-red-500/20 text-red-400" };

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading,  setLoading]  = useState(true);

  const load = async () => { setLoading(true); setBookings(await getBookings()); setLoading(false); };
  useEffect(() => { load(); }, []);

  const setStatus = async (id: string, status: Booking["status"]) => {
    await updateBookingStatus(id, status);
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b));
  };

  const remove = async (id: string) => {
    if (!confirm("Afspraak verwijderen?")) return;
    await deleteBooking(id);
    setBookings(prev => prev.filter(b => b.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-black mb-6">Afspraken</h1>

      {loading && <p className="text-white/40 text-sm">Laden…</p>}
      {!loading && bookings.length === 0 && <p className="text-white/40 text-sm">Geen afspraken.</p>}

      <div className="space-y-3">
        {bookings.map(b => (
          <div key={b.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-5">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <p className="font-bold text-white">{b.name}</p>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${STATUS_COLOR[b.status]}`}>
                  {STATUS_LABEL[b.status]}
                </span>
              </div>
              <p className="text-white/50 text-sm">{b.email}{b.phone ? ` · ${b.phone}` : ""}</p>
              <p className="text-white/70 text-sm mt-1">
                📅 {b.date} om {b.time}{b.service ? ` · ${b.service}` : ""}
              </p>
              {b.notes && <p className="text-white/40 text-sm mt-1 italic">"{b.notes}"</p>}
            </div>

            <div className="flex gap-2 shrink-0">
              {b.status !== "confirmed" && (
                <button onClick={() => b.id && setStatus(b.id, "confirmed")}
                  className="px-3 py-1.5 rounded-lg bg-green-600 hover:bg-green-500 text-white text-xs font-semibold transition-colors">
                  Bevestig
                </button>
              )}
              {b.status !== "cancelled" && (
                <button onClick={() => b.id && setStatus(b.id, "cancelled")}
                  className="px-3 py-1.5 rounded-lg bg-amber-600/40 hover:bg-amber-600 text-white text-xs font-semibold transition-colors">
                  Annuleer
                </button>
              )}
              <a href={`mailto:${b.email}`}
                className="px-3 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold transition-colors">
                ✉️
              </a>
              <button onClick={() => b.id && remove(b.id)}
                className="px-3 py-1.5 rounded-lg bg-red-600/30 hover:bg-red-600 text-white text-xs font-semibold transition-colors">
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
