"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Code2, Users, ShieldCheck, Laptop } from "lucide-react";

export default function HeroOffice3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  useEffect(() => {
    let animationFrame: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetY = x * 8; // subtle smooth 3D tilt
      targetX = -y * 6;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      setRotX(currentX);
      setRotY(currentY);
      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[580px] lg:min-h-[750px] flex items-center justify-center overflow-hidden [perspective:1400px] select-none"
    >
      {/* ========================================================
         3D ISOMETRIC PARALLAX STAGE (DITTO 3D RENDER)
         ======================================================== */}
      <div
        className="relative w-full h-full flex items-center justify-center transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.04)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* The Exact Ditto 3D Office High-Resolution Image */}
        <div className="relative w-full h-full max-w-[1700px] flex items-center justify-center">
          <Image
            src="/img/hero-office.jpg"
            alt="Digitaleafs 3D Isometric Developer Studio"
            fill
            priority
            sizes="100vw"
            className="object-contain lg:object-cover object-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter brightness-105 contrast-105"
          />
        </div>

        {/* ========================================================
           INTERACTIVE 3D PULSATING HOTSPOTS OVER REAL OFFICE ZONES
           ======================================================== */}

        {/* 1. Engineering Pod (Yellow Desks - Left) */}
        <div
          className="absolute top-[68%] left-[26%] sm:left-[28%] -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer group"
          onClick={() => setActiveHotspot(activeHotspot === "dev" ? null : "dev")}
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute w-8 h-8 rounded-full bg-emerald-400/40 animate-ping"></span>
            <span className="relative w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#171717] shadow-lg shadow-emerald-400/70 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            </span>
          </div>

          {/* Interactive Tooltip Card */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-52 sm:w-60 p-3.5 rounded-2xl bg-[#1b1b1b]/95 border border-emerald-500/30 shadow-2xl backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none scale-90 group-hover:scale-100 z-40">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-emerald-400 font-mono">
              <Code2 className="w-3.5 h-3.5" />
              <span>Engineering Pod</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-white mt-1">Lead Developer Workstations</div>
            <div className="text-[11px] text-[#F9F7E3]/75 mt-1 leading-relaxed">
              Active full-stack engineers building Next.js web applications, Android &amp; iOS apps.
            </div>
            <div className="mt-2 text-[10px] text-emerald-400/90 font-semibold flex items-center gap-1">
              ✓ 100% Code Ownership • Zero Retainers
            </div>
          </div>
        </div>

        {/* 2. Conference & Strategy Room (Oval Yellow Table - Right) */}
        <div
          className="absolute top-[52%] right-[24%] sm:right-[26%] translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer group"
          onClick={() => setActiveHotspot(activeHotspot === "conf" ? null : "conf")}
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute w-8 h-8 rounded-full bg-[#F28D52]/40 animate-ping"></span>
            <span className="relative w-4 h-4 rounded-full bg-[#F28D52] border-2 border-[#171717] shadow-lg shadow-[#F28D52]/70 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            </span>
          </div>

          {/* Interactive Tooltip Card */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-52 sm:w-60 p-3.5 rounded-2xl bg-[#1b1b1b]/95 border border-[#F28D52]/40 shadow-2xl backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none scale-90 group-hover:scale-100 z-40">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#F28D52] font-mono">
              <Users className="w-3.5 h-3.5" />
              <span>Strategy &amp; Review</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-white mt-1">Sprint Architecture Room</div>
            <div className="text-[11px] text-[#F9F7E3]/75 mt-1 leading-relaxed">
              Milestone reviews &amp; live staging links provided on Day 2 of development.
            </div>
            <div className="mt-2 text-[10px] text-[#F28D52] font-semibold flex items-center gap-1">
              ✓ Direct Lead Dev Access • No Account Managers
            </div>
          </div>
        </div>

        {/* 3. Breakout Lounge & Water Station (Sofa Area - Center-Top) */}
        <div
          className="absolute top-[38%] left-[42%] -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer group"
          onClick={() => setActiveHotspot(activeHotspot === "lounge" ? null : "lounge")}
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute w-7 h-7 rounded-full bg-cyan-400/40 animate-ping"></span>
            <span className="relative w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-[#171717] shadow-lg shadow-cyan-400/70"></span>
          </div>

          {/* Interactive Tooltip Card */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 sm:w-56 p-3.5 rounded-2xl bg-[#1b1b1b]/95 border border-cyan-500/30 shadow-2xl backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none scale-90 group-hover:scale-100 z-40">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-cyan-400 font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Support &amp; Warranty</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-white mt-1">30-Day Tech Warranty</div>
            <div className="text-[11px] text-[#F9F7E3]/75 mt-1 leading-relaxed">
              Zero bug tolerance. Direct post-launch stabilization at zero additional cost.
            </div>
          </div>
        </div>

        {/* 4. Private Phone Booth / Cabin (Top Right) */}
        <div
          className="absolute top-[24%] left-[54%] -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer group"
          onClick={() => setActiveHotspot(activeHotspot === "cabin" ? null : "cabin")}
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute w-6 h-6 rounded-full bg-amber-400/40 animate-ping"></span>
            <span className="relative w-3 h-3 rounded-full bg-amber-400 border-2 border-[#171717] shadow-lg shadow-amber-400/70"></span>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-44 p-3 rounded-2xl bg-[#1b1b1b]/95 border border-white/10 shadow-2xl backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none scale-90 group-hover:scale-100 z-40">
            <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400 font-mono">
              Private Focus Pod
            </div>
            <div className="text-xs font-bold text-white mt-0.5">Deep Architecture</div>
          </div>
        </div>

      </div>

      {/* Top 3D Studio Live Pill */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 pointer-events-none z-30">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1b1b1b]/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-[#F9F7E3]/70 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#F28D52] animate-pulse"></span>
          <span>Digitaleafs 3D Virtual Studio</span>
        </div>
      </div>
    </div>
  );
}

