"use client";

import { useState } from "react";
import { 
  Code, 
  Smartphone, 
  Bot, 
  Cloud, 
  Palette, 
  Database, 
  ArrowUpRight, 
  CheckCircle, 
  Layers,
  Sparkles 
} from "lucide-react";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Capabilities" },
    { id: "web", label: "Web Applications" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "ai", label: "AI & Automation" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "software", label: "Billing & Software" },
  ];

  const services = [
    {
      category: "web",
      icon: <Code className="w-6 h-6 text-[#F28D52]" />,
      title: "Custom Web Application Development",
      description:
        "High-performance custom web applications and bespoke portals built with Next.js, React 19, and TypeScript. Engineered for sub-second speeds, flawless mobile responsiveness, and high conversion.",
      features: [
        "Modern Next.js & React full-stack architecture",
        "Sub-second load speeds & Core Web Vitals optimized",
        "100% Full source code ownership & zero lock-in",
        "Interactive dashboards & custom business workflows",
      ],
      technologies: ["Next.js", "React 19", "Tailwind CSS", "TypeScript"],
    },
    {
      category: "ecommerce",
      icon: <Layers className="w-6 h-6 text-[#E94C29]" />,
      title: "E-commerce Website Development",
      description:
        "Custom online stores with zero ongoing sales commissions. Integrated UPI payment gateways (Google Pay, PhonePe, Paytm), instant WhatsApp order alerts, and automated stock management.",
      features: [
        "0% commission direct-to-bank UPI integration",
        "Mobile-first fast cart & 1-step checkout funnel",
        "Instant WhatsApp automated customer order receipt",
        "Inventory tracking & discount coupon engine",
      ],
      technologies: ["Next.js", "Stripe / Razorpay", "UPI QR", "PostgreSQL"],
    },
    {
      category: "ai",
      icon: <Bot className="w-6 h-6 text-[#F28D52]" />,
      title: "AI Integration Services & Automation",
      description:
        "Empower your business with 24/7 intelligent AI chatbots, custom OpenAI/LLM assistants, and automated WhatsApp lead qualification funnels that close sales while you sleep.",
      features: [
        "24/7 WhatsApp AI customer auto-responder",
        "Custom ChatGPT / Claude business knowledgebase",
        "Automated CRM sync & instant lead alerts",
        "Voice & text customer inquiry triage",
      ],
      technologies: ["OpenAI API", "WhatsApp API", "Webhooks", "LangChain"],
    },
    {
      category: "mobile",
      icon: <Smartphone className="w-6 h-6 text-[#E94C29]" />,
      title: "Android & iOS Mobile Apps",
      description:
        "Full-fledged native & cross-platform mobile apps for Google Play Store and Apple App Store. Perfect for clinic patients, retail customers, and coaching students.",
      features: [
        "Play Store & App Store publishing support",
        "Instant push notifications & alerts",
        "Biometric login & offline storage",
        "Silky-smooth 60fps user experience",
      ],
      technologies: ["Flutter", "React Native", "Android", "iOS"],
    },
    {
      category: "software",
      icon: <Database className="w-6 h-6 text-[#A94322]" />,
      title: "Custom POS Billing & Management Software",
      description:
        "Custom management software tailored to your daily operations: retail billing, clinic patient records, student fee management, and inventory stock control.",
      features: [
        "10-second thermal receipt billing",
        "Barcode scanner & UPI QR integration",
        "Low-stock alerts & profit/loss tracking",
        "Customer ledger / Udhaar Khata",
      ],
      technologies: ["PostgreSQL", "Node.js", "Electron", "Cloud DB"],
    },
    {
      category: "web",
      icon: <Palette className="w-6 h-6 text-[#E94C29]" />,
      title: "Google Local SEO & Maps Domination",
      description:
        "Get your business ranked on the top 3 spots of Google Maps and high-intent local search queries so new customers in Lucknow, Azamgarh, and all across India find you first.",
      features: [
        "Google My Business Profile optimization",
        "Local keyword ranking (City & Area)",
        "Automated 5-star review collector",
        "High-converting landing page funnels",
      ],
      technologies: ["Google Maps SEO", "Schema Markup", "Local Citations"],
    },
    {
      category: "software",
      icon: <Cloud className="w-6 h-6 text-[#A94322]" />,
      title: "Cloud Hosting, Domain & 24/7 Care",
      description:
        "Zero headache for you. We take care of high-speed cloud server deployment, free SSL certificates, domain routing, daily backups, and ongoing bug fixes.",
      features: [
        "99.9% Uptime SLA guarantee",
        "Daily automated database backups",
        "Free SSL encryption certificate",
        "Dedicated phone & WhatsApp support",
      ],
      technologies: ["Cloudflare", "AWS", "Vercel", "DigitalOcean"],
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 lg:py-28 relative bg-[#F9F7E3] text-[#171717] border-t border-[#171717]/10 overflow-hidden">
      {/* Architectural grid on cream */}
      <div className="absolute inset-0 bg-cream-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#171717] border border-[#F28D52]/30 text-[#F28D52] shadow-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F28D52]" />
            <span>Website Development Company in India • Custom Software &amp; AI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#171717] tracking-tight">
            High-Impact Software &amp; <span className="text-gradient-fire">Web Development</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#444444] max-w-2xl leading-relaxed">
            From E-commerce Website Development to Custom Web Application Development and AI Integration Services, we engineer high-speed solutions for businesses in Lucknow, Azamgarh, and across India starting from ₹7,999.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl sm:rounded-full bg-white border border-[#171717]/10 shadow-sm max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-[#F28D52] to-[#E94C29] text-white shadow-md shadow-[#E94C29]/25"
                    : "text-[#444444] hover:text-[#171717] hover:bg-[#171717]/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {filteredServices.map((service, idx) => (
            <div
              key={idx}
              className="luxury-card-cream rounded-2xl p-5 sm:p-7 flex flex-col justify-between group relative overflow-hidden bg-white shadow-md"
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F28D52]/10 rounded-full blur-2xl group-hover:bg-[#E94C29]/20 transition-all duration-300 pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F9F7E3] border border-[#E94C29]/25 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-[#171717] group-hover:text-[#E94C29] transition-colors duration-200 flex items-center justify-between">
                  <span>{service.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#171717]/40 group-hover:text-[#E94C29] transition-colors" />
                </h3>

                <p className="mt-3 text-sm text-[#444444] leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="mt-5 space-y-2 border-t border-[#171717]/10 pt-5">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-[#171717] font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-[#E94C29] mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Badges */}
              <div className="mt-6 pt-4 border-t border-[#171717]/10 flex flex-wrap gap-1.5">
                {service.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#F9F7E3] text-[#171717] border border-[#171717]/10 font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
