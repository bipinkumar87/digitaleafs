"use client";

import { ArrowRight, Sparkles, Zap, ShieldCheck, Clock } from "lucide-react";

export default function QuoteBanner() {
  const whatsappMsg =
    "Hi Digitaleafs! I want to start my website / software project (Starting from ₹9,999). Please share proposal details.";

  return (
    <section className="py-20 lg:py-28 relative bg-gradient-to-b from-[#171717] via-[#121212] to-[#0e0e0e] border-t border-[#F9F7E3]/10 overflow-hidden w-full">
      {/* Background Ambient Spotlights across full width */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[650px] h-[400px] bg-gradient-to-tr from-[#F28D52]/20 via-[#E94C29]/15 to-transparent blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[400px] bg-gradient-to-bl from-[#E94C29]/20 via-[#A94322]/15 to-transparent blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-48 bg-[#F28D52]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Flashing Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-extrabold bg-[#F28D52]/15 text-[#F28D52] mb-6 sm:mb-8 backdrop-blur-md border border-[#F28D52]/20 shadow-sm">
          <Sparkles className="w-4 h-4 text-[#F28D52] animate-spin" style={{ animationDuration: "6s" }} />
          <span>UNBEATABLE VALUE • DIRECT DEVELOPER ACCESS</span>
        </div>

        {/* Main Power Headline with comfortable margins and line heights */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[3.8rem] font-black text-[#F9F7E3] tracking-tight leading-snug sm:leading-tight max-w-5xl mx-auto px-4">
          World-Class Websites &amp; Custom Software —{" "}
          <span className="inline-block py-2 sm:py-3 px-2 mt-1 sm:mt-2 text-gradient-orange text-3.5xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-black leading-tight sm:leading-normal">
            Starting at Just ₹9,999.
          </span>
        </h2>

        {/* Compelling Value Hook with comfortable padding and width */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#F9F7E3]/85 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed font-medium px-4 sm:px-2">
          Stop losing local customers to competitors. Get a high-converting, modern website or customized software engineered to drive direct calls, clinic bookings, and WhatsApp orders — <span className="text-white font-bold underline decoration-[#F28D52] decoration-2 underline-offset-4">with 100% full source code ownership and zero monthly agency retainers</span>.
        </p>

        {/* Comparison Bar: Traditional Agencies vs Digitaleafs */}
        <div className="mt-10 sm:mt-12 max-w-3xl lg:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-left px-2 sm:px-0">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#181818] border border-white/5 flex items-center gap-3.5 shadow-lg">
            <div className="w-9 h-9 rounded-full bg-red-500/15 text-red-400 flex items-center justify-center shrink-0 font-bold text-sm">
              ✕
            </div>
            <div>
              <div className="text-[11px] text-[#F9F7E3]/50 uppercase tracking-wider font-mono">Traditional Agencies</div>
              <div className="text-xs sm:text-sm font-semibold text-[#F9F7E3]/85">₹40,000+ &amp; Trapped in Monthly Retainers</div>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#231b18] border border-[#F28D52]/30 flex items-center gap-3.5 shadow-lg">
            <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-sm">
              ✓
            </div>
            <div>
              <div className="text-[11px] text-[#F28D52] uppercase tracking-wider font-mono font-bold">Digitaleafs Advantage</div>
              <div className="text-xs sm:text-sm font-bold text-white">From ₹9,999 One-Time &amp; 100% You Own It</div>
            </div>
          </div>
        </div>

        {/* Action Buttons with balanced spacing */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            type="button"
            onClick={() => {
              window.dispatchEvent(
                new CustomEvent("open-consultation", {
                  detail: { topic: "Starting from ₹9,999 Offer" },
                })
              );
            }}
            className="w-full sm:w-auto px-9 sm:px-11 py-4 rounded-full btn-primary-gradient font-extrabold text-sm sm:text-base flex items-center justify-center gap-3 shadow-2xl hover:scale-105 transition-all cursor-pointer group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-pulse" />
            <span>Claim ₹9,999 Offer Now</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 sm:px-9 py-4 rounded-full btn-secondary-cream font-bold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-white/10 transition-all cursor-pointer"
          >
            <span>Request Custom Proposal</span>
          </a>
        </div>

        {/* Trust Guarantees Footer Bar */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#F9F7E3]/75 font-medium px-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#F28D52]" />
            <span>15-Minute Direct Response</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#F28D52]" />
            <span>1-on-1 Direct Lead Developer Support</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#F28D52]" />
            <span>Zero Pushy Sales Guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
}
