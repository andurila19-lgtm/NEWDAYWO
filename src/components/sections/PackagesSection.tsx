"use client";

import Link from "next/link";
import { packagesData } from "@/data/packages";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppLink } from "@/data/siteConfig";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";

export default function PackagesSection() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative w-full bg-[#0D0C0D] text-[#F7F3F1] py-16 sm:py-24 lg:py-32 border-t border-[#2A2629]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-20">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98] block mb-3">
            {t.packages.eyebrow}
          </span>
          <h2
            className="font-editorial font-normal leading-[1.1] text-[#F7F3F1] tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 5.5vw, 3.75rem)" }}
          >
            {t.packages.titleLine1}
            <br />
            {t.packages.titleLine2}{" "}
            <span className="italic text-[#E98B98]">{t.packages.titleAccent}</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#B7AAA9] font-light max-w-xl mx-auto px-2 leading-relaxed">
            {t.packages.description}
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {t.packagesPage.items.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-[#191719] border border-[#2A2629] p-6 sm:p-8 lg:p-10 flex flex-col justify-between hover:border-[#E98B98]/60 transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-editorial text-2xl text-[#E98B98] font-light">
                    {pkg.number}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#B7AAA9]">
                    YOGYAKARTA
                  </span>
                </div>

                <h3 className="font-editorial text-xl sm:text-2xl lg:text-3xl text-[#F7F3F1] tracking-wide mb-2">
                  {pkg.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-[#E98B98] font-medium tracking-wider mb-3">
                  {pkg.tagline}
                </p>
                <p className="text-xs text-[#B7AAA9] leading-relaxed mb-5">
                  {pkg.description}
                </p>

                <div className="pt-4 border-t border-[#2A2629]/60 space-y-2.5 mb-6">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#F7F3F1]/80 font-semibold block">
                    {t.packages.scopeTitle}
                  </span>
                  {pkg.features.slice(0, 4).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-[#E98B98] shrink-0 mt-0.5" />
                      <span className="text-[11px] text-[#B7AAA9] leading-tight font-light">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  href={getWhatsAppLink(
                    lang === "en"
                      ? `Hello New Day Wedding Organizer, I would like to consult regarding the package: ${pkg.title} for our wedding in Yogyakarta.`
                      : `Halo New Day Wedding Organizer, saya ingin konsultasi mengenai layanan: ${pkg.title} untuk pernikahan kami di Yogyakarta.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#F7F3F1] border border-[#E98B98]/40 bg-[#E98B98]/8 hover:bg-[#E98B98] hover:text-[#0D0C0D] hover:border-[#E98B98] transition-all duration-300"
                >
                  <span>{t.packages.ctaButton}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Not sure banner */}
        <div className="mt-10 sm:mt-16 text-center border-t border-[#2A2629]/60 pt-8 sm:pt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <p className="text-sm text-[#B7AAA9] font-light">
            {t.packages.notSure}
          </p>
          <Link
            href={getWhatsAppLink(
              "Halo New Day Wedding Organizer, saya ingin bertanya dan meminta saran skema koordinasi yang paling sesuai untuk rencana pernikahan kami."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#E98B98] hover:text-[#F7F3F1] transition-colors"
          >
            <span>{t.packages.letsTalk}</span>
            <MessageCircle className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
