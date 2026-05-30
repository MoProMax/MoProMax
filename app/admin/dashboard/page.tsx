"use client";

import { useEffect, useState } from "react";
import { getMessages, getBookings, getPortfolioItems } from "@/app/lib/firestore";

export default function Dashboard() {
  const [stats, setStats] = useState({ messages: 0, unread: 0, bookings: 0, pending: 0, portfolio: 0 });

  useEffect(() => {
    Promise.all([getMessages(), getBookings(), getPortfolioItems()]).then(([msgs, books, port]) => {
      setStats({
        messages:  msgs.length,
        unread:    msgs.filter(m => !m.read).length,
        bookings:  books.length,
        pending:   books.filter(b => b.status === "pending").length,
        portfolio: port.length,
      });
    });
  }, []);

  const cards = [
    { label: "Berichten",       value: stats.messages,  sub: `${stats.unread} ongelezen`,  icon: "✉️",  color: "from-violet-600 to-purple-700" },
    { label: "Afspraken",       value: stats.bookings,  sub: `${stats.pending} in afwachting`, icon: "📅", color: "from-indigo-600 to-violet-700" },
    { label: "Portfolio items", value: stats.portfolio, sub: "gepubliceerd",                icon: "🖼️", color: "from-purple-600 to-pink-700" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-black mb-1">Dashboard</h1>
      <p className="text-white/50 text-sm mb-8">Welkom terug, Mo.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {cards.map(c => (
          <div key={c.label} className={`rounded-2xl p-6 bg-gradient-to-br ${c.color}`}>
            <p className="text-3xl mb-1">{c.icon}</p>
            <p className="text-4xl font-black">{c.value}</p>
            <p className="text-white font-semibold mt-1">{c.label}</p>
            <p className="text-white/70 text-sm">{c.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
