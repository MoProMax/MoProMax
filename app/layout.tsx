import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/app/context/LanguageContext";
import GlobalBackground from "@/app/components/GlobalBackground";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mo Pro Max — Web Design & Development",
  description:
    "Professional websites, brand identity, and booking systems for business owners. Your business, online. Done right.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-full flex flex-col font-[--font-geist] antialiased">
        <GlobalBackground />
        <LanguageProvider>
          <div className="relative z-10">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
