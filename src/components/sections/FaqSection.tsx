"use client";

import { useState } from "react";
import { faqItemsId, faqItemsEn } from "@/data/faq";
import { useLanguage } from "@/context/LanguageContext";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-01");
  const { t, lang } = useLanguage();

  const currentFaqItems = lang === "en" ? faqItemsEn : faqItemsId;

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative w-full bg-[#F7F3F1] text-[#0D0C0D] py-16 sm:py-24 lg:py-32 border-t border-[#B7AAA9]/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E98B98] block mb-2 sm:mb-3">
            {t.faq.eyebrow}
          </span>
          <h2
            className="font-editorial font-normal leading-[1.08] text-[#0D0C0D] tracking-tight"
            style={{ fontSize: "clamp(2rem, 6vw, 3.75rem)" }}
          >
            {t.faq.title1}
            <br />
            <span className="italic text-[#E98B98]">{t.faq.titleAccent}</span>
          </h2>
        </div>

        {/* Refined Accordion List */}
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
      </div>
    </section>
  );
}
