import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport = {
  themeColor: "#171717",
  colorScheme: "dark" as const,
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://digitaleafs.com"),
  title: {
    default: "Digitaleafs — Website Development Company in India | Custom Web & Apps",
    template: "%s | Digitaleafs",
  },
  description:
    "Digitaleafs is a leading Website Development Company in India. We engineer custom Next.js websites, E-commerce stores, Android/iOS mobile apps, and management software starting from ₹7,999. 100% full source code ownership, zero monthly retainers.",
  keywords: [
    "Website Development Company in India",
    "Website Developer in Lucknow",
    "Website Developer in Azamgarh",
    "Website Developer in Gorakhpur",
    "Website Developer in Mau",
    "E-commerce Website Development",
    "Custom Web Application Development",
    "AI Integration Services",
    "Digitaleafs",
    "Digitaleafs Studio",
    "website development starting 7999",
    "landing page design 7999",
    "business website development 14999",
    "ecommerce website development india",
    "custom software development starting 75000",
    "mobile app development company android ios",
    "clinic management software",
    "doctor appointment website",
    "retail pos billing software",
    "coaching institute student portal",
    "website maintenance 1499 per month",
    "whatsapp ai automation bot",
    "next.js developer agency india",
    "direct developer web design studio",
    "website developer kanpur prayagraj varanasi lucknow azamgarh",
  ],
  authors: [{ name: "Digitaleafs Engineering Team", url: "https://digitaleafs.com" }],
  creator: "Digitaleafs",
  publisher: "Digitaleafs",
  category: "technology",
  classification: "Software Engineering & Custom Web Development",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://digitaleafs.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://digitaleafs.com",
    title: "Digitaleafs — Website Development Company in India | Custom Software Studio",
    description:
      "Leading Website Development Company in India. World-class custom websites, E-commerce stores, and software starting at ₹7,999 with 100% source code ownership.",
    siteName: "Digitaleafs",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Digitaleafs Software & Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitaleafs — Website Development Company in India | Starting ₹7,999",
    description:
      "High-converting custom websites and business software starting from ₹7,999 with zero monthly agency retainers and 100% code ownership.",
    images: ["/img/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/img/favicon/favicon.ico" },
      { url: "/img/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/img/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/img/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://digitaleafs.com/#website",
      url: "https://digitaleafs.com",
      name: "Digitaleafs",
      description: "Custom Websites, Mobile Apps & Business Software Development",
      publisher: {
        "@id": "https://digitaleafs.com/#organization",
      },
      inLanguage: "en-IN",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://digitaleafs.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://digitaleafs.com/#organization",
      name: "Digitaleafs",
      alternateName: "Digitaleafs Studio",
      url: "https://digitaleafs.com",
      logo: "https://digitaleafs.com/img/logo.png",
      image: "https://digitaleafs.com/img/logo.png",
      description:
        "Digitaleafs is a Custom Web & Software Development Studio engineering high-converting websites, Android & iOS mobile applications, and management software starting from ₹7,999.",
      priceRange: "₹7,999 - ₹1,25,000",
      currenciesAccepted: "INR",
      paymentAccepted: "UPI, Net Banking, Credit Card, Debit Card",
      telephone: "+91-7851018751",
      email: "contact@digitaleafs.com",
      sameAs: [
        "https://www.instagram.com/digitaleafs",
        "https://www.facebook.com/digitaleafs",
        "https://digitaleafs.com",
      ],
      knowsAbout: [
        "Website Development Company in India",
        "E-commerce Website Development",
        "Custom Web Application Development",
        "AI Integration Services",
        "Custom Web Development",
        "Next.js and React Architecture",
        "Mobile App Development",
        "Clinic & Hospital Management Software",
        "Retail POS & Billing Systems",
        "WhatsApp AI Funnels & Lead Automation",
        "Full Source Code Ownership",
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: "26.8467",
        longitude: "80.9462",
      },
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "City", name: "Lucknow" },
        { "@type": "City", name: "Azamgarh" },
        { "@type": "City", name: "Varanasi" },
        { "@type": "City", name: "Kanpur" },
        { "@type": "City", name: "Prayagraj" },
        { "@type": "City", name: "Delhi NCR" },
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "10:00",
          closes: "19:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "48",
        bestRating: "5",
        worstRating: "1",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-7851018751",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digitaleafs Software & Web Services",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Landing Page",
            price: "7999",
            priceCurrency: "INR",
            description: "High-converting single-page website built for ad campaigns and local lead generation.",
          },
          {
            "@type": "Offer",
            name: "Business Website",
            price: "14999",
            priceCurrency: "INR",
            description: "Complete professional multi-page website tailored for clinics, coaching centers, and retail shops.",
          },
          {
            "@type": "Offer",
            name: "Professional Website",
            price: "24999",
            priceCurrency: "INR",
            description: "Custom UI/UX with smooth interactive animations, dynamic CMS, and appointment scheduling.",
          },
          {
            "@type": "Offer",
            name: "E-commerce Website",
            price: "39999",
            priceCurrency: "INR",
            description: "Full-scale online store with zero commissions, integrated UPI payments, and order tracking.",
          },
          {
            "@type": "Offer",
            name: "Custom Software Development",
            price: "75000",
            priceCurrency: "INR",
            description: "Tailored management software, billing POS, clinic patient records, or internal operations ERP.",
          },
          {
            "@type": "Offer",
            name: "Mobile App Development",
            price: "125000",
            priceCurrency: "INR",
            description: "Native-quality Android & iOS mobile applications published on Google Play & App Store.",
          },
          {
            "@type": "Offer",
            name: "Website Maintenance",
            price: "1499",
            priceCurrency: "INR",
            description: "Monthly security, uptime monitoring, cloud backups, and priority developer support.",
          },
          {
            "@type": "Offer",
            name: "AI Automation",
            price: "15000",
            priceCurrency: "INR",
            description: "24/7 intelligent WhatsApp AI auto-responder and automated lead qualification bots.",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://digitaleafs.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which is the best website development company in India for custom web and mobile apps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digitaleafs is a premier website development company in India specializing in bespoke Next.js web applications, e-commerce stores, Android/iOS mobile apps, and business automation software starting from ₹7,999 with 100% full source code ownership and zero monthly retainers.",
          },
        },
        {
          "@type": "Question",
          name: "How much does website development cost in Lucknow, Azamgarh, and Uttar Pradesh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Website development packages at Digitaleafs start from a fixed transparent rate of ₹7,999 for high-converting landing pages, ₹14,999 for complete multi-page business websites, and ₹39,999 for full-scale e-commerce stores with direct UPI payment integration and zero monthly retainers.",
          },
        },
        {
          "@type": "Question",
          name: "What does starting prices mean? Are there any hidden charges later?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Zero hidden charges. Before writing a single line of code, we provide a crystal-clear written proposal with exact deliverables and fixed milestone pricing starting from ₹7,999. Every package includes SSL security, mobile responsiveness, and clean code.",
          },
        },
        {
          "@type": "Question",
          name: "Do I get 100% full source code ownership, or will I be locked into monthly retainers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You get 100% complete source code ownership and full administrative control. Unlike platforms like Shopify or agencies that trap you into paying monthly retainers forever, Digitaleafs hands over the complete codebase, database access, and hosting credentials.",
          },
        },
        {
          "@type": "Question",
          name: "How fast is delivery, and how can I track live progress while you build?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A standard small business or clinic website is completed in 5 to 7 days. Custom management software or mobile apps take 10 to 14 days. From Day 2 onwards, we share a private live staging demo link.",
          },
        },
        {
          "@type": "Question",
          name: "Can my patients or customers pay me directly using Google Pay, PhonePe, Paytm, or UPI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, built-in standard. We integrate zero-fee direct UPI QR codes and payment gateway setups that deposit customer payments straight into your bank account.",
          },
        },
        {
          "@type": "Question",
          name: "Can I add new features, custom pages, or mobile apps later as my business grows?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, absolutely! Every system we build is engineered with clean, modular architecture (Next.js, TypeScript, Cloud APIs). Because you retain 100% full source code ownership, you are never locked into a rigid platform.",
          },
        },
      ],
    },
  ],
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-3ZX78YVJ5K";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-MB6JH8NH";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Tag Manager Script */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>

        {/* Google Analytics 4 (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="h-full bg-[#171717] text-[#F9F7E3] selection:bg-[#E94C29] selection:text-white font-sans overflow-x-hidden">
        {/* Google Tag Manager (noscript fallback for no-JS environments) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
