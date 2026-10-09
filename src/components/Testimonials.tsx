"use client";

import { Star, Quote, CheckCircle2 } from "@/components/Icons";

export default function Testimonials() {
  const reviews = [
    {
      name: "Marcus Vance",
      role: "CTO, NovaPay Global",
      quote:
        "Digitaleafs rebuilt our entire payment processing architecture in Next.js within 6 weeks. We saw an immediate 340% drop in page load latency and zero downtime during Black Friday.",
      rating: 5,
      avatar: "MV",
      avatarBg: "from-emerald-500 to-teal-500",
      companyMetric: "25k TPS handeled seamlessly",
    },
    {
      name: "Dr. Elena Rostova",
      role: "Head of Product, HealthPulse AI",
      quote:
        "Their team delivered a fully HIPAA-compliant AI triage assistant that saved our physicians over 18 hours per week of manual documentation. The code quality and security standards are immaculate.",
      rating: 5,
      avatar: "ER",
      avatarBg: "from-cyan-500 to-blue-500",
      companyMetric: "100% HIPAA Audit Pass",
    },
    {
      name: "Julian Thorne",
      role: "Founder & CEO, Veloce Commerce",
      quote:
        "Finding an agency that truly understands modern web engineering, Tailwind design systems, and conversion psychology is rare. Digitaleafs is hands down the best technical partner we've had.",
      rating: 5,
      avatar: "JT",
      avatarBg: "from-teal-500 to-emerald-400",
      companyMetric: "4.2x Conversion Increase",
    },
  ];

  const partners = [
    { name: "NovaPay", tag: "FINTECH" },
    { name: "HealthPulse", tag: "AI DIAGNOSTICS" },
    { name: "EcoStream", tag: "IOT LOGISTICS" },
    { name: "Veloce", tag: "E-COMMERCE" },
    { name: "QuantEdge", tag: "DATA ANALYTICS" },
  ];

  return (
    <section id="testimonials" className="py-24 relative bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partner Ticker / Logos */}
        <div className="mb-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
            Trusted by founders, CTOs & technology innovators worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70">
            {partners.map((partner, pIdx) => (
              <div
                key={pIdx}
                className="flex items-center gap-2 text-slate-300 font-mono tracking-wider font-bold text-sm sm:text-base hover:text-emerald-400 transition-colors"
              >
                <span>{partner.name}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                  {partner.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Client <span className="text-gradient">Endorsements</span>
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Hear directly from the engineering leaders and executives we collaborate with.
          </p>
        </div>

        {/* Testimonials 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between relative group hover:border-emerald-500/40"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, r) => (
                      <Star key={r} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700 group-hover:text-emerald-500/40 transition-colors" />
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-5 border-t border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-tr ${rev.avatarBg} flex items-center justify-center font-bold text-slate-950 text-sm`}
                  >
                    {rev.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                    <p className="text-xs text-slate-400">{rev.role}</p>
                  </div>
                </div>

                <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{rev.companyMetric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
