"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig, getWhatsAppLink } from "@/data/siteConfig";
import { Star, MessageCircle, MapPin, Clock, ExternalLink } from "lucide-react";

export default function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-[#F7F3F1] text-[#0D0C0D] py-16 sm:py-24 lg:py-32 border-t border-[#B7AAA9]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98] block mb-3">
            {t.testimonials.eyebrow}
          </span>
          <h2
            className="font-editorial font-normal leading-[1.08] text-[#0D0C0D] tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}
          >
            {t.testimonials.title}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#191719]/75 font-light max-w-xl mx-auto leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Main Google Business Showcase Card */}
        <div className="max-w-4xl mx-auto bg-[#FFFFFF] border border-[#B7AAA9]/30 p-8 sm:p-12 shadow-xl relative overflow-hidden">
          {/* Subtle decorative background watermark */}
          <div className="absolute -right-8 -bottom-8 opacity-5 font-editorial text-[180px] pointer-events-none select-none text-[#0D0C0D]">
            5.0
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Rating Summary */}
            <div className="md:col-span-5 text-center md:text-left border-b md:border-b-0 md:border-r border-[#B7AAA9]/30 pb-6 md:pb-0 md:pr-8">
              <div className="inline-flex items-center gap-1.5 text-3xl sm:text-4xl font-editorial font-semibold text-[#0D0C0D]">
                <span>5,0</span>
                <span className="text-lg text-[#B7AAA9]">/ 5.0</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1 text-[#E98B98] my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#E98B98]" />
                ))}
              </div>
              <p className="text-xs text-[#0D0C0D] font-semibold tracking-wide mt-1">
                26 Ulasan di Google Business
              </p>
              <p className="text-[11px] text-[#B7AAA9] mt-0.5 font-light">
                Profil Bisnis Resmi New Day Wedding Organizer
              </p>

              <div className="mt-5 pt-4 border-t border-[#B7AAA9]/20 space-y-2 text-[11px] text-[#191719]/80 text-left">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#E98B98] shrink-0" />
                  <span>{siteConfig.googleBusiness.openingHours}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#E98B98] shrink-0 mt-0.5" />
                  <span>Kasihan, Bantul, D.I. Yogyakarta</span>
                </div>
              </div>
            </div>

            {/* Right Brand Positioning Message & Direct CTA */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-5">
              <div>
                <span className="text-[9px] tracking-[0.25em] uppercase text-[#E98B98] font-bold block mb-2">
                  PESAN BRAND KAMI
                </span>
                <p className="font-editorial text-xl sm:text-2xl text-[#0D0C0D] italic leading-snug">
                  &ldquo;{siteConfig.tagline}&rdquo;
                </p>
                <p className="mt-3 text-xs sm:text-sm text-[#191719]/80 font-light leading-relaxed">
                  New Day bukan sekadar membantu pada hari pernikahan, tetapi menjadi partner bagi pasangan dalam mempersiapkan dan mengoordinasikan momen penting mereka agar setiap rangkaian acara berjalan terarah, indah, dan berkesan.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E98B98] text-[#0D0C0D] text-[11px] font-semibold tracking-[0.18em] uppercase hover:bg-[#0D0C0D] hover:text-[#F7F3F1] transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>KONSULTASI VIA WHATSAPP</span>
                </Link>

                <Link
                  href={siteConfig.googleBusiness.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 border border-[#B7AAA9]/50 text-[#0D0C0D] text-[11px] font-medium tracking-wider uppercase hover:border-[#0D0C0D] transition-colors"
                >
                  <span>LIHAT DI GOOGLE</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#B7AAA9]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
