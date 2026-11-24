"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight, Phone, ChevronDown, Briefcase, Rocket, Sparkles } from "lucide-react";
import { getCurrentOrUpcomingFestival, FestivalConfig } from "@/utils/festival";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const [festival, setFestival] = useState<FestivalConfig | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamic festival detection based on current client date
    setFestival(getCurrentOrUpcomingFestival());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setWorkDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "luxury-nav py-3 shadow-xl shadow-black/60"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with high-res brand image & animated luxury festive capsules */}
          <div className="flex items-center gap-2 sm:gap-3 group/festive relative">
            {/* Left Festival Icon with animated aura & sparkle */}
            {festival && (
              <div className="relative flex items-center justify-center">
                {/* Dynamic Ambient Glow Behind Icon */}
                <div 
                  className="absolute -inset-1 rounded-2xl blur-md animate-festive-aura pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${festival.accentColor || '#F28D52'}88 0%, transparent 70%)`
                  }}
                />
                
                {/* Glassmorphic Pedestal Pill */}
                <div className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-white/[0.07] hover:bg-white/[0.14] border border-[#F28D52]/40 hover:border-[#F28D52]/90 shadow-[0_4px_20px_rgba(242,141,82,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-110 cursor-pointer">
                  <span
                    role="img"
                    aria-label={festival.name}
                    title={festival.greeting}
                    className="animate-festive-flame text-base sm:text-2xl select-none"
                  >
                    {festival.leftIcon}
                  </span>
                  
                  {/* Tiny golden twinkling sparkle */}
                  <span className="absolute -top-1 -right-1 text-[9px] text-amber-300 animate-sparkle-spin pointer-events-none">
                    ✨
                  </span>
                </div>
              </div>
            )}

            {/* Brand Logo with subtle hover lift and ambient festive backlight */}
            <a href="#" className="flex items-center group relative">
              {festival && (
                <div 
                  className="absolute inset-0 blur-xl opacity-25 group-hover:opacity-50 transition-opacity pointer-events-none rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${festival.accentColor || '#F28D52'}66, #E94C29 66%)`
                  }}
                />
              )}
              <Image
                src="/img/logo.png"
                alt="Digitaleafs Logo"
                width={160}
                height={44}
                priority
                style={{ width: "auto" }}
                className="h-9 sm:h-11 object-contain transition-transform duration-300 group-hover:scale-105 relative z-10"
              />
            </a>

            {/* Right Festival Icon with animated aura & sparkle */}
            {festival && (
              <div className="relative flex items-center justify-center">
                {/* Dynamic Ambient Glow Behind Icon */}
                <div 
                  className="absolute -inset-1 rounded-2xl blur-md animate-festive-aura pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${festival.accentColor || '#F28D52'}88 0%, transparent 70%)`,
                    animationDelay: "1.4s"
                  }}
                />
                
                {/* Glassmorphic Pedestal Pill */}
                <div className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-white/[0.07] hover:bg-white/[0.14] border border-[#F28D52]/40 hover:border-[#F28D52]/90 shadow-[0_4px_20px_rgba(242,141,82,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-110 cursor-pointer">
                  <span
                    role="img"
                    aria-label={festival.name}
                    title={festival.greeting}
                    className="animate-festive-float text-base sm:text-2xl select-none"
                  >
                    {festival.rightIcon}
                  </span>
                  
                  {/* Tiny golden twinkling sparkle */}
                  <span className="absolute -bottom-1 -left-1 text-[9px] text-amber-300 animate-sparkle-spin pointer-events-none" style={{ animationDelay: "1.2s" }}>
                    ✨
                  </span>
                </div>
              </div>
            )}

            {/* Luxury Hover Card Tooltip */}
            {festival && (
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover/festive:opacity-100 transition-all duration-300 z-50 whitespace-nowrap hidden sm:block">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#1a1a1a]/95 border border-[#F28D52]/50 text-[#F9F7E3] shadow-[0_10px_25px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                  <span className="text-amber-400">✨</span>
                  <span>{festival.greeting}</span>
                  <span className="text-amber-400">✨</span>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#F9F7E3]/85">
            <a
              href="/#solutions"
              className="hover:text-[#F28D52] transition-colors duration-200 relative group py-1"
            >
              Solutions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F28D52] to-[#E94C29] transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="/#services"
              className="hover:text-[#F28D52] transition-colors duration-200 relative group py-1"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F28D52] to-[#E94C29] transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="/#pricing"
              className="hover:text-[#F28D52] transition-colors duration-200 relative group py-1"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F28D52] to-[#E94C29] transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Our Work / Our Universe Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setWorkDropdownOpen(true)}
              onMouseLeave={() => setWorkDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setWorkDropdownOpen(!workDropdownOpen)}
                className={`flex items-center gap-1.5 transition-colors duration-200 relative group py-1 cursor-pointer ${
                  workDropdownOpen ? "text-[#F28D52]" : "hover:text-[#F28D52]"
                }`}
                aria-expanded={workDropdownOpen}
              >
                <span>Our Work</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    workDropdownOpen ? "rotate-180 text-[#F28D52]" : "text-[#F9F7E3]/60"
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#F28D52] to-[#E94C29] transition-all duration-300 ${
                    workDropdownOpen ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>

              {/* Dropdown Menu Box */}
              {workDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 animate-fadeIn">
                  <div className="w-72 rounded-2xl bg-[#1b1b1b]/95 backdrop-blur-2xl border border-white/10 p-2 shadow-2xl shadow-black/90 space-y-1">
                    {/* Header Label: Our Universe */}
                    <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-[#F28D52] font-bold flex items-center justify-between border-b border-white/5">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#F28D52]" />
                        <span>Our Universe</span>
                      </div>
                      <span className="text-[9px] text-[#F9F7E3]/40">Explore</span>
                    </div>

                    {/* Option 1: Client Projects */}
                    <a
                      href="/#case-studies"
                      onClick={() => setWorkDropdownOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#F28D52]/10 border border-[#F28D52]/30 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:scale-105 transition-transform">
                        <Briefcase className="w-4 h-4 text-[#F28D52]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover/item:text-[#F28D52] transition-colors">
                          Projects &amp; Case Studies
                        </div>
                        <div className="text-[11px] text-[#F9F7E3]/60 leading-tight mt-0.5">
                          Delivered clinic, retail &amp; web apps
                        </div>
                      </div>
                    </a>

                    {/* Option 2: In-House Products */}
                    <a
                      href="/#products"
                      onClick={() => setWorkDropdownOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:scale-105 transition-transform">
                        <Rocket className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-white group-hover/item:text-[#F28D52] transition-colors flex items-center gap-1.5">
                          <span>In-House Products</span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">
                            Live
                          </span>
                        </div>
                        <div className="text-[11px] text-[#F9F7E3]/60 leading-tight mt-0.5">
                          Greetingsly &amp; proprietary platforms
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href="/#blog"
              className="hover:text-[#F28D52] transition-colors duration-200 relative group py-1"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F28D52] to-[#E94C29] transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="/#faq"
              className="hover:text-[#F28D52] transition-colors duration-200 relative group py-1"
            >
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F28D52] to-[#E94C29] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://wa.me/917851018751?text=Hi%20Digitaleafs!%20I%20want%20to%20discuss%20a%20website%20%2F%20app%20project."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#25D366]">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.96.536 1.761.813 2.796.813 3.179 0 5.767-2.587 5.767-5.766.001-3.187-2.575-5.77-6.767-6.001zm0 10.453c-.917 0-1.636-.26-2.392-.713l-.17-.101-1.579.414.421-1.54-.112-.178c-.495-.788-.756-1.564-.755-2.57.001-2.585 2.104-4.688 4.69-4.688 2.584 0 4.687 2.103 4.688 4.688 0 2.586-2.104 4.689-4.791 4.688zm2.569-3.504c-.141-.07-.832-.41-.961-.457-.129-.047-.224-.07-.318.07-.094.141-.365.457-.448.551-.082.094-.165.106-.306.035-.141-.07-.597-.22-1.137-.701-.42-.375-.704-.838-.786-.979-.082-.141-.009-.217.062-.287.063-.063.141-.165.212-.247.071-.082.094-.141.141-.235.047-.094.024-.176-.012-.247-.035-.07-.318-.765-.436-1.047-.115-.274-.233-.237-.318-.241l-.271-.005c-.094 0-.247.035-.376.176-.129.141-.494.482-.494 1.176s.506 1.365.576 1.459c.071.094 1.002 1.53 2.428 2.146.339.147.604.235.811.301.341.108.652.093.898.056.274-.041.844-.345.963-.679.119-.334.119-.62.083-.679-.036-.059-.13-.094-.271-.165z"/>
              </svg>
              <span>WhatsApp</span>
            </a>

            <a
              href="tel:+917851018751"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-[#F9F7E3] hover:text-[#F28D52] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F28D52]" />
              <span>+91 7851018751</span>
            </a>

            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(new CustomEvent("open-consultation"));
              }}
              className="btn-primary-gradient px-4.5 py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer shadow-lg hover:scale-105 transition-all"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(new CustomEvent("open-consultation"));
              }}
              className="sm:hidden px-3 py-1.5 rounded-full bg-gradient-to-r from-[#F28D52] to-[#E94C29] text-white font-bold text-xs"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#262626] border border-[#F9F7E3]/15 text-[#F9F7E3] hover:text-[#F28D52] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden luxury-nav border-b border-[#F28D52]/20 px-6 pt-4 pb-6 mt-3 space-y-4">
          <div className="flex flex-col space-y-2">
            <a
              href="/#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-[#F9F7E3] hover:text-[#F28D52] py-2 transition-colors border-b border-white/5"
            >
              Solutions
            </a>

            <a
              href="/#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-[#F9F7E3] hover:text-[#F28D52] py-2 transition-colors border-b border-white/5"
            >
              Services
            </a>

            <a
              href="/#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-[#F9F7E3] hover:text-[#F28D52] py-2 transition-colors border-b border-white/5"
            >
              Pricing
            </a>

            {/* Mobile Expandable Our Work / Universe Accordion */}
            <div className="border-b border-white/5 py-1">
              <button
                type="button"
                onClick={() => setMobileWorkOpen(!mobileWorkOpen)}
                className="w-full flex items-center justify-between text-base font-semibold text-[#F9F7E3] hover:text-[#F28D52] py-2 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span>Our Work</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F28D52]/15 text-[#F28D52] border border-[#F28D52]/30">
                    Universe
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-[#F28D52] transition-transform duration-200 ${
                    mobileWorkOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileWorkOpen && (
                <div className="pl-2 pr-1 pb-2 pt-1 space-y-2">
                  <a
                    href="/#case-studies"
                    onClick={() => {
                      setMobileWorkOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#F28D52]/10 border border-[#F28D52]/30 flex items-center justify-center text-[#F28D52] shrink-0">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Client Projects</div>
                      <div className="text-[11px] text-[#F9F7E3]/60">Case studies &amp; live deliveries</div>
                    </div>
                  </a>

                  <a
                    href="/#products"
                    onClick={() => {
                      setMobileWorkOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <Rocket className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-white flex items-center gap-2">
                        <span>In-House Products</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">
                          Live
                        </span>
                      </div>
                      <div className="text-[11px] text-[#F9F7E3]/60">Greetingsly &amp; digital platforms</div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <a
              href="/#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-[#F9F7E3] hover:text-[#F28D52] py-2 transition-colors border-b border-white/5"
            >
              Blog
            </a>

            <a
              href="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-[#F9F7E3] hover:text-[#F28D52] py-2 transition-colors border-b border-white/5"
            >
              FAQ
            </a>
          </div>

          <div className="pt-3 flex flex-col gap-3">
            <a
              href="https://wa.me/917851018751?text=Hi%20Digitaleafs!%20I%20want%20to%20discuss%20a%20website%20%2F%20app%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-emerald-300 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#25D366]">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.96.536 1.761.813 2.796.813 3.179 0 5.767-2.587 5.767-5.766.001-3.187-2.575-5.77-6.767-6.001zm0 10.453c-.917 0-1.636-.26-2.392-.713l-.17-.101-1.579.414.421-1.54-.112-.178c-.495-.788-.756-1.564-.755-2.57.001-2.585 2.104-4.688 4.69-4.688 2.584 0 4.687 2.103 4.688 4.688 0 2.586-2.104 4.689-4.791 4.688zm2.569-3.504c-.141-.07-.832-.41-.961-.457-.129-.047-.224-.07-.318.07-.094.141-.365.457-.448.551-.082.094-.165.106-.306.035-.141-.07-.597-.22-1.137-.701-.42-.375-.704-.838-.786-.979-.082-.141-.009-.217.062-.287.063-.063.141-.165.212-.247.071-.082.094-.141.141-.235.047-.094.024-.176-.012-.247-.035-.07-.318-.765-.436-1.047-.115-.274-.233-.237-.318-.241l-.271-.005c-.094 0-.247.035-.376.176-.129.141-.494.482-.494 1.176s.506 1.365.576 1.459c.071.094 1.002 1.53 2.428 2.146.339.147.604.235.811.301.341.108.652.093.898.056.274-.041.844-.345.963-.679.119-.334.119-.62.083-.679-.036-.059-.13-.094-.271-.165z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="tel:+917851018751"
              className="w-full text-center py-2.5 rounded-full bg-white/5 border border-white/10 text-[#F9F7E3] hover:text-[#F28D52] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F28D52]" />
              <span>Call: +91 7851018751</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent("open-consultation"));
              }}
              className="w-full text-center py-3 rounded-full btn-primary-gradient text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
