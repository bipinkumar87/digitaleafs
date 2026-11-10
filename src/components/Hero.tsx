"use client";

import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video autoplays smoothly with 100% clean quality
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.log("Video autoplay hint:", err);
      });
    }
  }, []);

  return (
    <section className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-end pb-3 sm:pb-5 lg:pb-6 pt-24 overflow-hidden bg-[#171717]">
      {/* ========================================================
         BACKGROUND VIDEO (WebM first for 3x faster load, MP4 fallback)
         ======================================================== */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover scale-100"
        >
          <source src="/video/herovideo.webm" type="video/webm" />
          <source src="/video/herovideo.mp4" type="video/mp4" />
        </video>

        {/* Top subtle shadow for navbar clarity */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0a0a0a]/70 to-transparent pointer-events-none" />

        {/* Bottom dark gradient: strictly on the lower 35-40% so faces/video stay completely visible */}
        <div className="absolute bottom-0 left-0 right-0 h-[48%] sm:h-[42%] lg:h-[38%] bg-gradient-to-t from-[#171717] via-[#171717]/95 to-transparent pointer-events-none" />
      </div>

      {/* ========================================================
         HERO CONTENT ANCHORED TIGHTLY TO THE VERY BOTTOM
         ======================================================== */}
      <div className="w-full relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-auto">
        <div className="w-full max-w-6xl xl:max-w-7xl space-y-2.5 sm:space-y-3.5">
          
          {/* Main Headline with 3D Sculpted Extrusion */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] font-black tracking-tight leading-[1.12] max-w-6xl xl:max-w-7xl mx-auto">
            <span className="text-3d-cream">
              We Build Custom{" "}
            </span>
            <span className="text-3d-orange">
              Websites, Apps &amp; Software{" "}
            </span>
            <span className="text-3d-cream">
              That Scale Your Business.
            </span>
          </h1>

          {/* Subtitle with wider width */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#F9F7E3] leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,1)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.9)] font-medium max-w-5xl mx-auto">
            High-converting websites, fast Android &amp; iOS mobile apps, and custom management software engineered for{" "}
            <span className="text-[#F28D52] font-bold">Local Small Businesses</span>,{" "}
            <span className="text-white font-bold">Clinics &amp; Doctors</span>,{" "}
            <span className="text-[#F28D52] font-bold">Retail Stores</span>, and{" "}
            <span className="text-white font-bold">Coaching Centers</span>.
          </p>

          {/* Primary Action Button & Trust Points */}
          <div className="pt-0.5 flex flex-col items-center gap-2 sm:gap-2.5">
            <div>
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("open-consultation"));
                }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full btn-primary-gradient font-bold text-xs sm:text-sm md:text-base shadow-2xl hover:scale-105 transition-all text-center cursor-pointer"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>

            {/* Horizontal Text */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs md:text-sm text-[#F9F7E3]/85 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,1)] pb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <span>Projects starting from <strong className="text-[#F28D52]">₹9,999</strong></span>
              <span className="text-white/40">•</span>
              <span>Zero monthly retainer fees</span>
              <span className="text-white/40">•</span>
              <span>100% Code Ownership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
