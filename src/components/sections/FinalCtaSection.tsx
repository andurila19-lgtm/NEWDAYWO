"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppLink } from "@/data/siteConfig";
import { ArrowRight, MessageCircle } from "lucide-react";

function renderClearText(text: string) {
  if (!text || !text.includes("J")) return text;
  return text.split(/(J)/g).map((part, idx) =>
    part === "J" ? (
      <span
        key={idx}
        className="inline-block"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: "normal" }}
      >
        J
      </span>
    ) : (
      part
    )
  );
}

export default function FinalCtaSection() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0D0C0D] py-16 sm:py-28 lg:py-36">
      {/* Full-bleed Cinematic Wedding Backdrop */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/final-cta.webp"
          alt="Newday Wedding Organizer final celebration atmosphere"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.6] contrast-[1.08]"
        />
        {/* Layered dark overlays for maximum emotional contrast */}
        <div className="absolute inset-0 bg-[#0D0C0D]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0D] via-transparent to-[#0D0C0D]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
        <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98] block mb-3 sm:mb-4">
          {t.finalCta.eyebrow}
        </span>

        <h2
          className="font-editorial font-normal leading-[1.05] text-[#F7F3F1] tracking-tight mb-4 sm:mb-6"
          style={{ fontSize: "clamp(2.2rem, 7vw, 5rem)" }}
        >
          {renderClearText(t.finalCta.title1)}
          <br />
          <span className="italic text-[#E98B98]">{t.finalCta.titleAccent}</span> {t.finalCta.titleRest}
        </h2>

        <p className="text-xs sm:text-base md:text-lg text-[#F7F3F1]/85 font-light max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
          {t.finalCta.desc1}
          <br />
          {t.finalCta.desc2}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto px-2">
          <Link
            href={getWhatsAppLink(
              lang === "en"
                ? "Hello Newday Wedding Organizer, I would like to start a conversation and consult for our wedding celebration in Yogyakarta."
                : "Halo Newday Wedding Organizer, saya ingin memulai percakapan dan konsultasi untuk rencana pernikahan kami di Yogyakarta."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-[#0D0C0D] text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase hover:brightness-110 hover:shadow-[0_0_35px_rgba(233,139,152,0.3)] transition-all duration-400 shadow-2xl group"
            style={{ background: 'linear-gradient(135deg, #E98B98 0%, #D4707F 60%, #C7616F 100%)' }}
          >
            <MessageCircle className="w-4 h-4 text-[#0D0C0D]/80" />
            <span>{t.finalCta.ctaPrimary}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#0D0C0D]/70 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full border border-[#F7F3F1]/20 text-[#F7F3F1] bg-[#F7F3F1]/5 backdrop-blur-sm text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase hover:border-[#E98B98]/60 hover:text-[#E98B98] hover:bg-[#E98B98]/8 transition-all duration-400"
          >
            <span>{t.finalCta.ctaSecondary}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
