"use client";

import { useRef, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";

const IsometricOffice3D = dynamic(() => import("@/components/IsometricOffice3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-[#171717]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-2 border-[#F28D52] border-t-transparent rounded-full animate-spin"></div>
        <span className="text-xs font-mono text-[#F9F7E3]/60">Rendering 3D Studio...</span>
      </div>
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-end pb-4 sm:pb-6 lg:pb-8 pt-24 overflow-hidden bg-[#171717]">
      
      {/* ========================================================
         BACKGROUND: THREE.JS 3D ISOMETRIC DEVELOPER STUDIO
         ======================================================== */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <IsometricOffice3D />

        {/* Top subtle shadow for navbar clarity */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#171717]/85 to-transparent pointer-events-none" />

        {/* Bottom dark gradient: soft vignette so 3D office stays completely visible above, while text remains 100% crisp */}
        <div className="absolute bottom-0 left-0 right-0 h-[46%] sm:h-[40%] lg:h-[35%] bg-gradient-to-t from-[#171717] via-[#171717]/90 to-transparent pointer-events-none" />
      </div>

      {/* ========================================================
         HERO CONTENT ANCHORED AT THE BOTTOM OVER 3D BACKGROUND
         ======================================================== */}
      <div className="w-full relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-auto">
        <div className="w-full max-w-6xl xl:max-w-7xl space-y-2 sm:space-y-3">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b1b1b]/80 border border-white/10 backdrop-blur-md text-xs font-semibold text-[#F9F7E3] shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#F28D52]" />
            <span>Direct Senior Developer Studio • Zero Middlemen</span>
          </div>

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
          <div className="pt-1 flex flex-col items-center gap-2 sm:gap-2.5">
            <div>
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("open-consultation"));
                }}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3 rounded-full btn-primary-gradient font-bold text-xs sm:text-sm md:text-base shadow-2xl hover:scale-105 transition-all text-center cursor-pointer text-white"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>

            {/* Horizontal Trust Points */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs md:text-sm text-[#F9F7E3]/85 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,1)] pb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <span>Starting from <strong className="text-[#F28D52]">₹9,999</strong></span>
              <span className="text-white/40">•</span>
              <span>Zero monthly retainers</span>
              <span className="text-white/40">•</span>
              <span>100% Code Ownership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
