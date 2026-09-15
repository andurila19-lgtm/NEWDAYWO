"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { siteConfig } from "@/data/siteConfig";

export default function NewDayGalleryTeaser() {
  const { t } = useLanguage();

  const attireImages = [
    {
      src: "/images/attire-1.webp",
      alt: "Bespoke Bridal Gown & Veil",
      caption: "Bridal Gown & Veil",
    },
    {
      src: "/images/attire-2.webp",
      alt: "Modern Traditional Kebaya & Embroidery",
      caption: "Modern Kebaya Embroidery",
    },
    {
      src: "/images/attire-3.webp",
      alt: "Tailored Groom Attire & Beskap",
      caption: "Tailored Groom Silhouette",
    },
    {
      src: "/images/attire-4.webp",
      alt: "Handcrafted Bridal Details",
      caption: "Fine Handcrafted Accents",
    },
  ];

  return (
    <section className="relative w-full bg-[#F3C4C9]/20 border-y border-[#F3C4C9]/40 py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 pb-6 sm:pb-8 border-b border-[#B7AAA9]/30">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E98B98]" />
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98]">
                {t.galleryTeaser.badge}
              </span>
            </div>
            <h2
              className="font-editorial font-normal leading-[1.05] text-[#0D0C0D] tracking-tight"
              style={{ fontSize: "clamp(2rem, 6vw, 3.75rem)" }}
            >
              {t.galleryTeaser.title}
              <br />
              <span className="italic text-[#E98B98]">{t.galleryTeaser.titleAccent}</span>
            </h2>
            <p className="font-editorial italic text-lg sm:text-2xl text-[#191719]/80 mt-2 sm:mt-3">
              &ldquo;{siteConfig.galleryInstagram.tagline}&rdquo;
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end gap-2.5 sm:gap-3">
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#B7AAA9] font-medium">
              {t.galleryTeaser.sub}
            </span>
            <Link
              href="/new-day-gallery"
              className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#0D0C0D] hover:text-[#E98B98] transition-colors group"
            >
              <span>{t.galleryTeaser.cta}</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E98B98] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 4 Photo Showcase - 2 col on mobile, 4 col on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
          {attireImages.map((attire, idx) => (
            <div
              key={idx}
              className="group relative aspect-[3/4] w-full overflow-hidden bg-[#0D0C0D] shadow-lg border border-transparent hover:border-[#E98B98]/50 hover:shadow-[0_8px_25px_rgba(233,139,152,0.15)] transition-all duration-500"
            >
              <Image
                src={attire.src}
                alt={attire.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center brightness-[0.92] group-hover:brightness-105 contrast-[1.02] transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0D]/85 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3">
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#E98B98] font-medium block">
                  ATTIRE 0{idx + 1}
                </span>
                <span className="text-[11px] sm:text-xs text-[#F7F3F1] font-light line-clamp-1">
                  {attire.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Brand note */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-5 sm:pt-6 border-t border-[#B7AAA9]/30 text-xs text-[#191719]/80 font-light">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E98B98]" />
            <span className="text-[11px] sm:text-xs">{t.galleryTeaser.ecosystem}</span>
          </div>
          <Link
            href={siteConfig.galleryInstagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-[#0D0C0D] hover:text-[#E98B98] transition-colors font-medium tracking-wider"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-[#E98B98]" />
            <span>@galleryofnewday</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
