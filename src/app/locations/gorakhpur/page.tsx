import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import QuoteBanner from "@/components/QuoteBanner";
import Link from "next/link";
import { CheckCircle2, MapPin, ArrowRight, ShieldCheck, Zap, Code, ShoppingBag, Bot, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Developer in Gorakhpur | Best Web Design Studio — Digitaleafs",
  description:
    "Looking for the top Website Developer in Gorakhpur? Digitaleafs builds professional business websites, coaching institutes portals, clinic software, and retail POS starting from ₹7,999 with 100% full source code ownership.",
  keywords: [
    "Website Developer in Gorakhpur",
    "Website Development Company in Gorakhpur",
    "Web Design Gorakhpur",
    "Best Website Developer Gorakhpur",
    "Coaching Website Gorakhpur",
    "Clinic Website Gorakhpur",
    "Gorakhpur Web Designer Golghar",
  ],
  alternates: {
    canonical: "https://digitaleafs.com/locations/gorakhpur",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://digitaleafs.com/locations/gorakhpur",
    title: "Website Developer in Gorakhpur | Digitaleafs Studio",
    description:
      "Custom business websites, coaching portals, and retail software in Gorakhpur starting from ₹7,999 with 100% code ownership.",
    siteName: "Digitaleafs",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Website Developer in Gorakhpur — Digitaleafs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Developer in Gorakhpur — Digitaleafs",
    description:
      "Reliable web and software development in Gorakhpur. Fixed rates from ₹7,999 with zero retainers.",
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
          "name": "Gorakhpur",
          "item": "https://digitaleafs.com/locations/gorakhpur",
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "name": "Digitaleafs — Website Developer in Gorakhpur",
      "url": "https://digitaleafs.com/locations/gorakhpur",
      "telephone": "+91-7851018751",
      "priceRange": "₹7,999 - ₹1,25,000",
      "image": "https://digitaleafs.com/img/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gorakhpur",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.7606",
        "longitude": "83.3732",
      },
      "areaServed": [
        "Gorakhpur",
        "Golghar",
        "Taramandal",
        "Civil Lines",
        "Mohaddipur",
        "Medical College Road",
        "Shahpur",
        "Betiahata",
      ],
      "knowsAbout": [
        "Website Development",
        "Coaching Institute Portals",
        "Clinic Management Software",
        "Retail POS Billing Software",
        "E-commerce Website Development",
        "WhatsApp Automation",
      ],
    },
  ],
};

export default function GorakhpurLocationPage() {
  const localAreas = [
    "Golghar",
    "Taramandal",
    "Civil Lines",
    "Mohaddipur",
    "Medical College Road",
    "Shahpur",
    "Betiahata",
    "Asuran",
    "Rustampur",
    "Basharatpur",
    "GIDA",
    "Kusumhi",
  ];

  const localCapabilities = [
    {
      icon: <Code className="w-5 h-5 text-[#F28D52]" />,
      title: "Business Websites & Portals",
      desc: "Fast, modern Next.js websites built with 100% full source code ownership. Sub-second load times that rank high on Google.",
    },
    {
      icon: <Bot className="w-5 h-5 text-[#F28D52]" />,
      title: "Coaching Institutes & Academy Portals",
      desc: "Online admission applications, syllabus downloads, previous year results, and automated fee payment reminders.",
    },
    {
      icon: <Database className="w-5 h-5 text-[#A94322]" />,
      title: "Clinic & Hospital Appointment Portals",
      desc: "Automate patient bookings, eliminate long clinic waiting queues, and send automated WhatsApp reminders.",
    },
    {
      icon: <ShoppingBag className="w-5 h-5 text-[#E94C29]" />,
      title: "Retail POS Billing & Grocery Stores",
      desc: "Instant thermal receipt generation, barcode scanner support, and zero-commission UPI QR payments straight to your bank.",
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
              <span>Premier Website Developer in Gorakhpur, Uttar Pradesh</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Top Website Developer in <span className="text-gradient-orange">Gorakhpur</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#F9F7E3]/80 max-w-3xl mx-auto leading-relaxed">
              Looking for a reputable <strong>Website Developer in Gorakhpur</strong>? Digitaleafs builds custom, high-speed websites for coaching academies, clinics, retail shops, and local startups with <strong>100% full source code ownership</strong> starting from ₹7,999.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#F9F7E3]/70">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" /> Fixed Milestone Pricing (From ₹7,999)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-white">
                <ShieldCheck className="w-4 h-4 text-[#F28D52]" /> 100% Source Code Ownership
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-amber-300">
                <Zap className="w-4 h-4" /> Direct Senior Developer Support
              </span>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/917851018751?text=Hi%20Digitaleafs!%20I%20am%20in%20Gorakhpur%20and%20looking%20for%20a%20website%20developer."
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
              Digital Solutions Engineered for <span className="text-[#F28D52]">Gorakhpur Businesses</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#F9F7E3]/70 max-w-2xl mx-auto">
              From coaching hubs in Golghar and Betiahata to hospitals along Medical College Road, we craft modern digital solutions that convert local traffic into loyal clients.
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
              Serving All Localities Across Gorakhpur
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
              Zero middlemen. Direct developer access via phone and WhatsApp with live staging link from Day 2.
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