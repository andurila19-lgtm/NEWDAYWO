"use client";

import { useState } from "react";
import Link from "next/link";
import { faqItemsId, faqItemsEn } from "@/data/faq";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppLink } from "@/data/siteConfig";
import { Plus, Minus, MessageCircle } from "lucide-react";

export default function FaqPage() {
  const [openId, setOpenId] = useState<string | null>("faq-01");
  const { t, lang } = useLanguage();

  const currentFaqItems = lang === "en" ? faqItemsEn : faqItemsId;

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="pt-20 sm:pt-24">
      {/* Compact Header */}
      <section className="bg-[#0D0C0D] py-10 sm:py-16 border-b border-[#2A2629]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98] block mb-3">
            {t.faq.eyebrow}
          </span>
          <h1
            className="font-editorial text-[#F7F3F1] leading-[1.08] max-w-3xl tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            {t.faq.title1}{" "}
            <span className="italic text-[#E98B98]">{t.faq.titleAccent}</span>
          </h1>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-[#F7F3F1] text-[#0D0C0D] py-12 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="divide-y divide-[#B7AAA9]/40 border-y border-[#B7AAA9]/40">
            {currentFaqItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="py-5 sm:py-7 transition-colors">
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full flex items-center justify-between text-left gap-4 sm:gap-6 group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-editorial text-lg sm:text-2xl text-[#0D0C0D] tracking-wide group-hover:text-[#E98B98] transition-colors leading-snug">
                      {item.question}
                    </span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#B7AAA9]/50 flex items-center justify-center shrink-0 text-[#0D0C0D] group-hover:border-[#E98B98] group-hover:text-[#E98B98] transition-colors">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-3 sm:mt-4 pr-4 sm:pr-12 text-xs sm:text-sm text-[#191719]/80 font-light leading-relaxed animate-in fade-in duration-300">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA after FAQ */}
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-sm text-[#191719]/70 font-light mb-5">
              {lang === "en"
                ? "Still have questions? We're happy to help."
                : "Masih ada pertanyaan? Kami siap membantu."}
            </p>
            <Link
              href={getWhatsAppLink(
                lang === "en"
                  ? "Hello Newday Wedding Organizer, I have a question about your services."
                  : "Halo Newday Wedding Organizer, saya ingin bertanya mengenai layanan Anda."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#0D0C0D] hover:brightness-110 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #E98B98 0%, #D4707F 60%, #C7616F 100%)' }}
            >
              <MessageCircle className="w-4 h-4 text-[#0D0C0D]/80" />
              <span>{lang === "en" ? "ASK VIA WHATSAPP" : "TANYA VIA WHATSAPP"}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
