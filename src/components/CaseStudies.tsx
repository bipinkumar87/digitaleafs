"use client";

import { useState } from "react";
import { Award, Clock } from "lucide-react";

export default function CaseStudies() {
  const [filter, setFilter] = useState("all");

  const caseStudies = [
    {
      id: "clinic",
      tag: "Clinic & Healthcare",
      category: "clinic",
      client: "Aarogyam Polyclinic & Diagnostics",
      title: "Online Doctor Booking System with WhatsApp Reminders",
      description:
        "Replaced a manual register book with a 24/7 web booking engine and automated WhatsApp visit alerts, drastically eliminating waiting room congestion.",
      metrics: [
        { label: "Patient Bookings", value: "+380%" },
        { label: "No-Show Drop", value: "-75%" },
        { label: "Patient Rating", value: "4.9 ★" },
      ],
      stack: ["Next.js", "WhatsApp API", "PostgreSQL", "Calendar Engine"],
      gradient: "from-[#F28D52]/20 via-[#1f1f1f] to-[#171717]",
      accent: "text-[#F28D52]",
    },
    {
      id: "retail",
      tag: "Retail & Supermarket",
      category: "retail",
      client: "Royal Mart Grocery & Department Store",
      title: "High-Speed POS Billing & WhatsApp Product Catalogue",
      description:
        "Built a lightning-fast counter billing software with barcode scanning and an interactive WhatsApp catalogue where neighbourhood customers order in 3 clicks.",
      metrics: [
        { label: "Billing Speed", value: "8 Seconds" },
        { label: "Monthly Repeat Orders", value: "+52%" },
        { label: "Stock Accuracy", value: "99.8%" },
      ],
      stack: ["React 19", "Node.js", "Barcode POS", "UPI QR Engine"],
      gradient: "from-[#E94C29]/20 via-[#1f1f1f] to-[#171717]",
      accent: "text-[#E94C29]",
    },
    {
      id: "coaching",
      tag: "Coaching & Education",
      category: "coaching",
      client: "Pinnacle Science Academy",
      title: "Student Admission Portal, Online Test Engine & Mobile App",
      description:
        "Designed a complete student learning portal with online MCQ tests, instant rank generation, digital fee receipts, and homework notification app.",
      metrics: [
        { label: "Active Students", value: "1,450+" },
        { label: "Fee Collection", value: "98% Online" },
        { label: "Parent Satisfaction", value: "99%" },
      ],
      stack: ["Flutter App", "Next.js", "Quiz Engine", "SMS Gateway"],
      gradient: "from-[#F28D52]/20 via-[#1f1f1f] to-[#171717]",
      accent: "text-[#F28D52]",
    },
    {
      id: "local",
      tag: "Restaurant & Local Business",
      category: "local",
      client: "FreshBites Café & Bistro",
      title: "Contactless QR Code Menu & Google Maps Lead Funnel",
      description:
        "Engineered an elegant mobile QR menu with table ordering and optimized their Google Maps profile to rank #1 in their city for café searches.",
      metrics: [
        { label: "Google Footfall", value: "+4.2x" },
        { label: "Average Table Ticket", value: "+28%" },
        { label: "5-Star Reviews", value: "850+" },
      ],
      stack: ["Next.js", "QR Code Engine", "Google Maps SEO", "Stripe/UPI"],
      gradient: "from-[#A94322]/20 via-[#1f1f1f] to-[#171717]",
      accent: "text-[#E94C29]",
    },
  ];

  const filtered =
    filter === "all"
      ? caseStudies
      : caseStudies.filter((item) => item.category === filter);

  return (
    <section id="case-studies" className="py-20 lg:py-28 relative bg-[#171717] border-t border-[#F9F7E3]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F9F7E3] tracking-tight">
              Case Studies &amp; <span className="text-gradient-orange">Featured Work</span>
            </h2>
            <p className="mt-3 text-base text-[#F9F7E3]/75 max-w-xl">
              See how our custom websites and software helped local doctors, retailers, coaching centers, and business owners thrive.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Projects" },
              { id: "clinic", label: "Clinics" },
              { id: "retail", label: "Retail Stores" },
              { id: "coaching", label: "Coaching" },
              { id: "local", label: "Local Businesses" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  filter === btn.id
                    ? "bg-gradient-to-r from-[#F28D52] to-[#E94C29] text-white shadow-lg shadow-[#E94C29]/25 font-bold"
                    : "bg-[#1f1f1f] border border-[#F9F7E3]/10 text-[#F9F7E3]/70 hover:text-white"
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
              className={`luxury-card rounded-3xl p-8 flex flex-col justify-between border border-[#F9F7E3]/10 hover:border-[#F28D52]/40 transition-all duration-300 relative group overflow-hidden bg-gradient-to-br ${study.gradient}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-[#171717] border border-[#F9F7E3]/15 text-[#F9F7E3]">
                    {study.tag}
                  </span>
                  <span className="text-xs font-mono text-[#F9F7E3]/70 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#F28D52]" />
                    Delivered in 7 days
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#F28D52] tracking-wider uppercase mb-1">
                  {study.client}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#F28D52] transition-colors duration-200">
                  {study.title}
                </h3>
                <p className="mt-3 text-sm text-[#F9F7E3]/75 leading-relaxed">
                  {study.description}
                </p>

                {/* Metrics Highlight Banner */}
                <div className="grid grid-cols-3 gap-3 my-6 p-4 rounded-xl bg-[#171717]/80 border border-[#F9F7E3]/10">
                  {study.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className={`text-xl sm:text-2xl font-extrabold ${study.accent}`}>
                        {m.value}
                      </div>
                      <div className="text-[11px] text-[#F9F7E3]/60 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#F9F7E3]/10">
                  {study.stack.map((item, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono text-[#F9F7E3]/75 px-2.5 py-1 rounded-md bg-[#171717] border border-[#F9F7E3]/10"
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
