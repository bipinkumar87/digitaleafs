import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import QuoteBanner from "@/components/QuoteBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Transparent Web Development Pricing — Plans from ₹7,999",
  description:
    "Fixed transparent rates starting from ₹7,999. Zero monthly agency lock-in, 100% full source code ownership, and 30-day post-launch warranty with direct developer support.",
  alternates: {
    canonical: "https://digitaleafs.com/pricing",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://digitaleafs.com/pricing",
    title: "Transparent Pricing Plans from ₹7,999 — Digitaleafs",
    description:
      "No hidden fees or monthly retainers. 100% full source code ownership. Packages from ₹7,999 for landing pages to ₹1,25,000 for native mobile apps.",
    siteName: "Digitaleafs",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Digitaleafs Pricing & Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web & App Development Pricing — Starting ₹7,999",
    description:
      "Fixed milestone pricing. 100% source code ownership. Zero monthly agency retainers.",
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
          "name": "Pricing",
          "item": "https://digitaleafs.com/pricing",
        },
      ],
    },
    {
      "@type": "OfferCatalog",
      "name": "Digitaleafs Pricing Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Landing Page Package",
          "price": "7999",
          "priceCurrency": "INR",
          "description": "High-converting single-page website built for ad campaigns and local lead generation.",
        },
        {
          "@type": "Offer",
          "name": "Business Website Package",
          "price": "14999",
          "priceCurrency": "INR",
          "description": "Complete professional multi-page website tailored for clinics, coaching centers, and retail shops.",
        },
        {
          "@type": "Offer",
          "name": "Professional Web Package",
          "price": "24999",
          "priceCurrency": "INR",
          "description": "Custom UI/UX with smooth interactive animations, dynamic CMS, and appointment scheduling.",
        },
        {
          "@type": "Offer",
          "name": "E-Commerce Online Store",
          "price": "39999",
          "priceCurrency": "INR",
          "description": "Full-scale online store with zero commissions, integrated UPI payments, and order tracking.",
        },
        {
          "@type": "Offer",
          "name": "Custom Software & POS",
          "price": "75000",
          "priceCurrency": "INR",
          "description": "Tailored management software, billing POS, clinic patient records, or internal operations ERP.",
        },
        {
          "@type": "Offer",
          "name": "Native Mobile App",
          "price": "125000",
          "priceCurrency": "INR",
          "description": "Native-quality Android & iOS mobile applications published on Google Play & App Store.",
        },
        {
          "@type": "Offer",
          "name": "Starter AMC Maintenance Care",
          "price": "1499",
          "priceCurrency": "INR",
          "description": "Essential 99.9% uptime monitoring, weekly cloud database backups, SSL security, and 2 content updates/month.",
        },
        {
          "@type": "Offer",
          "name": "Growth Business AMC Maintenance",
          "price": "2999",
          "priceCurrency": "INR",
          "description": "Proactive speed optimization, monthly SEO health audits, 5 festive banner/content updates, and same-day priority support.",
        },
        {
          "@type": "Offer",
          "name": "Enterprise Dedicated AMC Maintenance",
          "price": "5999",
          "priceCurrency": "INR",
          "description": "Dedicated full-stack engineer on-call with daily cloud backups, 4 hours monthly custom feature sprints, and 1-hour emergency SLA.",
        },
      ],
    },
  ],
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#171717] text-[#F9F7E3] selection:bg-[#E94C29] selection:text-white font-sans overflow-x-hidden pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Pricing />
        <QuoteBanner />
      </main>
      <Footer />
    </div>
  );
}