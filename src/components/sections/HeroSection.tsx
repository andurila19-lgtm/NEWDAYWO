"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig, getWhatsAppLink } from "@/data/siteConfig";
import { ArrowDown, ArrowRight, ArrowUpRight, Star } from "lucide-react";

export default function HeroSection() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between items-center bg-[#0D0C0D] pt-24 sm:pt-28 md:pt-32 pb-8 overflow-hidden">
      {/* Cinematic Wedding Photography with Targeted Lighting & Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-wedding.webp"
          alt="New Day Wedding Organizer Yogyakarta - Jadikan moment pernikahanmu indah dan tak terlupakan"
          fill
          priority
          className="object-cover object-center brightness-[0.76] contrast-[1.04]"
        />
        {/* Targeted radial dark mask behind center typography so headline pops */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(13,12,13,0.85)_0%,_rgba(13,12,13,0.6)_55%,_transparent_100%)]" />

        {/* Subtle cinematic vignette around edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(13,12,13,0.8)_100%)]" />

        {/* Top and bottom subtle blending gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0C0D]/80 via-transparent to-[#0D0C0D]" />
      </div>

      {/* Top spacer anchor */}
      <div className="w-full h-1 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center my-auto">
        {/* Google Business Rating Badge & Location */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#191719]/80 border border-[#E98B98]/30 backdrop-blur-md mb-5 sm:mb-6 shadow-md">
          <div className="flex items-center gap-1 text-[#E98B98]">
            <Star className="w-3.5 h-3.5 fill-[#E98B98]" />
            <span className="text-xs font-semibold text-[#F7F3F1]">5,0</span>
          </div>
          <span className="text-[10px] sm:text-[11px] text-[#B7AAA9] font-light tracking-wide">
            (26 Ulasan Google Business)
          </span>
          <span className="w-1 h-1 rounded-full bg-[#E98B98]" />
          <span className="text-[10px] sm:text-[11px] text-[#E98B98] font-medium tracking-wider uppercase">
            Yogyakarta
          </span>
        </div>

        {/* Brand Tagline Headline */}
        <h1
          className="font-editorial text-[#F7F3F1] leading-[1.06] tracking-tight max-w-4xl"
          style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)" }}
        >
          <span className="block font-light text-[#F7F3F1]/95">{t.hero.line1}</span>
          <span className="block mt-1 sm:mt-2">
            <span className="text-[#F7F3F1]">{t.hero.line2} </span>
            <span className="italic font-light text-[#E98B98]">{t.hero.accent}</span>
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base text-[#F7F3F1]/85 max-w-md sm:max-w-2xl font-light leading-relaxed tracking-wide px-2">
          {t.hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-5 w-full sm:w-auto px-4 sm:px-0">
          {/* Primary CTA: Konsultasi Via WhatsApp */}
          <Link
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="h-[48px] sm:h-[52px] inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 rounded-full text-[#0D0C0D] text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase hover:brightness-105 hover:shadow-[0_0_25px_rgba(233,139,152,0.3)] transition-all duration-300 shadow-xl group shrink-0"
            style={{ background: "linear-gradient(135deg, #F7F3F1 0%, #F0E4E0 100%)" }}
          >
            <span>{t.hero.ctaPrimary}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#0D0C0D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          {/* Secondary CTA: Lihat Portfolio */}
          <Link
            href="/portfolio"
            className="h-[48px] sm:h-[52px] inline-flex items-center justify-center gap-2 px-7 sm:px-9 rounded-full border border-[#F7F3F1]/30 bg-[#F7F3F1]/5 backdrop-blur-sm text-[#F7F3F1] text-[11px] sm:text-xs font-medium tracking-[0.18em] uppercase hover:border-[#E98B98] hover:bg-[#E98B98]/10 hover:text-[#E98B98] transition-all duration-300 shrink-0"
          >
            <span>{t.hero.ctaSecondary}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Secondary Links quick row */}
        <div className="mt-5 flex items-center justify-center gap-5 text-[11px] sm:text-xs tracking-wider text-[#B7AAA9]">
          <Link href="/services" className="hover:text-[#E98B98] transition-colors underline-offset-4 hover:underline">
            Lihat Layanan
          </Link>
          <span className="w-1 h-1 rounded-full bg-[#B7AAA9]/40" />
          <Link href="/new-day-gallery" className="hover:text-[#E98B98] transition-colors underline-offset-4 hover:underline">
            New Day Gallery
          </Link>
        </div>
      </div>

      {/* Quiet Scroll Indicator */}
      <div className="relative z-10 mt-6 flex flex-col items-center gap-1 text-[#B7AAA9]/70 pointer-events-none">
        <span className="text-[8px] sm:text-[9px] tracking-[0.32em] uppercase font-light">
          {t.hero.scroll}
        </span>
        <ArrowDown className="w-3 h-3 text-[#E98B98]/80 animate-bounce" />
      </div>
    </section>
  );
}
