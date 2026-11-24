import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CaseStudies from "@/components/CaseStudies";
import QuoteBanner from "@/components/QuoteBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Client Projects & Featured Case Studies — Digitaleafs",
  description:
    "Explore our delivered client projects: LIC Advisor Portals, Luxury Restaurant booking engines, healthcare platforms, and real-world web applications.",
  alternates: {
    canonical: "https://digitaleafs.com/projects",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://digitaleafs.com/projects",
    title: "Client Projects & Case Studies — Digitaleafs",
    description:
      "Real-world web and software deliveries: high-converting insurance portals, restaurant reservation platforms, and custom business systems.",
    siteName: "Digitaleafs",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Digitaleafs Client Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Case Studies & Projects — Digitaleafs",
    description:
      "Explore high-performance websites and software delivered for clinics, restaurants, advisors, and enterprises.",
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
          "name": "Projects",
          "item": "https://digitaleafs.com/projects",
        },
      ],
    },
    {
      "@type": "ItemList",
      "name": "Digitaleafs Delivered Projects & Case Studies",
      "itemListElement": [
        {
          "@type": "CreativeWork",
          "position": 1,
          "name": "LIC Advisor Portal (R.N. Prasad)",
          "description": "High-converting insurance portal with plan comparison calculators, client lead capture, and policy tracking.",
          "url": "https://rnprasadlic.com",
        },
        {
          "@type": "CreativeWork",
          "position": 2,
          "name": "The Royal Spice — Luxury Dining & Table Reservation Engine",
          "description": "Modern gourmet restaurant web application with digital food menus, table booking, and zero-fee ordering.",
        },
        {
          "@type": "CreativeWork",
          "position": 3,
          "name": "Apex Healthcare & Diagnostic Management System",
          "description": "Custom doctor appointment scheduling portal with automated WhatsApp reminders and lab report access.",
        },
      ],
    },
  ],
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#171717] text-[#F9F7E3] selection:bg-[#E94C29] selection:text-white font-sans overflow-x-hidden pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <CaseStudies />
        <QuoteBanner />
      </main>
      <Footer />
    </div>
  );
}