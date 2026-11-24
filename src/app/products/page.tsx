import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import QuoteBanner from "@/components/QuoteBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "In-House Digital Products & SaaS Platforms — Digitaleafs",
  description:
    "Discover Greetingsly and our proprietary in-house digital platforms built for automation, event invitations, and rapid business growth.",
  alternates: {
    canonical: "https://digitaleafs.com/products",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://digitaleafs.com/products",
    title: "In-House Products & SaaS Ecosystem — Digitaleafs",
    description:
      "Explore proprietary platforms engineered by Digitaleafs, including Greetingsly for smart invitations and business event engagement.",
    siteName: "Digitaleafs",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Digitaleafs In-House Digital Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "In-House SaaS Products — Digitaleafs",
    description:
      "Proprietary software applications engineered in-house for business automation and digital invitations.",
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
          "name": "Products",
          "item": "https://digitaleafs.com/products",
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "name": "Greetingsly",
      "url": "https://greetingsly.digitaleafs.com",
      "applicationCategory": "DesignApplication",
      "operatingSystem": "Web, Android, iOS",
      "description": "Smart personalized digital invitation and greeting platform with instant WhatsApp sharing and RSVP tracking.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Digitaleafs Studio",
        "url": "https://digitaleafs.com",
      },
    },
  ],
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#171717] text-[#F9F7E3] selection:bg-[#E94C29] selection:text-white font-sans overflow-x-hidden pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Products />
        <QuoteBanner />
      </main>
      <Footer />
    </div>
  );
}