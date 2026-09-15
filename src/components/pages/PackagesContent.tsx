"use client";

import Link from "next/link";
import { getWhatsAppLink } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";

export default function PackagesContent() {
  const { t, lang } = useLanguage();
  const page = t.packagesPage;

  return (
    <div className="pt-20 sm:pt-24">
      {/* Compact Header */}
      <section className="bg-[#0D0C0D] py-10 sm:py-16 border-b border-[#2A2629]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98] block mb-3">
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

      {/* 3 Detailed Cards */}
      <section className="bg-[#F7F3F1] text-[#0D0C0D] py-14 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {page.items.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-[#FFFFFF] border border-[#B7AAA9]/30 p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-xl relative hover:border-[#E98B98] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-editorial text-2xl sm:text-3xl text-[#E98B98] font-light">
                      {pkg.number}
                    </span>
                    <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#B7AAA9] uppercase font-mono">
                      YOGYAKARTA
                    </span>
                  </div>

                  <h2 className="font-editorial text-xl sm:text-2xl lg:text-3xl text-[#0D0C0D] uppercase tracking-wide mb-2">
                    {pkg.title}
                  </h2>
                  <p className="text-xs text-[#E98B98] font-semibold tracking-wider mb-4 sm:mb-6">
                    {pkg.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#191719]/80 leading-relaxed mb-5 sm:mb-6 font-light">
                    {pkg.description}
                  </p>

                  <div className="bg-[#F7F3F1] p-3.5 sm:p-4 border-l-2 border-[#E98B98] mb-5 sm:mb-6">
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#B7AAA9] font-bold block mb-1">
                      {page.suitableFor}
                    </span>
                    <p className="text-xs text-[#0D0C0D] leading-relaxed">
                      {pkg.recommendedFor}
                    </p>
                  </div>

                  <div className="space-y-2.5 sm:space-y-3 pt-5 sm:pt-6 border-t border-[#B7AAA9]/30 mb-6 sm:mb-8">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#0D0C0D] font-bold block">
                      {page.scopeIncluded}
                    </span>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                        <Check className="w-3.5 h-3.5 text-[#E98B98] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#191719]/85 leading-relaxed font-light">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={getWhatsAppLink(
                      lang === "en"
                        ? `Hello New Day Wedding Organizer, I would like to consult details for the package: ${pkg.title}.`
                        : `Halo New Day Wedding Organizer, saya ingin konsultasi detail untuk layanan: ${pkg.title}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 px-4 sm:px-6 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase bg-[#0D0C0D] text-[#F7F3F1] hover:bg-[#E98B98] hover:text-[#0D0C0D] transition-all duration-300"
                  >
                    <span>{page.ctaPackage}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope Comparison Table */}
      <section className="bg-[#0D0C0D] text-[#F7F3F1] py-16 sm:py-24 lg:py-32 border-t border-[#2A2629]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98] block mb-2 sm:mb-3">
              {page.table.eyebrow}
            </span>
            <h2
              className="font-editorial text-[#F7F3F1] tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3.25rem)" }}
            >
              {page.table.title}
            </h2>
            <p className="text-xs text-[#B7AAA9] mt-2 block sm:hidden">
              {page.table.mobileHint}
            </p>
          </div>

          <div className="overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[580px] text-left border-collapse border border-[#2A2629]">
              <thead>
                <tr className="bg-[#191719] border-b border-[#2A2629]">
                  <th className="p-3 sm:p-4 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#B7AAA9]">
                    {page.table.colFeature}
                  </th>
                  <th className="p-3 sm:p-4 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#F7F3F1] text-center">
                    {page.table.colWo}
                  </th>
                  <th className="p-3 sm:p-4 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#E98B98] text-center">
                    {page.table.colCustom}
                  </th>
                  <th className="p-3 sm:p-4 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#F7F3F1] text-center">
                    {page.table.colFull}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2A2629] text-xs">
                {page.table.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#191719]/50 transition-colors">
                    <td className="p-3 sm:p-4 font-light text-[#F7F3F1]">{row.name}</td>
                    <td className="p-3 sm:p-4 text-center text-[#B7AAA9]">{row.wo}</td>
                    <td className="p-3 sm:p-4 text-center text-[#E98B98] font-medium">{row.custom}</td>
                    <td className="p-3 sm:p-4 text-center text-[#F7F3F1] font-medium">{row.full}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 sm:mt-16 text-center border-t border-[#2A2629] pt-8 sm:pt-12">
            <p className="text-xs sm:text-sm text-[#B7AAA9] font-light mb-4 sm:mb-6">
              {page.bottom.prompt}
            </p>
            <Link
              href={getWhatsAppLink(page.bottom.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border border-[#E98B98] text-[#E98B98] hover:bg-[#E98B98] hover:text-[#0D0C0D] transition-all text-[11px] sm:text-xs font-semibold tracking-[0.18em] sm:tracking-[0.2em] uppercase w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{page.bottom.button}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
