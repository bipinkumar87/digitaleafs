"use client";

import Image from "next/image";
import { Mail } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-[#F9F7E3]/10 pt-20 pb-12 text-[#F9F7E3]/70 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#F9F7E3]/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <Image
                src="/img/logo.png"
                alt="Digitaleafs Logo"
                width={160}
                height={44}
                style={{ width: "auto" }}
                className="h-10 object-contain"
              />
            </a>
            <p className="text-xs sm:text-sm text-[#F9F7E3]/75 max-w-sm leading-relaxed">
              We engineer custom high-converting websites, fast Android &amp; iOS mobile apps, and business management software for local small businesses, clinics, retail shops, and coaching centers.
            </p>

            <div className="flex flex-col gap-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-white">
                <Mail className="w-4 h-4 text-[#E94C29]" />
                <a href="mailto:contact@digitaleafs.com" className="hover:text-[#F28D52] transition-colors">
                  contact@digitaleafs.com
                </a>
              </div>
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#solutions" className="hover:text-[#F28D52] transition-colors">
                  🏥 Clinics &amp; Doctors
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#F28D52] transition-colors">
                  🛍️ Retail &amp; Supermarkets
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#F28D52] transition-colors">
                  📚 Coaching Centers
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#F28D52] transition-colors">
                  🏢 Local Businesses &amp; Cafés
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#F28D52] transition-colors">
                  ⚡ Custom Android Apps
                </a>
              </li>
            </ul>
          </div>

          {/* Services & Tools */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#products" className="hover:text-[#F28D52] transition-colors flex items-center gap-1.5">
                  <span>Our Products</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#F28D52]/20 text-[#F28D52] font-semibold">New</span>
                </a>
              </li>
              <li>
                <a
                  href="https://greetingsly.digitaleafs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F28D52] transition-colors text-white/90"
                >
                  💌 Greetingsly (Live)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F28D52] transition-colors">
                  All Services
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-[#F28D52] transition-colors">
                  Blog &amp; Insights
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F28D52] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Consultation CTA */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Get In Touch
            </h4>
            <p className="text-xs text-[#F9F7E3]/70 mb-4 leading-relaxed">
              Have an idea or need a custom web / app proposal? Speak directly with our developers.
            </p>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("open-consultation"))}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-primary-gradient text-white font-bold text-xs shadow hover:scale-105 transition-all cursor-pointer"
            >
              <span>Get Free Consultation →</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F9F7E3]/50 gap-4">
          <div>
            &copy; 2026 Digitaleafs Studio. Designed for Excellence — Modern luxury · Elegant · Premium technology.
          </div>
          <div className="flex items-center gap-6">
            <a href="#solutions" className="hover:text-[#F28D52] transition-colors">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-[#F28D52] transition-colors">
              Terms of Service
            </a>
            <a href="#contact" className="hover:text-[#F28D52] transition-colors">
              Support
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
