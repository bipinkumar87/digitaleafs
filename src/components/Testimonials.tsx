"use client";

import { Star, Quote, CheckCircle2 } from "@/components/Icons";

export default function Testimonials() {
  const reviews = [
    {
      name: "Dr. Rajiv Sen",
      role: "Founder, Sen Dental Care & Polyclinic",
      quote:
        "Digitaleafs built our clinic appointment website and connected automated WhatsApp visit reminders. Our waiting room chaos vanished, and new patient bookings increased by over 300% in the very first month!",
      rating: 5,
      avatar: "RS",
      avatarBg: "from-[#F28D52] to-[#E94C29]",
      metric: "380% More Patient Bookings",
    },
    {
      name: "Suresh Agarwal",
      role: "Owner, Agarwal Departmental & Grocery Store",
      quote:
        "The POS billing and WhatsApp grocery catalog software they created is unbelievable. Counter billing takes just 8 seconds per customer now, and local residents order their weekly groceries directly over WhatsApp.",
      rating: 5,
      avatar: "SA",
      avatarBg: "from-[#E94C29] to-[#A94322]",
      metric: "8-Second Fast Counter Billing",
    },
    {
      name: "Amit Verma",
      role: "Director, Apex Coaching Academy",
      quote:
        "Our students love the online test series engine and mobile app. Fee collection used to take endless phone calls, but now parents pay online via UPI and receive instant automated digital receipts.",
      rating: 5,
      avatar: "AV",
      avatarBg: "from-[#F28D52] to-[#A94322]",
      metric: "98% Online Fee Collection",
    },
  ];

  const highlights = [
    { title: "60+ Local Businesses", sub: "Successfully digitized" },
    { title: "5.0 ★ Google Rating", sub: "100% happy clients" },
    { title: "7-14 Days Launch", sub: "Fastest delivery guarantee" },
    { title: "Zero Tech Skills Needed", sub: "We handle everything" },
  ];

  return (
    <section id="testimonials" className="py-24 relative bg-[#F9F7E3] text-[#171717] border-t border-[#171717]/10 overflow-hidden">
      {/* Architectural grid on cream */}
      <div className="absolute inset-0 bg-cream-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Metric Badges Banner */}
        <div className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((h, idx) => (
            <div
              key={idx}
              className="luxury-card-cream p-5 rounded-2xl border border-[#171717]/10 text-center bg-white shadow-sm"
            >
              <div className="text-xl sm:text-2xl font-black text-[#171717]">
                {h.title}
              </div>
              <div className="text-xs text-[#E94C29] font-bold mt-1">
                {h.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#171717] tracking-tight">
            Loved By <span className="text-gradient-fire">Local Business Owners</span>
          </h2>
          <p className="mt-3 text-base text-[#444444]">
            Hear directly from doctors, retailers, and coaching founders whose businesses transformed with Digitaleafs.
          </p>
        </div>

        {/* Testimonials 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="luxury-card-cream rounded-3xl p-7 flex flex-col justify-between relative group bg-white shadow-md hover:border-[#E94C29]/40"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#F28D52]">
                    {[...Array(rev.rating)].map((_, r) => (
                      <Star key={r} className="w-4 h-4 fill-[#F28D52]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#171717]/15 group-hover:text-[#E94C29]/40 transition-colors" />
                </div>

                <p className="text-sm text-[#333333] leading-relaxed italic mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-5 border-t border-[#171717]/10">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-tr ${rev.avatarBg} flex items-center justify-center font-bold text-white text-sm shadow`}
                  >
                    {rev.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#171717]">{rev.name}</h4>
                    <p className="text-xs text-[#666666]">{rev.role}</p>
                  </div>
                </div>

                <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-[#A94322] font-mono bg-[#F9F7E3] px-2.5 py-1 rounded-md border border-[#E94C29]/30 font-semibold">
                  <CheckCircle2 className="w-3 h-3 text-[#E94C29]" />
                  <span>{rev.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
