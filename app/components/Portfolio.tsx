"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/app/context/LanguageContext";
import { FadeIn } from "./FadeIn";
import LiquidCard from "./LiquidCard";
import { getPortfolioItems, PortfolioItem } from "@/app/lib/firestore";

const ACCENT_COLORS = ["245,158,11", "236,72,153", "251,191,36", "99,102,241", "16,185,129", "239,68,68"];
const PER_PAGE = 6;

export default function Portfolio() {
  const { t } = useLang();
  const [items,   setItems]   = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [page,    setPage]    = useState(0);

  // Touch + pointer drag tracking
  const touchStartX  = useRef(0);
  const touchStartY  = useRef(0);
  const pointerStartX = useRef(0);
  const dragDelta     = useRef(0);

  useEffect(() => {
    getPortfolioItems()
      .then(all => setItems(all.filter(i => i.visible)))
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, []);

  const totalPages   = Math.ceil(items.length / PER_PAGE);
  const currentItems = items.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  const prev = () => setPage(p => Math.max(0, p - 1));
  const next = () => setPage(p => Math.min(totalPages - 1, p + 1));

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      dx < 0 ? next() : prev();
    }
  };

  // Pointer drag handlers (works for both mouse and touch via pointer API)
  const onPointerDown = (e: React.PointerEvent) => {
    pointerStartX.current = e.clientX;
    dragDelta.current = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (e.buttons !== 1) return;
    dragDelta.current = e.clientX - pointerStartX.current;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    const dx = e.clientX - pointerStartX.current;
    if (Math.abs(dx) > 50) dx < 0 ? next() : prev();
  };

  return (
    <section id="portfolio" className="py-24 px-6 relative overflow-hidden">
      <div className="relative max-w-[1600px] mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-amber-400 font-semibold text-base uppercase tracking-widest mb-3">{t.portfolio.headline}</p>
          <h2 className="text-4xl sm:text-5xl font-black text-amber-400">{t.portfolio.subline}</h2>
        </FadeIn>

        {/* Loading skeletons */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[0,1,2,3,4,5].map(i => (
              <div key={i} className="rounded-2xl bg-white/5 border border-white/10 h-80 animate-pulse" />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && items.length === 0 && (
          <p className="text-center text-amber-400/40 py-12">Binnenkort meer werk te zien.</p>
        )}

        {/* Carousel */}
        {!loading && items.length > 0 && (
          <>
            <div
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 select-none"
              style={{ cursor: "grab", touchAction: "pan-y" }}
            >
              {currentItems.map((item, i) => (
                <a
                  key={item.id}
                  href={item.liveUrl || "#portfolio"}
                  target={item.liveUrl ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  draggable={false}
                  className="block group"
                  style={{ textDecoration: "none" }}
                  onClick={e => { if (Math.abs(dragDelta.current) > 10) e.preventDefault(); }}
                >
                  <LiquidCard accentRgb={ACCENT_COLORS[(page * PER_PAGE + i) % ACCENT_COLORS.length]}>
                    {/* Preview image */}
                    <div className={`h-48 bg-gradient-to-br ${item.color || "from-violet-900 to-purple-700"} relative overflow-hidden`}>
                      {/* Browser chrome */}
                      <div className="absolute top-0 left-0 right-0 h-7 bg-black/60 backdrop-blur-sm flex items-center px-3 gap-1.5 z-10">
                        <span className="w-2 h-2 rounded-full bg-red-400/70" />
                        <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
                        <span className="w-2 h-2 rounded-full bg-green-400/70" />
                        <div className="ml-2 flex-1 h-3 bg-white/10 rounded-sm flex items-center px-2">
                          <span className="text-amber-400/30 text-[8px] truncate">{item.liveUrl || "example.com"}</span>
                        </div>
                      </div>

                      {/* Website screenshot */}
                      {item.liveUrl ? (
                        <img
                          src={`https://image.thum.io/get/width/800/crop/450/${item.liveUrl}`}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-2xl font-black text-amber-400 border border-white/20">
                            {item.title.charAt(0)}
                          </div>
                        </div>
                      )}

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center z-20">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm border border-white/20 text-amber-400 text-xs font-bold px-4 py-2 rounded-full">
                          Bekijk website ↗
                        </span>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-5">
                      <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">{item.category}</p>
                      <h3 className="text-amber-400 font-black text-lg mb-2">{item.title}</h3>
                      <div className="flex items-start gap-2">
                        <span className="block w-1 h-1 rounded-full bg-amber-400 flex-shrink-0 mt-2" />
                        <p className="text-amber-300 text-sm leading-relaxed">{item.result}</p>
                      </div>
                    </div>
                  </LiquidCard>
                </a>
              ))}
            </div>

            {/* Navigation — only show if more than 1 page */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-6 mt-4">
                {/* Prev */}
                <button
                  onClick={prev}
                  disabled={page === 0}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-400/60 hover:text-amber-400 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>

                {/* Dots */}
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === page
                          ? "w-6 h-2 bg-amber-500"
                          : "w-2 h-2 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                {/* Next */}
                <button
                  onClick={next}
                  disabled={page === totalPages - 1}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-400/60 hover:text-amber-400 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}

        <FadeIn className="text-center mt-12">
          <a href="#contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black text-lg px-8 py-4 rounded-2xl transition-all hover:-translate-y-0.5 shadow-xl shadow-amber-500/20">
            {t.portfolio.cta} →
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
