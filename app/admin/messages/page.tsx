"use client";

import { useEffect, useState } from "react";
import { getMessages, markMessageRead, markMessageReplied, deleteMessage, ContactMessage } from "@/app/lib/firestore";

export default function MessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [selected, setSelected] = useState<ContactMessage | null>(null);
  const [loading,  setLoading]  = useState(true);

  const load = async () => {
    setLoading(true);
    setMessages(await getMessages());
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const open = async (msg: ContactMessage) => {
    setSelected(msg);
    if (!msg.read && msg.id) {
      await markMessageRead(msg.id);
      setMessages(prev => prev.map(m => m.id === msg.id ? { ...m, read: true } : m));
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bericht verwijderen?")) return;
    await deleteMessage(id);
    setMessages(prev => prev.filter(m => m.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  const handleReplied = async (id: string) => {
    await markMessageReplied(id);
    setMessages(prev => prev.map(m => m.id === id ? { ...m, replied: true, read: true } : m));
    setSelected(prev => prev?.id === id ? { ...prev, replied: true } : prev);
  };

  return (
    <div>
      <h1 className="text-2xl font-black mb-6">Berichten</h1>

      <div className="flex gap-5 h-[calc(100vh-10rem)]">
        {/* List */}
        <div className="w-80 shrink-0 bg-white/5 border border-white/10 rounded-2xl overflow-auto">
          {loading && <p className="p-4 text-white/40 text-sm">Laden…</p>}
          {!loading && messages.length === 0 && <p className="p-4 text-white/40 text-sm">Geen berichten.</p>}
          {messages.map(m => (
            <button
              key={m.id}
              onClick={() => open(m)}
              className={`w-full text-left px-4 py-3 border-b border-white/5 hover:bg-white/5 transition-colors ${selected?.id === m.id ? "bg-violet-600/20" : ""}`}
            >
              <div className="flex items-center gap-2">
                {!m.read && <span className="w-2 h-2 rounded-full bg-violet-400 shrink-0" />}
                <p className={`text-sm font-semibold truncate ${m.read ? "text-white/70" : "text-white"}`}>{m.name}</p>
              </div>
              <p className="text-xs text-white/40 truncate mt-0.5">{m.message}</p>
              {m.replied && <span className="text-xs text-green-400">✓ Beantwoord</span>}
            </button>
          ))}
        </div>

        {/* Detail */}
        <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 overflow-auto">
          {!selected ? (
            <p className="text-white/40 text-sm">Selecteer een bericht.</p>
          ) : (
            <>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold">{selected.name}</h2>
                  <p className="text-white/50 text-sm">{selected.email}{selected.phone ? ` · ${selected.phone}` : ""}</p>
                </div>
                <div className="flex gap-2">
                  {!selected.replied && (
                    <button
                      onClick={() => selected.id && handleReplied(selected.id)}
                      className="px-3 py-1.5 rounded-lg bg-green-600 hover:bg-green-500 text-white text-xs font-semibold transition-colors"
                    >
                      ✓ Markeer beantwoord
                    </button>
                  )}
                  <a
                    href={`mailto:${selected.email}`}
                    className="px-3 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold transition-colors"
                  >
                    ✉️ Beantwoorden
                  </a>
                  <button
                    onClick={() => selected.id && handleDelete(selected.id)}
                    className="px-3 py-1.5 rounded-lg bg-red-600/30 hover:bg-red-600 text-white text-xs font-semibold transition-colors"
                  >
                    Verwijder
                  </button>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed whitespace-pre-wrap">{selected.message}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
