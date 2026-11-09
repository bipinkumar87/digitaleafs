"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Solutions() {
  const [activeTab, setActiveTab] = useState<"clinics" | "retail" | "coaching" | "local" | "custom">("clinics");

  const solutions = {
    clinics: {
      badge: "Healthcare & Medicine",
      title: "Clinic & Hospital Management Software & Websites",
      headline: "Digitize Your Practice, Stop Missed Appointments & Grow Patient Trust",
      description:
        "Designed specifically for independent clinics, doctors, dentists, polyclinics, and diagnostic labs. Patients can book slots online 24/7, receive instant WhatsApp confirmations, and view doctor consultation timings.",
      features: [
        "Online Doctor Appointment Booking Engine (calendar & slot picker)",
        "Automated WhatsApp & SMS appointment reminders to reduce no-shows",
        "Digital Patient EMR & Prescription records storage",
        "Doctor profile, services, fees, and patient reviews showcase",
        "Google Maps SEO to rank #1 when patients search 'best doctor near me'",
        "Staff & OPD Queue management dashboard",
      ],
      previewStats: [
        { label: "Patient Booking Jump", value: "+340%" },
        { label: "No-Show Drop", value: "-78%" },
        { label: "Setup Time", value: "7 Days" },
      ],
      whatsappMsg: "Hi Digitaleafs! I need a Website / Software for my Clinic / Doctor practice.",
      accentGradient: "from-[#F28D52] to-[#E94C29]",
    },
    retail: {
      badge: "Stores & Commerce",
      title: "Retail Shop POS Billing, Inventory & WhatsApp Catalogue",
      headline: "Turn Your Physical Shop Into a Modern High-Speed Retail Powerhouse",
      description:
        "For supermarkets, clothing stores, electronics shops, hardware stores, and local retail outlets. Speed up counter billing, track warehouse stock in real-time, and let customers order directly over WhatsApp.",
      features: [
        "10-Second Quick POS Billing (Barcode scanner & thermal receipt printer)",
        "Digital Product Catalogue with online ordering via WhatsApp",
        "Real-Time Inventory & Low-Stock alert notifications",
        "Customer Digital Khata (Udhaar / credit ledger with SMS payment links)",
        "Dynamic UPI QR code on every bill for 1-second cashless payments",
        "Daily profit/loss, GST tax report, and top-selling product analytics",
      ],
      previewStats: [
        { label: "Counter Checkout Speed", value: "< 10s" },
        { label: "Online Sales Boost", value: "+45%" },
        { label: "Stock Accuracy", value: "99.9%" },
      ],
      whatsappMsg: "Hi Digitaleafs! I need a POS Billing Software / Web Store for my Retail Shop.",
      accentGradient: "from-[#E94C29] to-[#A94322]",
    },
    coaching: {
      badge: "Education & EdTech",
      title: "Coaching Center, Institute & School Portals",
      headline: "Automate Student Admissions, Fees, Exams & Online Batches",
      description:
        "Tailored for competitive coaching institutes (IIT/NEET, UPSC, SSC), tuition centers, computer institutes, and music/dance academies. Modernize student learning with mobile apps and test engines.",
      features: [
        "Student Admission & Batch scheduling system",
        "Online Test Series & Practice Quiz engine with instant ranking & scorecard",
        "Digital Fee Collection with automatic WhatsApp receipts & payment reminders",
        "Student & Parent mobile app for attendance and homework notifications",
        "Encrypted Video Lectures & PDF study notes download portal",
        "Teacher attendance, salary, and student performance tracking",
      ],
      previewStats: [
        { label: "Fee Collection Efficiency", value: "+95%" },
        { label: "Student Retention", value: "+60%" },
        { label: "Launch Speed", value: "10 Days" },
      ],
      whatsappMsg: "Hi Digitaleafs! I need a Website / Student Portal / App for my Coaching Institute.",
      accentGradient: "from-[#F28D52] to-[#A94322]",
    },
    local: {
      badge: "Local Business Growth",
      title: "Websites & Software for Small Businesses & Services",
      headline: "Give Your Business The Modern Digital Look It Truly Deserves",
      description:
        "For restaurants & cafés (digital QR menu), gyms & spas (membership check-in), salons, real estate brokers, CA & legal firms, and service agencies. Attract high-paying clients on Google.",
      features: [
        "Modern luxury mobile-first website that blows competitors away",
        "Contactless Digital QR Menu with table ordering for restaurants & cafés",
        "Membership management, renewal alerts & QR passes for gyms",
        "Google My Business Profile optimization to dominate local search",
        "Lead capture inquiry funnels connected straight to your WhatsApp & phone",
        "Fast hosting with 99.9% uptime, free SSL security, and business email",
      ],
      previewStats: [
        { label: "Google Leads Growth", value: "4.5x" },
        { label: "Customer Inquiries", value: "+280%" },
        { label: "Mobile Speed", value: "100/100" },
      ],
      whatsappMsg: "Hi Digitaleafs! I want a custom Website / Digital Software for my Local Business.",
      accentGradient: "from-[#F28D52] to-[#E94C29]",
    },
    custom: {
      badge: "Bespoke Engineering",
      title: "Custom Android / iOS Mobile Apps & Cloud Software",
      headline: "Any App, Any Idea, Any Complexity — Built to Absolute Perfection",
      description:
        "Have a unique app idea or complex internal workflow? We build custom mobile apps published to Google Play Store & Apple App Store, custom SaaS platforms, and enterprise business automation.",
      features: [
        "Native & Cross-Platform Android & iOS mobile applications (Flutter / React Native)",
        "Admin control dashboard with multi-level role access & live data tables",
        "Seamless payment gateway integration (Razorpay, Stripe, UPI, Cards)",
        "Push notifications, location tracking, and real-time live chat",
        "API integration with third-party systems and cloud databases",
        "Full source code ownership, intellectual property rights & NDA guarantee",
      ],
      previewStats: [
        { label: "Native 60 FPS", value: "Smooth" },
        { label: "Stores Published", value: "Play + iOS" },
        { label: "Scalability", value: "1M+ Users" },
      ],
      whatsappMsg: "Hi Digitaleafs! I have an App / Custom Software idea and need a full proposal.",
      accentGradient: "from-[#E94C29] to-[#A94322]",
    },
  };

  const current = solutions[activeTab];

  return (
    <section id="solutions" className="py-20 lg:py-28 relative bg-[#F9F7E3] text-[#171717] border-t border-[#171717]/10 overflow-hidden">
      {/* Subtle architectural grid pattern on cream */}
      <div className="absolute inset-0 bg-cream-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#171717] tracking-tight">
            Specialized Software For <span className="text-gradient-fire">Your Exact Business</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#444444]">
            We don&apos;t just write code — we understand your daily operational bottlenecks and build software that actively makes you more money.
          </p>
        </div>

        {/* Interactive Industry Tab Switcher (Wide Single-Line Pill Bar) */}
        <div className="flex justify-center mb-12 lg:mb-16">
          <div className="inline-flex flex-wrap lg:flex-nowrap justify-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-white border border-[#171717]/10 shadow-sm max-w-5xl w-auto">
            {[
              { id: "clinics", label: "🏥 Clinics & Doctors" },
              { id: "retail", label: "🛍️ Retail & Supermarkets" },
              { id: "coaching", label: "📚 Coaching & Institutes" },
              { id: "local", label: "🏢 Local Businesses" },
              { id: "custom", label: "⚡ Custom Mobile & Web Apps" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#F28D52] via-[#E94C29] to-[#A94322] text-white shadow-lg shadow-[#E94C29]/30 scale-[1.02]"
                    : "text-[#444444] hover:text-[#171717] hover:bg-[#171717]/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Industry Feature Showcase Box */}
        <div className="luxury-card-cream rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#171717]/10 relative overflow-hidden bg-white shadow-xl">
          <div className="max-w-5xl mx-auto space-y-8">
            
            {/* Header info */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#E94C29]/10 text-[#E94C29] border border-[#E94C29]/20">
                <span>{current.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-[#171717] leading-tight">
                {current.title}
              </h3>

              <p className="text-base sm:text-lg text-[#E94C29] font-bold">
                &ldquo;{current.headline}&rdquo;
              </p>

              <p className="text-sm sm:text-base text-[#444444] leading-relaxed max-w-4xl">
                {current.description}
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {current.previewStats.map((stat, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-[#F9F7E3]/60 p-4 rounded-2xl border border-[#171717]/8 text-left flex items-center justify-between sm:block"
                >
                  <div className="text-2xl sm:text-3xl font-black text-[#171717]">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[#444444] font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Checklist (Spread across clean columns) */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#171717]/60">
                Core Industry Capabilities Included:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {current.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-[#171717] bg-[#F9F7E3]/80 p-3.5 rounded-2xl border border-[#171717]/8 font-medium shadow-sm hover:border-[#E94C29]/30 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#E94C29] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 border-t border-[#171717]/8">
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent("open-consultation", {
                      detail: { topic: `${current.title} Solution` },
                    })
                  );
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-full btn-primary-gradient font-bold text-sm flex items-center justify-center gap-2.5 shadow-xl hover:shadow-orange-500/20 transition-all cursor-pointer"
              >
                <span>Build This For My Business</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-4 rounded-full btn-secondary-dark font-semibold text-sm flex items-center justify-center gap-2"
              >
                <span>Request Custom Consultation</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
