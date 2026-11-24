import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Solutions from "@/components/Solutions";
import QuoteBanner from "@/components/QuoteBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Industry Digital Solutions for Clinics, Retail & Institutes",
  description:
    "Tailored digital systems engineered for clinics, retail stores, supermarkets, and coaching academies to double local inquiries and revenue. 100% full source code ownership.",
  alternates: {
    canonical: "https://digitaleafs.com/solutions",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://digitaleafs.com/solutions",
    title: "Industry Solutions for Clinics, Retail & Institutes — Digitaleafs",
    description:
      "Engineered systems for medical practices, retail stores, schools, and local businesses. Automated appointments, inventory, and zero-fee UPI ordering.",
    siteName: "Digitaleafs",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Digitaleafs Industry Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industry Solutions for Clinics, Retail & Institutes — Digitaleafs",
    description:
      "Automated appointment booking, retail POS, and student portals engineered for local business growth.",
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
          "name": "Solutions",
          "item": "https://digitaleafs.com/solutions",
        },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Digitaleafs Industry Solutions",
      "description": "Customized digital systems for targeted small and medium enterprise verticals.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Healthcare & Clinic Management Systems",
          "description": "24/7 patient appointment scheduling, doctor profiles, automated WhatsApp visit reminders.",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Retail POS & Supermarket Inventory",
          "description": "Rapid barcode billing, WhatsApp receipt delivery, multi-counter cloud inventory tracking.",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Coaching Institute & Academy Portals",
          "description": "Student registration, automated fee reminders, test series delivery, result publishing.",
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Restaurant & Cafe Digital Menus",
          "description": "QR code digital menus, table reservation engine, direct WhatsApp delivery with 0% commission.",
        },
      ],
    },
  ],
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#171717] text-[#F9F7E3] selection:bg-[#E94C29] selection:text-white font-sans overflow-x-hidden pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Solutions />
        <QuoteBanner />
      </main>
      <Footer />
    </div>
  );
}