"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig, getWhatsAppLink } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight, MessageCircle, Scissors, Heart, Ruler } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";

const attireImages = [
  "/images/attire-1.webp",
  "/images/attire-2.webp",
  "/images/attire-3.webp",
  "/images/attire-4.webp",
];

const stepIcons = [Ruler, Scissors, Heart];

export default function NewDayGalleryContent() {
  const { t, lang } = useLanguage();
  const page = t.newDayGalleryPage;

  return (
    <div className="pt-20 sm:pt-24">
      {/* Header */}
      <section className="bg-[#0D0C0D] py-10 sm:py-16 border-b border-[#2A2629]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E98B98]" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98]">
              {page.header.badge}
            </span>
          </div>
          <h1
            className="font-editorial text-[#F7F3F1] leading-[1.08] max-w-4xl tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            {page.header.titleLine1}
            <br />
            <span className="italic text-[#E98B98]">{page.header.titleAccent}</span>
          </h1>
          <p className="font-editorial italic text-xl sm:text-2xl text-[#F3C4C9] mt-2 sm:mt-3">
            &ldquo;{siteConfig.galleryInstagram.tagline}&rdquo;
          </p>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#B7AAA9] max-w-2xl font-light leading-relaxed">
            {page.header.desc}
          </p>
        </div>
      </section>

      {/* Attire Grid Showcase */}
      <section className="bg-[#F7F3F1] text-[#0D0C0D] py-14 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#B7AAA9]/40">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98] block mb-2">
                {page.attireSection.eyebrow}
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#0D0C0D]">
                {page.attireSection.title}
              </h2>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                href={siteConfig.galleryInstagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#0D0C0D] hover:text-[#E98B98] transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#E98B98]" />
                <span>{page.attireSection.followBtn}</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {page.attireSection.items.map((attire, idx) => (
              <div key={idx} className="group flex flex-col bg-[#FFFFFF] border border-[#B7AAA9]/30 p-6 shadow-md hover:border-[#E98B98] transition-all">
                <div className="relative aspect-[3/4] w-full overflow-hidden mb-6 bg-[#0D0C0D]">
                  <Image
                    src={attireImages[idx % attireImages.length]}
                    alt={attire.title}
                    fill
                    className="object-cover object-center brightness-[0.94] group-hover:brightness-105 contrast-[1.02] transition-all duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-[#0D0C0D]/80 px-3 py-1 text-[9px] uppercase tracking-widest text-[#E98B98]">
                    {attire.category}
                  </div>
                </div>
                <h3 className="font-editorial text-2xl text-[#0D0C0D] uppercase tracking-wide mb-2">
                  {attire.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#191719]/80 font-light leading-relaxed mb-6">
                  {attire.desc}
                </p>
                <div className="mt-auto pt-4 border-t border-[#B7AAA9]/30 flex items-center justify-between">
                  <span className="text-[10px] tracking-widest text-[#B7AAA9] uppercase font-mono">
                    {page.attireSection.fittingCity}
                  </span>
                  <Link
                    href={getWhatsAppLink(
                      lang === "en"
                        ? `Hello New Day Gallery, I would like to inquire about fitting for the attire collection: ${attire.title}.`
                        : `Halo New Day Gallery, saya ingin bertanya perihal fitting koleksi busana: ${attire.title}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#0D0C0D] hover:text-[#E98B98] transition-colors"
                  >
                    <span>{page.attireSection.consultBtn}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E98B98]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fitting Experience Flow */}
      <section className="bg-[#0D0C0D] text-[#F7F3F1] py-24 sm:py-32 border-t border-[#2A2629]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98] block mb-3">
              {page.fittingFlow.eyebrow}
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl text-[#F7F3F1]">
              {page.fittingFlow.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {page.fittingFlow.steps.map((st, idx) => {
              const Icon = stepIcons[idx % stepIcons.length];
              return (
                <div key={idx} className="p-8 bg-[#191719] border border-[#2A2629]">
                  <Icon className="w-6 h-6 text-[#E98B98] mb-4" />
                  <h3 className="font-editorial text-xl text-[#F7F3F1] mb-2">{st.step}</h3>
                  <p className="text-xs text-[#B7AAA9] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              href={getWhatsAppLink(
                lang === "en"
                  ? "Hello New Day Gallery, I would like to schedule a bridal attire fitting in Yogyakarta."
                  : "Halo New Day Gallery, saya ingin menjadwalkan konsultasi busana pengantin di Yogyakarta."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E98B98] text-[#0D0C0D] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#F7F3F1] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{page.fittingFlow.ctaBtn}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
