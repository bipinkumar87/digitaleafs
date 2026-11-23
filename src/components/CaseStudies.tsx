"use client";

import { useState } from "react";
import Image from "next/image";
import { Clock, ArrowUpRight, ExternalLink } from "lucide-react";

interface CaseStudyItem {
  id: string;
  tag: string;
  category: string;
  client: string;
  title: string;
  description: string;
  url?: string;
  displayUrl?: string;
  image?: string;
  badge?: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  gradient: string;
  accent: string;
}

export default function CaseStudies() {
  const [filter, setFilter] = useState("all");

  const caseStudies: CaseStudyItem[] = [
    {
      id: "rnp-insurance",
      tag: "Insurance & Advisory",
      category: "financial",
      client: "Ramnath Prajapati (रामनाथ प्रजापति)",
      title: "Authorized LIC Insurance Advisory Portal & Premium Calculator",
      description:
        "Bilingual digital portal engineered for authorized senior LIC advisor Ramnath Prajapati. Features an interactive insurance scheme catalog, direct premium calculation engine, sovereign government guarantee showcase, and instant WhatsApp doorstep consultation booking.",
      url: "https://rnp.digitaleafs.com/",
      displayUrl: "rnp.digitaleafs.com",
      image: "/img/rnp-preview.jpg",
      badge: "Live Website",
      metrics: [
        { label: "Policy Inquiries", value: "+420%" },
        { label: "WhatsApp Leads", value: "15+ Daily" },
        { label: "Client Trust", value: "5.0 ★" },
      ],
      stack: ["Next.js", "Tailwind CSS", "LIC Calculator", "WhatsApp Funnel"],
      gradient: "from-[#F28D52]/25 via-[#1f1f1f] to-[#171717]",
      accent: "text-[#F28D52]",
    },
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
      id: "resto-demo",
      tag: "Restaurant & Hospitality",
      category: "local",
      client: "Demo Restaurant & Fine Dining",
      title: "Luxury Restaurant Digital Portal & Online Table Booking Engine",
      description:
        "Immersive luxury restaurant web application engineered with bespoke theatre-curtain visual styling, interactive gourmet culinary menu cards, online table reservation system, and mobile-first dining UI.",
      url: "https://demo.resto.digitaleafs.com/",
      displayUrl: "demo.resto.digitaleafs.com",
      image: "/img/resto-preview.jpg",
      badge: "Live Demo",
      metrics: [
        { label: "Table Reservations", value: "+320%" },
        { label: "Online Menu Views", value: "3,000+ /mo" },
        { label: "Customer Rating", value: "5.0 ★" },
      ],
      stack: ["Next.js", "Tailwind CSS", "Table Booking", "Interactive Menu"],
      gradient: "from-amber-500/20 via-[#1f1f1f] to-[#171717]",
      accent: "text-amber-400",
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
              See how our custom websites and software helped local businesses, financial advisors, doctors, retailers, and coaching centers thrive.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Projects" },
              { id: "financial", label: "Insurance & Advisory" },
              { id: "local", label: "Restaurants & Dining" },
              { id: "clinic", label: "Clinics" },
              { id: "retail", label: "Retail Stores" },
              { id: "coaching", label: "Coaching" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filtered.map((study) => (
            <div
              key={study.id}
              className={`luxury-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col justify-between border border-[#F9F7E3]/10 hover:border-[#F28D52]/40 transition-all duration-300 relative group overflow-hidden bg-gradient-to-br ${study.gradient}`}
            >
              <div>
                {/* Optional Screenshot Preview Image for Real Projects */}
                {study.image && (
                  <div className="relative w-full h-48 sm:h-60 rounded-2xl overflow-hidden mb-5 bg-[#222] border border-white/10 group-hover:border-[#F28D52]/40 transition-colors">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-black/20 to-black/40 pointer-events-none" />
                    {study.url && (
                      <a
                        href={study.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#171717]/90 hover:bg-[#F28D52] hover:text-[#171717] border border-white/20 text-white text-xs font-semibold backdrop-blur-md transition-all shadow-lg cursor-pointer"
                      >
                        <span>Live Preview</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-[#171717] border border-[#F9F7E3]/15 text-[#F9F7E3]">
                      {study.tag}
                    </span>
                    {study.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>{study.badge}</span>
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-[#F9F7E3]/70 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#F28D52]" />
                    Delivered in 7 days
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#F28D52] tracking-wider uppercase mb-1">
                  {study.client}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#F28D52] transition-colors duration-200">
                  {study.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#F9F7E3]/75 leading-relaxed">
                  {study.description}
                </p>

                {/* Metrics Highlight Banner */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 my-5 sm:my-6 p-3 sm:p-4 rounded-xl bg-[#171717]/80 border border-[#F9F7E3]/10">
                  {study.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className={`text-lg sm:text-2xl font-extrabold ${study.accent}`}>
                        {m.value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-[#F9F7E3]/60 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Stack & Live Link */}
              <div className="pt-4 border-t border-[#F9F7E3]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {study.stack.map((item, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] sm:text-xs font-mono text-[#F9F7E3]/75 px-2.5 py-1 rounded-md bg-[#171717] border border-[#F9F7E3]/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                {study.url && (
                  <a
                    href={study.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full btn-primary-gradient text-white text-xs font-bold shadow-lg hover:scale-105 transition-all cursor-pointer whitespace-nowrap self-start sm:self-auto"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
