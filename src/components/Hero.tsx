import { stats } from "./ArtistInformation";
import { ArrowUpRight, Calendar, Users, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-8 overflow-hidden bg-[#070709]"
    >
      {/* Subtle organic tungsten stage highlight (singular warm tone, no rainbow AI mesh) */}
      <div className="absolute top-12 left-1/3 w-[650px] h-[350px] bg-[#c89b3c]/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">


        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Bespoke Typographic Statement */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#e5c368] font-syne">
                Piwee of Jeremiah & The Live OPM Ensemble
              </p>
              <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-syne font-extrabold tracking-tight leading-[0.98] gold-gradient-text">
                P-O-J<br />LEGACY
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#dcd7cb] max-w-[56ch] leading-relaxed font-normal">
              Carrying forward the historic music of Jeremiah boy band and Philippine radio royalty. A disciplined 7-piece live touring ensemble delivering authentic 80s, 90s, and classic Manila Sound ballads with twin lead vocal arrangements.
            </p>

            {/* Island Nested CTA Architecture */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#book"
                className="island-btn bg-gradient-to-r from-[#e5c368] to-[#c89b3c] text-black shadow-lg shadow-[#c89b3c]/15 hover:shadow-[#c89b3c]/25"
              >
                <span>Inquire Booking</span>
                <span className="island-btn-icon-wrapper bg-black/15 text-black">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>

              <a
                href="#listen"
                className="island-btn bg-white/[0.04] text-white border border-white/10 hover:border-[#c89b3c]/40 hover:bg-white/[0.08]"
              >
                <span>Meet 7 Musicians</span>
                <span className="island-btn-icon-wrapper bg-white/10 text-[#e5c368]">
                  <Users className="w-3.5 h-3.5" />
                </span>
              </a>

              <a
                href="#videos"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors px-4 py-3"
              >
                <Calendar className="w-3.5 h-3.5 text-[#e5c368]" />
                <span>Watch Live Sets</span>
              </a>
            </div>

            {/* Micro Stats Bar - High Contrast & Architectural Spacing */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5 pt-8 border-t border-white/[0.08]">
              {stats.map((stat, i) => (
                <div key={i} className="min-w-0 space-y-1">
                  <div className="text-base sm:text-lg xl:text-xl font-syne font-bold text-white tracking-tight break-words leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-white/50 tracking-widest uppercase font-mono truncate">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Double-Bezel Artist Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="double-bezel-outer w-full max-w-[380px] sm:max-w-[420px]">
              <div className="double-bezel-inner p-3 relative overflow-hidden">
                {/* Image */}
                <div className="relative aspect-square rounded-[calc(1.75rem-0.625rem)] overflow-hidden bg-black">
                  <img
                    src="/photos/poj-logo.jpg"
                    alt="P-O-J Legacy official insignia"
                    fetchPriority="high"
                    className="w-full h-full object-cover object-center filter grayscale-[10%] contrast-[1.05]"
                  />
                  {/* Subtle edge vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Bottom Emblem Details */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#e5c368] font-mono">
                        Band Insignia
                      </p>
                      <p className="text-sm font-syne font-bold text-white">
                        Piwee of Jeremiah
                      </p>
                    </div>
                    <span className="text-[10px] font-mono uppercase bg-white/10 px-2 py-1 rounded text-white/80 border border-white/10">
                      Est. 1998
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Bottom Scroll Cue */}
        <div className="mt-16 text-center">
          <a
            href="#photos"
            className="inline-flex flex-col items-center text-[10px] tracking-[0.25em] uppercase text-white/40 hover:text-[#e5c368] transition-colors font-mono"
          >
            <span>Scroll For Media Archive</span>
            <ChevronDown className="w-3.5 h-3.5 mt-1 animate-bounce text-[#e5c368]/80" />
          </a>
        </div>
      </div>
    </section>
  );
}
