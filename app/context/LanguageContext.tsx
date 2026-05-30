"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Lang } from "@/app/lib/translations";

type LanguageContextType = {
  lang: Lang;
  t: (typeof translations)["en"];
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("nl");
  const toggle = () => setLang((l) => (l === "en" ? "nl" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
