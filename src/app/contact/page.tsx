import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us & Free Developer Consultation — Digitaleafs",
  description:
    "Connect directly with our senior lead developers. Free architecture guidance, transparent fixed pricing from ₹7,999, and instant WhatsApp support at +91 7851018751.",
  alternates: {
    canonical: "https://digitaleafs.com/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://digitaleafs.com/contact",
    title: "Contact Digitaleafs — Direct Lead Developer Consultation",
    description:
      "Get a free proposal and architectural plan within 24 hours. Call or WhatsApp directly at +91 7851018751.",
    siteName: "Digitaleafs",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Digitaleafs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Digitaleafs — Free Developer Consultation",
    description:
      "Zero sales pressure, talk directly to the engineers building your software. WhatsApp +91 7851018751.",
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
          "name": "Contact",
          "item": "https://digitaleafs.com/contact",
        },
      ],
    },
    {
      "@type": "ContactPage",
      "name": "Digitaleafs Contact & Consultation Desk",
      "url": "https://digitaleafs.com/contact",
      "mainEntity": {
        "@type": "ProfessionalService",
        "name": "Digitaleafs",
        "alternateName": "Digitaleafs Studio",
        "telephone": "+91-7851018751",
        "email": "contact@digitaleafs.com",
        "url": "https://digitaleafs.com",
        "sameAs": [
          "https://www.instagram.com/digitaleafs",
          "https://www.facebook.com/digitaleafs"
        ],
        "priceRange": "₹7,999 - ₹1,25,000",
        "openingHours": "Mo-Sa 10:00-19:00",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-7851018751",
          "contactType": "lead developer consultation",
          "availableLanguage": ["English", "Hindi"],
        },
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#171717] text-[#F9F7E3] selection:bg-[#E94C29] selection:text-white font-sans overflow-x-hidden pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}