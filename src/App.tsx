import "./App.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

import SmoothScroll from "./components/SmoothScroll";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import MarqueeBanner from "./components/MarqueeBanner";
import Photos from "./components/Photos";
import Biography from "./components/Biography";
import ContinuousHybridScroll from "./components/ContinuousHybridScroll";
import Repertoire from "./components/Repertoire";
import Videos from "./components/Videos";
import BookBand from "./components/BookBand";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#08080a] text-[#f0ece2] selection:bg-gold-500/30 selection:text-white">
      {/* Subtle film grain for warm analog concert aesthetics */}
      <div className="grain-overlay" />

      {/* Lenis Smooth Scroll Controller */}
      <SmoothScroll />

      {/* Vercel Speed & Analytics */}
      <SpeedInsights />
      <Analytics />

      {/* Navigation */}
      <Nav />

      {/* Main Narrative Flow */}
      <main className="relative z-10">
        <Hero />
        <MarqueeBanner />
        <Photos />
        <Biography />
        <ContinuousHybridScroll />
        <Repertoire />
        <Videos />
        <BookBand />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
