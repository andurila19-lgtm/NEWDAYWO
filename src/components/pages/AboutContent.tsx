"use client";

import Image from "next/image";
import Link from "next/link";
import { getWhatsAppLink } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle, Heart, Compass, ShieldCheck, Sparkles } from "lucide-react";

export default function AboutContent() {
  const { t } = useLanguage();
  const page = t.aboutPage;

  const valueIcons = [Heart, Compass, ShieldCheck, Sparkles];

  return (
    <div className="pt-20 sm:pt-24">
      {/* Compact Page Header */}
      <section className="bg-[#0D0C0D] py-10 sm:py-16 border-b border-[#2A2629]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98] block mb-3">
            {page.header.eyebrow}
          </span>
          <h1
            className="font-editorial text-[#F7F3F1] leading-[1.08] max-w-3xl tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            {page.header.titleLine1}{" "}
            <span className="italic text-[#E98B98]">{page.header.titleAccent}</span>
          </h1>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#B7AAA9] max-w-2xl font-light leading-relaxed">
            {page.header.description}
          </p>
        </div>
      </section>

      {/* Narrative Section - Warm Ivory */}
      <section className="bg-[#F7F3F1] text-[#0D0C0D] py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#E98B98] block">
                {page.narrative.eyebrow}
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl leading-tight">
                {page.narrative.title}
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#191719]/80 leading-relaxed font-light">
                <p>{page.narrative.p1}</p>
                <p>{page.narrative.p2}</p>
                <p>{page.narrative.p3}</p>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl">
                <Image
                  src="/images/intro-wedding.webp"
                  alt="New Day Wedding Planning in Yogyakarta"
                  fill
                  className="object-cover object-center grayscale-[10%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Near Black */}
      <section className="bg-[#0D0C0D] text-[#F7F3F1] py-24 sm:py-32 border-t border-[#2A2629]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98] block mb-3">
              {page.values.eyebrow}
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl text-[#F7F3F1]">
              {page.values.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {page.values.items.map((val, idx) => {
              const Icon = valueIcons[idx % valueIcons.length];
              return (
                <div key={idx} className="p-8 bg-[#191719] border border-[#2A2629]">
                  <Icon className="w-6 h-6 text-[#E98B98] mb-4" />
                  <h3 className="font-editorial text-xl text-[#F7F3F1] mb-2">{val.title}</h3>
                  <p className="text-xs text-[#B7AAA9] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-[#191719] py-16 border-t border-[#2A2629] text-center">
        <div className="max-w-4xl mx-auto px-5">
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#F7F3F1] mb-4">
            {page.ctaBand.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#B7AAA9] mb-8 max-w-lg mx-auto">
            {page.ctaBand.desc}
          </p>
          <Link
            href={getWhatsAppLink(page.ctaBand.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#E98B98] text-[#0D0C0D] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#F7F3F1] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{page.ctaBand.button}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
