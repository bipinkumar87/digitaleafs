"use client";

import { Compass, Cpu, ShieldCheck, Rocket } from "@/components/Icons";

export default function Process() {
  const steps = [
    {
      num: "01",
      icon: <Compass className="w-6 h-6 text-emerald-400" />,
      title: "Discovery & Architectural Blueprint",
      description:
        "We dissect your business goals, target audience, and bottlenecks to craft a clear technical roadmap, UX wireframes, and scalable cloud topology.",
      highlights: ["Technical feasibility audit", "Product requirements document", "Interactive Figma prototype"],
    },
    {
      num: "02",
      icon: <Cpu className="w-6 h-6 text-teal-400" />,
      title: "Agile Engineering Sprints",
      description:
        "High-velocity development using Next.js 16, TypeScript, and clean code principles. You get staging links and weekly demos so there are no surprises.",
      highlights: ["2-week sprint cycles", "Live staging environments", "Async daily progress updates"],
    },
    {
      num: "03",
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
      title: "Rigorous QA & Security Hardening",
      description:
        "End-to-end automated testing, Core Web Vitals speed optimization, and vulnerability scans before a single line goes live in production.",
      highlights: ["Lighthouse 95+ score target", "Automated Playwright/Jest tests", "OWASP security verification"],
    },
    {
      num: "04",
      icon: <Rocket className="w-6 h-6 text-lime-400" />,
      title: "Zero-Downtime Launch & Scale",
      description:
        "Seamless production release with automated CI/CD pipelines, global CDN edge caching, 24/7 error telemetry, and ongoing feature expansion.",
      highlights: ["Zero-downtime deployment", "Real-time error monitoring", "Dedicated SLA post-launch support"],
    },
  ];

  return (
    <section id="process" className="py-24 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Our Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            From Concept To Market In <span className="text-gradient">6 Weeks</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A transparent, collaborative engineering process designed to eliminate friction, prevent scope creep, and deliver high ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between relative group hover:border-emerald-500/40"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:border-emerald-500/40 transition-all duration-300">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-extrabold text-slate-700/60 font-mono group-hover:text-emerald-500/40 transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-800/80">
                {step.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
