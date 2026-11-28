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
    <section className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-end pb-4 sm:pb-6 lg:pb-8 pt-24 overflow-hidden bg-[#171717]">
      {/* ========================================================
         BACKGROUND VIDEO: ORIGINAL CLEAN HD OFFICE VIDEO
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
          <source src="/video/herovideo.mp4" type="video/mp4" />
        </video>

        {/* Top subtle shadow for navbar clarity */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#171717]/85 to-transparent pointer-events-none" />

        {/* Bottom dark gradient: soft vignette so video stays completely visible above, while text remains 100% crisp */}
        <div className="absolute bottom-0 left-0 right-0 h-[46%] sm:h-[40%] lg:h-[35%] bg-gradient-to-t from-[#171717] via-[#171717]/90 to-transparent pointer-events-none" />
      </div>

      {/* ========================================================
         HERO CONTENT ANCHORED AT THE BOTTOM OVER BACKGROUND VIDEO
         ======================================================== */}
      <div className="w-full relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-auto">
        <div className="w-full max-w-6xl xl:max-w-7xl space-y-2 sm:space-y-3">
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
          <div className="pt-1 flex flex-col items-center gap-2 sm:gap-2.5 w-full">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("open-consultation"));
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full btn-primary-gradient font-bold text-xs sm:text-sm md:text-base shadow-2xl hover:scale-105 transition-all text-center cursor-pointer text-white"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <a
                href="https://wa.me/917851018751?text=Hi%20Digitaleafs!%20I%20want%20to%20discuss%20a%20website%20%2F%20app%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] font-bold text-xs sm:text-sm md:text-base shadow-2xl hover:scale-105 transition-all text-white cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.96.536 1.761.813 2.796.813 3.179 0 5.767-2.587 5.767-5.766.001-3.187-2.575-5.77-6.767-6.001zm0 10.453c-.917 0-1.636-.26-2.392-.713l-.17-.101-1.579.414.421-1.54-.112-.178c-.495-.788-.756-1.564-.755-2.57.001-2.585 2.104-4.688 4.69-4.688 2.584 0 4.687 2.103 4.688 4.688 0 2.586-2.104 4.689-4.791 4.688zm2.569-3.504c-.141-.07-.832-.41-.961-.457-.129-.047-.224-.07-.318.07-.094.141-.365.457-.448.551-.082.094-.165.106-.306.035-.141-.07-.597-.22-1.137-.701-.42-.375-.704-.838-.786-.979-.082-.141-.009-.217.062-.287.063-.063.141-.165.212-.247.071-.082.094-.141.141-.235.047-.094.024-.176-.012-.247-.035-.07-.318-.765-.436-1.047-.115-.274-.233-.237-.318-.241l-.271-.005c-.094 0-.247.035-.376.176-.129.141-.494.482-.494 1.176s.506 1.365.576 1.459c.071.094 1.002 1.53 2.428 2.146.339.147.604.235.811.301.341.108.652.093.898.056.274-.041.844-.345.963-.679.119-.334.119-.62.083-.679-.036-.059-.13-.094-.271-.165z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Horizontal Trust Points */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs md:text-sm text-[#F9F7E3]/85 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,1)] pb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <span>Starting from <strong className="text-[#F28D52]">₹7,999</strong></span>
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
