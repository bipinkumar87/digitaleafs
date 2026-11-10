import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Headphones, Clock, CheckCircle2, ShieldCheck, Mail, AlertTriangle, FileCode, MessageSquare, AlertOctagon, HeartHandshake, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Support Policy & SLA — Digitaleafs Studio",
  description:
    "Official Customer Support, SLA & Incident Management Framework of Digitaleafs Studio. Developer-backed response protocols, working hours, 30-day warranty, and operational boundaries.",
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[#171717] text-[#F9F7E3] selection:bg-[#E94C29] selection:text-white font-sans">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#171717]/90 backdrop-blur-md border-b border-white/10 py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/img/logo.png"
              alt="Digitaleafs Logo"
              width={140}
              height={38}
              style={{ width: "auto" }}
              className="h-8 object-contain"
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-semibold text-[#F9F7E3] hover:text-[#F28D52] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Documentation Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Document Header */}
        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#F28D52]/10 border border-[#F28D52]/30 text-[#F28D52] mb-4">
            <Headphones className="w-3.5 h-3.5" />
            <span>Developer Support &amp; SLA Framework</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#F9F7E3] tracking-tight leading-tight">
            Customer Support &amp; <span className="text-gradient-orange">SLA Policy</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#F9F7E3]/75 max-w-3xl leading-relaxed">
            Digitaleafs delivers direct senior developer support for all custom web and software implementations. This document defines our official Service Level Agreements (SLA), working hours, warranty boundaries, and fair-use operational policies designed to protect both client investments and developer wellbeing.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[#F9F7E3]/60 font-medium">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#F28D52]" />
              Official Support Window: Mon – Sat (10:00 AM – 7:00 PM IST)
            </span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Direct Lead Engineer Access
            </span>
            <span>•</span>
            <span className="text-amber-300 font-semibold flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5" /> Anti-Harassment Enforced
            </span>
          </div>
        </div>

        {/* Quick Contact & Escalation Box */}
        <div className="p-6 rounded-2xl bg-[#1f1f1f] border border-[#F28D52]/30 mb-12 shadow-lg">
          <h3 className="text-base font-bold text-[#F9F7E3] mb-4 flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#F28D52]" />
            <span>Official Support &amp; Communication Channels</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-[#161616] border border-white/5 space-y-1">
              <div className="text-xs text-[#F9F7E3]/60 uppercase tracking-wider font-mono">Primary Engineering Support Email</div>
              <div className="font-bold text-[#F28D52] text-sm sm:text-base">contact@digitaleafs.com</div>
              <div className="text-[11px] text-[#F9F7E3]/50">Monitored during business hours (10 AM–7 PM IST). Priority routing for verified clients.</div>
            </div>

            <div className="p-4 rounded-xl bg-[#161616] border border-white/5 space-y-1">
              <div className="text-xs text-[#F9F7E3]/60 uppercase tracking-wider font-mono">Emergency Critical Outage Desk</div>
              <div className="font-bold text-white text-sm sm:text-base">Subject: [URGENT OUTAGE] - Client Name</div>
              <div className="text-[11px] text-[#F9F7E3]/50">Automated on-call developer paging for live website crashes and payment drops.</div>
            </div>
          </div>
        </div>

        {/* Structured Support Clauses & SLA Matrix */}
        <div className="space-y-10 text-sm sm:text-base text-[#F9F7E3]/80 leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F9F7E3] flex items-center gap-2">
              <span className="text-[#F28D52]">1.</span> Direct-to-Engineer Communication Model
            </h2>
            <p>
              Unlike conventional agencies that force clients through non-technical customer care executives, Digitaleafs connects you directly with senior full-stack software engineers who built your system.
            </p>
            <p>
              To maintain high engineering focus, developers communicate via official written channels (Email &amp; Scheduled Staging Calls). Unscheduled phone calls disrupt active code compilation and testing, hence all inquiries must begin with a written ticket via <strong className="text-white">contact@digitaleafs.com</strong>.
            </p>
          </section>

          {/* Section 2: SLA Response Time Matrix */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F9F7E3] flex items-center gap-2">
              <span className="text-[#F28D52]">2.</span> Incident Severity &amp; SLA Response Matrix
            </h2>
            <p>
              Support tickets are triaged based on severity. The following response times apply during <strong>Official Business Hours (10:00 AM – 7:00 PM IST, Monday through Saturday)</strong>:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-white/10 rounded-2xl overflow-hidden text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#1f1f1f] text-white font-bold border-b border-white/10">
                    <th className="p-3.5 sm:p-4">Severity Tier</th>
                    <th className="p-3.5 sm:p-4">Incident Description</th>
                    <th className="p-3.5 sm:p-4">First Response (Business Hours)</th>
                    <th className="p-3.5 sm:p-4">Resolution Target (Codebase Issues)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="bg-[#181818]/60 hover:bg-[#1f1f1f]/50">
                    <td className="p-3.5 sm:p-4 font-bold text-red-400">Tier 1: Critical</td>
                    <td className="p-3.5 sm:p-4">Total production website down, payment webhook server crash, database connectivity failure.</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-white">Within 15 Mins</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-emerald-400">Under 2 Hours</td>
                  </tr>
                  <tr className="bg-[#181818]/30 hover:bg-[#1f1f1f]/50">
                    <td className="p-3.5 sm:p-4 font-bold text-[#F28D52]">Tier 2: Major</td>
                    <td className="p-3.5 sm:p-4">Specific functional defect (e.g. consultation form failing, broken mobile navigation).</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-white">Within 1 Hour</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-emerald-400">Same Day (4 – 8 Business Hours)</td>
                  </tr>
                  <tr className="bg-[#181818]/60 hover:bg-[#1f1f1f]/50">
                    <td className="p-3.5 sm:p-4 font-bold text-amber-300">Tier 3: Moderate</td>
                    <td className="p-3.5 sm:p-4">Admin dashboard guidance, minor CSS cosmetic tweaks, photo/text upload assistance.</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-white">Within 3 Hours</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-emerald-400">24 Business Hours</td>
                  </tr>
                  <tr className="bg-[#181818]/30 hover:bg-[#1f1f1f]/50">
                    <td className="p-3.5 sm:p-4 font-bold text-blue-300">Tier 4: General</td>
                    <td className="p-3.5 sm:p-4">Feature change requests, architecture inquiries, additional module proposals.</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-white">Same Business Day</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-emerald-400">Separate Change Order</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* SLA Exclusion Disclaimer */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-[#F9F7E3]/70 space-y-1">
              <span className="font-bold text-[#F9F7E3]">Important SLA Exclusions:</span>
              <p>
                Resolution targets apply strictly to defects in the code authored and delivered by Digitaleafs. Resolution targets <strong>do not apply</strong> to global cloud infrastructure outages (e.g. AWS, Vercel, Cloudflare, Google Cloud Platform downtime), third-party API deprecations (e.g. WhatsApp / Meta policy shifts, bank payment gateway downtime), or client-side ISP connectivity issues.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F9F7E3] flex items-center gap-2">
              <span className="text-[#F28D52]">3.</span> 30-Day Free Post-Launch Technical Warranty
            </h2>
            <p>
              Every custom software delivery is protected by our standard <strong>30-Day Post-Launch Technical Warranty</strong>:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm mt-3">
              <div className="p-4 rounded-xl bg-[#1a1a1a] border border-emerald-500/20 space-y-2">
                <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Covered Under Free Warranty
                </div>
                <ul className="list-disc pl-4 space-y-1 text-[#F9F7E3]/70">
                  <li>Fixing software bugs or rendering anomalies in delivered code.</li>
                  <li>Cross-browser compatibility issues (Chrome, Safari, iOS, Android).</li>
                  <li>Initial DNS domain linkage and SSL certificate verification.</li>
                  <li>One comprehensive virtual walkthrough on system operation.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#1a1a1a] border border-red-500/20 space-y-2">
                <div className="font-bold text-red-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" /> Excluded (Billable Separately)
                </div>
                <ul className="list-disc pl-4 space-y-1 text-[#F9F7E3]/70">
                  <li>New feature additions, new pages, or post-approval redesigns.</li>
                  <li>Client content updates (adding new products, blogs, price changes).</li>
                  <li>Third-party domain renewal, hosting bills, or external API costs.</li>
                  <li>Repairing code broken by unauthorized client/third-party edits.</li>
                </ul>
              </div>
            </div>

            {/* Instant Warranty Void Rule */}
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30 text-xs text-[#F9F7E3]/80 space-y-1">
              <span className="font-bold text-red-400 flex items-center gap-1">
                <AlertOctagon className="w-4 h-4" /> Zero-Tampering Rule (Warranty Invalidation):
              </span>
              <p>
                If the Client or any third-party developer modifies the production repository, alters server environment variables, or runs unapproved database scripts during the 30-day warranty, <strong>the warranty is instantly and permanently voided</strong>. Any remediation work thereafter shall be charged at standard emergency hourly rates.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F9F7E3] flex items-center gap-2">
              <span className="text-[#F28D52]">4.</span> Developer Wellbeing &amp; Anti-Harassment Safeguards
            </h2>
            <p>
              Digitaleafs maintains a strict code of mutual respect and professional dignity for all engineering, design, and operations staff:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#F9F7E3]/75">
              <li><strong>Boundaries of Communication:</strong> Developers are not on-call 24 hours a day. Messages or calls received after 7:00 PM IST or on Sundays will be addressed at the start of the next business working day.</li>
              <li><strong>Zero-Tolerance Abuse Policy:</strong> Profanity, threatening language, personal verbal abuse, or derogatory remarks directed towards our engineers, developers, or support representatives will result in immediate termination of the ticket and escalation to company legal counsel.</li>
              <li><strong>Fair Resolution:</strong> We are committed to solving technical problems with calm, objective engineering excellence. Professional, constructive dialogue leads to the fastest bug resolution.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F9F7E3] flex items-center gap-2">
              <span className="text-[#F28D52]">5.</span> Post-Warranty On-Demand Maintenance
            </h2>
            <p>
              Once your 30-day warranty expires, you have full ownership of your software with zero compulsory monthly fees:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#F9F7E3]/75">
              <li><strong>Zero Monthly Lock-In:</strong> Your website or application continues running uninterrupted without any ongoing fees to Digitaleafs.</li>
              <li><strong>On-Demand Sprint Retainers:</strong> Whenever you need new features, festive landing pages, or database upgrades, hire our lead developers for fixed milestone sprints without recurring contracts.</li>
              <li><strong>Emergency Ad-Hoc Fixes:</strong> Available on a transparent hourly developer billing basis.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 border-t border-white/10 pt-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F9F7E3] flex items-center gap-2">
              <span className="text-[#F28D52]">6.</span> Official Ticket Submission Protocol
            </h2>
            <p>
              To ensure your request is routed to the responsible engineer immediately, please send an email with your Project ID, brief bug description, and screenshots:
            </p>
            <div className="p-5 rounded-2xl bg-[#1b1b1b] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-bold text-[#F9F7E3]">Digitaleafs Engineering Support Desk</div>
                <div className="text-xs text-[#F9F7E3]/60 mt-0.5">Direct Lead Developer Access • Mon–Sat, 10:00 AM – 7:00 PM IST</div>
                <div className="text-xs text-[#F28D52] mt-1">Email: contact@digitaleafs.com</div>
              </div>
              <a
                href="mailto:contact@digitaleafs.com?subject=Support%20Ticket%20-%20Digitaleafs%20Client"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-primary-gradient text-white font-bold text-xs shadow hover:opacity-90 transition-opacity w-fit"
              >
                <Mail className="w-4 h-4" />
                <span>Submit Support Ticket</span>
              </a>
            </div>
          </section>

        </div>

        {/* Footer Navigation within Document */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#F9F7E3]/50">
          <div>&copy; 2026 Digitaleafs Studio. All rights reserved. Protective Enterprise Edition.</div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#F28D52] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#F28D52] transition-colors">
              Terms of Service
            </Link>
            <Link href="/" className="hover:text-[#F28D52] transition-colors">
              Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
