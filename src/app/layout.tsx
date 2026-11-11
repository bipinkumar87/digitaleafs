import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digitaleafs.com"),
  title: {
    default: "Digitaleafs — Custom Websites, Mobile Apps & Business Software",
    template: "%s | Digitaleafs",
  },
  description:
    "High-converting custom websites, Android/iOS mobile apps, and business management software starting at ₹9,999. 100% full source code ownership, zero monthly agency retainers.",
  keywords: [
    "website development starting 9999",
    "custom software development",
    "mobile app development company",
    "clinic management software",
    "doctor appointment website",
    "retail pos billing software",
    "coaching institute website",
    "school management portal",
    "local business website builder",
    "next.js agency india",
    "digitaleafs software studio",
    "direct developer web design",
  ],
  authors: [{ name: "Digitaleafs Engineering Team", url: "https://digitaleafs.com" }],
  creator: "Digitaleafs",
  publisher: "Digitaleafs Studio",
  alternates: {
    canonical: "https://digitaleafs.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://digitaleafs.com",
    title: "Digitaleafs — Custom Websites, Mobile Apps & Digital Software",
    description:
      "World-class websites and custom software starting at just ₹9,999 with 100% full source code ownership. Built for clinics, retail shops, coaching centers, and startups.",
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
    title: "Digitaleafs — Custom Websites, Apps & Software",
    description:
      "High-converting custom websites and business software starting from ₹9,999 with zero monthly agency retainers.",
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
      "@type": "ProfessionalService",
      "@id": "https://digitaleafs.com/#organization",
      name: "Digitaleafs",
      url: "https://digitaleafs.com",
      logo: "https://digitaleafs.com/img/logo.png",
      image: "https://digitaleafs.com/img/logo.png",
      description:
        "Custom websites, Android & iOS mobile applications, and management software engineered for small businesses, clinics, retail shops, and coaching centers.",
      priceRange: "₹9,999 - ₹75,000",
      email: "contact@digitaleafs.com",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: "9999",
        highPrice: "75000",
        offerCount: "5",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://digitaleafs.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does 'Starting at ₹9,999' mean? Are there any hidden charges later?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Zero hidden charges. Before writing a single line of code, we provide a crystal-clear written proposal with exact deliverables. ₹9,999 covers a full ready-to-launch responsive business website with instant inquiry capture forms, Google Maps local SEO, mobile optimization, and SSL security.",
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
      </body>
    </html>
  );
}
