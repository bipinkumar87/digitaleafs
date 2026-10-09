"use client";

import { ArrowRight, CheckCircle2, Cpu, Globe, Rocket, Shield, Zap } from "@/components/Icons";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background radial gradient and ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] md:w-[900px] md:h-[500px] bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Top Announcement Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md animate-float">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Next-Gen Software Development & AI Engineering</span>
            <span className="text-emerald-400/50">|</span>
            <span className="text-slate-300">Available for Q2 Projects</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl text-white leading-[1.12]">
            We Engineer <span className="text-gradient">High-Impact</span> Digital Products That Scale.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
            Digitaleafs delivers end-to-end full stack web platforms, custom cloud architectures, mobile apps, and enterprise AI integrations engineered for velocity and compounding growth.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-semibold text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#case-studies"
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card text-slate-200 font-semibold text-base hover:text-white hover:border-emerald-500/40 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>View Case Studies</span>
            </a>
          </div>

          {/* Micro trust indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full-Stack & Cloud Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Performance Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Agile 2-Week Sprints</span>
            </div>
          </div>

          {/* Interactive Visual Showcase Board */}
          <div className="mt-14 w-full max-w-5xl rounded-2xl glass-card p-2 sm:p-4 border border-emerald-500/20 shadow-2xl relative">
            <div className="rounded-xl bg-[#0b1120] border border-slate-800/80 p-5 sm:p-8 overflow-hidden text-left">
              {/* Window Controls */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-3 text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
                    digitaleafs-core-engine::v4.2.0
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  SYSTEMS HEALTHY (100%)
                </div>
              </div>

              {/* Showcase Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                    <span>Performance</span>
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">99.8%</div>
                  <div className="text-[11px] text-emerald-400 mt-1">Lighthouse Score</div>
                </div>

                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                    <span>Global CDN</span>
                    <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">&lt; 180ms</div>
                  <div className="text-[11px] text-emerald-400 mt-1">Worldwide Latency</div>
                </div>

                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                    <span>AI Automation</span>
                    <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">14.2x</div>
                  <div className="text-[11px] text-emerald-400 mt-1">Throughput Boost</div>
                </div>

                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                    <span>Security Rating</span>
                    <Shield className="w-3.5 h-3.5 text-teal-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">Grade A+</div>
                  <div className="text-[11px] text-emerald-400 mt-1">Zero-Vulnerability</div>
                </div>
              </div>

              {/* Terminal Snippet */}
              <div className="bg-slate-950 rounded-lg p-4 font-mono text-xs text-slate-300 border border-slate-900 flex flex-col gap-2">
                <div className="text-slate-500">// Deploying Next.js 16 + Edge Cloud architecture</div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <span>✔</span>
                  <span>[Architecture]: Microservices & Serverless Edge APIs optimized</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400">
                  <span>✔</span>
                  <span>[Database]: Multi-region distributed DB synchronized in 12ms</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">➜</span>
                  <span>Target result: 340% increase in checkout conversions achieved for client.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
