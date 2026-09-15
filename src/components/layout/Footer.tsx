"use client";

import Link from "next/link";
import BrandLogo from "@/components/ui/BrandLogo";
import { MessageCircle, MapPin, ArrowUpRight, Clock, Star } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig, getWhatsAppLink } from "@/data/siteConfig";

export default function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className="bg-[#0D0C0D] border-t border-[#2A2629] text-[#F7F3F1]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* ========================================================= */}
        {/* MOBILE VIEW (< md): ULTRA-MINIMALIST & EDITORIAL          */}
        {/* ========================================================= */}
        <div className="md:hidden py-10 flex flex-col items-center text-center space-y-6">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center">
            <BrandLogo variant="navbar" />
            <p className="text-xs text-[#E98B98] italic font-light mt-3 max-w-xs">
              &ldquo;{lang === "en" ? siteConfig.taglineEn : siteConfig.tagline}&rdquo;
            </p>
          </div>

          {/* Minimal Inline Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-[#B7AAA9] pt-1">
            <Link href="/about" className="hover:text-[#E98B98] transition-colors">
              {t.nav.about}
            </Link>
            <span className="text-[#2A2629]">•</span>
            <Link href="/services" className="hover:text-[#E98B98] transition-colors">
              {t.nav.services}
            </Link>
            <span className="text-[#2A2629]">•</span>
            <Link href="/packages" className="hover:text-[#E98B98] transition-colors">
              {t.nav.packages}
            </Link>
            <span className="text-[#2A2629]">•</span>
            <Link href="/portfolio" className="hover:text-[#E98B98] transition-colors">
              {t.nav.portfolio}
            </Link>
            <span className="text-[#2A2629]">•</span>
            <Link href="/new-day-gallery" className="text-[#E98B98]/90 hover:text-[#E98B98] transition-colors">
              {t.nav.exploreGallery}
            </Link>
            <span className="text-[#2A2629]">•</span>
            <Link href="/contact" className="hover:text-[#E98B98] transition-colors">
              {t.nav.contact}
            </Link>
          </nav>

          {/* Minimal WhatsApp CTA */}
          <div className="w-full max-w-xs pt-1">
            <Link
              href={getWhatsAppLink(
                lang === "en"
                  ? "Hello New Day Wedding Organizer, I would like to consult regarding wedding planning in Yogyakarta."
                  : undefined
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-full border border-[#E98B98]/40 bg-[#E98B98]/10 text-xs font-semibold tracking-[0.18em] uppercase text-[#F7F3F1] hover:bg-[#E98B98] hover:text-[#0D0C0D] transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#E98B98]" />
              <span>WhatsApp: {siteConfig.whatsapp.localFormat}</span>
            </Link>
          </div>

          {/* Minimal Location & Socials */}
          <div className="flex flex-col items-center gap-2 text-[11px] text-[#B7AAA9]/80 font-light pt-2">
            <a
              href={siteConfig.googleBusiness.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#E98B98] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#E98B98] shrink-0" />
              <span>Kasihan, Bantul, Yogyakarta (5.0 ★)</span>
            </a>
            <div className="flex items-center gap-3 text-[11px] pt-1">
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E98B98] transition-colors"
              >
                @newday_weddingorganizer
              </a>
              <span className="text-[#2A2629]">•</span>
              <a
                href={siteConfig.galleryInstagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E98B98] transition-colors"
              >
                @galleryofnewday
              </a>
            </div>
          </div>

          {/* Minimal Copyright */}
          <div className="border-t border-[#2A2629]/50 w-full pt-5 text-[10px] text-[#B7AAA9]/50 tracking-wider">
            © 2026 New Day Wedding Organizer. Yogyakarta.
          </div>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP & TABLET VIEW (md:): FULL RICH EDITORIAL LAYOUT   */}
        {/* ========================================================= */}
        <div className="hidden md:block pt-16 pb-12">
          {/* Upper Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 sm:pb-16 border-b border-[#2A2629]/70">
            {/* Brand Info & Address */}
            <div className="lg:col-span-5 flex flex-col items-start gap-4 sm:gap-5">
              <BrandLogo variant="footer" />
              <p className="text-xs text-[#E98B98] italic font-light">
                &ldquo;{lang === "en" ? siteConfig.taglineEn : siteConfig.tagline}&rdquo;
              </p>
              <p className="text-[#B7AAA9] text-xs sm:text-sm leading-relaxed max-w-md font-light">
                {t.footer.desc}
              </p>

              {/* Address Box */}
              <div className="p-4 bg-[#191719]/60 border border-[#2A2629] space-y-2.5 w-full max-w-md text-xs text-[#B7AAA9]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#E98B98] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    {siteConfig.address.full}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 pt-1 text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-[#E98B98] shrink-0" />
                  <span>
                    {lang === "en" ? "Open until 21.00 WIB" : siteConfig.googleBusiness.openingHours}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-[11px]">
                  <Star className="w-3.5 h-3.5 fill-[#E98B98] text-[#E98B98] shrink-0" />
                  <span>
                    {lang === "en"
                      ? "Google Business Rating: 5.0 (26 Reviews)"
                      : "Rating Google Business: 5,0 (26 Ulasan)"}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3 flex flex-col gap-3 sm:gap-4">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#E98B98]">
                {t.footer.navTitle}
              </span>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <Link
                    href="/about"
                    className="text-xs sm:text-sm text-[#B7AAA9] hover:text-[#F7F3F1] transition-colors"
                  >
                    {t.nav.about}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-xs sm:text-sm text-[#B7AAA9] hover:text-[#F7F3F1] transition-colors"
                  >
                    {t.nav.services}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/packages"
                    className="text-xs sm:text-sm text-[#B7AAA9] hover:text-[#F7F3F1] transition-colors"
                  >
                    {t.nav.packages}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-xs sm:text-sm text-[#B7AAA9] hover:text-[#F7F3F1] transition-colors"
                  >
                    {t.nav.portfolio}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-xs sm:text-sm text-[#B7AAA9] hover:text-[#F7F3F1] transition-colors"
                  >
                    {t.nav.contact}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#faq"
                    className="text-xs sm:text-sm text-[#B7AAA9] hover:text-[#F7F3F1] transition-colors"
                  >
                    {t.nav.faq}
                  </Link>
                </li>
              </ul>
            </div>

            {/* New Day Gallery Extension */}
            <div className="lg:col-span-4 flex flex-col gap-3.5 p-5 sm:p-6 bg-[#191719]/60 border border-[#2A2629] relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#E98B98] font-medium">
                  {t.footer.relatedTitle}
                </span>
                <span className="text-[9px] sm:text-[10px] text-[#B7AAA9] uppercase tracking-wider">
                  YOGYAKARTA
                </span>
              </div>
              <div>
                <h4 className="font-editorial text-lg sm:text-xl text-[#F7F3F1] tracking-wide">
                  NEW DAY GALLERY
                </h4>
                <p className="text-xs text-[#E98B98] italic mt-0.5">
                  &ldquo;{siteConfig.galleryInstagram.tagline}&rdquo;
                </p>
              </div>
              <p className="text-xs text-[#B7AAA9] leading-relaxed">
                {t.footer.galleryDesc}
              </p>
              <div className="text-[11px] text-[#B7AAA9] space-y-1 pt-1 border-t border-[#2A2629]/50">
                <p className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-[#E98B98]" />
                  <span>{siteConfig.galleryInstagram.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-3 h-3 text-[#E98B98]" />
                  <span>
                    {lang === "en" ? "Hours: 09.30–16.30 WIB" : "Jam: 09.30–16.30 WIB"}
                  </span>
                </p>
              </div>
              <div className="pt-2 flex items-center justify-between">
                <Link
                  href="/new-day-gallery"
                  className="inline-flex items-center gap-1.5 text-xs text-[#F7F3F1] hover:text-[#E98B98] transition-colors uppercase tracking-[0.15em] font-medium"
                >
                  <span>{t.footer.exploreGallery}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E98B98]" />
                </Link>
                <Link
                  href={siteConfig.galleryInstagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#B7AAA9] hover:text-[#E98B98] transition-colors"
                >
                  @galleryofnewday
                </Link>
              </div>
            </div>
          </div>

          {/* Social & Contact Bar */}
          <div className="py-6 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 border-b border-[#2A2629]/50">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
              <Link
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#B7AAA9] hover:text-[#E98B98] transition-colors tracking-wider"
              >
                <InstagramIcon className="w-4 h-4 text-[#E98B98] shrink-0" />
                <span>{siteConfig.instagram.handle}</span>
              </Link>
              <Link
                href={getWhatsAppLink(
                  lang === "en"
                    ? "Hello New Day Wedding Organizer, I would like to consult regarding wedding planning in Yogyakarta."
                    : undefined
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#B7AAA9] hover:text-[#E98B98] transition-colors tracking-wider"
              >
                <MessageCircle className="w-4 h-4 text-[#E98B98] shrink-0" />
                <span>WhatsApp: {siteConfig.whatsapp.display}</span>
              </Link>
            </div>

            <div className="text-[11px] sm:text-xs text-[#B7AAA9] tracking-wider">
              {t.footer.socialTitle}
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#B7AAA9]/70 font-light">
            <p>© 2026 New Day Wedding Organizer. {t.footer.rights}</p>
            <p className="tracking-widest uppercase text-[9px] sm:text-[10px] text-[#E98B98]">
              {lang === "en" ? siteConfig.taglineEn : siteConfig.tagline}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
