import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesGrid from "./components/FeaturesGrid";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingBackground from "./components/FloatingBackground";

export default function Home() {
  return (
    // CHANGE 1: Removed 'bg-white'. Added 'overflow-x-hidden' to prevent scrollbars.
    <main className="min-h-screen selection:bg-green-100 relative overflow-x-hidden">

      {/* CHANGE 2: The Background is here. If you don't see this, the file might be missing. */}
      <FloatingBackground />

      {/* CHANGE 3: The Content sits on top (z-10) */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <FeaturesGrid />
        <HowItWorks />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}