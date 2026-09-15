"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function WhyNewdaySection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-[#F7F3F1] text-[#0D0C0D] py-16 sm:py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Large Typography Statement */}
        <div className="mb-12 sm:mb-20 lg:mb-28 max-w-4xl">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98] block mb-3">
            {t.why.eyebrow}
          </span>
          <h2
            className="font-editorial font-normal leading-[1.05] text-[#0D0C0D] tracking-tight"
            style={{ fontSize: "clamp(2rem, 7vw, 4.5rem)" }}
          >
            {t.why.line1}
            <br />
            {t.why.line2}
            <br />
            {t.why.line3}
            <br />
            <span className="italic text-[#E98B98]">{t.why.accent}</span>
          </h2>
        </div>

        {/* 4 Spacious Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 pt-8 sm:pt-12 border-t border-[#B7AAA9]/40">
          {t.why.pillars.map((pillar) => (
            <div key={pillar.number} className="flex flex-col">
              <span className="font-editorial text-2xl sm:text-3xl font-light text-[#E98B98] block mb-3">
                {pillar.number}
              </span>
              <h3 className="font-editorial text-lg sm:text-xl text-[#0D0C0D] tracking-wide mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-[#191719] leading-snug mb-1.5">
                {pillar.desc}
              </p>
              <p className="text-xs text-[#191719]/70 font-light leading-relaxed">
                {pillar.extended}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
