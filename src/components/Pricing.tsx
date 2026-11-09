"use client";

import { useState } from "react";
import { Check, ArrowRight, Sparkles } from "@/components/Icons";

export default function Pricing() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  const plans = [
    {
      name: "Starter Business Web",
      badge: "Quick Launch",
      description: "Custom branded web presence tailored for local shops, clinics, restaurants, and service providers.",
      price: currency === "INR" ? "₹9,999*" : "$149*",
      period: "starting estimate",
      popular: false,
      features: [
        "Modern luxury responsive 5-page website",
        "100% Mobile & tablet optimized architecture",
        "Direct WhatsApp click-to-chat integration",
        "Google Maps setup & local SEO keywords",
        "Fast contact inquiry form sent to your email",
        "Free SSL security & high-speed cloud deployment",
        "Delivered in 5-7 working days",
      ],
      ctaText: "Get Starter Proposal",
      whatsappMsg: "Hi Digitaleafs! I'm interested in the Starter Business Web package (Starting from ₹9,999). Let's discuss my requirements.",
    },
    {
      name: "Growth & Industry Suite",
      badge: "Most Popular",
      description: "Custom software & portals for clinics, coaching centers, and retail stores needing automated bookings or digital catalogues.",
      price: currency === "INR" ? "₹24,999*" : "$349*",
      period: "starting estimate",
      popular: true,
      features: [
        "Everything included in Starter Web",
        "Doctor appointment booking OR Student portal OR Product catalogue",
        "Automated WhatsApp & SMS confirmations to customers",
        "Custom Admin control panel (manage slots, fees, or products)",
        "UPI, QR code & online payment gateway integration",
        "Top Google Maps local ranking optimization",
        "30 days dedicated post-launch developer support",
      ],
      ctaText: "Get Growth Proposal",
      whatsappMsg: "Hi Digitaleafs! I want to discuss the Growth & Industry Suite package (Starting from ₹24,999).",
    },
    {
      name: "Custom Mobile App & Enterprise",
      badge: "Full Scale & Apps",
      description: "For high-volume retail stores, supermarkets, academies, and businesses needing dedicated Google Play Store mobile apps.",
      price: "Custom Proposal",
      period: "tailored milestone investment",
      popular: false,
      features: [
        "Dedicated Android Mobile App published on Google Play Store",
        "High-speed POS billing software with barcode scanning",
        "Real-time inventory tracking & low stock alerts",
        "Customer digital Khata (Udhaar ledger with payment links)",
        "Unlimited products, patient records & student accounts",
        "1-on-1 staff training session & priority WhatsApp support",
        "Full source code ownership & architecture consultation",
      ],
      ctaText: "Request Custom Quote",
      whatsappMsg: "Hi Digitaleafs! I need a Custom Proposal for an Android Mobile App / POS Billing / Custom Software.",
    },
  ];

  return (
    <section id="pricing" className="py-24 relative bg-[#171717] border-t border-[#F9F7E3]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#F28D52]/10 border border-[#F28D52]/30 text-[#F28D52] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Scope-Based Transparent Investment</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F9F7E3] tracking-tight">
            Transparent Pricing. <span className="text-gradient-orange">Tailored Value.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F9F7E3]/75">
            Every business has unique requirements. We provide flexible milestone-based packages so you only pay for what you actually need.
          </p>

          {/* Currency Switcher */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-[#1f1f1f] border border-[#F9F7E3]/10">
            <button
              onClick={() => setCurrency("INR")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                currency === "INR"
                  ? "bg-gradient-to-r from-[#F28D52] to-[#E94C29] text-white shadow"
                  : "text-[#F9F7E3]/60 hover:text-white"
              }`}
            >
              Indian Rupee (₹ INR)
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                currency === "USD"
                  ? "bg-gradient-to-r from-[#F28D52] to-[#E94C29] text-white shadow"
                  : "text-[#F9F7E3]/60 hover:text-white"
              }`}
            >
              US Dollar ($ USD)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                plan.popular
                  ? "luxury-card border-2 border-[#F28D52] shadow-2xl shadow-[#E94C29]/15 scale-105 z-10 bg-[#1f1f1f]"
                  : "luxury-card border border-[#F9F7E3]/10 bg-[#171717]/80 hover:border-[#F28D52]/40"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#F28D52] to-[#E94C29] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#E94C29]/30">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  {!plan.popular && (
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#171717] text-[#F9F7E3]/70 border border-white/5">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-[#F9F7E3]/70 leading-relaxed min-h-[40px]">
                  {plan.description}
                </p>

                <div className="mt-6 mb-8">
                  <div className="text-xs text-[#F28D52] font-semibold uppercase tracking-wider mb-1">
                    {plan.price.includes("Custom") ? "Investment" : "Starting From"}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#F9F7E3]/50 font-medium">
                    {plan.period}
                  </span>
                </div>

                <div className="space-y-3 pt-6 border-t border-[#F9F7E3]/10">
                  <div className="text-xs font-semibold text-[#F28D52] uppercase tracking-wider font-mono">
                    What&apos;s Included
                  </div>
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F9F7E3]/90">
                      <div className="w-4 h-4 rounded-full bg-[#F28D52]/20 text-[#F28D52] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#F9F7E3]/10">
                <a
                  href={`https://wa.me/919934399990?text=${encodeURIComponent(plan.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${
                    plan.popular
                      ? "btn-primary-gradient text-white shadow-[#E94C29]/30"
                      : "btn-secondary-cream"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer / Custom Note */}
        <div className="mt-14 max-w-3xl mx-auto text-center p-4 rounded-2xl bg-[#1f1f1f]/50 border border-white/5">
          <p className="text-xs text-[#F9F7E3]/65 leading-relaxed">
            * <span className="font-semibold text-white">Starting estimates:</span> Final project investment depends on your specific feature set, database complexity, and integrations. We provide an exact, fixed-scope quote after a quick 15-minute consultation with zero hidden fees.
          </p>
        </div>

      </div>
    </section>
  );
}
