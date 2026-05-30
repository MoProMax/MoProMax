"use client";

import { useState } from "react";
import { useLang } from "@/app/context/LanguageContext";
import LiquidCard from "./LiquidCard";
import { saveContactMessage } from "@/app/lib/firestore";

export default function Contact() {
  const { t } = useLang();
  const [sent,    setSent]    = useState(false);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState("");
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await saveContactMessage({
        name:    form.name,
        email:   form.email,
        phone:   form.business,
        message: form.message,
      });
      setSent(true);
    } catch (err) {
      console.error(err);
      setError("Er ging iets mis. Probeer het opnieuw.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/[0.09] border border-white/[0.15] text-white placeholder-amber-700 text-sm focus:outline-none focus:border-amber-400/70 focus:bg-white/[0.14] backdrop-blur-xl transition-all shadow-inner shadow-black/10";

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div>
            <p className="text-amber-400 font-semibold text-base uppercase tracking-widest mb-4">Contact</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">{t.contact.headline}</h2>
            <p className="text-amber-300 text-xl leading-relaxed mb-10">{t.contact.subline}</p>

            <div className="flex items-center gap-3 bg-white/[0.07] backdrop-blur-2xl rounded-xl px-5 py-4 mb-6"
              style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.25)" }}>
              <div className="w-8 h-8 rounded-lg bg-green-500/15 border border-green-500/25 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-amber-200 font-medium text-base">{t.contact.promise}</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-amber-600 text-base">{t.contact.whatsapp}</span>
              <a href="https://wa.me/31600000000" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/25 text-green-400 text-sm font-bold px-4 py-2 rounded-lg transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          <LiquidCard accentRgb="251,191,36" noHover>
            <div className="p-8">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white font-bold text-lg">{t.contact.form.sent}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-amber-500 mb-2 uppercase tracking-wider">{t.contact.form.name}</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-amber-500 mb-2 uppercase tracking-wider">{t.contact.form.email}</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-amber-500 mb-2 uppercase tracking-wider">{t.contact.form.business}</label>
                    <input type="text" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-amber-500 mb-2 uppercase tracking-wider">{t.contact.form.message}</label>
                    <textarea rows={4} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} />
                  </div>
                  {error && <p className="text-red-400 text-sm">{error}</p>}
                  <button type="submit" disabled={loading} className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-slate-900 font-black text-lg py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 hover:-translate-y-0.5">
                    {loading ? "Versturen…" : t.contact.form.send}
                  </button>
                </form>
              )}
            </div>
          </LiquidCard>
        </div>
      </div>
    </section>
  );
}
