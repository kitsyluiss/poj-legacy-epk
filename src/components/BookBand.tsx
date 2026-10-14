import { useState } from "react";
import { Phone, Check, Copy } from "lucide-react";

export default function BookBand() {
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPhone(text);
    setTimeout(() => setCopiedPhone(null), 2500);
  };

  return (
    <section id="book" className="py-24 px-4 sm:px-8 border-b border-white/[0.06] bg-[#070709] relative">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white tracking-tight">
            Book The Band
          </h2>
          <p className="text-sm sm:text-base text-white/50 max-w-xl mx-auto leading-relaxed">
            Now accepting bookings for concerts, corporate galas, private celebrations, and festivals worldwide.
          </p>
        </div>

        {/* Why Book Bullet Points */}
        <div className="double-bezel-outer">
          <div className="double-bezel-inner p-8 sm:p-10 space-y-6">
            <ul className="space-y-4 text-sm sm:text-base text-[#dcd7cb] leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c89b3c] mt-2.5 shrink-0" />
                <span>
                  Step back into the golden era of music with P-O-J Legacy, delivering the authentic sound and nostalgia of the 80s, 90s, and today.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c89b3c] mt-2.5 shrink-0" />
                <span>
                  Enjoy a live mix of timeless ballads and energetic anthems that keeps audiences singing along all night.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c89b3c] mt-2.5 shrink-0" />
                <span>
                  Ideal for concerts, corporate events, private parties, weddings, and festivals.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c89b3c] mt-2.5 shrink-0" />
                <span>
                  Professional musicians with strong stage presence and audience-first performances.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c89b3c] mt-2.5 shrink-0" />
                <span>
                  Now accepting bookings. Secure your preferred date early.
                </span>
              </li>
            </ul>

            {/* Direct Contacts Row (Phones Only, No Email) */}
            <div className="pt-8 border-t border-white/[0.08] space-y-4">
              <h3 className="text-sm font-syne font-bold uppercase tracking-wider text-white/70">
                Direct Booking Contacts
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Tristan Phone */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#c89b3c]/10 border border-[#c89b3c]/20 flex items-center justify-center text-[#e5c368] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-white/50 uppercase font-mono">Tristan</div>
                      <div className="font-syne font-bold text-white text-sm">+63 908 583 1913</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href="tel:+639085831913"
                      className="px-4 py-1.5 text-center rounded-full bg-[#c89b3c]/20 hover:bg-[#c89b3c] text-[#e5c368] hover:text-black text-xs font-semibold transition-colors"
                    >
                      Call
                    </a>
                    <button
                      onClick={() => copyToClipboard("+63 908 583 1913")}
                      className="p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                      title="Copy phone number"
                    >
                      {copiedPhone === "+63 908 583 1913" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Maria Phone */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#c89b3c]/10 border border-[#c89b3c]/20 flex items-center justify-center text-[#e5c368] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-white/50 uppercase font-mono">Maria</div>
                      <div className="font-syne font-bold text-white text-sm">+63 977 628 1086</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href="tel:+639776281086"
                      className="px-4 py-1.5 text-center rounded-full bg-[#c89b3c]/20 hover:bg-[#c89b3c] text-[#e5c368] hover:text-black text-xs font-semibold transition-colors"
                    >
                      Call
                    </a>
                    <button
                      onClick={() => copyToClipboard("+63 977 628 1086")}
                      className="p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                      title="Copy phone number"
                    >
                      {copiedPhone === "+63 977 628 1086" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
