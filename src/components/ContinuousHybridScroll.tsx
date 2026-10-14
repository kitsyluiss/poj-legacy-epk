import { useState, useEffect, useRef } from "react";
import { members } from "./ArtistInformation";
import { Music, Disc } from "lucide-react";

export default function ContinuousHybridScroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const totalScrollableDistance = rect.height - window.innerHeight;

      if (totalScrollableDistance <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollableDistance, 0), 1);
      setScrollProgress(progress);

      const targetIndex = Math.min(
        Math.floor(progress * members.length),
        members.length - 1
      );

      setActiveIndex(targetIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const jumpToMember = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;

    const totalScrollableDistance = section.offsetHeight - window.innerHeight;
    const targetScrollTop =
      window.scrollY +
      section.getBoundingClientRect().top +
      (index / members.length) * totalScrollableDistance +
      10;

    if ((window as any).__lenis) {
      (window as any).__lenis.scrollTo(targetScrollTop, { duration: 1.2 });
    } else {
      window.scrollTo({ top: targetScrollTop, behavior: "smooth" });
    }
  };

  const currentMember = members[activeIndex] || members[0];

  return (
    <section id="listen" className="relative bg-[#070709] border-b border-white/[0.06]">
      {/* Mobile Layout: Fully Responsive, Continuous Vertical Cards with Zero Clipping */}
      <div className="md:hidden py-16 px-4 space-y-10">
        <div className="space-y-1">
          <h2 className="text-3xl font-syne font-bold text-white tracking-tight">
            7-Piece Live Ensemble
          </h2>
          <p className="text-xs text-white/50">
            Meet the musicians carrying forward the legacy of Jeremiah.
          </p>
        </div>

        <div className="space-y-8">
          {members.map((member, index) => (
            <div key={member.name} className="double-bezel-outer">
              <div className="double-bezel-inner p-5 space-y-4">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-black">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes("poj-logo.jpg")) {
                        target.src = "/photos/poj-logo.jpg";
                      }
                    }}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-black/80 text-[#e5c368] border border-white/20">
                      {member.tag || member.role}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-white/80 bg-black/80 px-2 py-0.5 rounded-full border border-white/20">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-xs font-mono text-[#e5c368] uppercase tracking-wider">
                    {member.instrument || member.role}
                  </p>
                  <h3 className="text-2xl font-syne font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-xs text-white/50 uppercase font-mono">
                    {member.role}
                  </p>
                </div>

                <p className="text-xs leading-relaxed text-[#dcd7cb] pt-3 border-t border-white/[0.08]">
                  {member.intro}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout: Pinned Continuous Scroll Showcase */}
      <div
        ref={sectionRef}
        className="hidden md:block relative"
        style={{ height: `${members.length * 80}vh` }}
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center px-8 py-14 overflow-hidden">
          {/* Subtle warm stage highlight */}
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#c89b3c]/[0.05] blur-[150px] pointer-events-none" />

          <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col justify-between h-full max-h-[820px]">
            {/* Top Section Header */}
            <div>
              <div className="flex items-center justify-between gap-4 pb-4">
                <div>
                  <h2 className="text-2xl sm:text-4xl font-syne font-bold text-white tracking-tight">
                    7-Piece Live Ensemble
                  </h2>
                  <p className="text-xs sm:text-sm text-white/50 mt-1">
                    Meet the musicians carrying forward the legacy of Jeremiah.
                  </p>
                </div>

                {/* Progress counter */}
                <div className="text-right">
                  <div className="text-2xl font-syne font-bold text-white">
                    0{activeIndex + 1} <span className="text-white/30 text-sm font-normal">/ 0{members.length}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#e5c368] font-mono">
                    {currentMember.name} • {currentMember.instrument}
                  </span>
                </div>
              </div>

              {/* Jump buttons */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 border-y border-white/[0.06]">
                {members.map((member, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <button
                      key={member.id || member.name}
                      onClick={() => jumpToMember(index)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 ${
                        isActive
                          ? "bg-[#c89b3c] text-black font-bold shadow-md shadow-[#c89b3c]/20 scale-105"
                          : "bg-white/[0.03] text-white/60 hover:text-white border border-white/10"
                      }`}
                    >
                      <span className="font-mono text-[10px]">0{index + 1}</span>
                      <span>{member.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Stage: Asymmetrical Editorial Split */}
            <div className="grid grid-cols-12 gap-12 items-center my-auto py-4">
              {/* Left: Member Portrait Frame */}
              <div className="col-span-5 flex justify-center">
                <div className="double-bezel-outer w-[320px] lg:w-[350px]">
                  <div className="double-bezel-inner relative aspect-[4/5] overflow-hidden bg-black">
                    {members.map((member, index) => {
                      const isActive = activeIndex === index;
                      return (
                        <img
                          key={member.name}
                          src={member.image}
                          alt={member.name}
                          loading="lazy"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (!target.src.includes("poj-logo.jpg")) {
                              target.src = "/photos/poj-logo.jpg";
                            }
                          }}
                          className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                            isActive
                              ? "opacity-100 scale-100 blur-0"
                              : "opacity-0 scale-105 blur-[3px] pointer-events-none"
                          }`}
                        />
                      );
                    })}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-black/75 backdrop-blur-md border border-white/20 text-[#e5c368]">
                        {currentMember.tag || currentMember.role}
                      </span>
                      <span className="text-xs font-mono font-bold text-white/80 bg-black/75 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/20">
                        0{activeIndex + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Editorial Narrative */}
              <div className="col-span-7 space-y-6">
                <div className="space-y-2">
                  <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#e5c368] font-mono">
                    {currentMember.instrument || currentMember.role}
                  </p>
                  <h3 className="text-4xl lg:text-6xl font-syne font-bold text-white tracking-tight">
                    {currentMember.name}
                  </h3>
                  <p className="text-sm font-medium text-white/50 tracking-wider uppercase font-mono">
                    {currentMember.role}
                  </p>
                </div>

                <div className="double-bezel-outer">
                  <div className="double-bezel-inner p-8 space-y-4">
                    <p className="text-base leading-relaxed text-[#dcd7cb] font-normal">
                      {currentMember.intro}
                    </p>

                    <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-white/50 font-mono">
                      <span className="flex items-center gap-1.5 text-[#e5c368]">
                        <Music className="w-3.5 h-3.5" />
                        Live Instrumentalist
                      </span>
                      <span className="flex items-center gap-1 text-white/50">
                        <Disc className="w-3 h-3 text-[#c89b3c]" />
                        Scroll Down For Next Artist
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Progress Bar */}
            <div className="pt-2">
              <div className="flex items-center justify-between text-[11px] text-white/40 mb-2 font-mono">
                <span>CONTINUOUS SCROLL PROGRESS</span>
                <span className="text-[#e5c368] font-bold">{Math.round(scrollProgress * 100)}%</span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#e5c368] to-[#c89b3c] h-full rounded-full transition-all duration-150 ease-out"
                  style={{ width: `${Math.max(scrollProgress * 100, 3)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
