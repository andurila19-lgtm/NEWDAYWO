"use client";

import { useLanguage } from "@/context/LanguageContext";

interface LanguageToggleProps {
  className?: string;
}

export default function LanguageToggle({ className = "" }: LanguageToggleProps) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] font-medium uppercase select-none ${className}`}
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLang("id")}
        className={`transition-colors py-0.5 px-1 focus:outline-none ${
          lang === "id"
            ? "text-[#E98B98] font-bold"
            : "text-[#B7AAA9]/70 hover:text-[#F7F3F1]"
        }`}
        aria-pressed={lang === "id"}
      >
        ID
      </button>
      <span className="text-[#B7AAA9]/40 text-[9px]">|</span>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`transition-colors py-0.5 px-1 focus:outline-none ${
          lang === "en"
            ? "text-[#E98B98] font-bold"
            : "text-[#B7AAA9]/70 hover:text-[#F7F3F1]"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
