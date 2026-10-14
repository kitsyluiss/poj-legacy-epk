import { useState } from "react";
import { repertoireCategories } from "./ArtistInformation";
import { Music, Sliders, Mic } from "lucide-react";

export default function Repertoire() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="repertoire" className="py-28 px-4 sm:px-8 border-b border-white/[0.06] bg-[#070709] relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white tracking-tight">
            Curated Live Repertoire
          </h2>
          <p className="text-sm sm:text-base text-white/50 max-w-[60ch] font-normal leading-relaxed">
            Flexible setlists designed for multi-set gala banquets, stadium-level nostalgia concerts, and private functions.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center gap-3">
          {repertoireCategories.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-syne font-semibold transition-all duration-300 ${
                activeTab === idx
                  ? "bg-[#c89b3c] text-black shadow-md shadow-[#c89b3c]/20 scale-105"
                  : "bg-white/[0.03] text-white/70 hover:text-white border border-white/10"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Active Category Display - Double-Bezel Enclosure */}
        <div className="double-bezel-outer">
          <div className="double-bezel-inner p-8 sm:p-12 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <h3 className="text-2xl font-syne font-bold text-white">
                  {repertoireCategories[activeTab].category}
                </h3>
                <p className="text-xs sm:text-sm text-white/50 mt-1 font-normal">
                  {repertoireCategories[activeTab].description}
                </p>
              </div>
              <span className="px-4 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-widest bg-[#c89b3c]/10 text-[#e5c368] border border-[#c89b3c]/20 w-fit">
                100% Live Instrumentation
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {repertoireCategories[activeTab].tracks.map((track, i) => (
                <div
                  key={track}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#c89b3c]/30 transition-colors flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-[#c89b3c]/10 border border-[#c89b3c]/20 flex items-center justify-center text-[#e5c368] text-xs font-mono font-bold shrink-0">
                    0{i + 1}
                  </div>
                  <span className="font-syne font-medium text-white text-sm">
                    {track}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Rider Specifications */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          <div className="double-bezel-outer">
            <div className="double-bezel-inner p-6 flex items-center gap-4 h-full">
              <Mic className="w-8 h-8 text-[#e5c368] shrink-0" />
              <div>
                <h4 className="font-syne font-bold text-white text-sm">Vocal Lineup</h4>
                <p className="text-xs text-white/50 mt-0.5">Dual Lead Vocals + 3-Part Backing Harmonies</p>
              </div>
            </div>
          </div>

          <div className="double-bezel-outer">
            <div className="double-bezel-inner p-6 flex items-center gap-4 h-full">
              <Music className="w-8 h-8 text-[#e5c368] shrink-0" />
              <div>
                <h4 className="font-syne font-bold text-white text-sm">Live Lineup</h4>
                <p className="text-xs text-white/50 mt-0.5">Bass, Lead Guitar, Keys/Synth, Full Drum Kit</p>
              </div>
            </div>
          </div>

          <div className="double-bezel-outer">
            <div className="double-bezel-inner p-6 flex items-center gap-4 h-full">
              <Sliders className="w-8 h-8 text-[#e5c368] shrink-0" />
              <div>
                <h4 className="font-syne font-bold text-white text-sm">Audio Rider</h4>
                <p className="text-xs text-white/50 mt-0.5">Stereo PA System, In-Ear / Floor Wedge Monitors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
