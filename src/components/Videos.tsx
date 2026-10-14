import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";

const videoClips = [
  {
    id: 1,
    title: "Live Concert Energy & Crowd Singalong",
    src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F3006874369502843%2F&show_text=false&width=560&t=0",
    poster: "/photos/pojband.jpg",
    badge: "Audience Singalong",
  },
  {
    id: 2,
    title: "Signature Hits & Stage Atmosphere",
    src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1148002844121160%2F&show_text=false&width=560&t=0",
    poster: "/photos/pojband-2.jpg",
    badge: "Jeremiah Hits",
  },
  {
    id: 3,
    title: "Dual Vocal Harmonies & Manila Sound",
    src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1491212465671861%2F&show_text=false&width=560&t=0",
    poster: "/photos/pojband-3.jpg",
    badge: "Acoustic Ballad",
  },
  {
    id: 4,
    title: "Power Groove & Rhythm Section Showcase",
    src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1035068583026473%2F&show_text=false&width=560&t=0",
    poster: "/photos/pojband-4.jpg",
    badge: "Full Band Groove",
  },
];

export default function Videos() {
  const [activeClipIndex, setActiveClipIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeClip = videoClips[activeClipIndex];

  const handleSelectClip = (index: number) => {
    setActiveClipIndex(index);
    setIsPlaying(false);
  };

  return (
    <section id="videos" className="py-28 px-4 sm:px-8 border-b border-white/[0.06] bg-[#070709] relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white tracking-tight">
              Live Stage Performances
            </h2>
            <p className="text-sm text-white/50 font-normal">
              Live concert clips and audience singalongs.
            </p>
          </div>
          <a
            href="https://www.facebook.com/pojlegacy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-[#e5c368] hover:text-white transition-colors"
          >
            <span>Official Facebook Reels</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Featured Cinema Stage - Double-Bezel Architecture */}
        <div className="double-bezel-outer">
          <div className="double-bezel-inner overflow-hidden bg-black aspect-video relative">
            {isPlaying ? (
              <iframe
                src={`${activeClip.src}&autoplay=1`}
                title={activeClip.title}
                className="w-full h-full border-0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div
                onClick={() => setIsPlaying(true)}
                className="relative w-full h-full cursor-pointer group"
              >
                {/* Poster Background */}
                <img
                  src={activeClip.poster}
                  alt={activeClip.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#c89b3c] text-black flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:shadow-[#c89b3c]/30 transition-all duration-300">
                    <Play className="w-8 h-8 fill-black translate-x-1" />
                  </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="space-y-1">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-black/80 text-[#e5c368] border border-white/20 inline-block">
                      {activeClip.badge}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-syne font-bold text-white">
                      {activeClip.title}
                    </h3>
                  </div>
                  <span className="text-[11px] text-white/70 font-mono uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 w-fit">
                    Click To Stream Live
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Clip Selectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {videoClips.map((clip, idx) => {
            const isSelected = activeClipIndex === idx;
            return (
              <div
                key={clip.id}
                onClick={() => handleSelectClip(idx)}
                className={`double-bezel-outer cursor-pointer transition-all duration-300 group ${
                  isSelected ? "ring-1 ring-[#c89b3c]/50" : "opacity-75 hover:opacity-100"
                }`}
              >
                <div className="double-bezel-inner p-3 space-y-3">
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black">
                    <img
                      src={clip.poster}
                      alt={clip.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                        <Play className="w-3.5 h-3.5 fill-white translate-x-0.5" />
                      </div>
                    </div>
                    <span className="absolute top-2 left-2 text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/80 text-[#e5c368]">
                      Clip 0{idx + 1}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-syne font-semibold text-xs text-white line-clamp-1 group-hover:text-[#e5c368]">
                      {clip.title}
                    </h4>
                    <p className="text-[10px] text-white/50 mt-0.5 font-mono uppercase tracking-wider">
                      {clip.badge}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}