import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, FileText, CheckCircle2, ShieldCheck, Mail, Clock, Code, Award, AlertOctagon, UserX, Ban } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service — Digitaleafs Studio",
  description:
    "Official Terms of Service and Client Agreement of Digitaleafs Studio. Transparent terms governing fixed-price milestones, source code transfer, scope management, and developer protections.",
};

export default function TermsOfServicePage() {
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
            <FileText className="w-3.5 h-3.5" />
            <span>Official Client Service Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#F9F7E3] tracking-tight leading-tight">
            Terms of <span className="text-gradient-orange">Service</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#F9F7E3]/75 max-w-3xl leading-relaxed">
            Welcome to Digitaleafs Studio (&ldquo;Digitaleafs&rdquo;, &ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). These Terms of Service constitute a legally binding agreement between you (&ldquo;Client&rdquo;, &ldquo;Customer&rdquo;) and Digitaleafs governing all custom software engineering, website development, application delivery, and support engagements.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[#F9F7E3]/60 font-medium">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#F28D52]" />
              Effective Date: November 2026
            </span>
            <span>•</span>
            <span>Edition: 4.0 (Enterprise Protective Framework)</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Legally Verified &amp; Enforceable
            </span>
          </div>
        </div>

        {/* Quick Highlights Alert Card */}
        <div className="p-6 rounded-2xl bg-[#1f1f1f] border border-[#F28D52]/30 mb-12 shadow-lg">
          <h3 className="text-base font-bold text-[#F9F7E3] mb-3 flex items-center gap-2">
            <Award className="w-4 h-4 text-[#F28D52]" />
            <span>Core Principles &amp; Operational Governance</span>
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#F9F7E3]/85">
            <li className="flex items-start gap-2">
              <span className="text-[#F28D52] font-bold">✓</span>
              <span><strong>100% Code Ownership:</strong> Transferred in full upon 100% final invoice clearance.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F28D52] font-bold">✓</span>
              <span><strong>Fixed Scope &amp; No Scope Creep:</strong> Any changes outside written proposal are billed separately.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F28D52] font-bold">✓</span>
              <span><strong>Developer Work Hours:</strong> Official support Mon–Sat, 10:00 AM – 7:00 PM IST.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F28D52] font-bold">✓</span>
              <span><strong>Anti-Tampering Warranty:</strong> 30-day warranty instantly voids if unauthorized third parties modify code.</span>
            </li>
          </ul>
        </div>

        {/* Structured Legal Clauses */}
        <div className="space-y-10 text-sm sm:text-base text-[#F9F7E3]/80 leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F9F7E3] flex items-center gap-2">
              <span className="text-[#F28D52]">1.</span> Scope of Work &amp; Anti-Scope-Creep Policy
            </h2>
            <p>
              All software engineering, design, and deployment deliverables are strictly bounded by the formal written quotation, Statement of Work (SOW), or milestone invoice agreed upon before project commencement.
            </p>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs sm:text-sm">
              <p className="font-semibold text-[#F9F7E3]">Strict Scope Governance Rules:</p>
              <ul className="list-disc pl-5 space-y-1 text-[#F9F7E3]/75">
                <li><strong>Scope Freeze:</strong> Once design mockups and feature specifications are approved during the discovery phase, the scope is considered frozen.</li>
                <li><strong>Additional Feature Requests:</strong> Any subsequent requests for extra pages, complex workflows, revised database architectures, or redesigns shall be treated as &ldquo;Out-of-Scope Change Orders&rdquo; and will be quoted separately with associated fees and extended timelines.</li>
                <li><strong>No Implied Inclusions:</strong> Unless explicitly written in the proposal, services such as third-party ad campaign management, custom copywriting, proprietary stock video licensing, or dedicated 24/7 server monitoring are not included in base development packages.</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F9F7E3] flex items-center gap-2">
              <span className="text-[#F28D52]">2.</span> Milestone Payments &amp; Default Protection
            </h2>
            <p>
              Digitaleafs operates on a structured, fixed-price milestone model starting at ₹9,999. To safeguard developers&apos; time and engineering resources, the following financial rules apply:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#F9F7E3]/75">
              <li><strong>Non-Refundable Discovery Deposit:</strong> The initial project kickoff deposit (typically 40%–50%) is non-refundable once development or architectural planning has commenced.</li>
              <li><strong>Staging Approval &amp; Release:</strong> Clients are provided live staging preview links. Approval of the staging build constitutes acceptance of visual UI, responsiveness, and primary features.</li>
              <li><strong>Work Suspension on Delayed Payment:</strong> If any scheduled milestone invoice is overdue by more than 5 business days, Digitaleafs reserves the absolute right to suspend all active development, pause staging server instances, and postpone deployment dates without liability.</li>
              <li><strong>Zero Handover Without Full Clearance:</strong> Under no circumstance will production server administrative credentials, live DNS pointing, or raw Git repository push rights be released until the final invoice is paid and settled in full.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F9F7E3] flex items-center gap-2">
              <span className="text-[#F28D52]">3.</span> Intellectual Property Rights &amp; Code Transfer
            </h2>
            <p>
              We guarantee 100% client code ownership, subject to complete financial clearance:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#F9F7E3]/75">
              <li><strong>Ownership Condition:</strong> Full intellectual property rights in the custom source code, unique layouts, and project database schemas developed specifically for the Client pass to the Client <em>only upon receipt of 100% full and final payment</em>.</li>
              <li><strong>Core Libraries &amp; Scaffolding:</strong> Digitaleafs retains ownership of its proprietary internal boilerplates, developer tools, build pipelines, and general utility routines. The Client is granted an irrevocable, royalty-free, perpetual license to use, modify, and host such underlying routines as part of their delivered product.</li>
              <li><strong>Portfolio Demonstration:</strong> Digitaleafs reserves the right to display the completed public visual interface, logo, and a summary case study in its agency portfolio, marketing reels, and pitch decks unless the Client has executed a separate paid Non-Disclosure Agreement (NDA).</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F9F7E3] flex items-center gap-2">
              <span className="text-[#F28D52]">4.</span> Delivery Timelines &amp; Client Dependency Clause
            </h2>
            <p>
              Estimated delivery windows (e.g. 5–7 days for websites, 10–14 days for custom apps) are contingent upon active, timely collaboration from the Client:
            </p>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs sm:text-sm">
              <p className="font-semibold text-[#F9F7E3]">Client Dependency Rules:</p>
              <ul className="list-disc pl-5 space-y-1 text-[#F9F7E3]/75">
                <li><strong>Asset Submission:</strong> Delivery timelines begin only after all mandatory client assets (high-res logos, brand color guidelines, service lists, copy, and external API credentials) are submitted in full.</li>
                <li><strong>Automatic Timeline Extension:</strong> If the Client delays feedback, staging reviews, or content submissions by &gt; 3 days, the final project deadline shall automatically extend by the equivalent duration plus standard sprint re-scheduling time.</li>
                <li><strong>Zero Delay Penalties:</strong> Digitaleafs shall not be held liable for any commercial losses, marketing campaign delays, or business opportunities missed as a result of client-induced project delays.</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F9F7E3] flex items-center gap-2">
              <span className="text-[#F28D52]">5.</span> 30-Day Technical Warranty &amp; Anti-Tampering Rules
            </h2>
            <p>
              Every delivered project is backed by our standard 30-day post-launch technical warranty covering bug fixes and operational stabilization for the delivered scope.
            </p>
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30 text-xs sm:text-sm space-y-2">
              <div className="flex items-center gap-2 text-red-400 font-bold">
                <AlertOctagon className="w-4 h-4" />
                <span>Conditions That Instantly VOID the 30-Day Warranty:</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-[#F9F7E3]/80">
                <li><strong>Unauthorized Code Modification:</strong> Any edit, script injection, or file replacement made to the source code by the Client, the Client&apos;s internal IT staff, or third-party freelancers immediately voids all warranty obligations.</li>
                <li><strong>Server &amp; DNS Tampering:</strong> Alteration of production environment variables, database indexes, SSL configurations, or hosting server access keys without prior written notice to Digitaleafs.</li>
                <li><strong>Third-Party Outages:</strong> Downtime or malfunctions caused by hosting provider cloud outages (AWS, Vercel, Hostinger), external API updates (Google Maps API changes, WhatsApp API deprecation), or domain expiry.</li>
                <li><strong>Paid Recovery:</strong> Restoring or repairing software that has been broken due to client tampering will be billed as an emergency service at our standard hourly developer rate.</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F9F7E3] flex items-center gap-2">
              <span className="text-[#F28D52]">6.</span> Developer Working Hours &amp; Anti-Harassment Policy
            </h2>
            <p>
              Digitaleafs strictly protects the dignity, mental wellbeing, and work-life balance of its engineering team, developers, and project managers:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#F9F7E3]/75">
              <li><strong>Official Business Hours:</strong> All engineering operations, communications, phone calls, and reviews are conducted between <strong>10:00 AM and 7:00 PM IST, Monday through Saturday</strong> (excluding national holidays).</li>
              <li><strong>No Midnight / Off-Hour Demands:</strong> Calls, messages, or emails sent outside business hours will be reviewed on the next regular business morning. Non-emergency out-of-hours calls will not be entertained.</li>
              <li><strong>Zero-Tolerance Harassment Policy:</strong> Any abusive language, verbal hostility, threats, or unreasonable harassment directed at our developers or team members will result in immediate suspension of communication and may lead to immediate contract termination without refund.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F9F7E3] flex items-center gap-2">
              <span className="text-[#F28D52]">7.</span> Non-Solicitation of Developers &amp; Employees
            </h2>
            <p>
              The Client explicitly covenants and agrees that during the term of the project and for a period of <strong>twenty-four (24) months</strong> following project delivery:
            </p>
            <p className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-[#F9F7E3]/80">
              The Client shall not, directly or indirectly, solicit, entice, recruit, hire, or engage as an employee, contractor, or freelancer any developer, designer, or engineer of Digitaleafs who worked on the Client&apos;s project, without the express written permission of Digitaleafs and payment of a standard placement fee equal to 100% of the individual&apos;s annual compensation.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F9F7E3] flex items-center gap-2">
              <span className="text-[#F28D52]">8.</span> Absolute Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#F9F7E3]/75">
              <li><strong>Cap on Damages:</strong> In no event shall the total aggregate liability of Digitaleafs, its directors, developers, or affiliates for any claim arising out of or related to this agreement exceed the total amount actually paid by the Client to Digitaleafs under the specific project invoice in question.</li>
              <li><strong>No Indirect / Consequential Damages:</strong> Digitaleafs shall not be liable for any lost profits, lost sales, reputational damage, business interruption, or loss of proprietary data, regardless of whether Digitaleafs was advised of the possibility of such damages.</li>
              <li><strong>Content Indemnification:</strong> The Client assumes full legal responsibility and agrees to indemnify Digitaleafs against any copyright, trademark, slander, or regulatory liability arising from text, images, trademarks, or business claims provided by the Client.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="space-y-3 border-t border-white/10 pt-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F9F7E3] flex items-center gap-2">
              <span className="text-[#F28D52]">9.</span> Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              This agreement shall be governed by, interpreted, and construed exclusively under the laws of the Republic of India. In the event of any technical or commercial dispute, the parties agree to resolve the matter first through informal mediation with our lead engineering directors. Any formal litigation shall be subject to the exclusive jurisdiction of the competent courts of India.
            </p>
            <div className="mt-4 p-5 rounded-2xl bg-[#1b1b1b] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-bold text-[#F9F7E3]">Official Legal &amp; Contract Inquiries</div>
                <div className="text-xs text-[#F9F7E3]/60 mt-0.5">Digitaleafs Studio Management &amp; Legal Desk</div>
                <div className="text-xs text-[#F28D52] mt-1">Email: contact@digitaleafs.com</div>
              </div>
              <a
                href="mailto:contact@digitaleafs.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-primary-gradient text-white font-bold text-xs shadow hover:opacity-90 transition-opacity w-fit"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Legal Desk</span>
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
