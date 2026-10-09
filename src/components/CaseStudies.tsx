"use client";

import { useState } from "react";
import { Award, Clock } from "@/components/Icons";

export default function CaseStudies() {
  const [filter, setFilter] = useState("all");

  const caseStudies = [
    {
      id: "fintech",
      tag: "FinTech & Banking",
      category: "fintech",
      client: "NovaPay Global",
      title: "Zero-Latency Financial Settlement & Payment Gateway",
      description:
        "Engineered an enterprise Next.js and microservice payments dashboard capable of processing 25,000 transactions per second with institutional-grade security.",
      metrics: [
        { label: "Checkout Speed", value: "+340%" },
        { label: "Peak TPS", value: "25k / sec" },
        { label: "Uptime Record", value: "99.999%" },
      ],
      stack: ["Next.js", "TypeScript", "Kafka", "PostgreSQL", "AWS KMS"],
      gradient: "from-emerald-500/20 to-teal-500/10",
      accent: "text-emerald-400",
    },
    {
      id: "ai",
      tag: "Healthcare & AI",
      category: "ai",
      client: "HealthPulse Diagnostics",
      title: "HIPAA-Compliant Diagnostic Assistant & Automated Clinical Workflow",
      description:
        "Built a specialized HIPAA-certified AI diagnostic copilot that synthesizes patient histories and generates automated summaries, eliminating clinical burnout.",
      metrics: [
        { label: "Admin Time Saved", value: "18 hrs/wk" },
        { label: "Diagnostic Accuracy", value: "99.4%" },
        { label: "HIPAA Audited", value: "100% Passed" },
      ],
      stack: ["React", "FastAPI", "OpenAI / RAG", "ChromaDB", "Azure Health"],
      gradient: "from-cyan-500/20 to-blue-500/10",
      accent: "text-cyan-400",
    },
    {
      id: "enterprise",
      tag: "GreenTech & IoT",
      category: "enterprise",
      client: "EcoStream Fleet Logistics",
      title: "Autonomous Fleet Routing & Carbon Offset Telemetry Platform",
      description:
        "Modern real-time telematics dashboard processing live GPS sensors across 4,200 commercial EV freight vehicles with dynamic route rebalancing.",
      metrics: [
        { label: "Fuel/Power Saved", value: "$2.4M / yr" },
        { label: "Carbon Reduction", value: "-32%" },
        { label: "Live Active Telemetry", value: "4,200 trucks" },
      ],
      stack: ["Next.js", "Go", "WebSockets", "TimescaleDB", "GCP Edge"],
      gradient: "from-teal-500/20 to-emerald-500/10",
      accent: "text-teal-400",
    },
    {
      id: "saas",
      tag: "SaaS & E-Commerce",
      category: "saas",
      client: "Veloce Commerce Platform",
      title: "Headless High-Converting Commerce Architecture",
      description:
        "Architected an ultra-fast headless storefront with instantaneous edge caching, resulting in an unprecedented boost in cart completion and mobile engagement.",
      metrics: [
        { label: "Mobile Conversion", value: "+4.2x" },
        { label: "Core Web Vitals", value: "100 Score" },
        { label: "Global Edge Latency", value: "28ms" },
      ],
      stack: ["Next.js 16", "Tailwind CSS", "Shopify API", "Cloudflare Workers"],
      gradient: "from-amber-500/20 to-emerald-500/10",
      accent: "text-amber-400",
    },
  ];

  const filtered =
    filter === "all"
      ? caseStudies
      : caseStudies.filter((item) => item.category === filter);

  return (
    <section id="case-studies" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Proven Business Impact</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Case Studies & <span className="text-gradient">Featured Work</span>
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-xl">
              Real metrics, quantifiable revenue jumps, and rock-solid systems delivered for high-growth tech innovators.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Works" },
              { id: "fintech", label: "FinTech" },
              { id: "ai", label: "AI & Health" },
              { id: "enterprise", label: "IoT & Cloud" },
              { id: "saas", label: "SaaS & Web" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  filter === btn.id
                    ? "bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/25"
                    : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies 2x2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filtered.map((study) => (
            <div
              key={study.id}
              className={`glass-card rounded-2xl p-8 flex flex-col justify-between border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 relative group overflow-hidden bg-gradient-to-br ${study.gradient}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300">
                    {study.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    Delivered in 6 weeks
                  </span>
                </div>

                <div className="text-xs font-medium text-emerald-400 tracking-wider uppercase mb-1">
                  {study.client}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-200">
                  {study.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {study.description}
                </p>

                {/* Metrics Highlight Banner */}
                <div className="grid grid-cols-3 gap-3 my-6 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  {study.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className={`text-xl sm:text-2xl font-extrabold ${study.accent}`}>
                        {m.value}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {study.stack.map((item, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono text-slate-300 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
