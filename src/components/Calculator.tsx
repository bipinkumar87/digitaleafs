"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "@/components/Icons";

export default function Calculator() {
  const [businessType, setBusinessType] = useState<string>("clinic");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "website",
    "mobile_responsive",
    "whatsapp_chat",
  ]);

  const businessOptions = [
    { id: "clinic", label: "🏥 Clinic / Doctor", basePrice: 7999, baseDays: 5 },
    { id: "retail", label: "🛍️ Retail / Supermarket", basePrice: 8999, baseDays: 6 },
    { id: "coaching", label: "📚 Coaching / School", basePrice: 9499, baseDays: 7 },
    { id: "local", label: "🏢 Local Shop / Restaurant", basePrice: 5999, baseDays: 4 },
    { id: "custom", label: "⚡ Custom App / Startup", basePrice: 14999, baseDays: 10 },
  ];

  const featureOptions = [
    { id: "website", label: "Modern Luxury Responsive Website", price: 0, days: 0, required: true },
    { id: "mobile_responsive", label: "100% Mobile & Tablet Optimization", price: 0, days: 0, required: true },
    { id: "whatsapp_chat", label: "Direct WhatsApp Click-to-Chat Button", price: 0, days: 0, required: true },
    { id: "booking_sys", label: "Online Appointment / Booking Engine", price: 3500, days: 2 },
    { id: "pos_billing", label: "POS Billing & Barcode Scanning Module", price: 4500, days: 3 },
    { id: "mobile_app", label: "Dedicated Android App on Google Play Store", price: 12000, days: 6 },
    { id: "payment_upi", label: "UPI & Online Payment Gateway Integration", price: 2500, days: 1 },
    { id: "sms_whatsapp_auto", label: "Automated WhatsApp Alerts & Reminders", price: 3000, days: 2 },
    { id: "seo_gmb", label: "Google My Business & Local SEO Optimization", price: 2999, days: 2 },
    { id: "admin_dash", label: "Custom Admin Dashboard with Reports", price: 4000, days: 3 },
  ];

  const toggleFeature = (id: string, required?: boolean) => {
    if (required) return;
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const currentBusiness = businessOptions.find((b) => b.id === businessType) || businessOptions[0];

  const calculatedPrice =
    currentBusiness.basePrice +
    selectedFeatures.reduce((acc, fId) => {
      const feat = featureOptions.find((f) => f.id === fId);
      return acc + (feat ? feat.price : 0);
    }, 0);

  const calculatedDays =
    currentBusiness.baseDays +
    selectedFeatures.reduce((acc, fId) => {
      const feat = featureOptions.find((f) => f.id === fId);
      return acc + (feat ? feat.days : 0);
    }, 0);

  const whatsappMessage = `Hi Digitaleafs! I used your Project Calculator:\n- Business: ${currentBusiness.label}\n- Estimated Budget: ₹${calculatedPrice.toLocaleString("en-IN")}\n- Estimated Delivery: ~${calculatedDays} days\n- Features: ${selectedFeatures.map((f) => featureOptions.find((fo) => fo.id === f)?.label).filter(Boolean).join(", ")}\n\nPlease share the detailed proposal!`;

  return (
    <section id="calculator" className="py-24 relative bg-[#171717] border-t border-[#F9F7E3]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F9F7E3] tracking-tight">
            Calculate Your <span className="text-gradient-orange">Project Cost &amp; Timeline</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F9F7E3]/75">
            Select your industry and the exact features you need. Get a transparent, instant estimate with zero surprise costs.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Selections */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Business Type */}
            <div className="luxury-card rounded-2xl p-6 sm:p-7 border border-white/5 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#F28D52]">
                <span className="w-5 h-5 rounded-full bg-[#F28D52]/20 text-[#F28D52] flex items-center justify-center font-bold">1</span>
                <span>Select Your Business Type</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {businessOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setBusinessType(opt.id)}
                    className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
                      businessType === opt.id
                        ? "bg-gradient-to-r from-[#F28D52]/20 to-[#E94C29]/20 border-[#F28D52] text-white shadow-md"
                        : "bg-[#171717] border-white/5 text-[#F9F7E3]/70 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{opt.label}</span>
                      {businessType === opt.id && (
                        <CheckCircle2 className="w-4 h-4 text-[#F28D52]" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Features */}
            <div className="luxury-card rounded-2xl p-6 sm:p-7 border border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#F28D52]">
                  <span className="w-5 h-5 rounded-full bg-[#F28D52]/20 text-[#F28D52] flex items-center justify-center font-bold">2</span>
                  <span>Select Features &amp; Modules Needed</span>
                </div>
                <span className="text-[11px] text-[#F9F7E3]/50 font-mono">Tap to toggle</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {featureOptions.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id, feat.required)}
                      className={`p-3.5 rounded-xl border text-xs transition-all cursor-pointer select-none flex items-start justify-between gap-3 ${
                        isChecked
                          ? "bg-[#1f1f1f] border-[#F28D52]/60 text-white"
                          : "bg-[#171717]/60 border-white/5 text-[#F9F7E3]/60 hover:border-white/15"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="font-semibold text-[#F9F7E3]">{feat.label}</div>
                        <div className="text-[10px] text-[#F28D52] font-mono">
                          {feat.price === 0 ? "Included Free" : `+ ₹${feat.price.toLocaleString("en-IN")}`}
                        </div>
                      </div>

                      <div
                        className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                          isChecked
                            ? "bg-[#E94C29] border-[#E94C29] text-white"
                            : "border-white/20 bg-transparent"
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Estimate Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl bg-gradient-to-b from-[#1f1f1f] via-[#171717] to-[#121212] p-7 sm:p-8 border-2 border-[#F28D52]/40 shadow-2xl relative space-y-6">
              
              {/* Top Tag */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-[#F28D52]">
                  Live Calculation
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Instant Quote
                </span>
              </div>

              {/* Price Display */}
              <div>
                <div className="text-xs text-[#F9F7E3]/60 mb-1">Estimated Investment (INR)</div>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight flex items-baseline gap-2">
                  <span className="text-[#F28D52]">₹</span>
                  <span>{calculatedPrice.toLocaleString("en-IN")}</span>
                  <span className="text-xs text-[#F9F7E3]/60 font-normal font-sans">
                    (~${Math.round(calculatedPrice / 86)})
                  </span>
                </div>
                <p className="text-[11px] text-[#F9F7E3]/60 mt-1">
                  * All-inclusive: Complete custom design, coding &amp; mobile responsive deployment.
                </p>
              </div>

              {/* Delivery Days */}
              <div className="p-4 rounded-xl bg-[#171717] border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#F9F7E3]/60">Estimated Delivery Time</div>
                  <div className="text-xl font-bold text-[#F9F7E3]">{calculatedDays} - {calculatedDays + 3} Days</div>
                </div>
                <span className="text-3xl">⏱️</span>
              </div>

              {/* Summary List */}
              <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-[#F9F7E3]/80">
                <div className="text-xs font-bold text-white mb-2">Included with every project:</div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Free SSL Certificate &amp; Mobile Responsive Layout</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>1-on-1 Admin Training &amp; 30 Days Post-Launch Support</span>
                </div>
              </div>

              {/* Direct WhatsApp Call to Action */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/919934399990?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-full btn-primary-gradient font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-[#E94C29]/20"
                >
                  <span>Inquire This Setup on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="text-center text-[11px] text-[#F9F7E3]/50 mt-2 font-mono">
                  Direct reply within 15 minutes guaranteed.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
