import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import QuoteBanner from "@/components/QuoteBanner";
import Link from "next/link";
import { CheckCircle2, MapPin, Sparkles, ArrowRight, ShieldCheck, Zap, Code, ShoppingBag, Bot, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Developer in Lucknow | Best Web Development Company — Digitaleafs",
  description:
    "Looking for the premier Website Developer in Lucknow? Digitaleafs delivers custom Next.js websites, E-commerce stores, web apps, and AI integration starting from ₹7,999 with 100% full code ownership.",
  keywords: [
    "Website Developer in Lucknow",
    "Website Development Company in Lucknow",
    "Web Design Company in Lucknow",
    "Best Website Developer Lucknow",
    "E-commerce Website Development Lucknow",
    "Custom Web Application Development Lucknow",
    "AI Integration Services Lucknow",
    "Web Developer Gomti Nagar Lucknow",
    "Web Developer Hazratganj Lucknow",
  ],
  alternates: {
    canonical: "https://digitaleafs.com/locations/lucknow",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://digitaleafs.com/locations/lucknow",
    title: "Website Developer in Lucknow | Digitaleafs Studio",
    description:
      "Custom websites, E-commerce stores, and business web apps starting from ₹7,999 in Lucknow. 100% source code ownership and direct developer support.",
    siteName: "Digitaleafs",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Website Developer in Lucknow — Digitaleafs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Developer in Lucknow — Digitaleafs",
    description:
      "Top-rated website development company in Lucknow. Fixed pricing from ₹7,999 with zero retainers.",
    images: ["/img/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://digitaleafs.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Locations",
          "item": "https://digitaleafs.com/#locations",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Lucknow",
          "item": "https://digitaleafs.com/locations/lucknow",
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "name": "Digitaleafs — Website Developer in Lucknow",
      "url": "https://digitaleafs.com/locations/lucknow",
      "telephone": "+91-7851018751",
      "priceRange": "₹7,999 - ₹1,25,000",
      "image": "https://digitaleafs.com/img/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lucknow",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.8467",
        "longitude": "80.9462",
      },
      "areaServed": [
        "Lucknow",
        "Gomti Nagar",
        "Hazratganj",
        "Aliganj",
        "Indira Nagar",
        "Mahanagar",
        "Ashiyana",
        "Charbagh",
      ],
      "knowsAbout": [
        "Website Development",
        "E-commerce Website Development",
        "Custom Web Application Development",
        "AI Integration Services",
        "Clinic Management Software",
        "Retail POS Systems",
      ],
    },
  ],
};

export default function LucknowLocationPage() {
  const localAreas = [
    "Gomti Nagar",
    "Hazratganj",
    "Aliganj",
    "Indira Nagar",
    "Mahanagar",
    "Ashiyana",
    "Rajajipuram",
    "Vikas Nagar",
    "Charbagh",
    "Jankipuram",
    "Kanpur Road",
    "Faizabad Road",
  ];

  const localCapabilities = [
    {
      icon: <Code className="w-5 h-5 text-[#F28D52]" />,
      title: "Custom Web Application Development",
      desc: "Fast, modern Next.js websites built with full code ownership. Sub-second load times that rank on Google.",
    },
    {
      icon: <ShoppingBag className="w-5 h-5 text-[#E94C29]" />,
      title: "E-commerce Website Development",
      desc: "0% commission online store with UPI QR, payment gateway, and automatic WhatsApp order alerts.",
    },
    {
      icon: <Bot className="w-5 h-5 text-[#F28D52]" />,
      title: "AI Integration Services",
      desc: "Intelligent WhatsApp AI bots and automated lead triage to engage Lucknow customers 24/7.",
    },
    {
      icon: <Database className="w-5 h-5 text-[#A94322]" />,
      title: "Clinic & Retail Billing POS Software",
      desc: "Patient appointment booking, electronic medical records, and 10-second thermal barcode billing.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#171717] text-[#F9F7E3] selection:bg-[#E94C29] selection:text-white font-sans overflow-x-hidden pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main>
        {/* Local Hero Section */}
        <section className="relative py-16 sm:py-24 border-b border-white/10 bg-gradient-to-b from-[#1c1c1c] to-[#171717]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F28D52]/10 border border-[#F28D52]/30 text-xs font-bold text-[#F28D52]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Premier Website Developer in Lucknow, Uttar Pradesh</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Top Website Developer in <span className="text-gradient-orange">Lucknow</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#F9F7E3]/80 max-w-3xl mx-auto leading-relaxed">
              Are you looking for a reliable <strong>Website Development Company in Lucknow</strong>? Digitaleafs delivers high-converting custom websites, E-commerce stores, and tailored business software with <strong>100% full source code ownership</strong> starting from just ₹7,999.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#F9F7E3]/70">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" /> Fixed Milestone Pricing (From ₹7,999)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-white">
                <ShieldCheck className="w-4 h-4 text-[#F28D52]" /> Zero Monthly Agency Retainers
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-amber-300">
                <Zap className="w-4 h-4" /> 5-7 Days Turnaround
              </span>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/917851018751?text=Hi%20Digitaleafs!%20I%20am%20in%20Lucknow%20and%20looking%20for%20a%20website%20developer."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] font-bold text-sm text-white shadow-xl hover:scale-105 transition-all"
              >
                <span>WhatsApp Developer Directly</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 font-bold text-sm text-white transition-all"
              >
                <span>View Transparent Pricing</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Local Services Matrix */}
        <section className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Web &amp; Software Services Built for <span className="text-[#F28D52]">Lucknow Businesses</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#F9F7E3]/70 max-w-2xl mx-auto">
              From clinics in Gomti Nagar to retail outlets in Hazratganj, we build modern digital infrastructure that brings high-paying local customers to your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {localCapabilities.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#1f1f1f] border border-white/10 hover:border-[#F28D52]/40 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#F9F7E3]/75 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local Areas Grid */}
        <section className="py-12 bg-[#141414] border-y border-white/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Serving All Localities Across Lucknow &amp; NCR
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {localAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-[#F9F7E3]/80 hover:text-[#F28D52] hover:border-[#F28D52]/30 transition-all"
                >
                  📍 {area}
                </span>
              ))}
            </div>
            <p className="text-xs text-[#F9F7E3]/60">
              Need on-site discussion or live Google Meet staging review? We provide direct developer communication with zero account managers in between.
            </p>
          </div>
        </section>

        <QuoteBanner />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}