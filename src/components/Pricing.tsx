"use client";

import { useState } from "react";
import { Check, Sparkles } from "@/components/Icons";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"project" | "retainer">("retainer");

  const plans = [
    {
      name: "MVP Sprint",
      badge: "Fast Launch",
      description: "Ideal for early-stage founders needing a polished, production-ready product in record time.",
      price: billingCycle === "retainer" ? "$3,499" : "$4,200",
      period: billingCycle === "retainer" ? "/ month" : "flat fee",
      popular: false,
      features: [
        "Full-stack Next.js web application",
        "Modern responsive UI/UX system",
        "Authentication & Database setup",
        "Basic AI/LLM API integration",
        "Staging & Production deployment",
        "2 weeks post-launch warranty",
      ],
      ctaText: "Start MVP Sprint",
    },
    {
      name: "Growth Squad",
      badge: "Most Popular",
      description: "Dedicated high-performance engineering team embedded directly into your product roadmap.",
      price: billingCycle === "retainer" ? "$6,800" : "$7,900",
      period: billingCycle === "retainer" ? "/ month" : "per milestone",
      popular: true,
      features: [
        "Everything in MVP Sprint",
        "Dedicated Senior Lead & Full-Stack devs",
        "Custom AI agents & RAG workflows",
        "Automated CI/CD & cloud scaling",
        "Bi-weekly sprint demos & Slack channel",
        "Guaranteed 4-hour SLA response",
        "Continuous performance & SEO optimization",
      ],
      ctaText: "Hire Growth Squad",
    },
    {
      name: "Enterprise Custom",
      badge: "High Scale",
      description: "Custom architecture, regulatory compliance, and multi-team augmentation for established organizations.",
      price: "Custom",
      period: "based on scope",
      popular: false,
      features: [
        "Full-cycle enterprise software overhaul",
        "HIPAA / SOC2 / GDPR compliance audits",
        "Microservices & event-driven systems",
        "Custom fine-tuned AI models",
        "24/7 dedicated engineering support",
        "Formal SLA contract & security NDA",
      ],
      ctaText: "Talk to Solutions Architect",
    },
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simple, Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Predictable Investment. <span className="text-gradient">Compounding Value.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            No hidden fees, no junior hand-offs. Choose an engagement model tailored to your velocity.
          </p>

          {/* Billing Switcher */}
          <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setBillingCycle("retainer")}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                billingCycle === "retainer"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly Retainer (Cancel Anytime)
            </button>
            <button
              onClick={() => setBillingCycle("project")}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                billingCycle === "project"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Fixed Project Scope
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                plan.popular
                  ? "glass-card border-2 border-emerald-500 shadow-2xl shadow-emerald-500/15 scale-105 z-10 bg-slate-900/90"
                  : "glass-card border border-slate-800 bg-slate-900/60 hover:border-emerald-500/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/30">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  {!plan.popular && (
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed min-h-[40px]">
                  {plan.description}
                </p>

                <div className="mt-6 mb-8 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-white tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {plan.period}
                  </span>
                </div>

                <div className="space-y-3 pt-6 border-t border-slate-800">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Included Capabilities
                  </div>
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <a
                  href="#contact"
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02]"
                      : "bg-slate-800 text-white hover:bg-slate-700"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
