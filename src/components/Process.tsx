"use client";

import { Compass, Cpu, ShieldCheck, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      icon: <Compass className="w-6 h-6 text-[#F28D52]" />,
      title: "15-Min Free Consultation",
      description:
        "We discuss your business on WhatsApp or phone call, understand what you need (website, booking, billing, app), and give you an instant transparent quote.",
      highlights: ["No pushy sales", "Clear price & timeline estimate", "Zero technical jargon"],
    },
    {
      num: "02",
      icon: <Cpu className="w-6 h-6 text-[#E94C29]" />,
      title: "Live Prototype in 48 Hours",
      description:
        "We craft a custom, modern luxury design for your brand. You get a private link to review on your phone and give instant feedback until you love it.",
      highlights: ["Mobile-first demo link", "Unlimited design revisions", "100% custom look"],
    },
    {
      num: "03",
      icon: <ShieldCheck className="w-6 h-6 text-[#F28D52]" />,
      title: "Rapid Development & Testing",
      description:
        "We code the full system using Next.js & modern tech: connecting appointment booking, POS billing, WhatsApp alerts, and payment gateways seamlessly.",
      highlights: ["Speed optimized under 1 second", "Security & UPI payment verification", "Google SEO setup"],
    },
    {
      num: "04",
      icon: <Rocket className="w-6 h-6 text-[#E94C29]" />,
      title: "Launch & WhatsApp Support",
      description:
        "We connect your domain, deploy on high-speed servers or publish to Google Play Store, and provide a 1-on-1 video tutorial so you can easily run it.",
      highlights: ["Cloud deployment & live launch", "Google My Business index", "Lifetime WhatsApp support"],
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-28 relative bg-[#F9F7E3] text-[#171717] border-t border-[#171717]/10 overflow-hidden">
      {/* Architectural grid on cream */}
      <div className="absolute inset-0 bg-cream-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#171717] tracking-tight">
            How We Turn Your Idea Into <span className="text-gradient-fire">Reality In 7 Days</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#444444]">
            A stress-free, transparent experience built for busy shopkeepers, doctors, and business founders. You focus on your customers — we handle all the tech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="luxury-card-cream rounded-2xl p-6 flex flex-col justify-between relative group bg-white shadow-md hover:border-[#E94C29]/40"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F9F7E3] border border-[#E94C29]/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-extrabold text-[#171717]/15 font-mono group-hover:text-[#E94C29]/40 transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#171717] mb-2 group-hover:text-[#E94C29] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-[#171717]/10">
                {step.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="text-[11px] text-[#171717] font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E94C29]"></span>
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
