import { socialMedia } from "./ArtistInformation";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    if ((window as any).__lenis) {
      (window as any).__lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative py-20 px-4 sm:px-8 border-t border-white/[0.06] bg-[#050507] text-[#dcd7cb]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-2xl sm:text-3xl font-syne font-bold text-white tracking-tight">
              P-O-J LEGACY
            </h3>
            <p className="text-xs sm:text-sm text-white/50 max-w-md font-normal leading-relaxed">
              Piwee of Jeremiah & The Premier 7-Piece Live OPM Ensemble. Direct management booking for festival tours, corporate galas, and private events worldwide.
            </p>
          </div>

          {/* Social links & Back to top button */}
          <div className="flex items-center gap-4">
            {socialMedia.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/[0.03] border border-white/10 hover:border-[#c89b3c]/40 text-[#e5c368] hover:text-white flex items-center justify-center transition-all hover:scale-105"
                aria-label={`Visit our ${social.name}`}
              >
                {social.icon}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="island-btn bg-white/[0.03] text-white border border-white/10 hover:border-[#c89b3c]/40 hover:bg-white/[0.06] !py-2.5 !px-5 !text-xs"
            >
              <span>Back to Top</span>
              <span className="island-btn-icon-wrapper bg-white/10 text-[#e5c368] !w-5 !h-5">
                <ArrowUp className="w-3 h-3" />
              </span>
            </button>
          </div>
        </div>

        {/* Legal & Historical Tribute */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-mono">
          <p>© {new Date().getFullYear()} P-O-J Legacy Band. All rights reserved.</p>
          <p className="text-[#e5c368]/80">
            Dedicated in living memory to Piwee and the enduring songs of Jeremiah
          </p>
        </div>
      </div>
    </footer>
  );
}
