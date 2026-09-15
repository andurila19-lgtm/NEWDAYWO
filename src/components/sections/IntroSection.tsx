"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function IntroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-[#F7F3F1] text-[#0D0C0D] py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98] mb-3">
              {t.intro.eyebrow}
            </span>

            <h2
              className="font-editorial font-normal leading-[1.08] text-[#0D0C0D] tracking-tight mb-6 sm:mb-8"
              style={{ fontSize: "clamp(2rem, 6vw, 3.75rem)" }}
            >
              {t.intro.titleLine1}
              <br />
              {t.intro.titleLine2}
              <br />
              <span className="italic text-[#E98B98]">{t.intro.titleAccent}</span>
            </h2>

            <div className="space-y-3 sm:space-y-4 text-sm text-[#191719]/80 font-normal leading-relaxed max-w-xl">
              <p className="font-medium text-[#0D0C0D]">
                {t.intro.p1}
              </p>
              <p>
                {t.intro.p2}
              </p>
              <p>
                {t.intro.p3}
              </p>
            </div>

            {/* Metadata Tags */}
            <div className="mt-8 pt-6 border-t border-[#B7AAA9]/30 w-full flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 sm:gap-x-6 sm:gap-y-3 text-[10px] font-semibold tracking-[0.2em] uppercase">
              <span className="text-[#0D0C0D] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E98B98] shrink-0" />
                {t.intro.tag1}
              </span>
              <span className="text-[#0D0C0D] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E98B98] shrink-0" />
                {t.intro.tag2}
              </span>
              <span className="text-[#0D0C0D] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E98B98] shrink-0" />
                {t.intro.tag3}
              </span>
            </div>

            <div className="mt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#0D0C0D] hover:text-[#E98B98] transition-colors group"
              >
                <span>{t.intro.cta}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E98B98] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden shadow-2xl">
              <Image
                src="/images/intro-wedding.webp"
                alt="Newday Wedding Organizer intimate candid moment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center grayscale-[15%] contrast-[1.05]"
              />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#0D0C0D]/70 backdrop-blur-sm p-2.5 sm:p-3 text-[9px] sm:text-[10px] tracking-[0.2em] text-[#F7F3F1] uppercase flex justify-between items-center">
                <span>NEWDAY WEDDING ORGANIZER</span>
                <span className="text-[#E98B98]">YOGYAKARTA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
