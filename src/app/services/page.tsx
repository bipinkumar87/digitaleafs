import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import QuoteBanner from "@/components/QuoteBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Software & Web Development Services — Starting ₹7,999",
  description:
    "Explore our end-to-end engineering services: bespoke Next.js web applications, Android & iOS mobile apps, and business automation software starting from ₹7,999. 100% full source code ownership.",
  alternates: {
    canonical: "https://digitaleafs.com/services",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://digitaleafs.com/services",
    title: "Software & Web Development Services — Digitaleafs",
    description:
      "End-to-end engineering: custom Next.js websites, mobile apps, and business automation software starting at ₹7,999 with 100% full source code ownership.",
    siteName: "Digitaleafs",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Digitaleafs Web & Software Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web & Software Development Services — Digitaleafs",
    description:
      "Bespoke websites, mobile apps, and automation software starting from ₹7,999. Zero retainers, 100% code ownership.",
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
          "name": "Services",
          "item": "https://digitaleafs.com/services",
        },
      ],
    },
    {
      "@type": "Service",
      "name": "Custom Web & Software Development",
      "provider": {
        "@type": "Organization",
        "name": "Digitaleafs Studio",
        "url": "https://digitaleafs.com",
      },
      "serviceType": "Software Engineering",
      "areaServed": "IN",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "7999",
        "highPrice": "125000",
        "offerCount": "8",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "High-Converting Landing Pages",
              "description": "Fast-loading single-page landing pages optimized for Google Ads & lead capture.",
            },
            "price": "7999",
            "priceCurrency": "INR",
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Multi-Page Business Websites",
              "description": "Complete corporate web presence built on Next.js with CMS and WhatsApp integration.",
            },
            "price": "14999",
            "priceCurrency": "INR",
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "E-Commerce Online Stores",
              "description": "0% commission online store with UPI gateway integration and inventory management.",
            },
            "price": "39999",
            "priceCurrency": "INR",
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Business Software & POS",
              "description": "Billing, inventory management, patient records, and operational automation systems.",
            },
            "price": "75000",
            "priceCurrency": "INR",
          },
        ],
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#171717] text-[#F9F7E3] selection:bg-[#E94C29] selection:text-white font-sans overflow-x-hidden pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Services />
        <QuoteBanner />
      </main>
      <Footer />
    </div>
  );
}