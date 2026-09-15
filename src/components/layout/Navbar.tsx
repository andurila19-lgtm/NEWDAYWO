"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/ui/BrandLogo";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig, getWhatsAppLink } from "@/data/siteConfig";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, lang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.packages, href: "/packages" },
    { label: t.nav.portfolio, href: "/portfolio" },
    { label: t.nav.gallery, href: "/gallery" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0D0C0D]/95 backdrop-blur-md py-2 sm:py-2.5 border-b border-[#2A2629]/60 shadow-md shadow-black/20"
            : "bg-gradient-to-b from-[#0D0C0D]/90 via-[#0D0C0D]/40 to-transparent py-2.5 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          <BrandLogo variant="navbar" />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[10px] font-medium tracking-[0.25em] uppercase transition-colors relative py-1 ${
                    isActive ? "text-[#E98B98]" : "text-[#F7F3F1]/75 hover:text-[#E98B98]"
                  }`}
                >
                  {item.label}
                  {isActive && <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#E98B98]" />}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA & Language Toggle */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5">
            <LanguageToggle />

            <Link
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-[10px] font-medium tracking-[0.22em] uppercase border border-[#E98B98]/50 text-[#F7F3F1] hover:border-[#E98B98] hover:bg-[#E98B98] hover:text-[#0D0C0D] transition-all duration-300 group"
            >
              <span>{t.nav.consultation}</span>
              <ArrowUpRight className="w-3 h-3 text-[#E98B98] group-hover:text-[#0D0C0D] transition-colors" />
            </Link>
          </div>

          {/* Mobile Right Controls: Toggle + Hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <LanguageToggle />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 -mr-1.5 text-[#F7F3F1] hover:text-[#E98B98] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0D0C0D] flex flex-col lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-between h-full px-6 pt-20 pb-8 overflow-y-auto">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[9px] tracking-[0.35em] uppercase text-[#E98B98] font-medium">
                {lang === "en" ? "NAVIGATION" : "NAVIGASI"}
              </span>
              <LanguageToggle />
            </div>
            <nav className="flex flex-col">
              {navItems.map((item, idx) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-editorial text-[16px] text-[#F7F3F1] hover:text-[#E98B98] transition-colors flex items-center justify-between border-b border-[#2A2629]/50 py-3"
                >
                  <span className="tracking-wide uppercase">{item.label}</span>
                  <span className="text-[11px] text-[#B7AAA9] font-sans">0{idx + 1}</span>
                </Link>
              ))}
              <Link
                href="/new-day-gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="font-editorial text-[14px] text-[#F3C4C9]/90 hover:text-[#E98B98] transition-colors flex items-center justify-between border-b border-[#2A2629]/50 py-3"
              >
                <span className="tracking-wide uppercase">{t.nav.exploreGallery}</span>
                <span className="text-[10px] text-[#E98B98] font-sans tracking-widest">
                  {t.nav.attire}
                </span>
              </Link>
            </nav>
          </div>

          <div className="pt-8 flex flex-col gap-4 mt-auto">
            <Link
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full h-[52px] flex items-center justify-center gap-2.5 rounded-sm overflow-hidden text-[#0D0C0D] text-[10.5px] font-semibold tracking-[0.28em] uppercase transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #E98B98 0%, #D4707F 50%, #C7616F 100%)",
              }}
            >
              <span className="relative z-10">{t.nav.consultViaWa}</span>
              <ArrowUpRight className="relative z-10 w-3.5 h-3.5 text-[#0D0C0D]/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
            <div className="flex items-center justify-between text-[10px] text-[#B7AAA9] tracking-wider pt-2">
              <span>Yogyakarta</span>
              <span>{siteConfig.instagram.handle}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
