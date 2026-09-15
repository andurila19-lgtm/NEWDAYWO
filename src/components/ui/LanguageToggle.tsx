"use client";

import { useLanguage } from "@/context/LanguageContext";

interface LanguageToggleProps {
  className?: string;
}

export default function LanguageToggle({ className = "" }: LanguageToggleProps) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full bg-[#191719] border border-[#2A2629] p-0.5 text-[10px] tracking-[0.18em] font-medium uppercase select-none transition-all ${className}`}
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLang("id")}
        className={`px-2.5 py-1 rounded-full transition-all duration-300 focus:outline-none ${
          lang === "id"
            ? "bg-[#E98B98] text-[#0D0C0D] font-bold shadow-sm"
            : "text-[#B7AAA9] hover:text-[#F7F3F1]"
        }`}
        aria-pressed={lang === "id"}
      >
        ID
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-2.5 py-1 rounded-full transition-all duration-300 focus:outline-none ${
          lang === "en"
            ? "bg-[#E98B98] text-[#0D0C0D] font-bold shadow-sm"
            : "text-[#B7AAA9] hover:text-[#F7F3F1]"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
