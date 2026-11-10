import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShieldCheck, Lock, FileText, CheckCircle2, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Digitaleafs",
  description:
    "Official Privacy Policy of Digitaleafs Studio. Learn how we handle your personal data, ensure 100% confidentiality, and protect your intellectual property.",
};

export default function PrivacyPolicyPage() {
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
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Legal Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#F9F7E3] tracking-tight leading-tight">
            Privacy <span className="text-gradient-orange">Policy</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#F9F7E3]/75 max-w-3xl leading-relaxed">
            This document outlines how Digitaleafs Studio (&ldquo;Digitaleafs&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, protects, and handles your personal information, project requirements, and proprietary business data.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[#F9F7E3]/60 font-medium">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#F28D52]" />
              Last Updated: November 2026
            </span>
            <span>•</span>
            <span>Version 2.4 (Enterprise Standard)</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% Confidentiality Assured
            </span>
          </div>
        </div>

        {/* Quick Highlights Alert Card */}
        <div className="p-6 rounded-2xl bg-[#1f1f1f] border border-[#F28D52]/30 mb-12 shadow-lg">
          <h3 className="text-base font-bold text-[#F9F7E3] mb-3 flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#F28D52]" />
            <span>Key Summary &amp; Privacy Guarantees</span>
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#F9F7E3]/85">
            <li className="flex items-start gap-2">
              <span className="text-[#F28D52] font-bold">✓</span>
              <span><strong>Zero Data Selling:</strong> We never sell, rent, or trade your contact info or project details to brokers.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F28D52] font-bold">✓</span>
              <span><strong>Full Code Ownership:</strong> Your project source code, database, and assets belong 100% to you.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F28D52] font-bold">✓</span>
              <span><strong>No Spam Guarantee:</strong> We only contact you regarding your specific project inquiry or consultation request.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F28D52] font-bold">✓</span>
              <span><strong>SSL Encryption:</strong> All form submissions are transmitted securely via TLS 1.3 / SSL encryption.</span>
            </li>
          </ul>
        </div>

        {/* Structured Legal Clauses */}
        <div className="space-y-10 text-sm sm:text-base text-[#F9F7E3]/80 leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F9F7E3] flex items-center gap-2">
              <span className="text-[#F28D52]">1.</span> Information We Collect
            </h2>
            <p>
              When you visit our website (<strong>digitaleafs.com</strong>) or use our consultation forms, we collect only the information necessary to evaluate your project requirements and provide engineering solutions:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#F9F7E3]/75">
              <li><strong>Contact Information:</strong> Your name, phone number, and optional email address provided when requesting a quote or booking a developer consultation.</li>
              <li><strong>Project Requirements:</strong> Business type (e.g., Clinic, Retail, Coaching, Custom Software), estimated budget, feature descriptions, and operational requirements.</li>
              <li><strong>Technical Log Data:</strong> Non-personally identifiable technical information such as browser type, operating system, and device resolution collected automatically to optimize mobile rendering and CDN latency.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F9F7E3] flex items-center gap-2">
              <span className="text-[#F28D52]">2.</span> How We Use Your Information
            </h2>
            <p>
              The information collected is used exclusively for the following legitimate business purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#F9F7E3]/75">
              <li>Directly communicating with you regarding your website, software, or mobile application inquiry.</li>
              <li>Preparing accurate written milestone proposals, delivery timelines, and technical architecture roadmaps.</li>
              <li>Syncing consultation requests into our secure internal project tracking sheet (Google Cloud Workspace) to deliver 15-minute response times.</li>
              <li>Providing post-launch operational support, bug fixes, and warranty services.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F9F7E3] flex items-center gap-2">
              <span className="text-[#F28D52]">3.</span> Intellectual Property &amp; Non-Disclosure
            </h2>
            <p>
              We treat all business concepts, operational workflows, proprietary clinic formulas, retail trade workflows, and custom app ideas shared with Digitaleafs as strictly confidential.
            </p>
            <p>
              We do not share your business model, customer data, or internal pricing strategies with competitors or third-party entities. Upon project handover, 100% of all custom developed source code, database architectures, and graphical assets are transferred to your legal ownership.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F9F7E3] flex items-center gap-2">
              <span className="text-[#F28D52]">4.</span> Data Security &amp; Storage Protocols
            </h2>
            <p>
              We implement industry-standard technical safeguards to protect your personal and business information against unauthorized access, loss, or alteration:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#F9F7E3]/75">
              <li><strong>Encrypted Transmission:</strong> All web traffic and form submissions are secured with HTTPS and 256-bit TLS encryption.</li>
              <li><strong>Secure Cloud Infrastructure:</strong> Lead consultation data is processed via authenticated Google Apps Script Webhooks hosted in Google Cloud data centers with access restricted solely to lead engineers.</li>
              <li><strong>Zero Payment Card Storage:</strong> Client payments through UPI (Google Pay, PhonePe, Paytm) or bank transfers are processed directly through authorized banking networks. Digitaleafs never stores or asks for your ATM PIN, OTP, or CVV.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F9F7E3] flex items-center gap-2">
              <span className="text-[#F28D52]">5.</span> Third-Party Service Providers
            </h2>
            <p>
              To maintain sub-second page performance and enterprise-grade reliability, our infrastructure interfaces with trusted third-party providers:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#F9F7E3]/75">
              <li><strong>Hosting &amp; Edge CDN:</strong> Vercel Inc. and Google Cloud Platform for static asset distribution.</li>
              <li><strong>Google Workspace:</strong> For private and secure spreadsheet management of client consultation requests.</li>
            </ul>
            <p>
              These service providers process data solely on our behalf under strict confidentiality agreements and are prohibited from using your data for any other purpose.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F9F7E3] flex items-center gap-2">
              <span className="text-[#F28D52]">6.</span> Your Data Rights (Access &amp; Deletion)
            </h2>
            <p>
              You maintain full control over your personal information. At any time, you have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#F9F7E3]/75">
              <li>Request an export of all personal details or consultation history stored in our systems.</li>
              <li>Request the complete and permanent deletion of your contact records from our active sheets.</li>
              <li>Opt out of any project update notifications.</li>
            </ul>
            <p>
              To exercise any of these rights, email us at <a href="mailto:contact@digitaleafs.com" className="text-[#F28D52] underline font-medium">contact@digitaleafs.com</a>, and our team will process your request within 24 hours.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 border-t border-white/10 pt-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F9F7E3] flex items-center gap-2">
              <span className="text-[#F28D52]">7.</span> Contact &amp; Privacy Officer
            </h2>
            <p>
              If you have any questions, concerns, or feedback regarding this Privacy Policy or our data protection practices, please contact our administrative team:
            </p>
            <div className="p-5 rounded-2xl bg-[#1b1b1b] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-bold text-[#F9F7E3]">Digitaleafs Studio — Legal &amp; Compliance</div>
                <div className="text-xs text-[#F9F7E3]/60 mt-0.5">Software Engineering &amp; Web Solutions</div>
                <div className="text-xs text-[#F28D52] mt-1">Email: contact@digitaleafs.com</div>
              </div>
              <a
                href="mailto:contact@digitaleafs.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-primary-gradient text-white font-bold text-xs shadow hover:opacity-90 transition-opacity w-fit"
              >
                <Mail className="w-4 h-4" />
                <span>Email Legal Officer</span>
              </a>
            </div>
          </section>

        </div>

        {/* Footer Navigation within Document */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#F9F7E3]/50">
          <div>&copy; 2026 Digitaleafs Studio. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link href="/terms-of-service" className="hover:text-[#F28D52] transition-colors">
              Terms of Service
            </Link>
            <Link href="/support" className="hover:text-[#F28D52] transition-colors">
              Support Policy &amp; SLA
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

