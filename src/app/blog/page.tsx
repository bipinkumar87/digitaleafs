import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Blog from "@/components/Blog";
import QuoteBanner from "@/components/QuoteBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Business Growth & Digital Strategy Blog — Digitaleafs",
  description:
    "Actionable business guides, conversion strategies, and proven insights on why a modern website is essential to grow your business revenue in 2026.",
  alternates: {
    canonical: "https://digitaleafs.com/blog",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://digitaleafs.com/blog",
    title: "Business Growth & Digital Strategy Blog — Digitaleafs",
    description:
      "Actionable insights on website ROI, clinic growth, WhatsApp automation, and local SEO domination.",
    siteName: "Digitaleafs",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Digitaleafs Blog & Digital Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Growth & Digital Strategy Blog — Digitaleafs",
    description:
      "Why every business needs a website, WhatsApp sales funnels, and clinic appointment strategies.",
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
          "name": "Blog",
          "item": "https://digitaleafs.com/blog",
        },
      ],
    },
    {
      "@type": "Blog",
      "name": "Digitaleafs Growth & Engineering Blog",
      "description": "Guides, case studies, and strategic playbooks for growing local businesses and healthcare clinics online.",
      "publisher": {
        "@type": "Organization",
        "name": "Digitaleafs",
        "alternateName": "Digitaleafs Studio",
        "url": "https://digitaleafs.com",
      },
      "blogPost": [
        {
          "@type": "BlogPosting",
          "headline": "Why Every Business Needs a Modern Website in 2026: The Real Reason You Are Losing Customers",
          "description": "Over 78% of customers in your city search on Google and check a website before visiting or buying. Discover how a modern website secures local authority.",
          "datePublished": "2026-11-01",
          "author": {
            "@type": "Organization",
            "name": "Digitaleafs Editorial Team",
          },
        },
        {
          "@type": "BlogPosting",
          "headline": "Website vs. Social Media: Why Relying Only on Instagram & Justdial Is Costing You 60% Revenue",
          "description": "Social media accounts can get blocked overnight and directory platforms sell your customer leads to rival competitors.",
          "datePublished": "2026-11-05",
          "author": {
            "@type": "Organization",
            "name": "Digitaleafs Editorial Team",
          },
        },
        {
          "@type": "BlogPosting",
          "headline": "How a Custom Website Doubles Appointments & Patient Trust for Clinics, Doctors & Labs",
          "description": "Say goodbye to crowded waiting rooms and missed appointment calls with 24/7 online doctor booking and automated WhatsApp reminders.",
          "datePublished": "2026-11-10",
          "author": {
            "@type": "Organization",
            "name": "Digitaleafs Editorial Team",
          },
        },
        {
          "@type": "BlogPosting",
          "headline": "The 5-Minute Lead Rule: How Automated WhatsApp Funnels Turn Website Visitors into Paying Clients",
          "description": "Learn how smart businesses use integrated 1-click WhatsApp buttons and auto-funnels to close deals effortlessly.",
          "datePublished": "2026-11-15",
          "author": {
            "@type": "Organization",
            "name": "Digitaleafs Editorial Team",
          },
        },
        {
          "@type": "BlogPosting",
          "headline": "From Offline to Digital: Why Local Retailers, Restaurants & Academies Must Build a Website Now",
          "description": "Discover how a modern digital catalogue, online menu, and student portal empower local businesses to dominate their neighbourhood.",
          "datePublished": "2026-11-20",
          "author": {
            "@type": "Organization",
            "name": "Digitaleafs Editorial Team",
          },
        },
      ],
    },
  ],
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#171717] text-[#F9F7E3] selection:bg-[#E94C29] selection:text-white font-sans overflow-x-hidden pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Blog />
        <QuoteBanner />
      </main>
      <Footer />
    </div>
  );
}