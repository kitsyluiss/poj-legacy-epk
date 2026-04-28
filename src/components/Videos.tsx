const videoEmbeds = [
  "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F3006874369502843%2F&show_text=false&width=560&t=0",
  "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1148002844121160%2F&show_text=false&width=560&t=0",
  "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1491212465671861%2F&show_text=false&width=560&t=0",
  "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1035068583026473%2F&show_text=false&width=560&t=0",
];

export default function Videos() {
  return (
    <section
      id="videos"
      className="relative isolate overflow-hidden py-16 px-3 text-[#f0ece2] poj-blur-bg poj-blur-bg-4 section-boundary"
    >
      <div className="mx-auto max-w-screen-xl space-y-8">
        <div className="max-w-4xl rounded-3xl border border-white/15 bg-black/35 p-6 shadow-2xl backdrop-blur-sm space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-[#f0ece2]">
            Live Performances
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">
            Watch P-O-J Legacy in action
          </h2>
          <p className="text-lg leading-relaxed text-[#d9d4ca]">
            A few live clips from the band’s Facebook reels. Each video opens in place so visitors can
            play them right on the page.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory lg:gap-6 lg:pb-0 lg:flex-nowrap lg:overflow-x-auto lg:overflow-y-hidden">
          {videoEmbeds.map((src, index) => (
            <div
              key={src}
              className="min-w-[85%] snap-center overflow-hidden rounded-3xl border border-white/20 bg-white/5 shadow-2xl sm:min-w-[48%] lg:min-w-[40%] xl:min-w-[30%]"
            >
              <div className="relative w-full overflow-hidden bg-black pt-[56.25%]">
                <iframe
                  src={src}
                  title={`P-O-J Legacy live video ${index + 1}`}
                  className="absolute left-0 top-0 h-full w-full"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}