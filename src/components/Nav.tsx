import { useState, useEffect } from "react";
import { artistBio } from "./ArtistInformation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { name: "Archive", link: "#photos" },
    { name: "Heritage", link: "#biography" },
    { name: "7 Musicians", link: "#listen" },
    { name: "Setlist", link: "#repertoire" },
    { name: "Live Footage", link: "#videos" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 2px Continuous Scroll Progress Bar at very top */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-white/[0.04]">
        <div
          className="h-full bg-gradient-to-r from-[#e5c368] to-[#c89b3c] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#070709]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-xl"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo Brand Lockup */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-[#c89b3c]/40 bg-black p-0.5">
              <img
                src="/photos/poj-logo.jpg"
                alt="P-O-J Legacy logo"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-syne font-bold text-sm sm:text-base text-white tracking-wider group-hover:text-[#e5c368] transition-colors">
                {artistBio.name}
              </span>
              <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-[#e5c368]/80 font-medium">
                EPK 2026/2027
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (Strict Single Line) */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-xs font-mono font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Action Island Button */}
          <div className="hidden sm:flex items-center">
            <a
              href="#book"
              className="island-btn bg-white/[0.04] text-white border border-white/10 hover:border-[#c89b3c]/50 hover:bg-white/[0.08] !py-2.5 !px-5 !text-xs"
            >
              <span>Book Band</span>
              <span className="island-btn-icon-wrapper bg-white/10 text-[#e5c368] !w-5 !h-5">
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="#book"
              className="sm:hidden px-3 py-1.5 rounded-full bg-[#c89b3c]/20 text-[#e5c368] text-[11px] font-syne font-bold uppercase tracking-wider"
            >
              Book
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:text-[#e5c368] transition-colors"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Sheet */}
        {menuOpen && (
          <div className="fixed inset-0 top-[60px] bg-[#070709]/98 backdrop-blur-2xl z-50 flex flex-col justify-between p-8 lg:hidden animate-fadeIn">
            <div className="flex flex-col gap-6 pt-6 text-center">
              {navItems.map((item, idx) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="font-syne text-2xl font-bold text-white hover:text-[#e5c368] transition-colors py-1"
                >
                  <span className="text-xs text-[#e5c368]/60 mr-2 font-mono">0{idx + 1}.</span>
                  {item.name}
                </a>
              ))}
              <a
                href="#book"
                onClick={() => setMenuOpen(false)}
                className="mt-6 island-btn bg-gradient-to-r from-[#e5c368] to-[#c89b3c] text-black justify-center !py-4"
              >
                <span>Book The Band</span>
                <span className="island-btn-icon-wrapper bg-black/15 text-black">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>

            <div className="text-center pt-8 border-t border-white/10 text-xs text-white/50 space-y-1 font-mono">
              <p>P-O-J Legacy Official EPK</p>
              <p className="text-[#e5c368]">+63 908 583 1913 • +63 977 628 1086</p>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
