import "./App.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Biography from "./components/Biography";
import BookBand from "./components/BookBand";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Listen from "./components/Listen";
import Nav from "./components/Nav";
import Photos from "./components/Photos";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div className="App bg-black">
      <SpeedInsights />
      <header className="App-header">
        <Nav />
        <main className="pt-16">
          <Hero />
          <Photos />
          <Biography />
          <Listen />
          <BookBand />
        </main>
        <Footer />
      </header>
      <Analytics />
    </div>
  );
}
