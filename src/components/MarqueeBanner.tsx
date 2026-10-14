export default function MarqueeBanner() {
  const items = [
    "JEREMIAH CLASSICS",
    "NANGHIHINAYANG",
    "7-PIECE LIVE TOURING BAND",
    "ORIGINAL MANILA SOUND",
    "80s & 90s RETRO NOSTALGIA",
    "FESTIVALS & CORPORATE CONCERTS",
    "WORLDWIDE BOOKINGS 2026/2027",
  ];

  return (
    <div className="relative w-full overflow-hidden py-3.5 border-y border-white/[0.06] bg-[#090a0d] select-none">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#070709] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#070709] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center mx-5 gap-5">
            <span className="text-[11px] font-mono font-medium tracking-[0.25em] text-[#dcd7cb]/70 uppercase">
              {text}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c89b3c]/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
