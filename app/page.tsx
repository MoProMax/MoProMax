import dynamic from "next/dynamic";
import Hero from "@/app/components/Hero";
import Stats from "@/app/components/Stats";
import Problem from "@/app/components/Problem";
import USP from "@/app/components/USP";
import Services from "@/app/components/Services";
import HowItWorks from "@/app/components/HowItWorks";
import Automate from "@/app/components/Automate";
// Portfolio will be dynamically imported to reduce initial client JS
const Portfolio = dynamic(() => import("@/app/components/Portfolio"), {
  ssr: false,
  loading: () => <div className="py-24">Loading…</div>,
});
import Pricing from "@/app/components/Pricing";
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import FloatingCTA from "@/app/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Stats />
        <Problem />
        <USP />
        <Services />
        <HowItWorks />
        <Automate />
        <Portfolio />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
