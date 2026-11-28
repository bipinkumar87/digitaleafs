"use client";

import { useState, useEffect } from "react";
import { X, Sparkles, Clock, CheckCircle2, ArrowRight, ShieldCheck, MessageSquare, Zap, Gift } from "lucide-react";

const OFFER_END_DATE = new Date("2027-01-05T23:59:59+05:30");
const SESSION_STORAGE_KEY = "digitaleafs_new_year_2027_offer_seen";

export default function NewYearOfferModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isExpired: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  // Calculate live countdown to 5 Jan 2027 23:59:59 IST
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = OFFER_END_DATE.getTime() - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Trigger popup when user lands/arrives on the website
  useEffect(() => {
    // Check if user already dismissed it in this session
    const seen = typeof window !== "undefined" ? sessionStorage.getItem(SESSION_STORAGE_KEY) : null;
    
    // Auto-open after a short 1.5s delay if not previously dismissed
    const timer = setTimeout(() => {
      if (!seen) {
        setIsOpen(true);
      } else {
        setHasDismissed(true);
      }
    }, 1500);

    // Global event listener to let any button/link trigger this offer popup
    const handleOpenEvent = () => {
      setIsOpen(true);
      setHasDismissed(false);
    };

    window.addEventListener("open-new-year-offer", handleOpenEvent);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("open-new-year-offer", handleOpenEvent);
    };
  }, []);

  // Close handler with session persistence
  const handleClose = () => {
    setIsOpen(false);
    setHasDismissed(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
    }
  };

  // Re-open from floating chip
  const handleReopen = () => {
    setIsOpen(true);
  };

  const handleOpenConsultation = () => {
    handleClose();
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-consultation", {
          detail: { topic: "New Year 2027 Offer Inquiry (₹9,999)" },
        })
      );
    }
  };

  const whatsappOfferUrl = `https://wa.me/917851018751?text=${encodeURIComponent(
    "Hi Digitaleafs! I want to claim the New Year 2027 Special Website Offer (Starting from ₹9,999, Valid till 5 Jan 2027). Please share proposal details."
  )}`;

  return (
    <>
      {/* Floating Re-Open Badge (Shown on bottom-left if user closed the modal) */}
      {!isOpen && hasDismissed && !timeLeft.isExpired && (
        <div className="fixed bottom-6 left-6 z-40 animate-fade-in">
          <button
            type="button"
            onClick={handleReopen}
            className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#1b1b1b]/95 hover:bg-[#222222] border border-[#F28D52]/40 hover:border-[#F28D52] shadow-[0_8px_30px_rgba(242,141,82,0.25)] text-white text-xs font-bold transition-all hover:scale-105 cursor-pointer backdrop-blur-md"
            title="Click to view New Year 2027 Special Offer"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F28D52] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E94C29]"></span>
            </span>
            <span className="text-amber-300">🎉 New Year Offer:</span>
            <span className="text-[#F28D52] font-mono font-black">₹9,999</span>
            <span className="text-[#F9F7E3]/60 hidden sm:inline">• Ends 5 Jan</span>
          </button>
        </div>
      )}

      {/* Main Modal Backdrop & Container */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-black/80 backdrop-blur-md transition-all animate-fade-in">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-[#F28D52]/20 via-[#E94C29]/15 to-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

          {/* Modal Card */}
          <div
            className="relative w-full max-w-lg rounded-3xl bg-[#171717] border border-[#F28D52]/40 shadow-[0_20px_60px_rgba(0,0,0,0.85)] p-5 sm:p-7 text-[#F9F7E3] z-10 overflow-hidden my-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="new-year-offer-title"
          >
            {/* Top Festive Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-[#F28D52] to-[#E94C29]" />

            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-[#F9F7E3]/70 hover:text-white flex items-center justify-center transition-all cursor-pointer z-20"
              aria-label="Close offer popup"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#F28D52]/20 to-amber-500/20 text-[#F28D52] border border-[#F28D52]/40 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
                <span>🎆 NEW YEAR 2027 MEGA OFFER</span>
              </span>
            </div>

            {/* Title & Subheading */}
            <h3
              id="new-year-offer-title"
              className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug"
            >
              Start 2027 With a High-Speed{" "}
              <span className="text-gradient-orange">Custom Website</span>
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-[#F9F7E3]/75 leading-relaxed">
              Launch your clinic, shop, coaching institute, or business online with 100% source code ownership. Zero monthly agency lock-in.
            </p>

            {/* Pricing Highlight Box */}
            <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-[#1b1b1b] to-black/80 border border-white/10 relative overflow-hidden">
              <div className="flex items-baseline justify-between flex-wrap gap-2">
                <div>
                  <div className="text-[11px] text-[#F9F7E3]/60 uppercase tracking-wider font-mono">
                    Festive Starting Price
                  </div>
                  <div className="flex items-baseline gap-2.5 mt-1">
                    <span className="text-3xl sm:text-4xl font-black text-[#F28D52] font-mono">
                      ₹9,999
                    </span>
                    <span className="text-base sm:text-lg text-[#F9F7E3]/40 line-through font-mono">
                      ₹18,999
                    </span>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                  Save ₹9,000 (47% OFF)
                </div>
              </div>

              {/* Offer Deadline & Live Countdown */}
              <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between flex-wrap gap-2 text-xs">
                <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Valid strictly till 5 January 2027</span>
                </div>

                {!timeLeft.isExpired && (
                  <div className="flex items-center gap-1 text-[11px] font-mono text-white/90 bg-white/[0.06] px-2.5 py-1 rounded-md border border-white/10">
                    <span className="text-[#F28D52] font-bold">{timeLeft.days}d</span>:
                    <span>{String(timeLeft.hours).padStart(2, "0")}h</span>:
                    <span>{String(timeLeft.minutes).padStart(2, "0")}m</span>:
                    <span className="text-amber-300 font-bold">{String(timeLeft.seconds).padStart(2, "0")}s</span>
                  </div>
                )}
              </div>
            </div>

            {/* What's Included Feature List */}
            <div className="mt-4 space-y-2">
              <div className="text-[11px] uppercase tracking-wider font-mono text-[#F9F7E3]/60 font-bold">
                Everything Included in ₹9,999:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F9F7E3]/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sub-second Fast (Next.js)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1-Click WhatsApp Lead Funnel</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Google Maps &amp; Local SEO</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Full Code Ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Mobile &amp; Desktop Optimized</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>30 Days Free Support (5 Times Updates)</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href={whatsappOfferUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 hover:scale-[1.02] transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Claim Offer on WhatsApp (₹9,999) →</span>
              </a>

              <div className="flex items-center justify-between gap-3 pt-1">
                <button
                  type="button"
                  onClick={handleOpenConsultation}
                  className="text-xs text-[#F9F7E3]/70 hover:text-white underline decoration-white/30 underline-offset-4 transition-colors cursor-pointer"
                >
                  Or Request Developer Call Back
                </button>

                <div className="flex items-center gap-1.5 text-[11px] text-[#F9F7E3]/50">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F28D52]" />
                  <span>Zero Hidden Fees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
