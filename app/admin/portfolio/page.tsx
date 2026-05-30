"use client";

import { useEffect, useState } from "react";
import { getPortfolioItems, addPortfolioItem, updatePortfolioItem, deletePortfolioItem, PortfolioItem } from "@/app/lib/firestore";

const COLOR_OPTIONS = [
  { label: "Amber",  value: "from-amber-900 to-amber-700" },
  { label: "Roze",   value: "from-pink-900 to-pink-700" },
  { label: "Blauw",  value: "from-blue-900 to-blue-700" },
  { label: "Paars",  value: "from-violet-900 to-purple-700" },
  { label: "Groen",  value: "from-emerald-900 to-emerald-700" },
  { label: "Rood",   value: "from-red-900 to-red-700" },
];

const EMPTY: Omit<PortfolioItem, "id" | "createdAt"> = {
  title: "", category: "", result: "", description: "", color: COLOR_OPTIONS[0].value,
  imageUrl: "", liveUrl: "", tags: [], order: 0, visible: true,
};

export default function PortfolioPage() {
  const [items,   setItems]   = useState<PortfolioItem[]>([]);
  const [form,    setForm]    = useState(EMPTY);
  const [editing, setEditing] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving,  setSaving]  = useState(false);

  const load = async () => { setLoading(true); setItems(await getPortfolioItems()); setLoading(false); };
  useEffect(() => { load(); }, []);

  const seedDummies = async () => {
    if (!confirm("10 voorbeeldprojecten toevoegen?")) return;
    setSaving(true);
    const dummies = [
      { title: "Kapper Youssef",        description: "", category: "Barbershop · Brand + Booking",      result: "Volgeboekt binnen 2 weken na lancering",          color: "from-amber-900 to-amber-700",     liveUrl: "https://google.com", imageUrl: "", tags: ["Kapper", "Booking"],      order: 0,  visible: true },
      { title: "Nail Studio Rosa",       description: "", category: "Nagelsalon · Website + Brand",      result: "40% meer nieuwe klanten in de eerste maand",      color: "from-pink-900 to-pink-700",       liveUrl: "https://google.com", imageUrl: "", tags: ["Beauty", "Branding"],     order: 1,  visible: true },
      { title: "Amir Coaching",          description: "", category: "Life Coach · Full Package",         result: "Professioneel imago dat past bij zijn kwaliteit",  color: "from-blue-900 to-blue-700",       liveUrl: "https://google.com", imageUrl: "", tags: ["Coaching", "SEO"],        order: 2,  visible: true },
      { title: "Rijschool Driving Pro",  description: "", category: "Rijschool · Website + SEO",         result: "Eerste pagina Google binnen 3 maanden",            color: "from-emerald-900 to-emerald-700", liveUrl: "https://google.com", imageUrl: "", tags: ["Rijschool", "SEO"],       order: 3,  visible: true },
      { title: "Bouwbedrijf Nasser",     description: "", category: "Aannemer · Website + Portfolio",    result: "3x meer offerteaanvragen per maand",              color: "from-orange-900 to-orange-700",   liveUrl: "https://google.com", imageUrl: "", tags: ["Bouw", "Portfolio"],      order: 4,  visible: true },
      { title: "Fitnesscoach Layla",     description: "", category: "Personal Trainer · Full Package",   result: "Online klanten vanuit heel Nederland",             color: "from-violet-900 to-violet-700",   liveUrl: "https://google.com", imageUrl: "", tags: ["Fitness", "Booking"],     order: 5,  visible: true },
      { title: "Restaurant Al Basha",    description: "", category: "Horeca · Website + Reservering",    result: "Volledig bezet elke vrijdag en zaterdag",          color: "from-red-900 to-red-700",         liveUrl: "https://google.com", imageUrl: "", tags: ["Horeca", "Reservering"],  order: 6,  visible: true },
      { title: "Schoonheidssalon Vera",  description: "", category: "Beauty · Branding + Booking",       result: "Wachtlijst van 2 weken na lancering",              color: "from-fuchsia-900 to-fuchsia-700", liveUrl: "https://google.com", imageUrl: "", tags: ["Beauty", "Booking"],      order: 7,  visible: true },
      { title: "Advocaat M. El Idrissi", description: "", category: "Juridisch · Website + SEO",         result: "Top 3 Google voor 5 zoekwoorden",                  color: "from-slate-800 to-slate-700",     liveUrl: "https://google.com", imageUrl: "", tags: ["Juridisch", "SEO"],       order: 8,  visible: true },
      { title: "Autohandel Karimi",      description: "", category: "Automotive · Website + Fotografie", result: "Gemiddeld 12 leads per week via de website",       color: "from-zinc-800 to-zinc-700",       liveUrl: "https://google.com", imageUrl: "", tags: ["Auto", "Leads"],          order: 9,  visible: true },
    ];
    for (const d of dummies) await addPortfolioItem(d);
    await load();
    setSaving(false);
  };

  const set = (k: keyof typeof EMPTY, v: unknown) => setForm(p => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    if (editing) {
      await updatePortfolioItem(editing, form);
    } else {
      await addPortfolioItem({ ...form, order: items.length });
    }
    setForm(EMPTY);
    setEditing(null);
    await load();
    setSaving(false);
  };

  const startEdit = (item: PortfolioItem) => {
    setEditing(item.id!);
    setForm({
      title: item.title, category: item.category || "", result: item.result || "",
      description: item.description || "",
      color: item.color || COLOR_OPTIONS[0].value, imageUrl: item.imageUrl || "",
      liveUrl: item.liveUrl || "", tags: item.tags, order: item.order, visible: item.visible,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const remove = async (id: string) => {
    if (!confirm("Item verwijderen?")) return;
    await deletePortfolioItem(id);
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const toggleVisible = async (item: PortfolioItem) => {
    await updatePortfolioItem(item.id!, { visible: !item.visible });
    setItems(prev => prev.map(i => i.id === item.id ? { ...i, visible: !i.visible } : i));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-black">Portfolio</h1>
        <button onClick={seedDummies} disabled={saving}
          className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white/60 hover:text-white text-xs font-semibold transition-colors disabled:opacity-50">
          + 10 voorbeelden toevoegen
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 space-y-4">
        <h2 className="font-bold text-white">{editing ? "Item bewerken" : "Nieuw item toevoegen"}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-white/50 mb-1">Naam klant / project *</label>
            <input value={form.title} onChange={e => set("title", e.target.value)} required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-violet-500"
              placeholder="Kapper Youssef" />
          </div>
          <div>
            <label className="block text-xs text-white/50 mb-1">Categorie *</label>
            <input value={form.category} onChange={e => set("category", e.target.value)} required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-violet-500"
              placeholder="Barbershop · Brand + Booking" />
          </div>
        </div>

        <div>
          <label className="block text-xs text-white/50 mb-1">Resultaat (zichtbaar op website) *</label>
          <input value={form.result} onChange={e => set("result", e.target.value)} required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-violet-500"
            placeholder="Volgeboekt binnen 2 weken na lancering" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-white/50 mb-1">Afbeelding URL (optioneel)</label>
            <input value={form.imageUrl} onChange={e => set("imageUrl", e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-violet-500"
              placeholder="https://..." />
          </div>
          <div>
            <label className="block text-xs text-white/50 mb-1">Live URL (optioneel)</label>
            <input value={form.liveUrl} onChange={e => set("liveUrl", e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-violet-500"
              placeholder="https://klant.nl" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-white/50 mb-1">Achtergrondkleur kaart</label>
            <select value={form.color} onChange={e => set("color", e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-violet-500">
              {COLOR_OPTIONS.map(c => (
                <option key={c.value} value={c.value} className="bg-[#1a0f3a]">{c.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-white/50 mb-1">Tags (komma gescheiden)</label>
            <input
              value={form.tags.join(", ")}
              onChange={e => set("tags", e.target.value.split(",").map(t => t.trim()).filter(Boolean))}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-violet-500"
              placeholder="Kapsalon, Booking, Pro Max" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.visible} onChange={e => set("visible", e.target.checked)}
              className="w-4 h-4 rounded accent-violet-600" />
            <span className="text-sm text-white/70">Zichtbaar op website</span>
          </label>
        </div>

        <div className="flex gap-3">
          <button type="submit" disabled={saving}
            className="px-5 py-2 rounded-xl font-bold text-white text-sm disabled:opacity-50"
            style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)" }}>
            {saving ? "Opslaan…" : editing ? "Wijzigingen opslaan" : "Item toevoegen"}
          </button>
          {editing && (
            <button type="button" onClick={() => { setEditing(null); setForm(EMPTY); }}
              className="px-5 py-2 rounded-xl font-bold text-white/60 text-sm hover:text-white transition-colors">
              Annuleer
            </button>
          )}
        </div>
      </form>


      {/* Items */}
      {loading && <p className="text-white/40 text-sm">Laden…</p>}
      <div className="space-y-3">
        {items.map(item => (
          <div key={item.id} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex gap-4 items-center">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} shrink-0 flex items-center justify-center text-white font-black text-xl`}>
              {item.title.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <p className="font-bold truncate">{item.title}</p>
                <span className={`text-xs px-2 py-0.5 rounded-full ${item.visible ? "bg-green-500/20 text-green-400" : "bg-white/10 text-white/40"}`}>
                  {item.visible ? "Zichtbaar" : "Verborgen"}
                </span>
              </div>
              <p className="text-amber-400/70 text-xs">{item.category}</p>
              <p className="text-white/50 text-sm truncate">{item.result}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button onClick={() => toggleVisible(item)}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-colors">
                {item.visible ? "Verberg" : "Toon"}
              </button>
              <button onClick={() => startEdit(item)}
                className="px-3 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold transition-colors">✏️</button>
              <button onClick={() => remove(item.id!)}
                className="px-3 py-1.5 rounded-lg bg-red-600/30 hover:bg-red-600 text-white text-xs font-semibold transition-colors">🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
