"use client";

import { Check, Sparkles, ArrowRight, MessageSquare, ShieldCheck, Zap } from "lucide-react";

interface PricingItem {
  icon: string;
  name: string;
  price: string;
  period?: string;
  badge?: string;
  popular?: boolean;
  description: string;
  features: string[];
}

const PRICING_DATA: PricingItem[] = [
  {
    icon: "🌐",
    name: "Landing Page",
    price: "₹7,999",
    description: "High-converting single-page website built for ad campaigns, local lead generation, and fast conversions.",
    features: [
      "Sub-second load speed (Next.js)",
      "Instant WhatsApp & Call inquiry capture",
      "Mobile-first responsive design",
      "Google Analytics & pixel tracking ready",
    ],
  },
  {
    icon: "🏢",
    name: "Business Website",
    price: "₹14,999",
    badge: "Most Popular",
    popular: true,
    description: "Complete professional multi-page website tailored for clinics, coaching centers, retail shops, and local enterprises.",
    features: [
      "5 to 7 high-speed custom pages",
      "Google Maps local SEO setup",
      "Customer reviews & portfolio showcase",
      "Contact forms routed to WhatsApp/Email",
    ],
  },
  {
    icon: "✨",
    name: "Professional Website",
    price: "₹24,999",
    badge: "Advanced",
    description: "Custom UI/UX with smooth interactive animations, dynamic blog/CMS, appointment scheduling, and rich branding.",
    features: [
      "Bespoke luxury design system",
      "Interactive appointment booking system",
      "Dynamic content management (CMS)",
      "Technical SEO & schema markup included",
    ],
  },
  {
    icon: "🛒",
    name: "E-commerce Website",
    price: "₹39,999",
    description: "Full-scale online store with zero commissions, integrated payments, inventory management, and automated shipping.",
    features: [
      "Direct UPI, Cards, NetBanking gateway",
      "Product catalog with variants & search",
      "Automated WhatsApp order notifications",
      "Discount coupons & customer checkout",
    ],
  },
  {
    icon: "⚙️",
    name: "Custom Software Development",
    price: "₹75,000",
    badge: "Enterprise",
    description: "Tailored management software, billing POS, clinic patient records, or internal operations ERP engineered for your exact workflow.",
    features: [
      "Custom business workflow automation",
      "Thermal receipt billing & barcode scan",
      "Multi-user roles with permissions",
      "Cloud database with automated backups",
    ],
  },
  {
    icon: "📱",
    name: "Mobile App Development",
    price: "₹1,25,000",
    badge: "Android + iOS",
    description: "Native-quality mobile applications published on Google Play Store and Apple App Store with high-speed cloud sync.",
    features: [
      "Cross-platform (Flutter / React Native)",
      "Instant push notifications & alerts",
      "User authentication & biometric login",
      "Google Play & App Store publishing support",
    ],
  },
  {
    icon: "🔧",
    name: "Website Maintenance",
    price: "₹1,499",
    period: "/month",
    description: "Dedicated peace-of-mind monthly engineering care to keep your site secure, lightning-fast, and always up-to-date.",
    features: [
      "Weekly security & malware audits",
      "Regular speed & uptime monitoring",
      "Content updates & festive banners",
      "Cloud backups & priority tech support",
    ],
  },
  {
    icon: "🤖",
    name: "AI Automation",
    price: "₹15,000",
    badge: "AI Powered",
    description: "Automate repetitive customer queries, WhatsApp lead qualification, and CRM updates using custom intelligent AI bots.",
    features: [
      "24/7 intelligent WhatsApp AI auto-responder",
      "Automated lead capture into Google Sheets",
      "Customer appointment auto-scheduling",
      "Zero monthly OpenAI platform lock-ins",
    ],
  },
];

export default function Pricing() {
  const handleOpenConsultation = (serviceName: string) => {
    window.dispatchEvent(
      new CustomEvent("open-consultation", {
        detail: { topic: `${serviceName} Inquiry` },
      })
    );
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 relative bg-[#141414] text-[#F9F7E3] border-t border-white/10 overflow-hidden">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#F28D52]/10 via-[#E94C29]/10 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#F28D52]/10 border border-[#F28D52]/30 text-[#F28D52] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT &amp; FAIR PRICING • ZERO HIDDEN FEES</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F9F7E3] tracking-tight leading-tight">
            Our Services &amp; <span className="text-gradient-orange">Starting Prices</span>
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-[#F9F7E3]/75 leading-relaxed">
            Crystal-clear pricing with zero agency markups. Every project includes <strong className="text-white">100% full source code ownership</strong>, clean handoff, and direct lead developer support.
          </p>
        </div>

        {/* Quick Summary Table for Fast Comparison (Mobile-Scrollable & Desktop Responsive) */}
        <div className="mb-14 overflow-hidden rounded-2xl bg-[#1b1b1b]/90 border border-white/10 shadow-2xl backdrop-blur-md">
          <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono">
              <span className="w-2 h-2 rounded-full bg-[#F28D52] animate-pulse"></span>
              <span>Quick Rate Card Overview</span>
            </div>
            <div className="text-[11px] sm:text-xs text-[#F9F7E3]/60 font-mono">
              Fixed Milestones • No Hourly Gimmicks
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-white/[0.03] text-[#F9F7E3]/60 uppercase tracking-wider font-mono text-[11px] border-b border-white/10">
                <tr>
                  <th className="py-3 px-4 sm:px-6 font-semibold">Service</th>
                  <th className="py-3 px-4 sm:px-6 font-semibold">Starting Price</th>
                  <th className="py-3 px-4 sm:px-6 font-semibold hidden md:table-cell">Key Deliverable</th>
                  <th className="py-3 px-4 sm:px-6 text-right font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {PRICING_DATA.map((item) => (
                  <tr key={item.name} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-white flex items-center gap-2.5">
                      <span className="text-base sm:text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                          item.popular 
                            ? "bg-[#F28D52]/20 text-[#F28D52] border border-[#F28D52]/40" 
                            : "bg-white/10 text-[#F9F7E3]/70"
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6">
                      <span className="text-sm sm:text-base font-bold text-[#F28D52] font-mono">
                        {item.price}
                      </span>
                      {item.period && <span className="text-xs text-[#F9F7E3]/60">{item.period}</span>}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-[#F9F7E3]/75 hidden md:table-cell text-xs leading-relaxed">
                      {item.description}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-right">
                      <button
                        type="button"
                        onClick={() => handleOpenConsultation(item.name)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#F28D52] hover:text-[#171717] border border-white/10 text-xs font-semibold text-[#F9F7E3] transition-all cursor-pointer"
                      >
                        <span>Choose</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 8 Detailed Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_DATA.map((item) => (
            <div
              key={item.name}
              className={`relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 backdrop-blur-sm ${
                item.popular
                  ? "bg-gradient-to-b from-[#221c18] to-[#181818] border-2 border-[#F28D52] shadow-[0_8px_30px_rgba(242,141,82,0.15)] -translate-y-1"
                  : "bg-[#181818] border border-white/10 hover:border-[#F28D52]/40 hover:-translate-y-1 shadow-lg"
              }`}
            >
              {/* Optional Top Badge */}
              {item.badge && (
                <div className="absolute -top-3 right-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-md ${
                    item.popular
                      ? "bg-gradient-to-r from-[#F28D52] to-[#E94C29] text-white"
                      : "bg-[#252525] border border-white/15 text-[#F9F7E3]"
                  }`}>
                    {item.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl p-2 rounded-2xl bg-white/5 border border-white/10">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white leading-snug">
                      {item.name}
                    </h3>
                    <div className="text-[11px] text-[#F9F7E3]/60 font-mono">
                      Starting Investment
                    </div>
                  </div>
                </div>

                {/* Price Display */}
                <div className="my-4 pb-4 border-b border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white tracking-tight font-mono">
                      {item.price}
                    </span>
                    {item.period && (
                      <span className="text-xs text-[#F9F7E3]/60 font-mono">
                        {item.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-xs text-[#F9F7E3]/70 leading-relaxed min-h-[48px]">
                    {item.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 mb-6 text-xs text-[#F9F7E3]/85">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#F28D52] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={() => handleOpenConsultation(item.name)}
                  className={`w-full py-3 rounded-full font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
                    item.popular
                      ? "btn-primary-gradient text-white hover:scale-102"
                      : "bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:text-[#F28D52]"
                  }`}
                >
                  <span>Select Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/917851018751?text=Hi%20Digitaleafs!%20I%20am%20interested%20in%20${encodeURIComponent(item.name)}%20(${encodeURIComponent(item.price)}).%20Please%20share%20proposal.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/25 text-[#25D366] font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>Discuss on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Guarantee Strip */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-[#F9F7E3]/75">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F28D52] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white">100% Code Ownership</div>
              <div className="text-[11px] text-[#F9F7E3]/55">Zero vendor or platform lock-in.</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F28D52] shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white">Zero Hidden Charges</div>
              <div className="text-[11px] text-[#F9F7E3]/55">Clear milestone quote before Day 1.</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white">30-Day Tech Warranty</div>
              <div className="text-[11px] text-[#F9F7E3]/55">Free bug fixes &amp; post-launch support.</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F28D52] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white">Direct Senior Engineers</div>
              <div className="text-[11px] text-[#F9F7E3]/55">Zero junior sales reps or middlemen.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
