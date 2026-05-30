import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Stats from "@/app/components/Stats";
import Problem from "@/app/components/Problem";
import USP from "@/app/components/USP";
import Services from "@/app/components/Services";
import HowItWorks from "@/app/components/HowItWorks";
import Portfolio from "@/app/components/Portfolio";
import Pricing from "@/app/components/Pricing";
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import FloatingCTA from "@/app/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <USP />
        <Services />
        <HowItWorks />
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
