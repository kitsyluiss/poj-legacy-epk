import { useState, useEffect } from "react";
import { photos } from "./ArtistInformation";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Photos() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => {
    setSelectedIdx(idx);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIdx(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx + 1) % photos.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") setSelectedIdx((prev) => (prev! + 1) % photos.length);
      if (e.key === "ArrowLeft") setSelectedIdx((prev) => (prev! - 1 + photos.length) % photos.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx]);

  return (
    <section id="photos" className="py-28 px-4 sm:px-8 border-b border-white/[0.06] bg-[#070709] relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white tracking-tight">
              Media Archive
            </h2>
            <p className="text-sm text-white/50 max-w-sm font-normal leading-relaxed">
              Stage and studio photo records of P-O-J Legacy live in concert and behind the scenes.
            </p>
          </div>
        </div>

        {/* Asymmetrical Double-Bezel Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Large Showcase Image (8 columns) */}
          <div
            onClick={() => openLightbox(0)}
            className="md:col-span-8 double-bezel-outer cursor-pointer group"
          >
            <div className="double-bezel-inner aspect-[16/10] overflow-hidden relative">
              <img
                src={photos[0]}
                alt="P-O-J Legacy full lineup stage headline"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#e5c368] font-mono">
                    Full Band Lineup
                  </span>
                  <h3 className="text-lg sm:text-2xl font-syne font-bold text-white mt-0.5">
                    Live Stage Performance
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Maximize2 className="w-4 h-4 text-[#e5c368]" />
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Stacked Image (4 columns) */}
          <div
            onClick={() => openLightbox(1)}
            className="md:col-span-4 double-bezel-outer cursor-pointer group"
          >
            <div className="double-bezel-inner aspect-[4/5] md:aspect-auto h-full overflow-hidden relative min-h-[260px]">
              <img
                src={photos[1]}
                alt="P-O-J Legacy concert atmosphere"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#e5c368] font-mono">
                    Concert Energy
                  </span>
                  <h4 className="text-base font-syne font-bold text-white">
                    Live Crowd Connection
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                  <Maximize2 className="w-3.5 h-3.5 text-[#e5c368]" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 3 Grid Items (4 columns each) */}
          {photos.slice(2, 5).map((src, idx) => (
            <div
              key={src}
              onClick={() => openLightbox(idx + 2)}
              className="md:col-span-4 double-bezel-outer cursor-pointer group"
            >
              <div className="double-bezel-inner aspect-[4/3] overflow-hidden relative">
                <img
                  src={src}
                  alt={`P-O-J Legacy performance archive ${idx + 3}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-white/80 font-mono">
                    Archive 0{idx + 3}
                  </span>
                  <span className="text-[10px] font-mono text-[#e5c368] px-2 py-0.5 rounded bg-black/60 border border-white/10">
                    High-Res
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal Lightbox */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={closeLightbox}
        >
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white z-20 pointer-events-auto">
            <div className="text-xs font-mono tracking-widest text-white/70">
              P-O-J LEGACY PRESS ARCHIVE &nbsp;•&nbsp; <span className="text-[#e5c368]">0{selectedIdx + 1} / 0{photos.length}</span>
            </div>
            <button
              onClick={closeLightbox}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:text-[#e5c368] transition-colors z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:text-[#e5c368] transition-colors z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selectedIdx]}
              alt={`P-O-J Legacy large promo view ${selectedIdx + 1}`}
              className="max-w-full max-h-[85vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}
