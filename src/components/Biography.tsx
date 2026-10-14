import { Quote } from "lucide-react";

export default function Biography() {
  const milestones = [
    {
      year: "1998",
      title: "The Genesis of Jeremiah",
      desc: "Jeremiah established their name in Philippine music with 'Nanghihinayang', becoming the emotional soundtrack to millions of love stories, school reunions, and radio countdowns across the nation.",
    },
    {
      year: "2000s - 2010s",
      title: "Touring & Live Musicianship",
      desc: "Piwee, as band leader of the Jeremiah Full Band, brought authentic live arrangements and multi-part harmonies to arenas, civic centers, and overseas Filipino communities.",
    },
    {
      year: "2020s & Beyond",
      title: "P-O-J Legacy Reborn",
      desc: "Today, P-O-J Legacy proudly carries forward Piwee's vision. A tight 7-piece live band honors his dedication through every performance, recreating the golden era of 80s, 90s, and classic OPM.",
    },
  ];

  return (
    <section id="biography" className="py-28 px-4 sm:px-8 border-b border-white/[0.06] bg-[#070709] relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white tracking-tight">
            The Jeremiah Heritage & The P-O-J Legacy
          </h2>
          <p className="text-sm sm:text-base text-white/50 max-w-[62ch] font-normal leading-relaxed">
            From chart-topping 90s radio dominance to live festival stages, the authentic sound of Jeremiah continues through dedicated musicianship.
          </p>
        </div>

        {/* Featured Pull Quote Block - Double-Bezel Architecture */}
        <div className="double-bezel-outer">
          <div className="double-bezel-inner p-8 sm:p-12 relative overflow-hidden bg-gradient-to-br from-[#12131a] to-[#0a0a0f]">
            <Quote className="w-10 h-10 text-[#c89b3c]/40 mb-4" />
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-syne font-medium text-[#f5f2eb] leading-snug">
              “Jeremiah’s songs became part of the soundtrack of a generation. With P-O-J Legacy, we honor Piwee’s memory on every stage — playing 100% live with the same emotional pull and respect for the music.”
            </blockquote>
            <div className="mt-8 flex items-center gap-4 pt-6 border-t border-white/[0.08]">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#c89b3c]/40 bg-black">
                <img src="/photos/piwee.jpg" alt="Piwee of Jeremiah" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-syne font-bold text-white text-base">In Memory of Piwee</p>
                <p className="text-xs text-[#e5c368] font-mono uppercase tracking-wider">Original Band Leader & Founder</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Milestones - Double-Bezel Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {milestones.map((item, idx) => (
            <div key={idx} className="double-bezel-outer">
              <div className="double-bezel-inner p-8 h-full flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="text-2xl sm:text-3xl font-syne font-black text-[#e5c368]">
                    {item.year}
                  </div>
                  <h3 className="text-lg font-syne font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] text-[10px] font-mono uppercase tracking-widest text-white/40">
                  Era 0{idx + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
